import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema, realEstateAgentSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactSection } from '@/components/ContactSection';
import { TUITION, fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

const TITLE = 'West Campus Condos for UT Austin In-State Tuition (Building Guide 2026)';
const DESCRIPTION = `West Campus condo strategy for UT Austin in-state tuition. Every major West Campus building compared: Skyloft, Inspire, 26 West, Rio West, Villas on Rio, Rambler, Callaway. Prices, HOA, walkability, and how the residency pathway saves ~${fmtUSD(TUITION.threeYearSavings)} in tuition.`;
const PATH = '/west-campus-condos-in-state-tuition';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Why buy a West Campus condo specifically?', a: 'West Campus is the dense urban neighborhood immediately west of UT\'s main campus. It is the closest walkable residential area to campus (5-15 minutes on foot) and the primary market for UT student off-campus housing. Buying a West Campus condo places the student in the heart of UT social life, walking distance to classes and Sixth Street, and creates a clear residential base for the Texas residency pathway.' },
  { q: 'How much do West Campus condos cost?', a: 'West Campus condo prices depend on building age, size, and amenities. Newer luxury high-rises (Skyloft, Inspire, 26 West, Rio West) typically $450,000-$650,000 for 1-2 bedroom units. Mid-tier buildings (Lark, Villas on Rio, 21 Rio) $350,000-$500,000. Older walk-up buildings $250,000-$400,000. HOA fees range $300-$800/month. Property tax approximately 2% of value annually.' },
  { q: 'Which West Campus buildings are best for the residency pathway?', a: 'For the residency pathway, ANY West Campus condo works as long as the property is at a real residential address and the documentary set is properly established. Building selection is more about student lifestyle preference (amenities, price, walking distance) than legal considerations. Newer buildings offer more amenities but higher HOA; older buildings offer character and lower cost. All can support a successful residency petition when properly structured.' },
  { q: 'Can I rent out a West Campus condo when my student isn\'t using it?', a: 'For Rule #3 (parent-owned, student-occupied) structures, the condo should be the student\'s primary residence, so substantial subletting is inconsistent with the pathway. For Rule #4 (LLC rental structure), the condo is a rental property, and having the student plus 1-2 additional student tenants is acceptable. During summers or breaks, occasional short-term rentals can be structured but should not compromise the student\'s primary residence classification.' },
  { q: 'What are HOA fees like in West Campus buildings?', a: 'West Campus HOA fees vary widely by building. Newer luxury buildings: $500-$800/month (covers pool, gym, security, common areas, some utilities). Mid-tier buildings: $350-$550/month. Older walk-up buildings: $200-$400/month. Some buildings include water, trash, and internet in the HOA; others charge these separately. Always review the HOA documents (financial statements, reserve study, litigation history) before purchasing.' },
  { q: 'How do West Campus condos hold value?', a: 'West Campus condos have historically appreciated at 3-5% annually, tracking Austin metro real estate. Demand is stable due to continuous UT enrollment; rental demand from student families and investors keeps values supported. Individual buildings vary; some newer high-rises have appreciated 5-8% annually while some older buildings have appreciated more modestly. Long-term (10+ years), West Campus has been one of the stronger Austin submarkets.' },
  { q: 'Should I buy pre-construction or existing West Campus condos?', a: 'Both work for the residency pathway; different considerations. Pre-construction (buying units in buildings under development): potential for appreciation during construction; delivery timeline risk; typically higher HOA at delivery. Existing condos: immediate occupancy; established HOA history; known unit condition. For families with tight timing for the residency clock, existing condos with quick close are typically preferable.' },
  { q: 'What if my UT student doesn\'t want to live in West Campus?', a: 'West Campus is preferred for walkability but not required. Alternatives: Hyde Park (10-15 min bike/scooter), North Campus, East Riverside (bus or car), or suburban Austin (Round Rock, Cedar Park) for families fully relocating. The residency pathway works with any Texas residential address; building or neighborhood selection is about student lifestyle. Some UT students actively prefer non-West-Campus environments (quieter, more traditional residential, or in single-family homes).' },
];

export default function WestCampusCondosPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'West Campus Condos for UT In-State Tuition', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />
      <Schema data={realEstateAgentSchema()} />

      <PageHero
        eyebrow="West Campus condo strategy"
        title={<h1 className="text-ink max-w-[24ch]">West Campus Condos for UT Austin In-State Tuition</h1>}
        lede={`West Campus condo strategy for UT Austin in-state tuition. Every major building compared, price ranges, HOA breakdown, walkability, and how the residency pathway saves ~${fmtUSD(TUITION.threeYearSavings)} in tuition over three years.`}
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="West Campus condos + UT in-state tuition">
            West Campus is the dense urban neighborhood immediately west of UT&apos;s main campus and the primary market for UT student off-campus housing. Buying a West Campus condo (typical price <strong>$350K-$650K</strong>) and using it as the base for the Texas residency pathway saves approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> in UT tuition after 12 months of qualifying Texas domicile (roughly <strong>{fmtUSD(TUITION.threeYearSavings)}</strong> over three years). The condo doubles as student housing, replacing $80K-$130K of West Campus rent over four years.
          </QuickAnswer>

          <AuthorBox blurb="Texas REALTOR (TREC #788149) who has personally helped dozens of out-of-state families buy West Campus condos as part of the UT Austin residency pathway strategy." />

          <h2 className="mt-0">Why West Campus condos work for the residency pathway</h2>
          <p>West Campus is bounded roughly by Guadalupe Street to the east, MoPac to the west, MLK Boulevard to the south, and 29th Street to the north. Approximately 15-20 major condo buildings plus dozens of smaller buildings and houses populate this small urban footprint. The neighborhood is designed for UT students; most residents are undergraduates, graduate students, and university-adjacent professionals.</p>

          <p>For the Texas residency pathway, West Campus condos have three key advantages:</p>
          <ol>
            <li><strong>Real residential address.</strong> Every West Campus building is at a legitimate residential address with mail delivery, utility services, and documented occupancy.</li>
            <li><strong>Walkability to UT.</strong> The student can walk to campus, satisfying the &quot;actually lives at the address&quot; requirement without needing transportation.</li>
            <li><strong>Rental demand backup.</strong> If the family decides not to continue holding the condo after graduation, West Campus rentals move quickly at strong rents.</li>
          </ol>

          <h2>Major West Campus condo buildings compared</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Building</th>
                  <th>Year Built</th>
                  <th>Price Range (1-2 BR)</th>
                  <th>HOA</th>
                  <th>Walk to Campus</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Skyloft</td><td className="num">2018</td><td className="num">$500K-$700K</td><td className="num">$600-$800/mo</td><td>5-8 min</td></tr>
                <tr><td>Inspire (Whitehall)</td><td className="num">2015</td><td className="num">$475K-$675K</td><td className="num">$550-$750/mo</td><td>5-10 min</td></tr>
                <tr><td>26 West</td><td className="num">2010</td><td className="num">$450K-$625K</td><td className="num">$500-$700/mo</td><td>5-10 min</td></tr>
                <tr><td>Rio West</td><td className="num">2013</td><td className="num">$425K-$600K</td><td className="num">$500-$700/mo</td><td>10-15 min</td></tr>
                <tr><td>21 Rio</td><td className="num">2011</td><td className="num">$400K-$575K</td><td className="num">$450-$650/mo</td><td>10-12 min</td></tr>
                <tr><td>The Callaway</td><td className="num">2006</td><td className="num">$375K-$525K</td><td className="num">$400-$600/mo</td><td>7-12 min</td></tr>
                <tr><td>Rambler</td><td className="num">2016</td><td className="num">$425K-$600K</td><td className="num">$500-$700/mo</td><td>10-15 min</td></tr>
                <tr><td>Villas on Rio</td><td className="num">2015</td><td className="num">$400K-$550K</td><td className="num">$450-$650/mo</td><td>10-15 min</td></tr>
                <tr><td>Lark on 26th</td><td className="num">2007</td><td className="num">$350K-$500K</td><td className="num">$400-$550/mo</td><td>10-15 min</td></tr>
                <tr><td>Quarters on Campus</td><td className="num">2005</td><td className="num">$375K-$525K</td><td className="num">$450-$600/mo</td><td>5-10 min</td></tr>
                <tr><td>Older walk-up buildings</td><td className="num">1970s-90s</td><td className="num">$250K-$400K</td><td className="num">$200-$400/mo</td><td>Varies</td></tr>
              </tbody>
            </table>
          </div>

          <p>Prices approximate for 2026; verify current market with a Texas REALTOR. HOA fees may include some utilities (water, trash, internet, gym) vary by building.</p>

          <h2>Buying strategy for the residency pathway</h2>
          <ol>
            <li><strong>Identify your priority mix:</strong> price, walkability, amenities, HOA cost. There is no single &quot;best&quot; building; the right choice depends on your priorities.</li>
            <li><strong>Engage a Texas REALTOR familiar with the strategy:</strong> not all Austin agents understand the residency pathway. Ensure your agent has worked with out-of-state families on this specifically.</li>
            <li><strong>Tour multiple buildings:</strong> feel the difference between newer luxury and older buildings; assess the student&apos;s preference.</li>
            <li><strong>Review HOA documents carefully:</strong> financial statements (any deficits?), reserve study (adequate reserves?), litigation history (any pending?), rules and restrictions (rental limits?).</li>
            <li><strong>Confirm building policies allow the intended use:</strong> Rule #3 (owner-occupied by student) is universally allowed; Rule #4 (LLC-owned rental) may hit HOA rental restrictions in some buildings.</li>
            <li><strong>Make offer and close:</strong> typical Texas closing 30-45 days financed, 10-21 days cash.</li>
            <li><strong>Establish documentary set at the condo address:</strong> Texas DL, vehicle registration, voter registration, utility bills. All in the same Texas address.</li>
            <li><strong>Petition for residency after 12 months of qualifying domicile.</strong></li>
          </ol>

          <h2>West Campus condo purchase vs West Campus rent</h2>

          <div className="callout">
            <h4>4-year cost comparison</h4>
            <ul className="mb-0">
              <li><strong>Renting shared 2BR West Campus apartment:</strong> ~$1,700/mo per bedroom × 4 years = $81,600 in rent. Zero equity. No residency pathway benefit.</li>
              <li><strong>Buying $450K condo:</strong> ~$3,800/mo carry × 4 years = $182,400 in carry costs. But builds ~$85,000 in equity (principal paydown + appreciation). Plus <strong>saves ~{fmtUSD(TUITION.threeYearSavings)} in tuition</strong> via residency pathway. Net position typically better than renting.</li>
              <li><strong>Buying + splitting with 1 additional student tenant (Rule #4):</strong> other tenant pays ~$1,700/mo = $81,600 rental income over 4 years. Reduces net carry to ~$100,000. Plus equity, plus tuition savings. Strongest financial position.</li>
            </ul>
          </div>

          <h2>The neighborhood: what living in West Campus is actually like</h2>
          <ul>
            <li><strong>Population:</strong> Dominantly UT students. High-density neighborhood with a lot of pedestrian activity.</li>
            <li><strong>Food and restaurants:</strong> Extensive West Campus dining scene: Halal Bros, Madam Mam&apos;s, JuiceLand, Cabo Bobs, plus dozens of others</li>
            <li><strong>Grocery:</strong> HEB and Whole Foods within walking distance</li>
            <li><strong>Social scene:</strong> Sixth Street bars and Dirty Sixth 10-minute walk; South Congress by car; music venues within Uber distance</li>
            <li><strong>Safety:</strong> generally safe with typical urban precautions; higher pedestrian activity provides eyes-on-street effect</li>
            <li><strong>Traffic:</strong> heavy during class change times; parking limited (many students don&apos;t have cars)</li>
          </ul>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Next steps</h2>
            <ul>
              <li><Link href="/buying-a-condo-for-ut-austin-in-state-tuition">Buying a condo for UT in-state tuition</Link>: the complete strategy</li>
              <li><Link href="/rule-3-vs-rule-4">Rule #3 vs Rule #4</Link>: which condo-ownership structure fits your family</li>
              <li><Link href="/condos-near-ut">Condos near UT</Link>: building-by-building guide</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the legal framework</li>
              <li><Link href="/contact">Contact me</Link>: I&apos;m a Texas REALTOR specializing in this strategy</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-west-campus-condos" />
    </>
  );
}
