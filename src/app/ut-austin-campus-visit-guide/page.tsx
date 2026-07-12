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

const TITLE = 'UT Austin Campus Visit Guide: Tour, Info Sessions, What to See (2026)';
const DESCRIPTION = 'UT Austin campus visit guide for prospective students and parents: official tours, information sessions, self-guided visits, must-see locations, and what to plan for a productive campus visit.';
const PATH = '/ut-austin-campus-visit-guide';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'How do I visit UT Austin campus?', a: 'UT Austin offers official campus tours and information sessions through the Office of Admissions Visitor Center. Tours are typically 60-75 minutes and run weekdays; some weekends available. Information sessions are 60 minutes and provide admissions and financial aid overview. Book both online at admissions.utexas.edu. Self-guided visits are also possible; parking available at various campus lots.' },
  { q: 'When is the best time to visit UT Austin?', a: 'Best campus visit times: (1) When classes are in session (Aug-May) to see actual student life; (2) Weekdays for full tour/info session offerings; (3) Fall for football game visit (Family Weekend); (4) Spring for admitted students events (Texas Admit Day); (5) Summer during orientation to see fewer students but easier campus navigation. Avoid winter break (late Dec-mid Jan) when campus is largely closed.' },
  { q: 'What should I see during a UT Austin campus visit?', a: 'Must-see locations: UT Tower (307-foot iconic tower); Main Building (Old Main); South Mall (main outdoor plaza); Bevo Statue photo op; UT Undergraduate Library; UT dining hall (Kinsolving or Jester dining); Darrell K Royal-Texas Memorial Stadium (football stadium); Blanton Museum of Art (free admission); Harry Ransom Center; LBJ Presidential Library. Walk through West Campus to see student housing environment.' },
  { q: 'How long should I plan for a UT Austin visit?', a: 'Minimum: half-day (4 hours) for tour + info session + campus walk. Recommended: full day (8 hours) for tour + info session + campus walk + student meal + neighborhood exploration + downtown Austin. Ideal: 2 days including weekend event or attending a class if possible.' },
  { q: 'Where should I stay when visiting UT Austin?', a: 'Hotels near UT: AT&amp;T Executive Education Center (on campus); The Line Hotel Austin (downtown); Fairmont Austin (downtown); Kimpton Hotel Van Zandt; Hyatt Regency Austin; Hilton Austin. Downtown hotels are 10-15 minute Uber from UT. Book 2-3 months in advance for peak visit times (fall football weekends, admitted students days).' },
  { q: 'What questions should I ask on a UT Austin campus visit?', a: 'Key questions: (1) What is class size for lower vs upper division? (2) What is student-to-faculty ratio? (3) What advising is available and how often can students meet with advisors? (4) How competitive is internal transfer to McCombs/CS/Cockrell? (5) What research opportunities exist for freshmen? (6) What is dorm assignment process? (7) Is there safety concern? (8) What is the residency pathway for OOS students?' },
  { q: 'Can I attend a class during a UT Austin visit?', a: 'Sometimes. Some professors allow prospective students to attend a lecture. Contact UT Office of Admissions to arrange; small seminar-style courses less accessible. Attending a large lecture (100+ students) is generally acceptable if arranged. Better for prospective students to attend info sessions and student-led events.' },
];

export default function CampusVisitPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Campus Visit Guide', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="Campus visit guide"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Campus Visit Guide</h1>}
        lede="Complete guide to visiting UT Austin: official tours, information sessions, self-guided visits, must-see campus locations, and how to plan a productive visit for prospective students and parents."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="Plan your UT visit">
            UT Austin offers <strong>official tours (60-75 min) and information sessions (60 min)</strong> through the Office of Admissions. Book at admissions.utexas.edu 4-8 weeks in advance. Best times: when classes are in session (Aug-May), weekdays. Recommended: full-day visit including tour + info session + campus walk + downtown Austin. Must-see: UT Tower, Main Building, South Mall, Bevo Statue, football stadium, Blanton Museum.
          </QuickAnswer>

          <AuthorBox blurb="Has hosted dozens of out-of-state UT families during their campus visits and helps plan efficient prospective-student trips." />

          <h2 className="mt-0">Official UT Austin campus tour</h2>
          <ul>
            <li><strong>Where to book:</strong> admissions.utexas.edu → Visit UT</li>
            <li><strong>Length:</strong> 60-75 minutes walking tour</li>
            <li><strong>Tour guide:</strong> current UT student</li>
            <li><strong>Content:</strong> campus history, key buildings, student life, traditions</li>
            <li><strong>Availability:</strong> weekdays (limited weekend availability)</li>
            <li><strong>Cost:</strong> free</li>
            <li><strong>Booking timing:</strong> 4-8 weeks in advance recommended</li>
          </ul>

          <h2>Information sessions</h2>
          <ul>
            <li><strong>Length:</strong> 60 minutes; typically hosted by Admissions Officer</li>
            <li><strong>Content:</strong> admissions criteria, application timeline, financial aid, honors programs</li>
            <li><strong>Availability:</strong> weekdays, some weekend</li>
            <li><strong>Cost:</strong> free</li>
            <li><strong>Best for:</strong> junior year of high school+</li>
          </ul>

          <h2>College-specific visits</h2>
          <p>Beyond the general campus tour, several UT colleges offer college-specific information sessions and tours:</p>
          <ul>
            <li><strong>McCombs Business:</strong> BBA information sessions, McCombs building tour</li>
            <li><strong>Cockrell Engineering:</strong> engineering student panels, lab tours</li>
            <li><strong>Computer Science:</strong> student panel, GDC (Gates-Dell Complex) tour</li>
            <li><strong>Moody Communication:</strong> facilities tour including CMB building</li>
            <li><strong>Natural Sciences:</strong> pre-med advising, HPO overview</li>
            <li><strong>Plan II Honors:</strong> Plan II student panel, HRC library tour</li>
          </ul>

          <h2>Self-guided visit checklist</h2>

          <h3>Central campus (main sights)</h3>
          <ul>
            <li>UT Tower (307 feet; lit orange for major wins)</li>
            <li>Main Building (also called Old Main)</li>
            <li>South Mall (main outdoor plaza)</li>
            <li>Bevo Statue photo opportunity</li>
            <li>Perry-Castañeda Library (undergraduate library)</li>
            <li>Blanton Museum of Art (free)</li>
            <li>Harry Ransom Center (Gutenberg Bible on display; free)</li>
            <li>LBJ Presidential Library (Lyndon B. Johnson museum)</li>
          </ul>

          <h3>Athletic and dining</h3>
          <ul>
            <li>Darrell K Royal-Texas Memorial Stadium (football; 100,000+ capacity)</li>
            <li>Frank Erwin Center (basketball; being replaced)</li>
            <li>UFCU Disch-Falk Field (baseball)</li>
            <li>Recreational Sports Center</li>
            <li>Kinsolving Dining Hall (visit during meal times)</li>
            <li>Jester Dining Hall (JCC)</li>
          </ul>

          <h3>Student housing (walk through West Campus)</h3>
          <ul>
            <li>Walk through West Campus neighborhood (immediately west of UT)</li>
            <li>See condo buildings (Skyloft, Inspire, 26 West, etc.)</li>
            <li>See student walking population and neighborhood character</li>
            <li>Consider stopping at popular food places (Halal Bros, Cabo Bobs, JuiceLand)</li>
          </ul>

          <h3>Beyond campus</h3>
          <ul>
            <li>Sixth Street (Austin nightlife)</li>
            <li>South Congress (SoCo shopping and food)</li>
            <li>Barton Springs Pool (natural spring-fed pool)</li>
            <li>Lady Bird Lake trail (10-mile trail around downtown)</li>
            <li>Texas State Capitol (historic building near UT)</li>
          </ul>

          <h2>Sample day itinerary</h2>

          <h3>Morning (9am - 12pm)</h3>
          <ul>
            <li>9:00am: Meet at UT Visitor Center</li>
            <li>9:30am: Campus tour (60-75 min)</li>
            <li>11:00am: Information session (60 min)</li>
          </ul>

          <h3>Lunch (12pm - 1pm)</h3>
          <ul>
            <li>Try Kinsolving Dining Hall or Jester JCC for student dining experience</li>
            <li>Alternative: West Campus food (Halal Bros, Madam Mam&apos;s)</li>
          </ul>

          <h3>Afternoon (1pm - 5pm)</h3>
          <ul>
            <li>Walk to West Campus; see student neighborhood</li>
            <li>Visit Blanton Museum of Art (30-60 min)</li>
            <li>Visit Harry Ransom Center (30-45 min)</li>
            <li>Walk through South Mall and photograph Tower</li>
            <li>Visit Darrell K Royal-Texas Memorial Stadium exterior</li>
          </ul>

          <h3>Evening (5pm+)</h3>
          <ul>
            <li>Dinner: Sixth Street, South Congress, or East Austin restaurant</li>
            <li>Walk Sixth Street to feel Austin nightlife (with parent supervision for high schoolers)</li>
            <li>Consider: BATS at South Congress Bridge (dusk) for iconic Austin experience</li>
          </ul>

          <h2>Key questions to ask during your visit</h2>
          <ul>
            <li>What is class size for lower-division vs upper-division courses?</li>
            <li>How available are professors during office hours?</li>
            <li>What academic support (advising, tutoring, mental health) is available?</li>
            <li>What is the freshman academic experience like?</li>
            <li>How competitive is internal transfer between colleges?</li>
            <li>What research opportunities exist for freshmen?</li>
            <li>What is the dorm assignment process and what are the best dorms?</li>
            <li>How safe is campus and West Campus?</li>
            <li>For OOS families: what is the residency pathway for reclassification?</li>
            <li>What career services and internship pipelines are available?</li>
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
              <li><Link href="/ut-austin-family-weekend-guide">Family Weekend guide</Link>: October game weekend</li>
              <li><Link href="/what-is-ut-austin-known-for">What UT is known for</Link>: reputation guide</li>
              <li><Link href="/moving-to-austin-from-out-of-state">Moving to Austin</Link>: for pathway families</li>
              <li><Link href="/ut-austin-freshman-year-guide">Freshman year guide</Link>: prep for enrollment</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-campus-visit" />
    </>
  );
}
