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

const TITLE = 'UT Austin Engineering Salary: Cockrell Starting Pay by Discipline (2026)';
const DESCRIPTION = 'UT Austin Cockrell School of Engineering graduates: median starting salary by discipline - Petroleum $100K-$120K, ECE $95K-$115K, Chemical/Civil/Mechanical $80K-$95K, Biomedical/Aerospace $75K-$90K. Top employers: ExxonMobil, Apple, Lockheed, Boeing.';
const PATH = '/ut-austin-engineering-salary';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is the average starting salary for UT Cockrell Engineering graduates?', a: 'UT Cockrell graduates report median starting salary of $85,000-$110,000 across all engineering disciplines. Highest-paying: Petroleum Engineering ($100K-$120K, top oil and gas majors). Electrical and Computer Engineering ($95K-$115K, tech and semiconductor companies). Chemical, Civil, Mechanical ($80K-$95K). Biomedical, Aerospace, Industrial ($75K-$90K).' },
  { q: 'Which Cockrell discipline pays the most?', a: 'Petroleum Engineering has consistently paid the highest at Cockrell, with median starting salary of $100,000-$120,000 and top-quartile above $140,000. Top employers: ExxonMobil, Chevron, ConocoPhillips, Pioneer Natural Resources, Devon Energy, Occidental. Compensation includes base plus bonus plus stock; total year-1 comp $110K-$155K typical.' },
  { q: 'How does UT Engineering salary compare to MIT or Stanford Engineering?', a: 'For most engineering roles at Big Tech (Apple, Google, Meta), UT and MIT/Stanford engineering graduates receive comparable offers because Big Tech pays by level not by school. For traditional engineering roles at oil and gas, aerospace, and manufacturing: comparable base pay. Differences show up in: (1) elite research and PhD placement (MIT/Stanford stronger); (2) startup founding rate (Stanford stronger due to Silicon Valley proximity).' },
  { q: 'What Engineering major has the best job outlook?', a: 'Highest demand and outlook: Computer Engineering and Software Engineering (tech industry growth). Petroleum Engineering (cyclical but currently strong due to energy prices). Biomedical Engineering (healthcare growth). Electrical Engineering (semiconductor industry expansion, especially in Texas). Growth areas: sustainable energy, autonomous systems, AI hardware.' },
  { q: 'Do UT Engineering internships pay well?', a: 'Yes. Oil and gas internships: $6,000-$9,000/month at ExxonMobil, Chevron, etc. Tech/semiconductor internships: $6,000-$8,000/month at Apple, Texas Instruments, Nvidia. Aerospace: $5,500-$7,500/month at Lockheed, Boeing, SpaceX. Total 12-week summer: $22,000-$36,000. Housing stipends common at top employers.' },
  { q: 'What is Cockrell Engineering job placement rate?', a: 'Approximately 90-95% of Cockrell graduates are employed, in graduate school, or in another planned activity within 6 months of graduation. Direct-into-industry placement: ~80%. Some graduates pursue MS/PhD directly (~15%). A few take gap years or explore other paths.' },
  { q: 'Is UT Cockrell Engineering worth the out-of-state tuition?', a: 'Yes for most students. Four-year OOS tuition at Cockrell: ~$207,000 at full sticker. Median starting salary: $85K-$110K. Tuition payback: 2-3 years post-graduation. With Texas residency pathway, tuition drops to ~$95K over 4 years; payback ~1 year. Combined with strong engineering career trajectory, Cockrell ROI is favorable.' },
];

export default function EngSalaryPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Engineering Salary', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin Cockrell · Salary + outcomes"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Engineering Salary</h1>}
        lede="UT Cockrell Engineering graduate starting salaries by discipline, top employers by industry, and 5-year progression across all 11 engineering majors."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="Cockrell starting pay">
            UT Cockrell Engineering graduates report median starting salary of <strong>$85,000-$110,000</strong>. By discipline: Petroleum <strong>$100K-$120K</strong>; ECE/Computer <strong>$95K-$115K</strong>; Chemical, Civil, Mechanical <strong>$80K-$95K</strong>; Biomedical, Aerospace, Industrial <strong>$75K-$90K</strong>. Top employers: ExxonMobil, Chevron, Apple, Texas Instruments, Lockheed Martin, Boeing, Tesla.
          </QuickAnswer>

          <AuthorBox blurb="Tracks UT Austin Cockrell Engineering graduate outcomes across all 11 disciplines." />

          <h2 className="mt-0">Starting salary by engineering discipline</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Discipline</th>
                  <th>Median Starting</th>
                  <th>Top 25%</th>
                  <th>Top Employers</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Petroleum Engineering</td><td className="num">$100K-$120K</td><td className="num">$130K+</td><td>ExxonMobil, Chevron, ConocoPhillips, Pioneer</td></tr>
                <tr><td>Electrical and Computer Engineering</td><td className="num">$95K-$115K</td><td className="num">$130K+</td><td>Apple, Texas Instruments, Nvidia, AMD, Qualcomm</td></tr>
                <tr><td>Software Engineering</td><td className="num">$100K-$125K</td><td className="num">$140K+</td><td>Apple, Google, Meta, Microsoft</td></tr>
                <tr><td>Chemical Engineering</td><td className="num">$80K-$95K</td><td className="num">$105K+</td><td>ExxonMobil, Dow, DuPont, Chevron</td></tr>
                <tr><td>Civil Engineering</td><td className="num">$75K-$90K</td><td className="num">$100K+</td><td>AECOM, Jacobs, Bechtel, state DOTs</td></tr>
                <tr><td>Mechanical Engineering</td><td className="num">$80K-$95K</td><td className="num">$110K+</td><td>Boeing, Lockheed, GE, ExxonMobil, Tesla</td></tr>
                <tr><td>Aerospace Engineering</td><td className="num">$80K-$95K</td><td className="num">$110K+</td><td>Boeing, Lockheed, SpaceX, NASA</td></tr>
                <tr><td>Biomedical Engineering</td><td className="num">$75K-$90K</td><td className="num">$100K+</td><td>Medtronic, Abbott, Stryker, Boston Scientific</td></tr>
                <tr><td>Industrial and Systems Engineering</td><td className="num">$75K-$90K</td><td className="num">$100K+</td><td>Deloitte, Accenture, Amazon, manufacturing</td></tr>
                <tr><td>Architectural Engineering</td><td className="num">$70K-$85K</td><td className="num">$95K+</td><td>Bechtel, Kiewit, engineering consulting</td></tr>
                <tr><td>Computational Engineering</td><td className="num">$85K-$105K</td><td className="num">$120K+</td><td>Tech, defense, scientific computing</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Top employers by industry</h2>

          <h3>Oil and gas</h3>
          <ul>
            <li>ExxonMobil, Chevron, ConocoPhillips, Shell, BP, Occidental, Pioneer Natural Resources, Devon Energy</li>
            <li>Heavy Petroleum and Chemical Engineering recruiting</li>
            <li>Pay: highest base pay in engineering; often includes overtime for field roles</li>
          </ul>

          <h3>Semiconductors and hardware</h3>
          <ul>
            <li>Apple (Austin campus), Texas Instruments, Nvidia, AMD, Qualcomm, Samsung, Intel</li>
            <li>ECE and Computer Engineering heavy pipeline</li>
            <li>Pay: strong base plus stock at public tech companies</li>
          </ul>

          <h3>Defense and aerospace</h3>
          <ul>
            <li>Lockheed Martin, Boeing, Raytheon, Northrop Grumman, SpaceX, NASA</li>
            <li>Aerospace and Mechanical Engineering focus</li>
            <li>Pay: solid base; work often requires security clearance</li>
          </ul>

          <h3>Big Tech (software engineering roles)</h3>
          <ul>
            <li>Apple, Google, Meta, Amazon, Microsoft, Tesla</li>
            <li>Software Engineering and Computer Engineering pipeline</li>
            <li>Pay: highest total comp with base + signing + equity</li>
          </ul>

          <h3>Construction and infrastructure</h3>
          <ul>
            <li>Bechtel, Fluor, Kiewit, AECOM, Jacobs</li>
            <li>Civil, Chemical, Mechanical Engineering</li>
            <li>Pay: solid base; travel typical for project-based roles</li>
          </ul>

          <h2>Long-term earnings trajectory</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Years Post-Graduation</th>
                  <th>Petroleum Track</th>
                  <th>Tech/ECE Track</th>
                  <th>Traditional Eng Track</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Year 1</td><td className="num">$110K-$155K</td><td className="num">$120K-$180K</td><td className="num">$80K-$105K</td></tr>
                <tr><td>Year 5</td><td className="num">$150K-$225K</td><td className="num">$200K-$325K</td><td className="num">$110K-$150K</td></tr>
                <tr><td>Year 10</td><td className="num">$200K-$325K</td><td className="num">$300K-$550K</td><td className="num">$130K-$185K</td></tr>
                <tr><td>Year 15 (senior/lead)</td><td className="num">$275K-$500K</td><td className="num">$400K-$800K+</td><td className="num">$160K-$240K</td></tr>
                <tr><td>Year 20+ (executive)</td><td className="num">$400K-$1M+</td><td className="num">$500K-$1.5M+</td><td className="num">$200K-$400K</td></tr>
              </tbody>
            </table>
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
              <li><Link href="/ut-austin-engineering-admission">Cockrell admission</Link>: by-discipline acceptance rates</li>
              <li><Link href="/ut-austin-engineering-tuition">Cockrell tuition</Link>: cost breakdown</li>
              <li><Link href="/ut-austin-internships">UT internships</Link>: engineering internship pipeline</li>
              <li><Link href="/ut-austin-graduate-outcomes">Graduate outcomes</Link>: outcomes across UT majors</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-eng-salary" />
    </>
  );
}
