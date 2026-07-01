import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { services, siteConfig } from '@/lib/constants'

type Props = {
  params: { slug: string }
}

// Pre-renders every service page at build time for fast static delivery and SEO.
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}

  return {
    title: service.name,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | ${siteConfig.shortName}`,
      description: service.shortDescription,
    },
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  // FAQPage structured data, only emitted when the service has FAQs.
  const faqStructuredData =
    service.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: service.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }
      : null

  return (
    <>
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      )}

      <section className="bg-brand-ink-800 px-6 py-16 lg:px-10">
        <div className="container-max max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mocha-400">Service</p>
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{service.name}</h1>
          <p className="text-sm leading-relaxed text-gray-400">{service.overview}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-lg font-bold text-brand-ink-800">Benefits</h2>
            <ul className="mb-8 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-red-500" />
                  {benefit}
                </li>
              ))}
            </ul>

            {service.faqs.length > 0 && (
              <>
                <h2 className="mb-4 text-lg font-bold text-brand-ink-800">Frequently asked questions</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-lg border border-gray-200 p-4">
                      <p className="mb-1 text-sm font-bold text-brand-ink-800">{faq.question}</p>
                      <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="rounded-lg border border-gray-200 bg-[#f9f7f5] p-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">Industries served</h3>
            <ul className="mb-6 space-y-2">
              {service.industries.map((industry) => (
                <li key={industry} className="text-sm text-gray-700">
                  {industry}
                </li>
              ))}
            </ul>
            <Button href={`/contact?intent=quote&service=${service.slug}`} className="w-full">
              Request a quote
            </Button>
          </aside>
        </div>
      </section>
    </>
  )
}
