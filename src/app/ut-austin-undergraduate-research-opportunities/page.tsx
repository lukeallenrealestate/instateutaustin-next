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

const TITLE = 'UT Austin Undergraduate Research Opportunities: Complete Guide';
const DESCRIPTION = 'UT Austin undergraduate research opportunities: Freshman Research Initiative, faculty-mentored research, Turing Scholars, Polymathic Scholars, Health Science Scholars, plus how to get involved and what research does for career and grad school outcomes.';
const PATH = '/ut-austin-undergraduate-research-opportunities';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What research opportunities does UT Austin offer undergraduates?', a: 'UT offers extensive undergraduate research: (1) Freshman Research Initiative (FRI) for freshmen; (2) Faculty-mentored individual research; (3) Honors program research tracks (Turing Scholars in CS, Polymathic Scholars, Health Science Scholars); (4) UT-industry research partnerships; (5) Summer research programs (many funded); (6) Senior thesis programs across colleges. Approximately 30-40% of UT undergraduates participate in research at some point.' },
  { q: 'What is Freshman Research Initiative (FRI) at UT Austin?', a: 'FRI is UT\'s signature research program for freshmen. Approximately 900 freshmen participate annually across ~50 research streams in natural sciences and engineering. Students spend 6-10 hours/week in faculty-directed research labs, contributing to real published research. FRI runs 3 semesters (freshman year through fall sophomore year). Publications and presentations common for FRI participants.' },
  { q: 'Does UT undergraduate research help with grad school and PhD applications?', a: 'Yes, substantially. Research experience is essentially required for competitive PhD applications. UT undergrads with research experience have significantly better grad school outcomes. For Ph.D. programs at MIT, Stanford, CMU, Berkeley (CS) and top medical schools, published research or substantive research experience is expected. Turing Scholars (CS), Polymathic Scholars, and Health Science Scholars are particularly strong PhD pipelines.' },
  { q: 'Does research help with career outcomes?', a: 'Yes. For tech companies, research experience demonstrates depth and problem-solving. For consulting, research shows analytical rigor. For pre-med, research is often required for competitive medical school admission. For quant trading, published research signals technical ability. UT students with research experience typically report stronger job placement and higher first-year compensation.' },
  { q: 'How do UT undergraduates get involved in research?', a: 'Pathways: (1) FRI - apply as incoming freshman; (2) Contact faculty directly whose research interests align with yours; (3) Attend department research showcases; (4) Take undergraduate research course numbers (many departments have these); (5) Apply for competitive research programs and awards. Research typically starts freshman or sophomore year.' },
  { q: 'What research areas are strongest at UT Austin?', a: 'UT research strengths: (1) Computer Science (AI, ML, Programming Languages, Theory, Security); (2) Engineering (Petroleum, Aerospace, Biomedical, Chemical); (3) Natural Sciences (Chemistry, Neuroscience, Biology, Physics, Mathematics); (4) Public Policy (LBJ School); (5) Business (McCombs Analytics); (6) Music and Performing Arts. UT operates ~140+ research centers and institutes.' },
  { q: 'Do UT research opportunities pay students?', a: 'Sometimes. Research jobs during the academic year can be paid ($12-$18/hour typical); summer research is often paid ($3,000-$6,000 stipend + housing for some programs). Federal work-study can fund some research positions. NSF REU (Research Experiences for Undergraduates) programs pay $500-$700/week plus housing. Many undergrads do research for credit (in undergraduate research course numbers) without pay but receive academic credit.' },
];

export default function ResearchOpportunitiesPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Undergraduate Research', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin undergraduate research"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Undergraduate Research Opportunities</h1>}
        lede="Complete guide to research at UT Austin as an undergraduate: Freshman Research Initiative, faculty-mentored research, honors research tracks, and how research shapes career and grad school outcomes."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="Research at UT at a glance">
            UT Austin offers extensive undergraduate research: <strong>Freshman Research Initiative</strong> (~900 freshmen annually), faculty-mentored research across all colleges, honors research tracks (<strong>Turing Scholars, Polymathic Scholars, Health Science Scholars</strong>), summer research programs, and senior thesis programs. Approximately 30-40% of UT undergraduates participate in research. Research experience is essentially required for PhD applications and strongly benefits medical school and top-tier career outcomes.
          </QuickAnswer>

          <AuthorBox blurb="Helps UT families think about research opportunities as part of the four-year college experience." />

          <h2 className="mt-0">Freshman Research Initiative (FRI)</h2>
          <p>FRI is UT&apos;s signature undergraduate research program for incoming freshmen. Established 2005, FRI has grown to serve ~900 freshmen annually across ~50 research streams.</p>
          <ul>
            <li><strong>Timing:</strong> starts fall of freshman year; continues 3 semesters</li>
            <li><strong>Time commitment:</strong> 6-10 hours/week in faculty-directed lab</li>
            <li><strong>Research areas:</strong> primarily natural sciences and engineering; some CS</li>
            <li><strong>Outcomes:</strong> many FRI participants co-author published papers and present at conferences</li>
            <li><strong>Application:</strong> apply through UT Office of Admissions after acceptance</li>
            <li><strong>Cost:</strong> free; some research supplies covered</li>
            <li><strong>Selective:</strong> not automatic; competitive application</li>
          </ul>

          <h2>Honors program research tracks</h2>

          <h3>Turing Scholars (Computer Science)</h3>
          <ul>
            <li>Research-track honors program in UT CS</li>
            <li>~20-25 students per cohort</li>
            <li>Faculty mentorship + accelerated coursework + Master&apos;s thesis option</li>
            <li>Direct pipeline to top PhD programs (MIT, Stanford, CMU, Berkeley)</li>
          </ul>

          <h3>Polymathic Scholars (Natural Sciences interdisciplinary)</h3>
          <ul>
            <li>Interdisciplinary honors combining natural sciences with humanities/policy</li>
            <li>~30 students per cohort</li>
            <li>Independent research project required</li>
            <li>Strong preparation for graduate school across many disciplines</li>
          </ul>

          <h3>Health Science Scholars</h3>
          <ul>
            <li>Pre-med focused honors program</li>
            <li>~30-40 students per cohort</li>
            <li>Research + clinical experience emphasis</li>
            <li>Strong pipeline to top medical schools</li>
          </ul>

          <h3>Dean&apos;s Scholars (Natural Sciences)</h3>
          <ul>
            <li>Broader honors program in Natural Sciences</li>
            <li>~150 students per cohort</li>
            <li>Research opportunities and honors-specific courses</li>
          </ul>

          <h3>Engineering Honors (Cockrell)</h3>
          <ul>
            <li>Cockrell engineering honors track</li>
            <li>~150 students across engineering disciplines</li>
            <li>Research mentorship; senior thesis option</li>
          </ul>

          <h2>Faculty-mentored individual research</h2>
          <p>Beyond structured programs, students can work directly with faculty on individual research projects:</p>
          <ul>
            <li>Identify faculty whose research interests align with yours</li>
            <li>Read published papers and lab websites</li>
            <li>Email faculty with specific interest and background</li>
            <li>Attend department seminars and events</li>
            <li>Common: sophomore or junior year individual research</li>
            <li>Register for undergraduate research course numbers for credit</li>
          </ul>

          <h2>Summer research programs</h2>
          <ul>
            <li><strong>NSF Research Experiences for Undergraduates (REU):</strong> paid summer research at UT or other institutions; $500-$700/week + housing</li>
            <li><strong>UT Summer Undergraduate Research Program:</strong> UT-specific summer research funding</li>
            <li><strong>Dell Medical School summer research:</strong> for pre-med students</li>
            <li><strong>NIH-funded summer research:</strong> for biomedical research</li>
            <li><strong>Industry-sponsored research:</strong> some faculty offer paid summer research aligned with industry</li>
            <li><strong>External REU programs:</strong> apply to REUs at other universities (MIT, Stanford, CMU, etc.) as competitive summer opportunity</li>
          </ul>

          <h2>Senior thesis programs</h2>
          <ul>
            <li>Most UT colleges offer senior thesis or capstone research options</li>
            <li>1-2 semester independent research project with faculty supervisor</li>
            <li>Written thesis or research presentation</li>
            <li>Strong preparation for graduate school</li>
            <li>Often paired with honors program designation</li>
          </ul>

          <h2>Impact of research on outcomes</h2>

          <h3>Graduate school and PhD</h3>
          <ul>
            <li>Research experience is essentially required for competitive PhD applications</li>
            <li>Published papers or substantive research greatly strengthen applications</li>
            <li>UT undergrads with research have strong placement to MIT, Stanford, CMU, Berkeley PhD programs</li>
            <li>Turing Scholars is the strongest CS PhD pipeline; Polymathic Scholars strong across humanities and sciences</li>
          </ul>

          <h3>Medical school</h3>
          <ul>
            <li>Research is heavily valued in medical school applications</li>
            <li>Clinical + research combination is optimal</li>
            <li>Published papers demonstrate scholarly commitment</li>
            <li>Top medical schools essentially require research experience</li>
          </ul>

          <h3>Career outcomes (industry)</h3>
          <ul>
            <li>Tech: research demonstrates depth and problem-solving</li>
            <li>Consulting: research shows analytical rigor</li>
            <li>Quant trading: published research signals technical ability</li>
            <li>Finance: research experience valued for macroeconomic and quantitative roles</li>
          </ul>

          <h2>Getting started: freshman year research checklist</h2>
          <ol>
            <li>Apply for Freshman Research Initiative during summer before freshman year</li>
            <li>If FRI, join a research stream aligned with your interests</li>
            <li>If not FRI, identify faculty whose research interests you</li>
            <li>Email faculty directly with your background and specific interest in their work</li>
            <li>Attend departmental seminars in your major</li>
            <li>Ask academic advisor about honors program applications for sophomore year</li>
            <li>Explore summer research programs (REU applications open October-February)</li>
            <li>Consider registering for undergraduate research course numbers freshman spring</li>
          </ol>

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
              <li><Link href="/ut-austin-honors-programs">UT honors programs</Link>: Turing Scholars, Polymathic Scholars details</li>
              <li><Link href="/ut-austin-pre-med">UT pre-med pathway</Link>: research + clinical experience for med school</li>
              <li><Link href="/ut-austin-computer-science-admission">UT CS admission</Link>: Turing Scholars details</li>
              <li><Link href="/ut-austin-freshman-year-guide">Freshman year guide</Link>: how to start research first year</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-research-opportunities" />
    </>
  );
}
