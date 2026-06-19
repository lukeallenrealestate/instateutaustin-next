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

const TITLE = 'UT Austin In-State Tuition 2025-26 (Cost, Eligibility, How to Qualify)';
const DESCRIPTION = `UT Austin in-state tuition is approximately ${fmtUSD(TUITION.inStatePerYear)}/year for 2025-26, frozen by the Texas Legislature through 2026-27. Who qualifies, full cost breakdown by college, and how out-of-state students legally qualify.`;
const PATH = '/ut-austin-in-state-tuition';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'How much is in-state tuition at UT Austin?', a: `Approximately ${fmtUSD(TUITION.inStatePerYear)} per year for the 2025-26 academic year in the base undergraduate program at 15 credit hours, including tuition and required fees. The Texas Legislature froze this figure through 2026-27, so it will be approximately the same for the 2026-27 year.` },
  { q: 'Who qualifies for UT Austin in-state tuition?', a: 'Any student who satisfies Texas Education Code §54.052 and the THECB residency rules. The most common qualifying basis is 12 continuous months of Texas domicile prior to the term\'s census date, established by either the student personally (independent branch) or the parent who claims the student as a federal tax dependent (dependent branch). Active-duty military stationed in Texas and their dependents qualify automatically.' },
  { q: 'Is UT Austin in-state tuition frozen?', a: 'Yes. The Texas Legislature froze in-state tuition and required fees at all Texas public universities through the 2026-27 academic year. This means UT in-state tuition will remain at approximately $11,688/year for at least two more years. The freeze does not apply to non-resident tuition, which continues to rise about 4% per year.' },
  { q: 'How can I get UT Austin in-state tuition if I am from out of state?', a: `Through the Texas residency pathway. Acquire Texas real property, the student lives at it, establish supporting indicia of Texas domicile (driver's license, vehicle registration, voter registration, federal tax return with a Texas address), and maintain that documentary record for 12 continuous months before the target term's census date. Then file a residency petition through UT's MyStatus portal. Successful petitions reclassify the student to resident status, saving approximately ${fmtUSD(TUITION.annualSavings)}/year vs the non-resident rate.` },
  { q: 'How long does it take to qualify for UT Austin in-state tuition?', a: 'Twelve continuous months of Texas domicile prior to the term\'s census date. For Fall 2027 in-state status (census date approximately September 8, 2027), the 12-month clock must start no later than September 8, 2026. For most families that means closing on Texas property in summer 2026, establishing the supporting indicia by September 2026, and filing the petition in July 2027.' },
  { q: 'Will my child qualify for UT Austin in-state tuition just by living in Texas during college?', a: 'No. Attending UT as a non-resident student does not by itself establish residency. THECB rules expressly say that presence in Texas for educational purposes does not count toward the 12-month clock. The clock must be backed by independent indicia of intent to make Texas the permanent home: real property, employment, business activity, or similar substantive ties.' },
  { q: 'What is the cheapest way to qualify for UT in-state tuition?', a: 'For most families the cheapest legal pathway is property ownership through Rule #3: a parent (or independent student) acquires a residential property in Texas, the student lives there, and the family maintains the documentary record. The carrying costs of a Texas condo at the lower end ($325K-$425K) are partially offset by the residency-driven tuition savings plus typical Austin appreciation. See the Rule #3 vs Rule #4 page for the side-by-side math.' },
  { q: 'Does the Texas Legislature\'s tuition freeze cover all UT costs?', a: 'No. The freeze applies to tuition and required fees on the resident-tuition line. It does not cap housing, meal plans, books, lab fees, college-specific differential tuition increases for designated programs, or any voluntary fees. Total cost of attendance for a Texas resident living on campus is approximately $30,000-$35,000/year despite the in-state tuition freeze.' },
];

export default function InStatePage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'UT Austin In-State Tuition', path: PATH },
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
        eyebrow="UT Austin tuition · 2025-26"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin In-State Tuition: <span className="text-burnt">{fmtUSD(TUITION.inStatePerYear)}/year</span></h1>}
        lede="Frozen by the Texas Legislature through 2026-27. Who qualifies for the resident rate, the full cost breakdown by college, and how out-of-state students legally qualify through the 12-month domicile pathway."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The headline number">
            UT Austin in-state (resident) tuition and required fees for the 2025-26 academic year are approximately <strong>{fmtUSD(TUITION.inStatePerYear)}/year</strong> for a full-time undergraduate (15 credit hours) in the base program. The Texas Legislature froze this figure through 2026-27, so it will be approximately the same next year. Non-residents pay <strong>{fmtUSD(TUITION.outOfStatePerYear)}/year</strong>, a difference of about <strong>{fmtUSD(TUITION.annualSavings)}/year</strong>. Out-of-state families can qualify for the resident rate after 12 months of Texas domicile under <Link href="/texas-residency-rules">Texas Education Code §54.052</Link>.
          </QuickAnswer>

          <AuthorBox blurb="Has personally walked dozens of out-of-state UT Austin families through the residency pathway that converts the non-resident rate to the resident rate, saving about $33,220/year." />

          <h2 className="mt-0">The full 2025-26 in-state cost breakdown</h2>
          <p>UT publishes tuition figures at the college level because differential tuition varies by program. The figures below are full-time undergraduate (15 credit hours) and include all required fees. Source: <a href={TUITION.source.url} target="_blank" rel="nofollow noopener">UT Austin One Stop</a>.</p>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>College / Track</th>
                  <th>In-State (per year)</th>
                  <th>Out-of-State (per year)</th>
                  <th>Annual Savings</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(TUITION.colleges).map(([k, v]) => (
                  <tr key={k}>
                    <td>{v.label}</td>
                    <td className="num">{fmtUSD(v.in)}</td>
                    <td className="num">{fmtUSD(v.out)}</td>
                    <td className="num text-burnt">{fmtUSD(v.out - v.in)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>The base undergraduate figure at {fmtUSD(TUITION.inStatePerYear)}/year applies to Liberal Arts, General Studies, and several other majors. Engineering, McCombs Business, and Computer Science add per-college differential tuition of about $2,500-$3,700/year on top of the base. The differential applies equally to in-state and out-of-state students.</p>

          <h2>Who qualifies for in-state tuition at UT Austin</h2>
          <p>The Texas Higher Education Coordinating Board (THECB) maintains the official residency rules for tuition purposes at all Texas public universities. UT Austin's residency office applies these rules. Three main routes qualify a student:</p>

          <h3>Route 1: Texas-resident parent claiming the student as a tax dependent</h3>
          <p>For most traditional-age undergraduate students, the dependent branch is operative. If a parent has maintained Texas domicile for the 12 months preceding the term's census date and claims the student as a federal tax dependent in the relevant tax year, the student qualifies as a Texas resident for tuition purposes. The student's own presence in Texas before enrolling is not required so long as the parent's domicile is established.</p>

          <h3>Route 2: Independent student with 12 months of Texas domicile</h3>
          <p>A student who is at least 18, is not claimed as a federal tax dependent by a parent in the current or prior tax year, and provides the majority of his or her own support qualifies on the basis of personal Texas domicile rather than parental. This route is more common for graduate students, transfer students, and students who took a gap year and worked in Texas.</p>

          <h3>Route 3: Active-duty military or qualified dependent</h3>
          <p>Texas Education Code §54.052 contains specific provisions for military families. An active-duty service member assigned to a Texas base, and that member's spouse and dependents, qualify for in-state classification regardless of the 12-month clock. The relevant document is the service member's Leave and Earnings Statement (LES) showing the Texas duty station.</p>

          <p>Other less common routes: competitive scholarships of $1,000 or more (interpreted narrowly by UT), employment by a Texas-based employer for a defined period before enrolling, or qualification under specific veterans' tuition benefit programs. See <Link href="/texas-residency-rules">the full residency rules page</Link> for edge cases.</p>

          <div className="callout">
            <h4>The single most important rule for out-of-state families</h4>
            <p className="mb-0">Texas residency for tuition purposes is established by maintaining a Texas domicile (not just visiting) for the 12 months preceding the term's census date. The 12-month clock cannot run while a student is enrolled at UT solely as a non-resident attending school. The clock requires independent indicia of intent to make Texas the permanent home: real property ownership, vehicle and voter registration, a federal tax return reflecting Texas residency, and so on. Acquire those before enrolling, or pay non-resident tuition for the first year and convert to resident status starting in year 2.</p>
          </div>

          <h2>How out-of-state students qualify for UT in-state tuition</h2>
          <p>The pathway for an out-of-state family looks like this:</p>

          <ol>
            <li><strong>Decide on the property pathway.</strong> Rule #3 (student-occupied property held in personal name) or Rule #4 (rental property held in a Texas LLC). Most families use Rule #3 because the property doubles as student housing. See <Link href="/rule-3-vs-rule-4">the comparison page</Link>.</li>
            <li><strong>Acquire a Texas property at least 12 months before the target term's census date.</strong> For Fall 2027 in-state status (census ~Sept 8, 2027), close on the property by mid-August 2026. Allow 30-60 days for utilities, vehicle registration, license, and voter registration to all be in place.</li>
            <li><strong>Establish the supporting indicia.</strong> Texas driver's license or ID, Texas vehicle registration, Texas voter registration, and a federal tax return showing the Texas address as the residence of record. All of these together form the documentary record THECB requires.</li>
            <li><strong>Maintain the record for 12 continuous months.</strong> Pay utilities monthly. Renew vehicle registration on time. Do not vote in another state. Do not file a tax return with the prior state's address during the clock.</li>
            <li><strong>File the petition through MyStatus.</strong> Approximately 60 days before the target term's census date, submit the residency petition with all supporting documentation. UT's residency office reviews and typically decides within 2-4 weeks.</li>
            <li><strong>Petition approved → tuition recalculated.</strong> A resident classification applies to the petitioned term and all subsequent terms as long as residency is maintained.</li>
          </ol>

          <h2>Why is UT in-state tuition so low?</h2>
          <p>At approximately $11,688/year, UT Austin in-state tuition is among the most affordable flagship public universities in the United States. A few reasons:</p>

          <ul>
            <li><strong>Constitutional dedication.</strong> The Permanent University Fund (PUF), endowed by the Texas Constitution with mineral royalties from West Texas lands, generates billions of dollars annually for the UT and Texas A&M systems. This reduces the per-student cost UT must cover from tuition.</li>
            <li><strong>Texas Legislature freeze.</strong> The current legislative session froze in-state tuition at all Texas public universities through 2026-27, holding the line at 2024-25 levels for two more years.</li>
            <li><strong>Designated tuition caps.</strong> The Board of Regents approves designated tuition increases within statutory limits, and the in-state segment is politically sensitive in a state where the legislature controls the budget.</li>
            <li><strong>Population dilution.</strong> Texas has a large in-state applicant pool relative to per-student state support, which spreads the funding burden.</li>
          </ul>

          <p>The result: UT in-state at $11,688/year compares favorably to UC Berkeley ($14,900), University of Michigan ($17,700), and the University of Virginia ($22,300) on the resident-tuition line.</p>

          <h2>Cost of attendance for in-state students</h2>
          <p>Tuition is only one component of the total cost of attendance. For a Texas-resident undergraduate living on campus at UT Austin, the full cost picture for 2025-26 looks approximately like:</p>

          <ul>
            <li>Tuition and required fees: ~$11,688</li>
            <li>On-campus housing (Jester, Kinsolving, etc.): ~$11,000-$15,000</li>
            <li>Meal plan: ~$5,000-$6,000</li>
            <li>Books and supplies: ~$1,200</li>
            <li>Personal expenses, transportation: ~$3,000-$4,000</li>
          </ul>

          <p>Total: approximately $32,000-$38,000 per year for an in-state student on campus. Off-campus living can be cheaper or more expensive depending on the housing choice. For an out-of-state student who establishes residency starting in year 2, the four-year tuition total drops from ~${fmtUSD(TUITION.outOfStatePerYear * 4)} to about ${fmtUSD(TUITION.outOfStatePerYear + TUITION.inStatePerYear * 3)}, saving roughly <strong>{fmtUSD(TUITION.threeYearSavings)}</strong>.</p>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>If you are out-of-state and want the in-state rate</h2>
            <p>Three reads, in order:</p>
            <ul>
              <li><Link href="/texas-residency-rules">The full Texas residency rules</Link> — the legal framework</li>
              <li><Link href="/12-month-timeline">The 12-month timeline</Link> — the operational plan</li>
              <li><Link href="/residency-checklist">The document checklist</Link> — interactive, save progress</li>
            </ul>
            <p>Run the savings number for your specific scenario in the <Link href="/tuition-calculator">tuition calculator</Link>.</p>
          </div>

        </div>
      </section>

      <ContactSection source="instateutaustin-in-state-tuition" />
    </>
  );
}
