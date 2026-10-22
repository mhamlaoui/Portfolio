# Portfolio — Ilias Hamlaoui

Static HTML/CSS/JavaScript portfolio with French, English, German and Spanish content, local fonts and project images, and a Node.js contact endpoint.

## Run locally

Use Node 24:

```sh
npm ci
npm test
npm run dev
```

Open http://127.0.0.1:8765. The preview serves only the public build with security headers. Contact submissions report unavailable until the production services and origin are configured; no local fake success is displayed.

## Production

Read [DEPLOYMENT.md](DEPLOYMENT.md) and `.env.example`. The recommended setup is Vercel (Paris function), Brevo transactional email, and the existing Gmail inbox. The published `public/` directory excludes server source, secrets, tests and older CV assets. The API is deployed separately from `api/contact.js`.

## Content

The supplied profile is the basis for M1 CRYPTIS, Doumassi and education information. It is downloadable unchanged. Project screenshots were supplied by the owner. Virus is described from its local C/GTK source and explicitly labelled a prototype. Its thumbnail is an AI-generated conceptual illustration, labelled as an illustration rather than an application screenshot. The supplied portrait is displayed unchanged; the profile preview is rendered from the first page of the downloadable PDF.

## Privacy and security

No analytics, tracking embeds or external font/icon/flag requests. Deliberately selected language and light/dark appearance preferences are stored locally for up to 180 days. System appearance follows the device without saving a theme preference. Privacy/legal pages are linked at the form and footer. The contact API validates input, restricts origins, checks a honeypot, prevents concurrent browser submissions, and sends only plain text to a fixed recipient. See the deployment guide for operator obligations, provider retention/transfers and remaining live verification.
