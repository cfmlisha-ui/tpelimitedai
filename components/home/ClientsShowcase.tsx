import SectionHeading from '@/components/ui/SectionHeading'
import { clients } from '@/lib/constants'

export default function ClientsShowcase() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading eyebrow="Our clients" title="Trusted by Kenya's leading brands" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <div key={client.name} className="rounded-lg border border-gray-200 border-l-4 border-l-brand-red-500 bg-white p-5">
              <h3 className="mb-1 text-sm font-bold text-brand-ink-800">{client.name}</h3>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-brand-red-500">
                {client.since} &middot; {client.scale}
              </p>
              <p className="text-xs leading-relaxed text-gray-600">{client.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
