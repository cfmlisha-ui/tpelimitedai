import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FlaskConical } from 'lucide-react'
import Button from '@/components/ui/Button'
import { products, siteConfig } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Retail Products',
  description: `In-house manufactured fumigation chemicals from ${siteConfig.name}, for small and medium businesses running their own maintenance treatments.`,
}

export default function ProductsIndexPage() {
  return (
    <>
      <section className="bg-brand-ink-800 px-6 py-16 lg:px-10">
        <div className="container-max max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mocha-400">Retail products</p>
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            In-house manufactured fumigation chemicals
          </h1>
          <p className="text-sm leading-relaxed text-gray-400">
            Professionally manufactured and quality-checked to the same standard we use on our own commercial
            contracts. Suitable for small and medium businesses running their own maintenance treatments between
            our scheduled visits.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group rounded-lg border border-gray-200 border-t-[3px] border-t-brand-red-500 p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-brand-red-50">
                <FlaskConical size={20} className="text-brand-red-500" />
              </div>
              <h2 className="mb-2 text-sm font-bold text-brand-ink-800">{product.name}</h2>
              <p className="mb-3 text-xs leading-relaxed text-gray-600">{product.shortDescription}</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-brand-red-500">
                View product
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <div className="container-max mt-8">
          <Button href="/contact?intent=quote">Contact us for commercial pricing</Button>
        </div>
      </section>
    </>
  )
}
