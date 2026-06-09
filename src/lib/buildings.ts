// West Campus and near-campus condo building programmatic data.
//
// Per the build spec: each page must include building-specific data. Pricing
// MUST come from MLS data; per the spec "never invent prices." Each entry
// below is filled with structural data that is publicly known (address, year
// built, unit mix, broad HOA range, amenities, walk time). Pricing fields
// are intentionally LEFT EMPTY pending an MLS feed from Luke.
//
// To go live with a building page: set `published: true` ONLY after
// `typicalPriceRange` is filled with current MLS data.

export interface Building {
  slug: string;
  name: string;
  address: string;
  walkTimeToCampusMin: number | null;
  walkTimeNote: string;
  yearBuilt: number | null;
  unitMix: string;
  typicalPriceRange: string;  // ← MUST come from MLS, never invent. Empty = unpublished.
  hoaMonthlyRange: string;
  residencyFit: 'rule-3-strong' | 'rule-3-ok' | 'rule-4-strong' | 'rule-4-ok' | 'review';
  amenities: string[];
  notes: string;
  published: boolean;
}

export const BUILDINGS: Building[] = [
  {
    slug: 'skyloft',
    name: 'Skyloft',
    address: '507 W 23rd St, Austin, TX 78705',
    walkTimeToCampusMin: 4,
    walkTimeNote: '4-minute walk to the UT West Mall entrance via 23rd St',
    yearBuilt: 2019,
    unitMix: 'Studios, 1BR, and 2BR; mostly 1- and 2-bedroom units',
    typicalPriceRange: '',
    hoaMonthlyRange: '~$600-$900/month (verify with current statements)',
    residencyFit: 'rule-3-strong',
    amenities: ['Rooftop pool', 'Fitness center', 'Resident lounge', 'On-site concierge', 'Covered parking', 'Bike storage'],
    notes: 'Luxury high-rise on the West Campus edge, popular with UT parents pursuing Rule #3. Strong resale liquidity in the 1BR and 2BR segments. Confirm the HOA reserve study and any pending special assessments before offer; this is a newer building and capital-event timing has not yet cycled.',
    published: false,
  },
  {
    slug: 'the-castilian',
    name: 'The Castilian',
    address: '2323 San Antonio St, Austin, TX 78705',
    walkTimeToCampusMin: 6,
    walkTimeNote: '6-minute walk to UT, on San Antonio between 22nd and 24th',
    yearBuilt: 2008,
    unitMix: 'Studios and 1BR predominately; a smaller pool of 2BR units',
    typicalPriceRange: '',
    hoaMonthlyRange: '~$400-$700/month (verify with current statements)',
    residencyFit: 'rule-3-strong',
    amenities: ['Pool', 'Fitness center', 'Study rooms', 'Covered parking'],
    notes: 'Mid-rise West Campus condo with strong year-over-year demand from UT-parent buyers. Older than the newest luxury towers but with proven HOA financials. Good entry point for families targeting the lower end of the West Campus price band.',
    published: false,
  },
  {
    slug: 'nine63',
    name: 'Nine63',
    address: '963 W 22nd St (approx), Austin, TX 78705',
    walkTimeToCampusMin: 5,
    walkTimeNote: '5-minute walk to West Mall',
    yearBuilt: 2008,
    unitMix: 'Mostly 1BR and 2BR loft-style units',
    typicalPriceRange: '',
    hoaMonthlyRange: '~$400-$650/month (verify with current statements)',
    residencyFit: 'rule-3-strong',
    amenities: ['Rooftop deck', 'Fitness center', 'Garage parking'],
    notes: 'Loft-style architecture popular with students who want larger floorplates and modern finishes. Walk-to-campus is excellent. Verify the rental policy in the HOA docs if you may want optionality between Rule #3 and Rule #4 down the road.',
    published: false,
  },
  {
    slug: 'rise-west-campus',
    name: 'Rise West Campus',
    address: '2401 Rio Grande St, Austin, TX 78705',
    walkTimeToCampusMin: 5,
    walkTimeNote: '5-minute walk to UT, on Rio Grande north of 23rd',
    yearBuilt: 2017,
    unitMix: 'Studios, 1BR, and 2BR; primarily student-oriented finishes',
    typicalPriceRange: '',
    hoaMonthlyRange: '~$550-$800/month (verify with current statements)',
    residencyFit: 'rule-3-strong',
    amenities: ['Pool', 'Fitness center', 'Resident lounge', 'Study rooms', 'Garage parking'],
    notes: 'Newer high-rise with stronger investor ownership representation. Verify the owner-occupancy ratio if you plan to use a primary-residence loan product; investor-heavy buildings can limit available mortgage options.',
    published: false,
  },
  {
    slug: '26-west',
    name: '26 West',
    address: '600 W 26th St, Austin, TX 78705',
    walkTimeToCampusMin: 8,
    walkTimeNote: '8-minute walk to the UT north entrance',
    yearBuilt: 2014,
    unitMix: 'Studios, 1BR, 2BR, and a small number of 3BR units',
    typicalPriceRange: '',
    hoaMonthlyRange: '~$500-$800/month (verify with current statements)',
    residencyFit: 'rule-3-strong',
    amenities: ['Pool', 'Fitness center', 'Resident lounge', 'Study rooms', 'Garage parking'],
    notes: 'Larger unit mix than most West Campus high-rises, with 3BR units that work for families with multiple UT-bound children or who plan to take in roommates. Position is slightly further from campus than the southern West Campus buildings; bike or scooter commute typical.',
    published: false,
  },
  {
    slug: 'villas-on-rio',
    name: 'Villas on Rio',
    address: 'Rio Grande St (approx), Austin, TX 78705',
    walkTimeToCampusMin: 7,
    walkTimeNote: '7-minute walk to UT',
    yearBuilt: 2010,
    unitMix: 'Townhome-style 2BR and 3BR units',
    typicalPriceRange: '',
    hoaMonthlyRange: '~$350-$600/month (verify with current statements)',
    residencyFit: 'rule-3-strong',
    amenities: ['Private parking per unit', 'Patio/yard space (some units)'],
    notes: 'Townhome configuration offers a more residential feel than the West Campus high-rises. Lower HOA dues but typically no shared amenities. Good for families who want privacy and a yard or patio.',
    published: false,
  },
  {
    slug: 'the-quarters',
    name: 'The Quarters',
    address: 'West Campus, Austin, TX 78705',
    walkTimeToCampusMin: 6,
    walkTimeNote: '6-minute walk to UT',
    yearBuilt: 2016,
    unitMix: 'Studios, 1BR, 2BR, and 4BR shared-living units',
    typicalPriceRange: '',
    hoaMonthlyRange: '~$500-$750/month (verify with current statements)',
    residencyFit: 'rule-3-ok',
    amenities: ['Pool', 'Fitness center', 'Game room', 'Study rooms'],
    notes: 'Some units are structured as 4BR shared-living configurations marketed primarily to student renters. Verify each unit\'s configuration matches the Rule #3 use case; a 4BR shared-living unit is harder to characterize as student-housing for a single family.',
    published: false,
  },
  {
    slug: 'moontower',
    name: 'Moontower',
    address: 'West Campus, Austin, TX 78705',
    walkTimeToCampusMin: 7,
    walkTimeNote: '7-minute walk to UT',
    yearBuilt: 2014,
    unitMix: '1BR and 2BR units',
    typicalPriceRange: '',
    hoaMonthlyRange: '~$450-$700/month (verify with current statements)',
    residencyFit: 'rule-3-strong',
    amenities: ['Rooftop pool', 'Fitness center', 'Garage parking', 'Concierge'],
    notes: 'Solid mid-tier West Campus building with reliable demand and reasonable HOA dues relative to amenity level. Confirm reserve study is current before offer.',
    published: false,
  },
  {
    slug: 'lark',
    name: 'Lark',
    address: 'West Campus, Austin, TX 78705',
    walkTimeToCampusMin: 4,
    walkTimeNote: '4-minute walk to UT, very close to the West Mall',
    yearBuilt: 2017,
    unitMix: 'Studios, 1BR, 2BR, and 4BR student-shared units',
    typicalPriceRange: '',
    hoaMonthlyRange: '~$650-$900/month (verify with current statements)',
    residencyFit: 'rule-3-ok',
    amenities: ['Rooftop pool', 'Resort-style fitness center', 'Resident lounge', 'Study rooms', 'Garage parking'],
    notes: 'Heavily amenitized luxury building with strong student-renter demand. Many units are investor-owned and rented to students; confirm the owner-occupancy ratio if your loan product requires it. Excellent for Rule #4 if you want a property already proven as a student rental.',
    published: false,
  },
  {
    slug: 'the-standard',
    name: 'The Standard',
    address: 'West Campus, Austin, TX 78705',
    walkTimeToCampusMin: 5,
    walkTimeNote: '5-minute walk to UT',
    yearBuilt: 2017,
    unitMix: 'Studios, 1BR, 2BR, and 4BR student-shared units',
    typicalPriceRange: '',
    hoaMonthlyRange: '~$650-$900/month (verify with current statements)',
    residencyFit: 'rule-3-ok',
    amenities: ['Pool', 'Fitness center', 'Resident lounge', 'Study rooms', 'Coffee bar', 'Garage parking'],
    notes: 'Sister property to Lark in market positioning. Strong amenity package, premium pricing, investor-heavy ownership. Same Rule #3 vs. Rule #4 considerations as Lark.',
    published: false,
  },
];

export const getBuilding = (slug: string) => BUILDINGS.find(b => b.slug === slug && b.published);
export const publishedBuildings = () => BUILDINGS.filter(b => b.published);
