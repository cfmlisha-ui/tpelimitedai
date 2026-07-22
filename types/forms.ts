import { z } from 'zod'

// Shared enums used across quote, booking, and contact forms.
export const propertyTypes = [
  'Residential home',
  'Apartment / estate',
  'Restaurant / cafe',
  'Supermarket / retail',
  'Hotel / hospitality',
  'Warehouse',
  'School / institution',
  'Hospital / healthcare facility',
  'Office / corporate',
  'Other',
] as const

export const serviceOptions = [
  'Pest control and extermination',
  'Pest audit and certification',
  'Fumigation services',
  'Rodent control',
  'Termite and snake control',
  'Landscaping and grounds maintenance',
  'Not sure \u2014 need advice',
] as const

// Quote request form schema.
// TODO: on submit, this payload should POST to /api/quote-request, which will
// forward to CRM + email + WhatsApp once those integrations are connected.
export const quoteRequestSchema = z.object({
  name: z.string().min(2, 'Enter your full name'),
  company: z.string().optional(),
  phone: z.string().min(9, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email address'),
  location: z.string().min(2, 'Enter your location'),
  serviceRequired: z.enum(serviceOptions, {
    errorMap: () => ({ message: 'Select a service' }),
  }),
  propertyType: z.enum(propertyTypes, {
    errorMap: () => ({ message: 'Select a property type' }),
  }),
  message: z.string().optional(),
})

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>

// Inspection booking form schema.
export const inspectionBookingSchema = z.object({
  name: z.string().min(2, 'Enter your full name'),
  company: z.string().optional(),
  phone: z.string().min(9, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email address'),
  location: z.string().min(2, 'Enter your location'),
  propertyType: z.enum(propertyTypes, {
    errorMap: () => ({ message: 'Select a property type' }),
  }),
  preferredDate: z.string().min(1, 'Select a preferred date'),
  message: z.string().optional(),
})

export type InspectionBookingInput = z.infer<typeof inspectionBookingSchema>

// General contact form schema.
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Enter your full name'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(9, 'Enter a valid phone number'),
  message: z.string().min(10, 'Enter a message of at least 10 characters'),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>
