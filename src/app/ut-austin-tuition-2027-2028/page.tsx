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

const TITLE = 'UT Austin Tuition 2027-2028: Projected Rates + Freeze Considerations';
const DESCRIPTION = `UT Austin tuition projection for the 2027-2028 academic year: in-state tuition (currently frozen through 2026-27), projected out-of-state rate ~$47,000-$48,000. What Class of 2031 families should budget for.`;
const PATH = '/ut-austin-tuition-2027-2028';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What will UT Austin tuition be in 2027-2028?', a: `Projected 2027-2028 UT Austin tuition: in-state approximately $12,000-$12,300/year (assuming the current legislature freeze expires and normal ~3% increases resume); out-of-state approximately $47,000-$48,000/year (assuming continued ~4-5% annual increases). These are projections based on historical patterns; verify with UT One Stop when the year approaches.` },
  { q: 'Will the in-state tuition freeze extend beyond 2026-2027?', a: 'Uncertain. The current freeze was passed by the Texas Legislature and covers through the 2026-27 academic year. Extension would require new legislative action. Texas legislative sessions occur every two years (odd years), so the 87th Legislature (2027 session) could extend the freeze. Political support has been strong historically. Plan for either the freeze continuing OR normal 3% annual increases resuming.' },
  { q: 'When will UT Austin publish official 2027-2028 tuition?', a: 'UT typically publishes finalized tuition rates in spring of the year prior. For 2027-28 academic year, expect finalized rates from UT Office of the Registrar and Board of Regents in approximately spring 2027. Check UT One Stop at that time.' },
  { q: 'What is the difference between tuition and required fees?', a: 'Tuition covers instruction; required fees cover student services (library, technology, athletics, health, transportation). Both are set annually. The Texas legislature freeze applies to tuition; required fees may adjust modestly under Board of Regents discretion.' },
  { q: 'How much will 4 years of UT cost for Class of 2031 (entering Fall 2027)?', a: `Approximate 4-year tuition projection for Class of 2031: In-state 4-year total ~$50,000-$54,000 (assuming freeze extension or modest increases). Non-resident 4-year total ~$200,000-$220,000 (assuming ~4% annual increases). With Texas residency pathway (year 1 OOS, years 2-4 in-state): ~$95,000-$105,000 total 4-year tuition.` },
];

export default function Tuition2027Page() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Tuition 2027-2028', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Tuition 2027-2028"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Tuition 2027-2028</h1>}
        lede="Projected UT Austin tuition for the 2027-2028 academic year: in-state rate (freeze extension uncertain), out-of-state rate projections, and what Class of 2031 families should budget for."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="2027-2028 projections">
            UT Austin tuition for 2027-28 will depend on whether the Texas legislature extends the current in-state tuition freeze (expires after 2026-27) or lets it lapse. If freeze extends: in-state ~<strong>{fmtUSD(TUITION.inStatePerYear)}/year</strong>. If freeze lapses: in-state ~<strong>$12,000-$12,300/year</strong> with normal ~3% annual increases. Non-resident tuition (not subject to freeze): projected <strong>~$47,000-$48,000/year</strong> with typical 4-5% annual increases. Official rates published spring 2027.
          </QuickAnswer>

          <AuthorBox blurb="Tracks Texas legislative action and UT tuition-setting decisions annually." />

          <h2 className="mt-0">Tuition projection scenarios for 2027-2028</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>In-State Tuition (Projected)</th>
                  <th>Out-of-State Tuition (Projected)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Legislature extends freeze</td><td className="num">~{fmtUSD(TUITION.inStatePerYear)} (unchanged)</td><td className="num">~$47,000-$48,000</td></tr>
                <tr><td>Freeze lapses; ~3% increase</td><td className="num">~$12,000-$12,300</td><td className="num">~$47,000-$48,000</td></tr>
                <tr><td>Aggressive scenario</td><td className="num">~$12,300-$12,600</td><td className="num">~$48,000-$49,500</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Historical tuition growth at UT Austin</h2>
          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Academic Year</th>
                  <th>In-State Tuition</th>
                  <th>Out-of-State Tuition</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>2019-20</td><td className="num">~$10,900</td><td className="num">~$38,600</td></tr>
                <tr><td>2020-21</td><td className="num">~$11,100</td><td className="num">~$40,100</td></tr>
                <tr><td>2021-22</td><td className="num">~$11,400</td><td className="num">~$41,700</td></tr>
                <tr><td>2022-23</td><td className="num">~$11,500</td><td className="num">~$43,100</td></tr>
                <tr><td>2023-24</td><td className="num">~$11,600</td><td className="num">~$44,400</td></tr>
                <tr><td>2024-25</td><td className="num">$11,688</td><td className="num">$44,908 (frozen through 2026-27 for in-state)</td></tr>
                <tr><td>2025-26</td><td className="num">$11,688 (frozen)</td><td className="num">$44,908</td></tr>
                <tr><td>2026-27</td><td className="num">$11,688 (frozen)</td><td className="num">~$47,000 (projected)</td></tr>
                <tr><td>2027-28 (projected)</td><td className="num">$11,688 (freeze) OR $12,000-$12,300</td><td className="num">~$47,000-$48,000</td></tr>
              </tbody>
            </table>
          </div>

          <h2>What this means for Class of 2031 planning</h2>
          <p>Students entering UT in Fall 2027 (Class of 2031) should budget conservatively:</p>
          <ul>
            <li><strong>In-state budget assumption:</strong> $12,000-$12,300/year</li>
            <li><strong>Out-of-state budget assumption:</strong> $47,500/year, growing 4% annually</li>
            <li><strong>4-year non-resident tuition (no pathway):</strong> ~$200,000-$220,000</li>
            <li><strong>4-year non-resident with Texas residency pathway:</strong> ~$95,000-$105,000</li>
            <li><strong>Savings via pathway:</strong> ~$100,000-$115,000</li>
          </ul>

          <h2>Beyond tuition: total cost of attendance projections</h2>
          <ul>
            <li><strong>Housing (on-campus residence hall):</strong> ~$13,000-$14,000/year</li>
            <li><strong>Meal plan:</strong> ~$6,000-$6,500/year</li>
            <li><strong>Books and supplies:</strong> ~$1,300/year</li>
            <li><strong>Transportation:</strong> $1,500-$2,600/year</li>
            <li><strong>Personal expenses:</strong> $2,600-$3,100/year</li>
            <li><strong>Total annual COA (in-state on-campus):</strong> ~$36,500</li>
            <li><strong>Total annual COA (out-of-state on-campus):</strong> ~$72,600</li>
            <li><strong>4-year total (in-state):</strong> ~$150,000-$160,000</li>
            <li><strong>4-year total (out-of-state):</strong> ~$300,000-$340,000</li>
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
              <li><Link href="/ut-austin-tuition-2026-2027">UT Austin tuition 2026-27</Link>: current year rates</li>
              <li><Link href="/ut-austin-4-year-cost-out-of-state">4-year cost</Link>: full financial picture</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the pathway that changes the math</li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link>: model your scenario</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-tuition-2027-2028" />
    </>
  );
}
