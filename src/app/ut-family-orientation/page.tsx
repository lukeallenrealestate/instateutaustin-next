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

const TITLE = 'UT Family Orientation 2026: Dates, Registration, What to Expect';
const DESCRIPTION = 'UT Austin Family Orientation runs alongside New Student Orientation (NSO) in May, June, and July 2026. Schedule, registration, what parents actually get out of it, and how to make the most of the in-person sessions.';
const PATH = '/ut-family-orientation';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is UT Family Orientation?', a: 'Family Orientation is a UT Austin program that runs alongside New Student Orientation (NSO). While the incoming student attends two days of academic advising, registration, and campus introduction, parents and family members attend a parallel one- to two-day program with sessions on academic expectations, financial aid, housing, residency, safety, health services, and the broader UT experience. The program is administered by University Compass.' },
  { q: 'When is UT Family Orientation 2026?', a: 'UT typically runs orientation sessions throughout May, June, and July. Specific Family Orientation dates align with each student\'s assigned NSO session. Common Family Orientation dates for 2026 are in early-to-mid June and mid-July; exact dates are published in MyStatus alongside the student\'s NSO assignment.' },
  { q: 'Is UT Family Orientation required?', a: 'No. The student\'s NSO attendance is mandatory; the parent Family Orientation track is optional. Most out-of-state parents attending NSO with their student also attend Family Orientation as a low-cost way to understand the UT experience. Parents who cannot travel for the in-person dates can attend a virtual Family Orientation session.' },
  { q: 'How much does UT Family Orientation cost?', a: 'The Family Orientation fee is approximately $50-$75 per parent for the in-person program (covers materials and any meals included). Travel, hotels, and other costs are separate. The virtual option is typically free.' },
  { q: 'Where do parents stay during UT Family Orientation in Austin?', a: 'Common options: the AT&T Hotel and Conference Center on UT\'s campus (most convenient but books up early); the Stephen F. Austin or Driskill downtown (10-minute drive); the Hilton Garden Inn or Hampton Inn downtown; or short-term-rental properties on Vrbo and Airbnb in West Campus or Hyde Park. Book 2-3 months in advance for summer orientation dates.' },
  { q: 'What should I bring to UT Family Orientation?', a: 'Comfortable walking shoes (campus tours involve a lot of walking), a sweater or light jacket (most indoor sessions are heavily air-conditioned), a water bottle, a notebook, and any questions about your specific student\'s situation (major-specific concerns, financial aid questions, residency questions for out-of-state families). The official program book and a campus map are provided at check-in.' },
  { q: 'Will my child attend UT Family Orientation with me?', a: 'No. The student is in parallel sessions during the day. Most Family Orientation programs include one shared dinner or reception so the family can reconnect, but the daytime tracks are separate by design.' },
  { q: 'Should we ask about residency at Family Orientation?', a: 'You can, but the Family Orientation sessions cover residency at a high level. For specific questions about establishing Texas residency for in-state tuition, schedule a separate appointment with UT\'s Office of Admissions Residency Determination or read the Texas Education Code §54.052 framework on our site. Family Orientation staff are not residency specialists.' },
];

export default function FamilyOrientationPage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'UT Family Orientation', path: PATH },
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
        eyebrow="UT Austin · For parents"
        title={<h1 className="text-ink max-w-[22ch]">UT Family Orientation 2026</h1>}
        lede="Dates, registration, hotel logistics, what parents actually get out of it, and the questions worth asking during the in-person program."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The 60-second answer">
            UT Family Orientation is a parallel parent track that runs alongside the student&apos;s mandatory New Student Orientation (NSO) in May, June, and July. The fee is approximately <strong>$50-$75 per parent</strong> for in-person, free virtually. Dates align with your student&apos;s assigned NSO session. The program covers academic expectations, financial aid, housing, safety, and the broader UT experience. For out-of-state families, the most useful Family Orientation tracks are the financial aid session and any breakout on residency, though specific residency questions are better handled separately. Book travel and hotels 2-3 months in advance.
          </QuickAnswer>

          <AuthorBox blurb="Has helped many out-of-state UT families through their first UT visit, including the Family Orientation experience and the related questions about housing, residency, and the broader Austin transition." />

          <h2 className="mt-0">What Family Orientation actually covers</h2>
          <p>The Family Orientation program is structured to give parents a guided introduction to UT&apos;s academic culture, support services, and operational mechanics that the student will navigate over the next four years. Typical session topics:</p>

          <ul>
            <li><strong>Academic expectations and advising:</strong> How UT&apos;s academic year works, how to read a transcript, how the grading system functions, how advising is structured at the college level.</li>
            <li><strong>Financial aid and billing:</strong> Overview of how UT bills tuition, how aid is disbursed, the Texas Advance Commitment and Texas Empowerment programs for Texas residents, federal aid for non-residents, payment plans, and refund schedules. The single most useful session for cost-conscious parents.</li>
            <li><strong>Housing options:</strong> On-campus halls vs. off-campus options, move-in logistics, residence hall life. Less useful if you already have housing figured out.</li>
            <li><strong>Health and counseling services:</strong> University Health Services, Counseling and Mental Health Center (CMHC), the Academic Health Plan, what to do if your student gets sick.</li>
            <li><strong>Campus safety:</strong> UT Police, the Code Blue emergency phone network, late-night transit options, SafeRide, the SURE Walk program. Worth attending if your student is from a smaller city.</li>
            <li><strong>The Texas Exes alumni network:</strong> Overview of the alumni community, regional chapters (especially relevant for out-of-state families who want a connection back home), and the Texas Exes scholarships.</li>
            <li><strong>Q&A breakouts:</strong> Smaller-group sessions for specific topics or by college. A good opportunity for college-specific questions (Cockrell Engineering, McCombs, Computer Science, etc.).</li>
          </ul>

          <h2>The most useful sessions for out-of-state families</h2>

          <h3>Financial Aid session</h3>
          <p>Even if your family is unlikely to qualify for need-based aid, the session is worth attending. UT&apos;s billing cycle, the FAFSA timeline, the way aid is applied to the bill, and the rules for partial-year situations all matter. This is also where you will get the clearest picture of which scholarships your student might be eligible for as a continuing student.</p>

          <h3>Out-of-State or Residency session (if offered)</h3>
          <p>Some Family Orientation sessions include a breakout on residency for tuition purposes. If your family is considering the Texas residency pathway, attend this — but be aware that the session typically covers the rules at a 30,000-foot level. For specific guidance on the property pathway, the 12-month domicile clock, or your particular family situation, you will want either the <Link href="/texas-residency-rules">written rules</Link> or a separate appointment with UT&apos;s Office of Admissions Residency Determination.</p>

          <h3>Campus tour</h3>
          <p>If you have not toured campus before, the Family Orientation campus tour is your best opportunity. The walking tour covers academic buildings by college, residence halls, the union, recreation facilities, and the broader Forty Acres geography. Plan to wear comfortable shoes; the campus is large.</p>

          <h2>Family Orientation logistics</h2>

          <h3>Dates and registration</h3>
          <p>Family Orientation sessions are scheduled in conjunction with the student&apos;s assigned NSO. Common 2026 windows: early-to-mid June (for students attending the first NSO sessions) and mid-July (for students attending later NSO sessions). Specific dates appear in MyStatus once the student is admitted and confirms enrollment.</p>

          <p>Registration opens via University Compass in MyStatus. Parents register separately from the student (the student is auto-registered for NSO). Multiple parents and family members can attend; each pays their own fee.</p>

          <h3>Hotels and accommodations</h3>
          <p>Austin hotels book up for summer NSO weekends. Recommended booking horizon: 8-12 weeks ahead. Options:</p>

          <ul>
            <li><strong>AT&amp;T Hotel and Conference Center</strong> (on campus): The most convenient option, located steps from the main campus. Books up first. Typically $250-$400/night during NSO season.</li>
            <li><strong>The Driskill</strong> (downtown): Historic Austin hotel, 10-minute drive to campus. $300-$500/night.</li>
            <li><strong>Stephen F. Austin Royal Sonesta</strong> (downtown): Closer to UT than the Driskill. $250-$400/night.</li>
            <li><strong>Hilton Garden Inn Downtown</strong> or <strong>Hampton Inn Downtown</strong>: Mid-range, $180-$300/night.</li>
            <li><strong>Short-term rentals (Vrbo, Airbnb)</strong> in West Campus, Hyde Park, or East Austin: $200-$400/night for an apartment or house.</li>
          </ul>

          <h3>What to bring</h3>
          <ul>
            <li>Comfortable walking shoes (campus tour involves significant walking)</li>
            <li>Light sweater or jacket (indoor sessions are heavily air-conditioned)</li>
            <li>Water bottle</li>
            <li>Notebook or device for taking notes</li>
            <li>Photo ID for check-in</li>
            <li>List of specific questions about your student&apos;s major or situation</li>
            <li>Sunglasses and sunscreen (Austin in June and July is hot)</li>
          </ul>

          <h2>Questions worth asking at Family Orientation</h2>
          <p>The orientation staff and breakout session facilitators are knowledgeable about general UT operations. Specific questions worth asking:</p>

          <ul>
            <li>What is the process if my student needs to change majors or transfer within UT?</li>
            <li>What is the average graduation time for [my student&apos;s major]?</li>
            <li>What are the most popular internship and co-op options for [major]?</li>
            <li>What mental health resources are available, and how does my student access them?</li>
            <li>How does academic advising work in [college]?</li>
            <li>What are the most common reasons students change residency status, and how should we think about it for our family?</li>
            <li>What scholarships should we apply for in years 2-4 as a continuing student?</li>
          </ul>

          <h2>What Family Orientation is not the right place for</h2>
          <p>Some questions are better handled outside Family Orientation:</p>

          <ul>
            <li><strong>Specific residency-for-tuition questions:</strong> The Office of Admissions Residency Determination handles these via the MyStatus portal. Family Orientation staff can only point you to the right office.</li>
            <li><strong>Financial aid offer details:</strong> If you have a specific aid offer in hand and want it explained, schedule a separate appointment with the Office of Financial Services.</li>
            <li><strong>Housing waitlist questions:</strong> University Housing handles these directly.</li>
            <li><strong>Pre-existing medical or accessibility needs:</strong> Services for Students with Disabilities (SSD) is the right office.</li>
          </ul>

          <h2>If you cannot attend in person</h2>
          <p>UT runs a virtual Family Orientation session that covers most of the same material. It is free (vs the $50-$75 in-person fee), but you miss the campus tour and the in-person breakouts. For out-of-state families balancing cost and travel logistics, the virtual option is a reasonable substitute, especially if you have visited UT during the admit-weekend tours in March or April.</p>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Related reading for UT parents</h2>
            <ul>
              <li><Link href="/parent-guide">The Parent Guide to UT Austin</Link> (full guide including key dates)</li>
              <li><Link href="/ut-austin-housing-guide">UT Austin housing guide</Link></li>
              <li><Link href="/texas-residency-rules">Texas residency rules (for out-of-state families)</Link></li>
              <li><Link href="/ut-austin-cost-of-attendance">Full cost of attendance</Link></li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-family-orientation" />
    </>
  );
}
