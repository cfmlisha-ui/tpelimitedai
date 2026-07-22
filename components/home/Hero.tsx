import { Phone, MessageCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import { complianceBadges, contact } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative m-3 overflow-hidden rounded-2xl bg-brand-ink-800 px-6 py-16 sm:m-4 sm:py-20 lg:m-6 lg:px-10 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-mocha-900/60 sm:h-96 sm:w-96"
      />
      <div aria-hidden="true" className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-brand-mocha-900/60" />
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-brand-red-500" />

      <div className="container-max relative z-10 max-w-2xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-mocha-400">
          Kenya&rsquo;s trusted pest control authority since 2004
        </p>

        <h1 className="mb-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          To Solve Pest Problems{' '}
          <span className="text-brand-red-500">For Our Clients</span>
        </h1>

        <p className="mb-5 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
          Serving 400+ commercial locations across Kenya &mdash; from Java House and Naivas Supermarkets to
          government ministries. NEMA registered, HACCP compliant, with 20+ years of proven delivery.
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {complianceBadges.map((badge) => (
            <span
              key={badge.short}
              className="rounded-full border border-brand-ink-600 px-3 py-1 text-[10px] uppercase tracking-wide text-brand-mocha-400"
            >
              {badge.full}
            </span>
          ))}
        </div>

        <div className="mb-7 flex flex-wrap gap-3">
          <Button href="/contact?intent=quote">Request free quote</Button>
          <Button href="/contact?intent=inspection" variant="outline">
            Book inspection
          </Button>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href={contact.whatsappHref} variant="whatsapp" size="sm" icon={<MessageCircle size={14} />}>
            WhatsApp us
          </Button>
          <Button
            href={`tel:${contact.phonePrimaryHref}`}
            variant="primary"
            size="sm"
            className="rounded-full"
            icon={<Phone size={14} />}
          >
            Call now
          </Button>
        </div>
      </div>
    </section>
  )
}
