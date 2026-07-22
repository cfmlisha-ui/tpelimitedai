import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig, industries } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: `${siteConfig.name} serves retail, hospitality, food manufacturing, government, healthcare, warehousing, schools, and residential clients across Kenya.`,
}

export default function IndustriesIndexPage() {
  return (
    <>
      <section className="bg-brand-ink-800 px-6 py-16 lg:px-10">
        <div className="container-max max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mocha-400">Industries</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Tailored pest management for every sector</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
            >
              <h2 className="mb-1 text-sm font-bold text-brand-ink-800">{industry.name}</h2>
              <p className="mb-3 text-xs text-brand-red-500">{industry.exampleClient}</p>
              <p className="text-xs leading-relaxed text-gray-600">
                {industry.challenges.slice(0, 2).join(' \u00b7 ')}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
