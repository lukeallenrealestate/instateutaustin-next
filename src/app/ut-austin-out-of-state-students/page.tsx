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

const TITLE = 'UT Austin Out-of-State Students: Complete Guide (Tuition, Admission, Residency)';
const DESCRIPTION = `Complete guide for out-of-state UT Austin students: tuition (${fmtUSD(TUITION.outOfStatePerYear)}), acceptance rate (~8-13%), the 10% non-resident cap, residency pathway that saves ${fmtUSD(TUITION.annualSavings)}/year, and what to know about being an OOS Longhorn.`;
const PATH = '/ut-austin-out-of-state-students';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'How many out-of-state students are at UT Austin?', a: 'Approximately 10% of UT Austin\'s undergraduate population is out-of-state students, roughly 4,200 OOS undergrads across all four years. UT caps non-resident undergraduate enrollment at approximately 10% of the entering class by Texas state policy. The remaining 90% are Texas residents (with the Top 10% Rule filling approximately 75% of in-state seats automatically).' },
  { q: 'How does UT Austin out-of-state tuition compare to other top public universities?', a: 'UT Austin out-of-state tuition is approximately $44,908/year, in the middle of the top public flagship range. Comparison: UC Berkeley ~$48,500, Michigan ~$57,400, Virginia ~$60,800, Wisconsin ~$41,600, Florida ~$28,700, Texas A&M ~$40,200. UT is materially cheaper than the top-tier coastal publics (Berkeley, Michigan, UVA) and comparable to mid-tier publics.' },
  { q: 'Is UT Austin hard to get into for out-of-state students?', a: 'Yes. UT Austin\'s non-resident acceptance rate is approximately 8-13%, materially lower than the 31% overall acceptance rate. Two factors: (1) the 10% non-resident enrollment cap limits non-resident seats; (2) the Texas Top 10% Rule consumes ~75% of in-state seats automatically, leaving a small holistic-review pool that non-residents compete in. The remaining seats are very competitive.' },
  { q: 'What is the UT Austin residency pathway?', a: 'The Texas residency reclassification pathway under Texas Education Code §54.052 allows non-resident students to qualify for Texas-resident tuition after establishing 12 months of qualifying Texas domicile. Standard documentary requirements: Texas driver\'s license, vehicle registration, voter registration, federal tax return with Texas address, and lease or property ownership at a Texas residential address. The savings: approximately $33,220/year for the remaining time at UT.' },
  { q: 'How do most out-of-state UT students pay for school?', a: 'Most out-of-state UT students fund tuition through: (1) family savings and 529 plans; (2) federal Pell Grant (income-qualifying), federal subsidized and unsubsidized loans, Parent PLUS loans; (3) institutional merit scholarships at UT (Forty Acres, college-specific merit, $2K-$15K typical); (4) outside scholarships (Coca-Cola, Gates, state-of-origin foundations); (5) the Texas residency pathway for years 2-4 (the largest single net-price reduction available to most OOS families).' },
  { q: 'What majors are most popular among UT out-of-state students?', a: 'Out-of-state UT students concentrate in: McCombs Business (~20% of OOS), Computer Science (~15%), Cockrell Engineering (~25%), College of Natural Sciences (~20%), Liberal Arts (~15%), other (~5%). Out-of-state students disproportionately apply to and attend the most selective UT colleges; the academic profile of admitted OOS students is materially stronger than the average UT admitted profile.' },
  { q: 'Where do UT Austin out-of-state students come from?', a: 'Top OOS feeder states for UT Austin: California, New York, Illinois, Florida, Georgia, New Jersey, Maryland, Virginia, Massachusetts, Connecticut, Washington, Colorado, Arizona, Tennessee, Michigan, North Carolina. Approximately 60% of OOS students come from these 16 states; the rest from the remaining 33 states plus territories and international.' },
  { q: 'Is UT Austin worth it for out-of-state students?', a: 'Depends on the major, the home state, and whether the family pursues the residency pathway. For high-ROI majors (CS, McCombs, Engineering) with the pathway, UT is among the strongest public university values. For lower-ROI majors at full sticker without the pathway, UT is harder to justify against in-state alternatives. See the detailed analysis: Is UT Austin worth it for out-of-state students.' },
];

export default function OutOfStateStudentsPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Out-of-State Students', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Out-of-state students"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Out-of-State Students</h1>}
        lede="The complete guide to UT Austin for out-of-state students: tuition, admission, the residency pathway, and what to know about being an OOS Longhorn."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The OOS picture">
            Approximately <strong>10%</strong> of UT Austin&apos;s undergraduate population is out-of-state (~4,200 students). Non-resident tuition is <strong>{fmtUSD(TUITION.outOfStatePerYear)}/year</strong>; in-state is <strong>{fmtUSD(TUITION.inStatePerYear)}/year</strong>. OOS acceptance rate is approximately <strong>8-13%</strong>, materially lower than the 31% overall rate due to Texas&apos;s 10% non-resident cap. The <Link href="/texas-residency-rules">Texas residency pathway</Link> saves approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> after 12 months of qualifying Texas domicile.
          </QuickAnswer>

          <AuthorBox blurb="Has personally walked dozens of out-of-state UT families through the full lifecycle: admission, the residency pathway, property acquisition, financial planning, and graduation." />

          <h2 className="mt-0">The out-of-state landscape at UT Austin</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>OOS share of undergraduate population</td><td className="num">~10% (~4,200 students)</td></tr>
                <tr><td>OOS acceptance rate</td><td className="num">~8-13%</td></tr>
                <tr><td>Overall UT acceptance rate</td><td className="num">~31%</td></tr>
                <tr><td>OOS tuition (2025-26)</td><td className="num">{fmtUSD(TUITION.outOfStatePerYear)}</td></tr>
                <tr><td>In-state tuition (2025-26)</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td></tr>
                <tr><td>Annual savings via residency pathway</td><td className="num">{fmtUSD(TUITION.annualSavings)}</td></tr>
                <tr><td>OOS-friendly seats per year</td><td className="num">~1,000-1,100 freshman admits</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Why UT Austin out-of-state acceptance is so competitive</h2>
          <p>Three structural facts compress the OOS admit pool:</p>
          <ol>
            <li><strong>Texas Top 10% Rule.</strong> Texas high school graduates in the top 6% are auto-admitted to UT, consuming approximately 75% of in-state seats.</li>
            <li><strong>10% non-resident cap.</strong> Texas state policy limits non-resident enrollment to approximately 10% of the entering class.</li>
            <li><strong>Holistic review for remaining seats.</strong> The remaining ~25% of in-state seats (non-Top 10% Texas residents) plus the 10% non-resident allocation go through holistic review. OOS applicants compete in this small competitive pool.</li>
          </ol>

          <h2>The five pillars of an OOS UT experience</h2>

          <h3>1. Admission</h3>
          <ul>
            <li><strong>Acceptance rate:</strong> ~8-13% (vs 31% overall)</li>
            <li><strong>Admitted profile:</strong> 3.9-4.0 GPA, top 5% class rank, SAT 1450+, substantive extracurricular depth</li>
            <li><strong>Most selective colleges:</strong> CS (~5-8% OOS), McCombs (~5-8% OOS), Cockrell ECE (~7-10% OOS)</li>
            <li><strong>More accessible UT colleges:</strong> Liberal Arts, Education, some Natural Sciences majors</li>
            <li>See: <Link href="/ut-austin-acceptance-rate-out-of-state">UT Austin acceptance rate</Link></li>
          </ul>

          <h3>2. Tuition and cost</h3>
          <ul>
            <li><strong>OOS tuition:</strong> {fmtUSD(TUITION.outOfStatePerYear)}/year</li>
            <li><strong>Four-year OOS total:</strong> ~{fmtUSD(TUITION.outOfStatePerYear * 4)} at sticker</li>
            <li><strong>Cost of attendance OOS (with housing, meals, books):</strong> ~$80K-$90K/year</li>
            <li><strong>Four-year COA total OOS:</strong> ~$320K-$360K at sticker</li>
            <li>See: <Link href="/ut-austin-4-year-cost-out-of-state">UT Austin 4-year cost</Link></li>
          </ul>

          <h3>3. The Texas residency pathway</h3>
          <ul>
            <li><strong>Annual savings:</strong> ~{fmtUSD(TUITION.annualSavings)} after reclassification</li>
            <li><strong>Three-year savings:</strong> ~{fmtUSD(TUITION.threeYearSavings)} (year 2-4 at in-state rate)</li>
            <li><strong>How:</strong> 12 months of qualifying Texas domicile + documentary set + petition</li>
            <li><strong>Property pathway:</strong> Rule #3 (parent-owned, student-occupied) or Rule #4 (LLC rental)</li>
            <li>See: <Link href="/texas-residency-rules">Texas residency rules</Link></li>
          </ul>

          <h3>4. Financial aid and scholarships</h3>
          <ul>
            <li><strong>Federal aid (Pell, federal loans):</strong> available to OOS based on FAFSA</li>
            <li><strong>Institutional merit scholarships:</strong> $2K-$15K typical for OOS; Forty Acres Scholars full-ride ~15/year</li>
            <li><strong>NOT available to OOS:</strong> Texas Advance Commitment, Texas Empowerment (residency-restricted; available after pathway)</li>
            <li>See: <Link href="/ut-austin-scholarships-out-of-state">Scholarships for OOS</Link> and <Link href="/ut-austin-financial-aid-out-of-state">Financial aid for OOS</Link></li>
          </ul>

          <h3>5. Long-term outcomes</h3>
          <ul>
            <li><strong>Career placement:</strong> strong; UT alumni network is among the largest of any US university</li>
            <li><strong>Top employers:</strong> Apple, Google, Goldman, Deloitte, ExxonMobil, plus Austin tech and Texas corporate</li>
            <li><strong>OOS alumni concentration:</strong> Bay Area, NYC, DC, LA after graduation; many also remain in Austin</li>
            <li>See: <Link href="/ut-austin-graduate-outcomes">Graduate outcomes</Link></li>
          </ul>

          <h2>Top OOS feeder states for UT Austin</h2>
          <p>Find your origin state for a tailored guide:</p>
          <p>
            <Link href="/california-families-ut-austin-in-state-tuition">California</Link> ·{' '}
            <Link href="/new-york-families-ut-austin-in-state-tuition">New York</Link> ·{' '}
            <Link href="/illinois-families-ut-austin-in-state-tuition">Illinois</Link> ·{' '}
            <Link href="/florida-families-ut-austin-in-state-tuition">Florida</Link> ·{' '}
            <Link href="/georgia-families-ut-austin-in-state-tuition">Georgia</Link> ·{' '}
            <Link href="/new-jersey-families-ut-austin-in-state-tuition">New Jersey</Link> ·{' '}
            <Link href="/maryland-families-ut-austin-in-state-tuition">Maryland</Link> ·{' '}
            <Link href="/virginia-families-ut-austin-in-state-tuition">Virginia</Link> ·{' '}
            <Link href="/massachusetts-families-ut-austin-in-state-tuition">Massachusetts</Link> ·{' '}
            <Link href="/connecticut-families-ut-austin-in-state-tuition">Connecticut</Link> ·{' '}
            <Link href="/washington-families-ut-austin-in-state-tuition">Washington</Link> ·{' '}
            <Link href="/colorado-families-ut-austin-in-state-tuition">Colorado</Link> ·{' '}
            <Link href="/arizona-families-ut-austin-in-state-tuition">Arizona</Link> ·{' '}
            <Link href="/tennessee-families-ut-austin-in-state-tuition">Tennessee</Link> ·{' '}
            <Link href="/michigan-families-ut-austin-in-state-tuition">Michigan</Link> ·{' '}
            <Link href="/north-carolina-families-ut-austin-in-state-tuition">North Carolina</Link> ·{' '}
            <Link href="/pennsylvania-families-ut-austin-in-state-tuition">Pennsylvania</Link> ·{' '}
            <Link href="/ohio-families-ut-austin-in-state-tuition">Ohio</Link>
          </p>
          <p>Full list of 31 origin state guides at <Link href="/by-state">/by-state</Link>.</p>

          <h2>Why families choose UT Austin from out of state</h2>
          <ul>
            <li><strong>Top-tier academics at moderate cost:</strong> top-30 nationally, top-10 public, with materially lower sticker than peer top publics (Berkeley, Michigan, UVA)</li>
            <li><strong>The residency pathway:</strong> 12-month pathway to in-state tuition that no other top public flagship offers</li>
            <li><strong>Austin location:</strong> tech capital, music industry, state government, mild winters, growing metro</li>
            <li><strong>Specific program strength:</strong> McCombs (top 10 business), CS (top 10), Cockrell (top 10-15), Plan II Honors, Forty Acres Scholars</li>
            <li><strong>Texas residency unlocks downstream benefits:</strong> Texas medical school in-state rates, Texas state-tax exit, broader Texas economic opportunity</li>
          </ul>

          <h2>The first six months for an OOS UT student</h2>
          <ol>
            <li><strong>Summer before freshman year:</strong> If pursuing residency pathway, acquire Texas property + establish documentary set; if not pursuing, plan move logistics</li>
            <li><strong>August (move-in):</strong> Move to Austin; obtain Texas driver&apos;s license, register vehicle, register to vote (if pursuing pathway)</li>
            <li><strong>September-October:</strong> Orient to campus, build initial social network, identify clubs and student organizations</li>
            <li><strong>October-November:</strong> Begin career exploration (career fair attendance, alumni networking); start building professional relationships</li>
            <li><strong>November-December:</strong> Complete first semester; assess academic and social fit</li>
            <li><strong>January-February:</strong> Begin internship search if applicable; continue residency documentary maintenance</li>
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
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the pathway that defines OOS UT experience</li>
              <li><Link href="/ut-austin-4-year-cost-out-of-state">4-year cost</Link>: total financial picture</li>
              <li><Link href="/is-ut-austin-worth-it-out-of-state">Is UT worth it</Link>: decision analysis</li>
              <li><Link href="/by-state">By origin state</Link>: tailored guide for your home state</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-oos-students" />
    </>
  );
}
