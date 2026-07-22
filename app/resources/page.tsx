'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { articles } from '@/lib/articles'

// Static, client-filtered list for V1 ("simple searchable blog layout, static").
// TODO: replace with server-side search/pagination once articles move to a CMS.
export default function ResourcesPage() {
  const [query, setQuery] = useState('')

  const filtered = articles.filter((article) =>
    `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <section className="bg-brand-ink-800 px-6 py-16 lg:px-10">
        <div className="container-max max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-mocha-400">Resources</p>
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Pest prevention and compliance guides</h1>

          <div className="relative max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="w-full rounded-md border border-brand-ink-600 bg-brand-ink-700 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-gray-500 focus:border-brand-red-500"
              aria-label="Search resources"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          {filtered.length === 0 ? (
            <p className="text-sm text-gray-500">No articles match your search.</p>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article) => (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
                >
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-brand-red-500">
                    {article.category}
                  </p>
                  <h2 className="mb-2 text-sm font-bold text-brand-ink-800">{article.title}</h2>
                  <p className="mb-3 text-xs leading-relaxed text-gray-600">{article.excerpt}</p>
                  <span className="text-[11px] text-gray-400">{article.readTime}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
