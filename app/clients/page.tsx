import type { Metadata } from 'next'
import SectionHeading from '@/components/ui/SectionHeading'
import Testimonials from '@/components/home/Testimonials'
import { clients, siteConfig } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Clients',
  description: `${siteConfig.name} has served Java House, Naivas Supermarkets, Simbisa Brands, Eastmatt, and government institutions across Kenya for over a decade.`,
}

export default function ClientsPage() {
  return (
    <>
      <section className="bg-brand-ink-800 px-6 py-16 lg:px-10">
        <div className="container-max max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mocha-400">Our clients</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Long-term partnerships with Kenya&rsquo;s leading brands
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading
            eyebrow="Client portfolio"
            title="400+ locations served across four countries"
            description="The list below covers our anchor accounts. Our full company profile documents over 400 named individual sites across Kenya, South Sudan, and Rwanda."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <div
                key={client.name}
                className="rounded-lg border border-gray-200 border-l-4 border-l-brand-red-500 bg-white p-6"
              >
                <h2 className="mb-1 text-sm font-bold text-brand-ink-800">{client.name}</h2>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-brand-red-500">
                  {client.since} &middot; {client.scale}
                </p>
                <p className="text-xs leading-relaxed text-gray-600">{client.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  )
}
