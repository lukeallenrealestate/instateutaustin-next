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

const TITLE = 'ApplyTexas UT Austin Guide: Step-by-Step (2026-27 Application)';
const DESCRIPTION = 'Complete ApplyTexas guide for UT Austin: how to register, complete each section, submit essays, send transcripts and test scores, plus a section-by-section walkthrough of the 2026-27 application.';
const PATH = '/applytexas-ut-austin-guide';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is ApplyTexas?', a: 'ApplyTexas is the common application platform for all Texas public universities (UT Austin, Texas A&M, University of Houston, Texas Tech, UT Dallas, UT Arlington, and others). It is the only application platform UT Austin accepts; UT does not accept the Common App. A single ApplyTexas application can be sent to multiple Texas public schools by selecting them within the platform.' },
  { q: 'When does ApplyTexas open for UT Austin?', a: 'ApplyTexas opens August 1 each year for the following academic year\'s freshman applicants. UT Austin\'s priority deadline is November 1; regular deadline is December 1. Transfer applications have different deadlines (March 1 for fall, October 1 for spring).' },
  { q: 'How much does ApplyTexas cost for UT Austin?', a: 'UT Austin\'s application fee is $90 for freshman applicants and $90 for transfer applicants (US citizens and permanent residents). International applicants pay $90. Fee waivers are available for applicants demonstrating financial need (SAT/ACT fee waiver recipients, FRPL recipients, or other documented hardship). The fee is paid through ApplyTexas at the time of submission.' },
  { q: 'What sections does the ApplyTexas application include?', a: 'ApplyTexas has multiple sections: (1) Personal Information; (2) Address Information; (3) Counselor Information; (4) High School Information; (5) Academic Information (courses, GPA, rank); (6) Test Scores; (7) Activities; (8) Honors and Awards; (9) Educational Background; (10) Essays (Topic A personal statement plus major-specific); (11) Major Selection; (12) Financial Aid (optional FAFSA-style information). Complete all sections before submitting.' },
  { q: 'Do I need to send official transcripts to UT Austin?', a: 'Yes. UT Austin requires official high school transcripts and (for transfer applicants) official college transcripts. Send transcripts electronically through Parchment, Naviance, or by mail to UT Office of Admissions. Test scores (SAT/ACT) should be sent directly from College Board or ACT. UT\'s ApplyTexas application ID is required for matching.' },
  { q: 'Can I save my ApplyTexas application and come back later?', a: 'Yes. ApplyTexas saves progress automatically as you complete each section. You can log in and resume any time. Once you submit, the application cannot be edited. Review carefully before final submission. Recommend completing the application several days before the deadline to allow for proofreading and last-minute additions.' },
  { q: 'What happens after I submit the ApplyTexas application?', a: 'After submission: (1) UT acknowledges receipt within 1-2 business days; (2) Your MyStatus account is created; (3) UT Office of Admissions reviews your file (typically 4-8 weeks); (4) Additional materials may be requested (recommendations, additional essays, interview for certain programs); (5) Decision is released (November 1 priority applicants typically receive decisions February-March; December 1 applicants March-April); (6) Admitted students complete the UT Honors and Scholarship Application (HSA) and other post-admission requirements.' },
  { q: 'Can I apply to multiple majors on ApplyTexas?', a: 'Yes. UT Austin allows applicants to list up to two majors (a first choice and a second choice) on the application. Each major requires its own short answer essay. Some applicants strategically choose a competitive first choice (e.g., McCombs Business) and a more accessible second choice (e.g., Liberal Arts) for higher overall admission probability.' },
];

export default function ApplyTexasGuidePage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'ApplyTexas UT Austin Guide', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · ApplyTexas guide"
        title={<h1 className="text-ink max-w-[22ch]">ApplyTexas UT Austin Guide</h1>}
        lede="Step-by-step walkthrough of the ApplyTexas application for UT Austin: how to register, complete each section, submit essays and supporting materials, and avoid common mistakes."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The short version">
            ApplyTexas is the only application platform UT Austin accepts (no Common App). It opens <strong>August 1</strong> for the following year. UT&apos;s priority deadline is <strong>November 1</strong>; regular deadline is <strong>December 1</strong>. Application fee is $90 (waivers available for qualifying applicants). The application includes biographical sections, academic record, essays, and major selection. After submission, UT creates a MyStatus account where decisions and follow-up are managed.
          </QuickAnswer>

          <AuthorBox blurb="Has helped dozens of out-of-state applicants navigate the ApplyTexas system alongside the residency pathway planning that runs in parallel." />

          <h2 className="mt-0">Step 1: Register for ApplyTexas</h2>
          <ol>
            <li>Go to <a href="https://apply.texas.edu" target="_blank" rel="noopener noreferrer">apply.texas.edu</a></li>
            <li>Click &quot;Create an Account&quot;</li>
            <li>Use your legal name (matches your high school transcript and passport)</li>
            <li>Use a personal email (not your high school email; you&apos;ll need this after graduation)</li>
            <li>Create a strong password and save it</li>
            <li>Verify your email; log in</li>
          </ol>

          <h2>Step 2: Complete the biographical sections</h2>
          <ul>
            <li><strong>Personal Information:</strong> name, date of birth, citizenship, demographic information (optional)</li>
            <li><strong>Address Information:</strong> current address, permanent address, parent address</li>
            <li><strong>Counselor Information:</strong> high school counselor name and email; UT will request the school report from your counselor</li>
            <li><strong>High School Information:</strong> high school name, CEEB code (find at &quot;CEEB code lookup&quot;), graduation date, GPA, class rank (if available)</li>
          </ul>

          <h2>Step 3: Complete the academic information</h2>
          <ul>
            <li><strong>Courses:</strong> list all high school courses by year (some applications request all four years; some only senior year)</li>
            <li><strong>Honors and Awards:</strong> academic, leadership, and other recognition</li>
            <li><strong>Activities:</strong> extracurricular activities, including duration, role, and time commitment</li>
            <li><strong>Test Scores:</strong> SAT, ACT, AP, IB scores; can self-report initially but must send official scores from College Board/ACT</li>
          </ul>

          <h2>Step 4: Select your major</h2>
          <ul>
            <li>UT allows up to two majors (first choice + second choice)</li>
            <li>Each major requires its own short answer essay</li>
            <li>Strategic consideration: first choice typically gets primary review; second choice serves as backup if first is denied</li>
            <li>For most applicants, first choice should be your genuine top choice; second choice should be related but more accessible (e.g., first choice: McCombs Business; second choice: Liberal Arts with intent to internal transfer)</li>
            <li>Some majors (Architecture, Fine Arts) require portfolios or auditions; ApplyTexas notes these requirements</li>
          </ul>

          <h2>Step 5: Write the essays</h2>
          <ul>
            <li><strong>ApplyTexas Topic A:</strong> personal statement, 650 words max</li>
            <li><strong>Major-specific short answer:</strong> 250-300 words per major</li>
            <li>See the <Link href="/ut-austin-essay-prompts">UT Austin essay prompts</Link> page for detailed essay guidance</li>
            <li>Recommended timeline: draft in summer, refine in fall, submit by November 1</li>
          </ul>

          <h2>Step 6: Pay the application fee</h2>
          <ul>
            <li>UT Austin application fee: $90 for freshman or transfer</li>
            <li>Fee waiver available for SAT/ACT fee waiver recipients, FRPL recipients, or documented hardship</li>
            <li>Apply for waiver through the College Board or via your high school counselor</li>
            <li>Pay through ApplyTexas at the time of submission</li>
          </ul>

          <h2>Step 7: Send supporting materials</h2>
          <ul>
            <li><strong>Official high school transcript:</strong> sent by your high school counselor through Parchment, Naviance, or by mail</li>
            <li><strong>Official test scores:</strong> sent directly from College Board (SAT) or ACT (ACT)</li>
            <li><strong>Letters of recommendation:</strong> UT does not require letters but accepts up to 2 if submitted through the counselor or directly to UT</li>
            <li><strong>Mid-year report:</strong> some applicants send mid-year transcripts in January-February to update grades</li>
          </ul>

          <h2>Step 8: Submit and confirm</h2>
          <ol>
            <li>Review the entire application for accuracy</li>
            <li>Have a parent, counselor, or trusted reader review essays</li>
            <li>Confirm fee payment</li>
            <li>Submit by your target deadline (November 1 priority recommended)</li>
            <li>Save confirmation email</li>
            <li>Within 1-2 business days, you should receive a UT acknowledgment with MyStatus account details</li>
          </ol>

          <h2>What happens after submission</h2>
          <ol>
            <li><strong>Week 1-2:</strong> UT confirms receipt; MyStatus account created</li>
            <li><strong>Week 2-4:</strong> UT requests any missing materials (transcripts, scores, additional documents)</li>
            <li><strong>Weeks 4-12:</strong> UT Office of Admissions reviews the file</li>
            <li><strong>Months 2-4:</strong> Decision released (November 1 applicants: February-March; December 1 applicants: March-April)</li>
            <li><strong>After admission:</strong> Complete UT Honors and Scholarship Application (HSA) in MyStatus for institutional scholarship consideration</li>
            <li><strong>Spring of senior year:</strong> Receive financial aid offer (FAFSA-dependent); evaluate vs other school offers</li>
            <li><strong>By May 1:</strong> Submit enrollment deposit to commit</li>
          </ol>

          <h2>Common ApplyTexas mistakes</h2>
          <ul>
            <li><strong>Inconsistent name across sections.</strong> Use your legal name exactly as it appears on your transcript and passport.</li>
            <li><strong>Wrong CEEB code.</strong> Verify your high school code; mistakes cause delays.</li>
            <li><strong>Missing the priority deadline.</strong> November 1 maximizes scholarship and Forty Acres consideration; missing it limits options.</li>
            <li><strong>Forgetting to pay the fee.</strong> Submission requires fee or fee waiver verification.</li>
            <li><strong>Skipping the major-specific essay.</strong> Each major requires its own short answer; missing one auto-disqualifies for that major.</li>
            <li><strong>Generic Topic A essay.</strong> Your personal statement should reveal who you are, not list your credentials.</li>
            <li><strong>Not sending transcripts and scores.</strong> Self-reported information must be verified by official documents from the source.</li>
            <li><strong>Not checking MyStatus regularly.</strong> Additional materials requested via MyStatus must be submitted promptly.</li>
          </ul>

          <h2>For out-of-state applicants: parallel residency planning</h2>
          <p>While completing ApplyTexas, out-of-state families considering the residency pathway should run residency planning in parallel:</p>
          <ul>
            <li><strong>Junior year spring:</strong> Begin researching Texas property options; consult with Texas REALTOR and CPA</li>
            <li><strong>Senior year summer:</strong> Acquire Texas property if pursuing Rule #3 or #4 pathways</li>
            <li><strong>Senior year fall:</strong> Establish Texas documentary set (driver&apos;s license, vehicle registration, voter registration)</li>
            <li><strong>By UT enrollment:</strong> 12-month residency clock may have started or be ready to start</li>
            <li><strong>Year 1 at UT:</strong> Maintain documentary set; petition for reclassification at 12-month anniversary</li>
            <li>See <Link href="/12-month-timeline">the 12-month timeline</Link> for detailed planning</li>
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
              <li><Link href="/ut-austin-essay-prompts">UT Austin essay prompts</Link>: how to approach the essays</li>
              <li><Link href="/ut-austin-application-deadlines">Application deadlines</Link>: full calendar</li>
              <li><Link href="/ut-austin-acceptance-rate-out-of-state">Acceptance rate</Link>: what UT admission requires</li>
              <li><Link href="/12-month-timeline">12-month residency timeline</Link>: parallel residency planning</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-applytexas-guide" />
    </>
  );
}
