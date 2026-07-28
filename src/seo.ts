import { PROCEDURES, type Procedure } from '@/data/procedures';
import { DESTINATIONS, ARTICLES } from '@/data/destinations';

export const SITE = 'https://liliav.com';

export function procedureJsonLd(p: Procedure): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalProcedure',
        '@id': `${SITE}/procedures/${p.slug}#procedure`,
        name: p.name,
        alternateName: p.name.includes('(') ? p.name.split('(')[1].replace(')', '') : undefined,
        description: `${p.description} Indicative pricing across Liliav's vetted network — USA: ${p.price.usa}; Turkey: ${p.price.turkey}; Lebanon: ${p.price.lebanon} (varies by clinic and surgeon).`,
        procedureType: 'https://schema.org/ElectiveProcedure',
        bodyLocation: p.category === 'hair' ? 'Scalp' : p.category === 'breast' ? 'Breast' : p.category === 'body' ? 'Body' : p.category === 'non-surgical' ? 'Skin and soft tissue' : 'Face and head',
        provider: { '@id': `${SITE}/#medicalbusiness` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: p.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Procedures', item: `${SITE}/procedures` },
          { '@type': 'ListItem', position: 2, name: p.name, item: `${SITE}/procedures/${p.slug}` },
        ],
      },
    ],
  };
}

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  jsonld?: Record<string, unknown>;
}

const staticPages: PageMeta[] = [
  {
    path: '/',
    title: 'Liliav — Private Plastic Surgery Concierge | USA · Turkey · Lebanon',
    description: 'A premium plastic surgery broker connecting international patients with vetted, board-certified clinics. Plastic surgery Turkey, cosmetic surgery Lebanon, plastic surgery USA — medical tourism, done privately.',
  },
  {
    path: '/procedures',
    title: 'Procedures — Face, Breast, Body, Hair & Non-Surgical | Liliav',
    description: 'Explore 24+ procedures across vetted clinics in the USA, Turkey, and Lebanon: rhinoplasty, facelift, breast augmentation, tummy tuck, BBL, hair transplant and more, with transparent price guidance.',
  },
  {
    path: '/destinations',
    title: 'Destinations — Plastic Surgery in the USA, Turkey & Lebanon | Liliav',
    description: 'Compare plastic surgery destinations: the USA, Turkey, and Lebanon. Accreditation standards, clinic vetting, travel logistics and recovery environments — presented honestly.',
  },
  {
    path: '/surgeons',
    title: 'Our Surgeon Network — Vetting Standards | Liliav',
    description: 'How Liliav vets plastic surgeons: board certification verified at source, 10+ years in practice, accredited facilities, audited ethics. Meet the standard behind the network.',
  },
  {
    path: '/journey',
    title: 'The Liliav Journey — From Inquiry to Aftercare | Liliav',
    description: 'Step by step through a Liliav surgical journey: private inquiry, curated surgeon matching, concierge travel, recovery retreats, and a full year of scheduled aftercare.',
  },
  {
    path: '/results',
    title: 'Results — Transformation, Tastefully Told | Liliav',
    description: 'An understated look at aesthetic transformation: artistic silhouette studies and patient reflections from the Liliav network across the USA, Turkey, and Lebanon.',
  },
  {
    path: '/about',
    title: 'About Liliav — Beauty Without Borders | Liliav',
    description: 'The story of Liliav: a private brokerage bridging patients across the USA, Turkey, and Lebanon with safe, transparent, world-class cosmetic care.',
  },
  {
    path: '/contact',
    title: 'Private Consultation — Contact Liliav',
    description: 'Request a free private consultation. Liliav’s trilingual concierge replies within one business day — English, Arabic, or Turkish.',
  },
  {
    path: '/journal',
    title: 'Journal — Notes on Aesthetic Travel | Liliav',
    description: 'Editorial notes on medical tourism, plastic surgery destinations, consultations, and recovery — written like a magazine, not a marketing blog.',
  },
  { path: '/legal/privacy', title: 'Privacy Policy | Liliav', description: 'Privacy Policy — Liliav, private plastic surgery brokerage.' },
  { path: '/legal/terms', title: 'Terms of Service | Liliav', description: 'Terms of Service — Liliav, private plastic surgery brokerage.' },
  { path: '/legal/disclaimer', title: 'Medical Disclaimer | Liliav', description: 'Medical Disclaimer — Liliav, private plastic surgery brokerage.' },
];

const destinationFaq = (name: string): Record<string, unknown> => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: `Is plastic surgery in ${name} safe?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Yes — when the surgeon and facility are properly vetted. Every Liliav partner clinic in ${name} is board-certified at source, operates in an accredited facility, and is re-reviewed annually by our medical advisory board.`,
      },
    },
    {
      '@type': 'Question',
      name: `How much does plastic surgery cost in ${name}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Costs vary by procedure, clinic, and surgeon. Liliav provides indicative ranges for every procedure and always secures an itemized written quote from your chosen surgeon before any commitment.`,
      },
    },
  ],
});

export const PAGES: PageMeta[] = [
  ...staticPages,
  ...PROCEDURES.map((p): PageMeta => ({
    path: `/procedures/${p.slug}`,
    title: `${p.name} — USA, Turkey & Lebanon | Liliav`,
    description: `${p.name} abroad or at home: ${p.tagline} Compare vetted, board-certified surgeons and indicative prices across the USA, Turkey, and Lebanon with Liliav's private concierge.`,
    jsonld: procedureJsonLd(p),
  })),
  ...DESTINATIONS.map((d): PageMeta => ({
    path: `/destinations/${d.slug}`,
    title: `${d.name === 'Turkey' ? 'Plastic Surgery Turkey' : d.name === 'Lebanon' ? 'Cosmetic Surgery Lebanon' : 'Plastic Surgery USA'} — Vetted Clinics | Liliav`,
    description: `${d.heroStatement} Learn how Liliav vets clinics, arranges travel, and supports your recovery in ${d.name}.`,
    jsonld: destinationFaq(d.name),
  })),
  ...ARTICLES.map((a): PageMeta => ({
    path: `/journal/${a.slug}`,
    title: `${a.title} | Liliav Journal`,
    description: a.excerpt,
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: a.title,
      description: a.excerpt,
      author: { '@id': `${SITE}/#organization` },
      publisher: { '@id': `${SITE}/#organization` },
      inLanguage: 'en',
    },
  })),
];
