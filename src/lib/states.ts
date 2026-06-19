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
  {
    slug: 'georgia',
    name: 'Georgia',
    abbr: 'GA',
    primaryAirport: 'ATL',
    flightTimeToAustinHours: 2.0,
    drivingDistanceToAustinMiles: 920,
    publicCollegeInState: 'University of Georgia',
    inStateTuitionPublicUSD: 12_400,
    costOfLivingNote: 'Atlanta metro housing has appreciated rapidly since 2020 and now runs roughly comparable to Austin in many submarkets. Smaller Georgia metros (Macon, Athens, Savannah) are cheaper than Austin. Georgia state income tax tops out at 5.39% (with phased reductions planned); Texas has no state income tax. The state-tax savings for high earners moving from Atlanta to Austin can be substantial.',
    notableFamiliesContext: 'Atlanta-area families increasingly look outside UGA and the Georgia Tech track for selective programs. UT McCombs and Cockrell Engineering have grown as targets for Atlanta families seeking flagship-level business or engineering programs with the Texas in-state pathway. The 2-hour flight time keeps Austin within easy weekend-visit range.',
    residencyMoveNote: 'Georgia residency for tax purposes is based on domicile plus the 183-day statutory presence test. Families maintaining a Georgia home and spending more than 183 days there will remain Georgia residents for state-tax purposes even when claiming Texas domicile for UT residency. The two analyses can come out differently. Cleanest case: substantive household move from Georgia to Texas with the Georgia home sold or converted to investment property.',
    faq: [
      { q: 'How does the Georgia HOPE Scholarship factor in for UT-bound students?', a: 'The HOPE Scholarship is a Georgia-state award payable only at Georgia public institutions. It does not transfer to UT Austin. Atlanta-area families with strong HOPE-eligible students often weigh UT (at the in-state rate after the residency pathway) vs the HOPE-funded path at UGA or Georgia Tech.' },
      { q: 'Does Atlanta-to-Austin make sense given the cost of living comparison?', a: 'Housing is roughly comparable in the inner core. Atlanta has more humidity, Austin has more allergies. Both are major tech hubs. The financial differentiator for the residency move is state income tax: Georgia\'s 5.39% top rate vs Texas\'s zero. For a household earning $300K, that\'s ~$15K/year of state-tax savings that compounds over the four years.' },
      { q: 'Will my Georgia 529 contributions still work for UT?', a: 'Yes for the withdrawals (federally qualified education expenses are unaffected by state of residency). The state-tax deduction Georgia residents receive for in-state 529 contributions does not transfer to Texas residents. If you stop being a Georgia resident, contributions made before the move retain their tax basis; contributions after the move are not Georgia-tax-deductible.' },
      { q: 'My W-2 will still come from Atlanta for a year or two while I transition. Does that block the petition?', a: 'It complicates but does not block. The petition will explain the transitional employment situation. The other documentary indicia (driver license, vehicle, voter registration, federal tax return address) should clearly point to Texas. Filing a Georgia non-resident return and a federal return with the Texas address for the relevant tax year typically holds together.' },
    ],
    published: true,
  },
  {
    slug: 'washington',
    name: 'Washington',
    abbr: 'WA',
    primaryAirport: 'SEA',
    flightTimeToAustinHours: 4.0,
    drivingDistanceToAustinMiles: 2200,
    publicCollegeInState: 'University of Washington',
    inStateTuitionPublicUSD: 12_700,
    costOfLivingNote: 'Seattle metro and the eastside (Bellevue, Redmond, Kirkland) are among the most expensive housing markets in the US. Austin housing runs 30-50% cheaper than comparable Seattle-area neighborhoods. Both Washington and Texas have no state income tax, so the tax-driven case for the move is muted (similar to Florida). The case becomes primarily about UT program fit and Austin lifestyle.',
    notableFamiliesContext: 'Microsoft, Amazon, Boeing, and the broader Seattle tech corridor have built a population of high-earning families whose students often consider UT for CS, Engineering, and McCombs. The cross-country travel time is the main friction; 4 hours direct from SEA to AUS.',
    residencyMoveNote: 'Washington state residency analysis is straightforward because Washington has no state income tax. The move to Texas does not create complex tax-residency questions on the Washington side. Property in Washington (often the family\'s primary residence) needs to either be sold, converted to rental, or maintained as a second home with the supporting indicia clearly pointing to Texas for the 12-month residency clock.',
    faq: [
      { q: 'Why would a Washington family go to UT instead of UW?', a: 'UW direct admission to CS, the Foster School of Business, and Engineering can be difficult; UT has slightly different admission patterns and some programs are easier to access. UT also has a different culture (Austin music/food scene vs Seattle) that families weigh. The financial math after the residency pathway brings UT roughly to parity with UW in-state, both around $12K/year.' },
      { q: 'How much will the Washington-to-Texas state tax savings be?', a: 'Very little, because neither state taxes income. The financial case for the move is primarily about UT in-state tuition reducing the four-year bill by ~$99,660 vs UT out-of-state.' },
      { q: 'Can I keep my Seattle home while my child attends UT?', a: 'Yes, structurally. The trick is the documentary record: if the Washington home is still your primary residence for federal tax purposes, the federal return for the relevant year reflects a Washington address. UT\'s residency office sees that and concludes you remained domiciled in Washington. The fix is to file federal returns with the Texas address as primary residence during the 12-month clock, which generally means either selling the Washington home, converting it to rental property reported on Schedule E, or genuinely treating the Texas property as the primary household.' },
      { q: 'How does the 4-hour flight affect parent visit patterns?', a: 'Most Seattle-area UT parents fly in 2-3 times per year (move-in, mid-fall visit, graduation/spring), with the student flying home for breaks. Flight cost runs $300-$500 round-trip on Alaska or Delta. Annual travel budget: $2,500-$4,000.' },
    ],
    published: true,
  },
  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    abbr: 'MA',
    primaryAirport: 'BOS',
    flightTimeToAustinHours: 4.0,
    drivingDistanceToAustinMiles: 1900,
    publicCollegeInState: 'University of Massachusetts Amherst',
    inStateTuitionPublicUSD: 17_300,
    costOfLivingNote: 'Boston metro, especially Cambridge, Brookline, Newton, and the western suburbs, ranks among the most expensive US housing markets. Austin housing runs significantly cheaper than comparable Boston-area neighborhoods. Massachusetts state income tax is a flat 5% (with a 4% millionaire surtax on income above $1M); Texas has no state income tax. The tax savings for high-earning Boston-area families moving to Texas are meaningful.',
    notableFamiliesContext: 'Boston-area families considering UT often have students admitted to or interested in McCombs, CS, or Plan II Honors. The strong Boston-to-Texas tech connection (many MIT and Northeastern alumni in Austin) means the cultural transition feels less jarring than parents expect. UT alumni networks in Boston are growing but still smaller than the East Coast counterparts.',
    residencyMoveNote: 'Massachusetts residency for tax purposes uses a domicile-plus-183-day test. Families maintaining a Massachusetts home and spending more than 183 days there will remain Massachusetts statutory residents even when claiming Texas domicile. For the UT residency pathway, the cleanest case is a substantive household move; a part-time arrangement is harder to defend on both ends.',
    faq: [
      { q: 'Is UT at the in-state rate really cheaper than UMass Amherst?', a: 'Yes. UMass Amherst in-state runs roughly $17,300/year. UT at the resident rate is $11,688/year. That is about $5,600/year cheaper at UT, or $22,400 over four years. Combined with the $99,660 saved vs UT out-of-state, the cumulative four-year delta vs the do-nothing scenario is substantial.' },
      { q: 'How does the Massachusetts 529 (U.Plan and U.Fund) interact with Texas residency?', a: 'Massachusetts 529 contributions earn a state income tax deduction (up to $1,000 single, $2,000 joint). After residency shift to Texas, that deduction is gone. Federal tax treatment of withdrawals for qualified education expenses is unaffected.' },
      { q: 'My W-2 will keep coming from a Boston employer. How does that affect the petition?', a: 'It complicates but does not block. UT\'s residency office will see the Massachusetts W-2 and the petition narrative needs to explain it (remote work from Texas, transitional employment, etc.). The other documentary indicia should clearly point to Texas. Filing a Massachusetts non-resident return for the year of move plus a federal return with the Texas address is the typical structure.' },
      { q: 'What about the Boston-to-Austin flight time and frequency?', a: '4-hour direct flights on JetBlue, Delta, American. Many Boston-area UT parents fly in 2-3 times per year. Round-trip fares run $200-$400 outside peak. Annual travel budget for the family: $2,500-$4,000.' },
    ],
    published: true,
  },
  {
    slug: 'virginia',
    name: 'Virginia',
    abbr: 'VA',
    primaryAirport: 'DCA',
    flightTimeToAustinHours: 3.0,
    drivingDistanceToAustinMiles: 1500,
    publicCollegeInState: 'University of Virginia',
    inStateTuitionPublicUSD: 22_300,
    costOfLivingNote: 'Northern Virginia (Fairfax, Arlington, McLean) is among the most expensive US housing markets and runs 40-70% above Austin pricing. Outside the DC metro, Virginia is more comparable to Austin. Virginia state income tax tops out at 5.75% (Northern Virginia families often pay significant local taxes too); Texas has no state income tax. The tax-savings argument for the move is meaningful for high earners.',
    notableFamiliesContext: 'Northern Virginia families with students admitted to UVA, William & Mary, or Virginia Tech also frequently consider UT, especially for McCombs Business and Cockrell Engineering. The DC-to-Austin connection is strong because both metros have heavy government-adjacent industries (federal contracting, biotech, defense). UVA in-state tuition at $22,300 is one of the highest in the US, making UT at the in-state rate dramatically cheaper.',
    residencyMoveNote: 'Virginia residency for tax purposes is determined by domicile. Maintaining a Virginia home while spending most of the year there will continue Virginia residency. A substantive move to Texas is the cleanest path. The $200-day rule for Virginia statutory residency adds complexity for families splitting time.',
    faq: [
      { q: 'Why would a Virginia family go to UT instead of UVA?', a: 'UVA in-state at $22,300/year is more expensive than UT in-state at $11,688/year, so for families who do successfully establish Texas residency, UT is cheaper than the home-state flagship. Over four years, the difference is ~$42,000. Plus the UT program fit (especially McCombs and Cockrell) may suit certain students better than UVA\'s offerings.' },
      { q: 'My family has VEA / Virginia 529 plan contributions. What happens?', a: 'Virginia 529 contributions earn a state income tax deduction (up to $4,000 per beneficiary per year, with unlimited rollover). After the move to Texas, that deduction is gone but the existing contributions retain their tax basis. Withdrawals for qualified expenses remain federally tax-free.' },
      { q: 'Does living in Northern Virginia complicate the Texas residency move?', a: 'NoVa\'s high cost of living actually makes the move easier financially because Austin housing is cheaper. The tax savings (no Texas income tax) plus the lower housing cost can fund the Texas property carrying cost. The complication is family ties (DC-area jobs, schools for younger siblings). Many families do the move in phases.' },
      { q: 'How is the DC-to-Austin flight time?', a: 'About 3 hours direct on American, United, Southwest. Frequent service. Round-trip fares $200-$450. Annual family travel budget: $2,000-$3,500.' },
    ],
    published: true,
  },
  {
    slug: 'new-jersey',
    name: 'New Jersey',
    abbr: 'NJ',
    primaryAirport: 'EWR',
    flightTimeToAustinHours: 4.0,
    drivingDistanceToAustinMiles: 1740,
    publicCollegeInState: 'Rutgers University, New Brunswick',
    inStateTuitionPublicUSD: 17_600,
    costOfLivingNote: 'New Jersey housing runs 30-80% above Austin depending on the town. Bergen County, Morris County, and the desirable shore communities are among the most expensive in the US. New Jersey state income tax tops out at 10.75% and the state has high property taxes (highest median in the US at ~2.4%). Texas has no state income tax and lower property tax rates. Tax savings from a NJ-to-TX move are substantial.',
    notableFamiliesContext: 'NJ families historically send students to Rutgers, NJIT, Princeton, and the Ivies. UT has grown as a target especially for CS, McCombs, and Liberal Arts. The relatively cheap Austin housing vs the impossibly expensive NJ housing makes the math attractive for families who can stomach the move.',
    residencyMoveNote: 'New Jersey residency for tax purposes uses domicile plus statutory presence tests. Families maintaining the NJ home and continuing to work in the metro area will struggle to defend the Texas residency claim on the tax side. Cleanest case: substantive household move with the NJ home sold or converted, plus parental remote-work arrangement that supports Texas as the primary domicile.',
    faq: [
      { q: 'Is UT in-state really cheaper than Rutgers?', a: 'Yes. Rutgers in-state runs about $17,600/year. UT at the resident rate is $11,688. About $6,000/year cheaper or ~$24,000 over four years. Combined with the $99,660 saved vs UT out-of-state, the cumulative four-year financial impact is meaningful.' },
      { q: 'How much state income tax would I save moving from NJ to Texas?', a: 'For a household earning $500K in NJ, the NJ state tax burden runs roughly $35K-$40K/year. Texas: zero. The four-year state-tax savings of $140K-$160K alone substantially funds the Texas property purchase and carrying costs.' },
      { q: 'What about the high NJ property tax I currently pay?', a: 'NJ property tax averages 2.4% of assessed value, among the highest in the US. Travis County (Austin) runs 2.0-2.3%. The savings on the property tax side are smaller but help. The bigger win is the income tax differential.' },
      { q: 'Will my NJ employer let me work from Texas?', a: 'It depends. The NJ-to-NY-to-Austin remote work pattern has become more accepted post-2020. Some employers require NJ presence; others are fully remote-friendly. Confirm with HR before committing to the move; some employers will require state tax withholding still be done in the NJ system.' },
    ],
    published: true,
  },
  {
    slug: 'colorado',
    name: 'Colorado',
    abbr: 'CO',
    primaryAirport: 'DEN',
    flightTimeToAustinHours: 2.5,
    drivingDistanceToAustinMiles: 980,
    publicCollegeInState: 'University of Colorado Boulder',
    inStateTuitionPublicUSD: 14_600,
    costOfLivingNote: 'Denver and Boulder housing have appreciated significantly in the past decade and run roughly comparable to Austin pricing for similar properties. Colorado state income tax is a flat 4.4%; Texas has no state income tax. The tax savings are modest but meaningful for high earners.',
    notableFamiliesContext: 'Colorado families consider UT particularly for McCombs Business, Cockrell Engineering, and Plan II Honors. The Denver-to-Austin tech corridor has grown substantially. Both metros share an outdoorsy, tech-heavy culture, so the move feels familiar to Colorado families.',
    residencyMoveNote: 'Colorado residency for tax purposes is determined by domicile. The move to Texas is straightforward when the family genuinely transitions. Maintaining the Colorado home requires careful documentary attention to ensure the federal tax return shows Texas as the residence of record.',
    faq: [
      { q: 'Is UT in-state really cheaper than CU Boulder?', a: 'Yes, by about $3,000/year. CU Boulder runs $14,600 in-state; UT runs $11,688. Over four years, $12,000 cheaper. Plus the $99,660 saved vs UT out-of-state, the cumulative financial impact is meaningful.' },
      { q: 'How does Colorado state tax compare to Texas?', a: 'Colorado flat 4.4%. Texas zero. For a $300K household, that\'s ~$13K/year of state-tax savings. Modest but worthwhile.' },
      { q: 'Can I keep my Denver or Boulder home while my child attends UT?', a: 'Yes, with documentary care. The federal tax return for the relevant year must show Texas as the primary residence. Selling the Colorado home or converting to rental property simplifies the case. Keeping it as a second home is workable but requires clear narrative.' },
      { q: 'How is the Denver-to-Austin flight?', a: '2.5 hours direct on Southwest, Frontier, American, United. Round-trip fares $150-$350. Easy weekend visits. Annual family travel budget: $1,500-$3,000.' },
    ],
    published: true,
  },
  {
    slug: 'arizona',
    name: 'Arizona',
    abbr: 'AZ',
    primaryAirport: 'PHX',
    flightTimeToAustinHours: 2.0,
    drivingDistanceToAustinMiles: 1020,
    publicCollegeInState: 'University of Arizona',
    inStateTuitionPublicUSD: 13_200,
    costOfLivingNote: 'Phoenix and Tucson housing run cheaper than Austin in most submarkets. Scottsdale and Paradise Valley run roughly comparable to Austin. Arizona state income tax is a flat 2.5% (one of the lowest in the country); Texas has zero. The state-tax move is modest.',
    notableFamiliesContext: 'Arizona families consider UT for CS, McCombs, and the College of Natural Sciences. The Phoenix metro\'s rapid growth has created a high-earner population interested in flagship-public alternatives to ASU and Arizona. The 2-hour Phoenix-to-Austin flight keeps it within reach.',
    residencyMoveNote: 'Arizona residency for tax purposes is straightforward. Move documentation requires the standard property and indicia. Arizona\'s relatively low income tax means the tax savings from moving to Texas are modest, but the UT tuition savings remain the primary financial driver.',
    faq: [
      { q: 'Why move from Arizona to establish Texas residency? Arizona is already cheap.', a: 'Two reasons: (1) UT is a flagship destination with programs that ASU and Arizona may not offer at the same level; (2) Texas property typically appreciates faster than Arizona property, and the residency purchase functions as a real estate investment in a growing market.' },
      { q: 'Is UT in-state really cheaper than Arizona in-state?', a: 'Yes. Arizona runs $13,200/year, UT runs $11,688. About $1,500/year cheaper or ~$6,000 over four years. The bigger financial driver is vs UT out-of-state ($99,660 saved).' },
      { q: 'How does the AZ-to-TX state tax compare?', a: 'Arizona flat 2.5%, Texas zero. For most households the difference is modest ($1,000-$5,000/year). Not the primary driver of the move.' },
      { q: 'How is the Phoenix-to-Austin flight?', a: '2 hours direct on American, Southwest, Frontier. Round-trip fares $150-$300. Easy weekend visits.' },
    ],
    published: true,
  },
];

export const getState = (slug: string) => STATES.find(s => s.slug === slug && s.published);
export const publishedStates = () => STATES.filter(s => s.published);
