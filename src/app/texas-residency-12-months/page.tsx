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

const TITLE = 'Texas Residency 12 Months: The Exact Domicile Clock for UT Tuition';
const DESCRIPTION = `The 12-month Texas residency clock under Texas Education Code §54.052: what counts, what doesn't, how to count it correctly, and how to avoid resetting it. The clock parents most often miscount.`;
const PATH = '/texas-residency-12-months';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Why exactly 12 months for Texas residency?', a: 'Texas Education Code §54.052 specifies twelve months of domicile as the threshold for residency for tuition at Texas public universities. The number reflects the Legislature\'s policy judgment that 12 months of continuous Texas presence with the documentary indicia is sufficient evidence of intent to make Texas the permanent home. Other states use longer periods (some require 24 months); Texas uses 12.' },
  { q: 'When does the 12-month clock start?', a: 'The clock starts when both conditions are met: (1) physical presence in Texas at a real residential address, and (2) intent to make Texas the permanent home as evidenced by the documentary indicia (driver\'s license, voter registration, vehicle registration, tax return with Texas address). For most families, the clock effectively starts on the day they obtain the Texas driver\'s license, since this is the most defensible first indicium.' },
  { q: 'What resets the 12-month clock?', a: 'Extended absences from Texas (more than a few weeks) during the qualifying period can reset or delay the clock. Returning to your prior state, maintaining out-of-state voter registration or driver\'s license, filing a full-year resident tax return in the prior state, or other indications of continued non-Texas domicile can all reset or delay the clock. Brief travel for vacation, work, or family does not typically reset the clock.' },
  { q: 'Does the 12-month clock count summer vacation away from Texas?', a: 'Brief summer travel (visiting family, vacation) does not reset the clock. Extended summer absences (returning to the prior state for the entire summer, working there, etc.) can delay or reset the clock depending on the facts. UT\'s residency office reviews each case individually; the question is whether the absence was consistent with continuing Texas domicile or showed return to a prior domicile.' },
  { q: 'Can I count time before I officially moved to Texas?', a: 'No. The clock requires physical presence in Texas plus the documentary indicia. Time spent in the prior state with intent to move does not count, even if you bought Texas property or applied for a Texas job. The clock starts when you actually establish Texas as your physical and documentary base.' },
  { q: 'Does the 12 months need to be immediately before the term I petition for?', a: 'Yes. The 12 continuous months must end on or before the census date of the term for which residency reclassification is being petitioned. The census date is approximately the 12th class day of the fall or spring semester. Plan backward from the desired effective term to determine when the clock must start.' },
  { q: 'What if I take a gap year and live in Texas the whole time?', a: 'A gap year spent in Texas with full establishment of the documentary set can count toward the 12-month clock provided the residency requirements are met. This is a clean strategy for some families: gap year in Texas plus enrollment as a Texas resident in year 2.' },
  { q: 'Can I count time during my freshman year as out-of-state at UT?', a: 'The student\'s time at UT counts toward physical presence in Texas. For the student to establish independent residency, however, the student must demonstrate independence (not claimed on parent tax return, supporting themselves financially). For the more common dependent-student pathway, the parent\'s domicile is what matters, and the parent must establish the documentary set during the 12-month period before petitioning.' },
];

export default function TwelveMonthClockPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Texas Residency 12 Months', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="Texas residency · The 12-month clock"
        title={<h1 className="text-ink max-w-[22ch]">Texas Residency 12 Months: The Exact Clock</h1>}
        lede="The clock that decides in-state tuition: when it starts, what counts, what resets it, and how to count it correctly so your petition is approved on the first try."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The exact rule">
            Texas Education Code §54.052 requires <strong>12 continuous months of qualifying Texas domicile</strong> immediately preceding the census date of the term for which in-state tuition is being petitioned. Qualifying domicile means physical presence in Texas at a real residential address, plus the documentary indicia (Texas driver&apos;s license, vehicle registration, voter registration, federal tax return with Texas address). The clock starts when both physical presence and documentary indicia are in place; brief travel does not reset it, but extended absences or continued ties to a prior state can.
          </QuickAnswer>

          <AuthorBox blurb="Has helped dozens of out-of-state families count the 12-month clock correctly, file the petition at the right time, and avoid the timing mistakes that delay approval." />

          <h2 className="mt-0">When the 12-month clock starts</h2>
          <p>The clock starts when <strong>both</strong> of these are true:</p>
          <ol>
            <li><strong>Physical presence in Texas.</strong> You actually live at a Texas residential address. PO boxes do not count. Mail-forwarding services do not count. The address must be where you sleep, receive mail, and maintain personal effects.</li>
            <li><strong>Documentary indicia.</strong> The standard set: Texas driver&apos;s license, Texas vehicle registration, Texas voter registration, federal tax return with Texas address, and (for property-based pathways) Texas property ownership or lease.</li>
          </ol>
          <p>For most families, the effective start date is the day the Texas driver&apos;s license is issued, since this is the cleanest documentary first step. Earlier physical presence without the driver&apos;s license is harder to defend; later driver&apos;s license without earlier presence does not help.</p>

          <h2>When the 12-month clock ends</h2>
          <p>The clock ends on the census date of the term for which residency reclassification is requested. The census date is approximately the 12th class day of the fall or spring semester (specific dates vary by year and are published by UT&apos;s registrar). For 2025-26:</p>
          <ul>
            <li><strong>Fall 2026 census:</strong> approximately September 16, 2026 (12th class day after August 26 start)</li>
            <li><strong>Spring 2027 census:</strong> approximately February 1, 2027</li>
            <li><strong>Summer 2027 census:</strong> approximately June 12, 2027</li>
          </ul>
          <p>The 12 continuous months must be complete <em>before</em> the census date. Plan backward: if you want in-state tuition for Fall 2026 (census mid-September 2026), your 12-month clock must start no later than approximately mid-September 2025.</p>

          <h2>Visual timeline: the 12-month clock for Fall 2026 effective</h2>
          <div className="callout">
            <p className="mb-0">
              <strong>August-September 2025:</strong> Move to Texas. Obtain Texas driver&apos;s license. Register vehicle. Register to vote. Begin Texas lease or move into Texas-owned property. Update federal tax records.<br/>
              <strong>October 2025 - August 2026:</strong> Maintain Texas domicile continuously. File federal tax return with Texas address in early 2026 (for 2025 tax year as part-year Texas resident or full Texas resident).<br/>
              <strong>August 2026:</strong> Begin Fall 2026 semester at UT Austin as out-of-state student.<br/>
              <strong>August-September 2026:</strong> File residency reclassification petition through UT MyStatus with full documentary package.<br/>
              <strong>September 2026 (census date):</strong> Petition decision; if approved, tuition is recalculated at the Texas-resident rate for Fall 2026.<br/>
              <strong>Net effect:</strong> Year 1 tuition at the Texas-resident rate of {fmtUSD(TUITION.inStatePerYear)}/year instead of {fmtUSD(TUITION.outOfStatePerYear)}/year, saving approximately {fmtUSD(TUITION.annualSavings)} in year 1 plus the same savings each subsequent year.
            </p>
          </div>

          <h2>What counts as "continuous" during the 12 months</h2>
          <p>The clock requires <em>continuous</em> domicile, which means brief absences are tolerated but extended absences are not. Practical guidance:</p>

          <h3>Counts as continuous (does not reset the clock)</h3>
          <ul>
            <li>Brief vacation travel (1-3 weeks)</li>
            <li>Business travel for work</li>
            <li>Visiting family in another state for holidays</li>
            <li>Short-term medical care or treatment requiring travel</li>
            <li>Brief summer travel (1-4 weeks)</li>
          </ul>

          <h3>Can reset or delay the clock</h3>
          <ul>
            <li>Spending the entire summer in the prior state</li>
            <li>Returning to live in the prior state for an extended period</li>
            <li>Voting in the prior state during the qualifying period</li>
            <li>Maintaining a primary driver&apos;s license in the prior state</li>
            <li>Filing the prior state&apos;s tax return as a full-year resident</li>
            <li>Maintaining substantial business or employment ties to the prior state that suggest non-Texas domicile</li>
          </ul>

          <h2>How to count the clock correctly</h2>
          <ol>
            <li><strong>Identify the target term.</strong> When does your student want in-state tuition to take effect? Fall 2026? Spring 2027?</li>
            <li><strong>Look up the census date.</strong> Approximately the 12th class day of that term.</li>
            <li><strong>Count back 12 months.</strong> Your domicile establishment must be complete by that date.</li>
            <li><strong>Plan the move with margin.</strong> Move at least 12 months and 2 weeks before the census date to allow for processing time and unexpected delays.</li>
            <li><strong>Begin the documentary set immediately.</strong> Driver&apos;s license, vehicle registration, voter registration, lease or deed.</li>
            <li><strong>Maintain continuously.</strong> No extended absences during the qualifying period.</li>
            <li><strong>Petition at or shortly after the 12-month anniversary.</strong> Through UT MyStatus, with full documentary package.</li>
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
              <li><Link href="/12-month-timeline">The 12-month timeline</Link>: month-by-month operating plan</li>
              <li><Link href="/how-to-establish-texas-residency">How to establish Texas residency</Link>: the full step-by-step guide</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: §54.052 framework</li>
              <li><Link href="/residency-checklist">Document checklist</Link>: everything UT may ask for</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-12-month-clock" />
    </>
  );
}
