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

const TITLE = 'UT Austin Computer Science Admission: Acceptance Rate, GPA, How to Get In';
const DESCRIPTION = 'UT Austin Computer Science direct-admit acceptance rate is approximately 5-8% overall (4-7% for non-residents), making it one of the most selective CS programs in the country. Admitted profile: 4.0 GPA, SAT 1520+, substantive programming experience.';
const PATH = '/ut-austin-computer-science-admission';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is the UT Austin Computer Science acceptance rate?', a: 'UT CS direct-admit acceptance rate is approximately 5-8% overall and closer to 4-7% for non-residents. Approximately 350-400 freshmen are admitted to direct CS each year out of roughly 5,500-6,500 applications. The Turing Scholars program within CS is even more selective at approximately 5-8% from a small invitation-only pool.' },
  { q: 'What GPA does UT CS require?', a: 'Admitted UT CS students typically have unweighted GPA of 4.0 (or as close as the high school curve allows). Class rank: top 1-3%. Course rigor: highest available, including post-AP courses where possible. Multiple AP STEM courses (Calculus BC, Physics C, Computer Science A, Chemistry, Biology) with 4s and 5s are essentially expected.' },
  { q: 'What SAT/ACT score does UT CS require?', a: 'Admitted UT CS middle 50% SAT range is approximately 1500-1560; ACT 34-36. Top-quartile admits score 1540+ SAT or 35+ ACT. UT is test-optional but successful CS applicants almost universally submit strong scores. For non-residents, expect to need 1520+ SAT or 35+ ACT to be competitive.' },
  { q: 'What CS experience does UT CS admissions want?', a: 'Substantive programming experience: independent projects (published apps, open-source contributions, GitHub portfolio); competitive programming (USACO Gold, ACM-ICPC, Codeforces, AMC/AIME math participation); research experience (high school research papers, faculty-mentored projects); hackathons (regional or national); STEM competitions (Intel ISEF, Regeneron STS). Self-taught programming counts; demonstrate it through portfolios and references.' },
  { q: 'What is Turing Scholars at UT CS?', a: 'Turing Scholars is UT Computer Science\'s research-track honors program. Selection is by invitation after CS admission (no separate application). Turing Scholars complete a research-track curriculum with faculty mentorship, accelerated coursework, and the option to complete a Master\'s thesis as an undergraduate. The program is small (~20-25 students per year) and serves as the strongest pipeline from UT to top PhD programs (MIT, Stanford, CMU, Berkeley).' },
  { q: 'Can I get into UT CS without a perfect academic record?', a: 'Direct admission to UT CS is extremely competitive. Outside the top 1-3% of class with 1500+ SAT, admission is unlikely. Alternative paths: (1) admit to UT Natural Sciences or Liberal Arts and apply for internal transfer to CS (very competitive, ~5%); (2) enter UT in another major and minor in CS; (3) attend a Texas community college, complete CS prerequisites with 3.95+ GPA, transfer to UT CS (still competitive, ~5-10%); (4) consider other strong CS programs (UT Dallas, Texas A&M, Texas Tech) that are more accessible.' },
  { q: 'Is UT CS worth out-of-state tuition?', a: `Yes for high-academic students. UT CS produces median starting salaries of $115,000-$140,000 with signing bonuses of $20,000-$50,000 and equity grants of $50,000-$200,000+ over four-year vesting. Top employers: Google, Meta, Apple, Amazon, Microsoft, Stripe, Palantir, Jane Street. Four-year tuition at out-of-state sticker (~${(TUITION.colleges.cs.out * 4).toLocaleString()}) is paid back within 1-2 years of working. With the Texas residency pathway, the math improves dramatically.` },
  { q: 'What is the internal transfer rate to UT CS?', a: 'Internal transfer to UT CS is approximately 5% acceptance rate. UT typically admits 15-25 internal transfers per year out of 300-400 applications. Successful internal transfers have UT GPA of 3.95+ with strong performance in CS prerequisites (Discrete Math, Programming I, Calculus 1 and 2). Internal transfer is significantly harder than direct admit.' },
];

export default function CSAdmissionPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin CS Admission', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Computer Science admission"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Computer Science Admission</h1>}
        lede="UT Computer Science is one of the most selective CS programs in the US with an acceptance rate of approximately 5-8% (4-7% for non-residents). Real admissions data, what admissions readers want, and the Turing Scholars track."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The CS picture">
            UT CS direct-admit acceptance rate is approximately <strong>5-8%</strong> overall (<strong>4-7%</strong> for non-residents). Approximately 350-400 freshmen admitted per year. Admitted profile: <strong>4.0 unweighted GPA</strong>, top 1-3% class rank, <strong>SAT 1500-1560</strong>, substantive programming portfolio, multiple AP STEM courses with 5s. The Turing Scholars research track within CS is even more selective. Internal transfer to CS from other UT colleges is approximately 5% acceptance rate.
          </QuickAnswer>

          <AuthorBox blurb="Has helped CS-track families navigate UT admission alongside the residency pathway." />

          <h2 className="mt-0">UT CS admission selectivity</h2>
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
                <tr><td>Direct admit acceptance rate (overall)</td><td className="num">~5-8%</td><td>~350-400 admits from ~5,500-6,500 apps</td></tr>
                <tr><td>Direct admit acceptance rate (non-resident)</td><td className="num">~4-7%</td><td>10% non-resident cap applies</td></tr>
                <tr><td>Turing Scholars acceptance</td><td className="num">~5-8%</td><td>From CS-admitted student pool</td></tr>
                <tr><td>Internal transfer to CS</td><td className="num">~5%</td><td>15-25 transfers/year from 300-400 apps</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Admitted UT CS student profile</h2>
          <ul>
            <li><strong>Unweighted GPA:</strong> 4.0 (or maximum the high school allows)</li>
            <li><strong>Class rank:</strong> top 1-3% of class</li>
            <li><strong>SAT:</strong> 1500-1560 (middle 50%)</li>
            <li><strong>ACT:</strong> 34-36 (middle 50%)</li>
            <li><strong>Course rigor:</strong> highest available; AP Calculus BC, AP Physics C, AP Computer Science A, AP Chemistry/Biology all common; post-AP math courses (Multivariable Calculus, Linear Algebra, Discrete Math) when available</li>
            <li><strong>Math competitions:</strong> AMC 10/12 high scorers, AIME qualifiers, USAMO/USA Computing Olympiad participants are common in the admitted pool</li>
            <li><strong>Programming:</strong> independent projects with substantive code (not just tutorials), GitHub portfolio, USACO performance, hackathon wins</li>
            <li><strong>Research:</strong> some admits have completed independent or faculty-mentored research</li>
          </ul>

          <h2>What UT CS admissions wants</h2>

          <h3>Demonstrated technical depth</h3>
          <p>UT CS admissions reads for substantive programming experience, not just stated interest. Strong applicants have built something real: a published mobile app, an open-source library with users, a working machine learning model, a competitive programming track record, or substantive research. Self-reported &quot;passion for CS&quot; without evidence does not get admitted.</p>

          <h3>Math foundation</h3>
          <p>UT CS at the upper-division level is mathematically rigorous (algorithms, theory of computation, advanced math). Strong applicants demonstrate math foundation: AP Calculus BC with 5, AP Statistics, AMC/AIME participation, post-AP math courses, or independent study in higher mathematics. Math weakness is a near-disqualifier for direct CS admission.</p>

          <h3>Intellectual curiosity about CS as a discipline</h3>
          <p>UT CS values students who care about CS as a field of study (algorithms, theory, AI research, programming languages, systems) not just as a path to a tech job. Strong essays demonstrate curiosity about specific CS subareas, faculty research interests, or open problems in the field.</p>

          <h3>Realistic understanding of the program</h3>
          <p>Successful CS essays show the applicant understands what UT CS involves: the curriculum, the research labs, the Turing Scholars program, specific faculty whose work interests them. Generic essays about &quot;CS at any top school&quot; are immediately less competitive.</p>

          <h2>The Turing Scholars research track</h2>
          <p>Turing Scholars is UT CS&apos; research-focused honors program. After UT CS admission, the program identifies candidates from the admitted pool based on academic profile and research orientation.</p>
          <ul>
            <li><strong>Size:</strong> ~20-25 students per cohort</li>
            <li><strong>Selection:</strong> by invitation; no separate application; selection based on CS application materials</li>
            <li><strong>Curriculum:</strong> CS major + research-track honors courses + faculty mentorship + thesis option</li>
            <li><strong>Distinctive features:</strong> direct PhD pathway (MIT, Stanford, CMU, Berkeley placement); accelerated coursework option; research stipend</li>
            <li><strong>Common profile:</strong> 4.0 GPA, SAT 1540+, significant prior research or competitive programming</li>
          </ul>

          <h2>UT CS major and curriculum</h2>
          <p>The UT CS curriculum covers the core CS canon plus depth in upper-division electives:</p>
          <ul>
            <li><strong>Lower-division core:</strong> Programming I and II, Data Structures, Discrete Math, Calculus 1 and 2, Linear Algebra</li>
            <li><strong>Upper-division core:</strong> Algorithms, Operating Systems, Computer Architecture, Programming Languages, Theory of Computation, Networks</li>
            <li><strong>Electives:</strong> Machine Learning, AI, Computer Graphics, Security, Compilers, Distributed Systems, Databases, Software Engineering, plus seminar courses</li>
            <li><strong>Research opportunities:</strong> Freshman Research Initiative, faculty research labs (UT CS has labs in AI, graphics, programming languages, theory, systems, security, ML)</li>
            <li><strong>Capstone:</strong> senior thesis option for Turing Scholars and other interested students</li>
          </ul>

          <h2>Pathways for students who don&apos;t get direct CS admission</h2>
          <ol>
            <li><strong>Internal transfer to CS:</strong> enter UT in Natural Sciences or Liberal Arts; complete CS prerequisites (Programming I and II, Discrete Math, Calculus 1 and 2) with 3.95+ GPA; apply for internal transfer after freshman year. Acceptance rate ~5%.</li>
            <li><strong>UT CS minor or pre-CS major:</strong> some UT students complete CS coursework as a minor or as part of another major (Math, Statistics, Physics). The Department of Statistics and Data Science offers a Data Science major that overlaps significantly with CS.</li>
            <li><strong>Transfer to UT CS from another university:</strong> attend a Texas community college or another university; complete CS prerequisites; transfer to UT CS after sophomore year. Transfer acceptance rate ~5-10%.</li>
            <li><strong>Consider other strong Texas CS programs:</strong> UT Dallas CS, Texas A&amp;M CS, Texas Tech CS, Rice CS are all strong options with more accessible admission. Some students complete a CS bachelor&apos;s elsewhere and pursue UT for graduate school.</li>
          </ol>

          <h2>UT CS career outcomes</h2>
          <p>UT CS produces some of the strongest tech career outcomes of any US public university:</p>
          <ul>
            <li><strong>Median starting salary:</strong> $115,000-$140,000 base</li>
            <li><strong>Signing bonuses:</strong> $20,000-$50,000 typical</li>
            <li><strong>Equity grants:</strong> $50,000-$200,000+ over four-year vesting (varies by company)</li>
            <li><strong>Top employers:</strong> Google, Meta, Apple, Amazon, Microsoft, Stripe, Palantir, Tesla, Nvidia, AMD, Indeed, Bumble, Indeed</li>
            <li><strong>Quant trading recruiting:</strong> Jane Street, Citadel, Two Sigma, Susquehanna, DRW (high compensation, increasingly active at UT CS)</li>
            <li><strong>PhD placement (Turing Scholars track):</strong> MIT, Stanford, CMU, Berkeley, Princeton, UT, plus top European programs</li>
          </ul>

          <h2>The four-year cost picture for non-resident CS admits</h2>
          <div className="callout">
            <h4>CS cost with residency pathway</h4>
            <p className="mb-0">Out-of-state CS direct admit faces year 1 tuition of {fmtUSD(TUITION.colleges.cs.out)}. With the Texas residency pathway pursued during year 1 and approved for year 2, tuition drops to {fmtUSD(TUITION.colleges.cs.in)}/year for years 2-4, saving approximately {fmtUSD(TUITION.colleges.cs.out - TUITION.colleges.cs.in)}/year. Four-year tuition with pathway: ~{fmtUSD(TUITION.colleges.cs.out + 3 * TUITION.colleges.cs.in)}, vs without pathway: ~{fmtUSD(TUITION.colleges.cs.out * 4)}. Savings: ~{fmtUSD(TUITION.colleges.cs.out * 4 - (TUITION.colleges.cs.out + 3 * TUITION.colleges.cs.in))} over four years.</p>
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
              <li><Link href="/ut-austin-computer-science-tuition">UT CS tuition</Link>: cost breakdown</li>
              <li><Link href="/ut-austin-honors-programs">UT honors programs</Link>: Turing Scholars details</li>
              <li><Link href="/ut-austin-essay-prompts">UT essay prompts</Link>: CS essay guidance</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: pathway for non-resident CS admits</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-cs-admission" />
    </>
  );
}
