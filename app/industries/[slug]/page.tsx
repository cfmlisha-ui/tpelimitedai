import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { industries, services, siteConfig } from '@/lib/constants'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const industry = industries.find((i) => i.slug === params.slug)
  if (!industry) return {}

  return {
    title: `Pest Control for ${industry.name}`,
    description: `${siteConfig.name} provides specialised pest management for the ${industry.name.toLowerCase()} sector in Kenya.`,
  }
}

export default function IndustryDetailPage({ params }: Props) {
  const industry = industries.find((i) => i.slug === params.slug)
  if (!industry) notFound()

  const recommended = services.filter((s) => industry.recommendedServices.includes(s.slug))

  return (
    <>
      <section className="bg-brand-ink-800 px-6 py-16 lg:px-10">
        <div className="container-max max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mocha-400">Industry</p>
          <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl">Pest control for {industry.name}</h1>
          <p className="text-sm text-brand-mocha-400">Example client: {industry.exampleClient}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-lg font-bold text-brand-ink-800">Common pest challenges</h2>
            <ul className="mb-8 space-y-3">
              {industry.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-red-500" />
                  {challenge}
                </li>
              ))}
            </ul>

            <h2 className="mb-4 text-lg font-bold text-brand-ink-800">Compliance needs</h2>
            <ul className="space-y-3">
              {industry.complianceNeeds.map((need) => (
                <li key={need} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-red-500" />
                  {need}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-lg border border-gray-200 bg-[#f9f7f5] p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-500">Recommended services</h3>
            <ul className="mb-6 space-y-2">
              {recommended.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center justify-between text-sm font-semibold text-brand-ink-800 hover:text-brand-red-500"
                  >
                    {service.name}
                    <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
            <Button href={`/contact?intent=quote&industry=${industry.slug}`} className="w-full">
              Request a quote
            </Button>
          </aside>
        </div>
      </section>
    </>
  )
}
