# The Pest Exterminator Company Limited - Corporate Website

Official Version 1 (MVP) corporate website for The Pest Exterminator Company
Limited, Nairobi, Kenya. Built as a lead-generation brochure site with a
scalable architecture designed to grow into a full client portal without
major rewrites.

## Tech stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Animation:** Framer Motion (light usage only, per brief)

## Project structure

```
app/                  Next.js App Router pages (one folder per route)
  about/
  services/[slug]/    Dynamic service detail pages (statically generated)
  industries/[slug]/  Dynamic industry detail pages (statically generated)
  resources/[slug]/   Dynamic article pages (statically generated)
  contact/            Multi-intent lead form page (quote / inspection / enquiry)
  sitemap.ts          Auto-generated sitemap.xml
  robots.ts           Auto-generated robots.txt
components/
  layout/             Header, Footer, Logo, sticky mobile contact bar
  home/                Homepage-only sections (Hero, StatsBar, ServicesGrid, etc.)
  forms/               LeadForm (quote / inspection / contact, intent-driven)
  ui/                  Reusable primitives (Button, SectionHeading)
  shared/              Cross-page components (GoogleMapEmbed)
lib/
  constants.ts        SINGLE SOURCE OF TRUTH for all company data
  articles.ts         Static resource/article content
  actions.ts           Server actions for form submission (TODO: wire to real CRM/email)
  utils.ts             Small helpers
types/
  forms.ts             Zod schemas + TypeScript types for all forms
public/
  images/              Logo and static images
```

## Why the data lives in `lib/constants.ts`

Every piece of real company information \u2014 contact details, client list,
team, services, compliance badges, stats \u2014 is defined once in
`lib/constants.ts` and imported everywhere it is needed (header, footer,
homepage sections, inner pages, structured data). To update a phone number,
address, or client roster, edit that one file. Nothing is hardcoded inline
in component markup.

## Getting started

See `INSTALL.md` for full setup instructions. Quick start:

```bash
npm install
cp .env.example .env.local
npm run dev
```

Visit `http://localhost:3000`.

## Deployment

See `DEPLOY.md` for Vercel/Netlify deployment instructions.

## Future roadmap

See `ROADMAP.md` for the planned modules (Client Portal, CRM, online payments,
booking calendar, admin dashboard, and more) and how the current codebase is
architected to support them without a rewrite.

## Lighthouse targets

This build targets Performance 95+, Accessibility 95+, SEO 95+, and Best
Practices 95+ on Google Lighthouse. Key techniques used: `next/image` for all
images, `next/font` for font loading, static generation (`generateStaticParams`)
for all service/industry/article pages, semantic HTML, and JSON-LD structured
data (LocalBusiness, FAQPage).

## Brand assets

The current logo (`public/images/logo.jpg`) is the supplied flattened JPG.
TODO: request a transparent-background PNG or SVG export of the same design
for cleaner placement on dark backgrounds (header/footer) without the white
chip wrapper currently used in `components/layout/Logo.tsx`.
