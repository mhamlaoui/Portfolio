# Contact form deployment

The portfolio uses Vercel and Brevo, with Gmail as the receiving mailbox. No Redis account, database, rate-limit secret or activation flags are required.

## Vercel settings

In your existing project's Settings > Environment Variables, set these for Production:

| Name | Value |
| --- | --- |
| BREVO_API_KEY | Your Brevo API key with transactional email sending permission |
| CONTACT_FROM | iliesetudes@gmail.com |
| CONTACT_TO | im.hamlaoui@gmail.com |
| SITE_ORIGIN | Your exact public HTTPS website origin, for example https://your-portfolio.vercel.app |

SITE_ORIGIN must match the URL visitors use, with no trailing slash or path. Use your custom domain if that is the public address. Other origins, including preview URLs, are rejected. Keep the key server-side; do not give it a public frontend prefix or commit it.

Upload/push this updated code through the project's usual deployment workflow, then deploy with these environment values. Redeploying an older version of the code will retain the old Redis requirement. Old UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN, RATE_LIMIT_SECRET, CONTACT_ENABLED and PRIVACY_REVIEWED values can be removed; this version ignores them.

The supplied screenshot showed iliesetudes@gmail.com as a verified Brevo sender. Account verification and permission to send transactional email should also be active. The recipient does not need a Brevo account. The website always sends to im.hamlaoui@gmail.com; the visitor's address is used only as Reply-To.

After deployment, submit one test through the public website. Check the receiving inbox and spam folder, and confirm Reply replies to the visitor. A success message means Brevo accepted the message, not proof it arrived. No live delivery was tested during this code change.

## Protection and limits

The endpoint accepts only same-origin JSON POST requests, validates allowed fields and sizes, rejects header injection and filled honeypots, and sends plain text to a fixed recipient. Keys, message bodies and provider errors are not logged by application code. The browser disables submission while a request is pending and never automatically retries.

There is no application-level shared rate limit or persistent duplicate lock. A direct client can spoof Origin and bypass the honeypot. Vercel firewall rules can add shared abuse protection separately; none were configured in this update. This does not block email setup. A provider 429 is reported as limited. Timeouts and ambiguous responses preserve the visitor's text and warn against immediately resending, because delivery may already have occurred. Manual retries can send duplicates.

## Privacy settings

The privacy page describes Vercel, Brevo and Gmail, with no Redis storage. Confirm provider log retention and disable unnecessary email tracking/content retention in the account settings. The six-month correspondence deletion policy requires manual mailbox management. The function's Paris region does not guarantee that every provider operation remains within the EU. Removing activation flags does not certify legal compliance.

## Local verification

Use Node 24. Run `npm ci`, `npm test`, and `npm run build`. `npm run dev` serves the allowlisted public build at http://127.0.0.1:8765. The production HTTPS origin intentionally prevents local preview submissions from sending email. The API deploys separately from api/contact.js; never expose environment files as static assets.

Automated tests mock Brevo and cover configuration, method/origin/content restrictions, validation, fixed sender/recipient, honeypot rejection, provider errors, timeouts, and provider rate limits. Real account permissions, deployed settings and inbox delivery require the live test above.
