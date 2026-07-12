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

const TITLE = 'UT Austin vs Community College Transfer: Cost + Career Comparison';
const DESCRIPTION = `UT Austin vs community college transfer strategy: cost, career outcomes, and pathway analysis. Texas community college to UT Austin can save $100K+ vs 4-year OOS UT while establishing Texas residency simultaneously.`;
const PATH = '/ut-austin-vs-community-college-transfer';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Is community college transfer to UT Austin a good strategy?', a: 'Yes, for cost-focused families. Attending a Texas community college (Austin Community College, Lone Star College, Houston Community College) for 1-2 years, establishing Texas residency during that time, then transferring to UT Austin at the resident tuition rate can save $100,000+ over the 4-year cost of full out-of-state UT. The pathway is well-established with articulation agreements at UT.' },
  { q: 'What is the difference in cost between UT Austin direct admit vs community college transfer?', a: `Four-year cost comparison: (1) UT Austin direct admit as OOS: ~$300,000 (4 years at OOS rate + housing). (2) UT Austin direct admit + Texas residency pathway: ~$210,000 (1 year OOS + 3 years in-state). (3) Texas community college + UT transfer as in-state: ~$120,000 (2 years CC + 2 years UT). (4) UT Austin as Texas resident direct admit (freshman): ~$140,000. Community college pathway is cheapest overall.` },
  { q: 'Will community college affect my career after graduation?', a: 'For most careers, no. UT graduates who transferred from community college receive the same UT degree as direct freshman admits. Employers see "University of Texas at Austin" on the degree without distinction. Some elite tracks (top consulting, investment banking) can be more difficult to access via transfer due to on-campus recruiting timing; direct-admit freshmen have 4 years to build UT relationships and network.' },
  { q: 'Can community college transfer students get into McCombs Business or UT CS?', a: 'Difficult. McCombs and UT CS transfer acceptance rates are very low (~10-15% for McCombs, ~5-10% for CS). Community college applicants competing for these programs need 3.9+ college GPA, completion of specific prerequisites, and substantive business/technical experience. Most community college transfers to UT go into Liberal Arts, Natural Sciences, or Communication.' },
  { q: 'What is the best Texas community college for UT Austin transfer?', a: 'Austin Community College (ACC) has the strongest UT transfer pipeline given proximity and established articulation agreements. Other strong options: Lone Star College (Houston area), Houston Community College (HCC), San Jacinto College. Under the Texas Common Course Numbering System, credits from any accredited Texas community college transfer to UT.' },
  { q: 'Can I establish Texas residency during community college attendance?', a: 'Yes, and this is often the primary financial advantage. During 1-2 years at Texas community college, the family can execute the standard Texas residency pathway: purchase Texas property (or rent), obtain Texas driver\'s license, register vehicle, register to vote, file federal tax return with Texas address. By the time the student transfers to UT, they are already classified as a Texas resident and pay in-state tuition from day one.' },
  { q: 'How long does community college to UT transfer take?', a: 'Typical timeline: 2 years at community college (freshman + sophomore equivalent, completing ~60 transferable credits), then transfer to UT for junior + senior years (60 more credits). Total: 4 years for bachelor\'s degree. Some students complete community college in 3 semesters (accelerated) and transfer earlier; others take 3 years at community college before transferring.' },
];

export default function CommunityCollegeTransferPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin vs Community College Transfer', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="Decision analysis"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin vs Community College Transfer</h1>}
        lede="Community college to UT Austin transfer strategy: cost, career outcomes, and pathway analysis. Can save $100K+ vs direct OOS UT while establishing Texas residency."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The strategic comparison">
            Community college to UT Austin transfer is the cheapest pathway to a UT degree: <strong>~$120,000 total</strong> (2 years CC + 2 years UT in-state) vs <strong>~$300,000</strong> for direct OOS admit at full sticker. Downsides: harder to access McCombs or UT CS transfer; less freshman social integration. Best for: cost-focused families comfortable with community college freshman/sophomore years, especially when the community college time is used to establish Texas residency for in-state UT tuition.
          </QuickAnswer>

          <AuthorBox blurb="Has helped families evaluate whether community college transfer or direct UT admit fits their student and financial situation." />

          <h2 className="mt-0">The four-year cost comparison</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Pathway</th>
                  <th>4-Year Cost</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>UT direct admit, OOS full sticker</td><td className="num">~$300,000</td><td>Highest cost</td></tr>
                <tr><td>UT direct admit + Texas residency pathway</td><td className="num">~$210,000</td><td>1 yr OOS + 3 yrs in-state</td></tr>
                <tr><td>UT direct admit as Texas resident</td><td className="num">~$140,000</td><td>Cheapest direct admit</td></tr>
                <tr><td>Texas CC + UT transfer as Texas resident</td><td className="num">~$120,000</td><td>2 yrs CC ~$8K + 2 yrs UT ~$70K</td></tr>
                <tr><td>Texas CC + UT transfer as OOS</td><td className="num">~$210,000</td><td>2 yrs CC OOS + 2 yrs UT OOS</td></tr>
              </tbody>
            </table>
          </div>

          <h2>The community college + Texas residency + UT transfer pathway</h2>
          <p>This is the cheapest strategic pathway for OOS families to a UT degree. The steps:</p>
          <ol>
            <li><strong>Move to Texas summer before "freshman year"</strong> (acquire property or lease, obtain documentary set)</li>
            <li><strong>Enroll at Texas community college</strong> (Austin Community College is closest to UT)</li>
            <li><strong>Complete freshman + sophomore prerequisites</strong> at community college (typically 60 credits, 2 years)</li>
            <li><strong>Establish Texas residency</strong> during community college years through standard documentary indicia</li>
            <li><strong>Apply for UT transfer</strong> (deadline March 1 for fall transfer)</li>
            <li><strong>Transfer to UT as Texas resident</strong> for junior + senior years at in-state rate</li>
            <li><strong>Complete UT degree</strong> in 2 years at UT</li>
          </ol>

          <p><strong>Total cost:</strong> ~$16,000 (community college 2 years) + ~$70,000 (UT in-state 2 years including COA) + ~$34,000 (living expenses during community college) = <strong>~$120,000 for a UT bachelor&apos;s degree</strong>.</p>

          <h2>Community college pros and cons</h2>

          <h3>Community college pros</h3>
          <ul>
            <li>Dramatically lower cost ($3K-$5K/year vs $45K OOS at UT)</li>
            <li>Small class sizes for lower-division courses (better instruction quality for many students)</li>
            <li>Easier academic transition from high school</li>
            <li>Flexible scheduling</li>
            <li>Time to establish Texas residency without paying UT OOS tuition</li>
            <li>UT transfer as Texas resident dramatically reduces total cost</li>
          </ul>

          <h3>Community college cons</h3>
          <ul>
            <li>Miss freshman year at UT (social integration, friendships, residence hall)</li>
            <li>Harder access to McCombs, CS, Cockrell selective programs via transfer</li>
            <li>Miss freshman/sophomore year on-campus recruiting for elite career tracks</li>
            <li>Some credits may not transfer fully</li>
            <li>Less UT-specific advising during freshman years</li>
          </ul>

          <h2>Best community colleges for UT Austin transfer</h2>

          <h3>Austin Community College (ACC)</h3>
          <ul>
            <li>Multiple campuses across Austin metro</li>
            <li>Strongest UT transfer pipeline</li>
            <li>ACC has articulation agreements with UT for many programs</li>
            <li>Student can live in Austin during CC years, then transfer to UT</li>
            <li>Tuition: ~$100/credit hour for in-district residents</li>
          </ul>

          <h3>Other strong Texas community colleges</h3>
          <ul>
            <li><strong>Lone Star College (Houston area):</strong> large system with strong UT transfer</li>
            <li><strong>Houston Community College (HCC):</strong> similar profile</li>
            <li><strong>Dallas College (formerly DCCCD):</strong> Dallas area</li>
            <li><strong>San Jacinto College (Pasadena):</strong> Houston area</li>
            <li><strong>Collin College (Plano):</strong> Dallas suburbs</li>
          </ul>

          <h2>Who this strategy is right for</h2>
          <ul>
            <li>Cost-focused families where saving $100K+ is a priority</li>
            <li>Students in Liberal Arts, Natural Sciences, or Communication majors (transfer more accessible)</li>
            <li>Students comfortable with community college freshman/sophomore years</li>
            <li>Families with capital to move to Texas and establish residency</li>
            <li>Students who don&apos;t require freshman on-campus experience</li>
          </ul>

          <h2>Who this strategy is NOT right for</h2>
          <ul>
            <li>Students targeting McCombs Business or UT Computer Science (transfer very competitive)</li>
            <li>Students pursuing top-tier finance or consulting careers (on-campus recruiting matters)</li>
            <li>Students who value freshman year residence hall + social experience</li>
            <li>Students who won&apos;t thrive in community college academic environment</li>
            <li>Families where cost is not a primary decision factor</li>
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
              <li><Link href="/ut-austin-transfer-admission">UT transfer admission</Link>: full transfer process</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the residency pathway</li>
              <li><Link href="/ut-austin-4-year-cost-out-of-state">4-year cost analysis</Link>: all pathways compared</li>
              <li><Link href="/is-ut-austin-worth-it-out-of-state">Is UT worth it OOS</Link>: value analysis</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-cc-transfer" />
    </>
  );
}
