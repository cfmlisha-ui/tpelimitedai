import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Button from '@/components/ui/Button'
import { articles } from '@/lib/articles'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((a) => a.slug === params.slug)
  if (!article) notFound()

  return (
    <article className="section-padding bg-white">
      <div className="container-max max-w-2xl">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wide text-brand-red-500">{article.category}</p>
        <h1 className="mb-3 text-2xl font-bold text-brand-ink-800 sm:text-3xl">{article.title}</h1>
        <p className="mb-8 text-xs text-gray-400">{article.readTime}</p>

        <p className="mb-6 text-sm leading-relaxed text-gray-600">{article.excerpt}</p>

        {/* TODO: replace with full article body content once supplied / migrated to CMS. */}
        <div className="rounded-lg border border-gray-200 bg-[#f9f7f5] p-6 text-sm text-gray-500">
          Full article content for this guide is coming soon. In the meantime, contact our team directly for
          tailored advice on this topic.
        </div>

        <div className="mt-8">
          <Button href="/contact?intent=quote">Request a quote</Button>
        </div>
      </div>
    </article>
  )
}
