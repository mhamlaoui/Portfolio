const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const contact = require('../api/contact');
const config = require('../vercel.json');
const root = path.resolve(__dirname, '../public');
const mime = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.png':'image/png', '.jpg':'image/jpeg', '.webp':'image/webp', '.woff2':'font/woff2', '.pdf':'application/pdf', '.ttf':'font/ttf', '.txt':'text/plain; charset=utf-8' };
const server = http.createServer(async (req,res) => {
  for (const {key,value} of config.headers[0].headers) {
    if (key !== 'Strict-Transport-Security') res.setHeader(key,value);
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); return res.end(); }
  if (pathname === '/api/contact') {
    try { return await contact(req,res); }
    catch { res.writeHead(503, {'Content-Type':'application/json'}); return res.end('{"success":false,"code":"unavailable"}'); }
  }
  if (!['GET','HEAD'].includes(req.method)) { res.writeHead(405); return res.end(); }
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
    return res.end(fs.readFileSync(path.join(root,'404.html')));
  }
  res.setHeader('Content-Type',mime[path.extname(file)] || 'application/octet-stream');
  res.setHeader('Cache-Control','no-store');
  if (req.method === 'HEAD') return res.end();
  fs.createReadStream(file).pipe(res);
});
server.requestTimeout = 15000;
server.headersTimeout = 10000;
server.listen(8765, '127.0.0.1', () => console.log('Portfolio: http://127.0.0.1:8765 — local mail is disabled unless production configuration matches.'));
