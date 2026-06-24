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

const TITLE = 'UT Austin Internships: Top Companies, Programs, How to Land Them';
const DESCRIPTION = 'UT Austin internships guide: top companies (Apple, Google, Goldman, Deloitte, ExxonMobil), career services support, on-campus recruiting, internship search strategy by major, and the Austin tech and government opportunity ecosystem.';
const PATH = '/ut-austin-internships';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What internship support does UT Austin offer?', a: 'UT Austin Career Services (Career Engagement Center) provides resume review, mock interviews, on-campus recruiting coordination, and internship search support. Most colleges (McCombs, Cockrell, Moody, Natural Sciences) also operate their own career services offices with major-specific industry connections. UT also has Handshake (the primary internship job board for UT students) with thousands of posted internships per recruitment cycle.' },
  { q: 'What are the top internship destinations for UT Austin students?', a: 'For Computer Science: Google, Meta, Apple, Amazon, Microsoft, Stripe, Palantir, Tesla. For McCombs Business: Goldman Sachs, JPMorgan, McKinsey, Bain, BCG, Deloitte, EY, PwC, KPMG. For Cockrell Engineering: ExxonMobil, Chevron, Lockheed Martin, Boeing, Tesla, Texas Instruments. For Liberal Arts and Communication: Texas state government, federal agencies (in DC), major media companies, NGOs. UT-area employers (Dell, Indeed, Bumble, AT&amp;T, Austin City government) also offer many internships.' },
  { q: 'When should my student start applying for internships?', a: 'For Wall Street investment banking and consulting: sophomore year fall for sophomore-summer internships (Wall Street recruiting cycle starts very early). For tech (Big Tech): freshman year fall for freshman-summer internships (some Big Tech companies recruit freshmen for SWE roles). For most other industries: sophomore year fall or spring for sophomore-summer. Junior year recruitment is essentially universal across industries.' },
  { q: 'What is the UT Austin internship participation rate?', a: 'Approximately 60-70% of UT Austin students complete at least one internship before graduation, with significant variation by major. McCombs and Cockrell students average 2-3 internships. CS students average 2-3 internships. Liberal Arts students average 1-2 internships. Communication students often pursue ongoing freelance or part-time work alongside formal internships.' },
  { q: 'Do UT Austin internships pay well?', a: 'UT internship pay varies significantly by industry. Tech internships (Big Tech, top startups): $7,000-$12,000/month plus housing stipend ($1,500-$3,000/month). Investment banking and consulting internships: $8,000-$12,000/month plus housing stipend. Big 4 accounting: $5,500-$7,500/month. Energy and oil and gas: $5,000-$7,000/month. Government and non-profit: $3,000-$5,000/month or stipend-based (some unpaid).' },
  { q: 'What is on-campus recruiting at UT Austin?', a: 'On-campus recruiting (OCR) is the structured process where major employers come to UT to interview students. Most occurs at McCombs Career Services Center, Cockrell Engineering Career Services, and the central Career Engagement Center. Companies host info sessions, networking events, and round-1 interviews on campus. OCR is the primary internship and job search channel for McCombs and Cockrell students. Other majors use Handshake and direct application more.' },
  { q: 'How does Austin\'s location help with internships?', a: 'Austin is one of the strongest internship cities in the US. Apple\'s second-largest US campus is in Austin. Google, Meta, Tesla, Dell, IBM, Oracle all have major Austin operations. The Texas Capitol provides state government internship density unmatched in any other US city. Healthcare (Dell Medical, Ascension, Baylor) provides medical internships. Music industry, advertising, and consumer brands also have strong Austin presence.' },
  { q: 'What if my student needs a summer internship and didn\'t get one through OCR?', a: 'Multiple alternatives: (1) direct application through company websites; (2) networking through UT alumni network via Texas Exes and LinkedIn; (3) smaller startups in Austin via Capital Factory and TechRanch; (4) state government internships through Texas Office of State Personnel; (5) faculty research opportunities for paid research positions; (6) industry-specific job boards (BCG\'s internal recruiting for consulting, Wall Street\'s SEO interviews for finance). UT students who pursue these alternatives can land excellent summer experiences.' },
];

export default function InternshipsPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Internships', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Internships"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Internships</h1>}
        lede="Top companies, on-campus recruiting, internship search strategy by major, and how Austin's tech and government ecosystem provides unmatched internship density."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The internship picture">
            Approximately <strong>60-70%</strong> of UT Austin students complete at least one internship before graduation; <strong>2-3 internships</strong> typical for McCombs, Cockrell, and CS. Top destinations: Google, Meta, Apple, Amazon, Stripe (CS); Goldman, JPMorgan, McKinsey, Bain, Big 4 (Business); ExxonMobil, Chevron, Lockheed Martin (Engineering). On-campus recruiting (OCR) at McCombs and Cockrell, plus Handshake job board, plus direct application channels. Austin&apos;s tech and government density provides unmatched local internship opportunities.
          </QuickAnswer>

          <AuthorBox blurb="Has worked with families weighing UT's career outcomes (a major value driver) in their college decision." />

          <h2 className="mt-0">UT Austin career services structure</h2>
          <ul>
            <li><strong>Texas Career Engagement Center (central):</strong> resume review, mock interviews, career fairs, broad services</li>
            <li><strong>McCombs Career Services:</strong> business-specific recruiting; very active OCR</li>
            <li><strong>Cockrell Engineering Career Services:</strong> engineering-specific recruiting; strong OCR</li>
            <li><strong>Moody Career Studio:</strong> communication, advertising, media internships</li>
            <li><strong>Natural Sciences Career Resource Center:</strong> sciences and pre-med internships</li>
            <li><strong>Handshake:</strong> UT&apos;s primary internship job board; thousands of postings; used by all students</li>
            <li><strong>Texas Exes alumni network:</strong> 500,000+ alumni globally for networking</li>
          </ul>

          <h2>Top internship destinations by major</h2>

          <h3>Computer Science (CS)</h3>
          <ul>
            <li><strong>Big Tech:</strong> Google, Meta, Apple, Amazon, Microsoft (heavy UT CS pipeline)</li>
            <li><strong>Top second-tier tech:</strong> Stripe, Palantir, Snowflake, Databricks, Roblox, Snap, Tesla</li>
            <li><strong>Austin tech:</strong> Indeed, Bumble, Cloudflare, Dell, Tesla (Gigafactory), Yeti, IBM</li>
            <li><strong>Quant trading:</strong> Jane Street, Citadel, Two Sigma, Susquehanna, DRW</li>
            <li><strong>Defense:</strong> Lockheed Martin, Boeing, SpaceX, Anduril</li>
            <li><strong>Pay:</strong> $7,000-$12,000/month plus housing stipend</li>
          </ul>

          <h3>McCombs Business (Finance, MIS, etc.)</h3>
          <ul>
            <li><strong>Investment banks:</strong> Goldman Sachs, JPMorgan, Morgan Stanley, Citi, Barclays, Deutsche Bank</li>
            <li><strong>Top consulting:</strong> McKinsey, Bain, BCG, Deloitte Consulting, Accenture, Booz Allen</li>
            <li><strong>Big 4 Accounting:</strong> Deloitte, EY, PwC, KPMG (huge UT presence)</li>
            <li><strong>Texas corporate:</strong> Dell, ExxonMobil, AT&amp;T, ConocoPhillips, Phillips 66</li>
            <li><strong>Consumer products:</strong> P&amp;G, Frito-Lay, Tyson, JBS</li>
            <li><strong>Pay:</strong> $7,000-$12,000/month (IB and consulting); $5,500-$7,500/month (Big 4)</li>
          </ul>

          <h3>Cockrell Engineering</h3>
          <ul>
            <li><strong>Oil and gas majors:</strong> ExxonMobil, Chevron, ConocoPhillips, Shell, BP, Hess, Pioneer Natural Resources, Devon Energy</li>
            <li><strong>Defense:</strong> Lockheed Martin, Boeing, Raytheon, Northrop Grumman, SpaceX</li>
            <li><strong>Semiconductors:</strong> Texas Instruments, AMD, Nvidia, Apple, Samsung, Qualcomm</li>
            <li><strong>Construction and infrastructure:</strong> Bechtel, Fluor, Kiewit, AECOM</li>
            <li><strong>Tesla (Austin Gigafactory):</strong> heavy hiring of UT engineering</li>
            <li><strong>Pay:</strong> $5,500-$9,000/month varies by industry</li>
          </ul>

          <h3>Government and Policy (Liberal Arts, LBJ School)</h3>
          <ul>
            <li><strong>Texas state:</strong> Office of the Governor, Texas Legislature, state agencies (heavy Austin presence)</li>
            <li><strong>Federal:</strong> Department of State, Department of Defense, intelligence agencies (heavily in DC)</li>
            <li><strong>NGOs:</strong> Texas Public Policy Foundation, Texas Civil Rights Project, Texas RioGrande Legal Aid</li>
            <li><strong>Lobbying and government affairs:</strong> Texas-based firms; DC firms for federal track</li>
            <li><strong>Pay:</strong> $3,000-$5,500/month for paid; some unpaid (stipend or for-credit)</li>
          </ul>

          <h3>Moody Communication</h3>
          <ul>
            <li><strong>Major media:</strong> CNN, NBC, ABC, Fox News, Texas Tribune, Austin American-Statesman</li>
            <li><strong>Advertising agencies:</strong> Austin firms (GSDM is local), national firms in NYC and Chicago</li>
            <li><strong>Music industry:</strong> Austin-based labels, festival organizations (SXSW, ACL)</li>
            <li><strong>Sports media:</strong> ESPN, Bleacher Report</li>
            <li><strong>PR firms:</strong> Texas and national</li>
            <li><strong>Pay:</strong> $3,000-$6,000/month varies</li>
          </ul>

          <h2>The Austin internship advantage</h2>
          <p>Austin&apos;s economic concentration creates unmatched internship density for several industries:</p>
          <ul>
            <li><strong>Tech:</strong> Austin has more Apple, Google, Meta, Tesla, Dell jobs per capita than almost any other US city. Heavy CS and engineering internship density.</li>
            <li><strong>Music industry:</strong> Austin is the &quot;Live Music Capital of the World&quot; with extensive industry presence (SXSW, ACL, dozens of record labels, music technology companies).</li>
            <li><strong>State government:</strong> Texas Capitol is in Austin; state agencies, legislative offices, and policy think tanks are concentrated here.</li>
            <li><strong>Real estate:</strong> Austin&apos;s growth has produced major real estate firms with internship opportunities.</li>
            <li><strong>Healthcare:</strong> Dell Medical, Ascension, Baylor Scott &amp; White all have substantial Austin presence with pre-med internship opportunities.</li>
            <li><strong>Consumer brands:</strong> Yeti, Bumble, Indeed, Whole Foods all have HQs or major offices in Austin.</li>
          </ul>

          <h2>Recruiting timelines by industry</h2>
          <ul>
            <li><strong>Investment banking:</strong> sophomore year fall recruiting for sophomore summer; junior year recruiting for full-time analyst</li>
            <li><strong>Consulting:</strong> junior year fall for junior summer; senior year for full-time</li>
            <li><strong>Big Tech:</strong> freshman or sophomore year fall (Big Tech recruits very early); some hire freshman-summer interns</li>
            <li><strong>Big 4 Accounting:</strong> sophomore year fall for sophomore summer (Big 4 recruits sophomores aggressively at McCombs)</li>
            <li><strong>Oil and gas:</strong> sophomore or junior year fall; structured recruiting at Cockrell Career Services</li>
            <li><strong>Government:</strong> varies; some have application deadlines fall before summer; some are spring/summer recruiting</li>
          </ul>

          <h2>For out-of-state students: building Austin career network</h2>
          <p>Out-of-state students may arrive without an existing Texas career network. Strategies to build it during freshman year:</p>
          <ul>
            <li><strong>Texas Exes networking:</strong> attend Texas Exes events in Austin during freshman year</li>
            <li><strong>Industry student organizations:</strong> Texas Capital Investing Group (TCIG), Texas Consulting Group, Women in Business, UT Pre-Med Society</li>
            <li><strong>Faculty office hours:</strong> faculty have industry connections and can make introductions</li>
            <li><strong>Career fair attendance:</strong> UT hosts multiple career fairs per year</li>
            <li><strong>LinkedIn networking:</strong> connect with UT alumni in target industries; ask for informational conversations</li>
            <li><strong>Summer in Austin:</strong> staying in Austin over freshman summer to build network is often valuable, even if internship is unpaid or part-time</li>
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
              <li><Link href="/ut-austin-graduate-outcomes">Graduate outcomes</Link>: where UT students land post-graduation</li>
              <li><Link href="/ut-austin-mccombs-admission">McCombs admission</Link>: business career pipeline</li>
              <li><Link href="/ut-austin-computer-science-admission">CS admission</Link>: tech career pipeline</li>
              <li><Link href="/ut-austin-engineering-admission">Engineering admission</Link>: engineering career pipeline</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-internships" />
    </>
  );
}
