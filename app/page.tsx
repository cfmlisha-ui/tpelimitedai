import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import TrustStrip from '@/components/home/TrustStrip'
import Accreditations from '@/components/home/Accreditations'
import ServicesGrid from '@/components/home/ServicesGrid'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import RetailProducts from '@/components/home/RetailProducts'
import IndustriesStrip from '@/components/home/IndustriesStrip'
import ClientsShowcase from '@/components/home/ClientsShowcase'
import Testimonials from '@/components/home/Testimonials'
import ProcessOverview from '@/components/home/ProcessOverview'
import ContactTeaser from '@/components/home/ContactTeaser'
import { siteConfig, contact, accreditations } from '@/lib/constants'

export default function HomePage() {
  // LocalBusiness structured data for local SEO (Google Business Profile parity).
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: contact.phonePrimaryHref,
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
      addressLocality: contact.address.city,
      addressCountry: contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contact.address.lat,
      longitude: contact.address.lng,
    },
    foundingDate: String(siteConfig.founded),
    sameAs: [], // TODO: add social media profile URLs once finalized
    hasCredential: accreditations.map((item) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: item.short,
      name: item.full,
      description: item.description,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <StatsBar />
      <TrustStrip />
      <Accreditations />
      <ServicesGrid />
      <WhyChooseUs />
      <RetailProducts />
      <IndustriesStrip />
      <ClientsShowcase />
      <Testimonials />
      <ProcessOverview />
      <ContactTeaser />
    </>
  )
}
