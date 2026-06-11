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
 * with the canonical (no slash) — a small E-E-A-T cleanup. */
function absUrl(path: string) {
  return path === '/' ? SITE.url : `${SITE.url}${path}`;
}

/** Named human author for every Article schema. YMYL pages get penalized when
 * authored by a faceless "Editorial Team"; a real person with a TREC license
 * is the correct E-E-A-T signal. */
export const AUTHOR_PERSON = {
  '@type': 'Person' as const,
  name: 'Luke Allen',
  url: `${SITE.url}/about`,
  jobTitle: 'Texas REALTOR® (TREC #788149)',
  worksFor: {
    '@type': 'Organization' as const,
    name: 'Austin Marketing + Development Group',
  },
};

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
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/opengraph-image`,
    description: 'Guide to UT Austin in-state tuition strategy and Texas residency rules for out-of-state families. Published by Luke Allen, Texas REALTOR® (TREC #788149), Austin Marketing + Development Group.',
    founder: AUTHOR_PERSON,
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
