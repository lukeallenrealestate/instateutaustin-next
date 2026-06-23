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

const TITLE = '529 Plan for UT Austin (Complete 2026 Guide for Out-of-State Families)';
const DESCRIPTION = `Complete guide to using a 529 plan to fund UT Austin: how 529 plans work, which state's plan to choose for an out-of-state UT family, qualified withdrawals, state tax considerations, and how to stack 529 funding with the residency pathway.`;
const PATH = '/529-plan-ut-austin';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Can I use a 529 plan to pay for UT Austin?', a: 'Yes. 529 plan funds can be used for qualified higher education expenses at any accredited college or university, including UT Austin. Qualified expenses include tuition, required fees, room and board (if enrolled at least half-time), books, supplies, and equipment. UT Austin is an eligible institution under federal 529 rules.' },
  { q: 'Should I use a Texas 529 plan if my student is going to UT Austin?', a: 'Not necessarily. The federal tax benefits of 529 plans (tax-free growth, tax-free qualified withdrawals) are the same regardless of which state\'s plan you use. State income tax deductions for contributions vary by state. If you live in a state that offers a deduction for contributions to its own 529 plan (over 30 states do), generally use the home-state plan. Texas has no state income tax, so Texas 529 plans (Texas College Savings Plan, LoneStar 529 Plan, Texas Tuition Promise Fund) offer no in-state tax incentive over other states\' plans.' },
  { q: 'Which 529 plan is best for UT Austin?', a: 'The "best" 529 plan depends on the family\'s state of residence (for state tax deduction), the plan\'s investment options, expense ratios, and minimum contribution. Top-rated plans include Utah\'s my529 (low fees, broad investment options), Nevada\'s SSGA Upromise 529, New York\'s 529 College Savings Program (for New York residents), and Virginia\'s CollegeAmerica (for advisors). For UT Austin specifically, any 529 plan works at federal-tax-free withdrawal level; choose by overall plan quality plus home-state tax considerations.' },
  { q: 'What expenses can I pay from a 529 plan at UT Austin?', a: 'Qualified higher education expenses at UT include: tuition and required fees, books, supplies and equipment required for enrollment, room and board (for students enrolled at least half-time, up to UT\'s published cost of attendance), special needs services (for disabled students), and up to $10,000/year of student loan repayment. Personal expenses, transportation between school and home, and dues for fraternity or sorority membership are NOT qualified expenses.' },
  { q: 'How does the Texas residency pathway affect my 529 plan?', a: 'The residency reclassification reduces UT Austin tuition from approximately $44,908/year to $11,688/year, saving about $33,220/year. This means your 529 plan dollars stretch further: instead of needing $44,908/year to cover non-resident tuition, you need $11,688/year for resident tuition, freeing 529 funds for other qualified expenses (housing, books, fees) or for graduate school. Some families use the freed 529 capacity to fund graduate school (medical school, law school, MBA) at full sticker.' },
  { q: 'Can I keep my home-state 529 plan if I move to Texas?', a: 'Yes. Once you\'ve contributed to a 529 plan, the assets remain in that plan regardless of where you move. However, the state income tax deduction you may have received for contributions in your home state is typically "recaptured" if you move and roll the plan over to another state. Most families simply continue contributing to their home-state plan after moving to Texas (since Texas does not offer a deduction either way).' },
  { q: 'What if I overfund the 529 plan and the residency pathway saves more than expected?', a: 'Several options: (1) Use surplus 529 funds for graduate school for the same beneficiary (medical school, law school, MBA, master\'s degrees); (2) Change the beneficiary to another family member (sibling, cousin, niece/nephew) without tax consequence; (3) Roll up to $35,000 from a 529 to a Roth IRA for the beneficiary (subject to limits and 15-year holding requirement under SECURE 2.0); (4) Take a non-qualified withdrawal (subject to 10% federal penalty on earnings plus income tax on earnings). Most families find ways to use surplus 529 funds productively rather than triggering the penalty.' },
  { q: 'How much should I contribute to a 529 for UT Austin?', a: 'For a fully-funded out-of-state student, the four-year cost is approximately $300,000-$360,000 (at full sticker without residency pathway) or approximately $190,000-$220,000 (with residency pathway). For a Texas-resident student, the four-year cost is approximately $130,000-$180,000. Contribution targets depend on the residency expectations: target $300K+ for full OOS sticker; target $190-220K for OOS with planned residency pathway; target $130-180K for Texas resident.' },
];

export default function Plan529Page() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: '529 Plan for UT Austin', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · 529 plan strategy"
        title={<h1 className="text-ink max-w-[24ch]">529 Plan for UT Austin</h1>}
        lede="Complete guide to using a 529 plan to fund UT Austin: which state's plan to choose, qualified expenses, state tax considerations, and how 529 funding stacks with the Texas residency pathway."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The short version">
            529 plan funds work at UT Austin for all federal-qualified higher education expenses (tuition, required fees, room and board if enrolled half-time+, books, supplies). The federal tax benefits are the same regardless of which state&apos;s plan you use. State income tax deductions vary; if your home state offers one for contributions to its plan, generally use the home-state plan. Texas has no state income tax, so Texas 529 plans offer no in-state advantage. The <Link href="/texas-residency-rules">Texas residency pathway</Link> reduces UT tuition by approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong>, which means 529 dollars stretch further and surplus can be redirected to housing, books, fees, or graduate school.
          </QuickAnswer>

          <AuthorBox blurb="Has helped dozens of out-of-state families coordinate 529 funding with the residency pathway to optimize the four-year cost." />

          <h2 className="mt-0">How 529 plans work</h2>
          <p>A 529 plan is a tax-advantaged investment account for qualified higher education expenses. Two flavors:</p>
          <ul>
            <li><strong>529 College Savings Plans:</strong> investment accounts that grow over time. Contributions are made post-tax; earnings grow tax-deferred; qualified withdrawals are federal-tax-free. Many states also offer a state income tax deduction for contributions to the state&apos;s own plan.</li>
            <li><strong>529 Prepaid Tuition Plans:</strong> contracts that lock in tuition rates at participating in-state public colleges. Less flexible; less popular than savings plans.</li>
          </ul>

          <h2>Using 529 plan funds at UT Austin</h2>
          <p>UT Austin is an eligible institution for 529 plan withdrawals. Qualified higher education expenses at UT include:</p>
          <ul>
            <li><strong>Tuition and required fees:</strong> the largest single category; includes base tuition and any college-specific differential</li>
            <li><strong>Room and board:</strong> on-campus housing and meal plan; off-campus housing and food up to UT&apos;s published cost of attendance (must be enrolled at least half-time)</li>
            <li><strong>Books, supplies, and equipment:</strong> textbooks, laptop (if required), other course-required materials</li>
            <li><strong>Required student health insurance:</strong> if required for enrollment</li>
            <li><strong>Special needs services:</strong> for students with documented disabilities</li>
            <li><strong>Up to $10,000/year of student loan repayment</strong> for the beneficiary (under SECURE 2.0)</li>
            <li><strong>Up to $10,000/year of K-12 tuition</strong> for siblings (under TCJA)</li>
          </ul>

          <h3>NOT qualified expenses at UT</h3>
          <ul>
            <li>Personal expenses (clothing, entertainment, travel home for vacations)</li>
            <li>Transportation costs (commuting between home and school)</li>
            <li>Fraternity or sorority dues</li>
            <li>Health insurance NOT required by the school</li>
            <li>Sports or club activities NOT required by the academic program</li>
          </ul>

          <h2>Choosing the right 529 plan for a UT Austin family</h2>
          <p>The choice depends on three factors:</p>

          <h3>Factor 1: Home-state tax deduction</h3>
          <p>Over 30 states offer state income tax deductions or credits for contributions to the state&apos;s own 529 plan. Examples:</p>
          <ul>
            <li><strong>California, Florida, Tennessee, Texas:</strong> no state income tax, so no deduction (these states\' 529 plans offer no in-state tax incentive)</li>
            <li><strong>New York:</strong> deduction up to $5,000 single / $10,000 married per year for NY 529 contributions</li>
            <li><strong>Illinois:</strong> deduction up to $10,000 single / $20,000 married per year for IL Bright Start or Bright Directions</li>
            <li><strong>Pennsylvania:</strong> deduction up to $18,000 per beneficiary per year</li>
            <li><strong>Indiana:</strong> 20% tax credit on up to $7,500 in CollegeChoice 529 contributions/year</li>
          </ul>
          <p>For families in deduction states, generally use the home-state plan unless the in-state plan is significantly worse than competitors.</p>

          <h3>Factor 2: Plan quality (fees, investment options)</h3>
          <p>For families in no-state-tax states (Texas, Florida, no-deduction states) or considering out-of-state plans:</p>
          <ul>
            <li><strong>Utah&apos;s my529:</strong> consistently top-rated for low fees and broad investment options</li>
            <li><strong>Nevada&apos;s SSGA Upromise 529:</strong> well-regarded with strong target-date funds</li>
            <li><strong>Virginia&apos;s CollegeAmerica:</strong> advisor-sold, popular with financial advisors</li>
            <li><strong>Illinois Bright Start:</strong> low fees, good investment options (also offers IL deduction for IL residents)</li>
          </ul>

          <h3>Factor 3: Investment timeline</h3>
          <p>For young children (10+ years to college), aggressive equity allocation makes sense; the time horizon supports market volatility. For students within 5 years of college, more conservative target-date allocations are appropriate. For students entering college in 1-2 years, principal preservation matters more than growth.</p>

          <h2>The 529 plan + Texas residency pathway interaction</h2>

          <div className="callout">
            <h4>How residency pathway changes the 529 picture</h4>
            <p className="mb-0">If your student attends UT as a non-resident for four years at sticker, total four-year cost is approximately $300,000-$360,000, requiring substantial 529 funding. If your student attends UT and pursues the residency pathway (year 1 OOS, years 2-4 in-state), total four-year cost drops to approximately $190,000-$220,000. The pathway frees approximately $100,000-$140,000 of 529 capacity that can be redirected to housing, fees, books, or graduate school for the same beneficiary.</p>
          </div>

          <h2>Common 529 + UT scenarios</h2>

          <h3>Scenario A: California family, child age 5, planning ahead</h3>
          <ul>
            <li>California has no state tax deduction for 529 contributions</li>
            <li>Recommended plan: Utah my529 or Nevada SSGA (low fees, broad options)</li>
            <li>Target funding: $300K-$360K (full OOS sticker) by age 18</li>
            <li>If residency pathway will be pursued: target $190K-$220K instead</li>
            <li>Aggressive equity allocation given 13-year time horizon</li>
          </ul>

          <h3>Scenario B: New York family, child age 14</h3>
          <ul>
            <li>New York offers deduction up to $10,000 married for NY 529 contributions</li>
            <li>Recommended plan: New York 529 (NY Saves) to capture deduction</li>
            <li>Target funding: $300K-$360K (OOS sticker) or $190K-$220K (with residency pathway)</li>
            <li>Moderate allocation given 4-year time horizon</li>
          </ul>

          <h3>Scenario C: Texas family, child age 10</h3>
          <ul>
            <li>Texas has no state income tax; no deduction available</li>
            <li>Texas-resident UT tuition is approximately $11,688/year; four-year total approximately $130,000-$160,000</li>
            <li>Recommended plan: Utah my529 or Nevada SSGA (low fees, broad options)</li>
            <li>Target funding: $130K-$180K</li>
            <li>Moderate allocation given 8-year time horizon</li>
          </ul>

          <h3>Scenario D: Family with multiple children</h3>
          <ul>
            <li>Each child can have their own 529 account with the family as account owner</li>
            <li>Funds can be transferred between beneficiaries (siblings) without tax consequence</li>
            <li>If older child overfunded, transfer surplus to younger child</li>
            <li>Roll-over to Roth IRA option (up to $35,000) provides additional flexibility under SECURE 2.0</li>
          </ul>

          <h2>Gifting strategies for 529 plans</h2>
          <ul>
            <li><strong>Annual gift tax exclusion:</strong> up to $19,000/year per donor per beneficiary (2026 limit) without gift tax filing</li>
            <li><strong>5-year forward gift:</strong> up to 5 years of contributions (currently $95,000) gifted to a 529 in one year with election to spread over 5 years for gift tax purposes; commonly used by grandparents</li>
            <li><strong>Grandparent contributions:</strong> no longer affect FAFSA expected family contribution (since the FAFSA Simplification Act); grandparents can contribute without penalty to financial aid eligibility</li>
            <li><strong>State tax deduction availability:</strong> some states (Maryland, New York) require the contributor to be the account owner to claim the deduction; structure accordingly</li>
          </ul>

          <h2>What to do if you don&apos;t use all the 529 funds</h2>
          <p>Common scenarios for unused 529 funds after UT graduation:</p>
          <ul>
            <li><strong>Graduate school for same beneficiary:</strong> medical school, law school, MBA, master&apos;s degrees are all qualified uses. UT medical schools (Dell Medical, UT-Houston, UT-San Antonio, UTMB Galveston) accept 529 funds.</li>
            <li><strong>Change beneficiary to sibling, cousin, niece/nephew:</strong> tax-free transfer to another qualifying family member.</li>
            <li><strong>Roth IRA rollover (under SECURE 2.0):</strong> up to $35,000 lifetime can be rolled to a Roth IRA for the beneficiary, subject to 15-year holding period.</li>
            <li><strong>Student loan repayment:</strong> up to $10,000/year of beneficiary&apos;s federal or private student loans (lifetime max $10,000).</li>
            <li><strong>K-12 tuition for siblings:</strong> up to $10,000/year for K-12 tuition.</li>
            <li><strong>Non-qualified withdrawal:</strong> earnings subject to 10% federal penalty plus income tax. Last resort.</li>
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
              <li><Link href="/ut-austin-4-year-cost-out-of-state">UT Austin 4-year cost</Link>: how much 529 funding to target</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the pathway that frees 529 capacity</li>
              <li><Link href="/ut-austin-financial-aid-out-of-state">Financial aid for out-of-state</Link>: federal aid alongside 529</li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link>: model 529 funding against expected costs</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-529-plan" />
    </>
  );
}
