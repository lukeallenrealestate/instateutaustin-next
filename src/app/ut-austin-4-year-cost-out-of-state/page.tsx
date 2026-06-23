import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactSection } from '@/components/ContactSection';
import { TUITION, fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

const TITLE = 'UT Austin 4-Year Cost for Out-of-State Students (Full Breakdown)';
const DESCRIPTION = `Complete 4-year cost of attendance at UT Austin for out-of-state students: tuition, fees, housing, meals, books, personal expenses, transportation. Plus how the Texas residency pathway changes the four-year total by approximately ${fmtUSD(TUITION.threeYearSavings)}.`;
const PATH = '/ut-austin-4-year-cost-out-of-state';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'How much does UT Austin cost for 4 years for out-of-state students?', a: `Total four-year cost of attendance at UT Austin for an out-of-state student in 2025-26 is approximately $336,000-$360,000 at full sticker (with no inflation adjustment). This includes tuition (~${fmtUSD(TUITION.outOfStatePerYear)}/year), required fees, on-campus or West Campus housing ($14,000-$18,000/year), meals ($5,500-$6,500/year), books and supplies ($1,200/year), transportation ($1,500/year), and personal expenses ($2,500/year). With the Texas residency pathway pursued in year 1 and approved for year 2, the four-year tuition portion drops by approximately ${fmtUSD(TUITION.threeYearSavings)}, bringing the total cost to approximately $236,000-$260,000.` },
  { q: 'What is the cost of attendance vs tuition at UT Austin?', a: 'Tuition and required fees is one component of the broader cost of attendance (COA), which is the total bill UT publishes for federal financial aid calculations. For 2025-26: out-of-state tuition + required fees ~$44,908, on-campus housing $11,000-$14,000, on-campus meal plan $5,500-$6,500, books and supplies $1,200, transportation $1,500, personal $2,500. Total annual COA for out-of-state ~$66,500-$71,000 on-campus. Tuition is the largest single line item and the only line that changes with residency reclassification.' },
  { q: 'What is the cheapest way to attend UT Austin from out of state?', a: `For most out-of-state families, the cheapest path is: (1) establish Texas residency in year 1 through property acquisition; (2) reclassify for year 2 onward, dropping tuition by ${fmtUSD(TUITION.annualSavings)}/year; (3) use the acquired property as student housing, replacing $14,000-$18,000/year of rent. Total four-year cost in this scenario: approximately $236,000-$260,000, vs $336,000-$360,000 at full out-of-state sticker. The property is also a real estate asset that can be sold or rented after graduation.` },
  { q: 'Will UT Austin tuition increase over the 4 years my student is enrolled?', a: 'In-state tuition is frozen by the Texas Legislature through the 2026-27 academic year. Out-of-state tuition is set by the UT Board of Regents and has increased approximately 3-5% annually in recent years. For planning, assume 4% annual increases on the out-of-state rate. Required fees, housing, and meals also typically increase 3-5% annually.' },
  { q: 'How much will I spend on housing at UT Austin?', a: 'On-campus housing at UT runs $11,000-$14,000/year. West Campus high-rise apartments (the dominant off-campus market) run $14,000-$24,000/year for a shared unit. Off-campus apartments further from campus run $9,000-$13,000/year. Many out-of-state families pursuing the residency pathway acquire a West Campus condo (purchase $350K-$650K) that serves as both housing and the residency vehicle.' },
  { q: 'How much do meals cost at UT Austin?', a: 'On-campus meal plans run $4,500-$6,500/year depending on plan size. Off-campus students typically budget $3,500-$5,500/year for meals (grocery + occasional dining). Most upperclass students go off meal plan.' },
  { q: 'What additional costs should I budget for at UT Austin?', a: 'Beyond tuition, housing, and meals: textbooks and supplies ($1,000-$1,500/year), transportation ($1,500-$2,500/year for non-residents who travel home periodically), personal expenses ($2,500-$4,000/year), Greek life dues (if applicable, $2,000-$8,000/year), study abroad (if applicable, $5,000-$15,000 one-time), and health insurance (UT Student Health Insurance ~$3,500/year if not on parent plan).' },
  { q: 'How does the 4-year cost compare to other top public universities?', a: 'For out-of-state students at full sticker (no residency pathway), UT Austin\'s four-year cost is comparable to Berkeley, Michigan, Virginia, North Carolina, and other top public flagships. With the Texas residency pathway, UT\'s four-year cost drops dramatically below those alternatives because no other top public flagship offers a comparable 12-month residency pathway.' },
];

export default function FourYearCostPage() {
  const sticker4y = TUITION.outOfStatePerYear * 4;
  const residency4y = TUITION.outOfStatePerYear + 3 * TUITION.inStatePerYear;
  const savings4y = sticker4y - residency4y;

  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin 4-Year Cost for Out-of-State', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · 4-year cost analysis"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin 4-Year Cost for Out-of-State Students</h1>}
        lede={`Complete four-year cost of attendance breakdown: tuition, fees, housing, meals, books, transportation, personal. Plus how the residency pathway can save approximately ${fmtUSD(savings4y)} across four years.`}
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The numbers">
            Total four-year cost of attendance at UT Austin for an out-of-state student in 2025-26 is approximately <strong>$336,000-$360,000</strong> at full sticker. This includes tuition (<strong>{fmtUSD(TUITION.outOfStatePerYear)}/year</strong>), required fees, on-campus housing, meals, books, transportation, and personal expenses. With the <Link href="/texas-residency-rules">Texas residency pathway</Link> pursued in year 1 and approved for year 2, the four-year tuition portion drops by approximately <strong>{fmtUSD(savings4y)}</strong>, bringing total cost to approximately <strong>$236,000-$260,000</strong>.
          </QuickAnswer>

          <AuthorBox blurb="Has helped dozens of out-of-state families project the true 4-year cost of UT Austin and compare it honestly to alternatives." />

          <h2 className="mt-0">Annual cost of attendance: 2025-26 published rates</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Cost Component</th>
                  <th>In-State (Annual)</th>
                  <th>Out-of-State (Annual)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Tuition + required fees</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">{fmtUSD(TUITION.outOfStatePerYear)}</td></tr>
                <tr><td>On-campus housing (residence hall)</td><td className="num">~$12,500</td><td className="num">~$12,500</td></tr>
                <tr><td>Meal plan (on-campus)</td><td className="num">~$5,800</td><td className="num">~$5,800</td></tr>
                <tr><td>Books and supplies</td><td className="num">~$1,200</td><td className="num">~$1,200</td></tr>
                <tr><td>Transportation</td><td className="num">~$1,500</td><td className="num">~$2,500</td></tr>
                <tr><td>Personal expenses</td><td className="num">~$2,500</td><td className="num">~$3,000</td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>Annual COA total (on-campus)</strong></td><td className="num"><strong>~${(11688+12500+5800+1200+1500+2500).toLocaleString()}</strong></td><td className="num"><strong>~${(44908+12500+5800+1200+2500+3000).toLocaleString()}</strong></td></tr>
              </tbody>
            </table>
          </div>

          <h2>Four-year cost at full out-of-state sticker</h2>
          <p>Without any tuition relief (no residency pathway, no scholarships), the four-year published cost of attendance at UT Austin for an out-of-state student is approximately:</p>
          <ul>
            <li><strong>Year 1:</strong> ~$70,000 (tuition + fees + housing + meals + books + transportation + personal)</li>
            <li><strong>Year 2:</strong> ~$73,000 (4% increase on tuition + 3% on COA)</li>
            <li><strong>Year 3:</strong> ~$76,000</li>
            <li><strong>Year 4:</strong> ~$79,000</li>
            <li><strong>Total 4-year cost:</strong> ~$298,000-$320,000</li>
          </ul>
          <p>If the student lives off-campus in West Campus (typical Year 2+), housing costs increase to $16,000-$22,000/year, raising total 4-year cost to approximately $310,000-$340,000.</p>

          <h2>Four-year cost with Texas residency pathway</h2>
          <p>With the Texas residency pathway pursued during year 1 and approved for year 2 onward, the tuition portion drops by <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> starting in year 2. The four-year tuition picture changes substantially:</p>
          <ul>
            <li><strong>Year 1:</strong> ~$70,000 (paid as out-of-state, residency in process)</li>
            <li><strong>Year 2:</strong> ~$40,000 (residency approved, tuition drops to in-state rate)</li>
            <li><strong>Year 3:</strong> ~$41,000</li>
            <li><strong>Year 4:</strong> ~$42,000</li>
            <li><strong>Total 4-year cost:</strong> ~$193,000-$210,000</li>
          </ul>
          <p>Savings vs full out-of-state: approximately <strong>{fmtUSD(savings4y)}</strong> in tuition alone, plus the property typically used for residency doubles as student housing (replacing $14,000-$18,000/year of rent, or roughly $56,000-$72,000 across four years).</p>

          <h2>Detailed 4-year cost scenarios</h2>

          <h3>Scenario 1: Out-of-state, on-campus residence hall, no residency pathway</h3>
          <ul>
            <li>Four-year tuition: {fmtUSD(sticker4y)}</li>
            <li>Four-year housing + meals: ~$73,000 (residence hall + meal plan)</li>
            <li>Books, transportation, personal (4 years): ~$26,000</li>
            <li><strong>Total: ~$278,000-$300,000</strong></li>
          </ul>

          <h3>Scenario 2: Out-of-state, West Campus apartment, no residency pathway</h3>
          <ul>
            <li>Four-year tuition: {fmtUSD(sticker4y)}</li>
            <li>Four-year off-campus housing + food: ~$84,000 (West Campus rent + groceries)</li>
            <li>Books, transportation, personal (4 years): ~$26,000</li>
            <li><strong>Total: ~$289,000-$320,000</strong></li>
          </ul>

          <h3>Scenario 3: Out-of-state with Texas residency pathway, on-campus year 1, then in family-owned West Campus condo</h3>
          <ul>
            <li>Four-year tuition: ~{fmtUSD(residency4y)} (year 1 OOS, years 2-4 in-state)</li>
            <li>Year 1 housing/meals: ~$18,000 (residence hall + meal plan)</li>
            <li>Years 2-4 housing: family-owned condo (no rent; mortgage/HOA carried by family separately as a real estate investment)</li>
            <li>Years 2-4 food and personal: ~$22,000</li>
            <li>Books, transportation, all years: ~$15,000</li>
            <li><strong>Total student cost: ~$133,000-$150,000</strong> (excluding condo cost which is treated as a family real estate asset)</li>
            <li><strong>Savings vs Scenario 2: ~$140,000-$170,000</strong></li>
          </ul>

          <h3>Scenario 4: Out-of-state with merit scholarship and residency pathway</h3>
          <p>A McCombs Endowed Presidential Scholarship at $7,500/year stacked with residency:</p>
          <ul>
            <li>Year 1 tuition: {fmtUSD(TUITION.outOfStatePerYear - 7500)} (OOS minus scholarship)</li>
            <li>Years 2-4 tuition: ~{fmtUSD(TUITION.inStatePerYear - 7500)}/year (in-state minus scholarship)</li>
            <li>Four-year tuition total: ~{fmtUSD(TUITION.outOfStatePerYear - 7500 + 3 * (TUITION.inStatePerYear - 7500))}</li>
            <li>Plus housing, meals, books, etc.: ~$110,000</li>
            <li><strong>Total: ~$172,000-$190,000</strong></li>
          </ul>

          <h2>Cost comparison to other top public flagships (4 years out-of-state)</h2>
          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>University</th>
                  <th>OOS Tuition (Annual)</th>
                  <th>4-Year Tuition (OOS)</th>
                  <th>4-Year COA (OOS, On-Campus)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>UT Austin (no residency pathway)</td><td className="num">{fmtUSD(TUITION.outOfStatePerYear)}</td><td className="num">{fmtUSD(sticker4y)}</td><td className="num">~$280,000-$300,000</td></tr>
                <tr><td>UT Austin (with residency pathway)</td><td className="num">Mixed</td><td className="num">{fmtUSD(residency4y)}</td><td className="num">~$190,000-$210,000</td></tr>
                <tr><td>UC Berkeley</td><td className="num">~$48,500</td><td className="num">~$200,000</td><td className="num">~$320,000-$340,000</td></tr>
                <tr><td>Michigan</td><td className="num">~$57,400</td><td className="num">~$235,000</td><td className="num">~$340,000-$360,000</td></tr>
                <tr><td>UVA</td><td className="num">~$60,800</td><td className="num">~$250,000</td><td className="num">~$330,000-$350,000</td></tr>
                <tr><td>UNC Chapel Hill</td><td className="num">~$40,000</td><td className="num">~$165,000</td><td className="num">~$260,000-$280,000</td></tr>
                <tr><td>Penn State</td><td className="num">~$40,800</td><td className="num">~$170,000</td><td className="num">~$280,000-$300,000</td></tr>
              </tbody>
            </table>
          </div>

          <p>UT Austin sits in the middle of the top public flagship range at full OOS sticker. With the residency pathway pursued, UT becomes one of the cheapest 4-year options among top publics, because no other top flagship offers a comparable 12-month residency pathway.</p>

          <h2>Hidden costs that add up</h2>
          <ul>
            <li><strong>Travel home periodically.</strong> For out-of-state students, factor in 3-5 flights/year at $300-$600 per round trip, plus airport ground transport. Annual budget: $1,200-$3,000/year on top of published transportation.</li>
            <li><strong>Greek life dues.</strong> If your student joins a fraternity or sorority, dues range $2,000-$8,000/year depending on chapter. Higher for housed chapters.</li>
            <li><strong>Study abroad.</strong> One semester abroad runs $5,000-$15,000 above normal COA. Many UT students do at least one short study abroad program.</li>
            <li><strong>Co-op or research stipends.</strong> Some unpaid research and internship experiences require summer housing in Austin or elsewhere; budget $3,000-$5,000 per unpaid summer.</li>
            <li><strong>Health insurance.</strong> If not on parent plan, UT Student Health Insurance is ~$3,500/year (waivable with documented coverage).</li>
            <li><strong>Parking permit.</strong> ~$700-$1,500/year if student has a car on campus.</li>
            <li><strong>Phone, streaming, miscellaneous.</strong> Most families budget $100-$200/month above what is captured in &quot;personal expenses.&quot;</li>
          </ul>

          <h2>What is not in the cost of attendance</h2>
          <p>UT&apos;s published cost of attendance is the figure used for federal aid calculation; it represents typical expenses for an average student. It does not capture: parent travel to/from campus, family weekend, summer storage, parents weekend hotels, graduation expenses, or move-in/move-out logistics. Most families add $3,000-$7,000/year of unbudgeted expenses on top of COA.</p>

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
              <li><Link href="/tuition-calculator">Tuition calculator</Link>: model your scenario interactively</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the pathway that cuts 4-year cost by ~{fmtUSD(savings4y)}</li>
              <li><Link href="/ut-austin-financial-aid-out-of-state">Financial aid</Link>: federal aid and what offsets the cost</li>
              <li><Link href="/ut-austin-scholarships-out-of-state">Scholarships</Link>: what aid is available beyond federal</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-4yr-cost-oos" />
    </>
  );
}
