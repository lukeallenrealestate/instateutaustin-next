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

const TITLE = 'UT Austin Application Deadlines 2026-27 (Freshman, Transfer, Scholarship)';
const DESCRIPTION = 'Complete UT Austin application deadline calendar for 2026-27: ApplyTexas opens August 1, priority deadline November 1, regular deadline December 1, FAFSA January 15, Forty Acres Scholars November 1, plus transfer and decision dates.';
const PATH = '/ut-austin-application-deadlines';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'When is the UT Austin application deadline for fall 2026?', a: 'The priority deadline for fall 2026 freshman admission is November 1, 2026 (recommended for scholarship consideration). The regular deadline is December 1, 2026. ApplyTexas opens August 1, 2026. International applicants have the same deadlines. Transfer deadlines vary by college and term.' },
  { q: 'Should I apply by the November 1 priority deadline or the December 1 regular deadline?', a: 'Apply by the November 1 priority deadline. UT considers November 1 applicants for the broadest scholarship pool and admits decisions are typically released earlier. Applicants who miss November 1 can still apply by December 1, but lose access to some merit scholarship consideration.' },
  { q: 'When are UT Austin admission decisions released?', a: 'UT Austin releases freshman admission decisions on a rolling basis. November 1 applicants typically receive decisions by mid-February. December 1 applicants receive decisions by late March or early April. Specific dates vary year to year and are posted on UT\'s Office of Admissions website.' },
  { q: 'When is the FAFSA deadline for UT Austin?', a: 'UT Austin\'s FAFSA priority deadline is January 15. FAFSA opens October 1 (or October 10-15 for recent simplified FAFSA cycles). UT\'s FAFSA school code is 003658. Filing by the January 15 priority deadline maximizes consideration for need-based institutional aid.' },
  { q: 'When is the Forty Acres Scholars deadline?', a: 'The Forty Acres Scholars Program application deadline is November 1, 2026 for fall 2026 entrance. The Forty Acres application is separate from the main UT application and requires additional essays. Finalists interview on campus in February.' },
  { q: 'When can my student commit to UT Austin?', a: 'May 1 is the standard national candidate reply deadline (Decision Day). Students must submit the enrollment deposit by this date to commit to UT Austin. Housing applications typically open in February-March; orientation registration opens in May-June after enrollment is confirmed.' },
  { q: 'When are the UT Austin transfer admission deadlines?', a: 'Transfer admission deadlines vary by college and term. Most colleges accept transfers for fall and spring semesters. Common deadlines: March 1 (fall transfer), October 1 (spring transfer). Cockrell Engineering, McCombs, and CS have specific additional requirements. See the UT Office of Admissions for current transfer-specific deadlines.' },
  { q: 'What happens if I miss a UT Austin deadline?', a: 'Missing the December 1 regular deadline means you cannot apply for that admission term. UT does not offer late applications. The next opportunity is the next admission cycle. Some students apply for spring 2027 admission instead, which has its own (later) deadline.' },
];

export default function ApplicationDeadlinesPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Application Deadlines', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Application calendar"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Application Deadlines 2026-27</h1>}
        lede="The complete calendar of dates for UT Austin fall 2026 admission: application opens, priority deadline, regular deadline, FAFSA, scholarships, decisions, and commit deadline."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The key dates for fall 2026 admission">
            <strong>August 1, 2026:</strong> ApplyTexas opens.<br/>
            <strong>November 1, 2026:</strong> Priority deadline (recommended; required for Forty Acres + broadest scholarship consideration).<br/>
            <strong>December 1, 2026:</strong> Regular deadline.<br/>
            <strong>January 15, 2027:</strong> FAFSA priority deadline.<br/>
            <strong>February-April:</strong> Admission decisions released.<br/>
            <strong>May 1, 2027:</strong> Commit deadline (Decision Day).
          </QuickAnswer>

          <AuthorBox blurb="Helps out-of-state UT families navigate the application calendar alongside the residency pathway planning that runs in parallel during senior year." />

          <h2 className="mt-0">Full UT Austin 2026-27 admission calendar</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Event</th>
                  <th>Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>August 1, 2026</strong></td><td>ApplyTexas opens for fall 2027 freshman admission</td><td>Begin application; start essays</td></tr>
                <tr><td><strong>October 1, 2026</strong></td><td>FAFSA opens for 2027-28 award year</td><td>File early for maximum aid consideration</td></tr>
                <tr><td><strong>November 1, 2026</strong></td><td>UT Austin priority application deadline</td><td>Scholarship consideration; earlier decisions</td></tr>
                <tr><td><strong>November 1, 2026</strong></td><td>Forty Acres Scholars Program deadline</td><td>UT&apos;s flagship full-ride scholarship</td></tr>
                <tr><td><strong>December 1, 2026</strong></td><td>UT Austin regular application deadline</td><td>Final deadline; no late applications</td></tr>
                <tr><td><strong>December-February</strong></td><td>UT Honors and Scholarship Application (HSA) due</td><td>Required for institutional scholarship consideration</td></tr>
                <tr><td><strong>January 15, 2027</strong></td><td>FAFSA priority deadline at UT</td><td>Need-based institutional aid priority</td></tr>
                <tr><td><strong>February-March 2027</strong></td><td>First wave of admission decisions</td><td>November 1 applicants notified</td></tr>
                <tr><td><strong>February 2027</strong></td><td>Forty Acres Scholars finalist interviews</td><td>On-campus interviews for finalists</td></tr>
                <tr><td><strong>March-April 2027</strong></td><td>Second wave of admission decisions</td><td>December 1 applicants notified</td></tr>
                <tr><td><strong>March 2027</strong></td><td>UT Athletics letter of intent deadlines (for recruited athletes)</td><td>NCAA-specific timing</td></tr>
                <tr><td><strong>April 2027</strong></td><td>Texas Top 10% Rule deadlines (for Texas residents)</td><td>Automatic admission verification</td></tr>
                <tr><td><strong>May 1, 2027</strong></td><td><strong>National Candidate Reply Date (Decision Day)</strong></td><td>Commit to UT by submitting enrollment deposit</td></tr>
                <tr><td><strong>May-June 2027</strong></td><td>Orientation registration opens</td><td>Required for enrolled students</td></tr>
                <tr><td><strong>June 2027</strong></td><td>Housing application priority deadline</td><td>On-campus housing assignments</td></tr>
                <tr><td><strong>August 26, 2026</strong></td><td>First day of fall 2026 classes</td><td>Move-in typically a week before</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Why November 1 priority deadline matters</h2>
          <p>UT&apos;s priority deadline is functionally a soft early action. November 1 applicants:</p>
          <ul>
            <li>Are considered for the broadest pool of institutional merit scholarships</li>
            <li>Are eligible for the Forty Acres Scholars Program (which is November 1 deadline)</li>
            <li>Receive admissions decisions earlier (typically February-March vs March-April)</li>
            <li>Have more time to compare offers from multiple schools before May 1 commit</li>
            <li>Have more time to plan for the Texas residency pathway if admitted from out of state</li>
          </ul>

          <h2>Out-of-state application timeline considerations</h2>

          <h3>Year before senior year</h3>
          <ul>
            <li><strong>Spring junior year:</strong> Take or retake SAT/ACT; finalize testing strategy.</li>
            <li><strong>Summer before senior year:</strong> Visit UT Austin if possible; begin essay brainstorming.</li>
          </ul>

          <h3>Senior year fall semester</h3>
          <ul>
            <li><strong>August:</strong> ApplyTexas opens; complete biographical sections.</li>
            <li><strong>September:</strong> Polish essays; request teacher recommendations.</li>
            <li><strong>October:</strong> Submit application by mid-October to comfortably hit November 1.</li>
            <li><strong>November 1:</strong> Priority deadline; submit Forty Acres if applying.</li>
            <li><strong>November-December:</strong> Continue with other applications; track decisions.</li>
          </ul>

          <h3>Senior year spring semester</h3>
          <ul>
            <li><strong>January 15:</strong> FAFSA priority deadline.</li>
            <li><strong>January-February:</strong> Complete UT Honors and Scholarship Application (HSA) in MyStatus after admission.</li>
            <li><strong>February-March:</strong> Receive UT decision; compare offers.</li>
            <li><strong>March-April:</strong> Visit admitted students events; finalize decision.</li>
            <li><strong>May 1:</strong> Commit by submitting enrollment deposit.</li>
            <li><strong>May-June:</strong> Register for orientation; apply for housing.</li>
          </ul>

          <h3>Summer before freshman year (if pursuing residency pathway)</h3>
          <ul>
            <li><strong>June-July:</strong> Begin Texas residency planning (property acquisition, lease arrangement, etc.).</li>
            <li><strong>August:</strong> Move to Texas property; begin establishing the 12-month residency clock.</li>
            <li><strong>August-September:</strong> Obtain Texas driver&apos;s license, vehicle registration, voter registration.</li>
            <li><strong>August 26:</strong> First day of UT Austin classes (paying out-of-state tuition for year 1).</li>
          </ul>

          <h2>Decision day strategy</h2>
          <p>By May 1, applicants typically have decisions from all schools and need to commit by submitting the enrollment deposit. Key considerations:</p>
          <ul>
            <li><strong>Compare full financial pictures.</strong> Each school&apos;s sticker price, merit aid, need-based aid, work-study, and net price.</li>
            <li><strong>Run the four-year math.</strong> Not just year 1 cost but four-year total including any pathway-based savings (Texas residency, etc.).</li>
            <li><strong>Consider major fit.</strong> McCombs at UT vs Marshall at USC vs Kelley at IU; the specific program matters more than overall rankings.</li>
            <li><strong>Don&apos;t over-anchor on rankings.</strong> A top-50 school where the student thrives can produce better outcomes than a top-10 school where they struggle.</li>
            <li><strong>Plan the move logistics.</strong> If committing to UT from out of state, the 4-month window from May to August is for residency pathway preparation (if pursuing) or just standard move logistics.</li>
          </ul>

          <h2>What if you miss a UT Austin deadline?</h2>
          <p>UT does not offer late applications. If you miss the December 1 regular deadline:</p>
          <ul>
            <li><strong>Apply for spring 2027 admission instead.</strong> Spring admission has its own (later) deadline. Useful for students who finalize their college list after December 1.</li>
            <li><strong>Apply elsewhere.</strong> Most other public flagships have January 1 or later deadlines.</li>
            <li><strong>Consider transfer admission.</strong> Attend another college for a year, then transfer to UT for sophomore year. Transfer has different deadlines and admission criteria.</li>
            <li><strong>Plan for fall 2027 admission.</strong> Take a gap year and apply for the following year with a stronger application.</li>
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
              <li><Link href="/ut-austin-essay-prompts">UT Austin essay prompts</Link>: how to approach the application essays</li>
              <li><Link href="/ut-austin-acceptance-rate-out-of-state">UT Austin acceptance rate</Link>: what admission requires</li>
              <li><Link href="/ut-austin-scholarships-out-of-state">UT Austin scholarships</Link>: aid available to non-residents</li>
              <li><Link href="/12-month-timeline">12-month residency timeline</Link>: parallel residency planning</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-application-deadlines" />
    </>
  );
}
