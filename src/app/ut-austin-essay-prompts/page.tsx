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

const TITLE = 'UT Austin Essay Prompts 2026-27 (ApplyTexas + Major-Specific Essays)';
const DESCRIPTION = 'Complete guide to the 2026-27 UT Austin essay prompts: the ApplyTexas Topic A personal statement plus major-specific essays for McCombs, Cockrell, CS, Liberal Arts, and other colleges. What admissions readers actually want.';
const PATH = '/ut-austin-essay-prompts';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'How many essays does UT Austin require?', a: 'UT Austin requires the ApplyTexas Topic A essay (universal across all majors and applicants) plus a Major-Specific Short Answer for each major the student applies to. Most applicants write the Topic A essay (650 words) plus one Short Answer (250-300 words) for their first-choice major. Students applying to McCombs Business, Computer Science, or the Honors programs may have additional supplemental essays.' },
  { q: 'What is the ApplyTexas Topic A prompt?', a: '"Tell us your story. What unique opportunities or challenges have you experienced throughout your high school career that have shaped who you are today?" This is the universal UT Austin personal statement. 650 words maximum. Used to evaluate writing quality, self-awareness, and fit with UT.' },
  { q: 'What is the UT Austin Major-Specific Short Answer prompt?', a: 'Each major has its own prompt asking why the applicant has chosen that major and what experiences support the choice. Typical length: 250-300 words. The major-specific essay is read alongside the personal statement and is weighted heavily for major-fit evaluation. McCombs, Computer Science, and Cockrell Engineering have particularly rigorous major-specific evaluation.' },
  { q: 'Do I need to write a separate essay for each major I apply to?', a: 'Yes. Each major has its own Short Answer prompt; you must answer each one for the majors you list. Most applicants list 1-3 majors maximum because each major requires a substantive 250-300 word essay focused on that specific major.' },
  { q: 'What does the UT Austin admissions reader actually want in essays?', a: 'Specific, well-substantiated motivation for the major. Generic statements like "I want to help people" do not work. Admissions readers want concrete evidence: a specific project, internship, or experience that drew the applicant to the major; a clear understanding of what the major involves at UT; and authentic self-reflection. They also want signs that the applicant has researched UT specifically (Austin location, particular faculty, specific programs) rather than treating UT as one of many large publics.' },
  { q: 'How are UT Austin essays scored?', a: 'UT Austin uses a holistic review process that combines academic profile (GPA, test scores, course rigor) with extracurricular profile, essays, recommendations, and any other supporting materials. Essays are read by trained admissions readers and scored on writing quality, evidence of self-awareness, fit with the major, and authentic voice. Essays cannot save a weak academic profile but can significantly differentiate strong applicants from each other.' },
  { q: 'Should I write about my SAT score or GPA in my essay?', a: 'No. Academic metrics are already in the application file. Essays should reveal aspects of the applicant that the rest of the file cannot: motivation, character, voice, perspective, intellectual curiosity, personal challenges or distinctive experiences. Spending essay space on credentials is wasted effort.' },
  { q: 'Can I write a creative or unusual essay for UT?', a: 'Yes, within reason. UT readers appreciate authentic voice and creative approach when it serves the prompt. However, novelty for its own sake (essay as a poem, essay as a fictional dialog, essay as a code snippet) often distracts from the substantive evaluation. The strongest essays use creative voice in service of a clear, authentic narrative.' },
  { q: 'What essay topics should I avoid for UT Austin?', a: 'Avoid: (1) generic "diversity matters" or "I want to change the world" statements without specific substance; (2) the family vacation or sports tournament that "taught me to never give up"; (3) the AP class that "challenged me intellectually"; (4) anything that could be substituted into any college application without changing the school name. Strong UT essays are specific to UT and specific to the applicant.' },
  { q: 'When are UT Austin essays due?', a: 'The priority deadline for UT Austin is November 1 (early action for some programs). The regular deadline is December 1. Both deadlines require the essays submitted at the same time as the rest of the application. Most applicants begin essays in October at the latest; the strongest essays are drafted in summer and refined through fall.' },
];

export default function EssayPromptsPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Essay Prompts', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Application essays"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Essay Prompts 2026-27</h1>}
        lede="The complete guide to UT Austin's application essays: ApplyTexas Topic A personal statement, major-specific short answers, and what admissions readers actually want."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The essays at a glance">
            UT Austin requires the <strong>ApplyTexas Topic A</strong> personal statement (650 words) plus a <strong>major-specific short answer</strong> (250-300 words) for each major applied to. McCombs, Computer Science, and the Honors programs may require additional supplemental essays. Priority deadline is <strong>November 1</strong>; regular deadline is <strong>December 1</strong>. The essays are evaluated alongside academic profile and extracurricular profile in UT&apos;s holistic review.
          </QuickAnswer>

          <AuthorBox blurb="Has helped dozens of out-of-state UT applicants think through their application essays in the context of their academic profile and the residency pathway considerations." />

          <h2 className="mt-0">The ApplyTexas Topic A personal statement</h2>
          <div className="callout">
            <h4>Prompt</h4>
            <p>&quot;Tell us your story. What unique opportunities or challenges have you experienced throughout your high school career that have shaped who you are today?&quot;</p>
            <p className="mb-0"><strong>Maximum length:</strong> 650 words. Required for all UT Austin applicants.</p>
          </div>

          <p>The Topic A is UT&apos;s version of the Common App personal essay. It is the applicant&apos;s primary opportunity to reveal who they are beyond the academic and extracurricular profile. Strong Topic A essays share three qualities:</p>
          <ul>
            <li><strong>Authentic voice.</strong> The essay reads like the applicant&apos;s actual speaking voice, not a polished marketing document.</li>
            <li><strong>Specific substance.</strong> Concrete experiences, decisions, and moments. Not generic claims about character traits.</li>
            <li><strong>Reflective depth.</strong> Evidence that the applicant has thought about what their experiences mean, not just what happened.</li>
          </ul>

          <h2>The major-specific short answer</h2>
          <p>Every UT Austin major requires a short answer about why the applicant has chosen that major. Length: 250-300 words. The exact prompt wording varies slightly by college but the substance is always the same: &quot;why this major, and what experiences support the choice?&quot;</p>

          <h3>What admissions readers want in the major-specific short answer</h3>
          <ul>
            <li>A clear statement of why this specific major (not just &quot;business&quot; or &quot;engineering,&quot; but the specific UT program)</li>
            <li>Concrete experiences that demonstrate genuine interest: projects, internships, jobs, independent learning, competitions, or other substantive engagement</li>
            <li>Knowledge of what the major actually involves at UT (specific courses, faculty, opportunities)</li>
            <li>A coherent fit between the applicant&apos;s background and the major</li>
            <li>Forward-looking thoughts about what the applicant intends to do with the major</li>
          </ul>

          <h2>College-specific essay considerations</h2>

          <h3>McCombs School of Business</h3>
          <p>McCombs reads the major-specific short answer particularly carefully and may have additional supplemental questions for Business Honors Program (BHP) applicants. Strong McCombs essays show: (1) genuine interest in business as a discipline, not just &quot;making money&quot;; (2) leadership or entrepreneurial experiences (clubs, businesses, projects, organizations); (3) understanding of the specific BBA tracks at McCombs (Finance, MIS, Marketing, Accounting, Management, Supply Chain).</p>

          <h3>Computer Science (CSDS)</h3>
          <p>UT CS reads essays in the context of one of the most selective majors at the university. Strong CS essays show: (1) substantive programming or technical projects; (2) intellectual curiosity about computer science as a discipline (not just &quot;tech is the future&quot;); (3) understanding of what CS at UT involves (algorithms, theory, systems, applications); (4) for Turing Scholars applicants, additional supplemental focused on research interest.</p>

          <h3>Cockrell School of Engineering</h3>
          <p>Cockrell evaluates engineering interest carefully. Strong Cockrell essays show: (1) specific interest in one of the 11 engineering disciplines (not generic &quot;engineering&quot;); (2) hands-on engineering experiences (robotics, building, designing, problem-solving); (3) math and physics aptitude demonstrated through coursework and any related extracurricular activities; (4) understanding that engineering involves both theory and applied problem-solving.</p>

          <h3>Moody College of Communication</h3>
          <p>Moody evaluates communication interest with attention to specific tracks (Radio-TV-Film, Journalism, Advertising, Communication Studies). Strong essays show: (1) specific medium or specialization interest; (2) creative or analytical work in that medium; (3) understanding of how communication intersects with other disciplines (business, public policy, the arts).</p>

          <h3>College of Natural Sciences</h3>
          <p>The largest college at UT with diverse majors (biology, chemistry, physics, math, biochemistry, neuroscience, pre-med tracks). Strong essays show: (1) scientific curiosity demonstrated through specific projects, research, or competitions; (2) understanding of the major chosen (pre-med readers in particular look for understanding of what a medical career involves); (3) intellectual interests beyond just credentials.</p>

          <h3>Plan II Honors Program</h3>
          <p>Plan II is UT&apos;s interdisciplinary liberal arts honors program. Application requires an additional supplemental essay focused on intellectual interests and breadth. Strong Plan II essays show: (1) genuine intellectual curiosity across multiple disciplines; (2) substantive engagement with ideas (reading, writing, debate, research); (3) authentic voice and writing quality.</p>

          <h2>Essay writing strategy: month-by-month</h2>
          <ol>
            <li><strong>June (summer before senior year):</strong> Begin brainstorming. Identify 3-5 candidate Topic A stories; identify 2-3 candidate major-specific narratives.</li>
            <li><strong>July:</strong> Draft Topic A. First draft is for substance, not polish. Aim for 800-900 words; cut to 650 in revisions.</li>
            <li><strong>August:</strong> Draft major-specific short answers. One per major applied to.</li>
            <li><strong>September:</strong> Revise. Get feedback from 2-3 trusted readers (English teacher, mentor, college counselor). Cut, sharpen, refine voice.</li>
            <li><strong>October:</strong> Final polish. Submit application by November 1 priority deadline.</li>
            <li><strong>November-December:</strong> If applying to additional colleges with different essays, complete those.</li>
          </ol>

          <h2>Common essay mistakes that hurt UT applications</h2>
          <ul>
            <li><strong>The generic personal statement.</strong> An essay that could be submitted to any college without changing a word demonstrates the applicant has not engaged with UT specifically.</li>
            <li><strong>The credentials recitation.</strong> Listing AP courses, club leadership, and SAT scores in the essay wastes space; this information is elsewhere in the file.</li>
            <li><strong>The cliched topic.</strong> The sports injury that taught perseverance, the family vacation that broadened horizons, the science competition that revealed passion: these have been overdone.</li>
            <li><strong>The major-fit mismatch.</strong> Writing about a passion for journalism while applying to McCombs Business raises immediate questions about the application&apos;s coherence.</li>
            <li><strong>The unfounded ambition.</strong> &quot;I want to be a doctor&quot; without evidence of substantive medical interest or relevant experience reads as unsupported.</li>
            <li><strong>The over-edited voice.</strong> An essay that sounds like an English teacher wrote it does not sound like the applicant. Authentic voice matters more than polished prose.</li>
            <li><strong>Missing the prompt.</strong> Some applicants write a personal essay that does not respond to the actual Topic A prompt. Read the prompt carefully.</li>
          </ul>

          <h2>Honors and scholarship supplemental essays</h2>
          <p>Strong applicants should plan for additional supplemental essays for:</p>
          <ul>
            <li><strong>Forty Acres Scholars Program:</strong> additional essays for the flagship full-ride scholarship; November 1 deadline</li>
            <li><strong>Plan II Honors:</strong> additional supplemental essay focused on intellectual interests</li>
            <li><strong>McCombs Business Honors Program (BHP):</strong> additional supplemental essays for BHP applicants</li>
            <li><strong>Cockrell Honors:</strong> additional considerations for honors-track engineering students</li>
            <li><strong>UT Honors and Scholarship Application (HSA):</strong> in MyStatus after admission, additional questions for institutional merit scholarships</li>
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
              <li><Link href="/ut-austin-application-deadlines">UT Austin application deadlines</Link>: the complete timeline</li>
              <li><Link href="/ut-austin-acceptance-rate-out-of-state">UT Austin acceptance rate</Link>: what admissions actually requires</li>
              <li><Link href="/ut-austin-scholarships-out-of-state">UT Austin scholarships</Link>: aid available to non-residents</li>
              <li><Link href="/by-college">By UT college</Link>: per-college admissions and tuition</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-essay-prompts" />
    </>
  );
}
