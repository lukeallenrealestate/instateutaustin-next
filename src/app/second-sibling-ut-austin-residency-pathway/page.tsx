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

const TITLE = 'Second Sibling at UT Austin: Residency Pathway for Multiple Kids';
const DESCRIPTION = `Second sibling at UT Austin residency pathway: how families with multiple UT-bound students maximize savings. Established Texas residency continues; second sibling starts as Texas resident from day one. Save ~${fmtUSD(TUITION.threeYearSavings + TUITION.annualSavings * 4)}+ across two kids.`;
const PATH = '/second-sibling-ut-austin-residency-pathway';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'If my first child established Texas residency for UT, does my second child automatically get in-state tuition?', a: 'The parent\'s established Texas residency generally transfers to subsequent children on the dependent-student branch. Once parents are Texas residents (through the pathway executed for the first child), the second child born or moving to Texas as a minor typically inherits Texas residency for tuition purposes. This is a substantial savings advantage for families with multiple UT-bound students.' },
  { q: 'How much does a family save with two UT students on the residency pathway?', a: `A family with two students at UT can save approximately $175,000-$225,000 in tuition versus paying non-resident tuition for both. First student: ~${fmtUSD(TUITION.threeYearSavings)} (residency pathway years 2-4). Second student: full 4 years at in-state rate (already established resident) saves ~${fmtUSD(TUITION.annualSavings * 4)} vs 4 years out-of-state. Combined: substantial multi-student savings.` },
  { q: 'Do we need to buy another property for the second sibling?', a: 'Usually no. The same Texas property that supported residency for the first student typically supports the second student\'s residency. Parent-owned property continues to serve as the family\'s Texas domicile. Second student lives at the same property (or Rule #4 LLC continues with second student as tenant). Documentary set for parents remains valid; second child inherits parent residency.' },
  { q: 'Should the older student maintain Texas residency after graduation?', a: 'For families with continuing UT students, yes. Maintaining Texas residency through parents\' domicile means the family remains classified as Texas residents. Older student can move away for graduate school or work while the parents\' Texas ties remain intact (property, driver\'s license, tax returns). The second student benefits from continuing family residency.' },
  { q: 'What if the older student never established residency?', a: 'If the older student paid OOS tuition for 4 years without pursuing residency, the family still may have parent-level Texas ties that support second-student residency. However, if parents never established genuine Texas domicile, the second student would need to independently establish residency (12-month clock for the second student). Best case: retroactively establishing parent domicile before second student enrolls.' },
  { q: 'What about a third or fourth UT student?', a: 'Same principle. Once parents have established genuine Texas domicile, subsequent children benefit from that residency for tuition purposes throughout their UT enrollment. Total family savings across 3-4 students can exceed $500,000-$700,000 vs paying OOS for all.' },
  { q: 'Do we need to notify UT about the second student?', a: 'Yes. Each student\'s residency classification is separately determined at admission. The second student\'s application will be classified based on parent residency at time of application. If parents are already Texas residents, the second student is classified as Texas resident from day one, unlike the first student who needed a reclassification petition after 12 months.' },
];

export default function SecondSiblingPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Second Sibling UT Austin Residency', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="Multi-student families"
        title={<h1 className="text-ink max-w-[24ch]">Second Sibling at UT Austin: Residency Pathway</h1>}
        lede="How families with multiple UT-bound students maximize the residency pathway. Once parents are Texas residents, subsequent children inherit residency from day one at UT."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The multi-student advantage">
            Once parents have established Texas domicile (through the pathway for the first UT student), subsequent children typically inherit Texas residency for tuition purposes. Second sibling starts at UT as Texas resident from day one at <strong>{fmtUSD(TUITION.inStatePerYear)}/year</strong> vs <strong>{fmtUSD(TUITION.outOfStatePerYear)}/year</strong>. For a family with two UT students, combined tuition savings vs paying OOS for both: <strong>~$175K-$225K</strong>.
          </QuickAnswer>

          <AuthorBox blurb="Has worked with multi-student UT families to optimize the residency pathway across siblings." />

          <h2 className="mt-0">How multi-student residency works</h2>
          <p>The Texas Education Code §54.052 residency framework applies to individual students but derives from parent domicile for dependent students (traditional pathway). Once parents have established genuine Texas residency:</p>
          <ul>
            <li>The parent&apos;s residency is documented and recognized by UT</li>
            <li>Subsequent dependent children benefit from that established parent residency</li>
            <li>Second student&apos;s residency classification at admission uses parent&apos;s current residency</li>
            <li>No 12-month reclassification petition needed for second student</li>
            <li>Second student pays in-state tuition from day one at UT</li>
          </ul>

          <h2>The multi-student savings math</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>First Student 4-Year Tuition</th>
                  <th>Second Student 4-Year Tuition</th>
                  <th>Total Family Savings vs OOS Both</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Both OOS (no pathway)</td><td className="num">~$180,000</td><td className="num">~$180,000</td><td className="num">Baseline</td></tr>
                <tr><td>First uses pathway (year 2 reclassification); second inherits Texas residency</td><td className="num">~$79,000</td><td className="num">~$48,000</td><td className="num">~$233,000 saved</td></tr>
                <tr><td>Both directly enrolled as Texas residents (parents relocated before first)</td><td className="num">~$48,000</td><td className="num">~$48,000</td><td className="num">~$264,000 saved</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Common multi-student scenarios</h2>

          <h3>Scenario 1: Older sibling pioneers the pathway</h3>
          <ul>
            <li>Family moves to Texas summer before older sibling&apos;s freshman year at UT</li>
            <li>Older sibling: year 1 OOS tuition; residency reclassification for year 2</li>
            <li>Family maintains Texas residency throughout older sibling&apos;s UT years</li>
            <li>Younger sibling enrolls 1-4 years later; classified as Texas resident from day one</li>
            <li>Total tuition savings: ~$230,000+ across both students</li>
          </ul>

          <h3>Scenario 2: Simultaneous enrollment (twins or close siblings)</h3>
          <ul>
            <li>Family moves to Texas summer before both children start at UT</li>
            <li>Both siblings: year 1 OOS tuition</li>
            <li>Family petitions residency; both reclassified for year 2</li>
            <li>Both siblings pay in-state tuition for years 2-4</li>
            <li>Total tuition savings: ~$198,000 across both students</li>
          </ul>

          <h3>Scenario 3: Parents fully relocate before first student</h3>
          <ul>
            <li>Family relocates to Texas 12+ months before first student enrolls at UT</li>
            <li>Parents establish full Texas residency during younger children&apos;s high school years</li>
            <li>All children enroll at UT as Texas residents from day one</li>
            <li>No first-year OOS tuition for anyone</li>
            <li>Maximum savings; typically requires full family relocation</li>
          </ul>

          <h2>Practical execution for multi-student families</h2>
          <ol>
            <li><strong>Assess family timeline:</strong> when does each student expect to enroll at UT?</li>
            <li><strong>Plan the residency pathway around the first student:</strong> execute during their freshman year</li>
            <li><strong>Maintain Texas ties throughout older student&apos;s enrollment:</strong> don&apos;t let residency lapse</li>
            <li><strong>Document family residency clearly:</strong> parents maintain Texas driver&apos;s license, voter registration, tax returns, property</li>
            <li><strong>Second student applies from Texas:</strong> apply with Texas address and family residency documentation</li>
            <li><strong>Enjoy in-state tuition from day one for second student</strong></li>
          </ol>

          <h2>What about the Texas property?</h2>
          <ul>
            <li>Same Texas property can serve multiple students</li>
            <li>If students overlap at UT, both live at the property (or share housing)</li>
            <li>If sequential, the property continues to house successive students</li>
            <li>Rule #4 LLC structure can serve multiple student tenants over years</li>
            <li>Property becomes long-term family asset with continued appreciation</li>
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
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the underlying framework</li>
              <li><Link href="/how-to-establish-texas-residency">Establish Texas residency</Link>: the pathway</li>
              <li><Link href="/how-to-save-100k-ut-austin-tuition">$100K savings playbook</Link>: comprehensive strategy</li>
              <li><Link href="/moving-to-austin-from-out-of-state">Moving to Austin</Link>: for full family relocation</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-second-sibling" />
    </>
  );
}
