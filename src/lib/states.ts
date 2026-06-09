// Origin-state programmatic data.
//
// Per the build spec: each page must include state-specific substance (flight
// time to Austin, distance, cost-of-living contrast, savings math, and a
// state-specific FAQ). No two pages should be swappable by find-and-replace.
//
// Pages with `published: false` 404 (the [state] route refuses to render
// placeholder pages, per the no-thin-content rule). Set published: true only
// after all substantive fields are filled.
//
// Tuition figures for the in-state flagship are from each university's
// published 2025-26 tuition and required fees page. Verify before relying.
// Flight times and distances are common public knowledge for major airports.
// Cost-of-living contrast notes are derived from BEA Regional Price Parities
// and Council for Community and Economic Research data, expressed
// approximately rather than precisely.

export interface OriginState {
  slug: string;
  name: string;
  abbr: string;
  primaryAirport: string;
  flightTimeToAustinHours: number;
  drivingDistanceToAustinMiles: number;
  publicCollegeInState: string;
  inStateTuitionPublicUSD: number;
  costOfLivingNote: string;
  notableFamiliesContext: string;
  residencyMoveNote: string;
  faq: Array<{ q: string; a: string }>;
  published: boolean;
}

export const STATES: OriginState[] = [
  {
    slug: 'california',
    name: 'California',
    abbr: 'CA',
    primaryAirport: 'LAX',
    flightTimeToAustinHours: 3.0,
    drivingDistanceToAustinMiles: 1380,
    publicCollegeInState: 'University of California (UC) flagship campuses',
    inStateTuitionPublicUSD: 14_934,
    costOfLivingNote: 'Coastal California (Los Angeles, the Bay Area, San Diego) generally runs 30 to 60 percent more expensive than Austin on a comparable household basis, driven mostly by housing. Inland California (Sacramento, Fresno, the Central Valley) closes most of that gap. The headline split that surprises families: California state income tax adds up to 13.3 percent on top of federal; Texas has no state income tax. For a household earning $400,000, that is a five to six figure annual delta that frequently dominates the property carrying cost of a Rule #3 condo near UT.',
    notableFamiliesContext: 'California is one of the largest single sources of out-of-state UT Austin applications. The combination of UC system admission selectivity, the cost of California public-college housing, and the appeal of UT Austin (especially McCombs, Cockrell Engineering, and Computer Science) makes the residency pathway attractive for California families whose UC admits do not include their first choice campus.',
    residencyMoveNote: 'California residency for state purposes generally requires demonstrated intent to make California a permanent home, evidenced by California voter registration, driver license, vehicle registration, and tax filings. A California parent shifting domicile to Texas for the UT pathway should expect that California may continue to assert taxing nexus on California-source income (wages from a California employer, real estate, etc.) even after the move. The move does not have to be total: many California families keep a California residence while establishing Texas as the family domicile through the property purchase and the supporting indicia. Consult a California-licensed CPA on the franchise-tax-board residency analysis before filing your first Texas-address federal return.',
    faq: [
      { q: 'Will leaving California for Texas residency affect our California tax filings?', a: 'It can. California uses a facts-and-circumstances test for residency that looks at where you spend time, where your principal home is, and where your economic and family ties center. A clean break, with the family selling or renting out the California home and the parents physically present in Texas for most of the year, is the cleanest case. A partial move (keeping the California home, moving only the student to Texas) is harder and may require continued California filing. Talk to a California CPA before the first Texas-address federal return goes in.' },
      { q: 'Is UT Austin actually a better academic fit than UC for my student?', a: 'It depends on the major and the specific UC campus, and we are not the right venue to argue rankings. The financial comparison is more straightforward: UC in-state tuition runs roughly $14,900/year (2025-26), close to UT in-state at $11,688. UT out-of-state at $44,908 is dramatically higher. The residency pathway pulls UT down to UC-equivalent annual tuition once the 12-month clock is run.' },
      { q: 'Can we keep our California home and still qualify?', a: 'Yes, in many cases. Texas allows a person to have multiple residences but only one domicile. If the family\'s indicia of intent (driver license, vehicle, voter registration, federal tax return address) all point to Texas during the 12-month clock, owning a second home in California does not by itself defeat the petition. What does defeat it is when the documentary record shows the California home as the primary residence (homestead declaration, California voter registration, California vehicle registration) during the period when Texas domicile is claimed.' },
      { q: 'What is the most common California-family mistake?', a: 'Failing to transfer the vehicle registration in time. California Z plates are sticky, and families assume a vehicle the student drives in Austin can stay registered in California "for now." A California-registered vehicle in Texas during the 12-month clock is one of the strongest single facts against the petition. Register the vehicle in Texas within 30 days of the property closing.' },
    ],
    published: true,
  },
  {
    slug: 'new-york',
    name: 'New York',
    abbr: 'NY',
    primaryAirport: 'JFK',
    flightTimeToAustinHours: 4.0,
    drivingDistanceToAustinMiles: 1750,
    publicCollegeInState: 'SUNY (State University of New York) flagship campuses (Stony Brook, Buffalo, Binghamton)',
    inStateTuitionPublicUSD: 7_070,
    costOfLivingNote: 'New York City and the surrounding metro run 40 to 70 percent more expensive than Austin on housing-adjusted comparison. Upstate New York is closer to parity with Austin on housing but materially more expensive on energy, food, and taxes. New York state income tax tops out at 10.9 percent (plus New York City local at 3.9 percent for residents); Texas has no state income tax. For high earners, the state tax savings on a Texas move dwarf the carrying cost of a UT-area condo.',
    notableFamiliesContext: 'New York families increasingly look outside the SUNY system for selective programs, particularly in business and engineering. UT McCombs and Cockrell Engineering are well known to New York high school college counselors, and the Austin-NYC tech corridor connection (many Texas-based tech companies have NYC offices, and vice versa) makes UT alumni networks portable back to New York for graduates who return.',
    residencyMoveNote: 'New York state residency for tax purposes is determined by a domicile test plus a separate statutory-residency test (more than 183 days in New York plus a permanent place of abode). Families maintaining a permanent New York home and spending more than 183 days there will remain New York statutory residents even if they claim domicile in Texas. For the UT residency pathway, the cleanest case is a substantive household move; a part-time move with a continuing New York primary residence is harder to defend on both the Texas residency and the New York non-residency sides.',
    faq: [
      { q: 'Can a New York City family qualify for Texas residency without selling the NYC apartment?', a: 'Yes, but the documentary record needs to be tight. The federal tax return must show a Texas address. The driver license and vehicle registration should be Texas. New York City residency for tax purposes is its own analysis (the 183-day statutory rule plus permanent abode plus domicile). The two analyses can come out differently: a family can be Texas residents for UT purposes and still owe New York City tax on city-source income.' },
      { q: 'How does the New York 529 plan interact with Texas residency?', a: 'New York 529 contributions earn a state income tax deduction for New York residents. If the parents change domicile to Texas, future contributions to the New York 529 lose the state tax benefit. Withdrawals for qualified education expenses remain federally tax-free regardless of state. Some New York families pre-fund the 529 before the residency move; others migrate the 529 to a Texas plan or just discontinue contributions.' },
      { q: 'What about the New York real-estate tax break (the STAR exemption) on our NYC home?', a: 'The STAR exemption requires the property to be your primary residence. Claiming STAR during the year you are also claiming Texas domicile for UT residency creates a direct conflict in the documentary record. Withdraw the STAR exemption before petitioning.' },
      { q: 'What is the typical New York family\'s UT savings number?', a: 'New York families compare UT out-of-state (~$44,908) against in-state at SUNY flagship (~$7,070). If the student would have gone to SUNY at $7K, the residency pathway brings UT down to $11,688, $4,600/year more than SUNY. If the student would have gone out-of-state to UT regardless, the residency pathway saves the full ~$33,220/year differential.' },
    ],
    published: true,
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
    costOfLivingNote: 'Chicago metro and the northern suburbs run roughly 10 to 20 percent more expensive than Austin on housing-adjusted comparison; downstate Illinois is generally cheaper than Austin. Illinois state income tax is a flat 4.95 percent; Texas has no state income tax. Illinois property tax is notoriously high (2.0 to 2.5 percent of assessed value in Cook County and the collar counties), comparable to or slightly above Travis County.',
    notableFamiliesContext: 'Chicago metro families have historically sent students to Illinois (UIUC), the Big Ten (Michigan, Indiana, Wisconsin), and selective midwest privates. UT Austin has grown as a target for Chicago families seeking strong McCombs business or Cockrell engineering programs without the in-state UIUC tuition premium. The 2.5-hour flight time keeps Austin within easy weekend-visit range from O\'Hare.',
    residencyMoveNote: 'Illinois residency for income tax purposes is determined by domicile. A family establishing Texas domicile for the UT pathway should expect that Illinois may continue to claim taxing nexus on Illinois-source wages until the parent\'s primary work location relocates. Remote-work arrangements that meaningfully shift the parent\'s workplace to Texas help the Illinois non-residency case; arrangements where the parent continues to commute to a Chicago office while filing federal returns from a Texas address invite an Illinois audit.',
    faq: [
      { q: 'Is UT Austin in-state tuition really cheaper than UIUC in-state?', a: 'Yes. UIUC in-state runs approximately $17,138/year (2025-26 tuition and required fees, varies by program). UT Austin in-state at $11,688 is roughly $5,400/year cheaper. Over four years that is about $22,000 in addition to the $33,220/year savings versus out-of-state UT. For Chicago-metro families whose student would otherwise pay UIUC in-state, the UT pathway nets meaningfully cheaper four-year tuition.' },
      { q: 'What about the Illinois homestead exemption?', a: 'Illinois\'s General Homestead Exemption requires the property to be the owner\'s primary residence. Claiming it on the Illinois home while also claiming Texas domicile for UT residency is contradictory. Cook County and the collar counties also offer senior, disability, and longtime-occupant exemptions, all conditioned on primary residency. Withdraw before petitioning.' },
      { q: 'How does the Bright Start (Illinois 529) plan factor in?', a: 'Illinois Bright Start contributions earn a state income tax deduction for Illinois residents (up to $20,000 joint). After domicile shift to Texas, that deduction is gone. Federal tax treatment of withdrawals is unaffected.' },
      { q: 'My W-2 will still come from a Chicago employer for at least a year. Does that break the petition?', a: 'Not by itself. The petition will need to explain the W-2 (a remote-work arrangement, a transitional period, etc.) and the supporting documents will need to lean harder on the Texas side (property, license, vehicle, voter, address-of-record). If the W-2 box 15 (state) says Illinois and the family is filing Illinois part-year and Texas-address federal returns, the residency officer will read that as a transition in progress and weight the documentary record accordingly. If the parent continues to file Illinois full-year resident returns, the petition is much harder.' },
    ],
    published: true,
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
    costOfLivingNote: 'South Florida (Miami-Fort Lauderdale-Palm Beach) housing has appreciated rapidly and runs comparable to or above Austin. Central and North Florida (Orlando, Tampa, Jacksonville, Tallahassee) are generally similar to or cheaper than Austin. Both Florida and Texas have no state income tax; this is one of the few origin states where the tax-savings argument does not move the needle. The decision is more about academic fit than about state taxes.',
    notableFamiliesContext: 'Florida families send a meaningful number of students to UT Austin, especially in McCombs and the College of Natural Sciences. The University of Florida\'s in-state tuition is among the lowest in the country (~$6,381/year), which means UF is hard to beat on pure tuition cost; the UT residency pathway brings UT in-state ($11,688/year) closer to but not below UF. Florida families pursuing UT often cite specific program fit (McCombs MIS, Cockrell Engineering specialties) rather than overall cost.',
    residencyMoveNote: 'Florida and Texas are both no-income-tax states, so the headline tax-driven case for a residency move is muted. Florida\'s real-estate tax structure (Save Our Homes assessment cap, three percent annual increase limit, generous homestead exemption) is more favorable than Texas\'s ten percent cap and standard homestead. Families relocating from Florida should expect that the Florida homestead must be withdrawn (you cannot claim primary residence in both states) and that the Save Our Homes benefit on the Florida property is lost on the residency shift.',
    faq: [
      { q: 'Is UF in-state always cheaper than UT in-state for a Florida family?', a: 'Yes, on pure tuition cost. UF at roughly $6,381/year (2025-26) is about $5,300/year cheaper than UT in-state at $11,688. The case for UT pivots on program fit and the cost vs. UT out-of-state ($44,908/year), not vs. UF.' },
      { q: 'What happens to the Florida homestead exemption when we shift to Texas?', a: 'The Florida homestead exemption (and the Save Our Homes assessment cap) require the property to be the owner\'s primary residence. Withdraw the homestead declaration before petitioning for Texas residency. The reset on Save Our Homes means the next Florida tax year\'s assessment is at market value, which can be a meaningful one-time tax increase if you have held the Florida home for several years.' },
      { q: 'Does the Florida Bright Futures scholarship matter here?', a: 'Bright Futures is a Florida-state academic scholarship paid to Florida public colleges. It does not transfer to UT Austin. Florida families with Bright Futures awards typically use them at UF or another Florida public if cost is the primary driver.' },
      { q: 'We just spent four months a year in Florida and four in Texas already. Does that help our case?', a: 'It can help, if the documentary record (federal tax return address, driver license, vehicle registration, voter registration) reflects Texas during the 12-month clock. Time in Florida during the clock period needs to be explained in the petition narrative; it does not by itself defeat Texas domicile so long as the indicia point to Texas.' },
    ],
    published: true,
  },
];

export const getState = (slug: string) => STATES.find(s => s.slug === slug && s.published);
export const publishedStates = () => STATES.filter(s => s.published);
