import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import { industries } from '@/lib/constants'

export default function IndustriesStrip() {
  return (
    <section className="section-padding bg-brand-ink-800">
      <div className="container-max">
        <SectionHeading eyebrow="Industries we serve" title="Every sector. Every standard." light />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="rounded-md border border-brand-ink-600 bg-brand-ink-700 p-4 text-center transition-colors hover:border-brand-red-500"
            >
              <p className="text-xs font-bold text-white">{industry.name}</p>
              <p className="mt-1 text-[11px] text-gray-500">{industry.exampleClient}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
