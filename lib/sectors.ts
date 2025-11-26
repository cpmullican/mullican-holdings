export interface Sector {
  numeral: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  extendedDescription: string;
  investmentCriteria: string[];
  idealCharacteristics: string[];
  relatedHoldings?: string[];
}

export const sectors: Sector[] = [
  {
    numeral: "I",
    name: "Media & Communications",
    slug: "media-communications",
    tagline: "Shaping how stories are told and shared",
    description:
      "We seek media businesses with loyal audiences, distinctive voices, and sustainable business models that can compound value over decades.",
    extendedDescription:
      "In an era of fragmented attention and algorithmic distribution, we believe the most valuable media properties are those built on genuine trust and editorial distinction. We look for businesses that have cultivated deep relationships with their audiences—whether through journalism, entertainment, or specialized content—and possess the operational discipline to evolve without compromising their core identity. Our approach favors businesses where quality and authenticity drive engagement over scale-at-all-costs strategies.",
    investmentCriteria: [
      "Established audience with measurable engagement and loyalty",
      "Clear editorial or content differentiation",
      "Multiple revenue streams or path to diversification",
      "Strong brand reputation and trust",
      "Defensible market position",
    ],
    idealCharacteristics: [
      "Subscription or membership-based revenue models",
      "Niche expertise with devoted readership",
      "Legacy publications with modernization potential",
      "Regional or local media with community ties",
      "B2B content and trade publications",
    ],
    relatedHoldings: ["galactic"],
  },
  {
    numeral: "II",
    name: "Education & Learning Systems",
    slug: "education-learning",
    tagline: "Building institutions that transform potential",
    description:
      "Education businesses that combine proven pedagogical methods with operational excellence create lasting value by developing human capital.",
    extendedDescription:
      "We believe education is one of the most meaningful sectors for long-term value creation. The best educational institutions don't just transfer knowledge—they transform individuals and communities. We seek businesses that have demonstrated consistent outcomes, maintain high standards, and possess the infrastructure to scale thoughtfully. Whether serving K-12 students, professional learners, or specialized skill development, we look for operators who understand that educational quality and business sustainability reinforce each other.",
    investmentCriteria: [
      "Proven track record of student outcomes",
      "Accreditation and regulatory compliance",
      "Experienced leadership with educational background",
      "Scalable curriculum or methodology",
      "Strong reputation among students and employers",
    ],
    idealCharacteristics: [
      "Vocational and trade schools with job placement programs",
      "Test preparation and tutoring services",
      "Professional certification programs",
      "Specialized training academies",
      "Educational technology with proven efficacy",
    ],
  },
  {
    numeral: "III",
    name: "Property & Hospitality",
    slug: "property-hospitality",
    tagline: "Creating spaces where experiences endure",
    description:
      "We invest in hospitality and property businesses where location, service culture, and operational precision create memorable experiences.",
    extendedDescription:
      "Great hospitality businesses understand that they're not selling rooms or meals—they're creating memories and facilitating experiences. We seek properties and hospitality operators with distinctive character, whether through historic significance, unique locations, or exceptional service cultures. Our focus is on businesses where thoughtful renovation, operational improvement, and brand stewardship can unlock significant value without sacrificing the authenticity that makes each property special.",
    investmentCriteria: [
      "Distinctive property or location advantages",
      "Established reputation and guest loyalty",
      "Clear operational improvement opportunities",
      "Sustainable competitive positioning",
      "Strong management team or partnership potential",
    ],
    idealCharacteristics: [
      "Boutique hotels with character and history",
      "Event venues with destination appeal",
      "Hospitality businesses in secondary markets",
      "Properties with underutilized potential",
      "Food and beverage concepts with expansion capacity",
    ],
  },
  {
    numeral: "IV",
    name: "Private Client Services",
    slug: "private-client-services",
    tagline: "Serving those who value discretion and excellence",
    description:
      "Service businesses built on trust, discretion, and personalized attention create enduring client relationships that compound over generations.",
    extendedDescription:
      "The most valuable service relationships are those where the provider becomes indispensable through consistent excellence and deep understanding of client needs. We seek businesses serving high-net-worth individuals, families, and institutions where reputation, discretion, and quality of service matter more than price. These businesses often operate through referral networks and multi-generational client relationships, creating natural barriers to competition and strong recurring revenue.",
    investmentCriteria: [
      "High client retention and satisfaction",
      "Referral-based growth model",
      "Specialized expertise and credentials",
      "Discretion and confidentiality protocols",
      "Strong recurring revenue characteristics",
    ],
    idealCharacteristics: [
      "Wealth management and family office services",
      "Estate planning and fiduciary services",
      "Concierge and lifestyle management",
      "Specialty legal and advisory practices",
      "Art advisory and collection management",
    ],
  },
  {
    numeral: "V",
    name: "Professional Services",
    slug: "professional-services",
    tagline: "Where expertise meets operational excellence",
    description:
      "Professional service firms with deep domain expertise and strong client relationships benefit from hands-on operational improvement.",
    extendedDescription:
      "Professional services businesses often reach inflection points where the founders' expertise has built something valuable, but scaling requires different capabilities. We partner with firms that have established market positions and strong client relationships but lack the operational infrastructure, management processes, or succession planning to reach their full potential. Our operating approach adds particular value in these situations, bringing systematic improvement to businesses built on expertise.",
    investmentCriteria: [
      "Demonstrated domain expertise and track record",
      "Strong client relationships and retention",
      "Clear operational improvement opportunities",
      "Scalable service delivery model",
      "Founder transition or succession needs",
    ],
    idealCharacteristics: [
      "Specialized consulting and advisory firms",
      "Technical and engineering services",
      "Healthcare and medical practices",
      "Accounting and financial services",
      "Marketing and creative agencies",
    ],
  },
  {
    numeral: "VI",
    name: "Heritage & Craft Brands",
    slug: "heritage-craft-brands",
    tagline: "Preserving traditions while building futures",
    description:
      "Brands built on craftsmanship, heritage, and authenticity possess intangible value that careful stewardship can compound over time.",
    extendedDescription:
      "In a world of commoditization, businesses with genuine heritage, artisanal quality, and authentic stories command premium positions and loyal customers. We seek brands where the provenance, craftsmanship, or tradition represents real differentiation—not just marketing. Our role is to be thoughtful stewards who can modernize operations, expand distribution, and strengthen the brand while preserving the authenticity that makes these businesses special. We're particularly drawn to businesses where the previous owners care deeply about the legacy they're passing on.",
    investmentCriteria: [
      "Genuine heritage or provenance story",
      "Demonstrated craft or quality differentiation",
      "Loyal customer base and brand recognition",
      "Potential for thoughtful expansion",
      "Alignment with owner on stewardship values",
    ],
    idealCharacteristics: [
      "Artisanal food and beverage producers",
      "Heritage apparel and accessories brands",
      "Traditional craft manufacturers",
      "Regional specialty products",
      "Family businesses with succession needs",
    ],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((sector) => sector.slug === slug);
}

export function getAllSectorSlugs(): string[] {
  return sectors.map((sector) => sector.slug);
}

