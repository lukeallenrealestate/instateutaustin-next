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

const TITLE = 'UT Austin Payment Plan: Tuition Installment Options (2026)';
const DESCRIPTION = 'UT Austin payment options: full payment, Tuition Installment Plan (TIP) with 3-4 monthly installments per term, 529 plan distributions, employer reimbursement, payment deadlines, and late fee policies.';
const PATH = '/ut-austin-payment-plan-tuition-installment';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Does UT Austin offer a payment plan?', a: 'Yes. UT Austin offers the Tuition Installment Plan (TIP) which splits each semester\'s tuition and required fees into 3-4 monthly installments. There is a small administrative fee (~$25/semester) to enroll. Available for both fall and spring semesters; separate enrollment each semester.' },
  { q: 'How much are UT Austin tuition payments each month with TIP?', a: 'TIP splits semester tuition into 3-4 payments. For a Texas resident paying full-time in-state tuition (~$5,844/semester): approximately $1,461-$1,948/month for 3-4 months. For non-resident (~$22,454/semester): approximately $5,614-$7,485/month for 3-4 months. First payment due at term start; subsequent payments monthly.' },
  { q: 'When are UT Austin tuition payments due?', a: 'Full payment: due by the semester tuition deadline (typically August 15 for Fall, January 15 for Spring). TIP first installment due same date; subsequent installments on monthly due dates published by the Registrar. Late payments incur $50 late fee plus potential registration hold.' },
  { q: 'Can I pay UT Austin tuition with a credit card?', a: 'Yes, but with a fee. UT accepts credit card payments through the online payment portal with a 2.6% convenience fee added. For a $22,000 non-resident semester tuition, the fee is ~$572. Most families opt for e-check (free), 529 plan distribution (direct), or bank transfer instead.' },
  { q: 'How do I use my 529 plan for UT Austin tuition?', a: 'Request a distribution from your 529 plan provider (Utah my529, NY 529, etc.) paid directly to UT Austin. UT accepts 529 distributions via check or electronic funds transfer. Time distribution to arrive by tuition deadline. Alternatively, take distribution to your bank account and pay UT directly (retain records for tax purposes).' },
  { q: 'What if I miss a UT Austin payment deadline?', a: 'Consequences of late payment: (1) $50 late payment fee; (2) registration hold preventing enrollment or class changes; (3) transcript hold; (4) potential drop from courses if extended non-payment. Contact UT Student Accounts Receivable immediately if you cannot pay by deadline; they may offer payment plan modifications or extensions.' },
  { q: 'Does UT Austin offer discounts for prepaying tuition?', a: 'No. UT does not offer prepayment discounts. Paying in full at deadline avoids the small TIP administrative fee (~$25/semester) but does not reduce tuition. Some families prepay for cash management or estate planning reasons; the amount of tuition owed is the same.' },
  { q: 'Can employer tuition reimbursement work for UT Austin?', a: 'Yes. Many employers offer tuition reimbursement benefits (typically $5,250/year tax-free under IRS §127). Employees typically pay tuition upfront, complete the course, submit proof of grade to employer, and receive reimbursement. UT provides all necessary documentation (invoice, grade reports) upon request.' },
];

export default function PaymentPlanPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Payment Plan', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Tuition payment options"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Payment Plan</h1>}
        lede="Complete guide to UT Austin tuition payment options: full payment, Tuition Installment Plan (TIP), 529 distributions, credit card, employer reimbursement, and deadline management."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="Payment options at UT">
            UT Austin offers multiple payment options: <strong>full payment</strong> by deadline (Aug 15 Fall / Jan 15 Spring); <strong>Tuition Installment Plan (TIP)</strong> splits semester tuition into 3-4 monthly installments with small ~$25 admin fee; <strong>529 plan distributions</strong> paid directly to UT; <strong>credit card</strong> with 2.6% convenience fee; <strong>employer reimbursement</strong>. Late payments incur $50 fee + registration hold.
          </QuickAnswer>

          <AuthorBox blurb="Helps families plan tuition payment logistics for UT Austin, including 529 plan coordination and installment options." />

          <h2 className="mt-0">Payment options at UT Austin</h2>

          <h3>Option 1: Full payment</h3>
          <ul>
            <li>Pay full semester tuition and fees by deadline</li>
            <li>Fall deadline: August 15 (approximate)</li>
            <li>Spring deadline: January 15 (approximate)</li>
            <li>No administrative fees</li>
            <li>Payment methods: e-check (free), credit card (2.6% fee), wire transfer, mail check</li>
          </ul>

          <h3>Option 2: Tuition Installment Plan (TIP)</h3>
          <ul>
            <li>Split each semester\'s tuition and fees into 3-4 monthly installments</li>
            <li>Small administrative fee: ~$25/semester</li>
            <li>Separate enrollment each semester</li>
            <li>Enroll through MyStatus by first payment deadline</li>
            <li>Automatic monthly deductions if enrolled in autopay</li>
          </ul>

          <h3>Option 3: 529 plan distribution</h3>
          <ul>
            <li>Direct distribution from 529 provider to UT Austin</li>
            <li>Available from all 529 plans (Utah my529, NY 529, Pennsylvania, etc.)</li>
            <li>Tax-free for qualified education expenses (tuition, required fees, books, room/board if half-time+)</li>
            <li>Time distribution to arrive by tuition deadline</li>
            <li>Retain records for federal tax reporting</li>
          </ul>

          <h3>Option 4: Financial aid + loan disbursements</h3>
          <ul>
            <li>Federal aid (Pell Grant, federal subsidized/unsubsidized loans, Parent PLUS) automatically applied to UT tuition</li>
            <li>UT institutional aid (merit scholarships) applied as credit</li>
            <li>Excess aid refunded to student</li>
          </ul>

          <h3>Option 5: Employer tuition reimbursement</h3>
          <ul>
            <li>Employee pays tuition upfront (out-of-pocket or via 529)</li>
            <li>Completes course; submits grade and receipt to employer</li>
            <li>Employer reimburses per company policy (typically $5,250/year tax-free under IRS §127)</li>
            <li>Common for graduate students and adult learners</li>
          </ul>

          <h2>TIP payment schedule (typical)</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Payment</th>
                  <th>Due Date (Fall)</th>
                  <th>In-State Amount</th>
                  <th>Non-Resident Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Payment 1 (35%)</td><td>August 15</td><td className="num">~$2,046</td><td className="num">~$7,859</td></tr>
                <tr><td>Payment 2 (25%)</td><td>September 15</td><td className="num">~$1,461</td><td className="num">~$5,613</td></tr>
                <tr><td>Payment 3 (25%)</td><td>October 15</td><td className="num">~$1,461</td><td className="num">~$5,613</td></tr>
                <tr><td>Payment 4 (15%)</td><td>November 15</td><td className="num">~$877</td><td className="num">~$3,369</td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>Semester total</strong></td><td></td><td className="num"><strong>~$5,844</strong></td><td className="num"><strong>~$22,454</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>Payment distribution and specific due dates may vary; check UT Student Accounts Receivable for current TIP schedule.</p>

          <h2>Payment deadlines and consequences of late payment</h2>
          <ul>
            <li><strong>Fall payment deadline:</strong> approximately August 15</li>
            <li><strong>Spring payment deadline:</strong> approximately January 15</li>
            <li><strong>Late payment fee:</strong> $50 first offense</li>
            <li><strong>Registration hold:</strong> prevents adding/dropping courses</li>
            <li><strong>Transcript hold:</strong> prevents transcript requests</li>
            <li><strong>Extended non-payment:</strong> may result in course drop and lost aid</li>
            <li><strong>Contact Student Accounts Receivable</strong> immediately if you cannot pay by deadline</li>
          </ul>

          <h2>How to enroll in TIP</h2>
          <ol>
            <li>Log into MyStatus at UT Austin</li>
            <li>Navigate to &quot;Financials&quot; or &quot;My Account&quot;</li>
            <li>Select &quot;Tuition Installment Plan (TIP)&quot;</li>
            <li>Review payment schedule and administrative fee</li>
            <li>Provide bank account for autopay (or plan to pay each installment manually)</li>
            <li>Confirm enrollment by first payment deadline</li>
            <li>Receive email confirmation and payment schedule</li>
          </ol>

          <h2>Common payment strategy for out-of-state families</h2>
          <div className="callout">
            <h4>Optimal payment approach</h4>
            <ul className="mb-0">
              <li>Enroll in TIP for cash flow management if paying out-of-pocket</li>
              <li>Use 529 plan for majority of tuition (tax-free)</li>
              <li>Pay $4,000/year in tuition from non-529 sources to claim full American Opportunity Tax Credit ($2,500/year)</li>
              <li>Set up e-check for TIP payments (free vs 2.6% credit card fee)</li>
              <li>For pathway families: budget for year 1 OOS tuition; residency reclassification reduces year 2+ payments</li>
            </ul>
          </div>

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
              <li><Link href="/529-plan-ut-austin">529 plan for UT</Link>: 529 distribution planning</li>
              <li><Link href="/education-tax-credit-ut-austin">Education tax credits</Link>: AOTC + LLC optimization</li>
              <li><Link href="/ut-austin-financial-aid-out-of-state">Financial aid</Link>: aid + payment coordination</li>
              <li><Link href="/ut-austin-4-year-cost-out-of-state">4-year cost</Link>: total cost picture</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-payment-plan" />
    </>
  );
}
