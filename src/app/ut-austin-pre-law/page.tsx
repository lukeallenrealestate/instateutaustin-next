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

const TITLE = 'UT Austin Pre-Law: Pathway to Law School (Government, Economics, Plan II)';
const DESCRIPTION = 'UT Austin pre-law guide: there is no pre-law major; pre-law is a pathway through Government, Economics, History, Plan II Honors, or any major. UT pre-law advising, LSAT prep, law school placement (UT Law, Harvard, Stanford, Yale), and the residency pathway for undergrad savings.';
const PATH = '/ut-austin-pre-law';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Does UT Austin have a pre-law major?', a: 'No. Pre-law is a pathway, not a major. UT students pursuing law school can major in any field. The traditional pre-law majors at UT are Government, Economics, History, Philosophy, Plan II Honors, and Liberal Arts in general, but law schools accept applicants from any major (including STEM, business, or arts) as long as they demonstrate strong analytical writing, reasoning, and academic performance.' },
  { q: 'What is the UT Austin pre-law advising office?', a: 'The University of Texas Pre-Law Center provides advising, LSAT prep resources, application support, and connections to legal field internships. UT also has a long-standing partnership with UT School of Law (top 15 law school nationally) that provides pre-law students access to law school admissions information sessions, mock interviews, and faculty connections.' },
  { q: 'What LSAT score do I need for law school from UT Austin?', a: 'Successful UT law school applicants typically score 160+ LSAT. For top law schools (Harvard, Yale, Stanford, Chicago), expect 170+ LSAT. UT School of Law admits typically have LSAT 165-170. Lower-ranked law schools admit applicants in the 145-160 range. LSAT score combined with undergraduate GPA is the primary law school admission factor.' },
  { q: 'What is the law school admission rate from UT Austin?', a: 'UT Austin pre-law applicants achieve law school admission rates of approximately 70-80% per cycle (substantially above the national ~75% rate, slightly higher reflects strong UT pre-law preparation). UT students with strong LSAT (165+) and GPA (3.7+) achieve admission rates of 90%+. UT also has a particularly strong pipeline to UT Law (which gives modest preference to UT undergraduates) and other Texas law schools.' },
  { q: 'What undergraduate major is best for pre-law at UT?', a: 'Law schools have no preferred major. Common pre-law majors at UT: Government (strong UT department; LBJ School graduate adjacency), Economics, History, Philosophy, English, Plan II Honors (interdisciplinary), Sociology, Psychology, Political Communications (Moody). Some pre-law students major in STEM (Math, CS, Engineering) for analytical training that translates to law school. Choose a major based on academic interest, not perceived &quot;law school preparation.&quot;' },
  { q: 'What is the Texas Law (UT School of Law) admission rate?', a: 'UT School of Law admits approximately 21-25% per cycle. Top 15 law school nationally. Average admitted profile: 167-170 LSAT, 3.7-3.8 undergraduate GPA. UT Law receives a substantial number of UT undergrad applications and admits at a slightly higher rate than the overall pool, reflecting strong UT preparation.' },
  { q: 'How does the Texas residency pathway help pre-law students?', a: `Two benefits: (1) UT undergrad tuition drops from ${fmtUSD(TUITION.outOfStatePerYear)} to ${fmtUSD(TUITION.inStatePerYear)}/year, saving approximately ${fmtUSD(TUITION.threeYearSavings)} over 3 years. (2) Student becomes Texas resident for UT Law in-state tuition rates (UT Law in-state is approximately $36,000/year vs out-of-state $58,000/year). Combined undergraduate + law school savings: approximately $100,000-$200,000 for a four-year UT undergrad + three-year UT Law trajectory.` },
  { q: 'What is the Texas Law pipeline from UT undergrad?', a: 'UT undergrad students applying to UT Law have one of the strongest pipelines: UT Law receives approximately 4,000 applications per year and admits approximately 800 (~20%). Approximately 30-35% of UT Law admitted students come from UT Austin undergrad (much higher than chance would predict given the broader applicant pool). The pipeline reflects familiarity with applicant profiles, faculty connections, and shared institutional culture.' },
];

export default function PreLawPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Pre-Law', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Pre-law pathway"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Pre-Law</h1>}
        lede="Pre-law pathway at UT Austin: majors, advising, LSAT prep, law school placement (UT Law top 15 plus national reach), and the residency pathway for combined undergrad + law school savings."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The pre-law picture">
            UT Austin does not have a pre-law major. Pre-law is a pathway through any major; common choices are Government, Economics, History, Philosophy, Plan II Honors. UT&apos;s Pre-Law Center provides advising and LSAT prep guidance. UT pre-law applicants achieve law school admission rates of approximately <strong>70-80%</strong> per cycle (above national average). UT undergrads have a particularly strong pipeline to UT School of Law (top 15 nationally). The <Link href="/texas-residency-rules">Texas residency pathway</Link> saves both undergrad tuition AND unlocks UT Law in-state rates.
          </QuickAnswer>

          <AuthorBox blurb="Has helped pre-law families think through major choice, undergrad cost (and the residency pathway), plus the longer-term law school cost picture." />

          <h2 className="mt-0">The UT pre-law landscape</h2>
          <p>UT Austin is one of the strongest pre-law schools in the country. Pre-law students major in any field, complete LSAT preparation typically junior year, build extracurricular profile (debate, mock trial, journalism, government internships, law office work), and apply to law school senior year. UT&apos;s adjacency to the Texas Capitol, the LBJ School of Public Affairs, and UT School of Law creates an unusually strong pre-law ecosystem.</p>

          <h2>Common pre-law majors at UT</h2>
          <ul>
            <li><strong>Government:</strong> UT&apos;s Government department is top 10 nationally. Strong pre-law preparation through coursework in constitutional law, political theory, public policy.</li>
            <li><strong>Economics:</strong> strong analytical training; valued for law-and-economics, antitrust, and corporate law tracks.</li>
            <li><strong>History:</strong> develops research and writing skills directly applicable to law school.</li>
            <li><strong>Philosophy:</strong> develops formal logic and argumentation; particularly strong for analytical-track law schools.</li>
            <li><strong>Plan II Honors:</strong> interdisciplinary liberal arts honors; many UT pre-law students choose Plan II for breadth.</li>
            <li><strong>English:</strong> develops writing skills; strong for litigation and appellate practice tracks.</li>
            <li><strong>Public Communication / Moody:</strong> develops rhetorical and persuasive skills.</li>
            <li><strong>STEM majors (CS, Engineering, Math):</strong> increasingly common; valued for IP law, patent law, technology law.</li>
            <li><strong>Business (McCombs):</strong> increasingly common; valued for corporate law, M&amp;A, business litigation.</li>
          </ul>

          <h2>UT pre-law timeline</h2>
          <ol>
            <li><strong>Freshman year:</strong> Choose major; begin pre-law club involvement (UT Mock Trial, Debate, Pre-Law Society); build academic profile</li>
            <li><strong>Sophomore year:</strong> Complete major requirements; begin legal-field exposure (legal internships, paid work in law firms, government internships in Austin)</li>
            <li><strong>Junior year:</strong> Take LSAT preparation course (spring); sit for LSAT (summer or early fall); request faculty letters of recommendation</li>
            <li><strong>Senior year:</strong> Apply to law school (LSAC applications open in August; most schools have rolling admissions); compare offers</li>
            <li><strong>Post-graduation:</strong> Begin law school (most students enter directly; some take 1-3 gap years for work experience)</li>
          </ol>

          <h2>Law school placement from UT Austin</h2>
          <p>UT pre-law graduates place into:</p>
          <ul>
            <li><strong>UT School of Law (top 15):</strong> particularly strong pipeline; ~30-35% of UT Law class is from UT undergrad</li>
            <li><strong>Texas regional law schools:</strong> Texas A&amp;M Law, SMU Dedman, Texas Tech, St. Mary&apos;s, South Texas College of Law</li>
            <li><strong>Out-of-state top law schools:</strong> Harvard, Yale, Stanford, Chicago, NYU, Columbia, Penn, Berkeley, Michigan, Virginia, Duke for top applicants</li>
            <li><strong>Specialty law schools:</strong> Georgetown (DC, public policy), Northwestern (litigation), Cornell (corporate)</li>
          </ul>

          <h2>The UT Law in-state advantage</h2>
          <div className="callout">
            <h4>Residency pathway unlocks UT Law in-state</h4>
            <p className="mb-0">UT School of Law in-state tuition is approximately $36,000/year vs out-of-state at approximately $58,000/year. For Texas residents, three-year law school cost is ~$108,000 in tuition; for non-residents ~$174,000. Savings via Texas residency: ~$66,000 for law school alone, on top of approximately {fmtUSD(TUITION.threeYearSavings)} undergrad savings. Combined undergrad + law school savings via residency pathway: approximately $165,000-$200,000.</p>
          </div>

          <h2>LSAT preparation</h2>
          <ul>
            <li><strong>LSAT prep timeline:</strong> 3-6 months serious preparation typical</li>
            <li><strong>Average UT pre-law LSAT:</strong> 158-165</li>
            <li><strong>Competitive for top law schools:</strong> 165-170+</li>
            <li><strong>Competitive for UT Law:</strong> 167-170</li>
            <li><strong>Prep resources:</strong> Kaplan, Princeton Review, 7Sage, Khan Academy free LSAT prep, individual tutoring</li>
            <li><strong>Cost:</strong> $1,500-$3,500 for formal prep course; significantly less for self-study with free or low-cost resources</li>
          </ul>

          <h2>Pre-law career outcomes</h2>
          <ul>
            <li><strong>BigLaw partner track:</strong> $1M+ partner compensation by mid-career (5-7 years after law school)</li>
            <li><strong>Federal government attorney:</strong> $80K-$200K starting, growing through career</li>
            <li><strong>State and local government:</strong> $60K-$120K starting, advancement to elected office</li>
            <li><strong>In-house counsel:</strong> $150K-$400K depending on company size and role</li>
            <li><strong>Public interest / non-profit:</strong> $50K-$80K starting, advancement through career</li>
            <li><strong>Solo practice / boutique firms:</strong> highly variable, but growing as a career option</li>
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
              <li><Link href="/ut-austin-pre-med">Pre-med pathway</Link>: parallel pre-professional content</li>
              <li><Link href="/ut-austin-graduate-outcomes">Graduate outcomes</Link>: pre-law placement data</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: pathway that unlocks UT Law in-state rates</li>
              <li><Link href="/ut-austin-honors-programs">Plan II Honors</Link>: distinctive pre-law preparation</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-pre-law" />
    </>
  );
}
