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

const TITLE = 'UT Austin Out-of-State Tuition 2025-26 (Full Cost Breakdown + How to Reduce It)';
const DESCRIPTION = `UT Austin out-of-state tuition is approximately ${fmtUSD(TUITION.outOfStatePerYear)}/year for 2025-26 (base undergraduate, 15 hours). Full breakdown by college, fees, projected increases, and how out-of-state families legally qualify for in-state rates through Texas residency.`;
const PATH = '/ut-austin-out-of-state-tuition';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'How much is out-of-state tuition at UT Austin?', a: `Approximately ${fmtUSD(TUITION.outOfStatePerYear)} per year for the 2025-26 academic year in the base undergraduate program at 15 credit hours, including tuition and required fees. Engineering, McCombs Business, and Computer Science majors run higher because of college-specific differential tuition. UT One Stop is the authoritative source.` },
  { q: 'Why is UT Austin out-of-state tuition so high?', a: `Out-of-state tuition at all Texas public universities is set significantly higher than in-state because Texas taxpayers subsidize residents through statutory tuition rates. The non-resident rate at UT Austin is roughly 3.8 times the resident rate (${fmtUSD(TUITION.outOfStatePerYear)} vs ${fmtUSD(TUITION.inStatePerYear)}). The differential funds in-state seats and is consistent across the UT System.` },
  { q: 'Will UT Austin out-of-state tuition increase next year?', a: `UT publishes annual tuition figures in spring of the prior academic year. The projected 2026-27 out-of-state figure is approximately ${fmtUSD(TUITION.outOfStateNextYear)} (vs $44,908 in 2025-26), reflecting continued ~4-5% annual increases. The in-state side is frozen by the Texas Legislature through 2026-27.` },
  { q: 'Can out-of-state students qualify for UT Austin in-state tuition?', a: `Yes, through the Texas residency pathway codified in Texas Education Code §54.052 and the THECB residency rules. The most common route for out-of-state families is the property pathway: acquire Texas real property, the student lives at it, the family maintains 12 continuous months of Texas domicile with supporting indicia (driver's license, vehicle registration, voter registration, federal tax return with Texas address). After 12 months the petition for reclassification is filed through UT's MyStatus portal. Successful reclassification typically begins the second year and saves roughly ${fmtUSD(TUITION.annualSavings)}/year for the remaining time at UT.` },
  { q: 'How much does UT Austin out-of-state tuition cost over four years?', a: `Approximately ${fmtUSD(TUITION.outOfStatePerYear * 4)} over four years if the rate stays flat (it does not; it rises about 4% a year). Adjusted for a typical 4% annual increase, the four-year total runs closer to ${fmtUSD(Math.round(TUITION.outOfStatePerYear * 4.25))}. This figure excludes housing, books, and personal expenses, which add another ~$70K-$80K over four years.` },
  { q: 'Is UT Austin out-of-state tuition worth it?', a: `It depends heavily on the major, the family\'s ability to capture the residency-pathway savings, and the alternative schools the student is considering. For students admitted to McCombs Business, Cockrell Engineering, or Computer Science with no comparable in-state alternative, paying out-of-state UT for one year and converting to in-state via the property pathway can produce four-year tuition costs competitive with mid-tier private schools after aid. For students whose home-state flagship offers a comparable program at $7K-$15K/year in-state, the math is harder.` },
  { q: 'Does out-of-state tuition include housing and meal plans?', a: 'No. UT publishes tuition and required fees separately from housing, meal plans, books, and personal expenses. The published $44,908 figure is just the academic charges. Adding on-campus housing (~$13,000-$17,000) plus food, books, and personal expenses brings the total annual cost of attendance to approximately $80,000-$90,000 for an out-of-state student living on campus.' },
];

export default function OOSPage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'UT Austin Out-of-State Tuition', path: PATH },
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
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Out-of-State Tuition: <span className="text-burnt">{fmtUSD(TUITION.outOfStatePerYear)}/year</span></h1>}
        lede={`Full cost breakdown for non-resident students, college-specific differentials, what fees are included, projected 2026-27 figures, and the legal pathway out-of-state families use to pay the resident rate of ${fmtUSD(TUITION.inStatePerYear)} instead.`}
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The headline number">
            UT Austin out-of-state tuition and required fees for the 2025-26 academic year are approximately <strong>{fmtUSD(TUITION.outOfStatePerYear)}/year</strong> for a full-time undergraduate (15 credit hours) in the base program. Engineering, McCombs Business, and Computer Science cost more (roughly ${fmtUSD(51800)}-${fmtUSD(53500)}/year). Texas residents pay just <strong>{fmtUSD(TUITION.inStatePerYear)}/year</strong>, a difference of about <strong>{fmtUSD(TUITION.annualSavings)}/year</strong>. Out-of-state families can legally qualify for the resident rate after 12 months of Texas domicile under <Link href="/texas-residency-rules">Texas Education Code §54.052</Link>.
          </QuickAnswer>

          <AuthorBox blurb="Has personally walked dozens of out-of-state UT Austin families through the residency pathway. Knows where the public tuition figures get misleading and which costs UT does not publish on the main tuition page." />

          <h2 className="mt-0">The full 2025-26 out-of-state cost breakdown</h2>
          <p>UT Austin publishes tuition figures at the college level because differential tuition varies by program. The figures below are for full-time undergraduates carrying 15 credit hours per semester, the standard four-year-graduation pace. Source: <a href={TUITION.source.url} target="_blank" rel="nofollow noopener">UT Austin One Stop</a>.</p>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>College / Track</th>
                  <th>Out-of-State (per year)</th>
                  <th>In-State (per year)</th>
                  <th>Annual Difference</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(TUITION.colleges).map(([k, v]) => (
                  <tr key={k}>
                    <td>{v.label}</td>
                    <td className="num">{fmtUSD(v.out)}</td>
                    <td className="num">{fmtUSD(v.in)}</td>
                    <td className="num text-burnt">{fmtUSD(v.out - v.in)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>The base undergraduate figure at {fmtUSD(TUITION.outOfStatePerYear)}/year applies to Liberal Arts, General Studies, and several other majors. Cockrell School of Engineering, McCombs School of Business, and Computer Science apply per-college differential tuition that adds roughly $5,000-$9,000/year on top of the base. Importantly, the differential tuition is the same whether the student is a Texas resident or not, which means the savings from establishing residency are the same in absolute dollars across all colleges (about {fmtUSD(TUITION.annualSavings)}/year).</p>

          <div className="callout">
            <h4>What is and is not included</h4>
            <p className="mb-0">These figures cover statutory tuition, designated tuition, and required fees (Information Technology, Library, Medical Services, Recreational Sports, Student Services, Transportation, Union). They do NOT include housing, meal plans, books and supplies (~$1,200/year), personal expenses, transportation, health insurance, orientation fees, or any college-specific lab fees. Total cost of attendance for an out-of-state student living on campus runs approximately $80,000-$90,000 per year. See <Link href="/ut-austin-cost-of-attendance">/ut-austin-cost-of-attendance</Link> for the full picture.</p>
          </div>

          <h2>Where the $44,908 figure comes from</h2>
          <p>UT Austin's published out-of-state tuition breaks down approximately as follows for the base undergraduate program:</p>
          <ul>
            <li><strong>Non-resident statutory tuition:</strong> ~$32,500/year (the residency-sensitive portion, set by the UT Board of Regents within statutory limits)</li>
            <li><strong>Designated tuition:</strong> ~$8,500/year (same for residents and non-residents within a given college)</li>
            <li><strong>Required fees:</strong> ~$3,900/year (Information Technology, Library, Medical Services, Recreational Sports, Student Services, Transportation, Union, and a small handful of others, generally the same regardless of residency)</li>
          </ul>
          <p>The statutory tuition portion is what changes when a student is reclassified as a Texas resident. The other two categories remain the same. That is why the annual savings from establishing residency is approximately {fmtUSD(TUITION.annualSavings)} regardless of which college the student is in.</p>

          <h2>Four-year out-of-state tuition projection</h2>
          <p>Out-of-state tuition at UT has historically risen about 4% per year compounded. The Texas Legislature froze in-state tuition through 2026-27 but the non-resident side is not subject to that freeze. Projecting forward at the long-run average:</p>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Academic Year</th>
                  <th>Out-of-State (estimated)</th>
                  <th>In-State (frozen through 26-27)</th>
                  <th>Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>2025-26 (current)</td><td className="num">{fmtUSD(TUITION.outOfStatePerYear)}</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num text-burnt">{fmtUSD(TUITION.annualSavings)}</td></tr>
                <tr><td>2026-27 (projected)</td><td className="num">{fmtUSD(TUITION.outOfStateNextYear)}</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num text-burnt">{fmtUSD(TUITION.outOfStateNextYear - TUITION.inStatePerYear)}</td></tr>
                <tr><td>2027-28 (estimated, +4%)</td><td className="num">{fmtUSD(Math.round(TUITION.outOfStateNextYear * 1.04))}</td><td className="num">~{fmtUSD(Math.round(TUITION.inStatePerYear * 1.04))}</td><td className="num text-burnt">{fmtUSD(Math.round(TUITION.outOfStateNextYear * 1.04) - Math.round(TUITION.inStatePerYear * 1.04))}</td></tr>
                <tr><td>2028-29 (estimated, +4%)</td><td className="num">{fmtUSD(Math.round(TUITION.outOfStateNextYear * 1.0816))}</td><td className="num">~{fmtUSD(Math.round(TUITION.inStatePerYear * 1.0816))}</td><td className="num text-burnt">{fmtUSD(Math.round(TUITION.outOfStateNextYear * 1.0816) - Math.round(TUITION.inStatePerYear * 1.0816))}</td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>Four-year total</strong></td><td className="num"><strong>~{fmtUSD(TUITION.outOfStatePerYear + TUITION.outOfStateNextYear + Math.round(TUITION.outOfStateNextYear * 1.04) + Math.round(TUITION.outOfStateNextYear * 1.0816))}</strong></td><td className="num"><strong>~{fmtUSD(TUITION.inStatePerYear * 2 + Math.round(TUITION.inStatePerYear * 1.04) + Math.round(TUITION.inStatePerYear * 1.0816))}</strong></td><td className="num text-burnt"><strong>~{fmtUSD(132880)}</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>Note that the in-state side will lose the legislative freeze after 2026-27 and is projected to rise alongside out-of-state at that point. The four-year total savings of approximately ${fmtUSD(132880)} assumes residency from year 1; the more typical scenario where residency is achieved in year 2 saves about <strong>{fmtUSD(TUITION.threeYearSavings)}</strong>. See the <Link href="/tuition-calculator">tuition calculator</Link> to model your specific scenario.</p>

          <h2>How out-of-state families legally qualify for the in-state rate</h2>
          <p>Texas Education Code §54.052(a)(3) classifies a student as a Texas resident for tuition purposes if the student or the parent who claims the student as a federal tax dependent "resides in this state and maintained a domicile in this state continuously for the year preceding the census date" of the academic semester. The Texas Higher Education Coordinating Board (THECB) implements this through residency rules in Title 19 of the Texas Administrative Code, Part 1, Chapter 21.</p>

          <p>For an out-of-state family, the practical pathway is:</p>
          <ol>
            <li><strong>Acquire real property in Texas.</strong> Most often a condo or small house near campus that the student occupies. The family holds title in their personal name (the simpler Rule #3 pathway) or in a Texas LLC running an actual rental business (the Rule #4 pathway).</li>
            <li><strong>Establish supporting indicia of Texas domicile.</strong> Texas driver's license or ID, Texas vehicle registration with a Texas inspection, Texas voter registration, and a federal tax return showing the Texas address as the residence of record.</li>
            <li><strong>Maintain 12 continuous months of that documentary record.</strong> The clock starts on the day all required indicia are simultaneously in place. The earliest census date that is 365 days after the clock-start is the earliest term for which the student can claim in-state status.</li>
            <li><strong>File the residency petition through MyStatus.</strong> UT's residency office reviews petitions through the MyStatus portal and decides in 2-4 weeks. Approved petitions reclassify the student to resident status for the petitioned term and all subsequent terms.</li>
          </ol>

          <p>The single largest cause of denial is a federal tax return for the relevant year filed with the prior state's address. Other common disqualifiers: a vehicle still registered in the prior state, an out-of-state homestead exemption claimed during the 12-month window, or voting in another state during the clock. <Link href="/texas-residency-rules">The full rules and the failure modes are documented here</Link>.</p>

          <div className="callout callout-warn">
            <h4>Timing is the constraint, not the rules</h4>
            <p className="mb-0">If your student has been admitted to UT Austin for Fall enrollment and you do not yet own Texas property, the 12-month clock cannot finish before the first Fall census date. The typical pathway is: pay out-of-state for year 1, establish residency during year 1, petition over the summer between years 1 and 2, and pay the resident rate from Fall of year 2 forward. To make the timing work for year-1 in-state status, the family must already own Texas property and have the supporting indicia in place a year before enrollment, which is uncommon.</p>
          </div>

          <h2>How UT Austin out-of-state tuition compares to peer schools</h2>
          <p>Among public research universities, UT Austin's out-of-state tuition at ${fmtUSD(TUITION.outOfStatePerYear)} is in the upper tier but not the highest. For rough context (2025-26 published figures, base undergraduate):</p>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead><tr><th>School</th><th>Out-of-State Tuition + Fees</th><th>In-State Tuition + Fees</th></tr></thead>
              <tbody>
                <tr><td>UT Austin</td><td className="num">{fmtUSD(TUITION.outOfStatePerYear)}</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td></tr>
                <tr><td>UC Berkeley</td><td className="num">~$48,500</td><td className="num">~$14,900</td></tr>
                <tr><td>University of Michigan</td><td className="num">~$57,400</td><td className="num">~$17,700</td></tr>
                <tr><td>University of Virginia</td><td className="num">~$60,800</td><td className="num">~$22,300</td></tr>
                <tr><td>UNC Chapel Hill</td><td className="num">~$37,200</td><td className="num">~$9,000</td></tr>
                <tr><td>Texas A&M</td><td className="num">~$40,200</td><td className="num">~$13,600</td></tr>
                <tr><td>University of Florida</td><td className="num">~$28,700</td><td className="num">~$6,400</td></tr>
              </tbody>
            </table>
          </div>

          <p>UT Austin sits slightly above UC Berkeley and below Michigan/Virginia for non-residents. Among Texas publics, UT is the most expensive for non-residents but the residency pathway puts it at parity with the cheapest in-state options.</p>

          <h2>Common misconceptions about UT Austin out-of-state tuition</h2>

          <h3>"There's a non-resident tuition waiver"</h3>
          <p>UT does not offer a general waiver of non-resident tuition for academic merit. A few specific awards do include in-state tuition as part of the package: the Forty Acres Scholarship (Texas Exes' flagship full-tuition award), the Terry Scholarship for select majors, and certain athletic scholarships. These are highly competitive. Departmental merit scholarships generally do not waive non-resident tuition.</p>

          <h3>"The non-resident tuition is just the sticker price; everyone pays less after aid"</h3>
          <p>Need-based aid at UT Austin (federal Pell, state TPEG, institutional grants like the Texas Advance Commitment) is largely available to Texas residents only at the institutional level. Federal Pell and federal loans apply equally to non-residents. For out-of-state families with EFC above ~$30,000, the net out-of-state cost is essentially the sticker price. Compare this to private schools that often discount sticker by 30-50%.</p>

          <h3>"I can just lie about residency"</h3>
          <p>UT's residency office reviews documentation, not intent statements. Filing false residency claims is a violation of UT's honor code, potentially a criminal offense under Texas Penal Code §32.51 (fraudulent use of identifying information), and disqualifies any later legitimate residency claim. The legal property pathway is straightforward; the fraud pathway is not.</p>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Next steps</h2>
            <p>If your student is admitted as a non-resident and the math suggests the residency pathway is worth pursuing, the next reads are:</p>
            <ul>
              <li><Link href="/texas-residency-rules">The full Texas residency rules and the THECB framework</Link></li>
              <li><Link href="/tuition-calculator">The tuition calculator</Link> to model your specific scenario</li>
              <li><Link href="/rule-3-vs-rule-4">Rule #3 vs Rule #4</Link> to choose the property pathway that fits your family</li>
              <li><Link href="/12-month-timeline">The 12-month operational timeline</Link></li>
              <li><Link href="/residency-checklist">The document checklist</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-out-of-state-tuition" />
    </>
  );
}
