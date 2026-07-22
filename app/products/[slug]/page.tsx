import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { products, siteConfig } from '@/lib/constants'

type Props = {
  params: { slug: string }
}

// Pre-renders every product page at build time for fast static delivery and SEO.
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return {}

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | ${siteConfig.shortName}`,
      description: product.shortDescription,
    },
  }
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  return (
    <>
      <section className="bg-brand-ink-800 px-6 py-16 lg:px-10">
        <div className="container-max max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mocha-400">Retail product</p>
          <h1 className="mb-2 text-3xl font-bold text-white sm:text-4xl">{product.name}</h1>
          <p className="mb-4 text-sm font-semibold text-brand-red-500">{product.headline}</p>
          <p className="text-sm leading-relaxed text-gray-400">{product.overview}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-lg font-bold text-brand-ink-800">Benefits</h2>
            <ul className="space-y-3">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-red-500" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-lg border border-gray-200 bg-[#f9f7f5] p-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">Suitable for</h3>
            <ul className="mb-6 space-y-2">
              {product.suitableFor.map((customer) => (
                <li key={customer} className="text-sm text-gray-700">
                  {customer}
                </li>
              ))}
            </ul>
            <Button href={`/contact?intent=quote&product=${product.slug}`} className="w-full">
              {product.ctaLabel}
            </Button>
          </aside>
        </div>
      </section>
    </>
  )
}
