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

const TITLE = 'How to Save $100K on UT Austin Tuition (Out-of-State Family Playbook)';
const DESCRIPTION = `The complete playbook for saving approximately $100,000 on UT Austin tuition as an out-of-state family. Texas residency pathway execution, stacking scholarships, 529 plan optimization, and the tax credits that recover another $10,000.`;
const PATH = '/how-to-save-100k-ut-austin-tuition';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Can I really save $100,000 on UT Austin tuition?', a: `Yes. The Texas residency pathway alone saves approximately ${fmtUSD(TUITION.threeYearSavings)} over three years for out-of-state families (converting non-resident tuition to resident rate for years 2-4 of enrollment). Adding institutional merit scholarships ($5K-$15K/year), education tax credits ($2,500/year AOTC), and 529 plan tax-free growth pushes total savings to $110K-$140K+ over four years.` },
  { q: 'What is the single biggest way to save money at UT Austin?', a: `The Texas residency pathway. Out-of-state tuition is ${fmtUSD(TUITION.outOfStatePerYear)}/year; in-state tuition is ${fmtUSD(TUITION.inStatePerYear)}/year. Reclassification after 12 months of qualifying Texas domicile saves approximately ${fmtUSD(TUITION.annualSavings)}/year for the remaining three years of enrollment.` },
  { q: 'How long does it take to save $100K on UT tuition?', a: 'The pathway itself completes in 12 months (residency reclassification). Full savings accrue over the four-year enrollment: year 1 at out-of-state rate, years 2-4 at in-state rate. Additional stacking of scholarships and tax credits produces incremental savings each year.' },
  { q: 'Is saving $100K on UT tuition legal?', a: 'Yes. Texas Education Code §54.052 explicitly recognizes the residency pathway. Institutional merit scholarships are awarded by UT. Federal tax credits are federal law. 529 plans are federal law. All the strategies stacked in this playbook are entirely legal; UT residency office processes thousands of these petitions annually.' },
  { q: 'Do I need to buy Texas property to save $100K?', a: 'Not strictly required, but the property pathway is the cleanest and most reliable route to Texas residency. Alternative pathways (parent full relocation, independent student residency) work but are more constrained. Most families pursuing $100K+ savings use Texas real estate as their residency vehicle.' },
];

export default function Save100KPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'How to Save $100K on UT Austin Tuition', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="The $100K savings playbook"
        title={<h1 className="text-ink max-w-[24ch]">How to Save $100K on UT Austin Tuition</h1>}
        lede="The complete playbook for out-of-state families: Texas residency pathway, merit scholarships, education tax credits, and 529 plan optimization stacked for $100K+ in savings."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The $100K math">
            Out-of-state families save approximately <strong>{fmtUSD(TUITION.threeYearSavings)}</strong> via the Texas residency pathway alone (years 2-4 at in-state rate). Stacking institutional merit scholarships ($20K-$60K over 4 years), federal education tax credits ($10K over 4 years), and 529 plan tax-free growth pushes typical total savings to <strong>$110K-$140K+</strong>. The pathway is legal, well-established, and executed by thousands of UT families annually.
          </QuickAnswer>

          <AuthorBox blurb="Has personally helped dozens of out-of-state families execute the full playbook of savings strategies at UT Austin." />

          <h2 className="mt-0">The five-lever savings stack</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Lever</th>
                  <th>4-Year Savings</th>
                  <th>Difficulty</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1. Texas residency pathway</td><td className="num">~{fmtUSD(TUITION.threeYearSavings)}</td><td>Medium (requires 12-month execution)</td></tr>
                <tr><td>2. Institutional merit scholarships</td><td className="num">$20K-$60K</td><td>Medium (application quality)</td></tr>
                <tr><td>3. AOTC federal tax credit</td><td className="num">$10K</td><td>Easy (file with tax return)</td></tr>
                <tr><td>4. 529 plan tax-free growth</td><td className="num">$15K-$40K in tax benefit</td><td>Easy (open account, contribute)</td></tr>
                <tr><td>5. Texas no-state-income-tax exit</td><td className="num">$80K-$320K (household-level, if parents relocate)</td><td>Hard (requires household move)</td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>Total stacked savings</strong></td><td className="num"><strong>$135K-$430K+</strong></td><td></td></tr>
              </tbody>
            </table>
          </div>

          <h2>Lever 1: The Texas residency pathway (~{fmtUSD(TUITION.threeYearSavings)})</h2>
          <p>The largest single lever. Under Texas Education Code §54.052, out-of-state students who establish 12 continuous months of qualifying Texas domicile can petition for residency reclassification. Approved petitions convert UT tuition from {fmtUSD(TUITION.outOfStatePerYear)}/year to {fmtUSD(TUITION.inStatePerYear)}/year. For years 2-4 of enrollment (typical pathway timing), this saves approximately <strong>{fmtUSD(TUITION.annualSavings)}/year × 3 years = {fmtUSD(TUITION.threeYearSavings)}</strong>.</p>

          <p><strong>Execution:</strong> See <Link href="/how-to-establish-texas-residency">how to establish Texas residency</Link> for the full step-by-step. Most families use property purchase (see <Link href="/buying-a-condo-for-ut-austin-in-state-tuition">buying a condo for UT in-state tuition</Link>) as the primary residency vehicle.</p>

          <h2>Lever 2: Institutional merit scholarships ($20K-$60K)</h2>
          <p>UT Austin awards millions of dollars in merit-based scholarships to non-resident students each year. Typical range for high-academic out-of-state admits: $5,000-$15,000/year. Common scholarships:</p>
          <ul>
            <li><strong>Forty Acres Scholars Program:</strong> full-ride ($200K+ over 4 years) for ~15 students per year; extremely competitive</li>
            <li><strong>College-specific merit</strong> at McCombs, Cockrell, Moody, Natural Sciences: $5K-$15K/year</li>
            <li><strong>National Merit Scholarship</strong> for National Merit Finalists naming UT first choice: $1,500-$3,000/year plus stipend</li>
            <li><strong>Departmental scholarships</strong> awarded through the UT Honors and Scholarship Application (HSA)</li>
          </ul>
          <p>Typical high-academic OOS admit: $7,500/year × 4 years = <strong>$30,000</strong> in scholarship savings. See <Link href="/ut-austin-scholarships-out-of-state">UT Austin scholarships for out-of-state students</Link>.</p>

          <h2>Lever 3: AOTC federal tax credit ($10K)</h2>
          <p>The American Opportunity Tax Credit provides up to $2,500/year in federal tax credit for qualified tuition expenses during the first 4 years of undergraduate study. Total: <strong>$10,000</strong> over 4 years. Income phase-out: $80K-$90K single / $160K-$180K married.</p>

          <p><strong>Strategy:</strong> pay $4,000/year of tuition from non-529 sources to preserve full AOTC eligibility. See <Link href="/education-tax-credit-ut-austin">education tax credit for UT Austin</Link>.</p>

          <h2>Lever 4: 529 plan tax-free growth ($15K-$40K in tax benefit)</h2>
          <p>529 plans grow tax-free and provide tax-free withdrawals for qualified education expenses. For a family that funded $300K into 529 accounts over 15+ years, tax-free growth generates $80K-$150K in earnings above contributions. The tax benefit vs a taxable account: $15K-$40K depending on family tax bracket.</p>

          <p><strong>Strategy:</strong> Fund early and consistently. Use for tuition, housing, meals, books at UT. See <Link href="/529-plan-ut-austin">529 plan for UT Austin</Link>.</p>

          <h2>Lever 5: Texas no-state-income-tax exit ($80K-$320K household-level)</h2>
          <p>For families combining the residency pathway with parent relocation to Texas, the household-level tax savings from exiting home-state income tax can be substantial. Examples:</p>
          <ul>
            <li>California ($500K AGI): saves ~$48K/year × 4 years = <strong>$192K</strong></li>
            <li>New York ($500K AGI): saves ~$42K/year × 4 years = <strong>$168K</strong></li>
            <li>Illinois ($500K AGI): saves ~$22K/year × 4 years = <strong>$88K</strong></li>
            <li>Oregon ($500K AGI): saves ~$38K/year × 4 years = <strong>$152K</strong></li>
          </ul>
          <p>See <Link href="/texas-no-state-income-tax-college">Texas no state income tax</Link>.</p>

          <h2>Executing the full playbook: year-by-year</h2>

          <h3>Junior year of high school (Year -2)</h3>
          <ul>
            <li>Take SAT/ACT; build academic profile for UT admission</li>
            <li>Begin 529 contribution ramp if not already funded</li>
            <li>Evaluate residency pathway feasibility (family finances, willingness to buy property)</li>
          </ul>

          <h3>Senior year (Year -1)</h3>
          <ul>
            <li>Apply to UT by November 1 priority deadline (scholarship consideration)</li>
            <li>Apply for Forty Acres Scholars if profile supports</li>
            <li>Complete UT Honors and Scholarship Application (HSA)</li>
            <li>File FAFSA by January 15 for federal aid</li>
            <li>Compare offers by May 1 Decision Day</li>
          </ul>

          <h3>Summer before freshman year (Year 0)</h3>
          <ul>
            <li>Acquire Texas property (typically West Campus condo, $350K-$650K)</li>
            <li>Move to Texas or establish Rule #4 LLC rental structure</li>
            <li>Obtain Texas driver&apos;s license, vehicle registration, voter registration</li>
            <li>Begin 12-month residency clock</li>
          </ul>

          <h3>Freshman year (Year 1)</h3>
          <ul>
            <li>Pay first-year out-of-state tuition ({fmtUSD(TUITION.outOfStatePerYear)}) minus any merit scholarships</li>
            <li>Maintain Texas documentary set throughout year</li>
            <li>File federal tax return with Texas address (parent or student)</li>
            <li>File AOTC on tax return ($2,500 credit)</li>
          </ul>

          <h3>Summer between freshman and sophomore year</h3>
          <ul>
            <li>Petition for residency reclassification through UT MyStatus</li>
            <li>Submit full documentary package</li>
            <li>Await approval (6-10 weeks typical)</li>
          </ul>

          <h3>Sophomore-senior years (Years 2-4)</h3>
          <ul>
            <li>Pay in-state tuition ({fmtUSD(TUITION.inStatePerYear)}) minus scholarships</li>
            <li>Continue AOTC each year ($2,500)</li>
            <li>Use 529 for qualified expenses</li>
            <li>Maintain Texas domicile throughout</li>
          </ul>

          <h2>The typical family savings profile</h2>
          <div className="callout">
            <h4>Middle-income OOS family (from California)</h4>
            <ul className="mb-0">
              <li>Residency pathway savings: {fmtUSD(TUITION.threeYearSavings)}</li>
              <li>Institutional merit scholarship: $30,000 ($7,500/yr × 4)</li>
              <li>AOTC federal tax credit: $10,000</li>
              <li>529 plan tax benefit: $25,000</li>
              <li><strong>UT-specific savings total: ~$164,660</strong></li>
              <li>Plus CA-to-TX household state tax savings (if parents relocate): $192,000 additional</li>
              <li><strong>Combined 4-year total impact: ~$356,000</strong></li>
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
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the legal framework</li>
              <li><Link href="/buying-a-condo-for-ut-austin-in-state-tuition">Buying a condo for UT</Link>: the property pathway</li>
              <li><Link href="/ut-austin-scholarships-out-of-state">Scholarships for OOS</Link>: merit aid options</li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link>: model your scenario</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-save-100k" />
    </>
  );
}
