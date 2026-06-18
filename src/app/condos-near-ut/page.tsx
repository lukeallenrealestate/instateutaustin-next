import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactForm } from '@/components/ContactForm';
import { SITE } from '@/lib/site';

const TITLE = 'Condos Near UT Austin: The Residency Buyer Guide';
const DESCRIPTION = 'How to evaluate condos near UT Austin for the Texas residency pathway. West Campus vs Hyde Park vs downtown, HOA gotchas, owner-occupancy clauses, resale liquidity.';
const PATH = '/condos-near-ut';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Do I have to use a UT-area realtor, or can I use my home-state agent?', a: 'You must use a Texas-licensed real estate broker for any Texas transaction. Your home-state agent cannot legally represent you in Texas unless licensed here. A Texas-licensed broker who specializes in UT-area transactions will know the neighborhood specifics, the building-level HOA red flags, and the lender ecosystem.' },
  { q: 'What is a fair commission to pay a buyer\'s agent?', a: 'In the Austin market the buyer\'s agent commission is typically paid by the seller, at 2.5-3.0% of purchase price. After the August 2024 NAR settlement changes, buyer\'s agents now must have a signed buyer\'s representation agreement specifying their fee.' },
  { q: 'How long does a typical UT-area condo transaction take?', a: '35-45 days from contract to close, assuming financing. Cash deals can close in 14-21 days. Condos in some buildings require HOA approval of the buyer, which can add a week or two.' },
  { q: 'What if I buy and then my student does not actually want to live there?', a: 'Rare but it happens. The property can be rented to other UT students at market rate; the rental income offsets carrying costs. If a residency petition is in motion, get advice before changing the use.' },
  { q: 'What happens to the property after my student graduates?', a: 'Three common paths: sell (Austin\'s UT-area condo market is liquid; 30-60 days on market for a well-priced unit); hold and rent; or hand off to a younger sibling enrolling at UT.' },
  { q: 'How does the homestead exemption work on a property where the student lives but the parents do not?', a: 'The homestead exemption requires the property to be the homeowner\'s principal residence. An out-of-state parent who buys a property for a child typically does not qualify. The simpler alternative is to not claim homestead and accept the unprotected property tax base as a carrying cost.' },
  { q: 'Are West Campus condos overbuilt? Will values hold?', a: 'West Campus has had significant new supply since 2015. So far, demand has absorbed it: UT enrollment continues to grow. The risk is concentrated in the luxury high-rise segment above $800K. Mid-range units ($400K-$650K) sit in a deeper demand pool.' },
];

interface Nbhd { name: string; price: string; stats: Array<[string, string]>; intro: string; what: string; avoid: string; }

const NBHDS: Nbhd[] = [
  {
    name: 'West Campus',
    price: '$325K-$750K (condos), $850K-$1.6M (rare houses)',
    stats: [['Walk to UT', '5-15 min'], ['HOA typical', '$300-$800/mo'], ['Liquidity', 'High'], ['Rule #3 fit', 'Excellent']],
    intro: 'The densest student-friendly condo inventory in Austin. Buildings range from older mid-rises from the 1980s (smaller HOAs, dated finishes, modest dues) to luxury high-rises that have been built since 2010 (concierge, pools, fitness centers, dues $600-$800/month). Almost every building permits owner-occupancy and rentals; very few have restrictive HOA rules that would interfere with Rule #3.',
    what: 'Buildings with a healthy reserve fund (request the HOA financial statement), no pending major capital assessments, and a clear lease policy. The newer luxury high-rises (Skyloft, Lark, The Standard) have strong resale liquidity but charge premium prices per square foot; older mid-rises (The Block, The Centennial, Croix) are better value but less convenient amenities-wise.',
    avoid: 'Co-op buildings (rare but they exist around the Drag), financing is harder. Buildings with active special-assessment litigation in their disclosures. Anywhere with a rental cap that would block Rule #4 conversion if you ever change strategy.',
  },
  {
    name: 'Hyde Park',
    price: '$425K-$750K (condos/townhomes), $800K-$1.8M (houses)',
    stats: [['Walk to UT', '15-30 min'], ['Bike to UT', '8-12 min'], ['Liquidity', 'High'], ['Rule #3 fit', 'Excellent']],
    intro: 'The historic neighborhood directly north of campus. Mostly small early-20th-century houses, with a scattering of newer condo conversions and townhomes along Avenue A, Avenue B, and the cross streets. More residential feel than West Campus, fewer giant student towers, more graduate-student and professional residents alongside undergraduates. Bike commute to campus is easy on the 30th Street neighborhood greenway.',
    what: 'Houses in the $500K-$800K range with 3 bedrooms work as both Rule #3 (student plus 1-2 roommates) and as a hedged-out asset. Newer construction townhomes (the Avenue G and Speedway developments from the 2015-2020 era) are turnkey but at the higher end of the range.',
    avoid: 'Older houses with deferred maintenance and known foundation issues. Austin\'s soil is hard on slab foundations and Hyde Park has its share of repaired-but-precarious houses. Get a thorough inspection and a structural engineer if anything looks suspicious.',
  },
  {
    name: 'North Campus & the Drag',
    price: '$375K-$850K',
    stats: [['Walk to UT', '5-15 min'], ['HOA typical', '$250-$600/mo'], ['Liquidity', 'Moderate'], ['Rule #3 fit', 'Good']],
    intro: 'The strip between Guadalupe Street ("the Drag") and Speedway, north of MLK Boulevard. Smaller inventory than West Campus but more diverse: older single-family conversions, mid-rise condos, a few new-construction projects. Often slightly cheaper than West Campus on a per-square-foot basis with similar walk-to-campus times.',
    what: 'Buildings or houses with allocated parking, North Campus parking is tight and on-street is permit-only.',
    avoid: 'Properties on the immediate Drag-adjacent commercial strip (Guadalupe between 24th and 29th) can be noisy and offer poor resale comps.',
  },
  {
    name: 'Downtown (the Austonian, Sienna, The Independent, 360)',
    price: '$525K-$2.5M+',
    stats: [['Walk to UT', '20-35 min'], ['HOA typical', '$700-$2,400/mo'], ['Liquidity', 'Variable'], ['Rule #3 fit', 'OK']],
    intro: 'Downtown Austin\'s residential high-rises are the option for families who want amenities, a metro lifestyle for the student, and a property that doubles as a family pied-à-terre when parents visit. The downside is distance from UT, the closest downtown high-rises are about 20 minutes walk to campus.',
    what: 'Buildings with documented owner-occupancy ratios above 60% (some buildings tilt heavily toward investor-owned units, which can hurt FHA financing and resale). Tower views of Lady Bird Lake or the UT Tower add ~10-15% to resale value.',
    avoid: 'Buildings with short-term-rental restrictions if you are considering Rule #4 (most downtown buildings have these). Buildings with pending major-capital-improvement assessments.',
  },
  {
    name: 'East Austin (78702, 78722, parts of 78721)',
    price: '$400K-$900K (homes), $550K-$1.3M (duplexes/multifamily)',
    stats: [['Drive to UT', '7-15 min'], ['HOA typical', '$0 or low'], ['Liquidity', 'High'], ['Rule #4 fit', 'Excellent']],
    intro: 'The premier neighborhood for Rule #4 acquisitions. East Austin\'s housing stock includes a meaningful number of duplexes, fourplexes, and small multifamily properties at price points that work for the rental-business pathway. The neighborhood has appreciated rapidly over the past decade and continues to attract significant investment. Single-family inventory is strong as well; many Rule #3 buyers favor East Austin houses with a separate ADU.',
    what: 'Properties in the 78702 ZIP code south of MLK have the best commute to UT. Look for parcels zoned for accessory dwelling units (most East Austin SF-3 zoning permits an ADU). For multifamily, verify legal compliance, some East Austin duplexes are non-conforming uses with regulatory risk.',
    avoid: 'Properties in areas where the floodplain has changed in recent FEMA updates, Boggy Creek and Tannehill Branch areas. Pull the latest flood map before offer.',
  },
];

export default function CondosPage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Condos Near UT', path: PATH },
      ])} />
      <Schema data={articleSchema({
        headline: TITLE,
        description: DESCRIPTION,
        path: PATH,
        datePublished: '2026-05-11',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="Property buyer guide"
        title="Condos Near UT Austin: The Residency Buyer Guide"
        lede={<>How to evaluate UT-area condos and small homes for the Texas residency pathway. Neighborhoods, HOAs, owner-occupancy clauses, resale liquidity, and the property-level gotchas that cost families money.</>}
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The 60-second answer">
            Most out-of-state UT families pursuing Rule #3 (student-occupied) buy in West Campus or Hyde Park: 1-bed and 2-bed condos in the $325K-$650K range, walk or short bike to campus, HOA dues $300-$800/month. Rule #4 (rental LLC) families look at East Austin duplexes and small multifamily in the $550K-$1.2M range. Across all neighborhoods, inspect the HOA documents (reserve study, special assessments, owner-occupancy ratio, rental cap, minimum lease term), use a Texas-licensed broker who has run this play before, and never invent or rely on third-party-quoted MLS prices.
          </QuickAnswer>

          <AuthorBox />

          <h2 className="mt-0">What this guide is for</h2>
          <p>You have decided the Texas residency pathway is worth pursuing. You have read <Link href="/texas-residency-rules">the rules</Link>, run <Link href="/tuition-calculator">the calculator</Link>, and picked <Link href="/rule-3-vs-rule-4">Rule #3 or Rule #4</Link>. Now you need to find the actual property. This page covers the property-level decisions: which UT-area neighborhoods make sense, what to look for in a condo or small house, how to read a condo&apos;s HOA documents, and the eight or nine ways a property that looks great on Zillow can fail to serve the residency pathway.</p>
          <p>Most parents pursuing Rule #3 end up looking at the same five neighborhood clusters: <strong>West Campus</strong>, <strong>Hyde Park</strong>, <strong>North Campus</strong>, <strong>downtown</strong>, and <strong>East Austin</strong>. A small number look further out (Mueller, Crestview, Allandale) for value. Rule #4 families typically focus on East Austin, North Loop, or anywhere multifamily inventory exists at the right price point.</p>

          <h2>The five neighborhoods, ranked by relevance</h2>

          {NBHDS.map((n, i) => (
            <div key={i} className="bg-white border border-hairline rounded-lg p-7 my-6">
              <div className="flex justify-between items-baseline gap-4 flex-wrap">
                <h3 className="m-0 text-ink font-serif text-2xl">{n.name}</h3>
                <div className="font-serif text-lg text-burnt">{n.price}</div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
                {n.stats.map(([l, v], j) => (
                  <div key={j} className="bg-paper py-2.5 px-3 rounded">
                    <div className="text-[10px] uppercase tracking-wider text-body">{l}</div>
                    <div className="font-bold text-ink">{v}</div>
                  </div>
                ))}
              </div>
              <p>{n.intro}</p>
              <p><strong>What to look for:</strong> {n.what}</p>
              <p><strong>What to avoid:</strong> {n.avoid}</p>
            </div>
          ))}

          <h2>Cross-cutting evaluation criteria</h2>

          <h3>HOA documents, the eight checks</h3>
          <ol>
            <li><strong>Owner-occupancy ratio:</strong> What percentage of units in the building are owner-occupied? For Rule #3, a higher ratio is generally fine; for Rule #4, make sure the HOA allows rentals and does not have a cap that is already reached.</li>
            <li><strong>Reserve study and reserve balance:</strong> The HOA should have a recent reserve study and a reserve balance proportional to the building&apos;s age. Severely underfunded reserves predict special assessments.</li>
            <li><strong>Pending special assessments:</strong> Ask explicitly. Some buildings have multimillion-dollar pending assessments that the seller may not volunteer.</li>
            <li><strong>Insurance coverage:</strong> The HOA&apos;s master policy and the unit owner&apos;s HO-6 policy together cover the property. Coverage gaps are a hidden risk.</li>
            <li><strong>Pet policy:</strong> Practical for the student.</li>
            <li><strong>Rental cap:</strong> Some buildings limit the percentage of units that can be rented at any given time. This caps Rule #4 flexibility.</li>
            <li><strong>Minimum lease term:</strong> Many buildings ban short-term rentals (under 30 or 90 days), blocking STR strategies.</li>
            <li><strong>Financial statements:</strong> Last two or three years of HOA financials and the current operating budget. Look for operating deficits and outsized legal expenses.</li>
          </ol>

          <h3>Property condition, the inspection priorities</h3>
          <ul>
            <li><strong>Foundation:</strong> Slab-on-grade construction in clay soil. Hairline cracks are normal; differential movement is not.</li>
            <li><strong>HVAC:</strong> Austin summers are hard on AC systems. Units older than 12 years should be valued at end-of-life.</li>
            <li><strong>Roof:</strong> Texas hail and sun age roofs faster than northern climates. Inspect for hail damage; insurance carriers can be strict about roof age.</li>
            <li><strong>Plumbing:</strong> Older homes (pre-1980) may have galvanized supply lines that need replacement. Slab leaks are a known Austin issue.</li>
            <li><strong>Electrical:</strong> Aluminum wiring in some 1970s-era condos; specific issue, easy to verify.</li>
            <li><strong>Termites:</strong> Active termites are common. A wood-destroying-organism (WDO) inspection is separate from the general inspection and important.</li>
          </ul>

          <h3>Lender selection</h3>
          <p>Out-of-state buyers face the question of whether to use a national lender or a Texas-licensed mortgage broker. Both work; Texas-licensed brokers tend to understand the residency-pathway use case better and can recommend the right loan product (owner-occupied second home vs. investment property). Closing costs in Texas include a one-time title insurance premium (~0.5% of purchase price) and an attorney&apos;s review fee. The title company handles closing rather than an escrow agent, which is a Texas-specific quirk.</p>

          <h3>Property tax planning</h3>
          <p>Travis County property tax averages 2.0-2.3% of assessed value annually, paid in late December or January each year. The homestead exemption (if claimed on a Rule #3 property) reduces the taxable value by $40,000 (statewide homestead) and another $25,000 for school taxes, plus caps annual assessment increases at 10%.</p>

          <h3>Insurance</h3>
          <p>Texas homeowners insurance has tightened materially since 2020. Expect to pay $1,500-$3,500/year for a $500K condo or $2,500-$5,000+/year for a single-family house. Hail and wind coverage drives much of the cost. Some carriers (notably State Farm, Lemonade) have restricted writing in parts of Travis County; shop early. For Rule #4 LLC-owned properties, you will need landlord/commercial coverage rather than personal policies.</p>

          <h2>Pattern recognition: what successful purchases tend to look like</h2>
          <p>Across the families we have watched go through this process, a few patterns recur in the deals that perform best:</p>
          <ul>
            <li><strong>2-bedroom condos in West Campus at $425K-$575K.</strong> The pricing sweet spot. Walk to campus, well-resold, manageable HOA. Student lives in one bedroom; the second is a guest room when parents visit and an office during the year.</li>
            <li><strong>Hyde Park 3-bedroom homes at $650K-$850K.</strong> For families with two or three siblings who will pass through UT, or for families who want to retain after the first student graduates and rent it as a 3-bedroom student rental.</li>
            <li><strong>East Austin duplexes at $700K-$900K (Rule #4).</strong> One side rented to a non-family tenant, the other side occupied by the student. The depreciation alone often makes the federal tax math favorable.</li>
            <li><strong>South Lamar or East Riverside condos at $325K-$425K.</strong> Lower entry price, slightly longer commute. Best for cost-sensitive families pursuing Rule #3 minimally, the residency works, the savings still materialize.</li>
          </ul>

          {/* RECOMMENDED REALTOR */}
          <div className="bg-gradient-to-br from-cream to-paper border border-burnt-deep rounded-lg p-8 my-10">
            <h3 className="mt-0">About our recommended local realtor</h3>
            <p>The property pathway works best when you have a Texas-licensed broker who has run this play before: someone who has helped multiple families navigate the Rule #3 / Rule #4 decision, who knows which West Campus buildings have clean HOAs, and who understands that the deal needs to serve a residency strategy as well as a real-estate strategy.</p>
            <p>Our recommended local broker is <strong>{SITE.partner.name}</strong>, Texas Real Estate Commission license #{SITE.partner.trecLicense}, of {SITE.partner.brokerage}. {SITE.partner.name.split(' ')[0]} has worked extensively with out-of-state UT families on both Rule #3 condo purchases and Rule #4 multifamily acquisitions. He works on standard buyer-agency commission terms (paid by the seller in the vast majority of Austin transactions) and there is no cost to the family for an introduction.</p>
            <p>If you would like an introduction, use the contact form below. We forward your message directly to him and he responds within one business day.</p>

            <div className="mt-6">
              <ContactForm
                source="instateutaustin-condos-near-ut"
                heading={`Get an intro to ${SITE.partner.name.split(' ')[0]}`}
              />
            </div>
          </div>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Ready to look at property?</h2>
            <p>Submit the form above to be connected with our recommended Austin-licensed broker, or read the supporting pages first.</p>
            <Link href="/12-month-timeline" className="btn btn-gold mt-4 inline-block">See the 12-month timeline →</Link>
            {' '}
            <a href={SITE.idxSearchUrl} target="_blank" rel="noopener" className="btn mt-4 inline-block !bg-transparent text-ink !border-burnt-deep">Browse MLS listings →</a>
          </div>
        </div>
      </section>
    </>
  );
}
