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

const TITLE = 'UT Austin Pre-Med: Complete Guide to the Pathway to Medical School';
const DESCRIPTION = `UT Austin pre-med guide: there is no "pre-med major" at UT but the pre-med pathway runs through Health Professions Office advising, the prerequisite science sequence, MCAT prep, clinical experience, research, and Dell Medical School adjacency. Medical school admission outcomes, GPA expectations, and how the residency pathway saves families ${fmtUSD(33220)}/year through undergrad.`;
const PATH = '/ut-austin-pre-med';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Does UT Austin have a pre-med major?', a: 'No. UT Austin does not have a "pre-med major"; pre-med is a pathway that students pursue while majoring in any field. The traditional pre-med majors at UT are Biology, Biochemistry, Chemistry, Neuroscience, and Public Health, but medical schools accept applicants from any major (including Music, Art History, Government, or Business) as long as they complete the required prerequisite courses and demonstrate strong academic performance.' },
  { q: 'What is the UT Austin Health Professions Office?', a: 'The Health Professions Office (HPO) is UT Austin\'s advising and support unit for students pursuing health professional careers (medicine, dentistry, pharmacy, optometry, veterinary medicine, physician assistant, occupational therapy, physical therapy). HPO provides pre-med advising, MCAT prep resources, application support including committee letters for medical school applications, and connections to clinical and research opportunities. Students declare pre-med intent through HPO.' },
  { q: 'What are the pre-med prerequisites at UT Austin?', a: 'Standard medical school prerequisites: General Chemistry I and II (with labs), Organic Chemistry I and II (with labs), Biochemistry, General Biology I and II (with labs), General Physics I and II (with labs), Calculus I (some schools also require Calculus II or Statistics), English Composition, Biostatistics, Psychology, Sociology. Most students complete these over 2-3 years alongside their major coursework. UT offers Honors versions of many prerequisites that strengthen medical school applications.' },
  { q: 'What GPA do I need for medical school admission from UT Austin?', a: 'Successful UT medical school applicants typically have GPAs of 3.7+ overall and 3.7+ science GPA. Top medical schools (Stanford, Harvard, Hopkins, UCSF, NYU) expect 3.85+. Texas medical schools (Dell Medical, UT-Houston, UT-San Antonio, UT-Galveston, Baylor College of Medicine) accept applicants with GPAs in the 3.6-3.9 range. UT advisors recommend maintaining a 3.7+ GPA throughout undergraduate years to keep the broadest range of medical schools available.' },
  { q: 'What MCAT score do I need from UT?', a: 'Average matriculating medical school MCAT is approximately 511-515 (95th percentile range). Top medical schools require 517+ for competitive applications. Most UT pre-med students take the MCAT in spring or summer of junior year after completing prerequisites and biochemistry. UT Pre-Med Society and Health Professions Office provide MCAT prep guidance and study group connections.' },
  { q: 'How does UT Austin compare to Texas A&M for pre-med?', a: 'Both UT and A&M produce successful medical school applicants at comparable rates. UT has Dell Medical School (a new school within the UT system, which may favor some UT undergrad applicants in admissions) and a broader liberal arts pre-med environment. A&M has stronger pre-med advising tradition and Texas A&M Health Science Center connections. Both schools have strong UT-Houston, UT-San Antonio, UTMB, and Baylor pipelines.' },
  { q: 'What is Dell Medical School and does UT undergrad help with admission?', a: 'Dell Medical School is UT Austin\'s medical school, founded in 2016 with a class of approximately 50 students per year. Dell offers a unique 4-year curriculum with significant time devoted to "leading change" in healthcare delivery. Admission to Dell is highly competitive (acceptance rate ~3%); UT undergraduate applicants do not receive automatic admissions preference but do benefit from existing UT relationships and on-campus accessibility for research and shadowing opportunities.' },
  { q: 'What clinical and research opportunities exist for pre-med at UT?', a: 'Substantial opportunities: (1) Dell Medical School research labs (open to UT undergrads as research assistants); (2) shadowing through Austin-area hospitals (St. David\'s, Ascension Seton, Baylor Scott & White); (3) clinical volunteering at Travis County Medical Society and free clinics; (4) UT Pre-Med Society organizes clinical experiences; (5) Texas Hospital Association partnerships; (6) summer research programs at Dell Medical School and UT Health-Houston. The Austin medical ecosystem (Dell, St. David\'s, Ascension Seton, Baylor) provides extensive shadowing and clinical experience access.' },
  { q: 'What is the UT Austin medical school admission rate?', a: 'UT Austin students who apply to medical school after senior year achieve admission rates of approximately 50-55% per cycle (higher than national average of ~41%). UT students with 3.7+ GPA and 510+ MCAT achieve admission rates of approximately 70-75%. UT students with 3.8+ GPA and 515+ MCAT achieve admission rates of approximately 85%+. These figures are for applicants who follow the standard pre-med pathway with HPO advising; outcomes vary by individual application strength.' },
];

export default function PreMedPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Pre-Med Guide', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Pre-med pathway"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Pre-Med: Pathway to Medical School</h1>}
        lede="Complete guide to the pre-med pathway at UT Austin: prerequisites, advising through the Health Professions Office, MCAT prep, clinical and research opportunities, and Texas medical school placement outcomes."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The short version">
            UT Austin does not have a &quot;pre-med major.&quot; Pre-med is a pathway pursued alongside any major; the Health Professions Office (HPO) provides advising and committee-letter support. Standard prerequisites: General Chemistry, Organic Chemistry, Biochemistry, General Biology, General Physics, Calculus, English, Psychology, Sociology. UT medical school applicant pool: ~50-55% admission rate (higher than national average ~41%). Average matriculating profile: 3.7+ GPA, 511+ MCAT. The <Link href="/texas-residency-rules">Texas residency pathway</Link> saves out-of-state pre-med families approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> through undergrad, with surplus 529 capacity available for medical school.
          </QuickAnswer>

          <AuthorBox blurb="Has helped pre-med families think through the four-year UT undergrad picture plus medical school funding planning." />

          <h2 className="mt-0">UT Austin pre-med at a glance</h2>
          <p>UT Austin has produced thousands of physicians over its history. The pre-med pathway runs through the Health Professions Office (HPO), the College of Natural Sciences (where most pre-med students major), and the surrounding Austin medical ecosystem (Dell Medical School, St. David&apos;s, Ascension Seton, Baylor Scott &amp; White).</p>

          <p>UT does NOT have a pre-med major. Students pursue pre-med while majoring in:</p>
          <ul>
            <li><strong>Biology, Biochemistry, Chemistry, Neuroscience:</strong> the traditional pre-med majors with the most overlap with medical school prerequisites</li>
            <li><strong>Public Health, Nutritional Sciences, Human Development:</strong> pre-med-friendly majors with applied health focus</li>
            <li><strong>Plan II Honors:</strong> highly competitive pre-med environment with liberal arts depth</li>
            <li><strong>Any other major:</strong> Music, Art History, Government, Business, Engineering, etc. Medical schools accept any major if prerequisites are completed and GPA is strong</li>
          </ul>

          <h2>The pre-med prerequisites at UT</h2>
          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Prerequisite</th>
                  <th>UT Course</th>
                  <th>Typical Timing</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>General Chemistry I + II</td><td>CH 301 + 302 + labs</td><td>Freshman year</td></tr>
                <tr><td>Organic Chemistry I + II</td><td>CH 320M + 320N + labs</td><td>Sophomore year</td></tr>
                <tr><td>Biochemistry</td><td>CH 339K or BCH 369</td><td>Junior year</td></tr>
                <tr><td>General Biology I + II</td><td>BIO 311C + 311D + labs</td><td>Freshman/sophomore year</td></tr>
                <tr><td>General Physics I + II</td><td>PHY 302K + 302L + labs</td><td>Sophomore/junior year</td></tr>
                <tr><td>Calculus I</td><td>M 408C or 408K</td><td>Freshman year</td></tr>
                <tr><td>English Composition</td><td>RHE 306 + lit elective</td><td>Freshman year</td></tr>
                <tr><td>Biostatistics</td><td>BIO 320 / SDS 328M</td><td>Junior year</td></tr>
                <tr><td>Psychology</td><td>PSY 301</td><td>Any year</td></tr>
                <tr><td>Sociology</td><td>SOC 302</td><td>Any year</td></tr>
              </tbody>
            </table>
          </div>

          <p>Honors versions of many prerequisites (Honors Chemistry, Honors Organic Chemistry, Honors Biology) are available for strong students and strengthen medical school applications by demonstrating rigorous course choice.</p>

          <h2>The four-year pre-med timeline at UT</h2>

          <h3>Freshman year</h3>
          <ul>
            <li>General Chemistry I + II</li>
            <li>General Biology I + II</li>
            <li>Calculus I</li>
            <li>English Composition</li>
            <li>Major-specific courses or core requirements</li>
            <li>Begin clinical exposure (volunteering, shadowing)</li>
            <li>Join UT Pre-Med Society and Health Professions Office</li>
          </ul>

          <h3>Sophomore year</h3>
          <ul>
            <li>Organic Chemistry I + II</li>
            <li>General Physics I + II</li>
            <li>Major courses</li>
            <li>Increase clinical and research engagement</li>
            <li>Begin MCAT preliminary review</li>
          </ul>

          <h3>Junior year</h3>
          <ul>
            <li>Biochemistry</li>
            <li>Biostatistics</li>
            <li>Psychology, Sociology (if not completed)</li>
            <li>MCAT preparation; sit for MCAT in spring or summer</li>
            <li>Build relationships with science faculty for letters of recommendation</li>
            <li>Apply to summer research or clinical programs</li>
          </ul>

          <h3>Senior year</h3>
          <ul>
            <li>Complete major</li>
            <li>Apply to medical school (AMCAS opens May before senior year; primary applications due in summer; secondary applications and interviews fall through spring)</li>
            <li>Request HPO committee letter</li>
            <li>Senior thesis or capstone project (if applicable)</li>
          </ul>

          <h2>Medical school admission outcomes from UT Austin</h2>
          <p>UT Austin pre-med applicants achieve admission rates above the national average. Approximate outcomes:</p>
          <ul>
            <li><strong>Overall UT applicant admission rate:</strong> ~50-55% per cycle (vs national ~41%)</li>
            <li><strong>Applicants with 3.7+ GPA and 510+ MCAT:</strong> ~70-75% admission rate</li>
            <li><strong>Applicants with 3.8+ GPA and 515+ MCAT:</strong> ~85%+ admission rate</li>
            <li><strong>Texas medical school placement:</strong> Dell Medical, UT-Houston (McGovern), UT-San Antonio (Long), UTMB-Galveston, Baylor College of Medicine, and Texas Tech are common destinations</li>
            <li><strong>Out-of-state placement:</strong> applicants with strong profiles also attend top out-of-state programs (Harvard, Hopkins, Stanford, UCSF, UPenn, Duke, NYU)</li>
          </ul>

          <h2>The Texas medical school advantage for UT undergrads</h2>
          <p>Texas operates seven public medical schools (Dell Medical at UT Austin, McGovern at UT-Houston, Long at UT-San Antonio, UTMB Galveston, Texas Tech in Lubbock and El Paso, Texas A&amp;M College of Medicine). Texas medical schools admit approximately 90% of their students from Texas applicants under the Texas Medical and Dental Schools Application Service (TMDSAS) priority system. For Texas residents (including those who establish residency through the UT undergrad residency pathway), this provides a significantly easier path to medical school than out-of-state applicants face.</p>

          <h2>The Texas residency pathway for pre-med families</h2>
          <div className="callout">
            <h4>Two compounding benefits for pre-med families</h4>
            <p className="mb-0">An out-of-state pre-med family who establishes Texas residency during UT undergraduate enrollment sees: (1) UT undergrad tuition drops from {fmtUSD(TUITION.outOfStatePerYear)}/year to {fmtUSD(TUITION.inStatePerYear)}/year, saving approximately {fmtUSD(TUITION.threeYearSavings)} over 3 years; (2) Student becomes Texas resident for TMDSAS Texas medical school admission (the priority pool), opening Dell Medical and other Texas medical schools at in-state rates ($30-45K/year vs $60-75K/year out-of-state). Combined undergrad + medical school savings: approximately $200,000-$300,000.</p>
          </div>

          <h2>Pre-med advising and support at UT</h2>
          <ul>
            <li><strong>Health Professions Office (HPO):</strong> pre-med advising, committee letter coordination, application support, mock interviews</li>
            <li><strong>UT Pre-Med Society:</strong> student organization with shadowing connections, MCAT study groups, alumni mentorship</li>
            <li><strong>Freshman Research Initiative:</strong> pre-med-friendly research projects starting freshman year</li>
            <li><strong>UTeach Pre-Med:</strong> for pre-med students interested in teaching alongside their medical career</li>
            <li><strong>Dell Medical School research labs:</strong> open to UT undergrads as research assistants</li>
            <li><strong>Austin clinical opportunities:</strong> St. David&apos;s, Ascension Seton, Baylor Scott &amp; White, free clinics</li>
          </ul>

          <h2>Pre-med vs other UT majors: cost comparison</h2>
          <p>Pre-med students at UT typically major in Biology, Biochemistry, or Neuroscience within the College of Natural Sciences. Natural Sciences tuition at UT is approximately {fmtUSD(TUITION.colleges.natural.in)}/year resident and {fmtUSD(TUITION.colleges.natural.out)}/year non-resident, very close to the base rate. Lab fees add approximately $500-$1,500/year for pre-med specifically. MCAT prep is an additional one-time cost of $1,500-$3,500.</p>

          <h2>Medical school cost considerations</h2>
          <ul>
            <li><strong>Texas medical school in-state tuition:</strong> ~$22,000-$30,000/year (after Texas residency)</li>
            <li><strong>Texas medical school out-of-state tuition:</strong> ~$45,000-$65,000/year</li>
            <li><strong>Top private medical schools:</strong> $65,000-$75,000/year tuition</li>
            <li><strong>Four-year medical school cost (TX in-state):</strong> ~$200,000-$280,000 including living expenses</li>
            <li><strong>Federal student loans available for medical school:</strong> $40,500-$47,167/year (Stafford) plus Grad PLUS up to cost of attendance</li>
            <li><strong>Public service loan forgiveness (PSLF):</strong> available for physicians working in qualifying public service settings</li>
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
              <li><Link href="/ut-austin-natural-sciences-tuition">Natural Sciences tuition</Link>: cost of the typical pre-med major college</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the pathway that unlocks Texas medical school in-state rates</li>
              <li><Link href="/ut-austin-acceptance-rate-out-of-state">UT Austin acceptance rate</Link>: getting in as a pre-med applicant</li>
              <li><Link href="/529-plan-ut-austin">529 plan for UT</Link>: funding undergrad and medical school</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-pre-med" />
    </>
  );
}
