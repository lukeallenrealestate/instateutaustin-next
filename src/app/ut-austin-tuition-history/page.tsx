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

const TITLE = 'UT Austin Tuition History: Rate Trends 2010-2026 + Projections';
const DESCRIPTION = 'UT Austin tuition history: in-state rose from $9,300 (2010) to $11,688 (2024, frozen); out-of-state from $32,500 to $44,908 over the same period. Historical trends, the Texas legislature freeze, and forward projections for planning families.';
const PATH = '/ut-austin-tuition-history';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'How much has UT Austin tuition increased over time?', a: 'UT Austin in-state tuition rose from approximately $9,300 in 2010-11 to $11,688 in 2024-25 (a 26% increase over 14 years, or about 1.7% annual increase). Out-of-state tuition rose from approximately $32,500 in 2010-11 to $44,908 in 2024-25 (a 38% increase over 14 years, or about 2.4% annual increase). Both rates are lower increases than most peer public flagships.' },
  { q: 'Why is UT Austin in-state tuition frozen?', a: 'The Texas Legislature passed legislation in recent sessions freezing in-state tuition at Texas public universities at the 2024-25 level through the 2026-27 academic year. This was designed to protect Texas resident families from continued tuition inflation. The freeze applies to base tuition and required fees but not to out-of-state tuition (which continues to rise) or college-specific differential tuition (which may adjust modestly).' },
  { q: 'When will UT Austin tuition go up again?', a: 'For in-state tuition: uncertain. The current legislature freeze covers through 2026-27. The 89th Texas Legislature (2027 session) could extend the freeze or let it expire. Political support has been strong. For out-of-state tuition: increases are set annually by UT Board of Regents; typical increases of 3-5%/year. Next scheduled increase: expected for 2026-27 and each subsequent year.' },
  { q: 'How does UT Austin tuition history compare to other public universities?', a: 'UT Austin\'s tuition growth has been moderate compared to peers. Michigan and UC Berkeley in-state tuition rose more rapidly (Michigan from ~$12,600 in 2010 to $17,700 in 2024). Florida in-state has stayed lower ($5,300 in 2010, $6,400 in 2024) due to specific Florida legislative policy. Georgia Tech (also public) rose similarly to UT ($9,200 to $12,700).' },
  { q: 'What was UT Austin tuition 10 years ago?', a: 'In 2015-16 (approximately 10 years ago from 2026): in-state tuition was approximately $10,100/year; out-of-state was approximately $36,600/year. Since then in-state has risen approximately $1,600/year and out-of-state approximately $8,300/year.' },
  { q: 'Will UT Austin tuition keep increasing?', a: 'Yes, likely, though at varying rates. Out-of-state tuition (not subject to freeze) is expected to continue rising 3-5%/year historically. In-state tuition depends on legislative action; if freeze extends, no increase; if freeze lapses, normal 2-3%/year increases expected. Long-term (10+ years): expect out-of-state tuition to approach $60,000/year and in-state to approach $15,000-$17,000/year absent significant policy intervention.' },
];

export default function TuitionHistoryPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Tuition History', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Tuition history"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Tuition History</h1>}
        lede="Historical UT Austin tuition rates from 2010 to present plus forward projections. Understand the trajectory to plan for Class of 2030, 2031, 2032, and beyond."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The 14-year history">
            UT Austin in-state tuition rose from <strong>$9,300 (2010-11)</strong> to <strong>$11,688 (2024-25)</strong>, a 26% increase over 14 years. Out-of-state tuition rose from <strong>$32,500</strong> to <strong>$44,908</strong>, a 38% increase. In-state currently <strong>frozen by legislature through 2026-27</strong>. Historical annual increases: in-state ~1.7%, out-of-state ~2.4%. Both are lower than most peer public flagships.
          </QuickAnswer>

          <AuthorBox blurb="Tracks UT Austin tuition-setting decisions and Texas legislative action on higher education." />

          <h2 className="mt-0">UT Austin tuition history: year by year</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Academic Year</th>
                  <th>In-State (Base + Fees)</th>
                  <th>Out-of-State</th>
                  <th>Y/Y Change (In-State)</th>
                  <th>Y/Y Change (OOS)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>2010-11</td><td className="num">~$9,300</td><td className="num">~$32,500</td><td className="num">baseline</td><td className="num">baseline</td></tr>
                <tr><td>2011-12</td><td className="num">~$9,500</td><td className="num">~$33,100</td><td className="num">+2.2%</td><td className="num">+1.8%</td></tr>
                <tr><td>2012-13</td><td className="num">~$9,600</td><td className="num">~$33,800</td><td className="num">+1.1%</td><td className="num">+2.1%</td></tr>
                <tr><td>2013-14</td><td className="num">~$9,800</td><td className="num">~$34,500</td><td className="num">+2.1%</td><td className="num">+2.1%</td></tr>
                <tr><td>2014-15</td><td className="num">~$9,900</td><td className="num">~$35,600</td><td className="num">+1.0%</td><td className="num">+3.2%</td></tr>
                <tr><td>2015-16</td><td className="num">~$10,100</td><td className="num">~$36,600</td><td className="num">+2.0%</td><td className="num">+2.8%</td></tr>
                <tr><td>2016-17</td><td className="num">~$10,300</td><td className="num">~$37,600</td><td className="num">+2.0%</td><td className="num">+2.7%</td></tr>
                <tr><td>2017-18</td><td className="num">~$10,500</td><td className="num">~$38,300</td><td className="num">+1.9%</td><td className="num">+1.9%</td></tr>
                <tr><td>2018-19</td><td className="num">~$10,700</td><td className="num">~$38,600</td><td className="num">+1.9%</td><td className="num">+0.8%</td></tr>
                <tr><td>2019-20</td><td className="num">~$10,900</td><td className="num">~$38,600</td><td className="num">+1.9%</td><td className="num">0.0%</td></tr>
                <tr><td>2020-21</td><td className="num">~$11,100</td><td className="num">~$40,100</td><td className="num">+1.8%</td><td className="num">+3.9%</td></tr>
                <tr><td>2021-22</td><td className="num">~$11,400</td><td className="num">~$41,700</td><td className="num">+2.7%</td><td className="num">+4.0%</td></tr>
                <tr><td>2022-23</td><td className="num">~$11,500</td><td className="num">~$43,100</td><td className="num">+0.9%</td><td className="num">+3.4%</td></tr>
                <tr><td>2023-24</td><td className="num">~$11,600</td><td className="num">~$44,400</td><td className="num">+0.9%</td><td className="num">+3.0%</td></tr>
                <tr><td>2024-25</td><td className="num">$11,688</td><td className="num">$44,908</td><td className="num">+0.8% (frozen)</td><td className="num">+1.1%</td></tr>
                <tr><td>2025-26</td><td className="num">$11,688 (frozen)</td><td className="num">$44,908</td><td className="num">0%</td><td className="num">0%</td></tr>
                <tr><td>2026-27</td><td className="num">$11,688 (frozen)</td><td className="num">~$46,900 (projected)</td><td className="num">0%</td><td className="num">~+4%</td></tr>
                <tr><td>2027-28 (projected)</td><td className="num">$11,688 or $12,000-$12,300</td><td className="num">~$48,800</td><td className="num">0-3%</td><td className="num">~+4%</td></tr>
              </tbody>
            </table>
          </div>

          <p>Historical rates approximate; verify with UT One Stop for exact figures for any specific year.</p>

          <h2>Historical increase rate analysis</h2>
          <ul>
            <li><strong>In-state 14-year total increase:</strong> ~26% ($9,300 to $11,688)</li>
            <li><strong>In-state compound annual growth rate:</strong> ~1.7%/year</li>
            <li><strong>Out-of-state 14-year total increase:</strong> ~38% ($32,500 to $44,908)</li>
            <li><strong>Out-of-state compound annual growth rate:</strong> ~2.4%/year</li>
            <li><strong>Compared to inflation (2010-2024):</strong> approximately 40% cumulative inflation; UT in-state below inflation, OOS roughly at inflation</li>
          </ul>

          <h2>The Texas legislature freeze context</h2>
          <p>The Texas Legislature freeze on in-state tuition reflects:</p>
          <ul>
            <li>Political priority on college affordability for Texas residents</li>
            <li>Recognition that UT (and other Texas public universities) have raised tuition faster than desired in previous years</li>
            <li>Balance sheet: UT can offset frozen tuition with continued out-of-state increases and endowment growth</li>
            <li>Precedent: similar freezes have been enacted in other states (Florida, some California actions)</li>
          </ul>

          <h2>Comparison to peer public universities (2024-25)</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>University</th>
                  <th>In-State Tuition (2024-25)</th>
                  <th>Increase Since 2010-11</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Florida</td><td className="num">$6,400</td><td className="num">+21%</td></tr>
                <tr><td>UNC Chapel Hill</td><td className="num">$9,000</td><td className="num">+29%</td></tr>
                <tr><td>UT Austin</td><td className="num">$11,688</td><td className="num">+26%</td></tr>
                <tr><td>Georgia Tech</td><td className="num">$12,700</td><td className="num">+38%</td></tr>
                <tr><td>UC Berkeley</td><td className="num">$14,934</td><td className="num">+45%</td></tr>
                <tr><td>Michigan</td><td className="num">$17,700</td><td className="num">+40%</td></tr>
                <tr><td>Virginia</td><td className="num">$22,300</td><td className="num">+53%</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Long-term projections</h2>
          <ul>
            <li><strong>By 2030:</strong> In-state expected ~$12,000-$14,000 (depending on freeze); out-of-state ~$52,000-$55,000</li>
            <li><strong>By 2035:</strong> In-state ~$14,000-$17,000; out-of-state ~$62,000-$67,000</li>
            <li><strong>By 2040:</strong> In-state ~$16,000-$20,000; out-of-state ~$75,000-$82,000</li>
          </ul>
          <p>These projections assume historical rates continue. Actual rates may vary based on legislative action, economic conditions, and university policy.</p>

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
              <li><Link href="/ut-austin-tuition-2026-2027">UT Austin tuition 2026-27</Link>: current year</li>
              <li><Link href="/ut-austin-tuition-2027-2028">UT Austin tuition 2027-28</Link>: next-year projection</li>
              <li><Link href="/ut-austin-4-year-cost-out-of-state">4-year cost analysis</Link>: full financial picture</li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link>: model your scenario</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-tuition-history" />
    </>
  );
}
