// Central source of truth for all company data used across the site.
// Sourced from: company profile (.doc), letterhead, AI master prompt brief.
// Update here once — it propagates everywhere (header, footer, schema, forms).

export const siteConfig = {
  name: 'The Pest Exterminator Company Limited',
  shortName: 'The Pest Exterminator',
  legalName: 'The Pest Exterminator Limited',
  founded: 2004,
  tagline: 'To solve pest problems for our clients',
  description:
    'Kenya\u2019s trusted pest control and environmental management company since 2004. NEMA registered, HACCP compliant, serving 400+ commercial locations across Kenya, South Sudan, and Rwanda.',
  url: 'https://www.thepestexterminator.co.ke', // TODO: replace with the live production domain
}

export const contact = {
  phonePrimary: '0740 031 099',
  phonePrimaryHref: '+254740031099',
  phoneSecondary: '0711 574 446',
  phoneSecondaryHref: '+254711574446',
  whatsappNumber: '254740031099',
  whatsappHref: 'https://wa.me/254740031099',
  email: 'info@tpelimited.co.ke',
  address: {
    line1: 'House 365, Buruburu Phase 5',
    line2: "Tongon'g Court, Katulo Road, Off Rabai Road",
    poBox: 'P.O. Box 35487-00100, Nairobi',
    city: 'Nairobi',
    country: 'Kenya',
    // TODO: confirm exact lat/lng for the Google Maps embed and JSON-LD geo coordinates
    lat: -1.2864,
    lng: 36.8772,
  },
  hours: {
    weekdays: '7:00 AM \u2013 6:00 PM',
    saturday: '8:00 AM \u2013 4:00 PM',
    sunday: 'Emergency call-outs only',
    emergencyNote: '24/7 emergency response available for corporate clients',
  },
}

export const stats = [
  { value: '20+', label: 'Years in operation' },
  { value: '400+', label: 'Locations served' },
  { value: '4', label: 'Countries' },
  { value: '100%', label: 'NEMA compliant' },
]

export const complianceBadges = [
  { short: 'NEMA', full: 'NEMA Registered' },
  { short: 'HACCP', full: 'HACCP Compliant' },
  { short: 'Cap 242', full: 'Public Health Act Cap 242' },
  { short: 'OHS 2007', full: 'Occupational Health and Safety Act 2007' },
]

export type Accreditation = {
  short: string
  full: string
  description: string
}

export const accreditations: Accreditation[] = [
  {
    short: 'PEMAK',
    full: 'Pest Management Association of Kenya',
    description: 'Registered member upholding industry best-practice standards for professional pest control.',
  },
  {
    short: 'OSHA',
    full: 'Occupational Safety and Health Act Compliant',
    description: 'Operations audited against Kenya’s Occupational Safety and Health Act 2007 to protect staff and client premises.',
  },
  {
    short: 'NEMA',
    full: 'National Environment Management Authority',
    description: 'Registered and licensed for environmentally responsible pest control and chemical handling.',
  },
  {
    short: 'EIA',
    full: 'Environmental Impact Assessment Licensed',
    description: 'Qualified to conduct Environmental Impact Assessments in line with NEMA regulatory requirements.',
  },
  {
    short: 'SIA',
    full: 'Social Impact Assessment Licensed',
    description: 'Qualified to conduct Social Impact Assessments alongside environmental compliance work.',
  },
]

export const legalCompliance = [
  'Public Health Act Cap 242',
  'Food, Drugs and Chemical Substances Act Cap 254',
  'Meat Control Act Cap 356',
  'EMKA 1999 (NEMA)',
  'General Food Law Regulation (EC) 178/2002',
  'Occupational Health and Safety Act 2007',
  'Work Injury Benefit Act 2007',
  'Labour Relations Act 2007',
]

export type Service = {
  slug: string
  name: string
  shortDescription: string
  overview: string
  benefits: string[]
  industries: string[]
  faqs: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    slug: 'pest-control',
    name: 'Pest Control and Extermination',
    shortDescription:
      'Cockroaches, bedbugs, mosquitoes, ants, fleas, and spiders. Evidence-based, health-safe methods for commercial and residential properties.',
    overview:
      'Our core pest control service makes human, pet, livestock, and wildlife environments safe and habitable. We treat cockroaches, houseflies, mosquitoes, bees, wasps, spiders, bedbugs, fleas, sugar ants, and more, using non-staining, low-odour, safe pesticides applied by trained technicians.',
    benefits: [
      'Eliminates disease transmission risk (dysentery, typhoid, malaria, plague-related vectors)',
      'Removes nuisance and discomfort for staff, customers, and residents',
      'Prevents property damage from chewing, nesting, and infestation',
      'Certificate of Treatment issued after every job',
      'Regular follow-up scouting to track pest movement patterns',
    ],
    industries: ['Hospitality', 'Retail', 'Residential', 'Healthcare', 'Food manufacturing'],
    faqs: [
      {
        question: 'How often should pest control treatment be repeated?',
        answer:
          'This depends on the property type and pest pressure, but most commercial sites are treated on a recurring schedule (monthly or quarterly) to prevent re-colonisation, with mosquito treatment often needed more frequently in vegetated areas.',
      },
      {
        question: 'Is the treatment safe for staff and customers?',
        answer:
          'Yes. We use non-staining, low-odour pesticides and follow strict health and safety protocols, including proper signage, PPE, and scheduling treatments during off-hours to avoid disrupting your operations.',
      },
    ],
  },
  {
    slug: 'pest-audit-certification',
    name: 'Pest Audit and Certification',
    shortDescription:
      'Full compliance inspections for food processing, hospitality, and retail, with detailed reports and certificates of treatment.',
    overview:
      'Our pest audit service covers residential inspections, commercial inspections, food processing facility audits, hospitality industry inspections, and pest risk assessments, all backed by detailed recommendation reports prepared by our public health officers and field supervisors.',
    benefits: [
      'Detailed written recommendation reports for management and regulators',
      'Supports HACCP and food safety compliance audits',
      'Identifies risk areas before they become infestations',
      'Certificate of Treatment for insurance and compliance records',
    ],
    industries: ['Food manufacturing', 'Hospitality', 'Healthcare', 'Government', 'Retail'],
    faqs: [
      {
        question: 'What does a pest audit report include?',
        answer:
          'A full written assessment of pest risk areas, current infestation evidence if any, recommended interventions, and a compliance summary mapped against relevant Kenyan health and safety legislation.',
      },
    ],
  },
  {
    slug: 'ipm-auditing',
    name: 'Integrated Pest Management (IPM) Auditing',
    shortDescription:
      'Full-site IPM audits combining inspection, risk assessment, compliance checks, and documented preventive recommendations for long-term pest prevention.',
    overview:
      'Our Integrated Pest Management (IPM) Auditing service takes a structured, whole-site approach to pest prevention rather than reactive treatment. Field supervisors and public health officers carry out a full site inspection, assess pest risk factors specific to your operations, check compliance against relevant health and safety legislation, and document findings in a formal report with preventive recommendations, supporting long-term pest prevention and regulatory compliance.',
    benefits: [
      'Comprehensive site inspection covering structural, sanitation, and operational risk factors',
      'Formal risk assessment identifying conditions that could lead to infestation',
      'Compliance checks against Kenyan health, safety, and environmental legislation',
      'Full written documentation suitable for regulators, auditors, and insurers',
      'Preventive recommendations that reduce reliance on reactive treatment over time',
    ],
    industries: ['Food manufacturing', 'Hospitality', 'Healthcare', 'Government', 'Warehousing'],
    faqs: [
      {
        question: 'How is IPM auditing different from a standard pest audit?',
        answer:
          'A standard pest audit focuses on identifying current pest activity and compliance gaps. IPM auditing takes a broader, ongoing prevention-focused approach: it assesses the full site environment for conditions that could cause future infestations and builds a documented, preventive management plan rather than a one-off inspection report.',
      },
      {
        question: 'Does an IPM audit support regulatory compliance?',
        answer:
          'Yes. The audit documentation is structured to support compliance checks against Kenyan health, safety, and environmental regulations, and can be used as evidence of due diligence for regulators, auditors, and insurers.',
      },
    ],
  },
  {
    slug: 'fumigation',
    name: 'Fumigation Services',
    shortDescription:
      'Commercial and residential fumigation for cereals, timber, warehouses, and food facilities. Pre- and post-construction treatments.',
    overview:
      'We provide commercial fumigation across warehouses, food storage facilities, residential buildings, and institutions. This includes fumigation of cereals and timber, plus pre-construction and post-construction treatment against termites, woodworms, and other structural pests.',
    benefits: [
      '20+ years of fumigation experience across Kenya, South Sudan, and Rwanda',
      'Motorised and manual application equipment for any site size',
      'Protects stored grain, timber, and structural integrity',
      'Flexible scheduling, including night-time fumigation for minimal disruption',
    ],
    industries: ['Warehousing', 'Food manufacturing', 'Government', 'Hospitality'],
    faqs: [
      {
        question: 'How long after fumigation can a building be re-occupied?',
        answer:
          'This varies by treatment type and chemical used. Our technicians will advise a specific re-entry time for your site as part of the service, and proper signage is used throughout to ensure safety.',
      },
    ],
  },
  {
    slug: 'rodent-control',
    name: 'Rodent Control',
    shortDescription:
      'Rats, mice, and bats. Baiting, trapping, and exclusion systems that prevent property damage and disease transmission.',
    overview:
      'Rats and mice damage stored food and property by chewing, and can even start fires by chewing electrical cables. Our rodent control programme combines baiting, trapping, and exclusion methods to eliminate existing populations and prevent re-entry.',
    benefits: [
      'Prevents disease transmission and parasite spread (fleas, mites, ticks)',
      'Protects stored goods, cabling, and structural materials',
      'Exclusion-focused approach for lasting results, not just removal',
    ],
    industries: ['Warehousing', 'Retail', 'Food manufacturing', 'Residential'],
    faqs: [],
  },
  {
    slug: 'termite-control',
    name: 'Termite and Snake Control',
    shortDescription:
      'Pre- and post-construction termite treatment, structural protection, and snake repelling for residential and commercial sites.',
    overview:
      'We undertake pre-construction and post-construction termite treatment to protect structural timber and foundations, alongside snake repelling services using specialised chemicals applied at a safe distance using motorised sprayers.',
    benefits: [
      'Protects long-term structural investment',
      'Pre-construction treatment prevents costly future remediation',
      'Snake repelling without close-contact risk to technicians or occupants',
    ],
    industries: ['Residential', 'Government', 'Hospitality', 'Property developers'],
    faqs: [],
  },
  {
    slug: 'landscaping',
    name: 'Landscaping and Grounds Maintenance',
    shortDescription:
      'Compound maintenance, lawn care, tree pruning, and garden design. Corporate landscaping contracts across Nairobi.',
    overview:
      'Beyond pest control, we offer full grounds management services including compound maintenance, garden design, lawn care, tree pruning, and ongoing corporate landscaping contracts, helping facility managers maintain a single point of contact for site upkeep.',
    benefits: [
      'Single vendor for pest control and grounds maintenance',
      'Reduces vegetation harbourage that attracts pests',
      'Improves curb appeal and corporate image',
    ],
    industries: ['Hospitality', 'Corporate offices', 'Residential estates'],
    faqs: [],
  },
]

export type Product = {
  slug: string
  name: string
  headline: string
  shortDescription: string
  overview: string
  benefits: string[]
  suitableFor: string[]
  ctaLabel: string
}

// In-house manufactured fumigation chemicals, sold direct to small and medium businesses.
export const products: Product[] = [
  {
    slug: 'proshield-insecticide-concentrate',
    name: 'ProShield Insecticide Concentrate',
    headline: 'Professional-grade residual insecticide, manufactured in-house',
    shortDescription:
      'A broad-spectrum, low-odour insecticide concentrate for crawling and flying insects, manufactured to the same standard we use on our own commercial contracts.',
    overview:
      'ProShield is our in-house manufactured residual insecticide concentrate, formulated for cockroaches, ants, flies, and other common crawling and flying insects. It is the same formulation our field technicians apply on commercial contracts, now available for businesses that want to run their own maintenance treatments between professional visits.',
    benefits: [
      'Broad-spectrum control of crawling and flying insects',
      'Low-odour, non-staining formulation safe for occupied premises',
      'Long-lasting residual protection reduces treatment frequency',
      'Manufactured and quality-checked in-house to commercial-grade standard',
    ],
    suitableFor: ['Small retail outlets and shops', 'Restaurants and cafes', 'Offices and warehouses', 'Property managers'],
    ctaLabel: 'Contact us for commercial pricing',
  },
  {
    slug: 'rodentguard-bait-blocks',
    name: 'RodentGuard Bait Blocks',
    headline: 'Weatherproof rodenticide bait blocks for ongoing rodent control',
    shortDescription:
      'Durable, weatherproof bait blocks formulated for effective rat and mouse control in and around commercial premises.',
    overview:
      'RodentGuard bait blocks are manufactured in-house for use in bait stations around warehouses, stores, and food-handling premises. The weatherproof formulation holds up in outdoor bait stations and high-humidity storage areas, supporting a consistent baiting programme between professional inspections.',
    benefits: [
      'Weatherproof, wax-based block resists humidity and rain',
      'Palatable formulation for reliable uptake',
      'Designed for use in tamper-resistant bait stations',
      'Supports ongoing rodent management between scheduled visits',
    ],
    suitableFor: ['Warehousing and storage facilities', 'Food manufacturing and retail', 'Agricultural premises', 'Estate and facility managers'],
    ctaLabel: 'Contact us for commercial pricing',
  },
  {
    slug: 'termibarrier-termiticide',
    name: 'TermiBarrier Termiticide',
    headline: 'Soil-applied termiticide for lasting structural protection',
    shortDescription:
      'A soil-applied termiticide formulated for pre- and post-construction barrier treatment against termite infestation.',
    overview:
      'TermiBarrier is our in-house manufactured soil termiticide, formulated for creating a continuous chemical barrier around foundations and structural timber. It is suited to both pre-construction ground treatment and post-construction perimeter application, giving businesses a reliable option for protecting property investments.',
    benefits: [
      'Creates a continuous barrier against subterranean termites',
      'Suitable for both pre-construction and post-construction application',
      'Long-lasting protection for structural timber and foundations',
      'Manufactured in-house to the standard used on our own contracts',
    ],
    suitableFor: ['Construction and property developers', 'Warehousing and industrial premises', 'Small and medium business owners', 'Facility managers'],
    ctaLabel: 'Contact us for commercial pricing',
  },
]

export type Industry = {
  slug: string
  name: string
  icon: string
  exampleClient: string
  challenges: string[]
  complianceNeeds: string[]
  recommendedServices: string[]
}

export const industries: Industry[] = [
  {
    slug: 'retail',
    name: 'Retail and Supermarkets',
    icon: 'store',
    exampleClient: 'Naivas, Eastmatt',
    challenges: ['High foot traffic pest entry', 'Stored food product risk', 'Multi-branch consistency'],
    complianceNeeds: ['Public Health Act Cap 242', 'HACCP'],
    recommendedServices: ['pest-control', 'pest-audit-certification', 'rodent-control'],
  },
  {
    slug: 'hospitality',
    name: 'Restaurants and Hospitality',
    icon: 'utensils',
    exampleClient: 'Java House, Simbisa Brands',
    challenges: ['Kitchen pest pressure', 'Guest-facing reputation risk', 'After-hours scheduling needs'],
    complianceNeeds: ['HACCP', 'Food, Drugs and Chemical Substances Act Cap 254'],
    recommendedServices: ['pest-control', 'fumigation', 'pest-audit-certification'],
  },
  {
    slug: 'food-manufacturing',
    name: 'Food Manufacturing',
    icon: 'factory',
    exampleClient: 'Farmers\u2019 Choice',
    challenges: ['Raw material contamination risk', 'Storage and warehousing pests', 'Strict audit cycles'],
    complianceNeeds: ['HACCP', 'General Food Law Regulation (EC) 178/2002'],
    recommendedServices: ['fumigation', 'pest-audit-certification', 'rodent-control'],
  },
  {
    slug: 'government',
    name: 'Government and Institutions',
    icon: 'landmark',
    exampleClient: 'Office of the President, KICC, NSSF',
    challenges: ['Large building footprints', 'Security-cleared access requirements', 'Public-facing standards'],
    complianceNeeds: ['Public Health Act Cap 242', 'OHS Act 2007'],
    recommendedServices: ['fumigation', 'pest-control', 'termite-control'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare Facilities',
    icon: 'cross',
    exampleClient: 'Hospitals and clinics',
    challenges: ['Zero-tolerance hygiene standards', 'Sensitive patient environments', 'Strict chemical safety needs'],
    complianceNeeds: ['Public Health Act Cap 242', 'OHS Act 2007'],
    recommendedServices: ['pest-control', 'pest-audit-certification'],
  },
  {
    slug: 'warehousing',
    name: 'Warehousing and Logistics',
    icon: 'warehouse',
    exampleClient: 'Storage and distribution centres',
    challenges: ['Stored goods damage', 'Large open spans', 'Rodent harbourage'],
    complianceNeeds: ['EMKA 1999 (NEMA)'],
    recommendedServices: ['rodent-control', 'fumigation'],
  },
  {
    slug: 'schools',
    name: 'Schools and Universities',
    icon: 'graduation-cap',
    exampleClient: 'University of Nairobi',
    challenges: ['Child and student safety', 'Term-time scheduling constraints', 'Large dormitory and dining areas'],
    complianceNeeds: ['Public Health Act Cap 242', 'OHS Act 2007'],
    recommendedServices: ['pest-control', 'rodent-control'],
  },
  {
    slug: 'residential',
    name: 'Residential Estates',
    icon: 'home',
    exampleClient: 'Homes and apartment complexes',
    challenges: ['Shared-wall pest migration', 'Garden and compound pests', 'Tenant satisfaction'],
    complianceNeeds: ['Public Health Act Cap 242'],
    recommendedServices: ['pest-control', 'termite-control', 'landscaping'],
  },
]

export type ClientCase = {
  name: string
  since: string
  scale: string
  detail: string
}

export const clients: ClientCase[] = [
  {
    name: 'Java House Limited',
    since: 'Client since 2020',
    scale: '82 outlets',
    detail:
      'Full pest management across all Java, Planet Yogurt, Kukito, and 360 Degrees outlets \u2014 Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and beyond.',
  },
  {
    name: 'Naivas Supermarkets',
    since: 'Long-term contract',
    scale: '363+ branches',
    detail:
      'Kenya-wide pest control coverage for Naivas branches from Nairobi CBD to Juja, Kisumu, Mwanzi Road, Gateway Mall, and all major locations.',
  },
  {
    name: 'Simbisa Brands Limited',
    since: 'Client since 2012',
    scale: '50+ outlets',
    detail:
      'Pizza Inn, Chicken Inn, Creamy Inn, Galitos, and Vassilis brands. Factory and HQ included. 12+ years of uninterrupted service delivery.',
  },
  {
    name: 'Eastmatt Limited',
    since: 'Client since Jan 2024',
    scale: '11 branches',
    detail:
      'Eastleigh, Tom Mboya, Mfangano, Mwea, Gilgil, Tala, Kajiado, Kitengela, River Road, and HQ \u2014 full-chain coverage.',
  },
  {
    name: 'Government of Kenya',
    since: 'Multiple ministries and agencies',
    scale: '10+ institutions',
    detail:
      'Office of the President (2023\u201324), KICC, NSSF Building, Ministry of Lands, Ministry of Water, Kenya Law Reform Commission, USAID-ADRA.',
  },
  {
    name: 'International organisations',
    since: 'Red Cross, Swissport, Tsebo',
    scale: 'Multi-site contracts',
    detail:
      'International Federation of Red Cross, Swissport Ltd, Tsebo Kenya, The Good Food Company, and Africa Uncensored among others.',
  },
]

export const team = [
  { name: 'Prof. Billy Kariaga', role: 'Managing Director', qualification: 'PhD \u2013 Entomology', experience: '20+ years' },
  { name: 'James Mugo', role: 'Public Health Officer', qualification: 'Public Health', experience: '20+ years' },
  { name: 'Sheila Kariaga', role: 'General Manager', qualification: 'MSc. Mathematics', experience: '7 years' },
  { name: 'Brian Odhiambo', role: 'Operations Manager', qualification: 'BCom', experience: '7 years' },
  { name: 'Nashon Owino', role: 'Public Health Officer', qualification: 'Dip. Environmental Health Sciences', experience: '10 years' },
  { name: 'David Okoth', role: 'Fumigation Supervisor', qualification: 'Pest Control Certification', experience: '7 years' },
]

export const testimonials = [
  {
    quote:
      'The team is exceptionally professional. They work during off-hours so there is zero disruption to our operations. Our outlets have maintained clean audit scores since we started with them.',
    author: 'Facility Manager',
    role: 'Java House Limited \u2014 82 outlets',
  },
  {
    quote:
      'HACCP compliance is non-negotiable in food retail. The Pest Exterminator understands this. Proper documentation, proper PPE, proper signage every single time. Consistent since day one.',
    author: 'Operations Manager',
    role: 'Naivas Supermarkets \u2014 nationwide',
  },
]

export const processSteps = [
  {
    title: 'Contact us',
    description: 'Call, WhatsApp, or submit a quote request. Tell us your property type and pest concern.',
  },
  {
    title: 'Site inspection',
    description: 'Our qualified technician assesses the site and provides a detailed recommendation and quotation.',
  },
  {
    title: 'Treatment',
    description: 'Scheduled at your convenience \u2014 including nights. Proper PPE, signage, and safe pesticides throughout.',
  },
  {
    title: 'Certificate issued',
    description: 'A certificate of treatment is issued. We schedule follow-up visits and ongoing monitoring.',
  },
]

export const mission =
  'We are committed to achieving the highest standard and promoting excellence in the provision of pest control in every project we undertake. At a strategic level, we strive to be the pest control company of choice and the market leader in Kenya and Africa.'

export const vision =
  'To become a leading pest control company in the world by ensuring projects are executed to international standards.'

export const coreValues = [
  { name: 'Health', description: 'Sustain a healthy environment for all.' },
  { name: 'Innovation', description: 'Continuously improve on our research findings.' },
  { name: 'Excellence', description: 'Be the best possible.' },
  { name: 'Partnerships', description: 'Optimise opportunities for quality.' },
  { name: 'Responsibility', description: 'Be accountable.' },
  { name: 'Commitment', description: 'It is not done until the client says it is.' },
  { name: 'Synergy', description: 'Tap the strength of all.' },
]
