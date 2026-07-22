# Deployment guide

This project is a standard Next.js 14 App Router application and deploys
cleanly to either Vercel or Netlify.

## Option A: Vercel (recommended)

Vercel is built by the Next.js team and has zero-config support for App
Router, image optimization, and server actions.

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js \u2014 no build settings need changing.
4. Add environment variables from `.env.example` under **Project Settings \u2192
   Environment Variables**. At minimum, set `NEXT_PUBLIC_SITE_URL` to your
   production domain.
5. Click **Deploy**.
6. Once deployed, go to **Project Settings \u2192 Domains** and add your custom
   domain (e.g. `www.thepestexterminator.co.ke`), then update your domain's
   DNS records as instructed.

Subsequent pushes to your main branch auto-deploy.

## Option B: Netlify

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [app.netlify.com](https://app.netlify.com) and create a new site
   from Git.
3. Install the **Next.js Runtime** plugin (Netlify auto-suggests this for
   Next.js projects) \u2014 it handles server actions and image optimization.
4. Build command: `npm run build`. Publish directory: `.next` (the Next.js
   Runtime plugin manages this automatically).
5. Add environment variables under **Site configuration \u2192 Environment
   variables**, matching `.env.example`.
6. Click **Deploy site**, then attach your custom domain under **Domain
   management**.

## Post-deployment checklist

- [ ] Confirm `NEXT_PUBLIC_SITE_URL` matches the live domain (affects
      sitemap.xml, robots.txt, and Open Graph tags)
- [ ] Submit `https://yourdomain.com/sitemap.xml` to Google Search Console
- [ ] Verify the Google Maps embed renders correctly on the live domain
- [ ] Test the quote, inspection, and contact forms end-to-end
- [ ] Run a Lighthouse audit on the live URL (not localhost) for accurate
      Performance/SEO/Accessibility scores
- [ ] Set up a Google Business Profile and link it once the domain is live
- [ ] Connect a real domain SSL certificate (automatic on both Vercel and
      Netlify)

## Future: connecting real backend integrations

When you are ready to wire up real email/CRM/WhatsApp/SMS notifications
(currently stubbed in `lib/actions.ts`), most providers (Resend, SendGrid,
Africa's Talking, Twilio, WhatsApp Business API) require their API keys to
be added as environment variables on whichever platform you deploy to, then
referenced in `lib/actions.ts`. No other code changes should be needed
elsewhere in the app.
