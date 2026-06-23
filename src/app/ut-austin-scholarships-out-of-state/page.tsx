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

const TITLE = 'UT Austin Scholarships for Out-of-State Students (Complete 2026 Guide)';
const DESCRIPTION = `Every UT Austin scholarship out-of-state students should know about: Forty Acres Scholars, Terry, college-specific merit awards, athletic, plus the residency pathway that beats almost any scholarship at ${fmtUSD(TUITION.annualSavings)}/year saved.`;
const PATH = '/ut-austin-scholarships-out-of-state';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What scholarships are available at UT Austin for out-of-state students?', a: 'Out-of-state students at UT Austin are eligible for: (1) Forty Acres Scholars Program (the flagship full-ride, highly selective); (2) Texas Exes Scholarships (some open to non-residents); (3) college-specific merit scholarships at McCombs, Cockrell, Moody, and Liberal Arts; (4) National Merit Scholarship (UT participates as a sponsor school); (5) departmental and major-specific awards; (6) athletic scholarships through UT Athletics; (7) ROTC scholarships; (8) outside scholarships from national, state-of-origin, and corporate sources. Most need-based institutional aid at UT is restricted to Texas residents, so out-of-state students rely primarily on merit awards and outside scholarships.' },
  { q: 'What is the Forty Acres Scholars Program?', a: 'The Forty Acres Scholars Program is UT Austin\'s flagship merit scholarship, awarding approximately 15-20 four-year full-ride scholarships per year worth roughly $200,000 each (covering full cost of attendance plus enrichment funds for travel, internships, and research). Open to incoming freshmen including out-of-state students. Selection is extremely competitive (acceptance rate well under 1%) and based on academic distinction, leadership, and a distinctive personal story. Application opens November 1 with December 1 deadline.' },
  { q: 'What is the average scholarship amount for out-of-state students at UT Austin?', a: 'Out-of-state students at UT who receive institutional merit scholarships typically see awards in the $2,000-$15,000/year range. Forty Acres and other named full-ride awards are rare (single digits per year). The most common scholarship range for high-academic non-residents is $5,000-$10,000/year from college-specific merit pools (McCombs Endowed Presidential Scholarship, Cockrell Engineering Scholarships, etc.). For context, the out-of-state tuition premium is approximately $33,000/year, so the typical merit award covers about 15-30% of the premium.' },
  { q: 'How does the Texas residency pathway compare to scholarships in dollar value?', a: `Texas residency reclassification saves approximately ${fmtUSD(TUITION.annualSavings)}/year for the remaining time at UT (typically 3 years, saving approximately ${fmtUSD(TUITION.threeYearSavings)} total). This is materially larger than typical merit scholarship packages awarded to non-residents. The residency pathway also stacks with scholarships: a student who establishes residency AND receives a merit scholarship benefits from both. Many high-academic out-of-state families pursue both simultaneously.` },
  { q: 'Can out-of-state students get need-based aid at UT Austin?', a: 'Federal need-based aid (Pell Grant, federal subsidized loans) is available to out-of-state students who file FAFSA and meet income thresholds. Institutional need-based aid at UT (Texas Advance Commitment, Texas Empowerment) is restricted to Texas residents. The Texas residency pathway therefore unlocks institutional need-based aid in addition to lowering the tuition rate for middle-income families.' },
  { q: 'What is the Terry Scholarship?', a: 'The Terry Foundation Scholarship provides full tuition, fees, room and board, books, and a stipend to selected Texas high school students attending UT Austin or other Texas public universities. Terry Scholars also receive faculty mentorship and a tight-knit cohort experience. Terry is restricted to graduates of Texas high schools, so it is not directly available to out-of-state high school graduates. However, students who relocate to Texas before their senior year of high school can become eligible.' },
  { q: 'What scholarships does McCombs Business School offer for out-of-state students?', a: 'McCombs awards approximately $4 million/year in scholarships including the Endowed Presidential Scholarship ($5,000-$15,000/year), McCombs Business Honors Program scholarships (for BHP admits), the BBA Diversity Scholarship, and several named awards. Most McCombs scholarships are open to non-residents but heavily competitive. Application is automatic for admitted students who file financial aid forms by the priority deadline.' },
  { q: 'What scholarships does Cockrell School of Engineering offer?', a: 'Cockrell awards approximately $3 million/year in scholarships including the Engineering Scholarship Continuation Program, departmental scholarships (Petroleum Engineering Scholarship, Aerospace Engineering Scholarship, etc.), the Wentworth Scholarship, and national merit-driven engineering awards. Most are open to non-residents. Some are stacked with the National Merit Scholarship for designated National Merit Finalists who name UT as their first choice.' },
  { q: 'How do I apply for UT Austin scholarships as an out-of-state student?', a: 'Most UT Austin institutional scholarships use the ApplyTexas application plus the UT Honors and Scholarship Application (HSA), available in MyStatus after admission. Apply early; many awards have December 1 deadlines and rolling consideration. For college-specific awards, check the dean\'s office website at each college (McCombs Office of Scholarships, Cockrell Office of Student Services, etc.). For outside scholarships, use Fastweb, Scholarships.com, and your state-of-origin college access foundations.' },
];

export default function ScholarshipsPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Scholarships for Out-of-State', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Scholarships for non-residents"
        title={<h1 className="text-ink max-w-[24ch]">UT Austin Scholarships for Out-of-State Students</h1>}
        lede={`Every scholarship category open to non-resident UT Austin admits, in order of typical dollar size. Plus the Texas residency pathway, which is worth more than almost any scholarship at approximately ${fmtUSD(TUITION.annualSavings)}/year saved.`}
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The honest answer">
            Out-of-state students at UT Austin can earn institutional merit scholarships (typically <strong>$2,000-$15,000/year</strong>), the rare flagship Forty Acres Scholarship (full ride), college-specific awards from McCombs, Cockrell, Moody, and others, plus outside scholarships. The largest single tuition lever for most non-resident families is not a scholarship; it is the <Link href="/texas-residency-rules">Texas residency pathway</Link>, which saves approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> (about {fmtUSD(TUITION.threeYearSavings)} over three years). Merit scholarships and the residency pathway stack: a student can receive both.
          </QuickAnswer>

          <AuthorBox blurb="Has helped dozens of out-of-state families weigh scholarship offers against the residency pathway and combine both for the lowest possible four-year net cost." />

          <h2 className="mt-0">The scholarship landscape at UT Austin for non-residents</h2>
          <p>UT Austin awards approximately $200 million/year in scholarships and grants across roughly 50,000 students. Of that, most institutional need-based aid (Texas Advance Commitment, Texas Empowerment) is restricted to Texas residents by program design. Out-of-state students rely primarily on three categories: (1) university-wide merit awards, (2) college-specific merit awards, and (3) outside scholarships from national, state, and corporate sources.</p>

          <h2>1. Forty Acres Scholars Program (flagship full-ride)</h2>
          <p>The Forty Acres Scholars Program is UT Austin&apos;s most prestigious undergraduate scholarship. Each cohort includes 15-20 students who receive full tuition, room and board, books, and an enrichment fund for study abroad, research, internships, and faculty interaction. Total package value approximately $200,000 over four years.</p>
          <ul>
            <li><strong>Open to:</strong> incoming freshmen including out-of-state and international students</li>
            <li><strong>Selectivity:</strong> approximately 15-20 awards per year out of roughly 3,000 applicants (well under 1% acceptance rate)</li>
            <li><strong>Application:</strong> nominate by November 1 of senior year through ApplyTexas + Forty Acres application; finalists interview on campus in February</li>
            <li><strong>Selection criteria:</strong> academic distinction (top 1% nationally), leadership impact, a distinctive personal story, and demonstrated ability to thrive in a small-cohort enrichment environment</li>
            <li><strong>Practical reality:</strong> for the vast majority of qualified applicants, Forty Acres is a long shot. Plan as if you will not win it. If you do, treat it as life-changing</li>
          </ul>

          <h2>2. College-specific merit scholarships</h2>
          <p>Each undergraduate college at UT maintains its own scholarship pool funded by alumni endowments and corporate gifts. These are the most reliable scholarship category for high-academic non-residents.</p>

          <h3>McCombs School of Business</h3>
          <ul>
            <li><strong>McCombs Endowed Presidential Scholarship:</strong> $5,000-$15,000/year, approximately 100 awards per year</li>
            <li><strong>Business Honors Program (BHP) scholarships:</strong> for BHP admits, varies by award</li>
            <li><strong>BBA Diversity Scholarship:</strong> for under-represented students in business</li>
            <li><strong>Named awards:</strong> Crocker, Adkerson, Friedman, and many others by major and background</li>
            <li><strong>Total McCombs scholarship pool:</strong> approximately $4 million/year</li>
          </ul>

          <h3>Cockrell School of Engineering</h3>
          <ul>
            <li><strong>Engineering Scholarship Continuation Program:</strong> recurring awards based on academic performance</li>
            <li><strong>Departmental scholarships:</strong> Petroleum Engineering Scholarship, Aerospace Engineering Scholarship, ECE Excellence Award, Civil Engineering Foundation</li>
            <li><strong>National Merit + Engineering:</strong> stacking award for designated National Merit Finalists naming UT as first choice</li>
            <li><strong>Total Cockrell scholarship pool:</strong> approximately $3 million/year</li>
          </ul>

          <h3>Moody College of Communication</h3>
          <ul>
            <li><strong>Moody Excellence Scholarships:</strong> merit awards for incoming Moody students</li>
            <li><strong>Named departmental scholarships:</strong> in Journalism, Radio-TV-Film, Advertising, Communication Studies</li>
            <li><strong>Communication Council Scholarship:</strong> for involved Moody students</li>
          </ul>

          <h3>College of Liberal Arts</h3>
          <ul>
            <li><strong>Liberal Arts Honors and Plan II Honors scholarships:</strong> for honors program admits</li>
            <li><strong>Departmental awards:</strong> in History, English, Government, Economics, Psychology, etc.</li>
            <li><strong>Modern languages and area studies scholarships:</strong> often tied to specific majors</li>
          </ul>

          <h3>Natural Sciences, Architecture, Fine Arts, Education, Nursing, Pharmacy</h3>
          <p>Every college maintains a scholarship pool. Specific awards range from $1,000-$15,000/year depending on the college. Check each college&apos;s scholarships page after admission and complete the UT Honors and Scholarship Application (HSA) in MyStatus to be considered automatically.</p>

          <h2>3. University-wide and named scholarships open to non-residents</h2>
          <ul>
            <li><strong>National Merit Scholarship:</strong> UT is a sponsor school. National Merit Finalists who name UT as their first-choice school typically receive $1,500-$3,000/year from National Merit Corporation plus a UT National Merit Stipend</li>
            <li><strong>Distinguished Scholar:</strong> early-cycle named award for top-academic admits</li>
            <li><strong>UT Foundation Scholarships:</strong> awarded through the UT Foundation, various amounts</li>
            <li><strong>Texas Exes Out-of-State Scholarship:</strong> awarded by some Texas Exes chapters in out-of-state cities (Houston, Dallas, Atlanta, NYC, LA, Chicago, etc.) for students from those areas attending UT</li>
            <li><strong>Athletic scholarships:</strong> awarded by UT Athletics; most are for recruited athletes</li>
            <li><strong>ROTC scholarships:</strong> Army, Navy, Air Force ROTC scholarships cover full tuition and stipend for service commitment</li>
          </ul>

          <h2>4. Outside scholarships worth pursuing</h2>
          <ul>
            <li><strong>Coca-Cola Scholars:</strong> $20,000 for 150 students nationally; competitive but well-known to high-achieving seniors</li>
            <li><strong>Gates Scholarship:</strong> full ride for under-represented students from low-income families</li>
            <li><strong>Jack Kent Cooke Foundation:</strong> high-academic students with financial need</li>
            <li><strong>Davidson Fellows:</strong> $50,000 awards for projects in STEM, literature, music, or philosophy</li>
            <li><strong>Elks National Foundation:</strong> $4,000-$50,000 awards based on character and leadership</li>
            <li><strong>State-of-origin foundations:</strong> nearly every state has a college access foundation that funds out-of-state attendance for high-achievers from that state. Check &quot;[your state] college scholarship foundation&quot;</li>
            <li><strong>Corporate scholarships:</strong> Burger King Scholars, Walmart, Coca-Cola, Dell Scholars; aggregated on Fastweb and Scholarships.com</li>
          </ul>

          <h2>The math: scholarships vs the Texas residency pathway</h2>

          <div className="callout">
            <h4>The single largest tuition lever</h4>
            <p className="mb-0">For an out-of-state family above the federal Pell Grant income threshold, expected institutional merit scholarship is typically <strong>$0-$10,000/year</strong>. The Texas residency pathway is worth approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> starting in year 2 of enrollment. The residency pathway is materially larger than typical merit scholarships, and the two stack: a student can receive both a $7,500 McCombs Presidential Scholarship AND establish Texas residency for the {fmtUSD(TUITION.annualSavings)}/year savings.</p>
          </div>

          <p>The four-year picture for a typical high-academic out-of-state McCombs admit who receives a $7,500/year Presidential Scholarship and establishes Texas residency:</p>
          <ul>
            <li><strong>Year 1:</strong> {fmtUSD(TUITION.outOfStatePerYear)} out-of-state tuition minus $7,500 scholarship = {fmtUSD(TUITION.outOfStatePerYear - 7500)} net tuition</li>
            <li><strong>Years 2-4:</strong> {fmtUSD(TUITION.inStatePerYear)} in-state tuition minus $7,500 scholarship = {fmtUSD(TUITION.inStatePerYear - 7500)} net tuition/year</li>
            <li><strong>Four-year tuition total with scholarship + residency:</strong> approximately {fmtUSD(TUITION.outOfStatePerYear - 7500 + 3 * (TUITION.inStatePerYear - 7500))}</li>
            <li><strong>Four-year tuition without residency or scholarship:</strong> approximately {fmtUSD(TUITION.outOfStatePerYear * 4)}</li>
            <li><strong>Combined savings:</strong> approximately {fmtUSD(TUITION.outOfStatePerYear * 4 - (TUITION.outOfStatePerYear - 7500 + 3 * (TUITION.inStatePerYear - 7500)))} over four years</li>
          </ul>

          <h2>How to maximize your scholarship search as an out-of-state UT applicant</h2>
          <ol>
            <li><strong>Apply by December 1 priority deadline.</strong> Many UT institutional scholarships only consider applicants who submit by this deadline.</li>
            <li><strong>Complete the UT Honors and Scholarship Application (HSA)</strong> in MyStatus after admission. This single application surfaces you for most university-wide and college-specific merit awards.</li>
            <li><strong>Apply separately to Forty Acres</strong> by its November 1 deadline if your academic profile is in the top 1%.</li>
            <li><strong>Apply to college-specific honors programs</strong> (Plan II, McCombs BHP, Cockrell Honors, Liberal Arts Honors). Admission to these programs typically unlocks additional scholarship eligibility.</li>
            <li><strong>Pursue outside scholarships aggressively.</strong> Allocate 4-6 hours/week from October through February of senior year to outside applications. The realistic yield for a strong applicant: $5,000-$25,000/year in outside scholarship aid.</li>
            <li><strong>Run the residency pathway analysis in parallel.</strong> Even with strong scholarship aid, the residency pathway likely saves more than the average outside scholarship package. The two stack, so pursue both.</li>
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
              <li><Link href="/ut-austin-financial-aid-out-of-state">Financial aid for out-of-state students</Link>: FAFSA, CSS Profile, federal vs institutional aid</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the pathway worth more than most scholarships</li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link>: model your scenario with scholarships + residency</li>
              <li><Link href="/ut-austin-4-year-cost-out-of-state">UT Austin 4-year cost</Link>: full breakdown including scholarship offsets</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-scholarships-oos" />
    </>
  );
}
