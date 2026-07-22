import SectionHeading from '@/components/ui/SectionHeading'
import { accreditations } from '@/lib/constants'

export default function Accreditations() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          eyebrow="Fully accredited"
          title="Licensed and accredited to the highest industry standards"
          description="Our accreditations and regulatory licensing give clients confidence that every treatment meets recognised health, safety, and environmental standards."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {accreditations.map((item) => (
            <div key={item.short} className="rounded-lg border border-gray-200 bg-[#f9f7f5] p-5 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red-500 text-xs font-bold text-white">
                {item.short}
              </div>
              <h3 className="mb-1 text-xs font-bold text-brand-ink-800">{item.full}</h3>
              <p className="text-[11px] leading-relaxed text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
