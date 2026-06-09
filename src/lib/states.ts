// Origin-state programmatic data.
//
// Per the build spec: each page must include state-specific substance (flight
// time to Austin, distance, cost-of-living contrast, savings math, and a
// state-specific FAQ). No two pages should be swappable by find-and-replace.
//
// TODO: For each state below, fill substantive fields before the page goes
// live. Pages with placeholder data must remain `published: false` and are
// excluded from the sitemap and nav.

export interface OriginState {
  slug: string;       // e.g. "california"
  name: string;       // e.g. "California"
  abbr: string;       // e.g. "CA"
  primaryAirport: string;
  flightTimeToAustinHours: number;
  drivingDistanceToAustinMiles: number;
  publicCollegeInState: string;
  inStateTuitionPublicUSD: number;
  costOfLivingNote: string;     // 1-2 sentences contrasting with Austin
  notableFamiliesContext: string; // 1-2 sentences on the family flow to UT from this state
  residencyMoveNote: string;    // 1-2 sentences on residency interactions
  faq: Array<{ q: string; a: string }>;
  published: boolean;
}

// Initial set seeded from the ad targeting Luke shared with us. Each entry
// currently has placeholder values and is marked unpublished; update before
// flipping `published: true`.
export const STATES: OriginState[] = [
  {
    slug: 'california',
    name: 'California',
    abbr: 'CA',
    primaryAirport: 'LAX',
    flightTimeToAustinHours: 3.0,
    drivingDistanceToAustinMiles: 1380,
    publicCollegeInState: 'University of California, Berkeley',
    inStateTuitionPublicUSD: 14_934, // verify: UC system 2025-26
    costOfLivingNote: '', // TODO
    notableFamiliesContext: '', // TODO
    residencyMoveNote: '', // TODO
    faq: [], // TODO
    published: false,
  },
  {
    slug: 'new-york',
    name: 'New York',
    abbr: 'NY',
    primaryAirport: 'JFK',
    flightTimeToAustinHours: 4.0,
    drivingDistanceToAustinMiles: 1750,
    publicCollegeInState: 'Stony Brook / SUNY',
    inStateTuitionPublicUSD: 7_070,
    costOfLivingNote: '',
    notableFamiliesContext: '',
    residencyMoveNote: '',
    faq: [],
    published: false,
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    abbr: 'IL',
    primaryAirport: 'ORD',
    flightTimeToAustinHours: 2.5,
    drivingDistanceToAustinMiles: 1100,
    publicCollegeInState: 'University of Illinois Urbana-Champaign',
    inStateTuitionPublicUSD: 17_138,
    costOfLivingNote: '',
    notableFamiliesContext: '',
    residencyMoveNote: '',
    faq: [],
    published: false,
  },
  {
    slug: 'florida',
    name: 'Florida',
    abbr: 'FL',
    primaryAirport: 'MIA',
    flightTimeToAustinHours: 3.0,
    drivingDistanceToAustinMiles: 1290,
    publicCollegeInState: 'University of Florida',
    inStateTuitionPublicUSD: 6_381,
    costOfLivingNote: '',
    notableFamiliesContext: '',
    residencyMoveNote: '',
    faq: [],
    published: false,
  },
];

export const getState = (slug: string) => STATES.find(s => s.slug === slug && s.published);
export const publishedStates = () => STATES.filter(s => s.published);
