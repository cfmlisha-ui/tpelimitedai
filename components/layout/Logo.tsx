import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/constants'

type LogoProps = {
  variant?: 'light' | 'dark'
  className?: string
}

// Uses the supplied logo artwork (public/images/logo.jpg).
// TODO: replace with a transparent-background PNG/SVG export of the same
// design once available \u2014 the current file is a flattened JPG with a
// white background, which is why it sits on a white chip below rather than
// directly on dark nav/footer backgrounds.
export default function Logo({ variant = 'dark', className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className ?? ''}`} aria-label={`${siteConfig.name} home`}>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-1 sm:h-14 sm:w-14">
        <Image
          src="/images/logo.jpg"
          alt={`${siteConfig.name} logo`}
          width={120}
          height={120}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`text-sm font-bold tracking-tight sm:text-base ${
            variant === 'dark' ? 'text-white' : 'text-brand-ink-800'
          }`}
        >
          The Pest Exterminator
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-mocha-400 sm:text-[11px]">
          Company Limited &middot; Est. {siteConfig.founded}
        </span>
      </span>
    </Link>
  )
}
