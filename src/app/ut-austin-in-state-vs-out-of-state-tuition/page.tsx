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

const TITLE = 'UT Austin In-State vs Out-of-State Tuition: The Side-by-Side';
const DESCRIPTION = `UT Austin in-state vs out-of-state tuition: ${fmtUSD(TUITION.inStatePerYear)} vs ${fmtUSD(TUITION.outOfStatePerYear)} per year. ${fmtUSD(TUITION.annualSavings)}/year difference. Full breakdown by college, four-year projections, and how out-of-state families legally qualify for the in-state rate.`;
const PATH = '/ut-austin-in-state-vs-out-of-state-tuition';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'How much is the difference between UT Austin in-state and out-of-state tuition?', a: `Approximately ${fmtUSD(TUITION.annualSavings)} per year for 2025-26 in the base undergraduate program at 15 credit hours. In-state runs ${fmtUSD(TUITION.inStatePerYear)}/year; out-of-state runs ${fmtUSD(TUITION.outOfStatePerYear)}/year. Over four years that is a difference of about ${fmtUSD(TUITION.annualSavings * 4)} at flat rates, or closer to ${fmtUSD(140000)} adjusted for typical 4% annual non-resident tuition increases.` },
  { q: 'Why is out-of-state tuition so much higher than in-state at UT Austin?', a: 'Out-of-state tuition is set higher because Texas taxpayers subsidize the in-state rate through the state\'s general fund and the Permanent University Fund (PUF). Non-residents do not contribute to either, so they pay close to the un-subsidized cost of instruction. The ratio (out-of-state roughly 3.8x in-state) is consistent with peer flagship public universities, though the absolute gap is widened by Texas\'s especially low in-state rate.' },
  { q: 'Can I switch from out-of-state to in-state at UT Austin?', a: 'Yes, through the Texas residency pathway under Texas Education Code §54.052. The family (or independent student) must maintain a Texas domicile for 12 continuous months before the term\'s census date, with supporting indicia (Texas driver\'s license, vehicle registration, voter registration, federal tax return with Texas address). Approved reclassification applies to the petitioned term and all subsequent terms. Typical timeline: pay out-of-state year 1, establish residency during year 1, petition over summer, pay in-state from year 2 forward.' },
  { q: 'Is the in-state vs out-of-state gap the same across all UT Austin colleges?', a: `Approximately yes. The residency reclassification affects only the statutory (residency-sensitive) portion of tuition, which is the same dollar amount across all undergraduate colleges (~${fmtUSD(TUITION.annualSavings)}/year). Differential tuition (the additional charge for Engineering, McCombs Business, Computer Science) is the same for residents and non-residents. So if you switch from non-resident to resident, you save the same ${fmtUSD(TUITION.annualSavings)}/year whether you are in Liberal Arts or Computer Science.` },
  { q: 'Will the in-state vs out-of-state gap shrink in the future?', a: 'Likely no, and probably widen. The Texas Legislature froze in-state tuition through 2026-27, but historically the legislature has allowed in-state to rise 2-4% annually after such freezes. Out-of-state rises about 4-5% annually with no freeze. The dollar gap has grown from approximately $25,000/year in 2015 to $33,220/year in 2025, and the trend continues.' },
  { q: 'Does the in-state vs out-of-state classification affect financial aid eligibility?', a: 'Yes, significantly. UT\'s flagship institutional need-based programs (Texas Advance Commitment and Texas Empowerment) are residents-only. Non-residents are eligible for federal aid (Pell Grant, federal loans) at the same levels as residents, but the institutional grant component is much smaller. This means the effective net price gap between in-state and out-of-state is often larger than the sticker tuition gap for need-eligible families.' },
];

export default function VsPage() {
  const fourYearDelta = TUITION.outOfStatePerYear * 4 - TUITION.inStatePerYear * 4;
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'In-State vs Out-of-State Tuition', path: PATH },
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
        eyebrow="UT Austin tuition · Side-by-side"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin <span className="text-burnt">In-State vs Out-of-State</span> Tuition</h1>}
        lede={`The complete comparison: ${fmtUSD(TUITION.inStatePerYear)}/year resident, ${fmtUSD(TUITION.outOfStatePerYear)}/year non-resident, ${fmtUSD(TUITION.annualSavings)}/year difference. Full breakdown by college, four-year projection, and the legal residency pathway.`}
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The bottom line">
            UT Austin in-state tuition is <strong>{fmtUSD(TUITION.inStatePerYear)}/year</strong> for 2025-26 (frozen by the Texas Legislature through 2026-27). Out-of-state tuition is <strong>{fmtUSD(TUITION.outOfStatePerYear)}/year</strong>. The annual difference is <strong>{fmtUSD(TUITION.annualSavings)}</strong>; the four-year difference is approximately <strong>{fmtUSD(fourYearDelta)}</strong>. Out-of-state families can legally qualify for the resident rate through the <Link href="/texas-residency-rules">Texas residency pathway</Link>, which most commonly involves acquiring Texas property and maintaining 12 months of Texas domicile.
          </QuickAnswer>

          <AuthorBox blurb="Has helped dozens of out-of-state UT families convert from the non-resident rate to the resident rate through the property pathway, capturing the ~$99,660 typical three-year savings." />

          <h2 className="mt-0">The side-by-side comparison</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Cost Component</th>
                  <th>In-State (Texas Resident)</th>
                  <th>Out-of-State (Non-Resident)</th>
                  <th>Annual Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Base tuition + required fees</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">{fmtUSD(TUITION.outOfStatePerYear)}</td><td className="num text-burnt">{fmtUSD(TUITION.annualSavings)}</td></tr>
                <tr><td>Cockrell Engineering</td><td className="num">{fmtUSD(TUITION.colleges.engineering.in)}</td><td className="num">{fmtUSD(TUITION.colleges.engineering.out)}</td><td className="num text-burnt">{fmtUSD(TUITION.colleges.engineering.out - TUITION.colleges.engineering.in)}</td></tr>
                <tr><td>McCombs Business</td><td className="num">{fmtUSD(TUITION.colleges.business.in)}</td><td className="num">{fmtUSD(TUITION.colleges.business.out)}</td><td className="num text-burnt">{fmtUSD(TUITION.colleges.business.out - TUITION.colleges.business.in)}</td></tr>
                <tr><td>Computer Science</td><td className="num">{fmtUSD(TUITION.colleges.cs.in)}</td><td className="num">{fmtUSD(TUITION.colleges.cs.out)}</td><td className="num text-burnt">{fmtUSD(TUITION.colleges.cs.out - TUITION.colleges.cs.in)}</td></tr>
                <tr><td>Natural Sciences</td><td className="num">{fmtUSD(TUITION.colleges.natural.in)}</td><td className="num">{fmtUSD(TUITION.colleges.natural.out)}</td><td className="num text-burnt">{fmtUSD(TUITION.colleges.natural.out - TUITION.colleges.natural.in)}</td></tr>
                <tr><td>Moody Communication</td><td className="num">{fmtUSD(TUITION.colleges.comm.in)}</td><td className="num">{fmtUSD(TUITION.colleges.comm.out)}</td><td className="num text-burnt">{fmtUSD(TUITION.colleges.comm.out - TUITION.colleges.comm.in)}</td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>Annual gap (any college)</strong></td><td colSpan={2}></td><td className="num text-burnt"><strong>~{fmtUSD(TUITION.annualSavings)}</strong></td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>Four-year gap (flat rates)</strong></td><td colSpan={2}></td><td className="num text-burnt"><strong>~{fmtUSD(fourYearDelta)}</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>Notice that the dollar gap is essentially constant across all colleges. UT charges differential tuition for Engineering, McCombs, and CS, but those differentials are <em>the same for residents and non-residents</em>. The residency reclassification affects only the statutory tuition portion, which is uniform across colleges.</p>

          <h2>Why the gap exists</h2>
          <p>Three reasons:</p>

          <ol>
            <li><strong>State subsidy.</strong> Texas taxpayers fund a portion of every Texas resident&apos;s cost of attendance through the state general fund. Non-residents do not contribute to this fund and so do not benefit from the subsidy.</li>
            <li><strong>Permanent University Fund (PUF).</strong> The Texas Constitution dedicated millions of acres of West Texas mineral rights to the UT and Texas A&M systems in 1876. The PUF generates billions of dollars annually that further reduces the per-student cost UT must cover from tuition. Again, this benefit applies to Texas residents.</li>
            <li><strong>Legislative freezes.</strong> The current Texas Legislature has frozen in-state tuition through 2026-27. Historically, in-state tuition rises modestly when not frozen (1-3% annually). Out-of-state tuition is not subject to any freeze and rises 4-5% per year.</li>
          </ol>

          <p>The combined effect is that UT in-state tuition (~$11,688/year) is among the most affordable flagship publics in the country, while UT out-of-state (~$44,908/year) is in the upper tier of non-resident tuition rates.</p>

          <h2>Four-year out-of-state vs in-state comparison</h2>
          <p>If your student is admitted as a non-resident and you do nothing, four-year tuition runs approximately $176,000-$190,000 (adjusted for typical 4% annual increases). If your family pursues the Texas residency pathway and gets reclassified starting year 2, four-year tuition drops to approximately $80,000-$95,000. The four-year savings: about <strong>{fmtUSD(TUITION.threeYearSavings)}</strong>.</p>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr><th>Scenario</th><th>Year 1</th><th>Year 2</th><th>Year 3</th><th>Year 4</th><th>4-Year Total</th></tr>
              </thead>
              <tbody>
                <tr><td>Texas resident all four years</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">~{fmtUSD(Math.round(TUITION.inStatePerYear * 1.04))}</td><td className="num">~{fmtUSD(Math.round(TUITION.inStatePerYear * 1.0816))}</td><td className="num"><strong>~$48,750</strong></td></tr>
                <tr><td>Non-resident all four years</td><td className="num">{fmtUSD(TUITION.outOfStatePerYear)}</td><td className="num">~{fmtUSD(TUITION.outOfStateNextYear)}</td><td className="num">~{fmtUSD(Math.round(TUITION.outOfStateNextYear * 1.04))}</td><td className="num">~{fmtUSD(Math.round(TUITION.outOfStateNextYear * 1.0816))}</td><td className="num"><strong>~$190,000</strong></td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>Reclassified to resident year 2</strong></td><td className="num">{fmtUSD(TUITION.outOfStatePerYear)}</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">~{fmtUSD(Math.round(TUITION.inStatePerYear * 1.04))}</td><td className="num">~{fmtUSD(Math.round(TUITION.inStatePerYear * 1.0816))}</td><td className="num text-burnt"><strong>~$82,400</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>The reclassification scenario saves approximately <strong>$107,600</strong> over the do-nothing non-resident scenario.</p>

          <h2>The legal way to switch from out-of-state to in-state</h2>
          <p>Out-of-state families can legally qualify for the Texas-resident tuition rate through the residency pathway. The framework is in Texas Education Code §54.052 and the THECB residency rules (Title 19 of the Texas Administrative Code, Chapter 21). For out-of-state families the pathway typically looks like:</p>

          <ol>
            <li>Acquire Texas real property where the student will live</li>
            <li>Establish Texas domicile indicia: Texas driver&apos;s license, vehicle registration, voter registration</li>
            <li>File a federal tax return showing the Texas address as the residence of record</li>
            <li>Maintain that documentary record for 12 continuous months before the target term&apos;s census date</li>
            <li>Submit the residency petition through UT MyStatus</li>
            <li>Receive resident classification, applied to the petitioned term and all subsequent terms</li>
          </ol>

          <p>Most families pay out-of-state for year 1 (because the 12-month clock cannot finish before the first term&apos;s census date) and convert to resident for year 2 forward. Some families with prior Texas connection or who plan ahead pay resident from year 1.</p>

          <div className="callout">
            <h4>The single most important rule</h4>
            <p className="mb-0">Time spent in Texas solely to attend UT does <strong>not</strong> count toward the 12-month residency clock. THECB rules are explicit: presence for educational purposes does not establish domicile. The clock requires substantive indicia of intent to make Texas a permanent home — real property, employment, business activity, or similar. The clock most commonly runs on the property pathway because property is the easiest to document and the hardest to challenge.</p>
          </div>

          <h2>Net price beyond tuition</h2>
          <p>The in-state vs out-of-state gap is just the tuition portion. The total cost-of-attendance gap is wider because:</p>

          <ul>
            <li><strong>Institutional aid:</strong> UT&apos;s flagship need-based programs (Texas Advance Commitment, Texas Empowerment) are residents-only. A need-eligible Texas resident gets free tuition; the same family as non-residents gets only federal aid.</li>
            <li><strong>Texas Higher Education Assistance Loans (HELP):</strong> Low-interest state loans for Texas residents only.</li>
            <li><strong>State scholarship programs:</strong> Various Texas-resident-only awards.</li>
          </ul>

          <p>For the lowest-income families, the difference between Texas-resident and non-resident net price can be as high as $70,000/year. For middle and upper-income families, the difference shrinks closer to the sticker tuition gap of $33,220/year because both classifications get federal aid at similar levels.</p>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Related reading</h2>
            <ul>
              <li><Link href="/ut-austin-out-of-state-tuition">UT Austin out-of-state tuition (full breakdown)</Link></li>
              <li><Link href="/ut-austin-in-state-tuition">UT Austin in-state tuition (eligibility + cost)</Link></li>
              <li><Link href="/how-to-get-in-state-tuition-ut-austin">How to get in-state tuition at UT Austin</Link></li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link></li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-in-vs-out" />
    </>
  );
}
