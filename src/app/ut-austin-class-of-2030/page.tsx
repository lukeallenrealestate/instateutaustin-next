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

const TITLE = 'UT Austin Class of 2030: Application Strategy + Residency Pathway Guide';
const DESCRIPTION = 'UT Austin Class of 2030 (incoming Fall 2026): complete application strategy. Acceptance rates, by-college admission, application timeline, financial planning, plus the Texas residency pathway that saves out-of-state families $33,220/year.';
const PATH = '/ut-austin-class-of-2030';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is the UT Austin Class of 2030?', a: 'The UT Austin Class of 2030 refers to students who will enter UT in Fall 2026 and graduate in May 2030. Class size: approximately 8,500-9,000 incoming freshmen plus ~2,000 transfer students. Application deadline for Class of 2030: November 1, 2025 priority deadline; December 1, 2025 regular deadline.' },
  { q: 'When should my student apply for UT Austin Class of 2030?', a: 'For Fall 2026 entry (Class of 2030): ApplyTexas opens August 1, 2025. Priority deadline: November 1, 2025 (recommended for scholarship consideration including Forty Acres). Regular deadline: December 1, 2025. FAFSA priority deadline: January 15, 2026. Admission decisions: February-April 2026. Decision Day: May 1, 2026.' },
  { q: 'What is the expected acceptance rate for UT Austin Class of 2030?', a: 'Based on recent trends, expect approximately 31% overall acceptance rate, with 8-13% acceptance for non-residents (continuing the pattern of the 10% non-resident cap). For most selective programs: Computer Science ~5-8%, McCombs Business ~10%, Cockrell ECE ~10-15%. Top quartile admitted profile: 4.0 GPA, SAT 1500+, top 5% class rank.' },
  { q: 'What will UT Austin tuition be for Class of 2030?', a: `UT Austin tuition for 2026-27 (Class of 2030 year 1): in-state ${fmtUSD(TUITION.inStatePerYear)} (frozen through 2026-27); non-resident ${fmtUSD(TUITION.outOfStatePerYear)}. Projected 2027-28 (year 2): non-resident likely $47,000-$48,000 with annual increases. Four-year non-resident tuition without residency pathway: approximately $190,000-$210,000 with normal annual increases. With Texas residency pathway pursued in year 1 and approved for year 2: approximately $90,000-$95,000.` },
  { q: 'What is the four-year financial picture for Class of 2030?', a: 'Total four-year cost of attendance: In-state ~$140,000-$160,000 (includes housing, meals, books). Out-of-state at sticker ~$300,000-$340,000. Out-of-state with Texas residency pathway: ~$210,000-$240,000. Out-of-state with merit scholarships + residency: ~$170,000-$210,000. Substantial financial planning is appropriate for high-cost scenarios.' },
  { q: 'How should my student prepare for Class of 2030 admission?', a: 'Junior year of high school (2024-25): take SAT/ACT; build extracurricular depth; identify target majors. Summer 2025: begin essay brainstorming; visit UT campus if possible. Senior year fall (2025): finalize applications by November 1 priority deadline; submit Forty Acres Scholars application if applying; complete college-specific honors applications (BHP, Plan II, etc.). January 2026: FAFSA priority deadline. May 2026: commit by Decision Day.' },
  { q: 'Should we pursue the Texas residency pathway for Class of 2030?', a: 'For out-of-state families with capital to acquire Texas property, yes. The pathway requires: (1) physical move to Texas (or property acquisition with student-occupancy structure); (2) 12 months of qualifying Texas domicile before petition; (3) approval at UT for in-state classification. For families admitted to UT for Class of 2030, planning starts summer 2026 with reclassification for Fall 2027 (sophomore year). The pathway saves approximately $33,220/year for the remaining 3 years, totaling approximately $100,000.' },
  { q: 'When are housing applications due for Class of 2030?', a: 'UT housing applications for Class of 2030 (Fall 2026 move-in) typically open in late October 2025. Submit through MyStatus after admission. Earlier application typically improves chances at preferred residence halls. Off-campus housing in West Campus typically opens leases for Fall 2026 in January-March 2026; high-demand buildings book quickly.' },
];

export default function ClassOf2030Page() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Class of 2030', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Class of 2030"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Class of 2030</h1>}
        lede="Complete application and financial strategy for UT Austin Class of 2030 (incoming Fall 2026): acceptance rates, by-college admission, application timeline, and the residency pathway."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The Class of 2030 picture">
            UT Austin Class of 2030 enters Fall 2026 and graduates May 2030. Expected class size: <strong>~8,500-9,000 freshmen</strong>. Application priority deadline: <strong>November 1, 2025</strong>; regular deadline December 1, 2025. Expected acceptance rate: ~31% overall, <strong>~8-13% non-resident</strong>. Year 1 tuition: ${TUITION.inStatePerYear.toLocaleString()} in-state, ${TUITION.outOfStatePerYear.toLocaleString()} non-resident. Texas residency pathway pursued during year 1 saves approximately <strong>{fmtUSD(TUITION.threeYearSavings)}</strong> over years 2-4.
          </QuickAnswer>

          <AuthorBox blurb="Has helped families plan for upcoming UT Austin admission cycles including parallel residency pathway preparation during the application year." />

          <h2 className="mt-0">Class of 2030 timeline (Fall 2026 entry)</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>August 1, 2025</strong></td><td>ApplyTexas opens</td></tr>
                <tr><td><strong>October 1, 2025</strong></td><td>FAFSA opens for 2026-27</td></tr>
                <tr><td><strong>November 1, 2025</strong></td><td>UT Austin priority deadline + Forty Acres Scholars deadline</td></tr>
                <tr><td><strong>December 1, 2025</strong></td><td>UT Austin regular deadline (final)</td></tr>
                <tr><td><strong>January 15, 2026</strong></td><td>FAFSA priority deadline</td></tr>
                <tr><td><strong>February 2026</strong></td><td>Forty Acres Scholars finalist interviews; first wave admit notifications</td></tr>
                <tr><td><strong>March-April 2026</strong></td><td>Second wave admit notifications; admitted students events</td></tr>
                <tr><td><strong>May 1, 2026</strong></td><td>National Decision Day; submit enrollment deposit</td></tr>
                <tr><td><strong>May-June 2026</strong></td><td>Orientation registration; housing application; for residency pathway families, begin Texas property acquisition</td></tr>
                <tr><td><strong>August 2026</strong></td><td>If pursuing residency pathway: move to Texas; obtain Texas DL/registration/voter</td></tr>
                <tr><td><strong>August 26, 2026 (approximate)</strong></td><td>First day of UT classes (Class of 2030 starts)</td></tr>
                <tr><td><strong>August-September 2026</strong></td><td>Year 1: tuition paid as non-resident if applicable</td></tr>
                <tr><td><strong>Fall 2027 (approximate)</strong></td><td>If 12-month clock complete: petition for residency reclassification</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Class of 2030 expected admission profile</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Expected Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Overall acceptance rate</td><td className="num">~31%</td></tr>
                <tr><td>Non-resident acceptance rate</td><td className="num">~8-13%</td></tr>
                <tr><td>Class size</td><td className="num">~8,500-9,000 freshmen</td></tr>
                <tr><td>Texas Top 10% admits</td><td className="num">~75% of class (Texas residents)</td></tr>
                <tr><td>Out-of-state admits</td><td className="num">~10% of class (cap)</td></tr>
                <tr><td>Admitted middle 50% GPA</td><td className="num">3.8-4.0 unweighted</td></tr>
                <tr><td>Admitted middle 50% SAT</td><td className="num">1320-1500</td></tr>
                <tr><td>Top quartile (McCombs/CS/ECE)</td><td className="num">4.0 GPA, 1500+ SAT</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Class of 2030 four-year cost projection</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>4-Year Tuition</th>
                  <th>4-Year COA (incl. housing)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Texas resident (4 years in-state)</td><td className="num">~$48,000</td><td className="num">~$140,000-$160,000</td></tr>
                <tr><td>Non-resident full sticker (4 years OOS)</td><td className="num">~$190,000-$210,000</td><td className="num">~$300,000-$340,000</td></tr>
                <tr><td>Non-resident with residency pathway (year 2 reclassification)</td><td className="num">~$90,000-$95,000</td><td className="num">~$200,000-$230,000</td></tr>
                <tr><td>Non-resident with $7,500/yr merit + residency pathway</td><td className="num">~$60,000-$65,000</td><td className="num">~$170,000-$200,000</td></tr>
              </tbody>
            </table>
          </div>

          <h2>The Class of 2030 application strategy for out-of-state families</h2>

          <h3>Spring junior year (Spring 2025)</h3>
          <ul>
            <li>Take SAT or ACT; assess scores against UT target profile</li>
            <li>Identify UT as target school; identify major preferences</li>
            <li>Visit UT Austin campus if possible</li>
            <li>Build extracurricular profile</li>
          </ul>

          <h3>Summer before senior year (Summer 2025)</h3>
          <ul>
            <li>Substantive summer activity related to target major (internship, research, business activity)</li>
            <li>Begin essay brainstorming and drafting</li>
            <li>Engage college counselor or independent advisor</li>
            <li>Research scholarships (Forty Acres, college-specific merit, outside)</li>
            <li>Begin residency pathway planning if applicable: identify Texas property options, consult Texas REALTOR and CPA</li>
          </ul>

          <h3>Senior year fall (Fall 2025)</h3>
          <ul>
            <li>Submit ApplyTexas by November 1 priority deadline</li>
            <li>Submit Forty Acres Scholars application by November 1 (if academic profile supports)</li>
            <li>Complete college-specific honors applications (BHP, Plan II, etc.)</li>
            <li>Submit essays for all targeted majors</li>
            <li>Send SAT/ACT scores and official high school transcript</li>
          </ul>

          <h3>Senior year winter-spring (Winter-Spring 2026)</h3>
          <ul>
            <li>Submit FAFSA by January 15</li>
            <li>Complete UT Honors and Scholarship Application (HSA) after admission</li>
            <li>Compare offers from all schools; financial planning</li>
            <li>Visit admitted students events (Texas Admit Day, etc.)</li>
            <li>Decide by May 1 and submit enrollment deposit</li>
          </ul>

          <h3>Summer 2026 (before freshman year)</h3>
          <ul>
            <li>Register for orientation</li>
            <li>Apply for on-campus housing</li>
            <li>If pursuing residency pathway: acquire Texas property + establish documentary set</li>
            <li>Move to Austin; obtain Texas driver&apos;s license, vehicle registration, voter registration</li>
            <li>Begin building local community for student arrival</li>
          </ul>

          <h2>For Class of 2030: the residency pathway window</h2>
          <div className="callout">
            <h4>Year 1 to Year 2 reclassification</h4>
            <p className="mb-0">Out-of-state Class of 2030 students who pursue the Texas residency pathway typically: (1) acquire Texas property in summer 2026 and move; (2) establish documentary set (Texas DL, vehicle reg, voter reg) by September 2026; (3) maintain Texas domicile through Year 1 (Fall 2026 - Spring 2027); (4) file residency reclassification petition in Summer 2027 for Fall 2027 (Year 2 of UT enrollment); (5) approved petition reclassifies to in-state tuition for years 2-4. Total savings over years 2-4: approximately {fmtUSD(TUITION.threeYearSavings)}.</p>
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
              <li><Link href="/ut-austin-application-deadlines">Application deadlines</Link>: full calendar</li>
              <li><Link href="/ut-austin-acceptance-rate-out-of-state">Acceptance rate</Link>: what admission requires</li>
              <li><Link href="/12-month-timeline">12-month residency timeline</Link>: residency pathway planning</li>
              <li><Link href="/ut-austin-tuition-2026-2027">Tuition 2026-2027</Link>: Class of 2030 year 1 rates</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-class-of-2030" />
    </>
  );
}
