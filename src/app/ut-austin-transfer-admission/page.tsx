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

const TITLE = 'UT Austin Transfer Admission (Out-of-State Path + Residency Pathway)';
const DESCRIPTION = `Complete guide to UT Austin transfer admission for out-of-state students: requirements, deadlines, college-by-college transfer pathways, and how transfer admission interacts with the Texas residency pathway for a ${fmtUSD(TUITION.annualSavings)}/year tuition reduction.`;
const PATH = '/ut-austin-transfer-admission';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Can I transfer to UT Austin from out of state?', a: 'Yes. UT Austin accepts transfer students for both fall and spring semesters from accredited US colleges, universities, and community colleges. Transfer admission is competitive but more accessible than freshman admission for many colleges. The transfer process is fully separate from freshman admission with its own application, deadlines, and criteria.' },
  { q: 'What are the requirements for UT Austin transfer admission?', a: 'General requirements: completion of at least 24 transferable credit hours (16 for spring transfer) at the college level, college GPA of approximately 3.5+ for most colleges (3.0+ for some less selective majors), completion of specific prerequisite coursework for the intended major, and a strong overall academic profile. McCombs Business, Computer Science, and Cockrell Engineering have additional requirements (specific coursework, GPA thresholds typically 3.7+).' },
  { q: 'What is the UT Austin transfer acceptance rate?', a: 'Transfer acceptance rates vary by college. Overall transfer acceptance rate is approximately 35-45%. McCombs Business: ~10-15%. Computer Science: ~5-10%. Cockrell Engineering: ~20-25%. Liberal Arts: ~50-60%. Natural Sciences: ~35-45%. The transfer pool is typically more academically established than the freshman pool (with college GPAs to support evaluation).' },
  { q: 'What is the deadline for UT Austin transfer admission?', a: 'Fall transfer deadline is typically March 1. Spring transfer deadline is typically October 1. Specific dates vary year to year. Application materials include the ApplyTexas transfer application, college transcripts from every institution attended, and (for some colleges) additional essays or resume.' },
  { q: 'Do transfer students get in-state tuition at UT Austin?', a: 'Transfer students are classified for tuition purposes based on the residency rules under Texas Education Code §54.052, same as freshman admits. Out-of-state transfer students pay non-resident tuition initially. Establishing Texas residency (typically 12 months of qualifying Texas domicile) reclassifies the student to the in-state rate. The residency pathway is identical for transfers and freshmen.' },
  { q: 'Can I do my first year at community college and transfer to UT Austin?', a: 'Yes. Community college transfer is a common pathway, especially through Texas community colleges (Austin Community College, Lone Star College, etc.) under the Texas Common Course Numbering System. Many Texas community colleges have articulation agreements with UT that guarantee admission or expedite the process for qualifying students. For out-of-state students, community college transfer can also pair with the residency pathway: attend a Texas community college for 12 months, establish Texas residency, then transfer to UT as a Texas resident.' },
  { q: 'How does UT Austin transfer admission compare to freshman admission?', a: 'Transfer admission is typically more accessible than freshman admission for non-Top 10% Texas residents and for out-of-state applicants. The Top 10% Rule does not apply to transfers; admission is fully holistic. The applicant pool is smaller and the evaluation is based on college-level academic performance rather than high school profile. Transfer admission to McCombs, CS, and Cockrell remains highly competitive.' },
  { q: 'Will my credits transfer to UT Austin?', a: 'Most academic credits from regionally accredited US colleges transfer to UT Austin. UT applies its own evaluation: courses must be equivalent in content and level to UT courses to count toward degree requirements. The Texas Common Course Numbering System governs Texas community college to UT transfers; out-of-state transfers are evaluated case-by-case. The transfer credit evaluation happens after admission. Most students lose some credits in transfer (typically 6-15 hours across a 60-hour transfer).' },
];

export default function TransferAdmissionPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Transfer Admission', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Transfer admission"
        title={<h1 className="text-ink max-w-[24ch]">UT Austin Transfer Admission</h1>}
        lede="Complete guide for out-of-state transfer applicants: requirements, deadlines, by-college pathways, and how transfer admission combines with the Texas residency pathway."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The short version">
            UT Austin accepts transfer students for fall and spring semesters. Transfer admission is competitive but typically more accessible than freshman admission for non-Top-10% Texas residents and out-of-state students. Common requirements: 24+ transferable college credit hours, 3.5+ college GPA, specific prerequisite coursework. Out-of-state transfer students pay non-resident tuition initially; the <Link href="/texas-residency-rules">Texas residency pathway</Link> applies identically to transfers, saving <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> after 12 months of qualifying domicile.
          </QuickAnswer>

          <AuthorBox blurb="Has helped families think through transfer admission pathways, including combining out-of-state community college attendance with the Texas residency pathway." />

          <h2 className="mt-0">Transfer vs freshman admission at UT Austin</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Criterion</th>
                  <th>Freshman Admission</th>
                  <th>Transfer Admission</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Top 10% Rule applies</td><td>Yes (for Texas residents)</td><td>No</td></tr>
                <tr><td>Application platform</td><td>ApplyTexas freshman</td><td>ApplyTexas transfer</td></tr>
                <tr><td>Deadlines</td><td>Nov 1 priority, Dec 1 regular</td><td>Mar 1 (fall), Oct 1 (spring)</td></tr>
                <tr><td>Primary evaluation</td><td>HS GPA, SAT/ACT, rigor, essays</td><td>College GPA, course rigor, essays</td></tr>
                <tr><td>Overall acceptance rate</td><td>~31% overall (~8-13% non-resident)</td><td>~35-45% overall</td></tr>
                <tr><td>McCombs acceptance rate</td><td>~10% direct admit</td><td>~10-15% transfer</td></tr>
                <tr><td>CS acceptance rate</td><td>~5-8% direct admit</td><td>~5-10% transfer</td></tr>
                <tr><td>Cockrell acceptance rate</td><td>~15-20% direct admit</td><td>~20-25% transfer</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Transfer requirements by college</h2>

          <h3>McCombs School of Business</h3>
          <ul>
            <li><strong>Credits required:</strong> 24+ transferable hours; 60 strongly preferred</li>
            <li><strong>GPA:</strong> 3.7+ competitive</li>
            <li><strong>Prerequisites:</strong> Microeconomics, Macroeconomics, Statistics, Calculus 1, Composition</li>
            <li><strong>Selectivity:</strong> ~10-15% acceptance rate; among the most competitive transfers at UT</li>
            <li><strong>Tip:</strong> demonstrate strong business-relevant extracurriculars during pre-transfer enrollment</li>
          </ul>

          <h3>Computer Science (CSDS)</h3>
          <ul>
            <li><strong>Credits required:</strong> 24+ transferable hours</li>
            <li><strong>GPA:</strong> 3.8+ competitive; 4.0 typical for successful transfers</li>
            <li><strong>Prerequisites:</strong> Calculus 1 and 2, Discrete Math, Programming I and II (or equivalent CS sequence), Linear Algebra preferred</li>
            <li><strong>Selectivity:</strong> ~5-10% acceptance rate; the most selective transfer pathway at UT</li>
            <li><strong>Tip:</strong> meaningful programming portfolio + research experience or independent projects</li>
          </ul>

          <h3>Cockrell School of Engineering</h3>
          <ul>
            <li><strong>Credits required:</strong> 24+ transferable hours</li>
            <li><strong>GPA:</strong> 3.5+ for most disciplines; 3.7+ competitive</li>
            <li><strong>Prerequisites:</strong> Calculus 1 and 2, Physics 1 and 2, Chemistry, Engineering 101</li>
            <li><strong>Selectivity:</strong> ~20-25% acceptance rate by discipline</li>
            <li><strong>Tip:</strong> demonstrate engineering-track coursework and any relevant hands-on experiences</li>
          </ul>

          <h3>College of Natural Sciences</h3>
          <ul>
            <li><strong>Credits required:</strong> 24+ transferable hours</li>
            <li><strong>GPA:</strong> 3.0+ for most majors; 3.5+ competitive</li>
            <li><strong>Prerequisites:</strong> varies by major (Biology, Chemistry, Math, Physics specific prerequisites)</li>
            <li><strong>Selectivity:</strong> ~35-45% acceptance rate</li>
          </ul>

          <h3>College of Liberal Arts</h3>
          <ul>
            <li><strong>Credits required:</strong> 24+ transferable hours</li>
            <li><strong>GPA:</strong> 3.0+ for most majors; 3.5+ for honors programs</li>
            <li><strong>Prerequisites:</strong> Composition + general education core; major-specific prereqs vary</li>
            <li><strong>Selectivity:</strong> ~50-60% acceptance rate; the most accessible UT college for transfer</li>
          </ul>

          <h3>Moody College of Communication</h3>
          <ul>
            <li><strong>Credits required:</strong> 24+ transferable hours</li>
            <li><strong>GPA:</strong> 3.0+ for most majors; 3.5+ competitive</li>
            <li><strong>Prerequisites:</strong> Composition + media studies foundation courses</li>
            <li><strong>Selectivity:</strong> ~40-50% acceptance rate</li>
          </ul>

          <h2>Transfer pathways for out-of-state students</h2>

          <h3>Pathway A: Out-of-state college to UT (standard transfer)</h3>
          <p>Attend an out-of-state college for 1-2 years, build a strong college transcript with major prerequisites, then apply for transfer to UT. This is the most common out-of-state transfer path. Pay non-resident tuition for year 1 at UT; pursue the residency pathway during year 1 for year 2 reclassification.</p>

          <h3>Pathway B: Texas community college to UT (residency + transfer)</h3>
          <p>Attend a Texas community college (Austin Community College, Lone Star College, Houston Community College) for 12-24 months. Establish Texas residency through your community college attendance and the standard documentary set. Transfer to UT as a Texas resident with in-state tuition from day one.</p>
          <ul>
            <li><strong>Pros:</strong> establishes residency before UT enrollment (in-state tuition starts immediately); much cheaper than out-of-state UT</li>
            <li><strong>Cons:</strong> longer total enrollment timeline; community college academic environment differs from UT</li>
          </ul>

          <h3>Pathway C: Gap year in Texas + freshman application</h3>
          <p>Take a gap year in Texas establishing residency (working, volunteering, traveling, or other gap-year activities), then apply as a freshman for the following academic year. The 12-month Texas presence during the gap year provides the documentary basis for in-state classification at UT enrollment.</p>

          <h3>Pathway D: Co-Enrollment Programs</h3>
          <p>UT Austin offers a Coordinated Admission Program (CAP) for some Texas students at UT-Tyler, UT-Arlington, UT-Permian Basin, UT-Dallas, UT-Rio Grande Valley, and UT-El Paso. CAP students complete their freshman year at the secondary UT campus and are guaranteed admission to UT Austin for sophomore year. CAP is limited to Texas residents.</p>

          <h2>The combined transfer + residency math</h2>
          <p>For an out-of-state student who transfers to UT Austin from an out-of-state college:</p>
          <ul>
            <li><strong>Years 1-2 (at original college):</strong> Out-of-state tuition at that college</li>
            <li><strong>Year 3 at UT (first year as UT transfer):</strong> Non-resident UT tuition (~{fmtUSD(TUITION.outOfStatePerYear)})</li>
            <li><strong>Year 4 at UT (after residency reclassification):</strong> Resident UT tuition (~{fmtUSD(TUITION.inStatePerYear)})</li>
            <li><strong>Savings via pathway:</strong> ~{fmtUSD(TUITION.annualSavings)} in year 4 only (because student only has 2 years at UT)</li>
          </ul>

          <p>For a community-college-to-UT transfer pathway where Texas residency is established at the community college:</p>
          <ul>
            <li><strong>Years 1-2 (at Texas community college):</strong> low community college tuition (~$3K-$6K/year) at the resident rate</li>
            <li><strong>Years 3-4 at UT (as Texas resident from day one):</strong> Resident UT tuition (~{fmtUSD(TUITION.inStatePerYear)}/year)</li>
            <li><strong>Savings vs out-of-state 4 years at UT:</strong> approximately $150K+ total</li>
            <li><strong>Caveat:</strong> potentially limited social experience, fewer freshman-year opportunities at UT</li>
          </ul>

          <h2>Application timeline for transfer</h2>
          <ol>
            <li><strong>Year before transfer:</strong> Complete major prerequisites; maintain GPA; build relevant extracurriculars</li>
            <li><strong>Fall transfer (March 1 deadline):</strong> Complete ApplyTexas transfer application in January-February; submit transcripts; submit essays</li>
            <li><strong>Spring transfer (October 1 deadline):</strong> Complete application in August-September</li>
            <li><strong>Decision notification:</strong> typically 4-8 weeks after deadline</li>
            <li><strong>Credit evaluation:</strong> after admission, UT reviews transcripts and applies transfer credit</li>
            <li><strong>Orientation:</strong> required before enrollment as a transfer student</li>
          </ol>

          <h2>Common transfer mistakes</h2>
          <ul>
            <li><strong>Taking weak prerequisite courses.</strong> A B in Calculus 2 at a community college is worse than an A in Calculus 1 alone. Take the most rigorous prerequisites you can pass with an A or A-.</li>
            <li><strong>Inconsistent academic record.</strong> A semester of poor grades on the transcript hurts. Show consistent strong performance.</li>
            <li><strong>Missing deadline.</strong> March 1 fall transfer is a hard deadline. No late applications.</li>
            <li><strong>Generic essays.</strong> Same essay considerations as freshman admission; specific motivation for UT and the major matters.</li>
            <li><strong>Forgetting the residency pathway.</strong> Transfer students often forget that the residency pathway applies identically; plan to establish during the first year at UT.</li>
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
              <li><Link href="/residency/transfer-students">Transfer students residency scenario</Link>: deeper residency-specific guidance for transfers</li>
              <li><Link href="/ut-austin-application-deadlines">Application deadlines</Link>: full calendar including transfer dates</li>
              <li><Link href="/ut-austin-acceptance-rate-out-of-state">UT Austin acceptance rate</Link>: freshman comparison data</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the pathway for transfer students</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-transfer-admission" />
    </>
  );
}
