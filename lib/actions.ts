'use server'

// V1 form handler: validates and logs the submission server-side.
// TODO: replace the console.log calls below with real integrations:
//   1. Email \u2014 send via Resend/SendGrid to info@tpelimited.co.ke
//   2. CRM \u2014 POST to CRM webhook/API once a CRM is selected
//   3. WhatsApp \u2014 trigger a WhatsApp Business API template message
//   4. Database \u2014 persist to DATABASE_URL once the Client Portal module exists
//
// Keeping this as a single server action (rather than scattering fetch calls
// across client components) means swapping in real integrations later only
// requires editing this one file.

import {
  quoteRequestSchema,
  inspectionBookingSchema,
  contactFormSchema,
  type QuoteRequestInput,
  type InspectionBookingInput,
  type ContactFormInput,
} from '@/types/forms'

type ActionResult = { success: true } | { success: false; error: string }

export async function submitQuoteRequest(data: QuoteRequestInput): Promise<ActionResult> {
  const parsed = quoteRequestSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Invalid form data. Check the fields and try again.' }
  }

  // TODO: forward parsed.data to email/CRM/WhatsApp integrations.
  console.log('[quote-request]', parsed.data)

  return { success: true }
}

export async function submitInspectionBooking(data: InspectionBookingInput): Promise<ActionResult> {
  const parsed = inspectionBookingSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Invalid form data. Check the fields and try again.' }
  }

  // TODO: forward parsed.data to email/CRM/booking-calendar integrations.
  console.log('[inspection-booking]', parsed.data)

  return { success: true }
}

export async function submitContactForm(data: ContactFormInput): Promise<ActionResult> {
  const parsed = contactFormSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Invalid form data. Check the fields and try again.' }
  }

  // TODO: forward parsed.data to email/CRM integrations.
  console.log('[contact-form]', parsed.data)

  return { success: true }
}
