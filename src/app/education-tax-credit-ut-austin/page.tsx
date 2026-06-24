import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactSection } from '@/components/ContactSection';
import { SITE } from '@/lib/site';

const TITLE = 'Education Tax Credit for UT Austin: AOTC, Lifetime Learning, Form 8863';
const DESCRIPTION = 'Complete guide to federal education tax credits for UT Austin tuition: American Opportunity Tax Credit (up to $2,500/year), Lifetime Learning Credit (up to $2,000/year), how to claim them on IRS Form 8863, income phase-outs, and combining with 529 plan distributions.';
const PATH = '/education-tax-credit-ut-austin';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Can I get a tax credit for UT Austin tuition?', a: 'Yes. Federal education tax credits are available for qualified tuition expenses at any eligible US college, including UT Austin. The two primary credits: American Opportunity Tax Credit (AOTC) worth up to $2,500/year for the first four years of undergraduate study; Lifetime Learning Credit (LLC) worth up to $2,000/year with broader eligibility. Both are claimed on IRS Form 8863 alongside the federal tax return.' },
  { q: 'What is the American Opportunity Tax Credit (AOTC)?', a: 'The American Opportunity Tax Credit is a federal tax credit worth up to $2,500/year per eligible student. It covers qualified tuition expenses (tuition, required fees, course-required books and supplies) for the first four years of undergraduate study. To qualify, the student must be: (1) enrolled at least half-time, (2) pursuing a degree, (3) not have completed four years of undergraduate, (4) not have claimed AOTC for more than four years, (5) not have a felony drug conviction. The credit phases out for high-income families (modified AGI $80K-$90K single; $160K-$180K married).' },
  { q: 'What is the Lifetime Learning Credit (LLC)?', a: 'The Lifetime Learning Credit is a federal tax credit worth up to $2,000/year (20% of up to $10,000 in qualified expenses). Less generous than AOTC but has broader eligibility: no four-year limit, no half-time enrollment requirement, no degree requirement, no felony drug conviction restriction. The credit phases out at MAGI $80K-$90K single; $160K-$180K married (same as AOTC). Generally use AOTC instead of LLC during undergraduate years; LLC is more useful for graduate study and continuing education.' },
  { q: 'Can I claim both AOTC and Lifetime Learning Credit?', a: 'No, not for the same student in the same year. You must choose one credit per student per year. AOTC is generally better (up to $2,500 vs $2,000) for eligible undergraduate students. LLC may be better for graduate students or fifth-year undergraduates who have exhausted AOTC eligibility.' },
  { q: 'What is the income limit for the AOTC and LLC?', a: 'Both AOTC and LLC phase out at the same income levels: single filer modified AGI $80,000-$90,000 (phase-out); married filing jointly $160,000-$180,000 (phase-out). Above the upper threshold, the credit is fully phased out. For families above $180K MAGI married, neither credit is available.' },
  { q: 'How do I claim the education tax credit?', a: 'File IRS Form 8863 (Education Credits) with your federal tax return. You need Form 1098-T from UT Austin (which reports qualified tuition payments and scholarships); UT issues 1098-T by January 31 each year. The 1098-T is available in MyStatus. Form 8863 calculates the credit amount based on your AGI, filing status, and qualified expenses; the credit flows to Form 1040 reducing your federal tax liability.' },
  { q: 'Can I use a 529 plan distribution and claim education tax credits in the same year?', a: 'Yes, but you cannot claim the credit on expenses paid by tax-free 529 distributions. The math: if total qualified expenses are $20,000 and you take $20,000 from 529, no expenses are available for the tax credit. Many families intentionally pay $4,000-$10,000 of tuition from non-529 funds (e.g., from current cash flow or savings) to claim the maximum AOTC. The strategy: use 529 for most expenses, pay enough out-of-pocket to claim the full $2,500 AOTC.' },
  { q: 'What expenses qualify for education tax credits at UT Austin?', a: 'Qualifying expenses for AOTC and LLC: (1) tuition and required fees paid to UT (the largest category); (2) course-required books, supplies, and equipment. NOT qualifying: room and board, transportation, personal expenses, optional student health insurance, optional course materials, sports or recreation fees not required for enrollment. Note: room and board IS a qualified 529 expense but NOT a qualified education tax credit expense.' },
];

export default function EducationTaxCreditPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Education Tax Credit for UT Austin', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Education tax credits"
        title={<h1 className="text-ink max-w-[24ch]">Education Tax Credit for UT Austin</h1>}
        lede="Complete guide to federal education tax credits for UT tuition: AOTC up to $2,500/year, Lifetime Learning Credit up to $2,000/year, how to claim them, income limits, and how to combine with 529 plan distributions."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The short version">
            Federal education tax credits available for UT Austin tuition: <strong>American Opportunity Tax Credit (AOTC)</strong> up to <strong>$2,500/year</strong> for first 4 years of undergraduate (largest credit, but limited); <strong>Lifetime Learning Credit (LLC)</strong> up to <strong>$2,000/year</strong> (broader eligibility, less generous). Both phase out at MAGI <strong>$80-$90K single / $160-$180K married</strong>. Claim on IRS Form 8863 using UT&apos;s Form 1098-T. Both credits require qualified expenses NOT paid by tax-free 529 distributions.
          </QuickAnswer>

          <AuthorBox blurb="Has helped families optimize the 529 plan + education tax credit interaction for maximum total tax benefit." />

          <h2 className="mt-0">The two federal education tax credits</h2>

          <h3>American Opportunity Tax Credit (AOTC)</h3>
          <ul>
            <li><strong>Maximum credit:</strong> $2,500/year per eligible student</li>
            <li><strong>Calculation:</strong> 100% of first $2,000 of qualified expenses + 25% of next $2,000 (total $2,500 max on $4,000 of expenses)</li>
            <li><strong>40% refundable:</strong> up to $1,000 of the credit can be refunded if it exceeds tax owed</li>
            <li><strong>Eligibility:</strong> first four years of undergraduate study only; half-time or more; pursuing a degree; not previously claimed AOTC for more than 4 years; no felony drug conviction</li>
            <li><strong>Income phase-out:</strong> Single MAGI $80,000-$90,000; Married MAGI $160,000-$180,000</li>
            <li><strong>Best for:</strong> traditional undergraduate students in years 1-4</li>
          </ul>

          <h3>Lifetime Learning Credit (LLC)</h3>
          <ul>
            <li><strong>Maximum credit:</strong> $2,000/year per family (not per student)</li>
            <li><strong>Calculation:</strong> 20% of up to $10,000 in qualified expenses ($2,000 max)</li>
            <li><strong>Not refundable:</strong> reduces tax owed but cannot generate a refund beyond zero</li>
            <li><strong>Eligibility:</strong> no four-year limit; any enrollment level; no degree requirement; no drug conviction restriction</li>
            <li><strong>Income phase-out:</strong> Single MAGI $80,000-$90,000; Married MAGI $160,000-$180,000 (same as AOTC)</li>
            <li><strong>Best for:</strong> graduate students, students taking fewer than half-time, continuing education, students who have exhausted AOTC eligibility</li>
          </ul>

          <h2>AOTC vs LLC: which to claim</h2>
          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>AOTC</th>
                  <th>LLC</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Maximum credit</td><td className="num">$2,500/year</td><td className="num">$2,000/year</td></tr>
                <tr><td>Refundable portion</td><td className="num">Up to $1,000</td><td>Not refundable</td></tr>
                <tr><td>Per student or per family</td><td>Per student</td><td>Per family</td></tr>
                <tr><td>Year limit</td><td>4 years</td><td>None</td></tr>
                <tr><td>Enrollment level</td><td>Half-time or more</td><td>Any enrollment</td></tr>
                <tr><td>Degree requirement</td><td>Pursuing degree</td><td>No degree required</td></tr>
                <tr><td>Best for</td><td>Undergrad years 1-4</td><td>Grad school, continuing ed</td></tr>
              </tbody>
            </table>
          </div>

          <h2>How the 529 plan + tax credit interaction works</h2>
          <div className="callout">
            <h4>The double-dipping rule</h4>
            <p className="mb-0">You cannot claim AOTC or LLC on expenses paid by tax-free 529 distributions. The IRS rule: any tuition expense covered by 529 funds is not available for the tax credit. Practical implication: many families intentionally pay $4,000-$10,000 of tuition from non-529 sources (cash, current income, savings) to preserve the full AOTC eligibility, while using 529 for most expenses (room and board, fees, books).</p>
          </div>

          <h3>Optimal 529 + AOTC strategy</h3>
          <ul>
            <li>Use 529 to pay: tuition above $4,000, room and board, required fees, books</li>
            <li>Pay from non-529 sources: $4,000 of tuition (or $10,000 of expenses for LLC)</li>
            <li>Claim AOTC on the non-529 expenses: up to $2,500 federal tax credit</li>
            <li>Effective: $2,500 tax credit + tax-free 529 growth = maximum tax-advantaged college funding</li>
          </ul>

          <h2>Step-by-step: claiming the AOTC for UT Austin tuition</h2>
          <ol>
            <li><strong>Confirm eligibility.</strong> Student is at UT for first 4 years of undergraduate, half-time+, pursuing degree, no felony drug conviction. Family MAGI under phase-out threshold.</li>
            <li><strong>Pay qualified expenses.</strong> Tuition, required fees, course-required books and supplies. At least $4,000 of these expenses should be from non-529 sources to maximize AOTC.</li>
            <li><strong>Receive Form 1098-T from UT.</strong> UT issues 1098-T by January 31 each year via MyStatus. The form reports qualified tuition paid (Box 1) and scholarships/grants received (Box 5).</li>
            <li><strong>Calculate qualified expenses.</strong> Total qualified expenses minus 529 distributions = expenses available for tax credit.</li>
            <li><strong>File Form 8863 with your federal tax return.</strong> Form 8863 calculates the credit; flows to Form 1040 (Line 29 or similar).</li>
            <li><strong>Reduce federal tax liability.</strong> The credit directly reduces tax owed; up to $1,000 may be refunded.</li>
          </ol>

          <h2>Example: AOTC calculation</h2>
          <div className="callout">
            <h4>UT freshman, Texas resident, family MAGI $120K married</h4>
            <ul>
              <li>Tuition + required fees: $11,688</li>
              <li>529 distribution: $7,688 (paying portion of tuition)</li>
              <li>Cash payment for tuition: $4,000 (preserved for AOTC)</li>
              <li>AOTC calculation: 100% of $2,000 + 25% of $2,000 = $2,500 credit</li>
              <li><strong>Federal tax savings: $2,500</strong></li>
              <li>Plus 529 tax-free withdrawal benefit (federal-tax-free growth on $7,688)</li>
            </ul>
          </div>

          <h2>Family income above the phase-out</h2>
          <p>For families with MAGI above $180,000 married ($90,000 single), AOTC and LLC are fully phased out. Other tax-advantaged college funding options:</p>
          <ul>
            <li><strong>529 plan tax-free growth and qualified withdrawals:</strong> still available regardless of income</li>
            <li><strong>Direct gifts to student (in their name, lower-tax-bracket return):</strong> may shift some tax benefit to the student</li>
            <li><strong>Coverdell ESA:</strong> phase-out at $190K-$220K MAGI married; smaller annual contribution limit ($2,000/year)</li>
            <li><strong>UGMA/UTMA accounts:</strong> assets in the student&apos;s name; kiddie tax applies to investment income above thresholds</li>
            <li><strong>Roth IRA for the student:</strong> if the student has earned income; up to annual contribution limit</li>
          </ul>

          <h2>Tax credit + state tax considerations</h2>
          <p>Texas has no state income tax, so there is no state-level education tax credit at UT for Texas-resident families. However, families with state-level tax obligations elsewhere should investigate:</p>
          <ul>
            <li><strong>Indiana CollegeChoice 529 deduction:</strong> 20% tax credit on $7,500 contribution; substantial state benefit</li>
            <li><strong>New York 529 Saves deduction:</strong> up to $10,000 married for NY 529 contributions</li>
            <li><strong>Pennsylvania PA 529 deduction:</strong> up to $18,000 per beneficiary</li>
            <li><strong>Other state plan benefits:</strong> vary; consult home-state CPA</li>
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
              <li><Link href="/529-plan-ut-austin">529 plan for UT</Link>: tax-free growth funding</li>
              <li><Link href="/ut-austin-financial-aid-out-of-state">Financial aid</Link>: federal aid alongside tax credits</li>
              <li><Link href="/texas-no-state-income-tax-college">Texas no income tax</Link>: state-level tax considerations</li>
              <li><Link href="/ut-austin-4-year-cost-out-of-state">UT 4-year cost</Link>: total cost picture with all tax benefits</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-tax-credits" />
    </>
  );
}
