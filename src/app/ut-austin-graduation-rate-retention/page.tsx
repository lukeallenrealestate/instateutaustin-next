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

const TITLE = 'UT Austin Graduation Rate + Retention Rate (2026 Data)';
const DESCRIPTION = 'UT Austin graduation rate: 4-year rate ~72%, 6-year rate ~89%, freshman retention rate ~95%. Among the strongest of any US public university. Higher for McCombs and CS majors. Complete data + context.';
const PATH = '/ut-austin-graduation-rate-retention';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is UT Austin\'s graduation rate?', a: 'UT Austin 4-year graduation rate is approximately 72%, and 6-year graduation rate is approximately 89%. These are among the strongest rates of any US public university. For context, national averages are ~46% (4-year) and ~63% (6-year). UT\'s rates reflect selective admissions, strong academic support, and high student engagement.' },
  { q: 'What is UT Austin\'s freshman retention rate?', a: 'UT Austin freshman-to-sophomore retention rate is approximately 95%. This is exceptionally high; national average is ~80% for 4-year institutions. The 5% who do not return typically transfer to other institutions, take gap years, or leave for personal reasons. Very few academic dismissals.' },
  { q: 'What is the 4-year graduation rate by UT college?', a: 'By UT college: McCombs Business ~85% (highest, direct-admit BBA students); Computer Science ~80%; Cockrell Engineering ~75%; Natural Sciences ~70%; Liberal Arts ~70%; Communications ~72%; Education ~65%; Fine Arts ~65% (longer degree tracks). Numbers vary year-to-year and by specific program.' },
  { q: 'Why is UT Austin\'s graduation rate so high?', a: 'Multiple factors: (1) selective admissions produce students with strong academic profiles; (2) extensive academic support (Sanger Learning Center, tutoring, advising); (3) Freshman Research Initiative and other engagement programs; (4) strong pre-professional advising (pre-med, pre-law); (5) rigorous but supported curriculum; (6) strong college and departmental communities.' },
  { q: 'How does UT Austin graduation rate compare to peer public universities?', a: 'UT Austin\'s 6-year rate (~89%) is competitive with: UC Berkeley (~93%), UCLA (~92%), Michigan (~93%), UVA (~95%), UNC Chapel Hill (~91%), Georgia Tech (~91%). Higher than: Texas A&M (~83%), Wisconsin (~89%), Ohio State (~85%), Florida (~90%). UT is at the top of major US public university graduation rates.' },
  { q: 'What percentage of UT Austin students graduate on time?', a: 'Approximately 72% of UT students graduate within 4 years (on-time). Another ~17% take 5-6 years to graduate (often due to double majors, study abroad, internship absences, or specific programs like BArch that require 5 years). Total 6-year graduation: ~89%.' },
];

export default function GraduationRatePage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Graduation Rate + Retention', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Outcomes data"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Graduation Rate + Retention</h1>}
        lede="UT Austin graduation and retention data: 4-year 72%, 6-year 89%, freshman retention 95%. Among the strongest of any US public university."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The retention + graduation numbers">
            UT Austin: <strong>4-year graduation rate ~72%</strong>, <strong>6-year graduation rate ~89%</strong>, <strong>freshman retention rate ~95%</strong>. Among the strongest of any US public university. Well above national averages (~46% 4-year, ~63% 6-year, ~80% retention). Higher for McCombs (~85%) and CS (~80%). Reflects selective admissions, strong academic support, and student engagement.
          </QuickAnswer>

          <AuthorBox blurb="Tracks UT Austin institutional outcomes data including graduation and retention rates by college and cohort." />

          <h2 className="mt-0">UT Austin graduation and retention data</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>UT Austin</th>
                  <th>National Average (Public Universities)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Freshman-to-sophomore retention rate</td><td className="num">~95%</td><td className="num">~80%</td></tr>
                <tr><td>4-year graduation rate</td><td className="num">~72%</td><td className="num">~46%</td></tr>
                <tr><td>6-year graduation rate</td><td className="num">~89%</td><td className="num">~63%</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Graduation rate by UT college</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>UT College</th>
                  <th>4-Year Graduation Rate</th>
                  <th>6-Year Graduation Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>McCombs School of Business</td><td className="num">~85%</td><td className="num">~93%</td></tr>
                <tr><td>Computer Science (CSDS)</td><td className="num">~80%</td><td className="num">~92%</td></tr>
                <tr><td>Cockrell School of Engineering</td><td className="num">~75%</td><td className="num">~90%</td></tr>
                <tr><td>College of Natural Sciences</td><td className="num">~70%</td><td className="num">~88%</td></tr>
                <tr><td>College of Liberal Arts</td><td className="num">~70%</td><td className="num">~87%</td></tr>
                <tr><td>Moody College of Communication</td><td className="num">~72%</td><td className="num">~89%</td></tr>
                <tr><td>College of Education</td><td className="num">~65%</td><td className="num">~85%</td></tr>
                <tr><td>College of Fine Arts</td><td className="num">~65%</td><td className="num">~82%</td></tr>
                <tr><td>School of Architecture</td><td className="num">~60% (5-yr BArch)</td><td className="num">~85%</td></tr>
                <tr><td>School of Nursing</td><td className="num">~85%</td><td className="num">~93%</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Comparison to peer public universities</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>University</th>
                  <th>4-Year Grad Rate</th>
                  <th>6-Year Grad Rate</th>
                  <th>Freshman Retention</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>UVA</td><td className="num">~88%</td><td className="num">~95%</td><td className="num">~97%</td></tr>
                <tr><td>Michigan</td><td className="num">~83%</td><td className="num">~93%</td><td className="num">~97%</td></tr>
                <tr><td>UCLA</td><td className="num">~78%</td><td className="num">~92%</td><td className="num">~97%</td></tr>
                <tr><td>UC Berkeley</td><td className="num">~78%</td><td className="num">~93%</td><td className="num">~96%</td></tr>
                <tr><td>UNC Chapel Hill</td><td className="num">~85%</td><td className="num">~91%</td><td className="num">~96%</td></tr>
                <tr><td>Georgia Tech</td><td className="num">~65%</td><td className="num">~91%</td><td className="num">~97%</td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>UT Austin</strong></td><td className="num"><strong>~72%</strong></td><td className="num"><strong>~89%</strong></td><td className="num"><strong>~95%</strong></td></tr>
                <tr><td>Wisconsin</td><td className="num">~68%</td><td className="num">~89%</td><td className="num">~95%</td></tr>
                <tr><td>Texas A&amp;M</td><td className="num">~59%</td><td className="num">~83%</td><td className="num">~92%</td></tr>
                <tr><td>Ohio State</td><td className="num">~65%</td><td className="num">~85%</td><td className="num">~94%</td></tr>
                <tr><td>Florida</td><td className="num">~72%</td><td className="num">~90%</td><td className="num">~97%</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Why UT retention and graduation rates are so high</h2>
          <ul>
            <li><strong>Selective admissions:</strong> UT admits students with strong academic profiles; ~31% overall acceptance rate</li>
            <li><strong>Extensive academic support:</strong> Sanger Learning Center, discipline-specific tutoring, undergraduate advising</li>
            <li><strong>Engagement programs:</strong> Freshman Research Initiative, Living-Learning Communities, honors programs</li>
            <li><strong>Pre-professional advising:</strong> pre-med (HPO), pre-law, pre-business track</li>
            <li><strong>Strong departmental communities:</strong> tight cohorts within McCombs, CS, Cockrell provide social + academic support</li>
            <li><strong>Career services investment:</strong> career fairs, on-campus recruiting keep students engaged</li>
            <li><strong>Financial aid quality:</strong> Texas Advance Commitment covers tuition for in-state under-$100K AGI families</li>
            <li><strong>Campus culture:</strong> Longhorn identity and traditions foster institutional belonging</li>
          </ul>

          <h2>What the numbers mean for prospective students</h2>
          <ul>
            <li><strong>High retention (95%)</strong> means UT students overwhelmingly stay through freshman year; the transition to sophomore year is generally successful</li>
            <li><strong>72% 4-year graduation</strong> means most students who enroll do complete their degree in 4 years</li>
            <li><strong>89% 6-year graduation</strong> means the vast majority ultimately graduate, though some take extra time (double majors, study abroad, program requirements like BArch)</li>
            <li><strong>Compared to peer universities:</strong> UT is competitive with top public flagships; slightly below the very top (UVA, UNC) but above many well-known publics</li>
            <li><strong>Higher rates in professional colleges</strong> (McCombs 85%, CS 80%, Nursing 85%) reflect direct-admit structure and cohort community</li>
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
              <li><Link href="/is-ut-austin-a-good-school">Is UT a good school</Link>: decision analysis</li>
              <li><Link href="/ut-austin-rankings">UT rankings</Link>: how UT ranks</li>
              <li><Link href="/ut-austin-graduate-outcomes">Graduate outcomes</Link>: career placement</li>
              <li><Link href="/what-is-ut-austin-known-for">What UT is known for</Link>: reputation guide</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-graduation-rate" />
    </>
  );
}
