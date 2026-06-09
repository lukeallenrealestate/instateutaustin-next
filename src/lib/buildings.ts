// West Campus and near-campus condo building programmatic data.
//
// Per the build spec: each page must include building-specific data (distance
// and walk time to campus, unit mix, typical price range, HOA, residency-
// strategy fit, IDX CTA). Pull live pricing from the source Luke supplies;
// never invent prices.
//
// TODO: For each building, fill substantive fields and confirm with Luke.
// Pages with placeholder data must remain `published: false`.

export interface Building {
  slug: string;       // e.g. "skyloft"
  name: string;       // e.g. "Skyloft"
  address: string;
  walkTimeToCampusMin: number | null;
  walkTimeNote: string;
  yearBuilt: number | null;
  unitMix: string;            // e.g. "studios, 1BR, 2BR"
  typicalPriceRange: string;  // e.g. "$425K–$850K" — pull from MLS, do not invent
  hoaMonthlyRange: string;    // e.g. "$450–$750/mo"
  residencyFit: 'rule-3-strong' | 'rule-3-ok' | 'rule-4-strong' | 'rule-4-ok' | 'review';
  amenities: string[];
  notes: string;              // What Luke would want a buyer to know
  published: boolean;
}

export const BUILDINGS: Building[] = [
  { slug: 'skyloft',         name: 'Skyloft',                address: '', walkTimeToCampusMin: null, walkTimeNote: '', yearBuilt: null, unitMix: '', typicalPriceRange: '', hoaMonthlyRange: '', residencyFit: 'review', amenities: [], notes: '', published: false },
  { slug: 'the-castilian',   name: 'The Castilian',          address: '', walkTimeToCampusMin: null, walkTimeNote: '', yearBuilt: null, unitMix: '', typicalPriceRange: '', hoaMonthlyRange: '', residencyFit: 'review', amenities: [], notes: '', published: false },
  { slug: 'nine63',          name: 'Nine63',                 address: '', walkTimeToCampusMin: null, walkTimeNote: '', yearBuilt: null, unitMix: '', typicalPriceRange: '', hoaMonthlyRange: '', residencyFit: 'review', amenities: [], notes: '', published: false },
  { slug: 'rise-west-campus',name: 'Rise West Campus',       address: '', walkTimeToCampusMin: null, walkTimeNote: '', yearBuilt: null, unitMix: '', typicalPriceRange: '', hoaMonthlyRange: '', residencyFit: 'review', amenities: [], notes: '', published: false },
  { slug: '26-west',         name: '26 West',                address: '', walkTimeToCampusMin: null, walkTimeNote: '', yearBuilt: null, unitMix: '', typicalPriceRange: '', hoaMonthlyRange: '', residencyFit: 'review', amenities: [], notes: '', published: false },
  { slug: 'villas-on-rio',   name: 'Villas on Rio',          address: '', walkTimeToCampusMin: null, walkTimeNote: '', yearBuilt: null, unitMix: '', typicalPriceRange: '', hoaMonthlyRange: '', residencyFit: 'review', amenities: [], notes: '', published: false },
  { slug: 'the-quarters',    name: 'The Quarters',           address: '', walkTimeToCampusMin: null, walkTimeNote: '', yearBuilt: null, unitMix: '', typicalPriceRange: '', hoaMonthlyRange: '', residencyFit: 'review', amenities: [], notes: '', published: false },
  { slug: 'moontower',       name: 'Moontower',              address: '', walkTimeToCampusMin: null, walkTimeNote: '', yearBuilt: null, unitMix: '', typicalPriceRange: '', hoaMonthlyRange: '', residencyFit: 'review', amenities: [], notes: '', published: false },
  { slug: 'lark',            name: 'Lark',                   address: '', walkTimeToCampusMin: null, walkTimeNote: '', yearBuilt: null, unitMix: '', typicalPriceRange: '', hoaMonthlyRange: '', residencyFit: 'review', amenities: [], notes: '', published: false },
  { slug: 'the-standard',    name: 'The Standard',           address: '', walkTimeToCampusMin: null, walkTimeNote: '', yearBuilt: null, unitMix: '', typicalPriceRange: '', hoaMonthlyRange: '', residencyFit: 'review', amenities: [], notes: '', published: false },
];

export const getBuilding = (slug: string) => BUILDINGS.find(b => b.slug === slug && b.published);
export const publishedBuildings = () => BUILDINGS.filter(b => b.published);
