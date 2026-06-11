import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, howToSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { TimelineCountdown } from './TimelineCountdown';
import { SITE } from '@/lib/site';

const TITLE = 'The 12-Month UT Austin Residency Timeline';
const DESCRIPTION = 'A visual month-by-month operating plan for establishing Texas residency for UT Austin in-state tuition. Tasks, deadlines, documents, everything in date order.';
const PATH = '/12-month-timeline';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Can I skip months on the timeline if I am already partway through?', a: 'Yes. Pick up wherever the family actually is. The timeline is a template, not a sequence of approvals. If you already own Texas property and have lived there for six months, your remaining tasks are the supporting indicia and the documentary record going forward.' },
  { q: 'What if the property closes on a different month than the timeline says?', a: 'Shift everything by that offset. The critical relationship is between the closing date and the target census date. As long as the 12-month gap is satisfied, the specific calendar months do not matter.' },
  { q: 'What if I miss the homestead exemption deadline?', a: 'Travis CAD allows late homestead applications for up to two years after the deadline. The exemption is retroactive to the tax year for which it is claimed.' },
  { q: 'What if I do not have a CPA in Texas?', a: 'Your existing CPA can file the return regardless of where they are licensed; CPAs in any state can file federal returns. For Rule #4, a CPA familiar with Texas-entity filings is helpful but not required.' },
  { q: 'How firm are the census dates?', a: 'The census date is operationally firm but the exact date varies by 1-3 days year to year. UT publishes the academic calendar in the prior fall semester. Build a 30-day buffer into your timeline.' },
];

const HOWTO_STEPS = [
  { name: 'T-14 months: Pre-clock setup', text: 'Engage Texas-licensed broker and CPA. Submit mortgage pre-approval. Form LLC if Rule #4.' },
  { name: 'T-13 months: Close on property', text: 'Close on the Texas property. Open utility accounts. Move student in.' },
  { name: 'T-12 months: Obtain personal indicia', text: 'Texas driver\'s license, vehicle registration, voter registration.' },
  { name: 'T-11 to T-5 months: Maintain', text: 'Pay utilities monthly. File 2026 federal return with Texas address.' },
  { name: 'T-2 months: Submit petition', text: 'File residency petition through MyStatus with all supporting documents.' },
  { name: 'T (census date): Receive determination', text: 'Residency office issues classification.' },
];

interface Month { when: string; tag: string; tasks: Array<{ title: string; body: string; ruleTag?: string }>; pitfall?: string; }

const TIMELINE: Month[] = [
  {
    when: 'Month T−14 · ~July 2026', tag: 'Pre-clock setup',
    tasks: [
      { title: 'Engage a Texas-licensed real-estate broker', body: 'Specifically one who has run the UT residency play before. Tour neighborhoods. Define a target price band based on the tuition calculator output.' },
      { title: 'Engage a Texas-licensed CPA', body: 'Discuss the tax filing approach for 2026: which parent will claim the student, which address the federal return will show, and (for Rule #4) whether the LLC needs to be filed before year-end.' },
      { title: 'Submit mortgage pre-approval', body: 'If financed. Texas lenders want 30-45 days to underwrite; start now so an attractive property does not slip while you are still in pre-approval.' },
      { title: '(Rule #4 only) Form the Texas LLC', body: 'Filing with the Texas Secretary of State takes ~2-4 weeks. Engage a registered agent. Open the LLC\'s bank account at a Texas-domiciled bank.' },
    ],
    pitfall: 'Do not close on the property in your home state\'s LLC. The entity must be Texas-domiciled for the residency argument to work.',
  },
  {
    when: 'Month T−13 · ~August 2026', tag: 'Clock starts this month',
    tasks: [
      { title: 'Close on the Texas property', body: 'Aim for a closing by early-to-mid August. The recorded deed date is the legal mark of ownership.' },
      { title: 'Open utility accounts in the family\'s name', body: 'Austin Energy, City of Austin Utilities (water), Texas Gas Service (if gas), and an internet provider.' },
      { title: 'Move the student into the property', body: 'Coordinate with UT\'s residence-hall move-in date if applicable. Even if the student initially lives in a dorm, they should also have a presence at the family property.' },
      { title: 'Update primary mailing address', body: 'USPS change of address, bank, brokerage, insurance, IRS Form 8822 (Change of Address). Have mail consistently delivered to the Texas address from this point forward.' },
    ],
    pitfall: 'Do not delay any of the clock-starting items more than 2-3 weeks past closing. The clock starts when the last required proof is in place.',
  },
  {
    when: 'Month T−12 · ~September 2026', tag: 'Critical month',
    tasks: [
      { title: 'Obtain Texas Driver\'s License or ID', body: 'For the parent on the dependent branch. TxDPS appointments are sometimes scarce; book online a week in advance.' },
      { title: 'Register vehicle(s) with TxDMV', body: 'Any vehicle the family operates in Texas. Texas inspection required (~$25). Registration card and inspection sticker are the documents to keep.' },
      { title: 'File Texas Voter Registration', body: 'Texas Secretary of State online portal or county elections office. Card arrives in mail within 2-3 weeks.' },
      { title: '(Rule #4 only) Sign first tenant lease', body: 'If the strategy involves rented units, the first lease should be in effect by month T-12 to substantiate the LLC\'s business activity.' },
    ],
    pitfall: 'Do not vote in your old state\'s November election if Texas Voter Registration is in effect. Voting elsewhere undoes the registration as intent evidence.',
  },
  {
    when: 'Months T−11 to T−9 · Oct - Dec 2026', tag: 'Maintain',
    tasks: [
      { title: 'Pay utilities on time, every month', body: 'Consecutive 12 months is the evidence. Set up auto-pay to avoid gaps.' },
      { title: 'Property tax due (late Dec 2026 or Jan 2027)', body: 'Travis County property taxes are due Jan 31 for the prior year. Pay from a Texas bank account if possible.' },
      { title: '(Rule #4) Begin year-end LLC bookkeeping', body: 'Reconcile the LLC\'s bank account, categorize expenses, prepare for the 1065 / Schedule E filing.' },
    ],
  },
  {
    when: 'Months T−8 to T−5 · Jan - Apr 2027', tag: 'Tax filing window',
    tasks: [
      { title: 'File 2026 federal tax return with Texas address', body: 'The single most important task in this entire window. The 2026 Form 1040 must show a Texas address for the relevant family member. Coordinate with your CPA.' },
      { title: 'Claim the student as dependent on the 2026 return', body: 'On the dependent branch. If the family is divorced, coordinate Form 8332 with the other parent.' },
      { title: '(Rule #4) File Form 1065 (or Schedule E) for the LLC', body: 'Partnership return due March 15, 2027 (or extended to Sept 15). K-1s issued to members.' },
      { title: '(Rule #4) File Texas Franchise Tax PIR', body: 'Due May 15, 2027. No-tax-due threshold applies but the report still must be filed.' },
      { title: '(Rule #3) File homestead exemption application with Travis CAD', body: 'Due April 30, 2027 (deadline varies year to year). Reduces 2027 property tax.' },
    ],
    pitfall: 'Do not let your CPA file the 1040 with the old-state address out of habit. Verify the address before signing.',
  },
  {
    when: 'Months T−4 to T−2 · May - July 2027', tag: 'Petition preparation',
    tasks: [
      { title: 'Gather all documents per the checklist', body: 'See the residency checklist. Label each PDF.' },
      { title: 'Write the petition narrative', body: '2-3 paragraphs. State when domicile was established, on what basis, and summarize the documents.' },
      { title: 'Verify the 2026 federal return reflects Texas address', body: 'If not, file Form 1040-X to amend the address. Allow 8-12 weeks for IRS processing.' },
      { title: 'Renew any expiring registrations', body: 'Texas vehicle registration renews annually. If the original registration was September 2026, it expires September 2027.' },
    ],
  },
  {
    when: 'Month T−2 · ~July 2027', tag: 'Petition submission',
    tasks: [
      { title: 'Submit the residency petition through MyStatus', body: 'UT\'s online portal. Upload all documents. Submit the narrative. Track for the office\'s acknowledgment email.' },
      { title: 'Calendar response deadlines', body: 'If the office requests additional documents, the response window is typically 14 days. Have alternate contacts on file.' },
    ],
  },
  {
    when: 'Month T−1 · August 2027', tag: 'Final stretch',
    tasks: [
      { title: 'Respond to any document requests promptly', body: 'The office sometimes asks for additional documents. Respond within 7 days where possible.' },
      { title: 'Avoid extended travel out of Texas', body: 'The student should be in Texas for most of August. Long trips elsewhere undermine the presence narrative.' },
    ],
  },
  {
    when: 'Month T · September 8, 2027 (Fall census date, approximate)', tag: 'Determination issued',
    tasks: [
      { title: 'Receive the residency determination', body: 'If classified as Resident: in-state tuition applies to Fall 2027 and every subsequent term as long as residency is maintained. If classified as Nonresident: appeal within the institution or fix gaps and re-petition for Spring 2028.' },
    ],
  },
];

export default function TimelinePage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: '12-Month Timeline', path: PATH },
      ])} />
      <Schema data={articleSchema({
        headline: TITLE,
        description: DESCRIPTION,
        path: PATH,
        datePublished: '2026-05-11',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={howToSchema({
        name: '12-month timeline for UT Austin Texas residency',
        totalTime: 'P14M',
        steps: HOWTO_STEPS,
      })} />
      <Schema data={faqPageSchema(FAQ)} />

      <header className="bg-paper pt-20 pb-12 border-b border-hairline">
        <div className="narrow">
          <p className="eyebrow">The operating plan</p>
          <h1 className="text-ink">The 12-Month Residency Timeline</h1>
          <p className="text-body text-lg max-w-[60ch] mt-4">
            Month-by-month, the tasks and documents that get an out-of-state UT family from &quot;considering this&quot; to &quot;approved as Texas resident,&quot; laid out as a working operational plan.
          </p>
        </div>
      </header>

      <section className="py-12">
        <div className="narrow">

          <TimelineCountdown />

          <QuickAnswer label="The 60-second answer">
            For a Fall 2027 in-state tuition petition, the 12-month domicile clock must start no later than approximately September 2026. The operational timeline runs T−14 months (engage Texas broker and CPA) through T (residency determination from UT). The critical month is T−12: close on the Texas property in August, then obtain Texas driver&apos;s license, vehicle registration, and voter registration by end of September so all clock-starting indicia are in place. Tax filing in March-April 2027 with a Texas address is the single largest single point of failure. Petition submission through MyStatus around July 2027; determination by census date in early September 2027.
          </QuickAnswer>

          <h2 className="mt-0">How to read this timeline</h2>
          <p>The timeline below is written for a family targeting <strong>in-state status for the Fall 2027 term</strong> at UT Austin, the most common target for out-of-state families whose student enrolls in Fall 2026 as a non-resident. The target census date is approximately September 8, 2027. Working backward, the 12-month clock must start no later than approximately September 8, 2026.</p>
          <p>To adapt for a different target: count back 12 months from your target term&apos;s census date. For Fall 2026 (census ~Sept 9, 2026), the entire timeline shifts back one year. For Spring 2027 (census ~Feb 5, 2027), it shifts forward five months.</p>
          <p>Use it as a checklist. Print it. Share it with your CPA, your real estate broker, and your spouse, each person owns a specific column of tasks.</p>

          <div className="relative pl-10 mt-9">
            <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-gold to-gold-lt" />
            {TIMELINE.map((m, i) => (
              <div key={i} className="relative bg-white border border-hairline rounded-lg py-6 px-7 mb-5 shadow-sm">
                <div className="absolute -left-8 top-7 w-4 h-4 bg-burnt rounded-full ring-4 ring-paper" />
                <p className="font-serif text-2xl text-ink mt-0 mb-1">{m.when}</p>
                <span className="text-[11px] font-bold tracking-widest uppercase text-burnt mb-3.5 block">{m.tag}</span>
                {m.tasks.map((t, j) => (
                  <div key={j} className="grid grid-cols-[22px_1fr] gap-2.5 py-2.5 border-b border-dashed border-hairline last:border-0 items-start">
                    <div className="w-4 h-4 border-2 border-burnt rounded-sm mt-1" />
                    <div>
                      <strong className="text-ink">{t.title}</strong>
                      <p className="m-1 text-sm text-body">{t.body}</p>
                    </div>
                  </div>
                ))}
                {m.pitfall && (
                  <div className="bg-[#fbf2ef] border-l-[3px] border-danger p-2.5 px-3.5 mt-3.5 rounded-r text-sm text-[#803c30]">
                    <strong className="text-danger">Do not:</strong> {m.pitfall}
                  </div>
                )}
              </div>
            ))}
          </div>

          <h2>Adapting the timeline for a different target term</h2>
          <p>The same structure applies for any target term. Shift every date by the appropriate amount:</p>
          <ul>
            <li><strong>For Fall 2026:</strong> the family would need to have closed on the property by July 2025 and had all clock-starting events in place by September 2025. Most families targeting Fall 2026 in-state status are already underway; if you are starting fresh, Fall 2027 is the realistic target.</li>
            <li><strong>For Spring 2027:</strong> closing must be by January 2026 with all clock-starting events in place by February 2026. The petition is submitted in November/December 2026.</li>
            <li><strong>For Fall 2028 or later:</strong> the timeline shifts forward in lockstep. The longer runway is helpful, more time to assemble a clean documentary record, more flexibility in tax planning.</li>
          </ul>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Working the plan?</h2>
            <p>If a specific month is approaching and you would like a sanity check on where you are, send us a quick note.</p>
            <Link href="/residency-checklist" className="btn btn-gold mt-4 inline-block">Document checklist →</Link>
            {' '}
            <Link href="/contact" className="btn btn-ghost mt-4 inline-block text-ink !border-burnt-deep">Ask a timing question →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
