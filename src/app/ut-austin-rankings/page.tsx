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

const TITLE = 'UT Austin Rankings 2026: National, Public, by Major (Honest Comparison)';
const DESCRIPTION = 'UT Austin rankings 2026 across all major ranking systems: US News National (top 30), US News Public (top 10), Times Higher Ed, QS, Princeton Review, Forbes. Plus per-major rankings for McCombs Business, Computer Science, Cockrell Engineering, Liberal Arts, and more.';
const PATH = '/ut-austin-rankings';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is UT Austin\'s ranking?', a: 'UT Austin\'s aggregate rankings: US News National Universities top 30 (currently #32 in the most recent edition), US News Public Universities top 10 (currently #10), Times Higher Education World University Rankings top 50, QS World University Rankings top 75. By major, McCombs Business ranks top 10 undergrad business, UT Computer Science ranks top 10-12, Cockrell Engineering ranks top 10-15, and many liberal arts and natural sciences departments rank top 5-25.' },
  { q: 'Where does UT Austin rank among public universities?', a: 'UT Austin ranks #8-#12 on most lists of top US public universities, typically alongside University of Michigan, UCLA, Berkeley, UNC Chapel Hill, Virginia, Georgia Tech, Wisconsin, Florida, and Texas A&M. UT consistently ranks in the top 10-15 of public universities and top 30-40 overall (including private universities).' },
  { q: 'Is UT Austin a top-tier university?', a: 'Yes. UT Austin is classified as an R1 doctoral research university (the highest research classification), is a member of the Association of American Universities (62 member institutions of leading research universities), and is consistently ranked among the top 30-40 national universities and top 10 public universities in the United States.' },
  { q: 'Why does UT Austin rank lower than some peer universities?', a: 'UT Austin ranks slightly lower than peer publics (Michigan, UCLA, Berkeley) on some metrics primarily due to (1) acceptance rate (UT\'s 31% is higher than Berkeley\'s 11%), (2) yield rate (UT\'s 50%+ yield is strong but not exceptional), and (3) per-student spending (Texas legislature funding constraints). On academic quality, faculty research output, and student outcomes, UT is competitive with the top public universities.' },
  { q: 'What is UT Austin\'s ranking by major?', a: 'McCombs Business: top 10 undergrad business; Computer Science: top 10-12 nationally; Cockrell Engineering: top 10-15 by discipline (top 5 in Petroleum Engineering, top 10 in Chemical, Civil, Biomedical); Plan II Honors: highly distinctive interdisciplinary program; Music (Butler School): top 30; Liberal Arts (most departments): top 20-30; Architecture: top 10 undergrad; Communication (Moody): top 20; Education: top 25.' },
  { q: 'How does UT Austin compare to top private universities in rankings?', a: 'UT ranks lower than top private universities (Harvard #2, Princeton #1, MIT #2, Stanford #6, Yale #5, etc.) on aggregate rankings. UT competes more directly with top publics and select privates in the #25-#50 range. For most majors, UT\'s academic quality is competitive with privates in the #25-#75 range but at a fraction of the cost (especially with the Texas residency pathway).' },
  { q: 'Has UT Austin\'s ranking changed in recent years?', a: 'UT Austin has been consistently ranked #25-#40 nationally over the past decade with modest year-to-year variation. The most significant changes have been: methodology updates by US News (which changed the formula in 2023-24), increased emphasis on social mobility metrics, and the rise of newer competitor schools (Boston University, Northeastern, Florida) in rankings. UT\'s academic profile has remained strong.' },
];

export default function RankingsPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Rankings', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Rankings"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Rankings</h1>}
        lede="UT Austin rankings across all major ranking systems and by major. Honest comparison and what the numbers actually mean for an out-of-state family considering UT."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The aggregate picture">
            UT Austin ranks <strong>top 30</strong> nationally (US News), <strong>top 10</strong> among US public universities, top 50 globally (Times Higher Ed, QS). UT is a member of the prestigious Association of American Universities (62 member research institutions). Per-major rankings vary: McCombs Business top 10, Computer Science top 10-12, Cockrell Engineering top 10-15, with many liberal arts and natural sciences departments in the top 20-30.
          </QuickAnswer>

          <AuthorBox blurb="Has helped families interpret UT Austin's rankings in context and against comparable peer institutions." />

          <h2 className="mt-0">UT Austin in major ranking systems</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Ranking System</th>
                  <th>UT Austin Rank</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>US News National Universities (2026)</td><td className="num">#32</td><td>Top 30-40 range over recent years</td></tr>
                <tr><td>US News Public Universities (2026)</td><td className="num">#10</td><td>Consistently top 10-15</td></tr>
                <tr><td>Times Higher Education World (2026)</td><td className="num">#48</td><td>Top 50 globally</td></tr>
                <tr><td>QS World University Rankings (2026)</td><td className="num">#67</td><td>Top 75 globally</td></tr>
                <tr><td>Forbes America&apos;s Top Colleges</td><td className="num">#27</td><td>Top 30 overall</td></tr>
                <tr><td>Princeton Review Best Colleges</td><td>Listed (no numeric)</td><td>&quot;Best Value&quot; recognition</td></tr>
                <tr><td>Niche Best Colleges</td><td className="num">#26</td><td>Top 30</td></tr>
                <tr><td>Wall Street Journal/THE</td><td className="num">#40</td><td>Top 50</td></tr>
                <tr><td>Washington Monthly</td><td className="num">#36</td><td>Includes social mobility metrics</td></tr>
              </tbody>
            </table>
          </div>

          <h2>UT Austin among top US public universities</h2>
          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Public University</th>
                  <th>US News National Rank</th>
                  <th>US News Public Rank</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>UC Berkeley</td><td className="num">#15</td><td className="num">#1</td></tr>
                <tr><td>UCLA</td><td className="num">#15</td><td className="num">#2</td></tr>
                <tr><td>Michigan</td><td className="num">#20</td><td className="num">#3</td></tr>
                <tr><td>Virginia</td><td className="num">#24</td><td className="num">#4</td></tr>
                <tr><td>North Carolina-Chapel Hill</td><td className="num">#22</td><td className="num">#5</td></tr>
                <tr><td>Florida</td><td className="num">#28</td><td className="num">#6</td></tr>
                <tr><td>UC San Diego</td><td className="num">#28</td><td className="num">#7</td></tr>
                <tr><td>Georgia Tech</td><td className="num">#33</td><td className="num">#8</td></tr>
                <tr><td>UC Davis</td><td className="num">#28</td><td className="num">#9</td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>UT Austin</strong></td><td className="num"><strong>#32</strong></td><td className="num"><strong>#10</strong></td></tr>
                <tr><td>Texas A&amp;M</td><td className="num">#51</td><td className="num">#12</td></tr>
                <tr><td>Ohio State</td><td className="num">#43</td><td className="num">#11</td></tr>
                <tr><td>Wisconsin-Madison</td><td className="num">#39</td><td className="num">#13</td></tr>
                <tr><td>Illinois Urbana-Champaign</td><td className="num">#35</td><td className="num">#11</td></tr>
              </tbody>
            </table>
          </div>
          <p>Rankings approximate; exact placement varies by edition. UT sits in the top tier of US public universities, alongside Michigan, UVA, and UNC for overall reputation.</p>

          <h2>UT Austin per-major and per-college rankings</h2>

          <h3>McCombs School of Business</h3>
          <ul>
            <li><strong>US News Undergrad Business:</strong> top 10 (currently #5-#7)</li>
            <li><strong>Bloomberg Undergrad Business:</strong> top 10</li>
            <li><strong>Specific specialties:</strong> Accounting #1-#3 nationally, Management Information Systems #3-#5, Marketing top 10, Finance top 15</li>
            <li><strong>Forbes Top Business Schools:</strong> top 15</li>
          </ul>

          <h3>Computer Science (CSDS)</h3>
          <ul>
            <li><strong>US News Undergrad CS:</strong> top 10-12 (currently #9-#11)</li>
            <li><strong>CSRankings (research-focused):</strong> top 10</li>
            <li><strong>Specific specialties:</strong> Programming Languages #2 nationally, Theory top 10, AI top 12, Systems top 15</li>
          </ul>

          <h3>Cockrell School of Engineering</h3>
          <ul>
            <li><strong>US News Undergrad Engineering:</strong> top 10-15</li>
            <li><strong>Specific disciplines:</strong> Petroleum Engineering #1-#3 nationally, Chemical Engineering top 10, Civil Engineering top 10, Biomedical Engineering top 15, Mechanical Engineering top 15, Aerospace top 10, Electrical and Computer Engineering top 12</li>
          </ul>

          <h3>Architecture</h3>
          <ul>
            <li><strong>DesignIntelligence Undergrad Architecture:</strong> top 10</li>
            <li><strong>Strong programs:</strong> Architecture, Urban Studies, Interior Design</li>
          </ul>

          <h3>Liberal Arts</h3>
          <ul>
            <li><strong>Plan II Honors:</strong> distinctive nationally; among top interdisciplinary honors programs</li>
            <li><strong>Specific departments:</strong> Government top 10 (LBJ School policy connections), History top 20, English top 20, Linguistics top 15, Economics top 20, Psychology top 25</li>
          </ul>

          <h3>Moody College of Communication</h3>
          <ul>
            <li><strong>US News Undergrad Communication:</strong> top 20</li>
            <li><strong>Specific specialties:</strong> Radio-TV-Film top 10, Journalism top 15, Advertising top 15</li>
          </ul>

          <h3>College of Natural Sciences</h3>
          <ul>
            <li><strong>Mathematics:</strong> top 15</li>
            <li><strong>Physics:</strong> top 15</li>
            <li><strong>Chemistry:</strong> top 20</li>
            <li><strong>Biology, Biochemistry:</strong> top 25</li>
            <li><strong>Neuroscience:</strong> top 20</li>
          </ul>

          <h3>Music (Butler School of Music)</h3>
          <ul>
            <li><strong>US News Undergrad Music:</strong> top 30</li>
            <li><strong>Specific strengths:</strong> Performance (especially Jazz Studies, Brass, Composition)</li>
          </ul>

          <h3>Other notable rankings</h3>
          <ul>
            <li><strong>Pharmacy:</strong> top 10</li>
            <li><strong>Education:</strong> top 25 graduate; undergraduate education program competitive</li>
            <li><strong>Nursing:</strong> top 50</li>
            <li><strong>Law:</strong> top 15 (UT School of Law is among the strongest in the country)</li>
            <li><strong>Public Affairs (LBJ School):</strong> top 15</li>
            <li><strong>MBA (McCombs):</strong> top 20</li>
          </ul>

          <h2>How to interpret rankings</h2>

          <h3>What rankings measure well</h3>
          <ul>
            <li><strong>Academic resources:</strong> faculty quality, research output, library and lab capacity</li>
            <li><strong>Outcomes:</strong> graduation rate, job placement, average starting salary</li>
            <li><strong>Selectivity:</strong> acceptance rate, SAT/ACT range, GPA range</li>
            <li><strong>Reputation:</strong> peer assessment scores from other universities</li>
          </ul>

          <h3>What rankings measure poorly</h3>
          <ul>
            <li><strong>Fit:</strong> the right school for you may not be the highest-ranked school</li>
            <li><strong>Teaching quality:</strong> faculty research output and undergraduate teaching quality often diverge</li>
            <li><strong>Cost-effectiveness:</strong> rankings rarely emphasize cost-to-value</li>
            <li><strong>Major-specific:</strong> aggregate rankings can hide enormous differences between strong and weak departments at the same school</li>
            <li><strong>Social mobility and access:</strong> some rankings emphasize this; many do not</li>
          </ul>

          <h2>UT Austin rankings vs cost comparison</h2>
          <p>UT Austin&apos;s rankings, weighed against cost, produce one of the strongest value propositions among US universities. UT&apos;s top-25 academic ranking combined with its in-state tuition (significantly lower than peer top-25 publics like Michigan, Virginia, UCLA) makes UT the best public university value for Texas residents and (through the residency pathway) for out-of-state families who establish residency.</p>

          <p>For an out-of-state family choosing between UT and a higher-ranked private (e.g., USC, NYU, Northwestern at $66K+/year), UT&apos;s top-25 academic credentials at $44K out-of-state or $11.6K after Texas residency produces materially better cost-to-value than the higher-ranked private.</p>

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
              <li><Link href="/is-ut-austin-worth-it-out-of-state">Is UT Austin worth it</Link>: value vs ranking analysis</li>
              <li><Link href="/by-college">By UT college</Link>: per-college tuition and rankings</li>
              <li><Link href="/comparisons/michigan">UT Austin vs Michigan</Link>: head-to-head with peer public</li>
              <li><Link href="/comparisons/uc-berkeley">UT Austin vs UC Berkeley</Link>: head-to-head with peer public</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-rankings" />
    </>
  );
}
