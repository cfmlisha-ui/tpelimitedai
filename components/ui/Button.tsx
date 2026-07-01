import Link from 'next/link'
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'whatsapp'
  size?: 'sm' | 'md'
  className?: string
  icon?: ReactNode
}

// Single reusable CTA used everywhere: hero, sticky bar, forms, footers.
// Keeping this as one component means a brand colour change only happens here.
export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded font-bold uppercase tracking-wide transition-transform active:scale-95'

  const variants: Record<string, string> = {
    primary: 'bg-brand-red-500 text-white hover:bg-brand-red-600',
    outline:
      'border border-brand-mocha-300 text-brand-mocha-400 hover:bg-brand-mocha-900/10',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#1FAE53] rounded-full',
  }

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-7 py-3.5 text-xs sm:text-sm',
  }

  const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={cn(base, variants[variant], sizes[size], className)}
      >
        {icon}
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {icon}
      {children}
    </Link>
  )
}
