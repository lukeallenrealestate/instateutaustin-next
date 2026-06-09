import type { Metadata } from 'next';
import { SITE } from './site';

interface PageMetaInput {
  title: string;
  description: string;
  path: string; // e.g. "/texas-residency-rules" — leading slash, no trailing
  ogImage?: string;
  noindex?: boolean;
}

export function pageMetadata({ title, description, path, ogImage, noindex }: PageMetaInput): Metadata {
  const url = `${SITE.url}${path}`;
  const robots = SITE.PRE_LAUNCH || noindex
    ? { index: false, follow: false }
    : { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } as const;

  // When ogImage is not explicitly passed, omit images from metadata so that
  // Next.js's opengraph-image.tsx convention auto-injects the route-level image.
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

/** Minimal JSON-LD wrapper. Use in components via <Schema data={...} />. */
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
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: SITE.ogImage,
    description: SITE.description,
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
    author: { '@type': 'Organization', name: 'instateutaustin.com Editorial Team' },
    publisher: organizationSchema(),
    mainEntityOfPage: `${SITE.url}${opts.path}`,
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
  totalTime?: string; // ISO 8601 duration, e.g. "P14M"
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
