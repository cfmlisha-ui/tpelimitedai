'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from '@/components/ui/Button'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/industries', label: 'Industries' },
  { href: '/clients', label: 'Clients' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-2 border-brand-red-500 bg-brand-ink-800">
      <div className="container-max flex h-16 items-center justify-between px-6 lg:px-10">
        <Logo variant="dark" />

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wide text-gray-300 transition-colors hover:text-brand-red-500"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact?intent=quote" size="sm">
            Get a quote
          </Button>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="text-white lg:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-brand-ink-600 bg-brand-ink-800 px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-wide text-gray-300 hover:text-brand-red-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <div onClick={() => setIsOpen(false)}>
                <Button href="/contact?intent=quote" className="w-full">
                  Get a quote
                </Button>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
