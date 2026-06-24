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

const TITLE = 'UT Austin Dorms: Every Residence Hall Compared (2026 Parent Guide)';
const DESCRIPTION = 'UT Austin dorm guide for parents: every residence hall compared. Jester, Whitis Court, Kinsolving, San Jacinto, Brackenridge, Andrews, Carothers, Creekside, Almetris Duren, plus traditional vs suite-style differences, costs, dining, and selection strategy.';
const PATH = '/ut-austin-dorms';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Does UT Austin require freshmen to live in dorms?', a: 'No. UT Austin does not require freshmen to live in on-campus residence halls. However, on-campus housing is strongly recommended for the first year for social integration and proximity to campus. Approximately 7,000 UT students live in residence halls each year; most are freshmen.' },
  { q: 'How do UT Austin dorm assignments work?', a: 'Housing applications open in late fall of senior year of high school. Submit through MyStatus. Residents rank their preferences across all residence halls. Assignments are made based on application timing (earlier = better chance at top preferences) and a lottery for over-subscribed halls. Specific room and roommate assignments are released in summer.' },
  { q: 'How much do UT Austin dorms cost?', a: 'Residence hall costs for 2025-26 range from approximately $11,000-$14,000/year for room rate, plus required meal plan of $4,800-$6,800/year. Total housing+meals: approximately $15,800-$20,300/year. Costs vary by hall type (traditional dorm vs suite vs apartment-style) and meal plan size. Newer halls (like Almetris Duren) run at the higher end.' },
  { q: 'What is the best dorm at UT Austin?', a: 'No single "best" dorm; depends on preferences. By type: Whitis Court (apartment-style, smaller, popular), Almetris Duren (newest, suite-style), San Jacinto (traditional, large, central), Jester (largest, dining hall on-site, freshmen-heavy), Kinsolving (largest sorority-favored, female only). Living-Learning Communities provide thematic experiences within halls. The "best" depends on what matters: location, social atmosphere, amenities, cost.' },
  { q: 'Are UT dorms co-ed?', a: 'Most UT residence halls are co-ed by floor. Some halls or wings are designated single-gender for those who prefer that arrangement. Kinsolving is female-only by tradition. Andrews is male-only by tradition. Within most co-ed halls, bathrooms are single-gender or single-occupancy.' },
  { q: 'What is a Living-Learning Community (LLC) at UT?', a: 'LLCs are themed residential communities within residence halls. Examples: Honors LLC (Plan II, BHP, Engineering Honors students), Pre-Med LLC, Business LLC, Bridging Disciplines LLC, Women in Natural Sciences LLC. LLC members share academic interests and live together with programming, faculty connections, and academic support. LLC participation requires separate application.' },
  { q: 'Can my UT student have a single room?', a: 'Some UT residence halls offer single rooms, but most freshman rooms are double-occupancy. Single rooms are more common in apartment-style halls (Whitis Court, Almetris Duren). Singles are more expensive than doubles. Most freshmen live in doubles for social integration.' },
  { q: 'Are UT dorms safe?', a: 'UT residence halls have card-access security, RA programming, and 24/7 campus security. Like most US college campuses, UT has security challenges: occasional theft, alcohol-related incidents, and other typical college environment issues. RAs (Resident Assistants) provide first-line support. UT Police Department serves the campus 24/7. Overall safety is comparable to peer urban college campuses.' },
];

export default function DormsPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Dorms', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Residence halls"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Dorms</h1>}
        lede="A parent's guide to every UT residence hall: traditional vs suite-style, costs, dining options, Living-Learning Communities, and selection strategy."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The dorm picture">
            UT Austin has approximately 14 residence halls housing ~7,000 students (mostly freshmen). Halls range from traditional (Jester, Kinsolving, San Jacinto) to suite-style (Whitis Court, Almetris Duren) to single-gender (Kinsolving female-only, Andrews male-only). Cost: <strong>$11,000-$14,000/year</strong> room + <strong>$4,800-$6,800/year</strong> meal plan. UT does not require freshmen to live on-campus, but most do.
          </QuickAnswer>

          <AuthorBox blurb="Has helped UT-bound families navigate the dorm selection process and weigh on-campus vs off-campus living for freshman year." />

          <h2 className="mt-0">UT Austin residence halls at a glance</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Hall</th>
                  <th>Type</th>
                  <th>Capacity</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Jester (East + West + Center)</td><td>Traditional</td><td className="num">~2,800</td><td>Largest; dining hall on-site; freshmen-heavy</td></tr>
                <tr><td>San Jacinto</td><td>Traditional</td><td className="num">~800</td><td>Central campus; traditional rooms</td></tr>
                <tr><td>Kinsolving</td><td>Traditional</td><td className="num">~660</td><td>Female-only; sorority-favored; rec center adjacent</td></tr>
                <tr><td>Andrews</td><td>Traditional</td><td className="num">~330</td><td>Male-only; traditional</td></tr>
                <tr><td>Brackenridge</td><td>Traditional</td><td className="num">~270</td><td>Smaller historic hall</td></tr>
                <tr><td>Roberts</td><td>Traditional</td><td className="num">~270</td><td>Smaller historic hall</td></tr>
                <tr><td>Prather</td><td>Traditional</td><td className="num">~270</td><td>Smaller historic hall</td></tr>
                <tr><td>Carothers</td><td>Traditional</td><td className="num">~250</td><td>Small co-ed</td></tr>
                <tr><td>Littlefield</td><td>Traditional</td><td className="num">~250</td><td>Historic hall</td></tr>
                <tr><td>Whitis Court</td><td>Suite-style</td><td className="num">~360</td><td>Apartment-style; popular for upperclass; suite living</td></tr>
                <tr><td>Almetris Duren</td><td>Suite-style</td><td className="num">~600</td><td>Newest (2007); suite-style; modern amenities</td></tr>
                <tr><td>Creekside</td><td>Suite-style</td><td className="num">~210</td><td>Smaller suite hall</td></tr>
                <tr><td>Moore-Hill</td><td>Traditional</td><td className="num">~270</td><td>Male-only traditional</td></tr>
              </tbody>
            </table>
          </div>

          <h2>By residence hall type</h2>

          <h3>Traditional dorm rooms</h3>
          <p>Standard double-occupancy room with shared bathroom on the hall floor. Most freshmen live in this style. Halls: Jester, San Jacinto, Kinsolving, Andrews, Brackenridge, Roberts, Prather, Carothers, Littlefield, Moore-Hill.</p>
          <ul>
            <li><strong>Pros:</strong> classic college dorm experience; cheaper; more social interaction</li>
            <li><strong>Cons:</strong> less privacy; shared bathrooms; more noise</li>
            <li><strong>Cost:</strong> $11,000-$12,500/year</li>
          </ul>

          <h3>Suite-style</h3>
          <p>Two or more bedrooms sharing a private bathroom. More privacy than traditional dorms. Halls: Whitis Court, Almetris Duren, Creekside.</p>
          <ul>
            <li><strong>Pros:</strong> private or shared bathroom (no hall bathroom); more privacy; more amenities</li>
            <li><strong>Cons:</strong> more expensive; less spontaneous social interaction with neighbors</li>
            <li><strong>Cost:</strong> $13,000-$14,000/year</li>
          </ul>

          <h2>Living-Learning Communities (LLCs)</h2>
          <p>UT offers themed residential communities for students who want academic-residential integration:</p>
          <ul>
            <li><strong>Honors LLC:</strong> Plan II, BHP, Engineering Honors, Liberal Arts Honors students live together</li>
            <li><strong>Bridging Disciplines LLC:</strong> interdisciplinary academic interest</li>
            <li><strong>Pre-Med LLC:</strong> Health Sciences focused community</li>
            <li><strong>Business LLC:</strong> McCombs admits</li>
            <li><strong>Women in Natural Sciences LLC:</strong> women in STEM</li>
            <li><strong>International LLC:</strong> domestic and international students</li>
            <li><strong>UTeach LLC:</strong> education-track students</li>
            <li><strong>Bilingual LLC:</strong> Spanish-English focus</li>
            <li><strong>Application:</strong> separate application alongside housing application; meaningful selectivity for some LLCs</li>
          </ul>

          <h2>Dining at UT residence halls</h2>
          <ul>
            <li><strong>Required meal plans for residence hall residents:</strong> Block (10, 14, or 20 meals/week) or Bevo Bucks (declining-balance)</li>
            <li><strong>Annual meal plan cost:</strong> $4,800-$6,800 depending on plan</li>
            <li><strong>Dining locations:</strong> J2 (Jester dining hall), Kinsolving Dining, Cypress Bend Cafe, Cypress Bend Late Night, multiple grab-and-go and retail options</li>
            <li><strong>Dietary accommodations:</strong> vegetarian, vegan, gluten-free, kosher, halal options available</li>
            <li><strong>Off-meal-plan alternatives:</strong> students can use Bevo Bucks at on-campus retail locations and West Campus eateries</li>
          </ul>

          <h2>Off-campus alternatives for freshman year</h2>
          <p>Some freshmen choose off-campus housing in West Campus instead of residence halls:</p>
          <ul>
            <li><strong>West Campus apartments:</strong> $1,400-$2,200/month per bedroom in shared 2-3BR; walkable to campus; significant freshman population</li>
            <li><strong>Pros:</strong> more privacy; no required meal plan; learning to live independently</li>
            <li><strong>Cons:</strong> less freshman social integration; lacking the shared on-campus freshman experience; potentially more expensive</li>
            <li><strong>For parents purchasing property:</strong> see <Link href="/buying-property-in-texas-for-residency">buying property in Texas for residency</Link> for the buy-vs-rent analysis with residency pathway considerations</li>
          </ul>

          <h2>How to maximize dorm preferences</h2>
          <ol>
            <li><strong>Apply early.</strong> Housing applications open in late fall of senior year. Earlier submission = higher chance of preferred halls.</li>
            <li><strong>Rank realistically.</strong> Top-tier halls (Whitis Court, Almetris Duren) are over-subscribed. List both top preferences and acceptable backups.</li>
            <li><strong>Consider LLC application.</strong> Some LLCs guarantee specific halls; LLC application can lock in your preferred hall.</li>
            <li><strong>Roommate strategy:</strong> Apply with a known roommate if you have a strong preference; this guarantees you live together (if both applications succeed).</li>
            <li><strong>Visit during admitted-student events.</strong> If possible, tour the halls during Texas Admit Day or other admitted-student programs.</li>
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
              <li><Link href="/ut-austin-housing-guide">UT Austin housing guide</Link>: full housing options including off-campus</li>
              <li><Link href="/ut-austin-cost-of-living-austin">Cost of living in Austin</Link>: housing budget context</li>
              <li><Link href="/ut-austin-greek-life">Greek life</Link>: alternative housing through chapter houses</li>
              <li><Link href="/condos-near-ut">Condos near UT</Link>: ownership alternative for residency pathway</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-dorms" />
    </>
  );
}
