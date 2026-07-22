import Link from 'next/link'
import { ArrowRight, Bug, ClipboardCheck, SearchCheck, Wind, Rat, Shield, Trees } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { services } from '@/lib/constants'

const icons = [Bug, ClipboardCheck, SearchCheck, Wind, Rat, Shield, Trees]

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-brand-ink-800">
      <div className="container-max">
        <SectionHeading
          eyebrow="What we do"
          title="Comprehensive pest management for every environment"
          light
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index] ?? Bug
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-lg border border-brand-ink-600 border-t-[3px] border-t-brand-red-500 bg-brand-ink-700 p-6 transition-colors hover:border-brand-red-500"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-brand-red-900/40">
                  <Icon size={20} className="text-brand-red-500" />
                </div>
                <h3 className="mb-2 text-sm font-bold text-white">{service.name}</h3>
                <p className="mb-3 text-xs leading-relaxed text-gray-400">{service.shortDescription}</p>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-brand-red-500">
                  Learn more
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
