# Sarika Arthamwar — Portfolio Website

A personal portfolio website for **Sarika Arthamwar**, Associate Program Director with 20+ years of experience in S2P transformation, AI-led delivery, and SaaS implementation.

🔗 **Live Site:** [sarikaportfolio-gilt.vercel.app](https://sarikaportfolio-gilt.vercel.app)

---

## About

This portfolio showcases my professional journey, key achievements, skills, and provides a way for recruiters and collaborators to get in touch. Built as a static HTML site with a secure serverless contact form.

---

## Features

- Responsive single-page design with smooth scroll navigation
- Animated statistics counter on load
- Interactive career timeline
- Skills & expertise showcase
- Secure contact form powered by EmailJS via a Vercel serverless function (no API keys exposed in the browser)
- Spam protection via honeypot field and rate limiting

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Fonts | Google Fonts — Playfair Display, DM Sans |
| Email Service | EmailJS |
| Serverless Function | Vercel (Node.js) |
| Hosting | Vercel |
| Version Control | GitHub |

---

## Project Structure

```
portfolio/
├── index.html          # Main portfolio page
├── vercel.json         # Vercel configuration
├── README.md           # This file
└── api/
    └── send-email.js   # Serverless function — handles contact form securely
```

---

## Contact Form — How It Works

The contact form uses a **serverless architecture** to keep API keys secure:

```
User fills form
      ↓
index.html (frontend)
      ↓  POST /api/send-email
api/send-email.js (Vercel serverless function)
      ↓  EmailJS REST API (keys stored as Vercel env vars)
Email delivered to Sarika's inbox
```

API keys are stored as **Vercel Environment Variables** and are never committed to the repository or exposed in the browser.

---

## Environment Variables

To run locally or deploy your own version, set these environment variables in Vercel:

| Variable | Description |
|---|---|
| `EMAILJS_PUBLIC_KEY` | Your EmailJS public key |
| `EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |

---

## Local Development

Since this is a plain HTML site, you can run it locally with any static server:

```bash
# Using VS Code Live Server extension — just open index.html

# Or using Python
python -m http.server 3000

# Or using Node.js
npx serve .
```

> Note: The contact form will not work locally unless you run the Vercel dev server:
> ```bash
> npm i -g vercel
> vercel dev
> ```

---

## Deployment

The site is automatically deployed via **Vercel** on every push to the `main` branch through GitHub integration.

To deploy your own copy:
1. Fork this repository
2. Import it into [Vercel](https://vercel.com)
3. Add the environment variables listed above
4. Deploy

---

## License

This project is personal and not open for reuse without permission. All content, design, and data belong to Sarika Arthamwar.

---

*Built with care · Hosted on Vercel · © 2026 Sarika Arthamwar*
