# Installation guide

## Prerequisites

- Node.js 18.17 or later (check with `node -v`)
- npm 9 or later (check with `npm -v`)

## Steps

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Open `.env.local` and fill in real values where marked. For V1, the only
   variable that affects the live site behaviour is `NEXT_PUBLIC_SITE_URL`
   (used in metadata and the sitemap). All other variables are placeholders
   for future integrations (CRM, email, WhatsApp Business API, SMS, M-Pesa)
   and can stay blank for now \u2014 the site will run without them.

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Type-check the project** (recommended before every commit)

   ```bash
   npm run type-check
   ```

5. **Lint the project**

   ```bash
   npm run lint
   ```

6. **Build for production** (catches most remaining issues)

   ```bash
   npm run build
   npm run start
   ```

## Replacing placeholder content

| What | Where | Notes |
|---|---|---|
| Logo | `public/images/logo.jpg` | Replace with a transparent PNG/SVG when available |
| Company data (contacts, clients, team, services) | `lib/constants.ts` | Single source of truth, see README |
| Hero/section photography | Currently none \u2014 add to `public/images/` and reference with `next/image` | Search for `TODO: replace` comments |
| Google Maps pin | `lib/constants.ts` \u2192 `contact.address.lat` / `lng` | Used by `components/shared/GoogleMapEmbed.tsx` |
| Favicon | `app/favicon.ico`, `public/images/icon-192.png`, `icon-512.png` | Generated from the supplied logo; regenerate if the logo changes |

## Common issues

- **"Module not found" errors after cloning**: run `npm install` again \u2014
  the `node_modules` folder is not committed to version control.
- **Tailwind classes not applying**: confirm `tailwind.config.js` `content`
  paths match your folder structure if you rename `app/` or `components/`.
- **Form submissions do nothing visible beyond a success message**: this is
  expected in V1. See `lib/actions.ts` for the TODO markers showing where to
  wire real email/CRM/WhatsApp integrations.
