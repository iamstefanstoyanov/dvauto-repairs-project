# DV AUTO REPAIRS LTD — Auto Repair Shop Website

A responsive single-page application built for a professional car and van repair garage. Designed with a mobile-first approach, clean UI, and optimized performance to showcase services, business information, and customer contact options.

## Live Demo

> https://dvauto-repairs.vercel.app/

## Features

- Fully responsive, mobile-first design with device detection
- Smooth single-page scroll navigation with dynamic sticky header offset
- Bilingual support (English / Bulgarian) with a built-in language switcher
- Type-safe i18n using plain TypeScript — no external translation libraries
- SEO-ready: structured metadata, Open Graph tags, `robots.txt`, and `sitemap.xml`
- Security hardened with custom HTTP headers (HSTS, X-Frame-Options, Referrer-Policy, etc.)
- Custom SVG icon system (21 icons) — lightweight, no icon-library dependencies
- Hybrid rendering: Server Components for static content, Client Components for interactivity
- Background image with semi-transparent section overlays
- Gallery and Reviews carousels powered by keen-slider

## Tech Stack

| Layer      | Technology                      |
| ---------- | ------------------------------- |
| Framework  | Next.js 16 (App Router)         |
| Language   | TypeScript 5                    |
| UI         | React 19                        |
| Styling    | Tailwind CSS 4                  |
| Utilities  | clsx + tailwind-merge           |
| Carousel   | keen-slider                     |
| Testing    | Vitest + @testing-library/react |
| Linting    | ESLint 9 (flat config)          |
| Formatting | Prettier                        |
| Git Hooks  | Husky + lint-staged             |
| CI         | GitHub Actions                  |
| Deployment | Vercel                          |

## Project Structure

```
app/
  layout.tsx            # Root layout with metadata, providers & sticky header
  page.tsx              # Single-page entry — renders all sections
  error.tsx             # Error boundary
  robots.ts             # Generated robots.txt
  sitemap.ts            # Generated sitemap.xml
components/
  Header/               # Sticky navigation header with scroll-aware active state
  Footer/               # Multi-column footer with services & contact
  TopBar/               # Top info bar — email, phone, social links (desktop only)
  Sections/
    Home.tsx             # Hero with headline and emergency CTA
    WhatWeDo.tsx         # Service cards (maintenance, brakes, suspension, diagnostics, AC, tyres)
    WhyUs.tsx            # Feature cards (engineers, experience, guarantee, trusted)
    Gallery.tsx          # Image carousel with navigation controls
    Reviews.tsx          # Review carousel with expandable text
    Contact.tsx          # Appointment, hours & emergency call cards
  ui/
    Icons/              # 21 custom SVG icon components
    Card/               # Reusable card component (service, feature, contact variants)
    LanguageSwitcher/   # EN/BG language toggle with flag icons
    MobileMenu/         # Slide-down mobile navigation
    SectionTitle/       # Reusable section heading with optional subtitle
config/                 # Site-wide configuration (contact details, social links)
context/                # React Context providers (LanguageContext)
hooks/
  useDevice.ts          # Mobile / desktop breakpoint detection
  useTranslation.ts     # Returns translation strings for the active language
  useActiveSection.ts   # IntersectionObserver-based nav highlight
i18n/                   # Translation strings (EN & BG)
styles/                 # Global CSS (Tailwind imports & CSS variables)
utils/                  # Shared utilities (cn class merger, test helpers)
public/                 # Static assets (logo, icons, background, gallery images)
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

## Scripts

| Command              | Description                     |
| -------------------- | ------------------------------- |
| `pnpm dev`           | Start development server        |
| `pnpm build`         | Build for production            |
| `pnpm start`         | Start production server         |
| `pnpm lint`          | Run ESLint                      |
| `pnpm test`          | Run tests once (colored output) |
| `pnpm test:watch`    | Run tests in watch mode         |
| `pnpm test:ui`       | Open Vitest UI in browser       |
| `pnpm test:coverage` | Run tests with coverage report  |
| `pnpm prettier:fix`  | Format code with Prettier       |

## CI / CD

**GitHub Actions** runs on every push and pull request to `main`:

1. **Lint** — `pnpm lint`
2. **Test** — `pnpm test` (requires lint to pass)

**Vercel** handles production deployments. Auto-deploy is gated on the CI pipeline — Vercel only builds and deploys once all GitHub Actions checks pass. Pull requests get preview deployments.

## Build for Production

```bash
pnpm build
pnpm start
```

## License

This project is open-source and available under the [MIT License](LICENSE).
