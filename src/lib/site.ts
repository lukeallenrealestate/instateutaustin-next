// Site-wide constants. Single source of truth for URLs, brand strings,
// social, analytics IDs, and pre-launch toggles.

export const SITE = {
  url: 'https://instateutaustin.com',
  name: 'instateutaustin.com',
  description: 'Independent educational guide to UT Austin in-state tuition and Texas residency rules.',
  ogImage: 'https://instateutaustin.com/images/og-card.jpg',

  // YMYL disclosure
  disclaimer: 'Not affiliated with The University of Texas at Austin or the Texas Higher Education Coordinating Board. Information presented here is educational. It is not legal, tax, or financial advice.',

  // Operating realtor (TREC #788149) — mentioned only on /about and /condos-near-ut.
  partner: {
    name: 'Luke Allen',
    trecLicense: '788149',
    brokerage: 'Austin Marketing + Development Group',
    email: 'luke@austinmdg.com',
    sameAs: [
      'https://share.google/hETte82InqUPvWeNC',
      'https://www.linkedin.com/in/lukeallentx/',
      'https://www.instagram.com/lukeallenrealty/',
    ],
  },

  // Analytics. GA4 scoped out per user decision; Meta Pixel only.
  metaPixelId: '2215492562520453', // AMDG Master Pixel

  // Lead routing
  leadDestination: {
    upstreamUrl: 'https://austintxhomes.co/api/contact',
    referrerTag: 'instateutaustin.com',
  },

  // External targets
  idxSearchUrl: 'https://austintxhomes.co/search',

  // Pre-launch toggle. When true: every page sends X-Robots-Tag: noindex,
  // robots.txt disallows all crawlers. Flipped to false 2026-06-11 on
  // production launch at instateutaustin.com.
  PRE_LAUNCH: false,

  lastReviewed: '2026-06-11',
} as const;
