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

const TITLE = 'What is UT Austin Known For? (Complete Guide to UT Reputation)';
const DESCRIPTION = 'What UT Austin is known for: top public research university, McCombs Business (top 10), Computer Science (top 10-12), Petroleum Engineering (#1-3), Longhorn athletics, Austin tech scene, and the largest living alumni network among Texas universities.';
const PATH = '/what-is-ut-austin-known-for';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is UT Austin known for academically?', a: 'UT Austin is known for: McCombs Business School (top 10 undergrad business, top 3 in Accounting and MIS); Computer Science (CSDS, top 10-12 nationally); Petroleum Engineering (#1-3 nationally); Plan II Honors (interdisciplinary liberal arts); Government and public policy (LBJ School graduate adjacency); Journalism and Communication (Moody College); Fine Arts (Butler School of Music, Blanton Museum). UT is a top-30 national university and top-10 US public university.' },
  { q: 'What is UT Austin known for beyond academics?', a: 'UT Austin is also famous for: Longhorn athletics tradition (Big 12/SEC football, basketball, baseball); Austin location and cultural scene (music capital, tech industry hub, state capital); large and connected alumni network (~500,000+ living alumni globally); college traditions (Bevo mascot, Hook \'em Horns hand sign, Tower lighting for wins); Austin\'s cultural offerings (music festivals like ACL and SXSW, food scene, outdoor recreation).' },
  { q: 'Is UT Austin a good college?', a: 'Yes. UT Austin is consistently ranked top 30 nationally (US News), top 10 among US public universities, top 50 globally. It is classified as an R1 doctoral research university (highest research classification) and a member of the Association of American Universities (62 leading research universities). For its cost (especially in-state, and after the residency pathway for OOS), UT provides among the best public university value in the US.' },
  { q: 'What is UT Austin\'s biggest strength?', a: 'UT\'s biggest strengths are: (1) broad academic excellence across many disciplines simultaneously (many top-10 or top-20 programs at once); (2) the McCombs-CS-Cockrell trio provides three top-tier professional programs; (3) Austin location advantage for tech, government, and music careers; (4) the largest Texas alumni network with deep placement across major Texas employers; (5) strong value proposition given tuition costs.' },
  { q: 'What are UT Austin\'s most famous programs?', a: 'Most famous UT programs: (1) McCombs School of Business (BBA, especially Accounting #1-3 and MIS #3-5); (2) Cockrell School of Engineering (Petroleum #1-3 nationally); (3) Computer Science (CSDS, top 10-12); (4) Plan II Honors (distinctive interdisciplinary program); (5) LBJ School of Public Affairs (top 15 graduate school); (6) UT School of Law (top 15); (7) Dell Medical School (newer but growing rapidly); (8) Butler School of Music.' },
  { q: 'What is UT Austin known for in sports?', a: 'UT Austin sports: Longhorn football (multiple national championships, one of the strongest college football brands); Baseball (multiple College World Series titles); Basketball (competitive Big 12 program); Track and Field (Olympic athlete pipeline); Football stadium Darrell K Royal-Texas Memorial Stadium seats 100,000+. In 2024 UT joined the SEC (Southeastern Conference), joining Texas A&M and other elite Southern athletic programs.' },
  { q: 'Is UT Austin known for anything unique?', a: 'Distinctive UT features: (1) UT Tower - the iconic 307-foot bell tower at center of campus, lit orange for major athletic and academic wins; (2) Six Bevos statues around campus; (3) Longhorn Network - dedicated ESPN network for UT sports; (4) Plan II Honors - one of the few interdisciplinary liberal arts honors programs at a public flagship; (5) Forty Acres Scholars Program - flagship full-ride scholarship worth $200K+ over 4 years for ~15 students annually.' },
  { q: 'What is UT Austin\'s enrollment?', a: 'UT Austin total enrollment approximately 52,000: 42,000 undergraduates and 10,000 graduate students. Making it one of the largest universities in the United States. Approximately 10% of undergraduates are out-of-state. UT admits approximately 8,500-9,000 freshmen each year, plus ~2,000 transfer students.' },
];

export default function KnownForPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'What is UT Austin Known For', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="What is UT Austin known for"
        title={<h1 className="text-ink max-w-[22ch]">What is UT Austin Known For?</h1>}
        lede="A complete guide to UT Austin's reputation: top public research university, elite programs across business, engineering, and CS, iconic Longhorn athletics, Austin location, and the largest Texas alumni network."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="UT Austin at a glance">
            UT Austin is known for being a <strong>top-10 US public university</strong> (top 30 nationally) with elite programs in <strong>Business</strong> (McCombs top 10), <strong>Computer Science</strong> (top 10-12), <strong>Engineering</strong> (Cockrell top 10-15, Petroleum #1-3), and <strong>Liberal Arts</strong> (Plan II Honors). Also famous for <strong>Longhorn athletics</strong>, <strong>Austin location</strong> (tech capital, music capital, state capital), and one of the largest <strong>alumni networks</strong> in higher education (~500,000+ living alumni).
          </QuickAnswer>

          <AuthorBox blurb="Has helped dozens of families understand UT Austin's reputation, strengths, and fit for their student." />

          <h2 className="mt-0">Academic reputation</h2>

          <h3>Top-tier public university</h3>
          <ul>
            <li>US News National Universities: #32 (top 30-40 range over past decade)</li>
            <li>US News Public Universities: #10 (consistently top 10-15)</li>
            <li>Times Higher Education World: #48 (top 50 globally)</li>
            <li>QS World University Rankings: #67</li>
            <li>Association of American Universities (AAU) member: yes (62 elite research universities)</li>
            <li>Carnegie Classification: R1 Doctoral University (highest research classification)</li>
          </ul>

          <h3>McCombs School of Business (top-tier)</h3>
          <ul>
            <li>Top 10 undergraduate business school</li>
            <li>Accounting: #1-3 nationally</li>
            <li>Management Information Systems (MIS): #3-5 nationally</li>
            <li>Marketing, Finance: top 15</li>
            <li>Business Honors Program (BHP): elite undergraduate business honors</li>
          </ul>

          <h3>Cockrell School of Engineering</h3>
          <ul>
            <li>Top 10-15 engineering school overall</li>
            <li>Petroleum Engineering: #1-3 nationally (consistently top-ranked)</li>
            <li>Chemical Engineering: top 10</li>
            <li>Civil Engineering: top 10</li>
            <li>Aerospace, Biomedical, Electrical: top 15</li>
            <li>Software Engineering: newer discipline, growing rapidly</li>
          </ul>

          <h3>Computer Science (CSDS)</h3>
          <ul>
            <li>Top 10-12 nationally in CS Rankings</li>
            <li>Programming Languages: #2 nationally</li>
            <li>Theory of Computing: top 10</li>
            <li>Turing Scholars: elite research honors program</li>
            <li>Strong pipeline to Google, Meta, Apple, Amazon, plus PhD programs at MIT, Stanford, CMU, Berkeley</li>
          </ul>

          <h3>Plan II Honors (distinctive)</h3>
          <ul>
            <li>Established 1935; one of the earliest interdisciplinary honors programs in the US</li>
            <li>~175 students per cohort; highly selective</li>
            <li>Custom liberal arts curriculum across multiple disciplines</li>
            <li>Small classes with senior faculty; can dual-major with any UT program</li>
          </ul>

          <h3>Other notable programs</h3>
          <ul>
            <li><strong>LBJ School of Public Affairs:</strong> top 15 public policy graduate school</li>
            <li><strong>UT School of Law:</strong> top 15 law school</li>
            <li><strong>Butler School of Music:</strong> top 30 music school</li>
            <li><strong>School of Nursing:</strong> top 50</li>
            <li><strong>Dell Medical School:</strong> newer (founded 2016) but rapidly building reputation</li>
            <li><strong>Moody College of Communication:</strong> top 20 in Communication</li>
            <li><strong>School of Architecture:</strong> top 10 in Architecture</li>
          </ul>

          <h2>Athletics and traditions</h2>

          <h3>Longhorn athletics</h3>
          <ul>
            <li><strong>Football:</strong> multiple national championships (1963, 1969, 1970, 2005); one of the strongest college football brands nationally</li>
            <li><strong>Baseball:</strong> 6 College World Series championships; consistently top-ranked</li>
            <li><strong>Basketball:</strong> competitive program; regular NCAA Tournament appearances</li>
            <li><strong>Conference:</strong> joined SEC in 2024 from Big 12; competing at highest level</li>
            <li><strong>Longhorn Network:</strong> dedicated ESPN network for UT athletics</li>
            <li><strong>Facilities:</strong> Darrell K Royal-Texas Memorial Stadium (100,000+ capacity); Frank Erwin Center (basketball); UFCU Disch-Falk Field (baseball)</li>
          </ul>

          <h3>Iconic traditions</h3>
          <ul>
            <li>UT Tower (307 feet; lit burnt orange for major wins)</li>
            <li>Bevo (live longhorn mascot at football games)</li>
            <li>&quot;Hook &apos;em Horns&quot; hand sign</li>
            <li>Eyes of Texas (school song)</li>
            <li>Forty Acres nickname (original campus size in acres)</li>
          </ul>

          <h2>Austin location advantage</h2>
          <ul>
            <li><strong>State capital of Texas:</strong> government, policy, lobbying opportunities</li>
            <li><strong>Tech capital of Texas:</strong> Apple (largest campus outside Cupertino), Google, Meta, Tesla, Dell, IBM, Oracle</li>
            <li><strong>Music industry:</strong> &quot;Live Music Capital of the World&quot;; SXSW, ACL Festival</li>
            <li><strong>Real estate:</strong> one of the fastest-growing US metros</li>
            <li><strong>Climate:</strong> mild winters; strong outdoor recreation year-round</li>
            <li><strong>Cost of living:</strong> significantly lower than Bay Area, NYC, LA, Seattle</li>
            <li><strong>No state income tax</strong> (Texas advantage)</li>
          </ul>

          <h2>Alumni network</h2>
          <ul>
            <li>~500,000+ living alumni globally (among the largest of any US university)</li>
            <li>Deep placement across major Texas employers (energy, healthcare, tech, finance, real estate)</li>
            <li>Strong concentrations in Austin, Houston, Dallas, San Antonio</li>
            <li>Out-of-state concentrations: Bay Area, NYC, DC, LA, Seattle</li>
            <li>Texas Exes: official alumni association; 100+ chapters globally</li>
          </ul>

          <h2>Enrollment and demographics</h2>
          <ul>
            <li><strong>Total enrollment:</strong> ~52,000 (42,000 undergrad + 10,000 graduate)</li>
            <li><strong>Undergraduate class size:</strong> ~8,500-9,000 freshmen + ~2,000 transfer annually</li>
            <li><strong>Out-of-state percentage:</strong> ~10% of undergrads</li>
            <li><strong>International:</strong> ~3-5% additional</li>
            <li><strong>Acceptance rate:</strong> ~31% overall (~8-13% non-resident)</li>
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
              <li><Link href="/ut-austin-rankings">UT Austin rankings</Link>: detailed rankings by category</li>
              <li><Link href="/is-ut-austin-a-good-school">Is UT Austin a good school</Link>: decision analysis</li>
              <li><Link href="/is-ut-austin-worth-it-out-of-state">Is UT worth it OOS</Link>: value analysis</li>
              <li><Link href="/ut-austin-graduate-outcomes">Graduate outcomes</Link>: career placement data</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-known-for" />
    </>
  );
}
