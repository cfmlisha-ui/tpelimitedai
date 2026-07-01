import Link from 'next/link'
import { siteConfig, contact, complianceBadges } from '@/lib/constants'

const footerColumns = [
  {
    title: 'Services',
    links: [
      { href: '/services/pest-control', label: 'Pest control' },
      { href: '/services/fumigation', label: 'Fumigation' },
      { href: '/services/pest-audit-certification', label: 'Pest audits' },
      { href: '/services/termite-control', label: 'Termite control' },
      { href: '/services/landscaping', label: 'Landscaping' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { href: '/industries/hospitality', label: 'Hospitality' },
      { href: '/industries/retail', label: 'Retail' },
      { href: '/industries/healthcare', label: 'Healthcare' },
      { href: '/industries/government', label: 'Government' },
      { href: '/industries/residential', label: 'Residential' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About us' },
      { href: '/clients', label: 'Our clients' },
      { href: '/resources', label: 'Resources' },
      { href: '/contact', label: 'Contact' },
      { href: '/contact?intent=quote', label: 'Get a quote' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-ink-800 px-6 pb-6 pt-12 text-gray-400 lg:px-10">
      <div className="container-max">
        <div className="grid grid-cols-1 gap-10 border-b border-brand-ink-600 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-1 text-sm font-bold text-white">{siteConfig.name}</p>
            <p className="mb-4 text-xs leading-relaxed text-brand-mocha-400">
              Professional pest control and environmental management. Serving Kenya and East Africa since{' '}
              {siteConfig.founded}.
            </p>
            <div className="flex flex-wrap gap-2">
              {complianceBadges.map((badge) => (
                <span
                  key={badge.short}
                  title={badge.full}
                  className="rounded border border-brand-ink-600 px-2 py-1 text-[10px] text-brand-mocha-400"
                >
                  {badge.short}
                </span>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-mocha-400">
                {column.title}
              </p>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs hover:text-brand-red-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-5 text-xs sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            {contact.address.poBox} &middot; {contact.phonePrimary}
          </p>
        </div>
      </div>
    </footer>
  )
}
