import SectionHeading from '@/components/ui/SectionHeading'
import { processSteps } from '@/lib/constants'

export default function ProcessOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading eyebrow="How it works" title="From enquiry to certificate — four steps" />
        <div className="grid grid-cols-1 divide-y divide-gray-200 rounded-lg border border-gray-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="p-6 text-center">
              <span className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-red-500 text-xs font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mb-1 text-xs font-bold text-brand-ink-800">{step.title}</h3>
              <p className="text-[11px] leading-relaxed text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
