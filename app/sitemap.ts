import type { MetadataRoute } from 'next'
import { siteConfig, services, industries } from '@/lib/constants'
import { articles } from '@/lib/articles'

// Next.js auto-serves this at /sitemap.xml when exported as default from app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/services', '/industries', '/clients', '/resources', '/contact'].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  )

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const industryRoutes = industries.map((industry) => ({
    url: `${siteConfig.url}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}/resources/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...articleRoutes]
}
