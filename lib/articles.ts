export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
}

// Static educational content for V1, per the brief ("Resources \u2014 Static for Version 1").
// TODO: when the future CMS/Resources module is built, migrate this array to a
// headless CMS or database table instead of a static constant.
export const articles: Article[] = [
  {
    slug: 'signs-of-cockroach-infestation',
    title: '5 early warning signs of a cockroach infestation',
    excerpt:
      'Cockroaches transmit serious gastrointestinal diseases like dysentery and typhoid. Here is what to look for before an infestation takes hold in your restaurant or retail space.',
    category: 'Pest prevention',
    readTime: '4 min read',
  },
  {
    slug: 'rainy-season-pest-guide',
    title: 'Rainy season pest guide for Nairobi businesses',
    excerpt:
      'Mosquitoes and termites repopulate fast during Kenya\u2019s rainy seasons. A seasonal maintenance schedule keeps your facility ahead of the problem.',
    category: 'Seasonal pest guide',
    readTime: '5 min read',
  },
  {
    slug: 'haccp-pest-control-compliance',
    title: 'What HACCP compliance means for your pest control programme',
    excerpt:
      'For food processing and hospitality businesses, pest control is a critical control point under HACCP. Here is what auditors expect to see.',
    category: 'Compliance advice',
    readTime: '6 min read',
  },
  {
    slug: 'termite-prevention-construction',
    title: 'Termite prevention during construction: what developers should know',
    excerpt:
      'Pre-construction termite treatment is far cheaper than remediation after the fact. A look at how protection should be planned into your build timeline.',
    category: 'Pest prevention',
    readTime: '5 min read',
  },
  {
    slug: 'rodent-control-warehouses',
    title: 'Rodent control for warehouses: baiting vs exclusion',
    excerpt:
      'Rats and mice damage stored goods and can even start electrical fires by chewing cables. We compare baiting and exclusion-based strategies.',
    category: 'Pest prevention',
    readTime: '4 min read',
  },
  {
    slug: 'choosing-a-pest-control-partner',
    title: 'Five questions to ask before choosing a corporate pest control partner',
    excerpt:
      'Certifications, response times, and documentation matter more than price alone. A practical checklist for facility managers.',
    category: 'Compliance advice',
    readTime: '5 min read',
  },
]
