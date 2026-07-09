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

const TITLE = 'UT Austin Freshman Year Guide: Complete Parent Handbook (2026-2027)';
const DESCRIPTION = 'Complete UT Austin freshman year guide for parents: orientation, move-in, first-year academic advice, housing, meal plans, safety, common mistakes, plus the residency pathway timing for out-of-state families.';
const PATH = '/ut-austin-freshman-year-guide';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'When does UT Austin freshman year start?', a: 'Fall semester classes typically begin the last week of August. Move-in day for incoming freshmen is usually the weekend before classes (Sunday or Monday). Orientation for incoming freshmen occurs in summer (June-August); students select an orientation session and attend for 2-3 days.' },
  { q: 'What should my UT freshman bring?', a: 'Essentials: bedding (twin XL for residence halls), toiletries, clothing for hot Austin weather, laptop, textbooks (or renting arrangement), basic dorm supplies. Don\'t over-pack; Target and Walmart are 10 minutes from campus. Big-item purchases (mini fridge, microwave, futon) can be delivered locally. Skip room decor until arrival to see the space.' },
  { q: 'How do I stay in touch with my UT freshman?', a: 'Most families use text, phone, FaceTime. UT provides email accounts. Parent Family Weekend is typically in October. Consider setting a regular check-in cadence (weekly call) but respect the student\'s new independence. Access UT financial and academic information through Family Login (student must grant access).' },
  { q: 'What can go wrong in freshman year?', a: 'Common issues: academic struggle in first semester (transition from high school), homesickness (typical in weeks 4-8), roommate conflicts, difficulty finding social community, financial mismanagement, mental health challenges. UT has extensive support: academic advisors, Counseling and Mental Health Center, Sanger Learning Center for academic support, RAs in residence halls.' },
  { q: 'How do out-of-state freshmen adjust?', a: 'The first semester is typically hardest for OOS students. Recommendations: attend orientation events fully, join clubs and organizations in first month, find one or two social communities, connect with academic advisor early, plan first visit home for October break to reset. Most OOS freshmen thrive by second semester.' },
];

export default function FreshmanYearPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Freshman Year Guide', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Freshman year handbook"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Freshman Year Guide</h1>}
        lede="A parent's complete handbook to UT Austin freshman year: orientation, move-in, first-year academic advice, housing, safety, common mistakes, and the residency pathway timing for out-of-state families."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The freshman year at a glance">
            UT Austin freshman year starts in late August. Move-in weekend precedes classes; orientation happens during summer (June-August). First semester is typically the hardest for out-of-state students; second semester is when most students find their footing. For OOS families pursuing Texas residency, freshman year is the year the 12-month domicile clock runs; residency reclassification typically approved for sophomore year.
          </QuickAnswer>

          <AuthorBox blurb="Has helped OOS families navigate the transition to UT freshman year, including parallel residency pathway execution during year 1." />

          <h2 className="mt-0">The freshman year calendar</h2>

          <h3>Summer before freshman year</h3>
          <ul>
            <li><strong>June-July:</strong> Orientation session (choose from available dates)</li>
            <li><strong>June:</strong> Housing assignments released; roommate contact begins</li>
            <li><strong>July:</strong> Course registration during orientation</li>
            <li><strong>Late July-August:</strong> Meal plan selection; final housing prep</li>
            <li><strong>August (mid):</strong> For OOS residency-pathway families: acquire Texas property, establish documentary set</li>
          </ul>

          <h3>Move-in weekend (typically late August)</h3>
          <ul>
            <li>Residence halls open; move-in coordinated by hall</li>
            <li>Family Welcome events</li>
            <li>Cultural transitions and campus tours</li>
            <li>Grocery run to HEB or Whole Foods for first-week essentials</li>
          </ul>

          <h3>First semester (late August - early December)</h3>
          <ul>
            <li>Classes begin; academic adjustment period</li>
            <li>Club and organization involvement starts</li>
            <li>Career fair attendance (recommended even freshman year)</li>
            <li>Parents Weekend (typically October)</li>
            <li>Thanksgiving break (late November)</li>
            <li>Final exams (early December)</li>
            <li>For pathway families: maintain Texas documentary set continuously</li>
          </ul>

          <h3>Second semester (mid-January - May)</h3>
          <ul>
            <li>Spring semester begins mid-January</li>
            <li>Continue academic and social establishment</li>
            <li>Summer internship or research applications</li>
            <li>Sophomore year housing decisions (typical timeline: Feb-March)</li>
            <li>Spring break (typically mid-March)</li>
            <li>Final exams (early May)</li>
            <li>Summer plans finalized</li>
          </ul>

          <h3>Summer between freshman and sophomore year</h3>
          <ul>
            <li>For pathway families: petition for residency reclassification (12-month clock complete)</li>
            <li>Summer internship, research, or campus job</li>
            <li>Prepare for sophomore year</li>
          </ul>

          <h2>The academic transition</h2>
          <p>The transition from high school to UT is significant. Course loads are heavier, expectations are higher, and self-management is entirely on the student. Support resources:</p>
          <ul>
            <li><strong>Academic advisors:</strong> assigned by college; advise on course selection, degree planning</li>
            <li><strong>Sanger Learning Center:</strong> tutoring, study skills, writing support</li>
            <li><strong>Discipline-specific tutoring:</strong> Math Learning Center, Physics tutoring, etc.</li>
            <li><strong>Professor office hours:</strong> substantially underused by freshmen but very valuable</li>
            <li><strong>Freshman Research Initiative:</strong> optional first-year research experience</li>
          </ul>

          <h2>Housing and dining first year</h2>
          <ul>
            <li>Most freshmen live in on-campus residence halls (approximately 7,000 UT students)</li>
            <li>Required first-year meal plan (Block or Bevo Bucks options)</li>
            <li>Residence hall assignment based on application timing and preferences</li>
            <li>Roommate matching through application process</li>
            <li>See <Link href="/ut-austin-dorms">UT Austin dorms guide</Link></li>
          </ul>

          <h2>Safety, mental health, and support</h2>
          <ul>
            <li><strong>UT Police Department:</strong> 24/7 campus security; emergency line available</li>
            <li><strong>Counseling and Mental Health Center (CMHC):</strong> free counseling for enrolled students; walk-in and appointment options</li>
            <li><strong>Behavior Concerns and Consultation Team (BCCT):</strong> support for students in crisis</li>
            <li><strong>RAs in residence halls:</strong> first-line resource for hall issues</li>
            <li><strong>Emergency preparedness:</strong> Text-UT notification system for campus emergencies</li>
          </ul>

          <h2>For out-of-state families: freshman year and the residency pathway</h2>
          <div className="callout">
            <h4>Parallel timelines</h4>
            <p className="mb-0">While the student focuses on academic transition, the family maintains the residency pathway execution: continuous Texas presence, documentary set current, no extended out-of-state absences that could reset the 12-month clock. Around the end of freshman year (typically summer), file the residency reclassification petition through UT MyStatus. Approved petition converts tuition from out-of-state to in-state rate starting sophomore year.</p>
          </div>

          <h2>Common freshman year mistakes</h2>
          <ul>
            <li>Not attending orientation events (miss critical academic advising)</li>
            <li>Over-enrolling in courses first semester (heavy adjustment burden)</li>
            <li>Isolating socially (not joining clubs or communities in first month)</li>
            <li>Ignoring career services (start freshman year, not junior year)</li>
            <li>Not utilizing tutoring or office hours (weak first-semester grades)</li>
            <li>Overspending in first few weeks (Uber, eating out, entertainment)</li>
            <li>For OOS pathway families: allowing extended out-of-state absences that could delay residency clock</li>
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
              <li><Link href="/ut-family-orientation">UT family orientation</Link>: parent prep before move-in</li>
              <li><Link href="/ut-austin-dorms">UT Austin dorms</Link>: residence hall guide</li>
              <li><Link href="/ut-austin-housing-guide">Housing guide</Link>: on and off campus options</li>
              <li><Link href="/12-month-timeline">12-month residency timeline</Link>: pathway execution during freshman year</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-freshman-year-guide" />
    </>
  );
}
