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

const TITLE = 'UT Austin Honors Programs: Plan II, BHP, Turing Scholars, and All Others';
const DESCRIPTION = 'Complete guide to every UT Austin honors program: Plan II Honors, Business Honors Program (BHP), Turing Scholars (CS), Liberal Arts Honors, Engineering Honors, Natural Sciences Honors. Admissions, requirements, and what each program actually offers.';
const PATH = '/ut-austin-honors-programs';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What honors programs does UT Austin have?', a: 'UT Austin has multiple honors programs: (1) Plan II Honors (the flagship interdisciplinary liberal arts honors program); (2) Business Honors Program (BHP) at McCombs; (3) Turing Scholars in Computer Science; (4) Liberal Arts Honors; (5) Engineering Honors at Cockrell; (6) Natural Sciences Honors (multiple tracks including Polymathic Scholars, Health Science Scholars, Dean\'s Scholars, Computational Sciences Scholars); (7) Architecture Honors; (8) Communication Honors at Moody. Each program has its own application, criteria, and benefits.' },
  { q: 'Which UT Austin honors program is the most prestigious?', a: 'Plan II Honors is generally considered UT\'s flagship interdisciplinary honors program with a 70+ year history. Business Honors Program (BHP) at McCombs is the most prestigious within business. Turing Scholars is the most prestigious within Computer Science. The Forty Acres Scholars Program (full-ride scholarship, separate from these academic honors programs) is the most prestigious overall recognition.' },
  { q: 'What is Plan II Honors at UT Austin?', a: 'Plan II Honors is UT\'s interdisciplinary liberal arts honors program established in 1935. Plan II students follow a custom curriculum drawing from multiple disciplines (literature, philosophy, history, science, government) rather than a traditional major. Class sizes are small (8-15 students per section), faculty are senior research professors, and the cohort is tight-knit. Plan II admits approximately 175 students per year and is one of the most selective programs at UT. Plan II students can dual-major with any other field at UT.' },
  { q: 'What is the Business Honors Program (BHP) at McCombs?', a: 'BHP is McCombs School of Business\' flagship honors program for high-achieving business students. BHP students complete a specialized curriculum with smaller class sizes, take Plan II honors courses, and have priority access to McCombs resources. Admission to BHP is highly selective (approximately 100 students per cohort) and is separate from McCombs admission. BHP applicants must apply to both McCombs and BHP simultaneously; BHP-admitted students benefit from a stronger network and career placement.' },
  { q: 'What is Turing Scholars in Computer Science?', a: 'Turing Scholars is UT Computer Science\'s honors program for research-oriented undergraduates. Selection is by invitation after CS admission (Turing applicants do not apply separately; the program identifies candidates based on academic profile). Turing Scholars complete a research-track curriculum with faculty mentorship, accelerated coursework, and the option to complete a Master\'s thesis as an undergraduate. The program is small (approximately 20-25 students per year) and highly selective.' },
  { q: 'How do I apply to UT Austin honors programs?', a: 'Most honors programs require a separate application beyond the standard UT freshman application. Plan II, BHP, Liberal Arts Honors, Engineering Honors, Natural Sciences Honors, Architecture Honors, and Communication Honors each have separate supplemental essays and application materials. Most honors deadlines align with UT\'s November 1 priority deadline. Some programs (Turing Scholars) are by invitation only after initial CS admission. Submit honors applications simultaneously with the main UT application for maximum consideration.' },
  { q: 'Do UT Austin honors programs come with scholarships?', a: 'Some honors programs include scholarship funding. Plan II Honors awards Dedman Scholarships and other named awards. BHP students compete for McCombs Endowed Presidential Scholarships and BHP-specific awards. Liberal Arts Honors and Engineering Honors offer departmental scholarships. The Forty Acres Scholars Program is a separate full-ride scholarship that some honors students also receive. Most honors programs benefit from priority consideration for institutional scholarships in addition to the program-specific benefits.' },
  { q: 'Are UT Austin honors programs worth applying to?', a: 'For students with strong academic credentials applying to UT, yes. Honors programs at UT provide: (1) smaller class sizes with senior faculty; (2) specialized curriculum and research opportunities; (3) tighter cohort networks; (4) priority consideration for institutional scholarships; (5) stronger placement to graduate and professional schools; (6) the social and intellectual benefits of being among similarly motivated students. The application process is competitive but the benefits substantially improve the UT experience.' },
];

export default function HonorsPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Honors Programs', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Honors programs"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Honors Programs</h1>}
        lede="Plan II, Business Honors Program (BHP), Turing Scholars, Liberal Arts Honors, and every other honors track at UT Austin. Admissions, requirements, and what each program offers."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The short version">
            UT Austin has eight major honors programs across multiple colleges, plus the separate Forty Acres Scholars Program. Most require a separate application by November 1. Plan II is the flagship interdisciplinary honors program; BHP is the flagship business honors program; Turing Scholars is the flagship CS research honors track. Each provides smaller class sizes, faculty research access, and priority for institutional scholarships and post-graduation placement. For high-academic UT applicants, applying to honors substantially improves the UT experience.
          </QuickAnswer>

          <AuthorBox blurb="Has helped families think through which honors programs align with their student's academic interests and post-graduation goals." />

          <h2 className="mt-0">Plan II Honors (the flagship interdisciplinary program)</h2>
          <ul>
            <li><strong>What it is:</strong> Interdisciplinary liberal arts honors program established 1935. Custom curriculum across literature, philosophy, history, science, government.</li>
            <li><strong>Size:</strong> ~175 students per cohort</li>
            <li><strong>Selectivity:</strong> ~15-20% acceptance rate from a self-selected applicant pool of high-academic students</li>
            <li><strong>Average admitted profile:</strong> 4.0 unweighted GPA, SAT 1500+, deep extracurricular impact</li>
            <li><strong>Curriculum:</strong> Custom Plan II core + can dual-major with any UT major</li>
            <li><strong>Distinctive features:</strong> Senior thesis required; small seminar classes (8-15 students); senior faculty teach; sophomore-year retreat; Plan II network across alumni</li>
            <li><strong>Application:</strong> Separate Plan II essay submitted with UT application; deadline November 1</li>
            <li><strong>Scholarships:</strong> Dedman Scholarships, Junior Fellows, and other named awards</li>
          </ul>

          <h2>Business Honors Program (BHP) at McCombs</h2>
          <ul>
            <li><strong>What it is:</strong> McCombs Business honors program; combines business education with Plan II honors courses</li>
            <li><strong>Size:</strong> ~100 students per cohort</li>
            <li><strong>Selectivity:</strong> ~10-15% acceptance rate; admitted alongside or after McCombs admission</li>
            <li><strong>Average admitted profile:</strong> 4.0 unweighted GPA, SAT 1500+, leadership in business or related activities</li>
            <li><strong>Curriculum:</strong> Standard McCombs BBA + BHP honors core + Plan II honors courses; can pursue any McCombs major (Finance, MIS, Marketing, Accounting, Management, Supply Chain)</li>
            <li><strong>Distinctive features:</strong> Tighter cohort; priority placement to top investment banks, consulting, and Fortune 500 companies; substantial scholarship eligibility</li>
            <li><strong>Application:</strong> Separate BHP supplemental essays submitted with UT/McCombs application</li>
            <li><strong>Scholarships:</strong> McCombs Endowed Presidential Scholarships, BHP-specific awards</li>
          </ul>

          <h2>Turing Scholars in Computer Science</h2>
          <ul>
            <li><strong>What it is:</strong> CS research-track honors program for top CS undergraduates</li>
            <li><strong>Size:</strong> ~20-25 students per cohort</li>
            <li><strong>Selectivity:</strong> ~5-8% acceptance rate; invitation-only after CS admission</li>
            <li><strong>Average admitted profile:</strong> 4.0 unweighted GPA, SAT 1500+, substantial CS research or competitive programming background</li>
            <li><strong>Curriculum:</strong> CS major + Turing research track + faculty mentorship + accelerated coursework option</li>
            <li><strong>Distinctive features:</strong> Research-focused; option to complete Master&apos;s thesis as undergraduate; direct pathway to top PhD programs (MIT, CMU, Stanford, Berkeley)</li>
            <li><strong>Application:</strong> Identified after CS admission based on application profile; no separate application</li>
            <li><strong>Scholarships:</strong> Turing Scholars receive priority for CS-specific funding and research stipends</li>
          </ul>

          <h2>Liberal Arts Honors</h2>
          <ul>
            <li><strong>What it is:</strong> College of Liberal Arts honors program (separate from Plan II)</li>
            <li><strong>Size:</strong> ~50-75 students per cohort</li>
            <li><strong>Selectivity:</strong> ~20-30% acceptance rate</li>
            <li><strong>Curriculum:</strong> Honors versions of Liberal Arts core courses; honors-specific seminars; thesis option</li>
            <li><strong>Application:</strong> Separate essay submitted with UT application</li>
          </ul>

          <h2>Engineering Honors (Cockrell)</h2>
          <ul>
            <li><strong>What it is:</strong> Cockrell School of Engineering honors track</li>
            <li><strong>Size:</strong> ~150 students across all engineering disciplines per cohort</li>
            <li><strong>Selectivity:</strong> ~15-25% acceptance rate by discipline</li>
            <li><strong>Curriculum:</strong> Standard engineering major + honors-specific courses + research/thesis option</li>
            <li><strong>Distinctive features:</strong> Research mentorship; priority for engineering scholarships; Cockrell-specific honors network</li>
            <li><strong>Application:</strong> Separate essay submitted with UT/Cockrell application</li>
          </ul>

          <h2>Natural Sciences Honors (multiple tracks)</h2>
          <p>College of Natural Sciences offers multiple honors tracks within different academic areas:</p>
          <ul>
            <li><strong>Polymathic Scholars:</strong> interdisciplinary honors program combining natural sciences with humanities and policy. ~30 students per cohort.</li>
            <li><strong>Health Science Scholars:</strong> pre-med focused honors program with strong pre-med advising. ~30-40 students per cohort.</li>
            <li><strong>Dean&apos;s Scholars:</strong> top-academic students across natural sciences; broad eligibility. ~150 students per cohort.</li>
            <li><strong>Computational Sciences Scholars:</strong> combines biology/chemistry/physics with computer science and data analytics.</li>
            <li><strong>Application:</strong> separate essays for most programs; varying selectivity (5-30% by program)</li>
          </ul>

          <h2>Architecture Honors</h2>
          <ul>
            <li><strong>What it is:</strong> School of Architecture honors program</li>
            <li><strong>Curriculum:</strong> Architecture major + honors-specific design studios + thesis</li>
            <li><strong>Application:</strong> by application after Architecture admission</li>
          </ul>

          <h2>Communication Honors (Moody)</h2>
          <ul>
            <li><strong>What it is:</strong> Moody College of Communication honors program</li>
            <li><strong>Curriculum:</strong> Communication major + honors-specific courses + senior thesis</li>
            <li><strong>Application:</strong> separate application submitted with UT/Moody application</li>
          </ul>

          <h2>Forty Acres Scholars Program (separate flagship)</h2>
          <ul>
            <li><strong>What it is:</strong> UT&apos;s flagship full-ride scholarship (covers tuition, room and board, books, enrichment fund); a scholarship rather than an honors academic program</li>
            <li><strong>Size:</strong> ~15-20 awards per year</li>
            <li><strong>Selectivity:</strong> ~1% acceptance rate from competitive applicant pool</li>
            <li><strong>Available to:</strong> incoming freshmen including out-of-state students</li>
            <li><strong>Application:</strong> Separate Forty Acres application with additional essays; deadline November 1; on-campus finalist interviews in February</li>
            <li><strong>Distinctive features:</strong> Cohort of 80 active scholars at any time; mentor-mentee program; faculty research access; enrichment funds for study abroad, internships, research</li>
          </ul>

          <h2>How to apply to UT honors programs</h2>
          <ol>
            <li><strong>Identify target programs early.</strong> Junior year of high school: research each program of interest. Match program characteristics to your interests and academic profile.</li>
            <li><strong>Apply to UT by November 1 priority deadline.</strong> Most honors applications align with this deadline.</li>
            <li><strong>Complete each honors program&apos;s separate application.</strong> Plan II essay, BHP essays, Liberal Arts Honors essay, etc. submit alongside the main UT application.</li>
            <li><strong>Apply to multiple programs if appropriate.</strong> A pre-med applicant might apply to Health Science Scholars + Natural Sciences Honors + Plan II. A business applicant might apply to BHP + Plan II + Liberal Arts Honors.</li>
            <li><strong>Apply to Forty Acres Scholars by November 1 if your profile supports.</strong> Forty Acres is separate from honors academic programs.</li>
            <li><strong>Complete UT Honors and Scholarship Application (HSA)</strong> after admission to be considered for institutional merit scholarships across honors programs.</li>
          </ol>

          <h2>The honors programs admissions standard</h2>
          <p>Across UT honors programs, the academic standard is consistent: top 5-10% of class, SAT 1450+ or ACT 33+, substantial extracurricular depth in one or two areas. Specific programs have additional considerations (Turing Scholars requires CS background; BHP values business leadership; Plan II values intellectual breadth). For families with high-academic students, applying to UT plus one or more honors programs maximizes both admission probability and the quality of the resulting UT experience.</p>

          <h2>The combined honors + residency picture</h2>
          <div className="callout">
            <h4>Honors + residency pathway</h4>
            <p className="mb-0">An out-of-state student admitted to Plan II Honors and BHP and pursuing the Texas residency pathway sees: (1) BHP-level academic experience with smaller classes and stronger faculty access; (2) Plan II interdisciplinary breadth; (3) UT in-state tuition rate after year 1, saving approximately {fmtUSD(TUITION.threeYearSavings)} in tuition over three years. The combination of honors-level academic experience + reduced tuition rate produces a four-year cost picture competitive with private universities at full sticker.</p>
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
              <li><Link href="/ut-austin-mccombs-tuition">McCombs (BHP)</Link>: business honors specifics</li>
              <li><Link href="/ut-austin-computer-science-tuition">Computer Science (Turing)</Link>: CS honors</li>
              <li><Link href="/ut-austin-scholarships-out-of-state">UT scholarships</Link>: Forty Acres and other awards</li>
              <li><Link href="/ut-austin-essay-prompts">Essay prompts</Link>: how to approach honors application essays</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-honors-programs" />
    </>
  );
}
