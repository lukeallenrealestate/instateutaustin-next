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

const TITLE = 'McCombs Admission at UT Austin: Acceptance Rate, GPA, Essays (2026 Guide)';
const DESCRIPTION = 'McCombs School of Business admission at UT Austin: acceptance rate ~10% direct admit, average admitted GPA 3.95+, SAT 1500+, what the admissions readers actually want, BBA and BHP specific guidance, and the residency pathway for out-of-state McCombs admits.';
const PATH = '/ut-austin-mccombs-admission';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is the McCombs admission rate at UT Austin?', a: 'McCombs Business School direct-admit acceptance rate is approximately 10% overall, with non-resident acceptance rate closer to 5-8%. Approximately 1,400 freshman BBA students are admitted per year out of roughly 14,000 applications. The Business Honors Program (BHP) within McCombs is even more selective at approximately 10-15% from a smaller self-selected pool.' },
  { q: 'What GPA does McCombs require?', a: 'Admitted McCombs students typically have unweighted high school GPA in the 3.95-4.0 range. Class rank: top 5% or better. Course rigor: AP/IB/dual enrollment as available, with strong performance in math (AP Calculus AB or BC strongly preferred) and quantitative coursework. McCombs admissions reads transcripts in context but expects the most demanding curriculum reasonably available.' },
  { q: 'What SAT/ACT score does McCombs require?', a: 'Admitted McCombs middle 50% SAT range is approximately 1490-1550; ACT 33-35. Top-quartile admits score 1530+ SAT or 34+ ACT. McCombs is test-optional but most successful applicants submit scores. For non-residents, expect to need 1500+ SAT or 34+ ACT to be competitive.' },
  { q: 'What does McCombs admissions actually want in essays?', a: 'McCombs evaluates the major-specific short answer particularly carefully. Strong essays show: (1) genuine interest in business as a discipline (not just "making money"); (2) substantive leadership or entrepreneurial experiences (founded a club, ran a small business, organized a fundraiser, led a project team); (3) understanding of the specific BBA tracks at McCombs (Finance, MIS, Marketing, Accounting, Management, Supply Chain) and which interests them; (4) for BHP applicants, additional essays focused on intellectual breadth and small-cohort fit.' },
  { q: 'How do I get into the Business Honors Program (BHP)?', a: 'BHP is a separate application within McCombs admission. Submit BHP-specific essays alongside the main McCombs/UT application. BHP admits approximately 100 students per cohort from a pool of approximately 700-1,000 applicants (~10-15% acceptance). BHP requires the same academic profile as McCombs admission but emphasizes leadership impact and intellectual breadth more heavily.' },
  { q: 'Can I transfer to McCombs from another UT college?', a: 'Internal transfer to McCombs is possible but selective (acceptance rate ~10-15%). Common path: enter UT in Liberal Arts or Natural Sciences, complete McCombs prerequisites (Microeconomics, Macroeconomics, Statistics, Calculus 1, Composition) with strong grades (3.7+), then apply for internal transfer. Most successful internal transfers have college GPAs of 3.85+ plus substantive business-related extracurricular involvement.' },
  { q: 'What majors does McCombs offer?', a: 'McCombs offers BBA degrees in: Accounting, Finance, Management, Management Information Systems (MIS), Marketing, Supply Chain Management. Plus the Business Honors Program (BHP), which is a separate honors curriculum that students complete alongside their BBA major. Some students dual-major within McCombs (Finance + MIS is common) or pair their BBA with a Plan II Honors track for interdisciplinary breadth.' },
  { q: 'What is the McCombs job placement like?', a: 'McCombs BBA graduates report median starting salaries of $75,000-$95,000, with Finance and MIS at the higher end ($85,000-$110,000 with bonus). Top employers: Goldman Sachs, JPMorgan, Morgan Stanley (investment banking); McKinsey, Bain, BCG (consulting); Deloitte, EY, PwC, KPMG (Big 4 accounting); Dell, ExxonMobil, AT&amp;T (Texas corporate); plus growing tech recruiting from Apple, Google, Meta, Amazon. McCombs has strong Texas alumni network and increasingly strong national placement.' },
];

export default function McCombsAdmissionPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'McCombs Admission at UT Austin', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · McCombs admission"
        title={<h1 className="text-ink max-w-[22ch]">McCombs Admission at UT Austin</h1>}
        lede="McCombs School of Business is one of the most selective undergraduate programs at UT Austin. Real admission data, what admissions readers want, and how the residency pathway works for non-resident McCombs admits."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The McCombs picture">
            McCombs direct-admit acceptance rate is approximately <strong>10%</strong> (closer to 5-8% for non-residents). Approximately 1,400 freshman BBA students admitted per year. Admitted profile: <strong>3.95+ unweighted GPA</strong>, <strong>SAT 1490-1550</strong>, top 5% class rank, demonstrated business leadership. The Business Honors Program (BHP) is an additional honors track within McCombs admission. For non-resident McCombs admits, the <Link href="/texas-residency-rules">Texas residency pathway</Link> saves approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> in tuition.
          </QuickAnswer>

          <AuthorBox blurb="Has helped families navigate the McCombs admission process alongside the residency pathway planning that runs in parallel during senior year." />

          <h2 className="mt-0">McCombs admission selectivity</h2>
          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Direct admit acceptance rate (overall)</td><td className="num">~10%</td><td>~1,400 admits from ~14,000 applications</td></tr>
                <tr><td>Direct admit acceptance rate (non-resident)</td><td className="num">~5-8%</td><td>10% non-resident cap applies</td></tr>
                <tr><td>BHP acceptance rate</td><td className="num">~10-15%</td><td>From smaller self-selected pool</td></tr>
                <tr><td>Internal transfer to McCombs</td><td className="num">~10-15%</td><td>From other UT colleges after prereqs</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Admitted student profile</h2>
          <ul>
            <li><strong>Unweighted GPA:</strong> 3.95-4.00 (middle 50%)</li>
            <li><strong>Class rank:</strong> top 5% of class</li>
            <li><strong>SAT:</strong> 1490-1550 (middle 50%)</li>
            <li><strong>ACT:</strong> 33-35 (middle 50%)</li>
            <li><strong>Course rigor:</strong> highest available curriculum (AP, IB, dual enrollment) consistently across all four years; AP Calculus AB or BC strongly preferred</li>
            <li><strong>Extracurricular profile:</strong> significant leadership or impact in 1-3 areas; business-related involvement preferred (DECA, FBLA, entrepreneurship, family business, paid work experience)</li>
            <li><strong>Essays:</strong> substantive understanding of why business and why McCombs specifically</li>
          </ul>

          <h2>What McCombs admissions readers actually want</h2>

          <h3>Genuine business interest</h3>
          <p>The strongest McCombs essays demonstrate substantive engagement with business as a discipline. Concrete evidence: founded a business, ran a club like an enterprise, completed a business-relevant internship, developed financial models, traded stocks competitively, won DECA or FBLA competitions, took online business courses for fun. Vague aspirations (&quot;I want to be a CEO,&quot; &quot;I love making money&quot;) read as unsubstantiated.</p>

          <h3>Specific BBA major fit</h3>
          <p>McCombs admits direct-to-major. Strong applicants identify their BBA major (Finance, MIS, Marketing, Accounting, Management, Supply Chain) and articulate why. The specific major matters because each has different career placement and culture. Applicants who write generically about &quot;business&quot; lack the specificity that strong applicants demonstrate.</p>

          <h3>Leadership impact</h3>
          <p>McCombs evaluates leadership not by titles but by impact. Strong applicants have made measurable differences: grew a club from 20 to 150 members, organized a fundraiser that raised $50,000, led a robotics team to nationals, built a small business with $20,000+ in revenue. Quality of impact over quantity of titles.</p>

          <h3>Quantitative aptitude</h3>
          <p>Business at UT is mathematically rigorous. Strong applicants demonstrate quantitative aptitude through Calculus performance, AP Statistics, math competition participation, or other quantitative evidence. AP Calculus AB or BC with a 4 or 5 is essentially expected for competitive McCombs applications.</p>

          <h2>The Business Honors Program (BHP)</h2>
          <p>BHP is McCombs&apos; flagship honors program. BHP students complete a specialized curriculum with smaller class sizes, take Plan II Honors courses, and have priority access to McCombs resources and career services.</p>
          <ul>
            <li><strong>Application:</strong> separate BHP essays submitted alongside the main McCombs/UT application</li>
            <li><strong>Selectivity:</strong> ~10-15% acceptance from BHP applicant pool; approximately 100 admits per cohort</li>
            <li><strong>Admitted profile:</strong> same as McCombs admission (3.95+ GPA, SAT 1500+) plus distinctive leadership impact and intellectual breadth</li>
            <li><strong>BHP curriculum:</strong> standard BBA + BHP honors core + Plan II honors courses + senior thesis option</li>
            <li><strong>Benefits:</strong> small-cohort experience, faculty access, priority for top McCombs internships and scholarships, particularly strong placement to investment banking, consulting, and top MBA programs</li>
          </ul>

          <h2>McCombs majors at a glance</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>BBA Major</th>
                  <th>Median Starting Salary</th>
                  <th>Top Employers</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Finance</td><td className="num">$85K-$110K</td><td>Goldman Sachs, JPMorgan, Morgan Stanley, Texas energy companies</td></tr>
                <tr><td>Management Information Systems (MIS)</td><td className="num">$85K-$110K</td><td>McKinsey, Deloitte Consulting, Accenture, tech companies</td></tr>
                <tr><td>Accounting</td><td className="num">$70K-$85K</td><td>Big 4 (Deloitte, EY, PwC, KPMG)</td></tr>
                <tr><td>Marketing</td><td className="num">$65K-$85K</td><td>P&amp;G, Dell, Amazon, top marketing firms</td></tr>
                <tr><td>Management</td><td className="num">$65K-$85K</td><td>Diverse: corporate, consulting, startups</td></tr>
                <tr><td>Supply Chain Management</td><td className="num">$70K-$90K</td><td>Dell, ExxonMobil, Amazon, manufacturing companies</td></tr>
              </tbody>
            </table>
          </div>

          <h2>The McCombs application timeline</h2>
          <ol>
            <li><strong>Junior year spring:</strong> Take SAT/ACT; identify McCombs as target; begin essay brainstorming</li>
            <li><strong>Summer before senior year:</strong> Substantive business-related activity (internship, business launch, McCombs admissions event); essay drafting</li>
            <li><strong>Senior year fall:</strong> Submit ApplyTexas by November 1 priority deadline; complete BHP application if pursuing; submit additional materials</li>
            <li><strong>Senior year spring:</strong> Receive admission decision (February-March); complete UT Honors and Scholarship Application; financial aid review</li>
            <li><strong>By May 1:</strong> Commit by submitting enrollment deposit</li>
            <li><strong>Summer:</strong> If pursuing residency pathway, begin Texas property acquisition and documentary set establishment</li>
          </ol>

          <h2>For out-of-state McCombs admits: the residency pathway</h2>
          <div className="callout">
            <h4>Combining McCombs admission with the residency pathway</h4>
            <p className="mb-0">An out-of-state student admitted to McCombs faces year 1 tuition of approximately {fmtUSD(TUITION.colleges.business.out)}/year. With the Texas residency pathway pursued during year 1 and approved for year 2 onward, tuition drops to {fmtUSD(TUITION.colleges.business.in)}/year, saving approximately {fmtUSD(TUITION.colleges.business.out - TUITION.colleges.business.in)}/year for years 2-4. Four-year tuition with pathway: approximately {fmtUSD(TUITION.colleges.business.out + 3 * TUITION.colleges.business.in)}, vs without pathway: approximately {fmtUSD(TUITION.colleges.business.out * 4)}. Savings: approximately {fmtUSD(TUITION.colleges.business.out * 4 - (TUITION.colleges.business.out + 3 * TUITION.colleges.business.in))}.</p>
          </div>

          <h2>Common McCombs application mistakes</h2>
          <ul>
            <li><strong>Generic business essays.</strong> &quot;I want to study business at McCombs because it&apos;s a top program&quot; without specific evidence of business interest fails immediately.</li>
            <li><strong>Skipping math rigor.</strong> McCombs is quantitative. Without strong AP Calculus or quantitative aptitude evidence, applications struggle.</li>
            <li><strong>Misidentifying the major.</strong> Writing about Finance when applying to Marketing (or vice versa) raises immediate red flags.</li>
            <li><strong>Inadequate leadership impact.</strong> Listing club memberships without demonstrating impact. Quality &gt; quantity.</li>
            <li><strong>Missing the November 1 priority deadline.</strong> McCombs makes scholarship decisions for priority applicants; missing this date limits institutional aid.</li>
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
              <li><Link href="/ut-austin-mccombs-tuition">McCombs tuition</Link>: detailed cost breakdown</li>
              <li><Link href="/ut-austin-honors-programs">UT honors programs</Link>: BHP and Plan II</li>
              <li><Link href="/ut-austin-essay-prompts">UT essay prompts</Link>: McCombs-specific guidance</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the pathway for non-resident McCombs admits</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-mccombs-admission" />
    </>
  );
}
