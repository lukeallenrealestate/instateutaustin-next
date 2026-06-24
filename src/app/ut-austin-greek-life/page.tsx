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

const TITLE = 'UT Austin Greek Life: Sororities, Fraternities, Rush, Costs (Parent Guide)';
const DESCRIPTION = 'UT Austin Greek life guide for parents: 50+ fraternities and sororities, rush process and timing, recruitment requirements, costs ($2K-$8K/year dues), pros and cons, and what to know about West Campus Greek culture.';
const PATH = '/ut-austin-greek-life';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'How big is Greek life at UT Austin?', a: 'Approximately 18-20% of UT Austin undergraduates participate in Greek life, with approximately 8,000-9,000 active members across 50+ fraternities and sororities. The Panhellenic Council (sororities) and Interfraternity Council (fraternities) are the largest organizations. Multicultural Greek Council (MGC) and National Pan-Hellenic Council (NPHC) chapters also have meaningful presence. Greek life is significant but not dominant at UT (unlike at some smaller schools where Greek participation is 40-60%).' },
  { q: 'When is Greek rush at UT Austin?', a: 'Panhellenic sorority recruitment is highly structured: formal recruitment occurs in early-mid August during the week before fall classes begin (sometimes called "Bid Week"). Approximately 1,500-2,000 women participate in formal recruitment annually. Fraternity (IFC) rush is less structured: occurs in fall semester with open events through October. Multicultural and NPHC rush typically happens during fall and spring semesters with smaller cohorts.' },
  { q: 'What does Greek life cost at UT Austin?', a: 'Greek life costs vary by chapter: chapter dues run $2,000-$8,000/year (sometimes higher for top-tier housed chapters). Housed chapter members pay rent ($600-$1,400/month) for in-house living. Pledge fees, social event fees, sweat letters, and other costs add $500-$2,000/year. New member fees are typically $1,500-$3,500 first semester. Total annual Greek cost ranges from approximately $4,000 (non-housed, lower-tier) to $15,000+ (housed, top-tier).' },
  { q: 'What are the top sororities at UT Austin?', a: 'UT Austin Panhellenic sororities include traditional top houses (Kappa Kappa Gamma, Pi Beta Phi, Kappa Alpha Theta, Tri Delta, Chi Omega) plus other strong chapters. Tiers shift over time and vary by recruitment cycle. Most sororities have strong national reputations and active alumni networks. The Panhellenic process is highly structured with multiple rounds; recruitment counselors help PNMs (Potential New Members) navigate.' },
  { q: 'What are the top fraternities at UT Austin?', a: 'UT Austin Interfraternity Council includes 25+ fraternities. Traditional strong houses include Sigma Alpha Epsilon (SAE), Pi Kappa Alpha (Pike), Sigma Chi, Phi Delta Theta, Beta Theta Pi, plus others. Fraternity recruitment is less structured than sororities, allowing PNMs to develop relationships with chapters before formal pledging.' },
  { q: 'Are UT Austin fraternities safe?', a: 'UT Austin Greek organizations are governed by Title IX, university conduct codes, and national fraternity/sorority risk management policies. Like all college Greek systems, individual chapters vary in culture. UT has implemented various safety measures and has suspended chapters for serious violations. Families should research specific chapters by talking to current and former members. The Greek system has both legitimate concerns and legitimate benefits; an honest assessment helps families make informed decisions.' },
  { q: 'What are the benefits of Greek life at UT Austin?', a: 'Reported benefits: (1) instant community within a large university; (2) housing in West Campus or Greek row; (3) social events and traditions; (4) leadership opportunities (chapter officers); (5) career networking through alumni networks; (6) academic support (study halls, tutoring); (7) philanthropic activities. The intangible benefit of cohort-based college experience is significant for many students.' },
  { q: 'Should my student join Greek life at UT?', a: 'Depends on the student. Greek life is a meaningful choice but not the right fit for every student. Students who value cohort-based social structure, traditional college culture, and active social life often thrive in Greek life. Students who prefer independent social orientation, intellectual community, or non-traditional college experience often find Greek life less appealing. Many UT students opt out of Greek life and have strong UT experiences through other communities (academic, athletic, service, religious, identity-based organizations).' },
];

export default function GreekLifePage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Greek Life', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Greek life"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Greek Life</h1>}
        lede="A parent's guide to UT Austin Greek life: 50+ chapters, the rush process and timing, costs by tier, pros and cons, and what to know about West Campus Greek culture."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The Greek life picture">
            Approximately <strong>18-20%</strong> of UT Austin undergraduates participate in Greek life across <strong>50+ chapters</strong> in four councils (Panhellenic, IFC, MGC, NPHC). Panhellenic sorority recruitment is highly structured (early August before classes); fraternity recruitment is informal throughout fall. Costs range from <strong>$4,000/year</strong> (non-housed, lower-tier) to <strong>$15,000+/year</strong> (housed, top-tier). Greek life is significant but not dominant at UT (unlike at smaller SEC or ACC schools where participation is 40-60%).
          </QuickAnswer>

          <AuthorBox blurb="Has helped UT-bound families understand the Greek life landscape, including the housing and cost implications that often surprise out-of-state parents." />

          <h2 className="mt-0">The four UT Greek councils</h2>
          <ul>
            <li><strong>Panhellenic Council:</strong> 12 traditional sororities; ~3,500-4,000 active members; highly structured formal recruitment; many housed chapters in West Campus</li>
            <li><strong>Interfraternity Council (IFC):</strong> 25+ traditional fraternities; ~4,000-5,000 active members; less structured rush; many housed chapters</li>
            <li><strong>Multicultural Greek Council (MGC):</strong> 12+ multicultural sororities and fraternities; smaller membership; community-focused</li>
            <li><strong>National Pan-Hellenic Council (NPHC):</strong> 8 historically Black Greek organizations (Divine Nine); smaller membership; long historical traditions</li>
          </ul>

          <h2>Panhellenic sorority recruitment</h2>
          <p>UT Austin Panhellenic recruitment (often called &quot;sorority rush&quot;) is one of the most structured Greek processes in the country:</p>
          <ul>
            <li><strong>When:</strong> Early-mid August, the week before fall classes</li>
            <li><strong>Length:</strong> Approximately 7-10 days of events</li>
            <li><strong>Participation:</strong> ~1,500-2,000 women annually</li>
            <li><strong>Process:</strong> Open House (visit all houses), Philanthropy (chapter philanthropic focus), Sisterhood (relationship building), Preference (final selection), Bid Day (joining)</li>
            <li><strong>Recruitment counselors:</strong> Rho Gammas (sometimes Pi Chis) provide guidance; trained sorority members who disaffiliate from their chapter during recruitment to advise PNMs</li>
            <li><strong>Required materials:</strong> recommendation letters from alumnae (helpful but not strictly required at all houses); social media review (chapters do look); GPA verification</li>
          </ul>

          <h2>Fraternity recruitment</h2>
          <p>UT Austin fraternity recruitment is less structured:</p>
          <ul>
            <li><strong>When:</strong> Fall semester, primarily August through October</li>
            <li><strong>Open events:</strong> Each chapter holds events (rush parties, brotherhood mixers, philanthropic events) where PNMs visit</li>
            <li><strong>Bidding:</strong> Chapters extend bids on rolling basis</li>
            <li><strong>Pledging:</strong> Pledge process lasts 6-12 weeks; transitions to active membership</li>
            <li><strong>Some chapters have spring rush:</strong> smaller pool, but still active</li>
          </ul>

          <h2>The cost picture by tier</h2>
          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Chapter Type</th>
                  <th>Annual Dues</th>
                  <th>Housing (if housed)</th>
                  <th>Total Annual Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Top-tier housed sorority/fraternity</td><td className="num">$5,000-$8,000</td><td className="num">$10,000-$16,000</td><td className="num">$15,000-$24,000</td></tr>
                <tr><td>Mid-tier housed</td><td className="num">$3,500-$5,500</td><td className="num">$8,000-$13,000</td><td className="num">$11,500-$18,500</td></tr>
                <tr><td>Lower-tier housed</td><td className="num">$2,000-$3,500</td><td className="num">$7,000-$10,000</td><td className="num">$9,000-$13,500</td></tr>
                <tr><td>Top-tier non-housed</td><td className="num">$3,500-$6,000</td><td className="num">N/A (separate housing)</td><td className="num">$3,500-$6,000 + separate housing</td></tr>
                <tr><td>Mid-tier non-housed</td><td className="num">$2,000-$3,500</td><td className="num">N/A</td><td className="num">$2,000-$3,500 + separate housing</td></tr>
                <tr><td>MGC / NPHC chapters</td><td className="num">$1,000-$3,000</td><td className="num">Mostly non-housed</td><td className="num">$1,000-$3,000 + separate housing</td></tr>
              </tbody>
            </table>
          </div>

          <h2>The West Campus Greek concentration</h2>
          <p>Most UT Greek houses are concentrated in West Campus (the dense urban neighborhood immediately west of UT&apos;s main campus). Approximately 30+ houses sit along the streets between MLK and 26th Street west of Guadalupe. This concentration creates a distinctive Greek-residential character to West Campus and provides easy access between houses for inter-chapter social events.</p>

          <h2>Greek life pros and cons</h2>

          <h3>Pros</h3>
          <ul>
            <li>Instant community within a 50,000-student university</li>
            <li>Built-in social calendar (formals, mixers, philanthropy events)</li>
            <li>Networking through alumni connections (particularly strong in business, government, Texas-area corporate)</li>
            <li>Housing arrangement secured (for housed chapters)</li>
            <li>Leadership opportunities through chapter officer positions</li>
            <li>Academic support (study halls, tutoring programs)</li>
            <li>Philanthropic involvement at scale</li>
          </ul>

          <h3>Cons</h3>
          <ul>
            <li>Significant cost ($4,000-$24,000/year total)</li>
            <li>Time commitment (events, chapter meetings, philanthropy events)</li>
            <li>Potential conflicts with academic priorities</li>
            <li>Cultural fit not right for all students</li>
            <li>Hazing concerns (despite university and national policies)</li>
            <li>Social pressure within chapters</li>
            <li>Insular social experience can limit broader UT community engagement</li>
          </ul>

          <h2>For out-of-state students considering Greek life</h2>
          <p>Greek life can be particularly meaningful for out-of-state students who arrive at UT without an existing social network. Joining a chapter provides instant community and housing arrangement. Considerations specific to out-of-state students:</p>
          <ul>
            <li><strong>Recommendations from home-state alumnae:</strong> for sorority recruitment, alumni recs from your home state can help; ask current chapter members or your high school counselor for connections</li>
            <li><strong>Travel costs:</strong> chapter retreats, parents weekend, formals may require travel; budget accordingly</li>
            <li><strong>Cost as out-of-state addition:</strong> Greek life costs are on top of UT tuition; for out-of-state families, this adds meaningfully to the total college cost</li>
            <li><strong>Texas culture immersion:</strong> Texas Greek life has distinctive culture (Texas-themed events, football tradition, conservative-leaning at some houses); out-of-state students should consider cultural fit</li>
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
              <li><Link href="/ut-austin-housing-guide">UT Austin housing guide</Link>: housing options including Greek and non-Greek</li>
              <li><Link href="/ut-austin-dorms">UT Austin dorms</Link>: alternative to Greek housing</li>
              <li><Link href="/ut-austin-cost-of-living-austin">Cost of living</Link>: budgeting Greek dues into total cost</li>
              <li><Link href="/ut-family-orientation">Family orientation</Link>: parent prep for UT</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-greek-life" />
    </>
  );
}
