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

const TITLE = 'UT Austin Cost of Attendance 2025-26 (Total Bill, Not Just Tuition)';
const DESCRIPTION = `Full UT Austin cost of attendance for 2025-26: tuition, housing, meals, books, fees, and personal expenses. Roughly $32K-$38K/year for a Texas resident, $80K-$90K/year for a non-resident on campus.`;
const PATH = '/ut-austin-cost-of-attendance';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is the total cost of attendance at UT Austin?', a: `For 2025-26, approximately $32,000-$38,000/year for a Texas resident living on campus and $80,000-$90,000/year for a non-resident on campus. The biggest swing factor is residency: tuition runs ${fmtUSD(TUITION.inStatePerYear)}/year for residents vs ${fmtUSD(TUITION.outOfStatePerYear)}/year for non-residents. Housing and food add another $16,000-$22,000/year on top.` },
  { q: 'How much does it cost to live on campus at UT Austin?', a: 'Residence hall rates run approximately $11,000-$15,000 per academic year depending on the hall (Jester East is on the cheaper end, Honors Quad and the newer halls cost more). A mandatory meal plan adds about $5,000-$6,000. Total on-campus housing + meals: roughly $16,000-$21,000/year.' },
  { q: 'How much does off-campus housing near UT Austin cost?', a: 'Off-campus apartments and condos in West Campus, Hyde Park, North Campus, and Riverside run $1,000-$1,800 per bedroom per month in furnished four-bedroom shared apartments, or $1,500-$2,500 for a 1-bedroom condo. Annual cost (including utilities): approximately $13,000-$25,000 depending on the unit type and shared/private status. Many out-of-state families buy a condo for the student which is the lowest annual cost over a four-year span once the residency-tuition savings are captured.' },
  { q: 'What are required fees at UT Austin?', a: 'Required fees include Information Technology, Library, Medical Services, Recreational Sports, Student Services, Transportation, Union, and a small handful of others. They total approximately $3,900/year and are bundled into the published tuition figure. These fees are the same regardless of residency status.' },
  { q: 'Does cost of attendance include health insurance?', a: 'UT charges an Academic Health Plan fee for students not covered by other insurance, currently about $2,800-$3,200/year. Students with comparable insurance from their family\'s policy can waive this through MyStatus. Out-of-state families should verify their existing plan has Austin-area in-network providers before waiving.' },
  { q: 'Are books and supplies really $1,200/year?', a: 'UT publishes $1,200 as the average books-and-supplies allowance, but actual costs vary widely. STEM majors with required lab textbooks, engineering software licenses, or art supplies often spend $2,000-$3,000/year. Liberal arts majors using library copies and rented or used books often spend $500-$800/year.' },
  { q: 'How much should out-of-state families budget for transportation?', a: 'Flights between Austin and most US cities run $200-$500 round trip outside peak season. Most students fly home for winter break and summer (sometimes Thanksgiving and spring break too) plus parent visits during the year. Annual flight budget: $1,500-$3,500/year for the student plus parent visits.' },
];

export default function COAPage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'UT Austin Cost of Attendance', path: PATH },
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
        eyebrow="The full bill, not just tuition"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Cost of Attendance 2025-26</h1>}
        lede="Tuition is one line on the bill. Housing, meals, fees, books, insurance, and personal expenses add another $20K-$50K/year. Here is the complete breakdown for residents and non-residents."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The two headline numbers">
            For 2025-26, UT Austin&apos;s total cost of attendance is approximately <strong>$32,000-$38,000/year</strong> for a Texas resident on campus and <strong>$80,000-$90,000/year</strong> for a non-resident on campus. The biggest swing factor is residency (the tuition gap is roughly {fmtUSD(TUITION.annualSavings)}/year). The next-biggest factor is housing choice: dorms run $16K-$21K/year all-in, off-campus shared apartments run $13K-$25K, and family-owned condos vary by financing structure. <Link href="/texas-residency-rules">The residency pathway for out-of-state families</Link> is the single most impactful cost lever.
          </QuickAnswer>

          <AuthorBox blurb="Has personally walked dozens of out-of-state families through the full cost picture and the residency pathway that cuts the four-year bill by roughly $99,660." />

          <h2 className="mt-0">The full 2025-26 cost-of-attendance picture</h2>
          <p>UT Austin&apos;s Office of Financial Services publishes an official cost-of-attendance figure used for financial aid eligibility calculations. The actual bill a family pays is more variable than the official figure because housing, meals, and personal expenses depend heavily on choices.</p>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Cost Component</th>
                  <th>In-State (per year)</th>
                  <th>Out-of-State (per year)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Tuition and required fees (base undergrad)</td><td className="num">~${fmtUSD(TUITION.inStatePerYear).replace('$','')}</td><td className="num">~${fmtUSD(TUITION.outOfStatePerYear).replace('$','')}</td></tr>
                <tr><td>On-campus housing</td><td className="num">~$11,000-$15,000</td><td className="num">~$11,000-$15,000</td></tr>
                <tr><td>Meal plan (required for some halls)</td><td className="num">~$5,000-$6,000</td><td className="num">~$5,000-$6,000</td></tr>
                <tr><td>Books and supplies</td><td className="num">~$1,200</td><td className="num">~$1,200</td></tr>
                <tr><td>Personal expenses</td><td className="num">~$2,500-$3,500</td><td className="num">~$2,500-$3,500</td></tr>
                <tr><td>Transportation (excluding flights home)</td><td className="num">~$500-$1,500</td><td className="num">~$1,500-$3,500</td></tr>
                <tr><td>Health insurance (if not waived)</td><td className="num">~$2,800-$3,200</td><td className="num">~$2,800-$3,200</td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>Total annual cost</strong></td><td className="num"><strong>~$32,000-$38,000</strong></td><td className="num"><strong>~$80,000-$90,000</strong></td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>Four-year total</strong></td><td className="num"><strong>~$128,000-$152,000</strong></td><td className="num"><strong>~$320,000-$360,000</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>Differential tuition for Engineering, McCombs Business, and Computer Science majors adds roughly $2,500-$3,700/year to the tuition line for both residents and non-residents.</p>

          <h2>The single most impactful cost lever: residency classification</h2>
          <p>The difference between in-state and out-of-state tuition is approximately {fmtUSD(TUITION.annualSavings)} per year. Over four years that is roughly {fmtUSD(TUITION.fourYearSavings)} of potential savings, or about ${fmtUSD(TUITION.threeYearSavings)} if residency is achieved in year 2 (the typical out-of-state pathway).</p>

          <p>No other cost component on UT Austin&apos;s bill is as variable as residency. Housing choices swing $5,000-$10,000/year. Meal plans swing $2,000-$3,000/year. Books swing $1,000-$2,000/year. The residency lever is bigger than all of those combined, several times over.</p>

          <p>That is why most out-of-state families admitted to UT, after running the math, pursue the Texas residency pathway. The vehicle is real-property ownership, the timeline is 12 months, and the documentation is straightforward when assembled correctly. The full guide is <Link href="/texas-residency-rules">on the residency rules page</Link>.</p>

          <h2>Housing options and their true cost</h2>

          <h3>On-campus residence halls</h3>
          <p>UT operates 14 residence halls with approximately 7,400 beds. Costs vary by hall:</p>
          <ul>
            <li><strong>Lower cost (~$11,000-$12,000/year):</strong> Jester East and West, San Jacinto, Brackenridge. Older buildings, larger occupancy, basic amenities.</li>
            <li><strong>Mid-cost (~$12,000-$14,000/year):</strong> Kinsolving, Roberts/Prather, Honors Quad. Mix of older and renovated.</li>
            <li><strong>Higher cost (~$14,000-$15,500/year):</strong> Almetris Duren, Whitis Court, newer renovations.</li>
            <li><strong>Required meal plan:</strong> Most residence halls require a meal plan, adding ~$5,000-$6,000/year. A few apartment-style halls do not require it.</li>
          </ul>

          <p>UT requires first-year students to apply for housing and gives priority based on application date. Demand exceeds supply, so applying early in the spring before enrollment is important. About 25% of UT undergraduates live on campus; the rest are in apartments or family-owned property.</p>

          <h3>Off-campus apartments</h3>
          <p>The standard student rental near UT is a furnished four-bedroom shared apartment with private bedrooms and a shared common area. Buildings like American Campus Communities, The Standard, 26 West, Lark, and others target this market. Per-bedroom rents run $1,000-$1,800/month including most utilities. Annual cost per bedroom: ~$12,000-$21,000.</p>

          <p>Smaller 1- and 2-bedroom condos rent at $1,500-$2,500/month or $1,800-$3,500/month respectively. Hyde Park and East Austin offer cheaper options at slightly longer commutes.</p>

          <h3>Family-owned property (the residency strategy)</h3>
          <p>For out-of-state families pursuing the residency pathway, buying a condo is the most cost-effective housing option over four years. The monthly carrying cost of a $475,000 West Campus condo (25% down, 6.5% mortgage, $550 HOA, post-homestead property tax) runs approximately $3,500/month in cash outflow, of which ~$900/month is principal pay-down (i.e., recovered on sale). Net housing cost: ~$2,600/month or ~$31,000/year, similar to off-campus rent.</p>

          <p>But the property also captures the residency-tuition savings of ~${fmtUSD(TUITION.annualSavings)}/year starting in year 2. Net of those savings, the four-year housing-plus-tuition cost for a property-pathway family typically runs about $20K-$40K less than the same family in off-campus rentals paying non-resident tuition. Plus the property typically appreciates. See <Link href="/condos-near-ut">the condos near UT page</Link> for the full math.</p>

          <h2>Hidden costs UT does not publish prominently</h2>

          <h3>Orientation and onboarding</h3>
          <p>New Student Orientation (NSO) costs about $300 for the student and an optional ~$200 for the parent program. Required transcripts, residency-petition supporting document fees, and other one-time costs add another $300-$500 in the first year.</p>

          <h3>Course-specific fees</h3>
          <p>Engineering students pay extra lab fees per course ($75-$200 each). Studio art and design students pay materials fees. Music students pay applied music lessons fees. CS students pay for required software licenses that university accounts do not cover. These can add $500-$1,500/year for the affected majors.</p>

          <h3>Greek life</h3>
          <p>If the student joins a sorority or fraternity, annual dues run $1,500-$4,000 depending on the chapter. House members pay additional housing fees. Greek life is significant at UT and a meaningful cost line for families whose student participates.</p>

          <h3>Spring break, parent weekend, and graduation travel</h3>
          <p>Out-of-state parents typically visit at least twice a year, plus the student flies home for breaks. Annual travel for an out-of-state family runs $2,500-$5,000/year combined.</p>

          <h2>Financial aid options at UT Austin</h2>

          <h3>Need-based aid</h3>
          <p>UT&apos;s flagship need-based program is the Texas Advance Commitment, which guarantees free tuition for Texas families earning under $100,000 AGI and Texas Empowerment guaranteeing free tuition and fees for families under $65,000. These programs are residents-only at the institutional level. Federal Pell Grant ($7,395 max for 2025-26) and federal subsidized loans apply equally to non-residents.</p>

          <h3>Merit aid</h3>
          <p>UT&apos;s merit-only awards (no need component) are limited. The Forty Acres Scholarship (Texas Exes) covers full tuition for select students, around 20 awards per year. The Terry Scholarship and Carter Burwell Scholarships are similar in selectivity. National Merit awards convert to college money at UT but are not aggressive by national flagship standards.</p>

          <h3>Major-specific scholarships</h3>
          <p>McCombs, Cockrell Engineering, Moody College of Communication, and the College of Fine Arts maintain their own scholarship pools for incoming and continuing students. Awards range from $1,000-$15,000/year and are typically based on a combination of merit and major fit. Apply through MyStatus and the college&apos;s own application portal.</p>

          <p>For most out-of-state families, financial aid is not the primary cost-reduction lever. The residency pathway is.</p>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Run your specific cost scenario</h2>
            <p>The <Link href="/tuition-calculator">tuition calculator</Link> takes your student&apos;s college, credit load, enrollment year, and residency timing and outputs a year-by-year four-year cost projection. Pair it with the <Link href="/parent-guide">parent guide</Link> for the operational picture and the <Link href="/texas-residency-rules">residency rules</Link> for the legal framework.</p>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-cost-of-attendance" />
    </>
  );
}
