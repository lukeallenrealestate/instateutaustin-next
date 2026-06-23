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

const TITLE = 'UT Austin Tuition 2026-2027: Latest Rates (In-State + Out-of-State)';
const DESCRIPTION = `UT Austin tuition 2026-2027 academic year: in-state ${fmtUSD(TUITION.inStatePerYear)} (frozen by Texas Legislature through 2026-27), out-of-state ${fmtUSD(TUITION.outOfStatePerYear)} projected to rise to ${fmtUSD(TUITION.outOfStateNextYear)}. Plus by-college differential tuition for McCombs, CS, Cockrell, and other UT colleges.`;
const PATH = '/ut-austin-tuition-2026-2027';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is UT Austin tuition for 2026-2027?', a: `UT Austin tuition for 2026-27 academic year: in-state $${TUITION.inStatePerYear.toLocaleString()}/year for Texas residents; out-of-state $${TUITION.outOfStatePerYear.toLocaleString()}/year for non-residents. These are base undergraduate rates including required fees for 15 credit hours. In-state tuition is frozen by the Texas Legislature through 2026-27; out-of-state is set by the UT Board of Regents and has been rising approximately 3-5% annually. College-specific differential tuition adds $400-$3,600 to these base rates for McCombs Business, Computer Science, Cockrell Engineering, and other professional colleges.` },
  { q: 'Will UT Austin tuition increase for 2026-2027?', a: 'In-state tuition will NOT increase for 2026-27; it is frozen by the Texas Legislature through that academic year. Out-of-state tuition is set annually by the UT Board of Regents and has historically risen 3-5% per year. The 2026-27 out-of-state rate is approximately ${TUITION.outOfStateNextYear.toLocaleString()}, up from $${TUITION.outOfStatePerYear.toLocaleString()} in 2025-26. Required fees and college-specific differentials may also adjust modestly.' },
  { q: 'What is the in-state tuition freeze at UT Austin?', a: 'The Texas Legislature passed legislation in recent sessions to freeze in-state tuition at Texas public universities at the 2024-25 level through 2026-27 (some sources extend the freeze to 2027-28; verify with current Legislative action). The freeze benefits Texas-resident families by preventing the normal annual tuition increases. The freeze does not apply to out-of-state tuition (which continues to rise) or to college-specific differential tuition (which may adjust).' },
  { q: 'What does UT Austin tuition cover?', a: 'UT Austin tuition includes: (1) tuition for 12-18 credit hours per semester (full-time enrollment); (2) required fees (general administrative, library, student services, technology, recreational sports); (3) intercollegiate athletics fees; (4) Student Government fees; (5) student bus pass (Capital Metro). Not included: housing, meal plan, books, transportation, personal expenses, course-specific lab fees, optional health insurance, or differential tuition (for some colleges).' },
  { q: 'How much is differential tuition at UT Austin for 2026-2027?', a: 'College-specific differential tuition (approximate, varies by year): McCombs Business adds ~$2,500/year; Computer Science adds ~$3,600/year; Cockrell Engineering adds ~$2,800/year; Moody Communication adds ~$700/year; Natural Sciences adds ~$400/year; Liberal Arts and Education add $0 (use base rate); Architecture adds ~$300/year; Fine Arts adds ~$300/year. Differential tuition is the same dollar amount for residents and non-residents.' },
  { q: 'What is the four-year tuition projection at UT Austin?', a: `Approximate 4-year tuition: Texas resident: ~${fmtUSD(TUITION.inStatePerYear * 4 + 4000)} (accounting for modest fee increases). Non-resident: ~${fmtUSD(TUITION.outOfStatePerYear * 4 + 20000)} (accounting for 3-5% annual increases). With Texas residency pathway (year 1 OOS, years 2-4 in-state): ~${fmtUSD(TUITION.outOfStatePerYear + 3 * TUITION.inStatePerYear + 8000)}. Savings via residency pathway over 4 years: approximately ${fmtUSD(TUITION.threeYearSavings + 12000)}.` },
  { q: 'When are UT Austin tuition payments due?', a: 'UT Austin offers multiple payment plans. The standard payment is due by the term\'s tuition deadline (approximately August 15 for Fall, January 15 for Spring). UT also offers a Tuition Installment Plan (TIP) that splits the bill into 3-4 monthly installments per term, plus a small administrative fee. Payments can be made online through MyStatus, by mail, in person, or through wire transfer.' },
  { q: 'Are there discounts for paying UT Austin tuition early?', a: 'No discount for early payment. UT does not offer a prepayment incentive. However, paying in full at the term deadline avoids the Tuition Installment Plan administrative fee (~$25/term). Some families choose to pay full year upfront for cash management reasons; this does not change the tuition cost.' },
];

export default function Tuition2026Page() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Tuition 2026-2027', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Tuition 2026-2027"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Tuition 2026-2027</h1>}
        lede={`The 2026-27 academic year tuition rates at UT Austin: in-state ${fmtUSD(TUITION.inStatePerYear)}/year (frozen by Texas Legislature) and out-of-state ${fmtUSD(TUITION.outOfStatePerYear)}/year, plus college-specific differentials.`}
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The 2026-27 numbers">
            UT Austin tuition for 2026-27: <strong>{fmtUSD(TUITION.inStatePerYear)}/year</strong> for Texas residents (frozen by the Texas Legislature through 2026-27); <strong>{fmtUSD(TUITION.outOfStatePerYear)}/year</strong> for non-residents (projected to rise to {fmtUSD(TUITION.outOfStateNextYear)} for 2027-28). These are base undergraduate rates for 15 credit hours including required fees. College-specific differential tuition adds $400-$3,600/year for some colleges. The <Link href="/texas-residency-rules">Texas residency pathway</Link> saves out-of-state families approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> from year 2 of enrollment onward.
          </QuickAnswer>

          <AuthorBox blurb="Maintains current UT Austin tuition data and helps families plan four-year cost projections including residency pathway interactions." />

          <h2 className="mt-0">UT Austin 2026-2027 base tuition rates</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Classification</th>
                  <th>2026-27 Per Semester</th>
                  <th>2026-27 Per Year (15 credit hours)</th>
                  <th>Change from 2025-26</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Texas resident</td><td className="num">{fmtUSD(TUITION.inStatePerYear / 2)}</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">No change (frozen)</td></tr>
                <tr><td>Non-resident</td><td className="num">{fmtUSD(TUITION.outOfStatePerYear / 2)}</td><td className="num">{fmtUSD(TUITION.outOfStatePerYear)}</td><td className="num">Modest increase (~3-5%)</td></tr>
              </tbody>
            </table>
          </div>

          <h2>By UT college: 2026-2027 tuition</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>UT College</th>
                  <th>In-State 2026-27</th>
                  <th>Out-of-State 2026-27</th>
                  <th>Differential</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Base undergraduate (Liberal Arts, Education)</td><td className="num">{fmtUSD(TUITION.colleges.base.in)}</td><td className="num">{fmtUSD(TUITION.colleges.base.out)}</td><td className="num">$0</td></tr>
                <tr><td>Natural Sciences</td><td className="num">{fmtUSD(TUITION.colleges.natural.in)}</td><td className="num">{fmtUSD(TUITION.colleges.natural.out)}</td><td className="num">~$400</td></tr>
                <tr><td>Moody Communication</td><td className="num">{fmtUSD(TUITION.colleges.comm.in)}</td><td className="num">{fmtUSD(TUITION.colleges.comm.out)}</td><td className="num">~$700</td></tr>
                <tr><td>Fine Arts</td><td className="num">{fmtUSD(TUITION.colleges.finearts.in)}</td><td className="num">{fmtUSD(TUITION.colleges.finearts.out)}</td><td className="num">~$300</td></tr>
                <tr><td>McCombs Business</td><td className="num">{fmtUSD(TUITION.colleges.business.in)}</td><td className="num">{fmtUSD(TUITION.colleges.business.out)}</td><td className="num">~$2,500</td></tr>
                <tr><td>Cockrell Engineering</td><td className="num">{fmtUSD(TUITION.colleges.engineering.in)}</td><td className="num">{fmtUSD(TUITION.colleges.engineering.out)}</td><td className="num">~$2,800</td></tr>
                <tr><td>Computer Science (CSDS)</td><td className="num">{fmtUSD(TUITION.colleges.cs.in)}</td><td className="num">{fmtUSD(TUITION.colleges.cs.out)}</td><td className="num">~$3,600</td></tr>
              </tbody>
            </table>
          </div>

          <h2>The in-state tuition freeze through 2026-2027</h2>
          <p>The Texas Legislature passed legislation freezing in-state tuition at Texas public universities at the 2024-25 level through 2026-27 academic year. The freeze:</p>
          <ul>
            <li>Locks in-state tuition at $11,688/year for Texas residents</li>
            <li>Does NOT freeze required fees (modest increases possible)</li>
            <li>Does NOT freeze college-specific differential tuition (Board of Regents sets these)</li>
            <li>Does NOT apply to out-of-state tuition (continues to rise annually)</li>
            <li>Is expected to remain in effect through 2026-27; legislative action would extend the freeze</li>
          </ul>

          <h2>2026-2027 cost of attendance</h2>
          <p>Tuition is the largest single cost component but not the only one. Total annual cost of attendance for 2026-27:</p>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Annual Cost (In-State)</th>
                  <th>Annual Cost (Out-of-State)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Tuition and required fees (base)</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">{fmtUSD(TUITION.outOfStatePerYear)}</td></tr>
                <tr><td>On-campus housing (residence hall)</td><td className="num">~$12,500</td><td className="num">~$12,500</td></tr>
                <tr><td>Meal plan</td><td className="num">~$5,800</td><td className="num">~$5,800</td></tr>
                <tr><td>Books and supplies</td><td className="num">~$1,200</td><td className="num">~$1,200</td></tr>
                <tr><td>Transportation</td><td className="num">~$1,500</td><td className="num">~$2,500</td></tr>
                <tr><td>Personal expenses</td><td className="num">~$2,500</td><td className="num">~$3,000</td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>Total annual COA (on-campus)</strong></td><td className="num"><strong>~$35,200</strong></td><td className="num"><strong>~$69,900</strong></td></tr>
              </tbody>
            </table>
          </div>

          <h2>Four-year tuition projection</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Total 4-Year Tuition</th>
                  <th>Savings vs Out-of-State Sticker</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Texas resident (4 years at $11,688 + 4% fee increase)</td><td className="num">~$47,800</td><td className="num">~$135,000 saved</td></tr>
                <tr><td>Out-of-state full sticker (4 years at $44,908 + 4% annual increase)</td><td className="num">~$190,400</td><td className="num">baseline</td></tr>
                <tr><td>Out-of-state with residency pathway (year 1 OOS, years 2-4 in-state)</td><td className="num">~$90,200</td><td className="num">~$100,200 saved</td></tr>
                <tr><td>Out-of-state with residency pathway + $7,500/yr merit scholarship</td><td className="num">~$60,200</td><td className="num">~$130,200 saved</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Payment plans for 2026-2027</h2>
          <ul>
            <li><strong>Full payment by deadline:</strong> standard option; no fee</li>
            <li><strong>Tuition Installment Plan (TIP):</strong> splits term tuition into 3-4 monthly installments; small administrative fee (~$25/term)</li>
            <li><strong>529 plan withdrawals:</strong> tax-free qualified withdrawal for tuition</li>
            <li><strong>Federal aid (FAFSA-dependent):</strong> Pell Grant, federal subsidized/unsubsidized loans, Parent PLUS</li>
            <li><strong>Institutional scholarships:</strong> merit awards reduce tuition (paid as credit to bill)</li>
            <li><strong>Employer tuition reimbursement:</strong> some employers pay for college tuition; submit to employer for reimbursement</li>
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
              <li><Link href="/ut-austin-cost-of-attendance">Full cost of attendance</Link>: tuition + housing + everything else</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the pathway that converts OOS to in-state</li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link>: model your specific scenario</li>
              <li><Link href="/by-college">By UT college</Link>: differential tuition by program</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-tuition-2026-2027" />
    </>
  );
}
