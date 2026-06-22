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

const TITLE = 'UT Austin Net Price Calculator (2025-26 Estimate + Residency Pathway)';
const DESCRIPTION = `UT Austin net price calculator: estimate your true four-year cost after tuition, fees, housing, and aid. In-state ${fmtUSD(TUITION.inStatePerYear)} vs out-of-state ${fmtUSD(TUITION.outOfStatePerYear)}. Plus the legal Texas residency pathway that can cut the net price by approximately $99,660.`;
const PATH = '/ut-austin-net-price-calculator';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  {
    q: 'What is the net price calculator for UT Austin?',
    a: `A net price calculator is a federally mandated tool every U.S. college must publish that estimates the actual price a family pays after grants and scholarships, separate from the published sticker price. UT Austin's official net price calculator lives on the Office of Financial Services website. It uses your family income, assets, household size, and the student's academic profile to estimate the institutional aid the student would likely receive, then subtracts that from the cost of attendance. For Texas residents at UT, the net price after aid often drops materially below the ${fmtUSD(TUITION.inStatePerYear)} sticker for families under approximately $100,000 AGI through programs like Texas Advance Commitment. For non-residents, institutional aid is sparse, and the net price is generally close to the sticker.`,
  },
  {
    q: 'What is the difference between the net price calculator and the tuition calculator?',
    a: `The net price calculator estimates what you actually pay after grants and scholarships (need-based and merit aid). The tuition calculator estimates just tuition and fees by year, before aid. UT's official net price calculator is the federally-required tool that captures aid; our tuition calculator focuses on residency-driven tuition savings, which is the larger lever for most out-of-state families.`,
  },
  {
    q: 'How accurate is the UT Austin net price calculator?',
    a: 'The official UT net price calculator is reasonably accurate for need-based institutional aid at UT, which is the largest variable for in-state families. It is less accurate for merit aid (which is awarded at the department or college level after admission), athletic scholarships, and outside scholarships. For out-of-state families the calculator is more predictable because the bulk of institutional need-based aid is residents-only and the net price typically lands close to the sticker.',
  },
  {
    q: 'Does the net price calculator factor in the Texas residency pathway?',
    a: `No. The official calculator assumes the student's current residency classification and does not contemplate the option of an out-of-state family establishing Texas domicile through the property pathway. That is why the calculator on this site (which models the residency reclassification effect) often shows lower four-year totals than UT's official calculator for an out-of-state family considering the property pathway.`,
  },
  {
    q: 'What is the lowest net price possible at UT Austin?',
    a: 'For a Texas-resident family earning under $65,000 AGI, the Texas Empowerment program guarantees free tuition and required fees plus housing assistance, bringing the net tuition price to roughly $0. For a Texas-resident family earning $65,000-$100,000 AGI, Texas Advance Commitment guarantees free tuition and required fees ($11,688 covered). For non-residents, federal Pell Grant (up to $7,395) plus federal subsidized loans are the primary aid sources; net price stays much closer to sticker.',
  },
  {
    q: 'Does the net price include housing and meals?',
    a: 'Yes. The federal net price calculator standard includes the full cost of attendance: tuition, fees, books, on-campus or off-campus housing, meals, transportation, and personal expenses. For 2025-26 the published cost of attendance at UT is approximately $32,000-$38,000 for an in-state student on campus and $80,000-$90,000 for an out-of-state student on campus.',
  },
];

export default function NetPricePage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'UT Austin Net Price Calculator', path: PATH },
      ])} />
      <Schema data={articleSchema({
        headline: TITLE,
        description: DESCRIPTION,
        path: PATH,
        datePublished: '2026-06-19',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Net price calculator"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Net Price Calculator</h1>}
        lede="Estimate the actual four-year price your family pays at UT Austin after tuition, fees, housing, and aid. Then see how the Texas residency pathway changes the math for out-of-state families."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The fast answer">
            UT Austin publishes an official net price calculator on its Office of Financial Services site that estimates the price you pay <em>after</em> institutional grants and scholarships (separate from the sticker tuition). For 2025-26, sticker tuition is <strong>{fmtUSD(TUITION.inStatePerYear)}/year</strong> for Texas residents and <strong>{fmtUSD(TUITION.outOfStatePerYear)}/year</strong> for non-residents. After institutional aid the in-state net price often drops materially for families under $100K AGI through Texas Advance Commitment. For out-of-state families, the single biggest net-price reduction available is not aid; it is the <Link href="/texas-residency-rules">Texas residency pathway</Link> that converts the non-resident classification to resident, saving approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong>.
          </QuickAnswer>

          <AuthorBox blurb="Has helped dozens of out-of-state UT families think through net price vs sticker price, financial aid options, and the residency pathway that often produces the largest single net-price reduction." />

          <h2 className="mt-0">UT&apos;s official net price calculator</h2>
          <p>UT Austin&apos;s official Net Price Calculator is hosted at <a href="https://npc.collegeboard.org/student/app/utaustin" target="_blank" rel="noopener noreferrer">npc.collegeboard.org/student/app/utaustin</a>. It takes about 10-15 minutes to complete. You will need:</p>
          <ul>
            <li>Adjusted Gross Income from your most recent federal tax return</li>
            <li>Untaxed income and benefits</li>
            <li>Cash, savings, and checking balance</li>
            <li>Investment value (excluding retirement accounts and primary residence)</li>
            <li>Family size and number of family members in college</li>
            <li>Student academic profile (GPA, test scores)</li>
            <li>Student state of residence</li>
          </ul>
          <p>The output is an estimate of your expected family contribution and the institutional grant aid UT would likely award. It does not commit UT to any specific aid package; the actual aid offer comes after admission and FAFSA filing.</p>

          <h2>What the net price calculator does not capture</h2>
          <p>UT&apos;s calculator is solid for what it does, but several substantial cost levers fall outside its scope:</p>

          <h3>The Texas residency reclassification pathway</h3>
          <p>For an out-of-state family, the calculator assumes the student remains classified as a non-resident. It does not model the family establishing Texas residency through the property pathway under Texas Education Code §54.052. That pathway is worth approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> starting in year 2 of enrollment (the typical scenario), totaling roughly <strong>{fmtUSD(TUITION.threeYearSavings)}</strong> over the remaining time at UT. For most middle and upper-income out-of-state families, this is the largest single net-price reduction available — substantially larger than any institutional aid they would qualify for as non-residents. <Link href="/texas-residency-rules">Full details on the residency pathway here</Link>.</p>

          <h3>Major-specific differential tuition</h3>
          <p>Net price calculators use the base undergraduate cost of attendance. Engineering, McCombs Business, and Computer Science students pay an additional $2,500-$3,700/year in differential tuition. The calculator may underestimate by that margin if your student is in a high-differential major. See the per-college pages: <Link href="/ut-austin-engineering-tuition">Engineering</Link>, <Link href="/ut-austin-mccombs-tuition">McCombs</Link>, <Link href="/ut-austin-computer-science-tuition">CS</Link>.</p>

          <h3>Merit and college-specific scholarships</h3>
          <p>The official calculator estimates need-based institutional aid only. Merit awards (Forty Acres Scholarship, Terry Scholarship, departmental merit awards, athletic scholarships) are decided separately and not captured. For high-academic students competing for Forty Acres or similar, the actual net price can be substantially lower than the calculator estimates.</p>

          <h3>Outside scholarships</h3>
          <p>National Merit, Coca-Cola Scholars, Gates Scholars, local foundation awards, and corporate scholarships are not part of UT&apos;s calculator output. Many out-of-state families end up with $5,000-$25,000/year of outside scholarship aid not modeled in the official estimate.</p>

          <h2>Estimated net price ranges by family income</h2>
          <p>For a baseline, here is a rough framework for net price estimation at UT Austin (full-time undergraduate, on-campus housing, 2025-26 cost of attendance):</p>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Family AGI</th>
                  <th>In-State Net Price/Year</th>
                  <th>Non-Resident Net Price/Year</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Under $40,000</td><td className="num">~$0-$8,000 (Texas Empowerment + Pell)</td><td className="num">~$60,000-$75,000 (federal aid only)</td></tr>
                <tr><td>$40,000 - $65,000</td><td className="num">~$5,000-$15,000 (Texas Empowerment + partial)</td><td className="num">~$65,000-$80,000</td></tr>
                <tr><td>$65,000 - $100,000</td><td className="num">~$15,000-$25,000 (Texas Advance Commitment)</td><td className="num">~$70,000-$85,000</td></tr>
                <tr><td>$100,000 - $200,000</td><td className="num">~$25,000-$35,000</td><td className="num">~$80,000-$88,000</td></tr>
                <tr><td>$200,000 - $400,000</td><td className="num">~$32,000-$38,000 (sticker)</td><td className="num">~$80,000-$90,000 (sticker)</td></tr>
                <tr><td>Over $400,000</td><td className="num">~$32,000-$38,000 (sticker)</td><td className="num">~$80,000-$90,000 (sticker)</td></tr>
              </tbody>
            </table>
          </div>

          <p>These are rough estimates. The official calculator output will be more precise for your specific family. Notable: at higher income levels the in-state net price converges with the sticker because institutional aid phases out. The same is true for non-residents at all income levels.</p>

          <h2>The single largest net-price lever for out-of-state families</h2>

          <div className="callout">
            <h4>The non-aid path to a lower net price</h4>
            <p className="mb-0">For an out-of-state family above the federal Pell Grant threshold, the realistic net-price reduction from institutional aid is small — often $0-$5,000/year. The realistic net-price reduction from Texas residency reclassification is approximately ${fmtUSD(TUITION.annualSavings)}/year. The residency pathway is roughly an order of magnitude larger than the aid pathway for most out-of-state families.</p>
          </div>

          <p>The way this looks in practice: an out-of-state family considering UT Austin runs the official net price calculator, gets a four-year net price estimate around $300,000-$340,000 (sticker minus modest aid), and concludes UT is too expensive vs an in-state public option. The piece they did not factor in is that one year of paid out-of-state tuition followed by three years of Texas residency reclassification can bring the four-year tuition portion down by approximately $99,660. That reduction is not in any net price calculator UT publishes.</p>

          <p>The math for a typical out-of-state Property Pathway family looks roughly like:</p>
          <ul>
            <li><strong>Year 1:</strong> Out-of-state tuition + COA = ~$80,000-$90,000</li>
            <li><strong>Years 2-4:</strong> In-state tuition + COA = ~$32,000-$38,000/year</li>
            <li><strong>Four-year total:</strong> ~$176,000-$204,000</li>
            <li><strong>Without residency pathway (4 years OOS):</strong> ~$320,000-$360,000</li>
            <li><strong>Savings:</strong> approximately $144,000-$156,000 over four years</li>
          </ul>

          <p>This calculation assumes the family already has the capital to acquire Texas property (typical purchase: $400K-$500K West Campus condo) and treats the property as housing + a residency vehicle. The condo doubles as the student&apos;s housing across the four years, replacing $13,000-$25,000/year of dorm or off-campus rent. Net of housing costs, the residency pathway saves most families substantially more than the official net price calculator would suggest.</p>

          <h2>How to use UT&apos;s official net price calculator alongside the residency pathway analysis</h2>
          <ol>
            <li><strong>Run UT&apos;s official calculator first.</strong> Get the baseline net price estimate at your current residency classification. This tells you UT&apos;s view of your need-based aid eligibility.</li>
            <li><strong>If you are out-of-state and the official net price is too high,</strong> do not stop there. Model the residency pathway separately.</li>
            <li><strong>Use our <Link href="/tuition-calculator">tuition calculator</Link></strong> to project the four-year tuition cost with and without residency reclassification.</li>
            <li><strong>Add the residency-pathway carrying costs.</strong> If the pathway requires buying Texas property, factor in mortgage interest, property tax, HOA, insurance, and maintenance. Typical: $30,000-$45,000/year for a $400-$500K West Campus condo.</li>
            <li><strong>Net the housing replacement.</strong> The property doubles as housing, replacing whatever the student would have paid in dorm or off-campus rent.</li>
            <li><strong>Result: a complete four-year net-price picture</strong> that includes both UT&apos;s aid math and the residency-pathway math.</li>
          </ol>

          <h2>Try the calculator on this site</h2>
          <p>Our tuition calculator on this site focuses specifically on the residency-pathway math: it lets you input your student&apos;s enrollment year, college, credit load, and residency timeline, and outputs a year-by-year four-year tuition projection with and without the residency reclassification.</p>

          <p><Link href="/tuition-calculator" className="btn">Open the tuition calculator →</Link></p>

          <p>For UT&apos;s official federal-mandate net price calculator, visit <a href="https://npc.collegeboard.org/student/app/utaustin" target="_blank" rel="noopener noreferrer">npc.collegeboard.org/student/app/utaustin</a>.</p>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Related reading</h2>
            <ul>
              <li><Link href="/tuition-calculator">Our tuition calculator</Link> — models residency pathway specifically</li>
              <li><Link href="/ut-austin-cost-of-attendance">Full cost of attendance breakdown</Link></li>
              <li><Link href="/ut-austin-in-state-vs-out-of-state-tuition">In-state vs out-of-state tuition comparison</Link></li>
              <li><Link href="/texas-residency-rules">Texas residency pathway</Link></li>
              <li><Link href="/how-to-get-in-state-tuition-ut-austin">How to get in-state tuition</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection
        source="instateutaustin-net-price-calc"
        heading="Want a custom net-price scenario?"
        subhead="Send your student's specific situation (admit status, college, family financial picture in broad strokes) and Luke will reply with a written estimate that includes both the standard net-price math and the residency pathway."
      />
    </>
  );
}
