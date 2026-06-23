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

const TITLE = 'Is UT Austin Worth It for Out-of-State Students? (Honest 2026 Analysis)';
const DESCRIPTION = `Is UT Austin worth the out-of-state tuition? Honest financial and outcome analysis: ${fmtUSD(TUITION.outOfStatePerYear)}/year sticker, ROI by major, the residency pathway that often makes UT cheaper than the home-state flagship, and when it does not make sense.`;
const PATH = '/is-ut-austin-worth-it-out-of-state';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Is UT Austin worth it for out-of-state students?', a: 'In most cases, yes, but the answer depends on the major, the family\'s financial circumstances, and whether they pursue the Texas residency pathway. For high-ROI majors (Computer Science, McCombs Business, Engineering) with the residency pathway pursued, UT Austin is among the strongest public university values for non-residents. For students who will pay full out-of-state sticker for four years, UT competes head-to-head with other top public flagships and often loses to in-state options unless the major or location is uniquely valuable.' },
  { q: 'Is UT Austin cheaper than my home state\'s flagship after Texas residency?', a: `Depends on the home state. For Michigan, Virginia, Illinois, California, New Jersey, Maryland, Pennsylvania, and many others where in-state flagship tuition is $14,000-$22,000/year, UT after Texas residency at ${fmtUSD(TUITION.inStatePerYear)}/year is cheaper than the home-state flagship at the home rate. For Florida, Tennessee, Georgia, and several southern states with low in-state flagship tuition, UT after residency is approximately the same or slightly more expensive than the home-state option.` },
  { q: 'What is the ROI of a UT Austin degree?', a: 'UT Austin graduates report median starting salaries by college: Computer Science ~$115,000-$140,000, McCombs Business ~$75,000-$95,000, Engineering ~$85,000-$95,000, Natural Sciences ~$60,000-$75,000, Liberal Arts ~$50,000-$65,000, Communication ~$50,000-$60,000. Over a 30-year career, the lifetime earnings premium of a UT Austin degree vs no degree is approximately $1.2-$1.5 million depending on major.' },
  { q: 'Is McCombs Business worth out-of-state tuition?', a: `For students with the academic profile to be admitted (top 5% nationally), McCombs is among the highest-ROI undergraduate business schools in the country. Median starting salary ~$75,000-$95,000 with finance and MIS tracks running higher. Out-of-state tuition at ~${fmtUSD(TUITION.outOfStatePerYear)} is paid back within 1-2 years of working at typical post-McCombs salaries. With the residency pathway, the math is significantly better.` },
  { q: 'Is UT Austin Computer Science worth out-of-state tuition?', a: `Among the strongest CS programs in the country with top tech recruiting (Google, Meta, Apple, Amazon, Stripe, etc.). Median starting salary ~$115,000-$140,000 base plus signing and equity. Out-of-state tuition is paid back within 1-2 years of working. UT CS is competitive with Berkeley, CMU, and Stanford for top tech recruiting, particularly into Texas-based and Bay Area roles. The residency pathway makes the math materially better.` },
  { q: 'When is UT Austin not worth the out-of-state tuition?', a: 'UT Austin is harder to justify at full out-of-state sticker (no residency pathway) when: (1) the home-state flagship is also a top-50 public university (Michigan, Virginia, UCLA) and the major is comparable; (2) the student is in a lower-ROI liberal arts major where the salary premium does not pay back the tuition gap; (3) the family does not have the financial capacity to pursue the residency pathway; (4) the student\'s academic profile is competitive at private universities offering substantial merit aid that closes the gap with sticker UT.' },
  { q: 'How does Austin\'s location affect the value?', a: 'Austin is one of the strongest tech and music industry cities in the country. UT students have direct access to Apple, Google, Meta, IBM, Oracle, Tesla, and dozens of growing tech companies headquartered or with major offices in Austin. The local Austin alumni network is large and well-connected. Cost of living for graduates remaining in Austin is significantly lower than the Bay Area or NYC. For students who want a tech, music, or government-policy career, the Austin location is a substantive value-add.' },
  { q: 'Is the social experience worth the out-of-state cost?', a: 'For students who want a large, vibrant, urban-campus experience with a strong school spirit (Longhorn Football, Six Street, Lady Bird Lake, music industry adjacency), UT delivers an experience hard to replicate elsewhere. The Greek system is strong. The campus is large and bustling. For students who want a small, intimate liberal arts experience, UT is not the right fit regardless of cost.' },
];

export default function WorthItPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Is UT Austin Worth It for Out-of-State', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Value analysis"
        title={<h1 className="text-ink max-w-[24ch]">Is UT Austin worth it for out-of-state students?</h1>}
        lede="The financial and outcome analysis that actually answers the question. By major, by home state, with and without the residency pathway."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The honest answer">
            In most cases, yes, but it depends on three factors: (1) the major, (2) the home state, and (3) whether the family pursues the <Link href="/texas-residency-rules">Texas residency pathway</Link>. For high-ROI majors (CS, McCombs, Engineering) with the residency pathway, UT Austin is among the strongest public university values for non-residents. For full out-of-state sticker over four years in lower-ROI majors with strong home-state alternatives, UT is harder to justify. This page walks through the math honestly so you can make an informed decision.
          </QuickAnswer>

          <AuthorBox blurb="Has helped dozens of out-of-state families work through the &quot;is UT worth it&quot; question with actual numbers, not marketing copy." />

          <h2 className="mt-0">The three factors that determine value</h2>
          <h3>Factor 1: The major</h3>
          <p>Not all UT majors generate the same return. Computer Science, McCombs Business, and Engineering produce median starting salaries that rapidly pay back the tuition investment. Liberal Arts and Communication produce smaller earnings premiums where the four-year cost gap with in-state options is harder to recover.</p>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>UT Major / College</th>
                  <th>Median Starting Salary</th>
                  <th>OOS 4-Year Tuition</th>
                  <th>Tuition Payback</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Computer Science (CSDS)</td><td className="num">$115,000-$140,000</td><td className="num">~$214,000</td><td className="num">1-2 years</td></tr>
                <tr><td>McCombs (Finance/MIS)</td><td className="num">$85,000-$110,000</td><td className="num">~$205,000</td><td className="num">2 years</td></tr>
                <tr><td>Cockrell Engineering</td><td className="num">$85,000-$110,000</td><td className="num">~$207,000</td><td className="num">2 years</td></tr>
                <tr><td>McCombs (Marketing/Mgmt)</td><td className="num">$70,000-$85,000</td><td className="num">~$205,000</td><td className="num">2-3 years</td></tr>
                <tr><td>Natural Sciences</td><td className="num">$60,000-$75,000</td><td className="num">~$182,000</td><td className="num">3 years</td></tr>
                <tr><td>Moody Communication</td><td className="num">$50,000-$65,000</td><td className="num">~$183,000</td><td className="num">3-4 years</td></tr>
                <tr><td>Liberal Arts</td><td className="num">$50,000-$65,000</td><td className="num">~$180,000</td><td className="num">3-4 years</td></tr>
                <tr><td>Education</td><td className="num">$45,000-$55,000</td><td className="num">~$180,000</td><td className="num">4+ years</td></tr>
              </tbody>
            </table>
          </div>

          <h3>Factor 2: The home state alternative</h3>
          <p>UT Austin&apos;s value depends on what you would be paying at the home-state flagship. For families in states with cheap public flagships (Florida, Tennessee, Georgia), UT at full sticker is materially more expensive than the home-state option, and the value depends on UT-specific advantages (major prestige, location, network) that justify the premium. For families in states with expensive public flagships (Michigan, Virginia, Pennsylvania, Maryland), UT after the residency pathway can be cheaper than the home flagship at the home rate.</p>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Home State Public Flagship</th>
                  <th>In-State Tuition (Home)</th>
                  <th>UT After TX Residency</th>
                  <th>Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Florida</td><td className="num">~$6,400</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">UT $5,300 more</td></tr>
                <tr><td>Tennessee (UTK)</td><td className="num">~$13,500</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">UT $1,800 cheaper</td></tr>
                <tr><td>Georgia (UGA)</td><td className="num">~$12,000</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">UT $300 cheaper</td></tr>
                <tr><td>California (UC)</td><td className="num">~$14,900</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">UT $3,200 cheaper</td></tr>
                <tr><td>Michigan (U-M)</td><td className="num">~$17,700</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">UT $6,000 cheaper</td></tr>
                <tr><td>Pennsylvania (Penn State)</td><td className="num">~$19,500</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">UT $7,800 cheaper</td></tr>
                <tr><td>Virginia (UVA)</td><td className="num">~$22,300</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">UT $10,600 cheaper</td></tr>
                <tr><td>New Jersey (Rutgers)</td><td className="num">~$17,000</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">UT $5,300 cheaper</td></tr>
                <tr><td>Illinois (UIUC)</td><td className="num">~$17,800</td><td className="num">{fmtUSD(TUITION.inStatePerYear)}</td><td className="num">UT $6,100 cheaper</td></tr>
              </tbody>
            </table>
          </div>

          <h3>Factor 3: Whether the family pursues the residency pathway</h3>
          <p>This is the single largest variable. Out-of-state sticker over four years is roughly <strong>{fmtUSD(TUITION.outOfStatePerYear * 4)}</strong>. UT with residency pathway (year 1 OOS, years 2-4 in-state) is roughly <strong>{fmtUSD(TUITION.outOfStatePerYear + 3 * TUITION.inStatePerYear)}</strong>. The pathway requires acquiring Texas real property and maintaining Texas domicile for 12 months; not every family has the capital or willingness to do so. For families who do, UT becomes a dramatically better value.</p>

          <h2>The math: four-year value scenarios</h2>

          <h3>Scenario A: Out-of-state McCombs Business student, no residency pathway</h3>
          <ul>
            <li>Four-year tuition: ~{fmtUSD(TUITION.colleges.business.out * 4)}</li>
            <li>Four-year housing/COA: ~$120,000</li>
            <li>Total four-year cost: ~$324,000</li>
            <li>Median starting salary: ~$90,000</li>
            <li>Tuition payback: ~2 years of post-graduation earnings</li>
            <li>Lifetime earnings premium vs no degree: ~$1.4 million</li>
            <li><strong>Verdict:</strong> Strong value for a high-academic student. Even at full sticker, McCombs ROI is favorable.</li>
          </ul>

          <h3>Scenario B: Out-of-state McCombs student with residency pathway</h3>
          <ul>
            <li>Four-year tuition: ~{fmtUSD(TUITION.colleges.business.out + 3 * TUITION.colleges.business.in)}</li>
            <li>Four-year housing/COA: ~$120,000</li>
            <li>Total four-year cost: ~$222,000</li>
            <li>Tuition payback: ~1.5 years</li>
            <li>Savings vs Scenario A: ~$102,000</li>
            <li><strong>Verdict:</strong> One of the strongest public university values for high-academic non-residents.</li>
          </ul>

          <h3>Scenario C: Out-of-state Liberal Arts student, no residency pathway</h3>
          <ul>
            <li>Four-year tuition: ~{fmtUSD(TUITION.outOfStatePerYear * 4)}</li>
            <li>Four-year housing/COA: ~$120,000</li>
            <li>Total four-year cost: ~$300,000</li>
            <li>Median starting salary: ~$55,000</li>
            <li>Tuition payback: ~4 years</li>
            <li><strong>Verdict:</strong> Harder to justify at full sticker if a comparable in-state Liberal Arts program exists at meaningfully lower cost. The UT brand and Austin location add value but may not justify the full premium for a lower-earnings major.</li>
          </ul>

          <h3>Scenario D: Out-of-state Liberal Arts with residency pathway</h3>
          <ul>
            <li>Four-year tuition: ~{fmtUSD(TUITION.outOfStatePerYear + 3 * TUITION.inStatePerYear)}</li>
            <li>Four-year housing/COA: ~$120,000</li>
            <li>Total four-year cost: ~$200,000</li>
            <li>Savings vs Scenario C: ~$100,000</li>
            <li><strong>Verdict:</strong> Competitive with most home-state flagship Liberal Arts options. UT&apos;s Plan II Honors and breadth of departments add distinct value.</li>
          </ul>

          <h2>When UT Austin is not worth it for out-of-state students</h2>
          <p>Honestly: UT Austin is not always the right answer. Cases where it does not make sense:</p>
          <ul>
            <li><strong>The student is in a low-ROI major and the family will pay full OOS sticker.</strong> Four-year cost of ~$300,000 for a $55,000 starting salary is a tough math, especially against a $100,000 in-state alternative.</li>
            <li><strong>The home-state flagship is also a top-25 public.</strong> Michigan, Virginia, UCLA, Berkeley, and a few others offer comparable academic outcomes to UT. At full sticker, the math is harder; at home-state in-state rate, the math favors home.</li>
            <li><strong>The family doesn&apos;t have capital to pursue the residency pathway.</strong> The pathway typically requires $400,000-$500,000 in Texas real estate. Without that capacity, UT at full OOS becomes harder to justify.</li>
            <li><strong>The student has substantial merit aid offers from private universities</strong> (Vanderbilt, Notre Dame, Rice, USC) that close the gap with UT sticker. If a Vanderbilt $30K/year merit award brings the cost to ~$60K/yr, UT&apos;s OOS sticker is barely different and the Vanderbilt experience may be preferable.</li>
            <li><strong>The student wants a small liberal arts experience.</strong> UT is a 50,000+ student university. If the student wants a 2,000-student liberal arts environment, UT is not the right fit at any price.</li>
          </ul>

          <h2>When UT Austin is absolutely worth it</h2>
          <ul>
            <li><strong>The student is in CS, McCombs, or Cockrell Engineering</strong> with strong academic credentials.</li>
            <li><strong>The home-state flagship is not at the top public flagship tier</strong> (most of the country).</li>
            <li><strong>The family can pursue the residency pathway</strong> (has the capital or is willing to relocate).</li>
            <li><strong>The student values the Austin location</strong> for tech industry, music, or government access.</li>
            <li><strong>The student fits the large urban research university experience</strong> and would not thrive at a small college.</li>
          </ul>

          <h2>The decision framework</h2>
          <ol>
            <li><strong>Identify the major.</strong> High-ROI majors justify out-of-state tuition more easily.</li>
            <li><strong>Compare to the home-state flagship at home rate.</strong> Is UT meaningfully better or different in a way that justifies the premium?</li>
            <li><strong>Evaluate whether the residency pathway is viable.</strong> If yes, the math typically favors UT decisively.</li>
            <li><strong>Compare to private university offers with merit aid.</strong> If a private at $60K/yr net is comparable to UT OOS at $80K/yr net, the choice is about fit not just cost.</li>
            <li><strong>Make the decision.</strong> Most families who get to this question and have run the numbers conclude UT is worth it, particularly with the residency pathway.</li>
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
              <li><Link href="/ut-austin-4-year-cost-out-of-state">UT Austin 4-year cost out-of-state</Link>: full cost breakdown</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the pathway that changes the math</li>
              <li><Link href="/ut-austin-scholarships-out-of-state">Scholarships for out-of-state</Link>: aid that stacks with residency</li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link>: model your scenario</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-worth-it-oos" />
    </>
  );
}
