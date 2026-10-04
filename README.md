# Saqlain Abid — Personal Portfolio

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Live](https://img.shields.io/badge/Live-saqlainabid.com-22c55e)

Personal portfolio website of **Saqlain Abid** — Web Developer, Shopify expert & AI Content Creator.

**Live site:** https://saqlainabid.com

## What's inside

- **Home** — hero, services overview, featured work, courses preview, testimonials
- **Services** — Web Development, Shopify Store Design, AI Content Creation, YouTube SEO, Social Media, Digital Products, AI Tools, Monetization
- **Courses** — YouTube Automation, TikTok Automation, Facebook Automation (curriculum, outcomes, enrollment CTA)
- **Work** — client case studies (Velzohra, Spreads.pk, Tayyib Malik)
- **About / Contact** — story, contact form (FormSubmit), WhatsApp CTA

## Tech stack

- React 19 + React Router 7
- Vite 7 with `vite-plugin-singlefile` — the whole site builds into **one self-contained `dist/index.html`**
- Framer Motion for animations, Lucide icons
- All content (services, courses, work, prompts, tools) lives in `src/data/` as plain JS — edit text without touching components

## Project structure

```
src/
  pages/        # Home, Services, Courses, Work, About, Contact, ...
  components/   # Layout, ui primitives, motion helpers
  data/         # site.js, services.js, courses.js, work.js, prompts.js, tools.js
  App.jsx       # routes
  main.jsx
  index.css
public/         # images, llms.txt, robots.txt, sitemap.xml
```

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # -> dist/index.html (single file)
```

## Deployment

The build output is a single HTML file — upload `dist/index.html` (plus `public/` assets) to any static host
(Hostinger `public_html`, Netlify, Vercel, GitHub Pages). No server needed.

## License

All rights reserved — Saqlain Abid.
