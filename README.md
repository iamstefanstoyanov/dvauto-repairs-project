# DVMI LTD — Auto Repair Shop Website

A responsive single-page application built for a professional car and van repair garage.
Designed with a mobile-first approach, clean UI, and optimized performance to effectively showcase services, business information, and customer contact options.

## Live Demo

> **Still in development** — live URL coming soon.

## Features

- Fully responsive, mobile-first design with device detection
- Smooth single-page scroll navigation with dynamic sticky header offset
- Bilingual support (English / Bulgarian) with a built-in language switcher
- Type-safe i18n using plain TypeScript — no external translation libraries
- SEO-ready: structured metadata, Open Graph tags, `robots.txt`, and `sitemap.xml`
- Security hardened with custom HTTP headers (HSTS, X-Frame-Options, CSP, etc.)
- Custom SVG icon system — lightweight, no icon-library dependencies
- Hybrid rendering: Server Components for static content, Client Components for interactivity
- Background parallax effect with semi-transparent section overlays

## Tech Stack

| Layer       | Technology                    |
| ----------- | ----------------------------- |
| Framework   | Next.js 16 (App Router)       |
| Language    | TypeScript                    |
| UI          | React 19                      |
| Styling     | Tailwind CSS 4                |
| Linting     | ESLint with eslint-config-next|
| Deployment  | Vercel (planned)              |

## Project Structure

```
app/                  # Next.js App Router pages and root layout
components/
  Header/             # Sticky navigation header
  Footer/             # Multi-column footer with services & contact
  TopBar/             # Top info bar (email, phone, social links)
  MobileMenu/         # Mobile slide-down navigation
  Sections/           # Page sections (Home, WhatWeDo, Services, OurStaff, Contact)
  ui/                 # Reusable UI components (SectionTitle, LanguageSwitcher)
    Icons/            # Custom SVG icon components
config/               # Site-wide configuration (contact details, social links)
context/              # React Context providers (LanguageContext)
hooks/                # Custom hooks (useDevice, useTranslation)
i18n/                 # Translation strings (EN & BG)
styles/               # Global CSS
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
pnpm build
pnpm start
```

## Deployment

The app is optimized for deployment on Vercel or any Node.js-compatible hosting platform.

## License

This project is open-source and available under the [MIT License](LICENSE).
