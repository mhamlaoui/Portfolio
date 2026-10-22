'use strict';
const isEmail = require('validator/lib/isEmail');
const MAX_BYTES = 24000;
function validEmail(value) {
  return typeof value === 'string' && value.length <= 254 && !/[\r\n\0]/.test(value) &&
    isEmail(value, { allow_display_name: false, allow_utf8_local_part: false, require_tld: true });
}

function validate(body) {
  if (!body || Array.isArray(body) || typeof body !== 'object') return null;
  const allowed = ['name', 'email', 'subject', 'message', 'website'];
  if (Object.keys(body).some(key => !allowed.includes(key))) return null;
  const values = {};
  for (const key of allowed) {
    const value = body[key] ?? '';
    if (typeof value !== 'string') return null;
    values[key] = value.trim();
  }
  if (!validEmail(values.email) || values.name.length > 120 || values.subject.length > 200 ||
      values.message.length < 10 || values.message.length > 5000 || values.website.length > 200) return null;
  if (/[\x00-\x1f\x7f]/.test(values.name + values.subject + values.email)) return null;
  if (/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(values.message)) return null;
  return values;
}

function config(env) {
  try {
    const origin = new URL(env.SITE_ORIGIN);
    if (origin.protocol !== 'https:' || origin.origin !== env.SITE_ORIGIN ||
        !env.BREVO_API_KEY || !validEmail(env.CONTACT_FROM) || !validEmail(env.CONTACT_TO)) return null;
    return { origin: origin.origin };
  } catch { return null; }
}

async function readBody(req) {
  const declared = req.headers['content-length'];
  if (declared && (!/^\d+$/.test(declared) || Number(declared) > MAX_BYTES)) throw new Error('large');
  // Vercel may already have parsed the body; its platform body limit also applies.
  if (req.body !== undefined) {
    const serialized = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    if (Buffer.byteLength(serialized) > MAX_BYTES) throw new Error('large');
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  }
  let size = 0; const chunks = [];
  for await (const chunk of req) {
    size += Buffer.byteLength(chunk);
    if (size > MAX_BYTES) throw new Error('large');
    chunks.push(Buffer.from(chunk));
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

function createContactHandler({ env = process.env, fetchImpl = (...args) => fetch(...args) } = {}) {
  return async function contact(req, res) {
    const reply = (status, code) => {
      res.statusCode = status;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify({ success: code === 'accepted', code }));
    };
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return reply(405, 'method'); }
    if (!/^application\/json(?:\s*;\s*charset=utf-8)?$/i.test(req.headers['content-type'] || '')) return reply(415, 'type');
    const settings = config(env);
    if (!settings) return reply(503, 'unavailable');
    if (req.headers.origin !== settings.origin ||
        (req.headers['sec-fetch-site'] && req.headers['sec-fetch-site'] !== 'same-origin')) return reply(403, 'origin');
    let input;
    try { input = validate(await readBody(req)); }
    catch (error) { return reply(error.message === 'large' ? 413 : 400, 'invalid'); }
    if (!input || input.website) return reply(400, 'invalid');
    let response;
    try {
      response = await fetchImpl('https://api.brevo.com/v3/smtp/email', {
        method: 'POST', redirect: 'error', signal: AbortSignal.timeout(10000),
        headers: { 'api-key': env.BREVO_API_KEY, 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          sender: { name: 'Portfolio — Ilias Hamlaoui', email: env.CONTACT_FROM },
          to: [{ email: env.CONTACT_TO }], replyTo: { email: input.email, ...(input.name ? { name: input.name } : {}) },
          subject: `[Portfolio] ${input.subject || 'Prise de contact'}`,
          textContent: `Nom : ${input.name || 'Non précisé'}\nEmail : ${input.email}\n\n${input.message}`
        })
      });
    } catch { return reply(502, 'uncertain'); } // Provider may already have accepted the email; never retry automatically.
    if (response.status === 429) { res.setHeader('Retry-After', '60'); return reply(429, 'limited'); }
    if (response.status >= 400 && response.status < 500) {
      return reply(503, 'unavailable');
    }
    if (!response.ok) return reply(502, 'uncertain');
    let result;
    try { result = await response.json(); } catch { return reply(502, 'uncertain'); }
    if (typeof result.messageId !== 'string' || !result.messageId) return reply(502, 'uncertain');
    // Provider acceptance is not proof of delivery. Never automatically retry a send.
    return reply(200, 'accepted');
  };
}
module.exports = { createContactHandler, validate, MAX_BYTES };
