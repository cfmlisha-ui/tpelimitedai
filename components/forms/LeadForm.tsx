'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Loader2 } from 'lucide-react'
import {
  quoteRequestSchema,
  inspectionBookingSchema,
  contactFormSchema,
  propertyTypes,
  serviceOptions,
  type QuoteRequestInput,
  type InspectionBookingInput,
  type ContactFormInput,
} from '@/types/forms'
import { submitQuoteRequest, submitInspectionBooking, submitContactForm } from '@/lib/actions'

type Intent = 'quote' | 'inspection' | 'contact'

type LeadFormProps = {
  intent: Intent
}

const inputClass =
  'w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm text-brand-ink-800 placeholder:text-gray-400 focus:border-brand-red-500'

const labelClass = 'mb-1.5 block text-xs font-semibold text-gray-700'
const errorClass = 'mt-1 text-xs text-red-600'

export default function LeadForm({ intent }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  if (intent === 'quote') return <QuoteForm onSuccess={() => setSubmitted(true)} setServerError={setServerError} submitted={submitted} serverError={serverError} />
  if (intent === 'inspection')
    return <InspectionForm onSuccess={() => setSubmitted(true)} setServerError={setServerError} submitted={submitted} serverError={serverError} />
  return <ContactForm onSuccess={() => setSubmitted(true)} setServerError={setServerError} submitted={submitted} serverError={serverError} />
}

type SharedFormState = {
  onSuccess: () => void
  setServerError: (msg: string | null) => void
  submitted: boolean
  serverError: string | null
}

function SuccessMessage({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-5">
      <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-green-600" />
      <div>
        <p className="text-sm font-bold text-green-800">Request received</p>
        <p className="text-sm text-green-700">{text}</p>
      </div>
    </div>
  )
}

function QuoteForm({ onSuccess, setServerError, submitted, serverError }: SharedFormState) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteRequestInput>({ resolver: zodResolver(quoteRequestSchema) })

  if (submitted) {
    return <SuccessMessage text="A member of our team will contact you with a quotation shortly." />
  }

  const onSubmit = async (data: QuoteRequestInput) => {
    setServerError(null)
    const result = await submitQuoteRequest(data)
    if (result.success) onSuccess()
    else setServerError(result.error)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">Full name</label>
          <input id="name" className={inputClass} placeholder="Jane Mwangi" {...register('name')} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="company">Company (optional)</label>
          <input id="company" className={inputClass} placeholder="Acme Retail Ltd" {...register('company')} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="phone">Phone number</label>
          <input id="phone" type="tel" className={inputClass} placeholder="0712 345 678" {...register('phone')} />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Email address</label>
          <input id="email" type="email" className={inputClass} placeholder="name@company.com" {...register('email')} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="location">Location</label>
        <input id="location" className={inputClass} placeholder="Nairobi, Westlands" {...register('location')} />
        {errors.location && <p className={errorClass}>{errors.location.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="serviceRequired">Service required</label>
          <select id="serviceRequired" className={inputClass} {...register('serviceRequired')} defaultValue="">
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.serviceRequired && <p className={errorClass}>{errors.serviceRequired.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="propertyType">Property type</label>
          <select id="propertyType" className={inputClass} {...register('propertyType')} defaultValue="">
            <option value="" disabled>Select a property type</option>
            {propertyTypes.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.propertyType && <p className={errorClass}>{errors.propertyType.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">Message (optional)</label>
        <textarea id="message" rows={4} className={inputClass} placeholder="Tell us more about your pest concern" {...register('message')} />
      </div>

      {/* TODO: wire to real file upload storage (e.g. S3/Cloudinary) once backend exists. */}
      <div>
        <label className={labelClass} htmlFor="photo">Upload a photo (optional)</label>
        <input id="photo" type="file" accept="image/*" className="block w-full text-xs text-gray-500" disabled />
        <p className="mt-1 text-[11px] text-gray-400">Photo upload coming soon &mdash; for now, please email photos directly.</p>
      </div>

      {serverError && <p className={errorClass}>{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded bg-brand-red-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-red-600 disabled:opacity-60"
      >
        {isSubmitting && <Loader2 size={16} className="animate-spin" />}
        Request quote
      </button>
    </form>
  )
}

function InspectionForm({ onSuccess, setServerError, submitted, serverError }: SharedFormState) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InspectionBookingInput>({ resolver: zodResolver(inspectionBookingSchema) })

  if (submitted) {
    return <SuccessMessage text="We will confirm your inspection date and time shortly." />
  }

  const onSubmit = async (data: InspectionBookingInput) => {
    setServerError(null)
    const result = await submitInspectionBooking(data)
    if (result.success) onSuccess()
    else setServerError(result.error)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="i-name">Full name</label>
          <input id="i-name" className={inputClass} placeholder="Jane Mwangi" {...register('name')} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="i-company">Company (optional)</label>
          <input id="i-company" className={inputClass} placeholder="Acme Retail Ltd" {...register('company')} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="i-phone">Phone number</label>
          <input id="i-phone" type="tel" className={inputClass} placeholder="0712 345 678" {...register('phone')} />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="i-email">Email address</label>
          <input id="i-email" type="email" className={inputClass} placeholder="name@company.com" {...register('email')} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="i-location">Location</label>
        <input id="i-location" className={inputClass} placeholder="Nairobi, Westlands" {...register('location')} />
        {errors.location && <p className={errorClass}>{errors.location.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="i-propertyType">Property type</label>
          <select id="i-propertyType" className={inputClass} {...register('propertyType')} defaultValue="">
            <option value="" disabled>Select a property type</option>
            {propertyTypes.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.propertyType && <p className={errorClass}>{errors.propertyType.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="i-preferredDate">Preferred inspection date</label>
          <input id="i-preferredDate" type="date" className={inputClass} {...register('preferredDate')} />
          {errors.preferredDate && <p className={errorClass}>{errors.preferredDate.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="i-message">Message (optional)</label>
        <textarea id="i-message" rows={4} className={inputClass} placeholder="Anything we should know before the visit" {...register('message')} />
      </div>

      {serverError && <p className={errorClass}>{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded bg-brand-red-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-red-600 disabled:opacity-60"
      >
        {isSubmitting && <Loader2 size={16} className="animate-spin" />}
        Book inspection
      </button>
    </form>
  )
}

function ContactForm({ onSuccess, setServerError, submitted, serverError }: SharedFormState) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({ resolver: zodResolver(contactFormSchema) })

  if (submitted) {
    return <SuccessMessage text="Thanks for reaching out. We will respond as soon as possible." />
  }

  const onSubmit = async (data: ContactFormInput) => {
    setServerError(null)
    const result = await submitContactForm(data)
    if (result.success) onSuccess()
    else setServerError(result.error)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label className={labelClass} htmlFor="c-name">Full name</label>
        <input id="c-name" className={inputClass} placeholder="Jane Mwangi" {...register('name')} />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="c-email">Email address</label>
          <input id="c-email" type="email" className={inputClass} placeholder="name@company.com" {...register('email')} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="c-phone">Phone number</label>
          <input id="c-phone" type="tel" className={inputClass} placeholder="0712 345 678" {...register('phone')} />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="c-message">Message</label>
        <textarea id="c-message" rows={5} className={inputClass} placeholder="How can we help?" {...register('message')} />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {serverError && <p className={errorClass}>{serverError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded bg-brand-red-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-red-600 disabled:opacity-60"
      >
        {isSubmitting && <Loader2 size={16} className="animate-spin" />}
        Send message
      </button>
    </form>
  )
}
