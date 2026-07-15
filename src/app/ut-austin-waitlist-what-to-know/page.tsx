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

const TITLE = 'UT Austin Waitlist: How It Works + What to Do (2026 Guide)';
const DESCRIPTION = 'UT Austin waitlist: how it works, historical acceptance rates from waitlist (~10-20%), what to do if waitlisted, alternative programs (CAP, second-choice major), and how to increase chances of being pulled off.';
const PATH = '/ut-austin-waitlist-what-to-know';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Does UT Austin have a waitlist?', a: 'UT Austin does not typically use a traditional waitlist system in the way many private universities do. Instead, UT admits students to their first-choice major, second-choice major, or offers alternative admission through Coordinated Admission Program (CAP) or Discovery Scholars. Some students who apply to selective majors (McCombs, CS, Cockrell) may be admitted to a less-selective major with option to internally transfer later.' },
  { q: 'What is the Coordinated Admission Program (CAP) at UT Austin?', a: 'CAP is UT Austin\'s alternative admission pathway. Qualified Texas resident applicants who are not admitted to their first-choice UT Austin major may receive a CAP offer to attend UT Arlington, UT Dallas, UT El Paso, UT Permian Basin, UT Rio Grande Valley, UT San Antonio, or UT Tyler for freshman year, then guaranteed admission to UT Austin for sophomore year in College of Liberal Arts, Natural Sciences, or Undergraduate Studies. CAP is not available to non-Texas residents.' },
  { q: 'What is the Discovery Scholars program at UT Austin?', a: 'Discovery Scholars is a scholarship + academic support program for a select group of admitted students. Not a waitlist but an alternative admission pathway; participants receive scholarship funding and enrollment in academic and support programs.' },
  { q: 'What are my options if I was denied by UT Austin?', a: 'Options after UT denial: (1) accept CAP if offered (Texas residents only); (2) attend another Texas or out-of-state university and consider transfer to UT for junior year (~10-15% transfer acceptance); (3) attend Texas community college and pursue transfer path (see Texas CC transfer guide); (4) apply again for spring or fall admission (deadlines apply); (5) attend a different school and consider graduate school at UT.' },
  { q: 'What is the UT Austin transfer acceptance rate?', a: 'Transfer to UT Austin approximately 35-45% overall, varying by college. McCombs Business ~10-15%, Computer Science ~5-10%, Cockrell Engineering ~20-25%, Liberal Arts ~50-60%, Natural Sciences ~35-45%. Transfer requires 24+ transferable college credits with strong GPA (3.5+).' },
  { q: 'Can I appeal a UT Austin admissions decision?', a: 'UT Austin does not offer a formal appeals process for admission decisions. Once a decision is made, it is generally final. Applicants can reapply for a subsequent term (spring or next fall) or pursue transfer admission after attending another institution. UT reviewers do not reconsider decisions absent significant new information.' },
];

export default function WaitlistPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Waitlist', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin admissions"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Waitlist: What to Know</h1>}
        lede="UT Austin doesn't use a traditional waitlist. Complete guide to how UT admissions decisions work, CAP alternative admission, transfer pathways, and what to do if denied."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="How UT admissions work">
            UT Austin does <strong>not use a traditional waitlist</strong>. Instead: (1) accepted to first-choice major; (2) accepted to second-choice major; (3) offered <strong>CAP</strong> (Coordinated Admission Program, Texas residents only) which guarantees UT Austin admission for sophomore year after freshman year at another UT campus; (4) denied. Alternative paths: transfer admission (~35-45% overall rate) or reapply for future term.
          </QuickAnswer>

          <AuthorBox blurb="Helps families understand UT Austin admissions decisions and evaluate alternative pathways when direct admission does not work out." />

          <h2 className="mt-0">How UT Austin admissions decisions work</h2>
          <p>UT Austin admissions differs from many private universities in not using a traditional waitlist. Decisions come in these forms:</p>

          <h3>Accepted (first choice)</h3>
          <p>Admitted to your first-choice major/college. This is the goal. Includes McCombs BBA, CS direct admit, Cockrell Engineering direct admit, or other specific programs.</p>

          <h3>Accepted (second choice)</h3>
          <p>Not admitted to first choice; admitted to second choice. Common when applying to selective majors (McCombs, CS, Cockrell) as first choice with less-selective major as second. Student can attend and later pursue internal transfer (competitive) to desired major.</p>

          <h3>CAP offer (Texas residents only)</h3>
          <p>Coordinated Admission Program. Guaranteed admission to UT Austin for sophomore year in Liberal Arts, Natural Sciences, or Undergraduate Studies after completing freshman year with 3.2+ GPA at another UT campus (UT Arlington, UT Dallas, UT El Paso, UT Permian Basin, UT Rio Grande Valley, UT San Antonio, or UT Tyler). CAP is not available to non-Texas residents.</p>

          <h3>Discovery Scholars offer</h3>
          <p>Scholarship + academic support pathway for selected students. Not a waitlist; alternative admission with academic and financial support.</p>

          <h3>Denied</h3>
          <p>Not admitted for the requested term. Applicants can pursue alternative pathways.</p>

          <h2>The Coordinated Admission Program (CAP) in detail</h2>
          <ul>
            <li><strong>Who qualifies:</strong> Texas residents (not available for OOS)</li>
            <li><strong>Freshman year:</strong> Attend one of 7 other UT System campuses</li>
            <li><strong>Requirements:</strong> Complete 30+ hours with 3.2+ GPA; specific coursework requirements</li>
            <li><strong>Sophomore year:</strong> Guaranteed admission to UT Austin in Liberal Arts, Natural Sciences, or Undergraduate Studies</li>
            <li><strong>Not available:</strong> McCombs, CS, Cockrell, Fine Arts (must apply separately for internal transfer)</li>
            <li><strong>Cost:</strong> Freshman year at partner UT campus at in-state Texas rate</li>
            <li><strong>Total time:</strong> 4 years for bachelor\'s (1 at partner + 3 at UT Austin)</li>
          </ul>

          <h2>What to do if denied</h2>

          <h3>Option 1: Accept CAP (Texas residents)</h3>
          <p>If offered CAP, this is a strong pathway back to UT Austin. Attend freshman year at partner UT campus, maintain 3.2+ GPA, transfer to UT Austin for sophomore year. Full UT Austin degree upon completion.</p>

          <h3>Option 2: Community college transfer path</h3>
          <p>Attend Texas community college (Austin Community College is nearest to UT) for 1-2 years. Complete prerequisites with strong GPA (3.5+). Apply for UT Austin transfer admission. Overall transfer acceptance ~35-45%; higher for accessible majors, lower for McCombs/CS/Cockrell. See <Link href="/ut-austin-vs-community-college-transfer">UT vs community college transfer</Link>.</p>

          <h3>Option 3: Attend another university and consider transfer</h3>
          <p>Attend another university (Texas or out-of-state) for 1-2 years. Complete transferable prerequisites with strong GPA (3.7+ for competitive UT programs). Apply for UT transfer admission. Transfer to UT for junior year.</p>

          <h3>Option 4: Apply for a different term</h3>
          <p>UT admits students for both fall and spring semesters. Apply for spring 2027 admission instead of fall 2027 (spring deadline typically October 1 of prior fall). Smaller applicant pool; sometimes better odds.</p>

          <h3>Option 5: Take a gap year and reapply</h3>
          <p>Take a gap year to strengthen application (test scores, extracurriculars, essays, work/travel experience). Reapply for next admission cycle. Not common but occasionally successful for students who use the year productively.</p>

          <h3>Option 6: Attend elsewhere and pursue UT for graduate school</h3>
          <p>Attend another undergraduate university. Excel academically. Apply to UT for graduate school (McCombs MBA, UT Law, UT Med, LBJ Public Affairs, etc.) after undergraduate.</p>

          <h2>Transfer admission math</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>UT College</th>
                  <th>Transfer Acceptance Rate</th>
                  <th>Required GPA</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Liberal Arts</td><td className="num">~50-60%</td><td className="num">3.0+</td></tr>
                <tr><td>Communication</td><td className="num">~40-50%</td><td className="num">3.0+</td></tr>
                <tr><td>Natural Sciences</td><td className="num">~35-45%</td><td className="num">3.0+ to 3.5+</td></tr>
                <tr><td>Cockrell Engineering</td><td className="num">~20-25%</td><td className="num">3.5+</td></tr>
                <tr><td>McCombs Business</td><td className="num">~10-15%</td><td className="num">3.7+</td></tr>
                <tr><td>Computer Science</td><td className="num">~5-10%</td><td className="num">3.8+</td></tr>
              </tbody>
            </table>
          </div>

          <h2>For out-of-state students who don&apos;t get in</h2>
          <p>OOS acceptance rate is ~8-13% overall (~5-8% for McCombs, CS, Cockrell ECE). Some strategies specific to OOS:</p>
          <ul>
            <li>Consider Texas community college pathway; establish Texas residency during CC years; transfer to UT as Texas resident (much better odds)</li>
            <li>Attend another university for 1-2 years, build strong college transcript, transfer to UT</li>
            <li>Consider other Texas public universities (Texas A&amp;M, UT Dallas, Texas Tech) as backup</li>
            <li>For UT specifically: consider transfer path after 1-2 years elsewhere</li>
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
              <li><Link href="/ut-austin-transfer-admission">Transfer admission</Link>: complete transfer process</li>
              <li><Link href="/ut-austin-vs-community-college-transfer">Community college pathway</Link>: cost-focused alternative</li>
              <li><Link href="/ut-austin-acceptance-rate-out-of-state">UT acceptance rate</Link>: admissions math</li>
              <li><Link href="/ut-austin-application-deadlines">Application deadlines</Link>: reapplication timing</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-waitlist" />
    </>
  );
}
