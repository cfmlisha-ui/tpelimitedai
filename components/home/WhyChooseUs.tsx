import SectionHeading from '@/components/ui/SectionHeading'

const reasons = [
  {
    title: 'PhD-led research and delivery',
    body: 'Our MD Prof. Billy Kariaga holds a PhD in Entomology. Every treatment protocol is evidence-based, not guesswork. We employ dedicated scientists in insect and environmental health sciences.',
  },
  {
    title: '400+ locations \u2014 zero compromises',
    body: '82 Java House outlets, 363 Naivas branches, Simbisa Brands since 2012. These are not one-off jobs \u2014 they are long-term contracts built on consistent, professional delivery.',
  },
  {
    title: 'Full regulatory compliance',
    body: 'NEMA registered. HACCP certified. Compliant with Public Health Act Cap 242, OHS Act 2007, the Food, Drugs and Chemical Substances Act Cap 254, and EMKA-NEMA 1999.',
  },
  {
    title: 'We work around your schedule',
    body: 'Night-time service available to eliminate disruption. Flexible rescheduling, proper signage, PPE use, and waste management on every job, with minimal impact on client operations.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#f9f7f5]">
      <div className="container-max">
        <SectionHeading eyebrow="Why choose us" title="What sets us apart from every other provider" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red-500 text-xs font-bold text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="mb-1 text-sm font-bold text-brand-ink-800">{reason.title}</h3>
                <p className="text-xs leading-relaxed text-gray-600">{reason.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
