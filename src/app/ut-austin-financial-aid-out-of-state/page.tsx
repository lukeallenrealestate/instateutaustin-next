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

const TITLE = 'UT Austin Financial Aid for Out-of-State Students (FAFSA, CSS, Federal vs Institutional)';
const DESCRIPTION = `Complete guide to financial aid at UT Austin for non-residents: FAFSA, federal Pell Grant and loans, what institutional aid is and is not available to out-of-state students, and the residency pathway that unlocks Texas-resident-only need-based programs.`;
const PATH = '/ut-austin-financial-aid-out-of-state';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Does UT Austin give financial aid to out-of-state students?', a: 'Yes, but the type and amount differ from what Texas-resident students receive. Out-of-state students at UT are eligible for federal aid (Pell Grant, federal subsidized and unsubsidized loans, Parent PLUS, work-study) by filing FAFSA. They are also eligible for merit-based institutional scholarships (Forty Acres, college-specific merit). However, the major need-based institutional aid programs (Texas Advance Commitment, Texas Empowerment) are restricted to Texas residents by Texas statute, so they are not available to non-residents.' },
  { q: 'Do I file FAFSA if my student is going to UT Austin as out-of-state?', a: 'Yes. FAFSA is the federal aid application and is required to be considered for Pell Grant, federal subsidized loans, federal unsubsidized loans, Parent PLUS loans, and federal work-study. It is also typically required to be considered for institutional need-based aid where eligible. UT Austin\'s FAFSA priority deadline is January 15 for the following academic year. UT\'s FAFSA school code is 003658.' },
  { q: 'Do I need to file CSS Profile for UT Austin?', a: 'No. UT Austin uses FAFSA only, not CSS Profile. Some private universities require CSS Profile in addition to FAFSA, but UT Austin\'s financial aid analysis runs on FAFSA data alone.' },
  { q: 'What is the maximum Pell Grant amount for 2025-26?', a: 'The maximum federal Pell Grant for the 2025-26 award year is $7,395. The actual award is based on Student Aid Index (SAI) calculated from FAFSA data. Eligibility threshold is approximately $60,000 family AGI for full Pell (with significant variation by family size and circumstances). Pell Grant is portable and works at UT Austin regardless of residency classification.' },
  { q: 'What is Texas Advance Commitment and can my out-of-state student qualify?', a: 'Texas Advance Commitment is a UT Austin commitment to cover tuition and required fees (currently $11,688/year) for Texas-resident undergraduates with family AGI under $100,000 who file FAFSA. The program is restricted to students classified as Texas residents for tuition purposes. An out-of-state student becomes eligible only after Texas residency reclassification through the standard pathway under Texas Education Code §54.052.' },
  { q: 'What is Texas Empowerment?', a: 'Texas Empowerment is a UT Austin commitment to cover full tuition, required fees, AND on-campus housing assistance for Texas-resident undergraduates with family AGI under $65,000. Restricted to Texas residents. Out-of-state students qualify only after residency reclassification.' },
  { q: 'How much federal loan can my out-of-state student borrow at UT Austin?', a: 'Federal Direct Subsidized and Unsubsidized loan limits are the same regardless of residency classification. Dependent undergraduate limits: $5,500 (freshman year), $6,500 (sophomore), $7,500 (junior and senior). Federal Direct Parent PLUS Loan is available up to the cost of attendance minus other aid, with approval based on parent credit. These are the same federal limits across all colleges nationally.' },
  { q: 'What is the typical financial aid package for an out-of-state student at UT Austin?', a: 'For an out-of-state family above the Pell Grant income threshold, the typical aid package is: $0 Pell Grant, $5,500-$7,500/year federal subsidized loan, $2,000-$7,000 federal unsubsidized loan, and $0-$10,000/year institutional merit scholarship (varies by academic profile). Total aid: roughly $7,500-$25,000/year on a sticker cost of approximately $80,000-$90,000/year. Net price: roughly $55,000-$80,000/year. The largest single net-price reduction available beyond this is the Texas residency pathway, which is not in any aid package.' },
];

export default function FinancialAidPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Financial Aid for Out-of-State', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Financial aid for non-residents"
        title={<h1 className="text-ink max-w-[24ch]">UT Austin Financial Aid for Out-of-State Students</h1>}
        lede="What aid actually works for non-resident UT Austin students: federal Pell Grant, federal loans, merit scholarships, and the residency pathway that unlocks the largest Texas-resident-only programs."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The honest answer">
            Out-of-state students at UT Austin are eligible for federal aid (Pell Grant, federal loans, work-study) through FAFSA and for university-wide and college-specific merit scholarships. The major need-based institutional aid programs (<strong>Texas Advance Commitment</strong>, <strong>Texas Empowerment</strong>) are restricted to Texas residents. The largest single net-price reduction available to non-residents is not aid; it is the <Link href="/texas-residency-rules">Texas residency reclassification pathway</Link> worth approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong>, which also unlocks the resident-only programs starting in year 2.
          </QuickAnswer>

          <AuthorBox blurb="Has walked dozens of out-of-state UT families through the aid + scholarship + residency stack to produce the lowest possible net price." />

          <h2 className="mt-0">The two-bucket financial aid system at UT Austin</h2>
          <p>Financial aid at UT Austin breaks cleanly into two buckets that work differently for in-state and out-of-state students:</p>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Aid Source</th>
                  <th>Available to In-State?</th>
                  <th>Available to Out-of-State?</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Federal Pell Grant</td><td>Yes (income-based)</td><td>Yes (income-based)</td></tr>
                <tr><td>Federal Direct Subsidized Loan</td><td>Yes (income-based)</td><td>Yes (income-based)</td></tr>
                <tr><td>Federal Direct Unsubsidized Loan</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>Federal Parent PLUS Loan</td><td>Yes (credit-based)</td><td>Yes (credit-based)</td></tr>
                <tr><td>Federal Work-Study</td><td>Yes (income-based)</td><td>Yes (income-based)</td></tr>
                <tr><td>Texas Advance Commitment (institutional)</td><td><strong>Yes (under $100K AGI)</strong></td><td><strong>No (residency-restricted)</strong></td></tr>
                <tr><td>Texas Empowerment (institutional)</td><td><strong>Yes (under $65K AGI)</strong></td><td><strong>No (residency-restricted)</strong></td></tr>
                <tr><td>UT institutional merit scholarships</td><td>Yes</td><td>Yes (open to non-residents)</td></tr>
                <tr><td>Forty Acres Scholars (full ride)</td><td>Yes</td><td>Yes (open to non-residents)</td></tr>
                <tr><td>State of Texas need grants (TEXAS Grant, etc.)</td><td>Yes (residents only)</td><td>No</td></tr>
                <tr><td>Outside scholarships</td><td>Yes</td><td>Yes</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Step 1: File FAFSA</h2>
          <p>The Free Application for Federal Student Aid (FAFSA) is the gateway to federal aid and the data UT uses to evaluate need-based institutional aid where eligible.</p>
          <ul>
            <li><strong>FAFSA opens:</strong> October 1 for the following academic year</li>
            <li><strong>UT Austin priority deadline:</strong> January 15</li>
            <li><strong>UT Austin school code:</strong> 003658</li>
            <li><strong>What you need:</strong> Social Security numbers, federal tax returns (parent and student), W-2s, current bank statements, investment records, business and farm records (if applicable)</li>
            <li><strong>File at:</strong> studentaid.gov</li>
          </ul>
          <p>The 2024-25 academic year saw the rollout of the simplified FAFSA (FAFSA Simplification Act). It now takes 20-40 minutes for most families (vs the 60-90 minutes of the previous version). Re-file FAFSA every year your student is in college.</p>

          <h2>Step 2: Understand what aid your student actually qualifies for as a non-resident</h2>

          <h3>Federal Pell Grant</h3>
          <p>Maximum award for 2025-26: <strong>$7,395</strong>. Eligibility based on Student Aid Index (SAI) calculated from FAFSA. Rough threshold: families with AGI under approximately $60,000 qualify for some Pell; full Pell typically requires AGI under $40,000 with variation by family size. Pell is portable and applies to UT Austin at full value regardless of residency. Renewable annually.</p>

          <h3>Federal Direct Subsidized Loans</h3>
          <p>Up to $3,500 (freshman), $4,500 (sophomore), $5,500 (junior/senior) per year for dependent undergraduates with demonstrated need. Subsidized means the federal government pays interest during enrollment. Eligibility is income-based via FAFSA.</p>

          <h3>Federal Direct Unsubsidized Loans</h3>
          <p>Up to an additional $2,000 (freshman), $2,000 (sophomore), $2,000 (junior/senior) per year for dependent undergraduates regardless of income. Unsubsidized means interest accrues during enrollment. Available to most filers.</p>

          <h3>Federal Direct Parent PLUS Loan</h3>
          <p>Available to creditworthy parents up to the full cost of attendance minus other aid received. Higher interest rate than Subsidized/Unsubsidized; fixed at the federal PLUS rate (currently ~9%). Eligibility is credit-based, not income-based. Many out-of-state families lean heavily on PLUS to bridge the cost gap.</p>

          <h3>Federal Work-Study</h3>
          <p>Income-based program providing part-time on-campus or off-campus jobs, typically 10-15 hours/week earning $2,500-$5,000/year. Funds are not credited to the bill; they are wages paid to the student. Available to qualifying out-of-state students.</p>

          <h3>UT institutional merit scholarships</h3>
          <p>See the <Link href="/ut-austin-scholarships-out-of-state">scholarships for out-of-state students</Link> page for the full landscape. Typical range for high-academic non-residents: $2,000-$15,000/year. Forty Acres Scholars Program is the flagship full-ride (rare, very competitive).</p>

          <h2>Step 3: Understand what aid your student does not qualify for as a non-resident</h2>

          <h3>Texas Advance Commitment</h3>
          <p>UT&apos;s flagship in-state need-based commitment: covers full tuition and required fees ({fmtUSD(TUITION.inStatePerYear)}/year) for Texas residents with family AGI under $100,000 who file FAFSA. Worth roughly $40,000-$45,000 over four years for qualifying in-state families. Not available to non-residents. Becomes available after residency reclassification.</p>

          <h3>Texas Empowerment</h3>
          <p>UT&apos;s flagship in-state need-based commitment for lowest-income Texas families: covers tuition, required fees, AND housing assistance for Texas residents under $65,000 AGI. Worth roughly $60,000-$80,000 over four years for qualifying in-state families. Not available to non-residents.</p>

          <h3>State of Texas Grant Programs</h3>
          <p>TEXAS Grant, Tuition Equalization Grant, and Towards EXcellence, Access, and Success Grant are state-funded need grants restricted to Texas residents. Not available to non-residents under any pathway except residency reclassification.</p>

          <h2>The residency pathway: the largest single net-price lever</h2>
          <div className="callout">
            <h4>How residency unlocks both lower tuition and resident-only aid</h4>
            <p className="mb-0">An out-of-state family who establishes Texas residency through the 12-month pathway sees two compounding effects: (1) tuition drops by approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> from the rate change alone, and (2) middle-income families become eligible for Texas Advance Commitment (under $100K AGI) which can cover the remaining tuition entirely. The combined effect for a qualifying family is the largest single net-price reduction available at UT Austin.</p>
          </div>

          <h2>Typical four-year net price scenarios</h2>

          <h3>Scenario A: $200K AGI, out-of-state, no residency pathway</h3>
          <ul>
            <li>Sticker tuition (4 years): {fmtUSD(TUITION.outOfStatePerYear * 4)}</li>
            <li>Federal Pell: $0 (income too high)</li>
            <li>Federal subsidized loan: $0 (income too high)</li>
            <li>Federal unsubsidized loan: ~$31,000 total available (taken at family discretion)</li>
            <li>UT merit scholarship: $0-$10,000/year (varies)</li>
            <li>Net tuition cost: ~{fmtUSD(TUITION.outOfStatePerYear * 4 - 30000)} (taking $7,500/yr scholarship)</li>
            <li>Total net price (with housing/fees/books): ~$340,000 over four years</li>
          </ul>

          <h3>Scenario B: $200K AGI, out-of-state, with residency pathway approved year 2</h3>
          <ul>
            <li>Year 1 tuition: {fmtUSD(TUITION.outOfStatePerYear)} (out-of-state) minus $7,500 scholarship = {fmtUSD(TUITION.outOfStatePerYear - 7500)}</li>
            <li>Years 2-4 tuition: {fmtUSD(TUITION.inStatePerYear)}/yr (in-state) minus $7,500 scholarship = {fmtUSD(TUITION.inStatePerYear - 7500)}/yr</li>
            <li>Texas Advance Commitment: not applicable at this income level (over $100K AGI threshold)</li>
            <li>Net tuition cost (4 years): {fmtUSD(TUITION.outOfStatePerYear - 7500 + 3 * (TUITION.inStatePerYear - 7500))}</li>
            <li>Savings vs Scenario A: approximately {fmtUSD((TUITION.outOfStatePerYear * 4 - 30000) - (TUITION.outOfStatePerYear - 7500 + 3 * (TUITION.inStatePerYear - 7500)))}</li>
          </ul>

          <h3>Scenario C: $80K AGI, out-of-state, with residency pathway approved year 2</h3>
          <ul>
            <li>Year 1 tuition: {fmtUSD(TUITION.outOfStatePerYear)} (out-of-state) minus partial Pell ~$4,000 minus $7,500 scholarship = ~{fmtUSD(TUITION.outOfStatePerYear - 11500)}</li>
            <li>Years 2-4 tuition: covered by Texas Advance Commitment (resident, under $100K AGI) = $0/yr</li>
            <li>Net tuition cost (4 years): ~{fmtUSD(TUITION.outOfStatePerYear - 11500)}</li>
            <li>Savings vs Scenario A: dramatically larger; residency unlocks Texas Advance Commitment</li>
          </ul>

          <h2>How to optimize aid at UT as an out-of-state family</h2>
          <ol>
            <li><strong>File FAFSA early</strong> (October to January 15 priority deadline)</li>
            <li><strong>Complete the UT Honors and Scholarship Application</strong> in MyStatus for institutional scholarship consideration</li>
            <li><strong>Apply to Forty Acres Scholars Program</strong> by November 1 if academic profile supports it</li>
            <li><strong>Pursue outside scholarships</strong> (Coca-Cola, Gates, state-of-origin foundations, corporate, etc.) starting October of senior year</li>
            <li><strong>Run the residency pathway analysis in parallel</strong> with the aid analysis</li>
            <li><strong>If residency pathway is viable</strong>, the year 2 reclassification unlocks Texas Advance Commitment for qualifying middle-income families</li>
            <li><strong>Re-file FAFSA every year</strong> and check for renewable scholarship eligibility</li>
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
              <li><Link href="/ut-austin-scholarships-out-of-state">UT Austin scholarships for out-of-state</Link>: every merit award open to non-residents</li>
              <li><Link href="/ut-austin-4-year-cost-out-of-state">UT Austin 4-year cost</Link>: total cost breakdown including all aid scenarios</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the pathway that unlocks resident-only aid</li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link>: model your scenario</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-fin-aid-oos" />
    </>
  );
}
