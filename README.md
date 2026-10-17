# Portfolio — Ilias Hamlaoui

Responsive vanilla HTML, CSS and JavaScript portfolio, with French, English, German and Spanish translations. Hosted on Vercel, with a Node.js serverless contact endpoint.

## Local preview

Run `python -m http.server 8765` in this folder, then open http://localhost:8765. Static preview supports all content, navigation and PDF downloads. Sending messages requires the serverless runtime.

## Contact configuration

Configure `GMAIL_USERNAME` and `GMAIL_APP_PASSWORD` in the hosting environment. The existing `/api/contact` endpoint uses Nodemailer. Never commit credentials. Failed submissions preserve the message and display an inline error; visitors can use the direct email link.

## Content

The October 2026 refresh follows the supplied Profile.pdf: M1 CRYPTIS at Université de Limoges, Doumassi full stack experience (April–June 2026), and computer science studies at La Rochelle (2023–2026). The master end date is marked expected. Location remains La Rochelle as listed in the source profile.

The current download is `assets/docs/Profile-Ilias-Hamlaoui.pdf`, an unchanged copy of the supplied PDF. Older CV assets remain in the repository but are no longer linked. Project screenshots are supplied assets. FYC Events has been replaced by Virus, linked to https://github.com/LR-tak/Virus. Its description is based on the local C/GTK source: image viewing, executable-directory scanning, and accompanying utilities. It is labelled as a prototype; infection/control-transfer logic is still a TODO in the source.

## Validation

Checked in headless Microsoft Edge: four languages, widths 320/390/768/1024/1440px without horizontal overflow, mobile menu and Escape handling, PDF response, invalid stored-language recovery, and mocked contact success/error responses. Desktop and mobile screenshots reviewed. No live email was sent and no deployment was performed.
