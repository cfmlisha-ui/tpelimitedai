import { Coffee, ShoppingCart, Utensils, Store, Landmark, Building2, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const trustedClients: { name: string; icon: LucideIcon }[] = [
  { name: 'Java House', icon: Coffee },
  { name: 'Naivas Supermarkets', icon: ShoppingCart },
  { name: 'Simbisa Brands', icon: Utensils },
  { name: 'Eastmatt', icon: Store },
  { name: 'Office of the President', icon: Landmark },
  { name: 'KICC', icon: Building2 },
  { name: 'NSSF', icon: ShieldCheck },
]

export default function TrustStrip() {
  return (
    <section className="border-y border-brand-mocha-100 bg-[#f7f5f3] py-5">
      <div className="mb-3 px-6 lg:px-10">
        <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-gray-400">Trusted by</span>
      </div>

      {/* Auto-scrolling marquee. Track is duplicated so the -50% loop is seamless; pauses on hover. */}
      <div className="group relative overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]">
          {[...trustedClients, ...trustedClients].map((client, index) => {
            const Icon = client.icon
            return (
              <span
                key={`${client.name}-${index}`}
                className="flex items-center gap-3 whitespace-nowrap font-display text-xl font-bold text-brand-ink-600 sm:text-2xl"
              >
                <Icon className="h-6 w-6 shrink-0 text-brand-red-500 sm:h-7 sm:w-7" aria-hidden="true" />
                {client.name}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
