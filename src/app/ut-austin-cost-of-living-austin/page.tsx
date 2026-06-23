import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactSection } from '@/components/ContactSection';
import { fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

const TITLE = 'UT Austin Cost of Living: What Students Actually Spend in Austin';
const DESCRIPTION = 'Complete cost of living breakdown for UT Austin students: rent, food, transportation, utilities, personal expenses, plus how Austin compares to other major US college cities.';
const PATH = '/ut-austin-cost-of-living-austin';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'How much does it cost to live in Austin as a UT student?', a: 'A typical UT Austin student\'s annual living cost (excluding tuition) is approximately $22,000-$32,000 covering rent, food, transportation, utilities, personal expenses, and books. On-campus dorms with a meal plan run lower ($18,500-$22,000); West Campus apartments run higher ($24,000-$34,000). Off-campus living further from campus (East Riverside, North Campus) is cheaper.' },
  { q: 'How much is rent in West Campus near UT?', a: 'West Campus high-rise apartments rent for approximately $1,400-$2,200/month per bedroom in a shared 2-3 bedroom unit, or $1,800-$2,800/month for a 1-bedroom. Newer luxury buildings (Skyloft, Inspire, 26 West, Quarters on Campus) run at the higher end. Older walk-up buildings closer to campus run cheaper but with fewer amenities. Annual cost for a shared 2BR: ~$16,800-$26,400 per student.' },
  { q: 'How much do groceries cost in Austin?', a: 'Groceries in Austin run approximately $300-$500/month per person depending on dietary choices and store selection. HEB (Texas grocery chain) is significantly cheaper than Whole Foods or Trader Joe\'s. Annual grocery cost: $3,600-$6,000. Off-campus students typically spend less than on-campus meal plan equivalent.' },
  { q: 'How much do students spend on going out in Austin?', a: 'Sixth Street and South Congress entertainment runs $50-$200/weekend depending on choices. Typical UT student budget for social and entertainment: $200-$500/month, or $2,400-$6,000/year. Greek life adds $1,500-$5,000/semester in dues for active members.' },
  { q: 'Does a UT student need a car in Austin?', a: 'No, but it depends on living situation. On-campus and West Campus students do not need a car (everything walkable + UT shuttle + Capital Metro bus). Students living north of campus or in Riverside benefit from a car. Students who want to take advantage of Hill Country, Lake Travis, or weekend trips usually want a car. Parking permits on campus run $700-$1,500/year and are limited.' },
  { q: 'How does Austin\'s cost of living compare to other major college cities?', a: 'Austin is materially cheaper than San Francisco/Bay Area, Boston, NYC, Seattle, and Los Angeles for student living. Comparable to or slightly cheaper than Chicago, Denver, Phoenix, and Portland. More expensive than typical SEC and Big Ten college towns (Athens GA, Tuscaloosa AL, Lincoln NE, Bloomington IN, etc.) where rent runs 30-50% lower.' },
  { q: 'What is the cheapest way to live in Austin as a UT student?', a: 'Sharing a 3-4 bedroom off-campus house (Hyde Park, Riverside, or further north) typically runs $800-$1,200/month per bedroom (vs $1,400-$2,200 in West Campus). Cooking at home, using bike + Capital Metro instead of a car, and avoiding luxury Sixth Street entertainment can keep total annual cost in the $18,000-$22,000 range.' },
  { q: 'Are utilities included in Austin apartment rent?', a: 'Often partially. West Campus luxury buildings often include water, trash, internet, sometimes electricity. Older apartments and houses typically charge utilities separately. Budget approximately $80-$150/month for electricity in summer (air conditioning), $30-$50 for water/sewer, $60-$80 for internet. Total utilities: $1,500-$3,000/year.' },
];

export default function CostOfLivingPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Cost of Living in Austin', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="Austin · Student cost of living"
        title={<h1 className="text-ink max-w-[24ch]">UT Austin Cost of Living in Austin</h1>}
        lede="What UT Austin students actually spend per month and per year on rent, food, transportation, utilities, personal expenses, and entertainment. Plus how Austin compares to other major college cities."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The numbers">
            A typical UT Austin student spends approximately <strong>$22,000-$32,000/year</strong> on living expenses (excluding tuition). On-campus dorms with meal plan: $18,500-$22,000. West Campus apartments + groceries: $24,000-$34,000. Off-campus further out: $18,000-$26,000. Rent is the largest single line; West Campus running $1,400-$2,200/month per bedroom in shared units is the dominant cost driver.
          </QuickAnswer>

          <AuthorBox blurb="Texas REALTOR (TREC #788149) who has worked with dozens of UT families on housing decisions including the buy vs rent vs dorm tradeoff." />

          <h2 className="mt-0">Monthly cost breakdown for a typical UT student</h2>
          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Expense Category</th>
                  <th>On-Campus Dorm</th>
                  <th>West Campus 2BR Shared</th>
                  <th>North Campus House Share</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Rent</td><td className="num">$1,100/month (residence hall)</td><td className="num">$1,700/month per bedroom</td><td className="num">$1,000/month per bedroom</td></tr>
                <tr><td>Meal plan or groceries</td><td className="num">$550/month (meal plan)</td><td className="num">$400/month groceries + $150 eating out</td><td className="num">$350/month groceries + $150 eating out</td></tr>
                <tr><td>Utilities (electric, water, internet)</td><td className="num">Included</td><td className="num">$100/month</td><td className="num">$120/month</td></tr>
                <tr><td>Transportation</td><td className="num">$0 (walking)</td><td className="num">$30/month (Capital Metro)</td><td className="num">$80/month (bus + occasional Uber)</td></tr>
                <tr><td>Personal + entertainment</td><td className="num">$200/month</td><td className="num">$350/month</td><td className="num">$300/month</td></tr>
                <tr><td>Books and supplies</td><td className="num">$100/month</td><td className="num">$100/month</td><td className="num">$100/month</td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>Monthly total</strong></td><td className="num"><strong>$1,950</strong></td><td className="num"><strong>$2,800</strong></td><td className="num"><strong>$2,100</strong></td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>9-month school year</strong></td><td className="num"><strong>$17,550</strong></td><td className="num"><strong>$25,200</strong></td><td className="num"><strong>$18,900</strong></td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>12-month annual (with summer)</strong></td><td className="num"><strong>$23,400</strong></td><td className="num"><strong>$33,600</strong></td><td className="num"><strong>$25,200</strong></td></tr>
              </tbody>
            </table>
          </div>

          <h2>Housing cost detail by neighborhood</h2>

          <h3>West Campus (walkable to UT)</h3>
          <ul>
            <li><strong>Newer luxury high-rises</strong> (Skyloft, Inspire, 26 West, Rio West, Quarters on Campus): $2,200-$3,000/month for 1BR, $1,800-$2,400/month per bedroom in 2-3BR</li>
            <li><strong>Mid-tier high-rises</strong> (Lark, Block 21, 2400 Nueces, Castilian, Hardin House): $1,800-$2,400/month for 1BR, $1,500-$1,900/month per bedroom in shared</li>
            <li><strong>Older walk-up buildings:</strong> $1,400-$1,800/month for 1BR, $1,100-$1,500/month per bedroom in shared</li>
            <li><strong>Greek house living:</strong> $700-$1,200/month room + meals for chapter members</li>
          </ul>

          <h3>North Campus (10-15 min commute)</h3>
          <ul>
            <li><strong>Shared houses (Hyde Park):</strong> $900-$1,400/month per bedroom in 3-4BR house</li>
            <li><strong>Older apartments:</strong> $1,200-$1,700/month for 1BR</li>
            <li><strong>Newer apartments along Burnet or Anderson Lane:</strong> $1,400-$2,000/month for 1BR</li>
          </ul>

          <h3>East Riverside (10-20 min commute by car or bus)</h3>
          <ul>
            <li><strong>Apartment complexes (e.g., The Lakes, City View):</strong> $1,100-$1,600/month for 1BR, $750-$1,100/month per bedroom in 2BR</li>
            <li><strong>Older shared houses:</strong> $700-$1,000/month per bedroom</li>
          </ul>

          <h3>On-campus residence halls</h3>
          <ul>
            <li><strong>Standard residence halls (Jester, Whitis Court, Kinsolving, etc.):</strong> $11,000-$13,500/year (room rate, includes basic utilities)</li>
            <li><strong>Required meal plan:</strong> $4,800-$6,800/year depending on plan</li>
            <li><strong>Total residence hall annual:</strong> $15,800-$20,300/year</li>
          </ul>

          <h2>Food cost: meal plan vs cooking vs eating out</h2>
          <ul>
            <li><strong>UT meal plan (required for on-campus residents year 1):</strong> $4,800-$6,800/year</li>
            <li><strong>Off-campus cooking at home:</strong> $300-$500/month groceries = $3,600-$6,000/year</li>
            <li><strong>Off-campus mix (cooking + eating out 2-3x/week):</strong> $500-$800/month = $6,000-$9,600/year</li>
            <li><strong>HEB (Texas grocery chain):</strong> the dominant cheap-and-good grocery option; significantly cheaper than Whole Foods, Trader Joe&apos;s, or Sprouts</li>
            <li><strong>Cheap on-campus and West Campus food:</strong> $5-$10 lunch at Madam Mam&apos;s, JuiceLand, Halal Bros, Cabo Bobs</li>
          </ul>

          <h2>Transportation: do you need a car?</h2>
          <ul>
            <li><strong>On-campus + West Campus residents:</strong> Walk + UT shuttle + occasional Uber. No car needed. Cost: ~$30-$80/month for Uber.</li>
            <li><strong>North Campus or Riverside residents:</strong> Capital Metro bus + scooter. Cost: ~$50-$150/month.</li>
            <li><strong>Students with cars:</strong> UT parking permit $700-$1,500/year, insurance $600-$1,500/year, gas $1,000-$2,500/year, maintenance $500-$1,500/year. Total: ~$3,000-$7,000/year.</li>
            <li><strong>Bike or scooter:</strong> Many UT students rely on bikes ($300-$800 one-time) or e-scooters (~$60/month subscriptions plus per-ride).</li>
          </ul>

          <h2>How Austin compares to other major college cities</h2>
          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>City</th>
                  <th>Typical Student Annual Cost</th>
                  <th>Rent (near campus)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Austin (UT)</td><td className="num">$22,000-$32,000</td><td className="num">$1,400-$2,200/mo per bedroom</td></tr>
                <tr><td>Berkeley (UC Berkeley)</td><td className="num">$30,000-$45,000</td><td className="num">$1,800-$2,800/mo per bedroom</td></tr>
                <tr><td>NYC (NYU, Columbia)</td><td className="num">$35,000-$55,000</td><td className="num">$2,200-$3,500/mo per bedroom</td></tr>
                <tr><td>Cambridge (Harvard, MIT)</td><td className="num">$30,000-$42,000</td><td className="num">$1,800-$2,700/mo per bedroom</td></tr>
                <tr><td>Ann Arbor (Michigan)</td><td className="num">$18,000-$26,000</td><td className="num">$900-$1,600/mo per bedroom</td></tr>
                <tr><td>Chapel Hill (UNC)</td><td className="num">$16,000-$24,000</td><td className="num">$800-$1,400/mo per bedroom</td></tr>
                <tr><td>Athens GA (UGA)</td><td className="num">$14,000-$20,000</td><td className="num">$650-$1,100/mo per bedroom</td></tr>
                <tr><td>Madison (Wisconsin)</td><td className="num">$16,000-$24,000</td><td className="num">$800-$1,400/mo per bedroom</td></tr>
                <tr><td>Tucson (Arizona)</td><td className="num">$14,000-$20,000</td><td className="num">$600-$1,000/mo per bedroom</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Cost-saving strategies for UT students</h2>
          <ol>
            <li><strong>Cook at home using HEB.</strong> Saves $200-$500/month vs eating out.</li>
            <li><strong>Share larger units (3-4 BR shared house off-campus).</strong> Per-bedroom rent drops 30-40% vs West Campus.</li>
            <li><strong>Skip the car.</strong> Bike, walk, and Capital Metro work for nearly all UT students. Saves $3,000-$7,000/year.</li>
            <li><strong>Buy textbooks used or rent.</strong> Saves $300-$700/year vs new.</li>
            <li><strong>Avoid the most expensive West Campus high-rises.</strong> Older buildings 2-3 blocks further out save $300-$500/month with comparable convenience.</li>
            <li><strong>For families with capital: buy instead of rent.</strong> See <Link href="/buying-property-in-texas-for-residency">buying property in Texas for residency</Link>. Long-term carry can be lower than renting, plus builds equity and supports the residency pathway.</li>
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
              <li><Link href="/ut-austin-housing-guide">UT Austin housing guide</Link>: detailed housing options</li>
              <li><Link href="/condos-near-ut">Condos near UT Austin</Link>: building-by-building</li>
              <li><Link href="/ut-austin-4-year-cost-out-of-state">4-year cost of attendance</Link>: full cost picture</li>
              <li><Link href="/moving-to-austin-from-out-of-state">Moving to Austin from out of state</Link>: parent-relocation guide</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-cost-of-living" />
    </>
  );
}
