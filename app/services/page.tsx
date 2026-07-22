import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Bug, ClipboardCheck, SearchCheck, Wind, Rat, Shield, Trees } from 'lucide-react'
import { services, siteConfig } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Services',
  description: `Explore the full range of pest control, fumigation, audit, and landscaping services offered by ${siteConfig.name}.`,
}

const icons = [Bug, ClipboardCheck, SearchCheck, Wind, Rat, Shield, Trees]

export default function ServicesIndexPage() {
  return (
    <>
      <section className="bg-brand-ink-800 px-6 py-16 lg:px-10">
        <div className="container-max max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mocha-400">Our services</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Comprehensive pest management, audit, and grounds services
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Bug
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-lg border border-gray-200 border-t-[3px] border-t-brand-red-500 p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-brand-red-50">
                  <Icon size={20} className="text-brand-red-500" />
                </div>
                <h2 className="mb-2 text-sm font-bold text-brand-ink-800">{service.name}</h2>
                <p className="mb-3 text-xs leading-relaxed text-gray-600">{service.shortDescription}</p>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-brand-red-500">
                  View service
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
