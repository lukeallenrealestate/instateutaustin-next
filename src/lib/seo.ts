import type { Metadata } from 'next';
import { SITE } from './site';

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

/** Normalize the home path so canonical, OG, and breadcrumb URLs all agree.
 * Without this, `${SITE.url}${'/'}` produces a trailing slash that conflicts
 * with the canonical (no slash), a small E-E-A-T cleanup. */
function absUrl(path: string) {
  return path === '/' ? SITE.url : `${SITE.url}${path}`;
}

/** Named human author for every Article schema. YMYL pages get penalized when
 * authored by a faceless "Editorial Team"; a real person with a TREC license
 * is the correct E-E-A-T signal. */
export const AUTHOR_PERSON = {
  '@type': 'Person' as const,
  '@id': `${SITE.url}/about#luke-allen`,
  name: 'Luke Allen',
  url: `${SITE.url}/about`,
  jobTitle: 'Texas REALTOR® (TREC #788149)',
  description: 'Texas REALTOR licensed by the Texas Real Estate Commission (TREC #788149) at Austin Marketing + Development Group, specializing in helping out-of-state UT Austin families establish Texas residency for in-state tuition.',
  knowsAbout: [
    'Texas Education Code §54.052',
    'Texas residency for tuition purposes',
    'University of Texas at Austin admissions',
    'Texas Higher Education Coordinating Board (THECB) rules',
    'Austin Texas real estate',
    'Texas property law',
  ],
  hasOccupation: {
    '@type': 'Occupation' as const,
    name: 'Real Estate Agent',
    occupationLocation: { '@type': 'State' as const, name: 'Texas' },
    occupationalCategory: 'Real Estate',
  },
  worksFor: {
    '@type': 'Organization' as const,
    name: 'Austin Marketing + Development Group',
  },
  sameAs: [
    'https://www.har.com/luke-allen/dir_788149',
  ],
};

/** WebSite schema with SearchAction. Enables Google sitelinks search box and
 * marks the site as a coherent web entity (not just a collection of pages). */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: 'The complete guide to UT Austin in-state tuition for out-of-state families. Texas residency pathway, savings math, and property strategy.',
    publisher: { '@id': `${SITE.url}/about#luke-allen` },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function pageMetadata({ title, description, path, ogImage, noindex }: PageMetaInput): Metadata {
  const url = absUrl(path);
  const robots = SITE.PRE_LAUNCH || noindex
    ? { index: false, follow: false }
    : { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } as const;

  const og = {
    type: 'website' as const,
    url,
    title,
    description,
    siteName: SITE.name,
    ...(ogImage ? { images: [ogImage] } : {}),
  };
  const twitter = {
    card: 'summary_large_image' as const,
    title,
    description,
    ...(ogImage ? { images: [ogImage] } : {}),
  };

  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    robots,
    openGraph: og,
    twitter,
    other: {
      'geo.region': 'US-TX',
      'geo.placename': 'Austin, Texas',
    },
  };
}

export function jsonLd(data: object) {
  return { __html: JSON.stringify(data) };
}

export function breadcrumb(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absUrl(it.path),
    })),
  };
}

/** Publisher Organization for Article schema and any standalone use.
 * `founder` ties the entity to Luke Allen (the real publisher) to satisfy
 * Google's "who is responsible for this content?" question. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/opengraph-image`,
    description: 'Guide to UT Austin in-state tuition strategy and Texas residency rules for out-of-state families. Published by Luke Allen, Texas REALTOR® (TREC #788149), Austin Marketing + Development Group.',
    founder: AUTHOR_PERSON,
    address: {
      '@type': 'PostalAddress' as const,
      addressLocality: 'Austin',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'State' as const,
      name: 'Texas',
    },
    contactPoint: {
      '@type': 'ContactPoint' as const,
      telephone: '+1-254-718-2567',
      email: 'luke@austinmdg.com',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  };
}

/** RealEstateAgent schema for Luke Allen. Applied to real-estate pages
 * (condo, property, residency-with-real-estate). Signals to Google
 * that these pages are authored by a licensed real estate professional,
 * a substantial E-E-A-T signal for YMYL real estate content. */
export function realEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': `${SITE.url}/about#real-estate-agent`,
    name: 'Luke Allen',
    url: `${SITE.url}/about`,
    image: `${SITE.url}/opengraph-image`,
    telephone: '+1-254-718-2567',
    email: 'luke@austinmdg.com',
    description: 'Texas REALTOR® (TREC #788149) at Austin Marketing + Development Group, specializing in helping out-of-state UT Austin families acquire Texas property as part of the residency pathway to in-state tuition.',
    address: {
      '@type': 'PostalAddress' as const,
      addressLocality: 'Austin',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City' as const, name: 'Austin' },
      { '@type': 'State' as const, name: 'Texas' },
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential' as const,
      credentialCategory: 'license',
      recognizedBy: {
        '@type': 'Organization' as const,
        name: 'Texas Real Estate Commission',
      },
      identifier: 'TREC #788149',
    },
    knowsAbout: [
      'Austin real estate',
      'West Campus condos',
      'UT Austin residency pathway',
      'Texas Education Code §54.052',
      'Investment property in Texas',
      'Rule #3 vs Rule #4 residency structures',
    ],
    memberOf: {
      '@type': 'Organization' as const,
      name: 'Austin Marketing + Development Group',
    },
  };
}

/** ItemList schema for hub pages (/by-state, /by-college, etc.). Helps
 * Google understand the page as a navigation index rather than a
 * standalone article. */
export function itemListSchema(opts: {
  name: string;
  description?: string;
  items: Array<{ name: string; path: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: opts.name,
    description: opts.description,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: absUrl(item.path),
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  path: string;
  description?: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: AUTHOR_PERSON,
    publisher: organizationSchema(),
    mainEntityOfPage: absUrl(opts.path),
    image: SITE.ogImage,
  };
}

export function faqPageSchema(qa: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function howToSchema(opts: {
  name: string;
  description?: string;
  totalTime?: string;
  steps: Array<{ name: string; text: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    totalTime: opts.totalTime,
    step: opts.steps.map(s => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  };
}
