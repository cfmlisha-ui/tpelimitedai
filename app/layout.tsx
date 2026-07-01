import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/constants'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyContactBar from '@/components/layout/StickyContactBar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Pest Control Nairobi, Kenya`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    'pest control Nairobi',
    'fumigation services Kenya',
    'termite control Nairobi',
    'pest inspection services Kenya',
    'pest exterminator Kenya',
    'commercial pest control Nairobi',
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Pest Control Nairobi, Kenya`,
    description: siteConfig.description,
    // TODO: replace with a real Open Graph image once final brand photography is supplied
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Pest Control Nairobi, Kenya`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyContactBar />
      </body>
    </html>
  )
}
