import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactSection } from '@/components/ContactSection';
import { fmtUSD, TUITION } from '@/lib/tuition';
import { SITE } from '@/lib/site';

const TITLE = 'UT Austin Acceptance Rate for Out-of-State Students (Real Numbers)';
const DESCRIPTION = 'UT Austin out-of-state acceptance rate runs roughly 8-13% in recent years (vs ~31% overall), with significant variation by college. Honest breakdown of the actual admissions math, what helps non-resident applications, and the post-admit residency pathway.';
const PATH = '/ut-austin-acceptance-rate-out-of-state';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is the UT Austin acceptance rate for out-of-state students?', a: 'UT Austin\'s out-of-state acceptance rate runs approximately 8-13% in recent application cycles, compared to a roughly 31% overall acceptance rate. The non-resident rate is dramatically lower because Texas law (HB 1403) caps non-resident undergraduate enrollment at approximately 10% of the entering class. Combined with the Texas Top 10% Rule that fills approximately 75% of the in-state seats automatically, the slots available to non-resident applicants are small and very competitive.' },
  { q: 'How many out-of-state students attend UT Austin?', a: 'Approximately 10% of the undergraduate population at UT Austin is out-of-state students. With total undergraduate enrollment of approximately 42,000, that translates to roughly 4,200 non-resident undergraduates across all four years, or roughly 1,000-1,100 incoming non-resident freshmen per year out of an entering class of approximately 8,500-9,000.' },
  { q: 'Is it harder to get into UT Austin from out of state than in state?', a: 'Significantly harder. Texas law caps non-resident enrollment at approximately 10%, and the Texas Top 10% Rule (automatic admission for the top 6% of Texas high school graduates) consumes approximately 75% of the in-state seats. Non-residents compete for a small remaining pool of holistic-review seats. Admitted non-residents typically have substantially higher academic profiles (GPA, test scores, extracurricular depth) than the median admitted Texas student.' },
  { q: 'What is the average GPA for admitted out-of-state students at UT Austin?', a: 'Admitted non-residents typically have unweighted GPA in the 3.9-4.0 range. The middle 50% admitted student profile across all UT students shows 4.0 weighted GPA range; non-residents skew toward the top of that range. For the most selective colleges (McCombs Business, Computer Science, Cockrell Engineering), admitted non-resident GPA averages closer to 4.0 unweighted.' },
  { q: 'What test scores do out-of-state students need for UT Austin?', a: 'UT Austin\'s middle 50% admitted student profile shows SAT scores of approximately 1,300-1,500 and ACT scores of approximately 29-34. Out-of-state admits typically score in the upper half of those ranges. For McCombs Business, Computer Science, and Cockrell Engineering as a non-resident, expect to need SAT 1,470+ or ACT 33+ to be competitive. UT is test-optional but most successful non-resident applicants submit scores.' },
  { q: 'What helps an out-of-state application to UT Austin?', a: 'Strong academic rigor (highest available curriculum at your high school: AP, IB, dual enrollment, post-AP courses), top decile class rank, evidence of significant impact in one or two areas of extracurricular involvement (depth over breadth), authentic essays that demonstrate fit for UT specifically (not generic essays), and a major choice that matches your demonstrated strengths. For McCombs and CS, leadership in business or technical contexts (clubs, competitions, projects, work) is heavily weighted.' },
  { q: 'Does the Texas Top 10% Rule apply to out-of-state students?', a: 'No. The Texas Top 10% Rule (which guarantees automatic admission for Texas high school graduates in the top percentage of their class) applies only to Texas residents and Texas high school graduates. Non-residents go through UT\'s holistic review process for the small percentage of seats available to non-residents.' },
  { q: 'Can my student establish Texas residency before applying to UT Austin?', a: 'Yes, but the practical effect on the application is limited. Texas residency for tuition purposes can be established by parents 12 months before the student begins college; the student inherits residency from parents under dependency rules. However, the resulting Texas-resident status applies to tuition classification, not necessarily to the admissions consideration. UT\'s admissions office considers domicile at application time. Many out-of-state families pursue the residency pathway after admission and matriculation rather than before application.' },
  { q: 'Should I apply to UT Austin from out of state given the low acceptance rate?', a: 'Apply if your academic profile is strong (top 5-10% of class, SAT 1,400+ or ACT 31+) and your essays demonstrate genuine fit. UT Austin is an extraordinary value for in-state and a strong value for non-residents who pursue the residency pathway. The low non-resident acceptance rate reflects the cap, not the value of attending. Many high-academic non-residents apply and matriculate every year, and the property pathway to residency is achievable for families with the financial capacity.' },
];

export default function AcceptanceRatePage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Acceptance Rate for Out-of-State', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Out-of-state admissions"
        title={<h1 className="text-ink max-w-[24ch]">UT Austin Acceptance Rate for Out-of-State Students</h1>}
        lede="The honest admissions math for non-resident applicants: how the Texas 10% non-resident cap and the Top 10% Rule compress non-resident slots, what academic profile is realistic, and how to plan."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The honest answer">
            UT Austin&apos;s out-of-state acceptance rate runs approximately <strong>8-13%</strong> in recent application cycles, compared to a roughly <strong>31% overall</strong> acceptance rate. The gap reflects two structural facts: (1) Texas law caps non-resident undergraduate enrollment at approximately 10% of the entering class, and (2) the Texas Top 10% Rule consumes about 75% of in-state seats automatically. The remaining holistic-review pool, which is what non-residents compete for, is small and very competitive.
          </QuickAnswer>

          <AuthorBox blurb="Has helped dozens of out-of-state families think through both the UT admissions math and the post-admit residency pathway." />

          <h2 className="mt-0">The acceptance rate structure at UT Austin</h2>
          <p>UT Austin admissions has three structural facts that drive the math:</p>
          <ol>
            <li><strong>The Texas Top 10% Rule.</strong> Texas high school graduates in the top 6% of their class are automatically admitted to UT Austin. By state law, automatic admits cannot exceed 75% of the entering class. UT currently uses approximately 73-75% of seats for automatic admits.</li>
            <li><strong>The 10% non-resident cap.</strong> Non-resident undergraduate enrollment is capped at approximately 10% of the entering class. This is a fixed cap regardless of applicant demand.</li>
            <li><strong>Holistic review.</strong> The remaining seats (approximately 25% of the class for in-state non-automatic admits, plus the full 10% non-resident allocation) go through holistic review.</li>
          </ol>

          <h2>Acceptance rates by classification</h2>
          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Applicant Pool</th>
                  <th>Approximate Acceptance Rate</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Top 10% Rule (Texas residents in top 6%)</td><td className="num">~100%</td><td>Automatic to UT, not always to major</td></tr>
                <tr><td>Texas residents, holistic review</td><td className="num">~40-55%</td><td>Varies by college; McCombs and CS lower</td></tr>
                <tr><td>Out-of-state, all colleges aggregated</td><td className="num">~8-13%</td><td>Most competitive applicant pool at UT</td></tr>
                <tr><td>International applicants</td><td className="num">~5-8%</td><td>Most competitive at UT</td></tr>
                <tr><td>Overall acceptance rate</td><td className="num">~31%</td><td>Includes Top 10% auto-admits</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Out-of-state acceptance rate by college</h2>
          <p>Within the small non-resident pool, acceptance rates vary significantly by college:</p>
          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>UT College</th>
                  <th>Approximate OOS Acceptance Rate</th>
                  <th>Selectivity Driver</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Computer Science (CSDS)</td><td className="num">~4-7%</td><td>Highest demand, smallest direct-admit pool</td></tr>
                <tr><td>McCombs School of Business</td><td className="num">~5-8%</td><td>Direct admit, very competitive</td></tr>
                <tr><td>Cockrell School of Engineering</td><td className="num">~8-12%</td><td>Direct admit by discipline, ECE/CE most selective</td></tr>
                <tr><td>College of Natural Sciences</td><td className="num">~12-15%</td><td>Largest college, broader pool</td></tr>
                <tr><td>College of Liberal Arts</td><td className="num">~15-20%</td><td>Largest liberal arts college at UT</td></tr>
                <tr><td>Moody College of Communication</td><td className="num">~10-13%</td><td>Competitive but accessible</td></tr>
                <tr><td>College of Education</td><td className="num">~18-22%</td><td>More accessible</td></tr>
                <tr><td>College of Fine Arts</td><td className="num">~10-15%</td><td>Portfolio-driven; varies by major</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Academic profile of admitted out-of-state students</h2>
          <p>Admitted non-residents at UT Austin typically have substantially higher academic profiles than the overall median:</p>
          <ul>
            <li><strong>Unweighted GPA:</strong> 3.9-4.0 (middle 50%)</li>
            <li><strong>Class rank:</strong> top 5% of high school class (when reported)</li>
            <li><strong>SAT:</strong> 1,420-1,520 (middle 50% of OOS admits, vs 1,300-1,500 overall)</li>
            <li><strong>ACT:</strong> 32-35 (middle 50% of OOS admits, vs 29-34 overall)</li>
            <li><strong>Course rigor:</strong> highest available curriculum (AP, IB, dual enrollment, post-AP) consistently across all four years</li>
            <li><strong>Extracurricular profile:</strong> evidence of significant impact in one or two areas (depth over breadth); leadership in a national or state-level capacity is common</li>
          </ul>

          <h2>What helps an out-of-state application to UT Austin</h2>
          <h3>Academic distinction</h3>
          <p>Rigor and performance matter above all. Take the most demanding courses available at your high school every year. Strong AP, IB, or dual enrollment performance is more valuable than mediocre Honors performance. UT admissions reads each transcript in context (course offerings at the high school) but expects the most demanding feasible curriculum.</p>

          <h3>Authentic essays that demonstrate fit</h3>
          <p>Generic college essays do not work for UT. Each major has its own essay prompt; engineering applicants write about engineering; business applicants write about business. UT&apos;s admissions readers look for evidence the applicant has researched the major and the college specifically. Vague aspirations get rejected. Specific, well-substantiated motivation gets admitted.</p>

          <h3>Depth in extracurricular impact</h3>
          <p>UT favors students who have made significant contributions in one or two areas (founded a 501c3, ran a regional competition, conducted faculty-mentored research, achieved national recognition) over students with shallow involvement in many activities. Quality over quantity.</p>

          <h3>The right college choice</h3>
          <p>Non-residents applying to less-selective colleges (Liberal Arts, Education) have substantially higher acceptance rates than those applying to McCombs, CS, or Engineering. If your goal is &quot;attend UT Austin&quot; rather than &quot;attend McCombs specifically,&quot; consider an entry into Natural Sciences or Liberal Arts with intent to internal transfer or pursue your interests through electives.</p>

          <h2>The post-admit calculation: residency pathway value</h2>
          <p>Many high-academic out-of-state families apply to UT Austin without realizing the post-admit residency pathway exists. Once admitted, the family can pursue the Texas residency reclassification under Texas Education Code §54.052. The 12-month domicile clock plus property pathway converts non-resident classification to resident classification, saving approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> for years 2-4 of enrollment (approximately {fmtUSD(TUITION.threeYearSavings)} total over three years).</p>

          <p>For a family considering UT vs in-state options, the four-year tuition picture with residency pathway can compete favorably with the home-state flagship at full sticker. The non-resident acceptance rate is low but the financial math, once admitted, is often better than families anticipate.</p>

          <h2>Timeline for an out-of-state UT applicant</h2>
          <ol>
            <li><strong>October of senior year:</strong> Submit ApplyTexas application by November 1 for priority deadline; complete UT-specific essays</li>
            <li><strong>November 1:</strong> Apply for Forty Acres Scholars Program (if academic profile supports)</li>
            <li><strong>December 1:</strong> Priority scholarship deadline; complete UT Honors and Scholarship Application in MyStatus</li>
            <li><strong>January 15:</strong> FAFSA priority deadline</li>
            <li><strong>February-March:</strong> Decision notifications</li>
            <li><strong>April:</strong> Compare offers; decision</li>
            <li><strong>May 1:</strong> Commit to UT (or another school)</li>
            <li><strong>Summer:</strong> If pursuing residency pathway, this is when property acquisition and Texas domicile establishment begins</li>
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
              <li><Link href="/is-ut-austin-worth-it-out-of-state">Is UT Austin worth it out of state</Link>: the value analysis</li>
              <li><Link href="/ut-austin-scholarships-out-of-state">Scholarships for out-of-state students</Link>: every merit award open to non-residents</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the post-admit pathway</li>
              <li><Link href="/by-college">By UT college</Link>: per-college admissions and tuition</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-acceptance-rate-oos" />
    </>
  );
}
