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

const TITLE = 'UT Austin Graduate Outcomes: Salaries, Top Employers, Job Placement by Major';
const DESCRIPTION = 'UT Austin graduate outcomes: median starting salaries by major (CS $115-140K, McCombs $75-95K, Engineering $85-95K, Liberal Arts $50-65K), top employers (Apple, Google, Goldman, Deloitte, Tesla), graduate and professional school placement, alumni network.';
const PATH = '/ut-austin-graduate-outcomes';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is the average starting salary for UT Austin graduates?', a: 'UT Austin reports median starting salaries varying significantly by major. Computer Science graduates report median $115,000-$140,000 base salary. McCombs Business graduates report $75,000-$95,000 (with Finance and MIS at the higher end). Cockrell Engineering graduates report $85,000-$110,000 by discipline. Natural Sciences graduates report $60,000-$75,000. Liberal Arts graduates report $50,000-$65,000. Communications graduates report $50,000-$60,000.' },
  { q: 'What are the top employers of UT Austin graduates?', a: 'Top UT Austin employers vary by major. For Computer Science: Google, Meta, Apple, Amazon, Microsoft, Stripe, Palantir, Indeed, Bumble. For McCombs Business: Big 4 accounting (Deloitte, EY, PwC, KPMG), Goldman Sachs, JPMorgan, Bain, Accenture, Dell, ExxonMobil. For Cockrell Engineering: Apple, Texas Instruments, ExxonMobil, Lockheed Martin, Meta, Boeing. For Liberal Arts: government agencies, Teach for America, NGOs, public policy organizations. For Communications: media companies, advertising agencies, PR firms.' },
  { q: 'How does UT Austin compare on graduate outcomes to peer schools?', a: 'UT Austin graduate outcomes are competitive with peer top public universities (Michigan, UNC, Virginia, UC Berkeley, UCLA). For Computer Science, UT recruits at top tech companies (Google, Meta, Apple) at the highest tier. For Business, McCombs places strongly into investment banking, consulting, and Big 4. For Engineering, UT graduates earn comparable starting salaries to peer engineering programs. UT&apos;s overall alumni network in Texas is among the largest of any US university.' },
  { q: 'What percentage of UT Austin graduates get jobs within six months?', a: 'UT Austin\'s career outcomes data shows approximately 90% of bachelor\'s graduates are employed, in graduate school, or in another planned activity within six months of graduation. McCombs Business and Cockrell Engineering report 95%+ within six months. Computer Science reports 95%+ within three months. Liberal Arts is closer to 85%; many graduates pursue graduate school or non-traditional career paths.' },
  { q: 'How many UT Austin graduates go to graduate school?', a: 'Approximately 25-30% of UT undergraduate graduates pursue graduate or professional school within five years of graduation. Pre-med students enter medical school at rates around 50-55% per cycle. Pre-law students enter law school at strong rates. UT Computer Science sends students to top PhD programs (MIT, Stanford, CMU, Berkeley). McCombs sends students to top MBA programs (Harvard, Wharton, Booth, Stanford GSB).' },
  { q: 'How strong is the UT Austin alumni network?', a: 'The UT Austin alumni network is among the largest of any US university with approximately 500,000+ living alumni globally. In Texas, virtually every major employer has substantial UT alumni representation, and the Longhorn network is a meaningful career advantage. In Austin specifically, the alumni concentration is extreme: tech, government, healthcare, real estate, and music industry all have dense UT alumni. Outside Texas, alumni concentrations are strongest in Houston, Dallas, the Bay Area, New York, Washington DC, and Los Angeles.' },
  { q: 'Do UT Austin graduates work in Texas after graduation?', a: 'Approximately 70-75% of UT undergraduate graduates remain in Texas after graduation, with the largest concentration in Austin and the second largest in Houston/Dallas. The remaining 25-30% leave Texas, primarily to the Bay Area, New York, Washington DC, Los Angeles, and Seattle. For tech specifically, the split is closer to 50-50 between Texas and out-of-state (mainly Bay Area).' },
  { q: 'What is the return on investment for a UT Austin degree?', a: 'UT Austin has a strong ROI given moderate tuition and high graduate outcomes. For a Texas resident at the in-state rate ($11,688/year), four-year tuition is $46,752; median lifetime earnings premium over no degree is approximately $1.2-1.5 million depending on major. Payback period is typically 1-3 years of post-graduation earnings. For out-of-state students at sticker, the payback is longer (3-5 years) but with the Texas residency pathway, ROI returns to among the strongest of US public universities.' },
];

export default function GraduateOutcomesPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Graduate Outcomes', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Graduate outcomes"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Graduate Outcomes</h1>}
        lede="UT Austin starting salaries, top employers, graduate school placement, and alumni network by major. The data parents look at when evaluating cost vs return."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The numbers">
            UT Austin reports median starting salaries varying significantly by major: <strong>Computer Science $115K-$140K</strong>, <strong>Cockrell Engineering $85K-$110K</strong>, <strong>McCombs Business $75K-$95K</strong>, <strong>Natural Sciences $60K-$75K</strong>, <strong>Liberal Arts $50K-$65K</strong>. Within six months of graduation, approximately 90% of UT graduates are employed or in graduate school. UT&apos;s alumni network exceeds 500,000 globally, with extreme density in Texas (especially Austin and Houston) plus strong concentrations in the Bay Area, NYC, and DC.
          </QuickAnswer>

          <AuthorBox blurb="Has worked with families weighing UT Austin cost against expected outcomes, including the residency pathway that significantly improves ROI for non-residents." />

          <h2 className="mt-0">Starting salaries by UT college</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>UT College / Major</th>
                  <th>Median Starting Salary</th>
                  <th>Top 25% Salary</th>
                  <th>Top Employers</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Computer Science (CSDS)</td><td className="num">$115K-$140K</td><td className="num">$160K+ base + equity</td><td>Google, Meta, Apple, Amazon, Stripe, Palantir</td></tr>
                <tr><td>McCombs (Finance, MIS)</td><td className="num">$85K-$110K</td><td className="num">$130K+ plus bonus</td><td>Goldman Sachs, JPMorgan, McKinsey, Deloitte, Bain</td></tr>
                <tr><td>McCombs (Accounting)</td><td className="num">$70K-$85K</td><td className="num">$95K+</td><td>Big 4 (Deloitte, EY, PwC, KPMG)</td></tr>
                <tr><td>McCombs (Marketing, Mgmt, Supply Chain)</td><td className="num">$70K-$85K</td><td className="num">$100K+</td><td>P&G, Dell, ExxonMobil, Accenture, Amazon</td></tr>
                <tr><td>Cockrell (Petroleum Engineering)</td><td className="num">$100K-$120K</td><td className="num">$140K+</td><td>ExxonMobil, Chevron, ConocoPhillips, Pioneer</td></tr>
                <tr><td>Cockrell (Computer Engineering)</td><td className="num">$95K-$115K</td><td className="num">$140K+</td><td>Apple, Texas Instruments, Nvidia, AMD, Qualcomm</td></tr>
                <tr><td>Cockrell (Chemical, Civil, Mechanical)</td><td className="num">$80K-$95K</td><td className="num">$110K+</td><td>ExxonMobil, Lockheed Martin, Boeing, Bechtel</td></tr>
                <tr><td>Cockrell (Biomedical, Aerospace)</td><td className="num">$75K-$90K</td><td className="num">$105K+</td><td>Medtronic, Abbott, Boeing, Lockheed</td></tr>
                <tr><td>Natural Sciences (Computational Biology, Stats)</td><td className="num">$70K-$85K</td><td className="num">$95K+</td><td>Tech companies, biotech, pharma</td></tr>
                <tr><td>Natural Sciences (Biology, Chemistry)</td><td className="num">$55K-$70K</td><td className="num">$80K+</td><td>Graduate school, biotech, pharma, healthcare</td></tr>
                <tr><td>Moody Communication</td><td className="num">$50K-$65K</td><td className="num">$80K+</td><td>Media companies, agencies, PR firms, government</td></tr>
                <tr><td>Liberal Arts (Government, Economics, History)</td><td className="num">$50K-$65K</td><td className="num">$80K+</td><td>Government, consulting, law school, graduate school</td></tr>
                <tr><td>Architecture</td><td className="num">$55K-$70K</td><td className="num">$85K+</td><td>Top architecture firms, government planning</td></tr>
                <tr><td>Education</td><td className="num">$45K-$55K</td><td className="num">$65K+</td><td>Public schools, education non-profits, Teach for America</td></tr>
                <tr><td>Fine Arts</td><td className="num">$40K-$55K</td><td className="num">$70K+</td><td>Varies widely; many self-employed or graduate school</td></tr>
              </tbody>
            </table>
          </div>

          <p>These figures represent median first-job starting salaries within six months of graduation. Top-quartile graduates earn significantly more. Long-term earnings (5-10 years post-graduation) typically grow 50-100% from starting salary in business and tech majors.</p>

          <h2>Top employers of UT Austin graduates</h2>

          <h3>Tech (CS, Engineering, MIS)</h3>
          <ul>
            <li><strong>Big Tech:</strong> Apple, Google, Meta, Amazon, Microsoft, Tesla</li>
            <li><strong>Top second-tier tech:</strong> Stripe, Palantir, Cloudflare, Snowflake, Databricks, Roblox, Snap</li>
            <li><strong>Austin-based tech:</strong> Indeed, Bumble, Cloud9, Whole Foods (Amazon), Yeti, Indeed, Mr. Cooper</li>
            <li><strong>Defense and aerospace:</strong> Lockheed Martin, Boeing, Northrop Grumman, Raytheon, NASA, SpaceX</li>
            <li><strong>Quant trading:</strong> Jane Street, Citadel, Two Sigma, Susquehanna, DRW</li>
          </ul>

          <h3>Business (Finance, Consulting, Accounting)</h3>
          <ul>
            <li><strong>Investment banks:</strong> Goldman Sachs, JPMorgan, Morgan Stanley, Citigroup, Barclays, Deutsche Bank</li>
            <li><strong>Top consulting:</strong> McKinsey, Bain, BCG, Deloitte Consulting, Accenture</li>
            <li><strong>Big 4 Accounting:</strong> Deloitte, EY, PwC, KPMG (huge UT presence)</li>
            <li><strong>Texas corporate:</strong> Dell, ExxonMobil, AT&amp;T, ConocoPhillips, Phillips 66</li>
            <li><strong>Top corporate development programs:</strong> Procter &amp; Gamble, Boeing, GE, IBM</li>
          </ul>

          <h3>Engineering (Oil & Gas, Defense, Manufacturing)</h3>
          <ul>
            <li><strong>Oil and gas majors:</strong> ExxonMobil, Chevron, ConocoPhillips, Shell, BP, Hess, Pioneer Natural Resources, Devon Energy</li>
            <li><strong>Defense:</strong> Lockheed Martin, Boeing, Raytheon, Northrop Grumman, SpaceX</li>
            <li><strong>Semiconductors:</strong> Texas Instruments, AMD, Nvidia, Qualcomm, Apple, Samsung</li>
            <li><strong>Power and utilities:</strong> Oncor, CenterPoint Energy, Vistra Energy</li>
            <li><strong>Construction and infrastructure:</strong> Bechtel, Fluor, Kiewit, AECOM</li>
          </ul>

          <h3>Government and policy</h3>
          <ul>
            <li><strong>Federal:</strong> Department of State, Department of Defense, CIA, FBI, NSA, Department of Treasury</li>
            <li><strong>Texas state:</strong> Office of the Governor, Texas Legislature, state agencies (which are largely in Austin)</li>
            <li><strong>Think tanks:</strong> Brookings, Heritage, Texas Public Policy Foundation</li>
            <li><strong>Public service:</strong> Teach for America, Peace Corps, AmeriCorps, City Year</li>
          </ul>

          <h2>Graduate and professional school placement</h2>
          <ul>
            <li><strong>Medical school:</strong> ~50-55% of UT pre-med applicants admit per cycle (vs national ~41%). Top destinations: Dell Medical, UT-Houston, UT-San Antonio, UTMB, Baylor College of Medicine, plus out-of-state top schools (Harvard, Stanford, Hopkins, UCSF, UPenn).</li>
            <li><strong>Law school:</strong> UT Austin students place strongly into top law schools. Top destinations: UT Law, Harvard Law, Yale Law, Stanford Law, University of Chicago Law, NYU Law, Columbia Law.</li>
            <li><strong>MBA programs:</strong> McCombs MBA, Harvard, Wharton, Booth, Stanford GSB, Kellogg, MIT Sloan. UT students typically work 3-5 years before pursuing MBA.</li>
            <li><strong>PhD programs:</strong> UT Computer Science Turing Scholars send students to top PhD programs (MIT, Stanford, CMU, Berkeley). Strong placement across STEM, humanities, and social sciences PhD programs.</li>
            <li><strong>Other professional:</strong> Pharmacy (UT Pharmacy has its own school), Dentistry, Optometry, Physical Therapy, Physician Assistant programs.</li>
          </ul>

          <h2>The Longhorn Network: alumni reach</h2>
          <ul>
            <li><strong>Total alumni:</strong> ~500,000+ globally</li>
            <li><strong>Texas concentrations:</strong> Austin (highest density of any city), Houston, Dallas/Fort Worth, San Antonio</li>
            <li><strong>Out-of-state concentrations:</strong> Bay Area (San Francisco), New York, Washington DC, Los Angeles, Seattle</li>
            <li><strong>International:</strong> London, Singapore, Mexico City, Hong Kong all have significant UT alumni groups</li>
            <li><strong>Industry depth:</strong> Texas corporate (oil and gas, tech, finance, healthcare, real estate, music) has UT presence at every level; specific industries like Texas energy and Austin tech have UT alumni concentrations among the highest of any university</li>
            <li><strong>Texas Exes:</strong> the official UT alumni association; 100+ chapters globally; substantial career and networking benefits</li>
          </ul>

          <h2>Long-term outcomes</h2>
          <ul>
            <li><strong>UT undergrad to top-tier MBA:</strong> common pathway; 3-5 years of work experience plus McCombs/UT alumni network typically opens Harvard, Wharton, Booth, Stanford GSB</li>
            <li><strong>UT undergrad to top medical school:</strong> common pathway; strong undergraduate performance plus MCAT plus clinical experience opens top medical schools</li>
            <li><strong>UT undergrad to Big Tech career trajectory:</strong> UT CS and Engineering produces hundreds of Apple, Google, Meta, Amazon engineers; long-term tech compensation runs $200K-$500K+ for senior engineers and $500K-$2M+ for leadership</li>
            <li><strong>UT undergrad to law partner:</strong> common pathway; UT Law admission rate is strong, and BigLaw partnership track produces $1M+ partner compensation by mid-career</li>
            <li><strong>UT undergrad to entrepreneurship:</strong> UT Austin is one of the strongest entrepreneurship pipelines in the country; Austin&apos;s startup ecosystem produces many UT-founded companies</li>
          </ul>

          <h2>ROI: cost vs outcomes</h2>
          <p>UT Austin&apos;s combination of moderate tuition (in-state $11,688, out-of-state $44,908) and strong graduate outcomes produces one of the best ROI profiles among US universities:</p>
          <ul>
            <li><strong>In-state student, CS major:</strong> $46,752 four-year tuition vs ~$120,000/year starting salary. Payback ~5 months.</li>
            <li><strong>In-state student, McCombs Finance:</strong> $56,800 four-year tuition vs ~$95,000 starting salary. Payback ~7 months.</li>
            <li><strong>Out-of-state student with residency pathway, CS:</strong> ~$80,000 four-year tuition vs ~$120,000 starting salary. Payback ~8 months.</li>
            <li><strong>Out-of-state student, sticker, CS:</strong> ~$214,000 four-year tuition vs ~$120,000 starting salary. Payback ~2 years.</li>
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
              <li><Link href="/is-ut-austin-worth-it-out-of-state">Is UT Austin worth it</Link>: ROI analysis by major</li>
              <li><Link href="/by-college">By UT college</Link>: per-college tuition vs outcomes</li>
              <li><Link href="/ut-austin-4-year-cost-out-of-state">4-year cost</Link>: investment side of the ROI equation</li>
              <li><Link href="/ut-austin-rankings">UT Austin rankings</Link>: contextual academic strength</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-graduate-outcomes" />
    </>
  );
}
