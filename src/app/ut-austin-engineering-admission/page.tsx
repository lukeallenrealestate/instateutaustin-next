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

const TITLE = 'UT Austin Engineering (Cockrell) Admission: Acceptance Rate by Discipline';
const DESCRIPTION = 'UT Austin Cockrell School of Engineering admission: acceptance rate 15-25% direct admit, by-discipline breakdown (Petroleum, Aerospace, ECE, ChemE, BME, Civil, Mechanical, Industrial), admitted profile, and the residency pathway for non-resident engineering admits.';
const PATH = '/ut-austin-engineering-admission';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is the UT Austin Engineering acceptance rate?', a: 'Cockrell School of Engineering acceptance rate is approximately 15-25% direct admit overall, varying significantly by discipline. Electrical and Computer Engineering (ECE) is the most selective at ~10-15%; Petroleum, Aerospace, Biomedical run ~15-20%; Civil, Chemical, Mechanical run ~20-25%; Industrial Engineering and Engineering Honors track sit in the middle. Non-resident acceptance is 30-40% below overall (so ECE non-resident ~7-10%; Civil non-resident ~15-18%).' },
  { q: 'What GPA does UT Engineering require?', a: 'Admitted Cockrell students typically have unweighted GPA of 3.9-4.0. Class rank: top 5%. Course rigor: highest available with strong performance in math (Calculus BC essentially required), physics (AP Physics C strongly preferred), and chemistry (AP Chemistry common). Cockrell admissions reads STEM coursework particularly carefully.' },
  { q: 'What SAT/ACT score does UT Engineering require?', a: 'Admitted Cockrell middle 50% SAT: 1450-1530 (varies by discipline); ACT 32-35. ECE and Biomedical admits skew higher (1500+ SAT). For non-residents, expect to need 1470+ SAT or 33+ ACT to be competitive across disciplines.' },
  { q: 'How do I get admitted to a specific Cockrell discipline?', a: 'Cockrell admits direct-to-discipline. Applicants select their intended discipline (one of 11: Aerospace, Architectural, Biomedical, Chemical, Civil, Computational, Electrical and Computer, Industrial and Systems, Mechanical, Petroleum, Software Engineering) and are evaluated against that discipline\'s standards. Strong applicants typically demonstrate specific interest in the discipline: aerospace applicants discuss aviation or space; biomedical applicants discuss medical devices or healthcare; petroleum applicants discuss energy industry experience.' },
  { q: 'Which Cockrell discipline is the most selective?', a: 'Electrical and Computer Engineering (ECE) is the most selective due to high demand from computer/software-oriented applicants who do not get UT CS direct admit. Petroleum, Aerospace, and Biomedical are also selective due to strong industry demand and competitive applicant pools. Civil, Chemical, Mechanical, and Industrial are competitive but more accessible.' },
  { q: 'Can I switch engineering disciplines after admission?', a: 'Internal transfer between Cockrell disciplines is possible but requires meeting the target discipline\'s GPA requirement and any prerequisite coursework. Most students who switch do so during freshman or sophomore year before taking discipline-specific upper-division coursework. Transfer to ECE specifically is competitive even from within Cockrell.' },
  { q: 'What is the Engineering Honors track at Cockrell?', a: 'Cockrell offers an Engineering Honors track for high-academic students. Honors students complete the standard discipline major plus honors-specific seminars, research, and thesis option. Selection is by separate application alongside Cockrell admission. The honors track is the strongest preparation for engineering graduate school and top industrial research positions.' },
  { q: 'What is the Cockrell career placement like?', a: `Cockrell graduates report median starting salaries by discipline: Petroleum Engineering ~$100K-$120K (Tier 1 oil and gas: ExxonMobil, Chevron, ConocoPhillips, Pioneer Natural Resources, Devon Energy); ECE/Computer Engineering ~$95K-$115K (Apple, Texas Instruments, Nvidia, AMD, Qualcomm); Chemical, Civil, Mechanical ~$80K-$95K (ExxonMobil, Lockheed Martin, Boeing, Bechtel); Biomedical, Aerospace ~$75K-$90K (Medtronic, Abbott, Boeing, SpaceX); Industrial ~$75K-$90K (manufacturing, consulting). Four-year out-of-state tuition (~${(TUITION.colleges.engineering.out * 4).toLocaleString()}) is paid back within 1-3 years of working at typical post-Cockrell salaries.` },
];

export default function EngAdmissionPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Engineering Admission', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Cockrell Engineering admission"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Engineering (Cockrell) Admission</h1>}
        lede="Cockrell School of Engineering admission: by-discipline acceptance rates, admitted profile, what admissions readers look for, and the residency pathway for non-resident engineering admits."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The Cockrell picture">
            Cockrell School of Engineering admits <strong>direct-to-discipline</strong>. Overall acceptance rate is approximately <strong>15-25%</strong>, varying by discipline. ECE is most selective (~10-15%); Civil and Mechanical are most accessible (~20-25%); Petroleum, Aerospace, Biomedical are highly selective (~15-20%). Admitted profile: <strong>3.9-4.0 unweighted GPA</strong>, <strong>SAT 1450-1530</strong>, top 5% class rank, strong math and science course rigor. Non-resident acceptance is 30-40% below overall rates.
          </QuickAnswer>

          <AuthorBox blurb="Has helped engineering-track families navigate UT admission alongside the residency pathway." />

          <h2 className="mt-0">Cockrell acceptance rate by discipline</h2>
          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Discipline</th>
                  <th>Overall Acceptance Rate</th>
                  <th>Non-Resident Rate</th>
                  <th>National Ranking</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Electrical and Computer Engineering (ECE)</td><td className="num">~10-15%</td><td className="num">~7-10%</td><td className="num">Top 12</td></tr>
                <tr><td>Biomedical Engineering</td><td className="num">~12-18%</td><td className="num">~8-12%</td><td className="num">Top 15</td></tr>
                <tr><td>Aerospace Engineering</td><td className="num">~15-20%</td><td className="num">~10-13%</td><td className="num">Top 10</td></tr>
                <tr><td>Petroleum Engineering</td><td className="num">~15-20%</td><td className="num">~10-13%</td><td className="num">#1-3 nationally</td></tr>
                <tr><td>Chemical Engineering</td><td className="num">~18-22%</td><td className="num">~12-15%</td><td className="num">Top 10</td></tr>
                <tr><td>Civil Engineering</td><td className="num">~20-25%</td><td className="num">~15-18%</td><td className="num">Top 10</td></tr>
                <tr><td>Mechanical Engineering</td><td className="num">~20-25%</td><td className="num">~15-18%</td><td className="num">Top 15</td></tr>
                <tr><td>Industrial and Systems Engineering</td><td className="num">~22-28%</td><td className="num">~15-20%</td><td className="num">Top 20</td></tr>
                <tr><td>Software Engineering</td><td className="num">~10-15%</td><td className="num">~7-10%</td><td className="num">Top 15</td></tr>
                <tr><td>Architectural Engineering</td><td className="num">~20-25%</td><td className="num">~15-20%</td><td className="num">Top 20</td></tr>
                <tr><td>Computational Engineering</td><td className="num">~18-22%</td><td className="num">~12-15%</td><td className="num">Top 15</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Admitted Cockrell student profile</h2>
          <ul>
            <li><strong>Unweighted GPA:</strong> 3.9-4.0 (middle 50%)</li>
            <li><strong>Class rank:</strong> top 5% of class</li>
            <li><strong>SAT:</strong> 1450-1530 (varies by discipline, ECE/BME higher)</li>
            <li><strong>ACT:</strong> 32-35 (middle 50%)</li>
            <li><strong>Course rigor:</strong> AP Calculus BC (4 or 5), AP Physics 1 and C (4 or 5), AP Chemistry (4 or 5), AP Computer Science A or post-AP math/CS courses where available</li>
            <li><strong>STEM extracurriculars:</strong> robotics, science fair, math olympiad, engineering competitions (FRC, FTC, USAMO), independent projects, summer engineering programs</li>
          </ul>

          <h2>What Cockrell admissions wants</h2>

          <h3>Specific discipline interest</h3>
          <p>Cockrell admits direct-to-discipline. Strong applicants demonstrate specific interest in their chosen discipline. Aerospace applicants discuss flight, propulsion, or space; biomedical applicants discuss medical devices, prosthetics, or healthcare technology; petroleum applicants discuss energy industry, drilling, or reservoirs; chemical applicants discuss manufacturing or pharmaceuticals. Generic &quot;I want to be an engineer&quot; essays do not get admitted to specific disciplines.</p>

          <h3>Math and science rigor</h3>
          <p>Engineering at Cockrell is mathematically intense (Calculus 1 and 2, Differential Equations, Linear Algebra in lower-division). Strong applicants demonstrate math foundation through AP Calculus BC, AP Statistics, and any post-AP math available. Physics foundation through AP Physics C is strongly preferred (Mechanics and E&amp;M).</p>

          <h3>Hands-on engineering experience</h3>
          <p>Strong Cockrell applicants have built things: robotics team participation, science fair projects with engineering content, summer engineering programs (MIT Beaver Works, Penn Engineering Summer Academies), independent projects (3D printing, electronics, software), or paid engineering-adjacent work.</p>

          <h3>Quantitative aptitude</h3>
          <p>Engineering admissions reads for analytical/quantitative thinking. Strong applicants have strong math test scores, evidence of analytical thinking in essays, and demonstrate problem-solving impact in extracurriculars.</p>

          <h2>The 11 Cockrell disciplines explained</h2>

          <h3>Aerospace Engineering</h3>
          <p>Flight vehicles, propulsion, space systems. Strong placement to Boeing, Lockheed Martin, NASA, SpaceX. UT Aerospace ranks top 10 nationally. ~5% of Cockrell enrollment.</p>

          <h3>Architectural Engineering</h3>
          <p>Building systems integration, structural design, HVAC, lighting. Joint program with School of Architecture. Strong placement to construction firms and consulting engineering.</p>

          <h3>Biomedical Engineering</h3>
          <p>Medical devices, prosthetics, tissue engineering, biomechanics. Strong placement to medical device companies (Medtronic, Abbott, Stryker), pharmaceuticals (Pfizer, Merck), and medical school for pre-med BME students.</p>

          <h3>Chemical Engineering</h3>
          <p>Chemical processing, energy, materials, pharmaceuticals. Strong placement to ExxonMobil, Dow, DuPont, Chevron, BASF. UT ChemE ranks top 10 nationally.</p>

          <h3>Civil Engineering</h3>
          <p>Structures, transportation, water resources, geotechnical, construction management. Strong placement to engineering consulting (AECOM, Jacobs, Bechtel), state DOTs, and construction firms. UT Civil ranks top 10 nationally.</p>

          <h3>Computational Engineering</h3>
          <p>Newer discipline combining engineering with computational methods. Strong placement to tech and engineering computing roles.</p>

          <h3>Electrical and Computer Engineering (ECE)</h3>
          <p>Most selective Cockrell discipline. Combines electrical engineering with computer engineering. Strong placement to tech (Apple, Nvidia, Texas Instruments, Qualcomm) and software roles. Often serves as the &quot;backup&quot; for students who do not get UT CS direct admit.</p>

          <h3>Industrial and Systems Engineering</h3>
          <p>Operations research, manufacturing systems, supply chain optimization. Strong placement to consulting (Accenture, Deloitte), manufacturing, and analytics roles. UT IE ranks top 20 nationally.</p>

          <h3>Mechanical Engineering</h3>
          <p>The largest Cockrell discipline. Covers traditional mechanical engineering (machines, thermodynamics, fluid mechanics) plus modern applications (robotics, mechatronics). Strong placement across industries.</p>

          <h3>Petroleum Engineering</h3>
          <p>Oil and gas reservoir engineering, drilling, production. UT Petroleum is consistently #1-3 nationally. Strong placement to ExxonMobil, Chevron, ConocoPhillips, Pioneer Natural Resources. Highest starting salaries within Cockrell.</p>

          <h3>Software Engineering</h3>
          <p>Newer discipline (~2020) covering software development as engineering. Strong tech industry placement. Often selected by students who do not get UT CS direct admit.</p>

          <h2>The internal transfer landscape</h2>
          <p>Internal transfer between Cockrell disciplines is possible. Common moves: from Civil/Mechanical to ECE or Software Engineering (more selective destinations); from Chemical to Petroleum (small move). Internal transfer requires meeting the destination discipline&apos;s GPA threshold (typically 3.5-3.85 depending on target) and any prerequisite coursework.</p>

          <h2>Engineering Honors track</h2>
          <ul>
            <li><strong>What it is:</strong> Cockrell&apos;s honors track for high-academic students</li>
            <li><strong>Size:</strong> ~150 students across all disciplines per cohort</li>
            <li><strong>Application:</strong> separate honors essay submitted alongside Cockrell application</li>
            <li><strong>Selectivity:</strong> ~15-25% acceptance by discipline</li>
            <li><strong>Benefits:</strong> small honors seminars, faculty research mentorship, priority for Cockrell scholarships, thesis option, strong PhD placement</li>
          </ul>

          <h2>The residency pathway for Cockrell admits</h2>
          <div className="callout">
            <h4>Engineering cost with residency pathway</h4>
            <p className="mb-0">Out-of-state Cockrell direct admit faces year 1 tuition of {fmtUSD(TUITION.colleges.engineering.out)}. With the Texas residency pathway pursued during year 1 and approved for year 2, tuition drops to {fmtUSD(TUITION.colleges.engineering.in)}/year for years 2-4, saving approximately {fmtUSD(TUITION.colleges.engineering.out - TUITION.colleges.engineering.in)}/year. Four-year tuition with pathway: ~{fmtUSD(TUITION.colleges.engineering.out + 3 * TUITION.colleges.engineering.in)}, vs without pathway: ~{fmtUSD(TUITION.colleges.engineering.out * 4)}. Savings: ~{fmtUSD(TUITION.colleges.engineering.out * 4 - (TUITION.colleges.engineering.out + 3 * TUITION.colleges.engineering.in))} over four years.</p>
          </div>

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
              <li><Link href="/ut-austin-engineering-tuition">Cockrell tuition</Link>: cost breakdown</li>
              <li><Link href="/ut-austin-honors-programs">UT honors programs</Link>: Engineering Honors track</li>
              <li><Link href="/ut-austin-essay-prompts">UT essay prompts</Link>: engineering essay guidance</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: pathway for non-resident engineering admits</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-engineering-admission" />
    </>
  );
}
