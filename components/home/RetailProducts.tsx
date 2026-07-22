import Link from 'next/link'
import { ArrowRight, FlaskConical } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { products } from '@/lib/constants'

export default function RetailProducts() {
  return (
    <section className="section-padding bg-[#f9f7f5]">
      <div className="container-max">
        <SectionHeading
          eyebrow="Retail products"
          title="In-house manufactured fumigation chemicals, for your own maintenance programme"
          description="Professionally manufactured and quality-checked to the same standard we use on our commercial contracts. Ideal for small and medium businesses that want to run treatments between our scheduled visits."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group rounded-lg border border-gray-200 border-t-[3px] border-t-brand-red-500 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-brand-red-50">
                <FlaskConical size={20} className="text-brand-red-500" />
              </div>
              <h3 className="mb-2 text-sm font-bold text-brand-ink-800">{product.name}</h3>
              <p className="mb-3 text-xs leading-relaxed text-gray-600">{product.shortDescription}</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-brand-red-500">
                View product
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/contact?intent=quote">Contact us for commercial pricing</Button>
        </div>
      </div>
    </section>
  )
}
