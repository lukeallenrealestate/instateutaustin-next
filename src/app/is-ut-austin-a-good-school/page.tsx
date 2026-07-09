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

const TITLE = 'Is UT Austin a Good School? (Honest 2026 Analysis for Parents)';
const DESCRIPTION = 'Is UT Austin a good school? Yes - it ranks top 30 nationally, top 10 US public, top 50 globally. Complete honest analysis: academics, career outcomes, cost, campus experience, and who UT is right (and wrong) for.';
const PATH = '/is-ut-austin-a-good-school';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Is UT Austin a good school?', a: 'Yes. UT Austin ranks top 30 nationally (US News), top 10 among US public universities, top 50 globally. It has elite programs in Business (McCombs top 10), Computer Science (top 10-12), Engineering (Cockrell top 10-15, Petroleum #1-3), and Liberal Arts (Plan II Honors). For its cost, UT is among the strongest value propositions in US higher education, especially for Texas residents and out-of-state students who pursue the residency pathway.' },
  { q: 'Is UT Austin an Ivy League school?', a: 'No. UT Austin is a public flagship university, not an Ivy League school. Ivy League refers to a specific athletic conference of eight private universities (Harvard, Yale, Princeton, Columbia, Cornell, Dartmouth, Brown, Penn). UT is often called a "Public Ivy" (a top-tier public university with academic reputation comparable to Ivy League), alongside Berkeley, Michigan, UCLA, UNC, Virginia, and William & Mary.' },
  { q: 'Is UT Austin hard to get into?', a: 'Depends on residency. UT overall acceptance rate is ~31%; for non-residents (out-of-state), acceptance rate drops to ~8-13% due to the 10% enrollment cap. For most selective programs (McCombs Business, Computer Science, Cockrell ECE), OOS acceptance rate is ~5-10%. Texas residents in the top 6% of their high school class receive automatic admission under the Top 10% Rule. For non-Top-10% Texas residents, holistic review acceptance rate is ~40-55%.' },
  { q: 'Is UT Austin good for pre-med?', a: 'Yes. UT pre-med applicants achieve medical school admission rates of ~50-55% per cycle, above the national ~41% average. UT has the Health Professions Office for pre-med advising, Dell Medical School on campus, and strong Texas Medical Center connections (Houston, San Antonio, Galveston, Dallas). Common pre-med majors: Biology, Biochemistry, Neuroscience, Public Health, Plan II Honors.' },
  { q: 'Is UT Austin good for business?', a: 'Yes, exceptionally. McCombs School of Business ranks top 10 nationally for undergraduate business, with Accounting ranked #1-3 nationally and MIS #3-5. McCombs graduates place strongly at investment banks, top consulting firms, Big 4 accounting, and Texas corporate. Business Honors Program (BHP) is elite for high-academic business students.' },
  { q: 'Is UT Austin good for engineering?', a: 'Yes. Cockrell School of Engineering ranks top 10-15 nationally overall, with Petroleum Engineering ranked #1-3, and Chemical, Civil, Aerospace, Biomedical all in top 15. UT engineering graduates place strongly at ExxonMobil, Chevron, Apple, Texas Instruments, Lockheed Martin, Boeing, and top tech companies.' },
  { q: 'Is UT Austin worth it?', a: 'For most students, yes. UT offers top-tier academics at moderate cost (especially for Texas residents at $11,688/year and OOS families who pursue the Texas residency pathway to $11,688/year). Career outcomes are strong, alumni network is large, and Austin location provides substantive career advantages. UT is not right for students who want small liberal arts environment or elite Ivy prestige at any cost.' },
  { q: 'What are UT Austin\'s weaknesses?', a: 'UT Austin has some legitimate weaknesses: (1) large class sizes for lower-division courses (200+ students common in intro courses); (2) advising can be inconsistent given the size of the university; (3) some programs are massively oversubscribed with intense competition; (4) OOS acceptance rate is very selective due to the 10% cap; (5) not the right fit for students seeking small liberal arts environment; (6) some students find the size overwhelming.' },
];

export default function IsGoodSchoolPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Is UT Austin a Good School', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="Is UT Austin a good school?"
        title={<h1 className="text-ink max-w-[22ch]">Is UT Austin a Good School?</h1>}
        lede="An honest assessment for parents: UT Austin ranks top 30 nationally, top 10 US public, top 50 globally. Elite programs across business, CS, engineering, and liberal arts. Below: who UT is right and wrong for."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The honest answer">
            <strong>Yes, UT Austin is a very good school.</strong> Top 30 nationally (US News), top 10 US public university, top 50 globally. Multiple elite programs (McCombs Business top 10, CS top 10-12, Cockrell Engineering top 10-15, Petroleum #1-3, Plan II Honors distinctive). Strong career outcomes and one of the largest alumni networks in higher education. For its cost, UT is among the strongest value propositions in US higher education.
          </QuickAnswer>

          <AuthorBox blurb="Helps families honestly evaluate whether UT Austin is the right school for their specific student and family situation." />

          <h2 className="mt-0">The academic case for UT Austin</h2>

          <h3>National rankings</h3>
          <ul>
            <li>US News National Universities: top 30 (recently #32)</li>
            <li>US News Public Universities: top 10 (recently #10)</li>
            <li>Times Higher Education World University Rankings: top 50</li>
            <li>QS World University Rankings: top 75</li>
            <li>Association of American Universities (AAU) member (62 elite research universities)</li>
            <li>R1 Doctoral University (highest research classification)</li>
          </ul>

          <h3>Elite programs</h3>
          <ul>
            <li><strong>McCombs Business:</strong> top 10 undergrad; Accounting #1-3; MIS #3-5</li>
            <li><strong>Computer Science:</strong> top 10-12; Programming Languages #2</li>
            <li><strong>Cockrell Engineering:</strong> top 10-15; Petroleum #1-3</li>
            <li><strong>Plan II Honors:</strong> distinctive interdisciplinary honors program (established 1935)</li>
            <li><strong>UT School of Law:</strong> top 15</li>
            <li><strong>LBJ School of Public Affairs:</strong> top 15</li>
          </ul>

          <h2>Career outcomes: the real evidence</h2>
          <ul>
            <li><strong>Employment within 6 months of graduation:</strong> ~90% employed or in grad school</li>
            <li><strong>Median starting salary (Computer Science):</strong> $115K-$140K</li>
            <li><strong>Median starting salary (McCombs Business):</strong> $75K-$95K</li>
            <li><strong>Median starting salary (Engineering):</strong> $85K-$110K</li>
            <li><strong>Medical school admission rate:</strong> ~50-55% (above national ~41%)</li>
            <li><strong>Top employers:</strong> Google, Meta, Apple, Amazon, Goldman Sachs, McKinsey, Bain, ExxonMobil, Deloitte, EY, PwC, KPMG</li>
          </ul>

          <h2>The cost case for UT Austin</h2>
          <ul>
            <li><strong>Texas resident tuition:</strong> $11,688/year (among the cheapest top-30 university options)</li>
            <li><strong>Out-of-state tuition:</strong> $44,908/year (competitive with peer publics)</li>
            <li><strong>With Texas residency pathway:</strong> $11,688/year from year 2 onward (dramatic savings for OOS)</li>
            <li><strong>Institutional aid available:</strong> merit scholarships, need-based (Texas Advance Commitment for TX residents under $100K AGI is free tuition)</li>
            <li><strong>Value ranking:</strong> UT consistently ranked among the strongest ROI universities in the US</li>
          </ul>

          <h2>Who UT Austin is right for</h2>
          <ul>
            <li><strong>Students who want top-tier academics at moderate cost:</strong> UT delivers this consistently</li>
            <li><strong>Business, CS, engineering students:</strong> elite programs with strong career outcomes</li>
            <li><strong>Students who thrive at large universities:</strong> UT is large (~42,000 undergrads) with abundant clubs, activities, and communities</li>
            <li><strong>Students interested in Austin location:</strong> tech, music, government, food, outdoor</li>
            <li><strong>Texas residents:</strong> in-state tuition of $11,688/year is exceptional value</li>
            <li><strong>OOS families with capital to pursue residency pathway:</strong> savings of $99K+ over 3 years</li>
            <li><strong>Pre-med, pre-law students:</strong> strong professional school placement</li>
          </ul>

          <h2>Who UT Austin is NOT right for</h2>
          <ul>
            <li><strong>Students who want small liberal arts environment:</strong> UT is a large public research university; small-college feel is limited</li>
            <li><strong>Students seeking Ivy League prestige at any cost:</strong> UT is not Ivy League; Ivy League matters for certain elite career tracks</li>
            <li><strong>OOS families without capital for residency pathway:</strong> full-sticker OOS cost may not pencil vs in-state alternatives</li>
            <li><strong>Students who need extensive individual advising:</strong> UT advising can be inconsistent at this scale</li>
            <li><strong>Students who want intimate faculty relationships:</strong> harder to develop at UT than at small colleges</li>
            <li><strong>Students uncomfortable in urban settings:</strong> Austin is urban; UT is embedded in the city</li>
          </ul>

          <h2>The comparison to peer top public universities</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>University</th>
                  <th>US News National Rank</th>
                  <th>In-State Tuition</th>
                  <th>OOS Tuition</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>UC Berkeley</td><td className="num">#15</td><td className="num">$14,934</td><td className="num">$48,500</td></tr>
                <tr><td>UCLA</td><td className="num">#15</td><td className="num">$14,934</td><td className="num">$47,500</td></tr>
                <tr><td>Michigan</td><td className="num">#20</td><td className="num">$17,700</td><td className="num">$57,400</td></tr>
                <tr><td>Virginia</td><td className="num">#24</td><td className="num">$22,300</td><td className="num">$60,800</td></tr>
                <tr><td>UNC Chapel Hill</td><td className="num">#22</td><td className="num">$9,000</td><td className="num">$39,300</td></tr>
                <tr><td>Florida</td><td className="num">#28</td><td className="num">$6,400</td><td className="num">$28,700</td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>UT Austin</strong></td><td className="num"><strong>#32</strong></td><td className="num"><strong>$11,688</strong></td><td className="num"><strong>$44,908</strong></td></tr>
                <tr><td>Georgia Tech</td><td className="num">#33</td><td className="num">$12,700</td><td className="num">$33,800</td></tr>
                <tr><td>Wisconsin</td><td className="num">#39</td><td className="num">$11,200</td><td className="num">$41,600</td></tr>
                <tr><td>Texas A&amp;M</td><td className="num">#51</td><td className="num">$13,600</td><td className="num">$40,200</td></tr>
              </tbody>
            </table>
          </div>

          <p>UT sits solidly in the top-30 public university tier with moderate cost, especially strong value for Texas residents and OOS students pursuing the residency pathway.</p>

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
              <li><Link href="/what-is-ut-austin-known-for">What UT is known for</Link>: detailed reputation guide</li>
              <li><Link href="/ut-austin-rankings">UT Austin rankings</Link>: rankings across systems</li>
              <li><Link href="/is-ut-austin-worth-it-out-of-state">Is UT worth it OOS</Link>: value analysis for OOS families</li>
              <li><Link href="/ut-austin-graduate-outcomes">Graduate outcomes</Link>: career placement</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-good-school" />
    </>
  );
}
