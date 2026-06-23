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

const TITLE = 'Texas No State Income Tax: The Hidden Savings for UT Austin Families';
const DESCRIPTION = 'Texas has no state income tax. For out-of-state families moving to Texas for UT, this saves $10,000-$80,000+/year in household state tax in addition to the UT tuition pathway. Honest analysis by income bracket and home state.';
const PATH = '/texas-no-state-income-tax-college';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Does Texas have no state income tax?', a: 'Correct. Texas is one of nine US states with no state income tax (the others are Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Washington, and Wyoming). Texas\'s no-income-tax status is enshrined in the Texas Constitution (Article VIII, Section 24-a, requiring a constitutional amendment to enact one). For out-of-state families moving to Texas, this is a substantial household tax advantage independent of the UT tuition pathway.' },
  { q: 'How much does Texas no income tax save versus my home state?', a: 'Depends on your income and home state. California (13.3% top rate): a family with $300K AGI saves ~$30K/year; $500K AGI saves ~$48K/year; $1M AGI saves ~$110K/year. New York (10.9%): ~$25K, ~$42K, ~$90K respectively. Oregon (9.9%): ~$23K, ~$38K, ~$83K. Illinois (4.95%): ~$11K, ~$19K, ~$42K. The savings stack with the UT tuition pathway and continue every year after the move.' },
  { q: 'Does Texas no income tax apply to capital gains?', a: 'Yes. Texas has no state income tax at all, including no tax on capital gains, dividends, interest, or other investment income. (Federal tax still applies.) For families with substantial investment portfolios, the move from California, New York, or Oregon to Texas can save tens of thousands of dollars annually on investment income alone.' },
  { q: 'Does Texas no income tax apply to retirement income?', a: 'Yes. Texas has no state income tax on retirement income (401k withdrawals, IRA withdrawals, Social Security, pensions). For retirees considering relocation, Texas joins Florida, Tennessee, and a few other no-state-tax states as preferred destinations.' },
  { q: 'How much higher are Texas property taxes vs other states?', a: 'Texas property taxes are higher than the national average (~1.9% of value vs ~1.1% national). For a $500K home: Texas ~$9,500/year, California ~$3,500, Illinois ~$10,500, Florida ~$4,000. Texas is in the higher tier nationally but typically not the highest. The combination of no-income-tax + higher property tax is favorable for middle- and high-income households (those with substantial wages or investment income); less favorable for fixed-income low-income households (which pay no income tax anywhere but still owe property tax).' },
  { q: 'Does Texas have other taxes I should know about?', a: 'Texas state sales tax is 6.25%; local sales tax adds up to 2% more, for an effective ~8.25% sales tax. Texas has a margins tax (business franchise tax) on businesses with $1.18M+ revenue. Texas does not have an estate tax or inheritance tax (a meaningful advantage over states like Illinois, Maryland, Massachusetts, Oregon, and Washington that impose state-level estate taxes).' },
  { q: 'Will Texas ever enact a state income tax?', a: 'Politically improbable in the foreseeable future. The Texas Constitution requires a constitutional amendment to enact a state income tax (Article VIII, Section 24-a, adopted in 1993 to constitutionally prohibit it without amendment). Constitutional amendments require a two-thirds vote in both chambers of the Texas Legislature plus majority approval at a statewide referendum. Texas Republican supermajorities and broad voter opposition make this extremely unlikely.' },
  { q: 'How do I exit my home state\'s income tax cleanly?', a: 'Document the move: surrender out-of-state driver\'s license, cancel out-of-state voter registration, file a part-year resident tax return in the prior state for the transition year, terminate out-of-state lease or update primary residence designation. Move all financial accounts, employer records, and other administrative items to the Texas address. High-tax states (California, New York, Oregon) sometimes audit former residents on high incomes; document the move thoroughly with moving company records, utility shut-offs, and the Texas documentary set.' },
];

export default function NoIncomeTaxPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Texas No State Income Tax for College Families', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="Texas residency · The hidden savings"
        title={<h1 className="text-ink max-w-[24ch]">Texas No State Income Tax: The Hidden Savings</h1>}
        lede="Texas has no state income tax. For out-of-state families moving for UT, this saves $10,000-$80,000+/year in household state tax in addition to the UT tuition pathway."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The honest answer">
            Texas is one of nine US states with no state income tax. For families moving from high-tax states (California 13.3%, New York 10.9%, Oregon 9.9%, New Jersey 10.75%, Maryland 5.75%, Massachusetts 9%), the household tax savings is substantial: <strong>$10,000-$80,000+/year</strong> depending on income. This savings is on top of the UT Austin in-state tuition pathway (about <strong>{fmtUSD(TUITION.annualSavings)}/year</strong>). For high-income families relocating during the kid&apos;s college years, the combined tax-and-tuition picture often dwarfs the cost of property acquisition and move logistics.
          </QuickAnswer>

          <AuthorBox blurb="Has helped dozens of out-of-state families analyze the combined effect of the UT tuition pathway and the Texas no-income-tax move." />

          <h2 className="mt-0">How much Texas no income tax saves by home state and income</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Home State (Top Rate)</th>
                  <th>$200K AGI Annual Savings</th>
                  <th>$500K AGI Annual Savings</th>
                  <th>$1M AGI Annual Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>California (13.3%)</td><td className="num">~$18,000</td><td className="num">~$48,000</td><td className="num">~$110,000</td></tr>
                <tr><td>New Jersey (10.75%)</td><td className="num">~$13,000</td><td className="num">~$38,000</td><td className="num">~$90,000</td></tr>
                <tr><td>New York (10.9%)</td><td className="num">~$13,000</td><td className="num">~$38,000</td><td className="num">~$90,000</td></tr>
                <tr><td>Oregon (9.9%)</td><td className="num">~$15,000</td><td className="num">~$38,000</td><td className="num">~$83,000</td></tr>
                <tr><td>Minnesota (9.85%)</td><td className="num">~$15,000</td><td className="num">~$37,000</td><td className="num">~$82,000</td></tr>
                <tr><td>Massachusetts (9%)</td><td className="num">~$14,000</td><td className="num">~$36,000</td><td className="num">~$80,000</td></tr>
                <tr><td>Connecticut (6.99%)</td><td className="num">~$10,000</td><td className="num">~$28,000</td><td className="num">~$64,000</td></tr>
                <tr><td>Maryland (5.75%)</td><td className="num">~$8,000</td><td className="num">~$23,000</td><td className="num">~$53,000</td></tr>
                <tr><td>Illinois (4.95%)</td><td className="num">~$7,000</td><td className="num">~$22,000</td><td className="num">~$45,000</td></tr>
                <tr><td>Virginia (5.75%)</td><td className="num">~$8,000</td><td className="num">~$23,000</td><td className="num">~$54,000</td></tr>
                <tr><td>Georgia (5.75%)</td><td className="num">~$8,000</td><td className="num">~$23,000</td><td className="num">~$53,000</td></tr>
                <tr><td>Florida (0%)</td><td className="num">$0</td><td className="num">$0</td><td className="num">$0</td></tr>
                <tr><td>Tennessee (0% wages)</td><td className="num">$0</td><td className="num">$0</td><td className="num">$0</td></tr>
              </tbody>
            </table>
          </div>

          <p>These are approximate estimates of state-tax savings only; do not include local taxes, sales tax differences, or property tax differences. For comprehensive household tax planning, consult a CPA.</p>

          <h2>The combined effect with the UT residency pathway</h2>

          <div className="callout">
            <h4>Total annual savings for a California family moving to Austin for UT</h4>
            <p className="mb-0">A California family with $500K AGI moving to Austin for their student&apos;s UT enrollment sees: <strong>~$48,000/year</strong> in California state tax savings + <strong>~{fmtUSD(TUITION.annualSavings)}/year</strong> in UT tuition savings (after year 1 reclassification) = <strong>~$81,000/year</strong> in combined savings. Over 4 years: ~$280,000-$320,000. The savings substantially exceed the cost of acquiring Texas property and the move logistics.</p>
          </div>

          <h2>Texas tax picture: what you pay vs what you don&apos;t</h2>

          <h3>What Texas does NOT tax</h3>
          <ul>
            <li><strong>Personal income (wages, salary, self-employment).</strong> Zero state tax.</li>
            <li><strong>Capital gains.</strong> Zero state tax on gains from stocks, real estate, business sales.</li>
            <li><strong>Dividends and interest.</strong> Zero state tax.</li>
            <li><strong>Retirement income (401k, IRA, Social Security, pensions).</strong> Zero state tax.</li>
            <li><strong>Estate/inheritance.</strong> Zero state-level estate or inheritance tax.</li>
            <li><strong>Personal property (cars, boats).</strong> Zero state-level personal property tax (some local taxes may apply).</li>
          </ul>

          <h3>What Texas does tax</h3>
          <ul>
            <li><strong>Property (real estate):</strong> approximately 1.9% of assessed value annually (higher than national average ~1.1%). Homestead exemption available for primary residence (~$100K of taxable value).</li>
            <li><strong>Sales tax:</strong> 6.25% state + up to 2% local = up to 8.25% combined.</li>
            <li><strong>Business franchise (margins) tax:</strong> for businesses with $1.18M+ revenue, modest rates.</li>
            <li><strong>Severance taxes:</strong> on oil and gas production (paid by producers, not consumers).</li>
            <li><strong>Tobacco, alcohol, motor fuel:</strong> standard excise taxes.</li>
          </ul>

          <h2>When the no-income-tax move makes sense</h2>
          <ul>
            <li><strong>High-income families.</strong> The higher the income, the larger the annual savings. Families with $500K+ AGI typically save 4-6x more than the additional Texas property tax burden.</li>
            <li><strong>High investment income families.</strong> Capital gains, dividend income, and other investment income face no state tax in Texas. For families realizing substantial capital gains during a move (selling a CA home with $500K+ of gains), the timing of move + sale can be optimized for tax efficiency.</li>
            <li><strong>Business owners and self-employed.</strong> Self-employment income, business pass-through income (S-corp, partnership, LLC), and capital gains from business sales benefit from the move.</li>
            <li><strong>Retirees relocating with a college-aged child.</strong> Retirement income plus the college-tuition savings combine for substantial advantage.</li>
          </ul>

          <h2>When the no-income-tax move makes less sense</h2>
          <ul>
            <li><strong>Lower-income families.</strong> Most lower-income families already pay little state income tax. The Texas no-income-tax advantage is small while the higher Texas property tax (if buying a home) creates ongoing carrying cost.</li>
            <li><strong>Renters in low-tax states.</strong> A family renting in California is paying property tax indirectly via rent. The savings calculation is complex.</li>
            <li><strong>Families who would face higher Texas property tax than home-state combined income+property.</strong> Rare but possible for property-heavy / income-light households.</li>
          </ul>

          <h2>How to actually capture the no-income-tax benefit</h2>
          <ol>
            <li><strong>Establish Texas as your primary residence.</strong> Driver&apos;s license, vehicle registration, voter registration, federal tax return with Texas address.</li>
            <li><strong>Exit your prior state.</strong> Cancel prior driver&apos;s license, voter registration, file part-year return for transition year.</li>
            <li><strong>Avoid contradictory ties to your prior state.</strong> Maintain only investment property (clearly second-home or rental) in the prior state.</li>
            <li><strong>Move time-sensitive income realization to align with the move.</strong> A planned capital gain (selling appreciated stock, selling a business) realized after the move is taxed at the Texas zero rate; realized before the move, taxed at the prior state\'s rate.</li>
            <li><strong>Consult a CPA familiar with multi-state moves.</strong> Especially important for California, New York, Oregon, and other high-tax aggressive-audit states.</li>
            <li><strong>Document the move thoroughly.</strong> Moving company records, utility shut-offs, new utility activations, mortgage closing, lease termination.</li>
          </ol>

          <h2>The high-tax states audit risk</h2>
          <p>California Franchise Tax Board, New York Department of Taxation, and Oregon Department of Revenue have all been aggressive about pursuing former residents claimed to have moved. Common audit triggers:</p>
          <ul>
            <li>Continued ownership of a primary residence in the high-tax state</li>
            <li>Maintaining substantive ties: voter registration, driver&apos;s license, gym memberships, doctor relationships, country club memberships</li>
            <li>Spending significant time (over 183 days) in the prior state in any tax year</li>
            <li>Inconsistent paperwork: filed Texas return but maintained California utility bills in own name</li>
          </ul>
          <p>For high earners exiting these states, work with a CPA experienced in residency audits. The audit risk is real but manageable with clean documentation.</p>

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
              <li><Link href="/moving-to-austin-from-out-of-state">Moving to Austin from out of state</Link>: complete relocation guide</li>
              <li><Link href="/how-to-establish-texas-residency">How to establish Texas residency</Link>: step-by-step</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the legal framework</li>
              <li><Link href="/is-ut-austin-worth-it-out-of-state">Is UT Austin worth it</Link>: combined cost analysis</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-no-income-tax" />
    </>
  );
}
