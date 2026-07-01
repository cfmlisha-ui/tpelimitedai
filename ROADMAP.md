# Future roadmap

This V1 is intentionally a lean brochure site focused on lead generation and
credibility. It is architected so the modules below can be added later
without rewriting the existing pages.

## How the codebase supports future growth

- **`lib/constants.ts`** centralizes company data. A future CMS or database
  can replace this file's exports without touching component code, as long
  as the same shape (arrays of `Service`, `Industry`, `ClientCase`, etc.) is
  preserved.
- **`lib/actions.ts`** is the single chokepoint for all form submissions.
  Real CRM/email/WhatsApp/SMS integrations slot in here.
- **Dynamic routes** (`[slug]` folders) already use `generateStaticParams`,
  which can be swapped for `generateStaticParams` backed by a database query
  or left as-is if content stays in code.
- **No authentication exists yet** by design (per the brief). When the
  Client Portal is built, it can live under a new `app/portal/` route group
  with its own layout, without disturbing the public marketing site.

## Planned modules (not built in V1)

| Module | Notes on integration point |
|---|---|
| Client Portal | New `app/portal/` route group with auth middleware |
| Online Payments (M-Pesa) | `MPESA_*` env vars already scaffolded in `.env.example` |
| Inspection Booking Calendar | Extend `InspectionBookingInput` in `types/forms.ts`; likely needs a calendar/availability API |
| Audit Management | New data model; could initially live in `lib/constants.ts`-style static data, then migrate to DB |
| Certificate Generation | PDF generation library (e.g. `@react-pdf/renderer`) triggered from a future admin action |
| CRM | `lib/actions.ts` TODO markers show exactly where CRM webhook calls should be added |
| Employee Portal | Separate route group + auth, similar to Client Portal |
| Admin Dashboard | New `app/admin/` route group; likely the first place a real database (`DATABASE_URL`) gets used |
| Inventory | New data model for equipment tracking (backpack sprayers, motorised blowers, etc. \u2014 see company profile equipment list) |
| Service Scheduling | Builds on the Inspection Booking Calendar above |
| Email Automation | `EMAIL_SERVICE_API_KEY` already scaffolded; trigger from `lib/actions.ts` |
| SMS Notifications | `SMS_API_KEY` / `SMS_SENDER_ID` already scaffolded |
| Analytics Dashboard | Could consume the same data source the Admin Dashboard uses |
| Quotation Generator | Extends the existing `submitQuoteRequest` action to generate a PDF/document instead of just logging |
| Digital Reports | Likely shares infrastructure with Certificate Generation |
| Invoices | Pairs with Online Payments module |
| Role-based Authentication | Needed before Client Portal, Employee Portal, or Admin Dashboard can ship |
| Mobile App API | The dynamic data in `lib/constants.ts` could be exposed via Next.js API routes (`app/api/`) once a mobile client needs it |
| Document Management | Pairs with Certificate Generation and Digital Reports |

## Suggested build order

1. Database integration (`DATABASE_URL`) \u2014 unlocks almost everything below
2. Role-based authentication \u2014 required before any portal work
3. CRM + email automation \u2014 highest immediate ROI on the existing lead forms
4. Inspection Booking Calendar \u2014 natural next step from the current static
   "preferred date" field
5. Client Portal \u2014 once auth and database exist
6. Admin Dashboard \u2014 for internal team visibility into leads and bookings
7. Remaining modules (Invoices, Certificates, Inventory, Mobile API) as
   business needs dictate
