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

const TITLE = 'UT Austin Out-of-State Percentage: 10% Cap Explained (2026)';
const DESCRIPTION = 'UT Austin out-of-state student percentage: approximately 10% of undergraduate enrollment by state law cap. Why the cap exists, how it affects acceptance rate, and top OOS feeder states.';
const PATH = '/ut-austin-out-of-state-percentage';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What percentage of UT Austin students are out-of-state?', a: 'Approximately 10% of UT Austin\'s undergraduate population is out-of-state students. Texas state law (via Board of Regents policy) caps non-resident undergraduate enrollment at 10% of the entering freshman class. This is roughly 850-1,000 non-resident admits per year across an entering class of approximately 8,500-9,000 freshmen.' },
  { q: 'Why is UT Austin\'s OOS percentage so low?', a: 'Texas Constitution establishes UT as a state institution primarily serving Texas residents. State law and Board of Regents policy limit non-resident undergraduate enrollment to protect access for Texas residents. The Texas Top 10% Rule guarantees admission to the top 6-8% of Texas high school graduates, further concentrating in-state admits. Non-residents compete for the remaining ~10% of seats through holistic review.' },
  { q: 'What states send the most students to UT Austin?', a: 'Top OOS feeder states (by count): California, New York, Illinois, Florida, Georgia, New Jersey, Massachusetts, Virginia, Colorado, Maryland, Washington, Connecticut, Arizona. Combined, these approximately 15 states send ~60% of UT\'s non-resident students; the remaining ~40% come from the other 35 states plus international.' },
  { q: 'How does the 10% cap affect OOS acceptance rate?', a: 'The 10% cap constrains supply of OOS seats. Applications from OOS students typically exceed available seats by 8-13x. This produces an OOS acceptance rate of approximately 8-13%, compared to 31% overall (which includes Top 10% Rule auto-admits from Texas high schools).' },
  { q: 'Do international students count against the 10% cap?', a: 'International students are typically counted separately from OOS students in UT enrollment reporting, though both compete for the same holistic review pool. International undergraduates typically comprise 3-5% of enrollment additional to the 10% OOS cap.' },
];

export default function OosPercentagePage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Out-of-State Percentage', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · OOS percentage explained"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Out-of-State Percentage</h1>}
        lede="How the 10% non-resident cap works, why it exists, how it affects acceptance rates for OOS applicants, and where OOS students actually come from."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The 10% cap explained">
            UT Austin caps non-resident undergraduate enrollment at approximately <strong>10%</strong> of the entering class by Texas state law and Board of Regents policy. This means approximately <strong>850-1,000</strong> non-resident freshmen admitted per year out of ~8,500-9,000 total. OOS acceptance rate: approximately <strong>8-13%</strong> (materially lower than 31% overall rate). Non-residents compete in a small holistic-review pool while Texas Top 10% Rule auto-admits consume ~75% of in-state seats.
          </QuickAnswer>

          <AuthorBox blurb="Has personally helped dozens of out-of-state families navigate the constrained OOS admissions landscape at UT Austin." />

          <h2 className="mt-0">The 10% cap in numbers</h2>
          <ul>
            <li><strong>Total undergraduate enrollment:</strong> ~42,000 students</li>
            <li><strong>OOS undergraduate students:</strong> ~4,200 (10% of enrollment)</li>
            <li><strong>Entering freshman class size:</strong> ~8,500-9,000 per year</li>
            <li><strong>OOS freshman admits per year:</strong> ~850-1,000</li>
            <li><strong>Texas Top 10% Rule auto-admits:</strong> ~75% of in-state seats (~5,700-6,000 auto-admits per year)</li>
            <li><strong>Holistic review pool:</strong> remaining ~25% of in-state seats + 10% of OOS seats = ~1,900-2,300 seats via holistic review</li>
          </ul>

          <h2>Why the cap exists</h2>
          <p>UT Austin is a state institution. Texas Constitution establishes UT as serving Texas residents primarily. State law and Board of Regents policy limit non-resident enrollment to protect access for Texas residents. The Top 10% Rule further guarantees admission to the top percentage of Texas high school graduates.</p>

          <p>The 10% cap is not arbitrary; it reflects:</p>
          <ul>
            <li>Constitutional intent that UT serves Texas primarily</li>
            <li>Political pressure to maintain access for Texas residents</li>
            <li>Higher tuition revenue from non-residents (but capped to prevent over-reliance on OOS revenue)</li>
            <li>Diversity considerations (some geographic diversity is valued)</li>
          </ul>

          <h2>Top OOS feeder states (approximate order)</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>State</th>
                  <th>Approximate Annual OOS Freshmen</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>California</td><td className="num">~120-150</td></tr>
                <tr><td>2</td><td>New York</td><td className="num">~80-100</td></tr>
                <tr><td>3</td><td>Illinois</td><td className="num">~50-70</td></tr>
                <tr><td>4</td><td>Florida</td><td className="num">~50-70</td></tr>
                <tr><td>5</td><td>Georgia</td><td className="num">~40-60</td></tr>
                <tr><td>6</td><td>New Jersey</td><td className="num">~40-55</td></tr>
                <tr><td>7</td><td>Massachusetts</td><td className="num">~30-45</td></tr>
                <tr><td>8</td><td>Virginia</td><td className="num">~30-45</td></tr>
                <tr><td>9</td><td>Colorado</td><td className="num">~25-40</td></tr>
                <tr><td>10</td><td>Maryland</td><td className="num">~25-40</td></tr>
                <tr><td>11</td><td>Washington</td><td className="num">~25-40</td></tr>
                <tr><td>12</td><td>Connecticut</td><td className="num">~20-35</td></tr>
                <tr><td>13</td><td>Arizona</td><td className="num">~20-35</td></tr>
                <tr><td>14</td><td>Tennessee</td><td className="num">~20-30</td></tr>
                <tr><td>15</td><td>Pennsylvania</td><td className="num">~20-30</td></tr>
              </tbody>
            </table>
          </div>

          <p>These numbers are approximate based on UT enrollment reporting. Detailed guides for each origin state at <Link href="/by-state">/by-state</Link>.</p>

          <h2>How the cap affects OOS acceptance rate</h2>
          <p>The 10% cap combined with ~10,000-12,000 annual OOS applications produces OOS acceptance rate of approximately 8-13%. Non-residents compete in a small, competitive pool where every seat matters. Selective UT programs (McCombs, CS, Cockrell ECE) see even lower OOS rates due to program-specific competition.</p>

          <h2>What the 10% cap means for OOS applicants</h2>
          <ul>
            <li><strong>Academic profile must be strong:</strong> top 5% of class, SAT 1450+ or ACT 33+, substantial extracurricular depth</li>
            <li><strong>Essay quality matters:</strong> in a small competitive pool, essays differentiate applicants</li>
            <li><strong>Major choice matters:</strong> less-selective UT colleges (Liberal Arts, Education) have higher OOS acceptance than McCombs, CS, Cockrell ECE</li>
            <li><strong>Apply by November 1 priority deadline:</strong> maximizes admissions and scholarship consideration</li>
            <li><strong>Complete UT Honors and Scholarship Application:</strong> unlocks institutional merit aid</li>
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
              <li><Link href="/ut-austin-acceptance-rate-out-of-state">OOS acceptance rate</Link>: detailed admissions math</li>
              <li><Link href="/ut-austin-out-of-state-students">OOS students hub</Link>: complete OOS guide</li>
              <li><Link href="/by-state">Origin state guides</Link>: state-by-state tailored content</li>
              <li><Link href="/texas-residency-rules">Texas residency pathway</Link>: how OOS becomes in-state</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-oos-percentage" />
    </>
  );
}
