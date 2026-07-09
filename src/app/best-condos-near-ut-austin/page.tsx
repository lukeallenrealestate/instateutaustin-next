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

const TITLE = 'Best Condos Near UT Austin: Building Comparison + Buyer Guide (2026)';
const DESCRIPTION = `Best condos near UT Austin: West Campus, Hyde Park, and Riverside buildings compared. Prices, HOA, walkability, and how families use these condos to save ~${fmtUSD(TUITION.threeYearSavings)} on UT tuition via the residency pathway.`;
const PATH = '/best-condos-near-ut-austin';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What are the best condos near UT Austin for parents to buy?', a: 'Top buildings for UT parent buyers: Skyloft (newest luxury; ~$500K-$700K); Inspire (Whitehall; ~$475K-$675K); 26 West (~$450K-$625K); Rio West (~$425K-$600K); Rambler (~$425K-$600K). Best for value: older walk-up buildings at $250K-$400K. Best for larger families: Hyde Park duplexes and houses at $600K-$1M. Selection depends on budget, walkability priority, and amenity preferences.' },
  { q: 'What is the best value condo near UT?', a: 'For value: older West Campus walk-up buildings (built 1970s-90s) at $250K-$400K offer lowest entry price with adequate condition. East Riverside condos (across Lady Bird Lake) at $200K-$400K offer more space per dollar but require transportation to campus. For families balancing cost and quality: mid-tier newer buildings ($400K-$500K) offer good amenities without top-tier prices.' },
  { q: 'What is the closest condo to UT Austin?', a: 'The closest walkable condos are in West Campus, particularly along Rio Grande Street, Nueces Street, and 26th Street. Buildings like Rio West, 21 Rio, and 26 West are 5-10 minutes walk to central UT. Some buildings like Quarters on Campus are directly adjacent. Distance measured to Main Building (UT Tower) rather than specific classroom buildings.' },
  { q: 'Do condos near UT hold their value?', a: 'Yes, historically. UT-area condos have appreciated approximately 3-5% annually, tracking Austin metro real estate. Continuous UT enrollment supports stable demand; rental market is strong due to constant student housing needs. Individual building performance varies; newer luxury high-rises have appreciated faster in recent years.' },
  { q: 'What are HOA fees like in UT-area condo buildings?', a: 'West Campus HOA fees range: newer luxury buildings $500-$800/month; mid-tier $400-$600/month; older walk-up buildings $200-$400/month. HOA covers common areas, exterior maintenance, sometimes some utilities. Always review HOA financial statements before purchase for reserves and litigation history.' },
];

export default function BestCondosPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Best Condos Near UT Austin', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />
      <Schema data={realEstateAgentSchema()} />

      <PageHero
        eyebrow="Best condos near UT Austin"
        title={<h1 className="text-ink max-w-[22ch]">Best Condos Near UT Austin</h1>}
        lede={`Complete building comparison for parent-buyer families near UT Austin: West Campus, Hyde Park, Riverside options with prices, HOA, and how the residency pathway saves ~${fmtUSD(TUITION.threeYearSavings)} on tuition.`}
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The condo shortlist">
            Top condos near UT Austin for parent buyers: <strong>Skyloft</strong> (newest luxury, ~$500K-$700K); <strong>Inspire</strong> (~$475K-$675K); <strong>26 West</strong> (~$450K-$625K); <strong>Rio West</strong> (~$425K-$600K); <strong>Rambler</strong> (~$425K-$600K); <strong>Villas on Rio</strong> (~$400K-$550K); <strong>The Callaway</strong> (~$375K-$525K). Older walk-up buildings offer value entry at $250K-$400K. Purchase for UT residency pathway saves approximately <strong>{fmtUSD(TUITION.threeYearSavings)}</strong> in tuition over three years.
          </QuickAnswer>

          <AuthorBox blurb="Texas REALTOR (TREC #788149) who has personally worked with dozens of out-of-state UT families on condo selection near campus." />

          <h2 className="mt-0">The best UT-area condo categories</h2>

          <h3>Top-tier newer luxury (best amenities)</h3>
          <ul>
            <li><strong>Skyloft:</strong> 2018 build; rooftop pool, gym, 24/7 concierge; walking distance to campus; ~$500K-$700K for 1-2BR</li>
            <li><strong>Inspire (Whitehall):</strong> 2015 build; modern amenities; ~$475K-$675K</li>
            <li><strong>26 West:</strong> 2010 build; luxury finishes; ~$450K-$625K</li>
            <li><strong>Rambler:</strong> 2016 build; contemporary design; ~$425K-$600K</li>
          </ul>

          <h3>Mid-tier value (best balance)</h3>
          <ul>
            <li><strong>Rio West:</strong> 2013 build; walkable; ~$425K-$600K</li>
            <li><strong>21 Rio:</strong> 2011 build; solid amenities; ~$400K-$575K</li>
            <li><strong>Villas on Rio:</strong> 2015 build; ~$400K-$550K</li>
            <li><strong>The Callaway:</strong> 2006 build; established building; ~$375K-$525K</li>
            <li><strong>Quarters on Campus:</strong> 2005 build; directly adjacent to campus; ~$375K-$525K</li>
            <li><strong>Lark on 26th:</strong> 2007 build; ~$350K-$500K</li>
          </ul>

          <h3>Value entry (older walk-up buildings)</h3>
          <ul>
            <li>West Campus older buildings from 1970s-1990s; typically 2-3 story walk-up structures</li>
            <li>Prices: $250K-$400K</li>
            <li>Lower HOA ($200-$400/month)</li>
            <li>Character; less luxury but functional</li>
            <li>Popular with cost-focused buyers and investors</li>
          </ul>

          <h3>Hyde Park (character neighborhood, non-condo options)</h3>
          <ul>
            <li>Single-family homes: $700K-$1.2M</li>
            <li>Duplexes: $600K-$900K</li>
            <li>Requires bike/scooter/car to campus (10-15 minutes)</li>
            <li>Best for families housing multiple students or wanting yard space</li>
          </ul>

          <h3>East Riverside (best value with transportation)</h3>
          <ul>
            <li>Apartment-style condominiums south of Lady Bird Lake</li>
            <li>Prices: $200K-$400K for 2BR</li>
            <li>Larger units per dollar</li>
            <li>10-20 minute commute to campus (car or bus)</li>
            <li>Best for cost-focused families</li>
          </ul>

          <h2>Selection framework: which building fits your family</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Priority</th>
                  <th>Recommended Building Type</th>
                  <th>Price Range</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Maximum amenities + walkability</td><td>Skyloft, Inspire, 26 West</td><td className="num">$450K-$700K</td></tr>
                <tr><td>Best balance of price/quality</td><td>Rio West, Villas on Rio, Callaway</td><td className="num">$400K-$600K</td></tr>
                <tr><td>Value entry point</td><td>Older West Campus walk-ups</td><td className="num">$250K-$400K</td></tr>
                <tr><td>Space and character</td><td>Hyde Park single-family or duplex</td><td className="num">$600K-$1.2M</td></tr>
                <tr><td>Value with transportation</td><td>East Riverside condo</td><td className="num">$200K-$400K</td></tr>
              </tbody>
            </table>
          </div>

          <h2>The residency pathway math on condo purchase</h2>
          <p>Beyond the condo itself, the purchase enables the Texas residency pathway that saves approximately <strong>{fmtUSD(TUITION.threeYearSavings)}</strong> in UT tuition over three years. Combined with:</p>
          <ul>
            <li>Rental replacement (avoiding $80K-$130K of West Campus rent over 4 years)</li>
            <li>Equity build ($60K-$100K over 4 years via appreciation + principal paydown)</li>
            <li>Texas no-state-income-tax if family relocates</li>
          </ul>
          <p>Total 4-year financial impact typically $200K-$400K depending on family circumstances.</p>

          <h2>How to buy the right condo near UT</h2>
          <ol>
            <li><strong>Set budget and priorities</strong> (walkability vs amenities vs price)</li>
            <li><strong>Engage a Texas REALTOR familiar with UT residency pathway</strong> (not all agents understand)</li>
            <li><strong>Tour multiple buildings</strong> in-person or virtually</li>
            <li><strong>Review HOA documents carefully</strong> (financials, litigation, reserves, rental rules)</li>
            <li><strong>Financing decision</strong>: investment mortgage, primary-residence (if occupying), or cash from HELOC</li>
            <li><strong>Make offer and close</strong> (30-45 days financed, 10-21 days cash)</li>
            <li><strong>Establish Texas documentary set</strong> at the condo address</li>
            <li><strong>Petition residency reclassification</strong> after 12 months</li>
          </ol>

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
              <li><Link href="/west-campus-condos-in-state-tuition">West Campus condos</Link>: detailed building-by-building</li>
              <li><Link href="/buying-a-condo-for-ut-austin-in-state-tuition">Buying a condo strategy</Link>: complete playbook</li>
              <li><Link href="/condos-near-ut">Condos near UT</Link>: general buyer&apos;s guide</li>
              <li><Link href="/contact">Contact me</Link>: Texas REALTOR specializing in this</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-best-condos" />
    </>
  );
}
