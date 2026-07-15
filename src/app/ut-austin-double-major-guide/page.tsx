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

const TITLE = 'UT Austin Double Major Guide: Popular Combos + Requirements (2026)';
const DESCRIPTION = 'UT Austin double major guide: popular combinations (McCombs + Plan II, CS + Math, Government + Business, Music + BA), credit requirements, 4-year vs 5-year completion, and how it affects career trajectory.';
const PATH = '/ut-austin-double-major-guide';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Can you double major at UT Austin?', a: 'Yes. UT Austin students can pursue double majors across colleges. Approximately 20-25% of UT students double major. Requirements: complete all requirements of both majors; typically requires 120-150 credit hours total (vs 120 for single major); may extend graduation to 4.5-5 years depending on major combination.' },
  { q: 'What are popular UT Austin double majors?', a: 'Popular combinations: (1) Plan II Honors + [any specific major] - very common as Plan II is designed to combine; (2) McCombs BBA + Plan II - business + liberal arts breadth; (3) Computer Science + Mathematics - deep quantitative combination; (4) Computer Science + [business major] - tech + business; (5) Government + Economics - policy focus; (6) Music + [second major] - musical breadth with backup career; (7) Engineering + Business - technical + management.' },
  { q: 'How does double major affect graduation time at UT Austin?', a: 'Depends on major combination. Well-matched majors (Plan II + specific major, related sciences) often complete in 4 years. Distant majors (Engineering + Music, McCombs + STEM) typically require 4.5-5 years. Some students strategically use summer sessions or AP credits to accelerate. Longer graduation increases total cost.' },
  { q: 'Can I double major across UT colleges?', a: 'Yes but complicated. Double majoring across colleges (e.g., McCombs BBA + Cockrell Engineering BS) requires meeting requirements of both colleges. Some cross-college combinations require special approval or additional application. Plan II Honors is designed for cross-college combinations. Talk to academic advisors in both target colleges before committing.' },
  { q: 'Is double majoring worth it at UT Austin?', a: 'Depends on goals. Pros: broader intellectual foundation, versatile career options, distinctive resume, prepare for interdisciplinary careers. Cons: extended time/cost, less flexibility for electives, more coursework pressure, may prevent study abroad or other experiences. Best for: students with clear reasons to combine two fields (e.g., pre-med + humanities for medical humanities; CS + business for tech leadership; music + education for teaching).' },
  { q: 'What about double majoring vs double degree at UT?', a: 'Double major: one degree with two majors listed on transcript (typically same college or combining Plan II). Double degree: two separate degrees from two colleges (e.g., BBA + BA); requires more credits and time; each degree fully completed. Double degree adds prestige and completeness but takes longer.' },
];

export default function DoubleMajorPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Double Major Guide', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Academic planning"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Double Major Guide</h1>}
        lede="Complete guide to double majoring at UT Austin: popular combinations, credit requirements, 4-year vs 5-year completion, cross-college challenges, and career impact."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="Double majoring at UT">
            Approximately <strong>20-25% of UT students double major</strong>. Popular combinations: Plan II + any major; McCombs BBA + Plan II; CS + Mathematics; CS + Economics; Government + Economics. Well-matched combinations complete in 4 years; distant majors require 4.5-5 years. Cross-college double majors possible but complex.
          </QuickAnswer>

          <AuthorBox blurb="Helps UT students think through double major decisions and their impact on graduation timeline and career trajectory." />

          <h2 className="mt-0">Popular UT Austin double major combinations</h2>

          <h3>Plan II Honors + specific major</h3>
          <p>Plan II is specifically designed to combine with another major. Common pairings:</p>
          <ul>
            <li>Plan II + Government (public policy track)</li>
            <li>Plan II + Economics (analytical + humanities)</li>
            <li>Plan II + Biology (pre-med with humanities depth)</li>
            <li>Plan II + Computer Science (rare but distinctive)</li>
            <li>Plan II + McCombs BBA (business + liberal arts)</li>
          </ul>

          <h3>Business + Liberal Arts</h3>
          <ul>
            <li>McCombs BBA (any major) + Plan II Honors</li>
            <li>McCombs BBA + Government (business + policy)</li>
            <li>McCombs BBA + Economics (finance-focused)</li>
            <li>McCombs BBA + Spanish (international business)</li>
          </ul>

          <h3>STEM + STEM</h3>
          <ul>
            <li>Computer Science + Mathematics (deep quantitative)</li>
            <li>Computer Science + Physics</li>
            <li>Biology + Chemistry (pre-med foundation)</li>
            <li>Mathematics + Physics</li>
            <li>Engineering + Mathematics or Physics</li>
          </ul>

          <h3>STEM + Business</h3>
          <ul>
            <li>Computer Science + McCombs MIS (tech + business systems)</li>
            <li>Cockrell Engineering + McCombs BBA (technical + management)</li>
            <li>Data Science + McCombs Finance (quant + finance)</li>
          </ul>

          <h3>Interdisciplinary combinations</h3>
          <ul>
            <li>Government + Economics (policy analysis)</li>
            <li>History + Government (constitutional/political)</li>
            <li>Music + Music Education (performance + teaching)</li>
            <li>Communication + Business (marketing/media)</li>
          </ul>

          <h2>Requirements and structure</h2>
          <ul>
            <li><strong>Credit requirements:</strong> ~120 credits for single major; ~135-150 for double major (varies)</li>
            <li><strong>Overlap allowed:</strong> some coursework may fulfill requirements in both majors (typically limited to core curriculum + selected electives)</li>
            <li><strong>Time to completion:</strong> 4 years for well-matched majors with AP credits or summer sessions; 4.5-5 years for distant majors</li>
            <li><strong>Approval process:</strong> declare each major separately with respective department; some combinations require special approval</li>
            <li><strong>Advisor coordination:</strong> need advisors in both majors; degree audit tracks progress in both</li>
          </ul>

          <h2>Career impact of double major</h2>

          <h3>Positive career impact</h3>
          <ul>
            <li><strong>Interdisciplinary careers:</strong> combines two fields (e.g., tech + business for product management)</li>
            <li><strong>Broader employer signal:</strong> demonstrates intellectual capacity and work ethic</li>
            <li><strong>Distinctive resume:</strong> stands out from single-major candidates</li>
            <li><strong>Graduate school preparation:</strong> deeper foundation for interdisciplinary graduate work</li>
            <li><strong>Career flexibility:</strong> multiple entry paths into workforce</li>
          </ul>

          <h3>Potential downsides</h3>
          <ul>
            <li><strong>Extended time and cost:</strong> extra semester or year of tuition, housing, expenses</li>
            <li><strong>Less flexibility:</strong> less room for study abroad, internships, or exploratory electives</li>
            <li><strong>Depth vs breadth tradeoff:</strong> may not achieve same depth as focused single major</li>
            <li><strong>Employer perception:</strong> some employers value depth over breadth</li>
            <li><strong>Academic pressure:</strong> more coursework, potentially lower GPA if overloaded</li>
          </ul>

          <h2>Alternatives to double major</h2>

          <h3>Minor</h3>
          <p>Complete a minor (18-21 credits) in a second field instead of full double major. Less credit-intensive; still shows breadth. Common combinations: any major + minor in Business Foundations, Computer Science, Statistics, or Spanish.</p>

          <h3>Certificate</h3>
          <p>UT offers certificates (12-18 credits) in specific areas: Entrepreneurship, Ethics, Business Foundations, Digital Arts, Public Policy, and many others. Certificates on transcript demonstrate specialized knowledge.</p>

          <h3>Dual degree</h3>
          <p>Two separate degrees (e.g., BBA + BA); more prestigious than double major but requires more credits (~180 total) and typically 5 years. Distinct from double major.</p>

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
              <li><Link href="/ut-austin-honors-programs">Plan II Honors</Link>: designed for double majoring</li>
              <li><Link href="/by-college">By UT college</Link>: explore all major options</li>
              <li><Link href="/ut-austin-graduate-outcomes">Graduate outcomes</Link>: career impact of majors</li>
              <li><Link href="/ut-austin-4-year-cost-out-of-state">4-year cost</Link>: consider extended graduation cost</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-double-major" />
    </>
  );
}
