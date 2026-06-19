import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, howToSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactSection } from '@/components/ContactSection';
import { TUITION, fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

const TITLE = 'How to Get In-State Tuition at UT Austin (Step-by-Step, 2026 Guide)';
const DESCRIPTION = `Step-by-step pathway to legally qualify for UT Austin in-state tuition as an out-of-state student. The 12-month domicile clock, property ownership, documentation, the petition. Saves ${fmtUSD(TUITION.annualSavings)}/year.`;
const PATH = '/how-to-get-in-state-tuition-ut-austin';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const HOWTO_STEPS = [
  { name: 'Decide whether the pathway makes financial sense', text: `Run your specific scenario in the tuition calculator. The savings are roughly ${fmtUSD(TUITION.annualSavings)}/year, but carrying costs of Texas property and the operational burden of maintaining the residency record need to fit your family.` },
  { name: 'Pick the property pathway: Rule #3 or Rule #4', text: 'Rule #3 is student-occupied property held in personal name; Rule #4 is rental property held in a Texas LLC. Most families pick Rule #3 because the property doubles as student housing.' },
  { name: 'Close on Texas property at least 12 months before the target term', text: 'For Fall 2027 in-state status, close by mid-August 2026. Record the deed with the county clerk. The closing date and recording date are documented evidence.' },
  { name: 'Establish supporting indicia of Texas domicile', text: 'Texas driver\'s license or ID. Texas vehicle registration with a Texas inspection. Texas voter registration. Update primary mailing address with IRS, USPS, bank, brokerage, and insurance.' },
  { name: 'Maintain the documentary record for 12 continuous months', text: 'Pay utilities each month. Keep property tax current. Do not vote in another state. File the federal tax return for the relevant year with a Texas address.' },
  { name: 'Submit the residency petition through UT MyStatus', text: 'About 60 days before the target term census date, file the petition with all supporting documents. UT\'s residency office decides in 2-4 weeks.' },
  { name: 'Receive resident classification', text: 'Once classified as a resident, UT recalculates tuition at the in-state rate for the petitioned term and all subsequent terms.' },
];

const FAQ = [
  { q: 'Can I get UT Austin in-state tuition by living in Texas for a year while attending UT?', a: 'No. THECB rules expressly say that presence in Texas for educational purposes does not count toward the 12-month domicile clock. You must establish residency before or independently of enrolling at UT, with substantive indicia of intent (real property, employment, business, vehicle and voter registration, tax filings).' },
  { q: 'How long does it take to qualify for UT Austin in-state tuition?', a: 'Twelve continuous months of Texas domicile before the term\'s census date, plus the time to set up the supporting indicia. Practically, plan on 13-14 months from "we decide to do this" to "the petition is approved." For a Fall 2027 in-state petition, the 12-month clock must start by approximately September 2026.' },
  { q: 'Do I have to buy property to qualify for UT in-state tuition?', a: 'No, but property ownership is the most common and most defensible pathway for out-of-state families. The THECB rules accept many indicia (employment, business activity, long-term lease, professional license) but property is the easiest to document and the hardest to challenge.' },
  { q: 'How much does it cost to qualify for UT Austin in-state tuition?', a: 'The variable cost is the carrying cost of Texas property: roughly $30,000-$45,000/year in mortgage, HOA, property tax, insurance, and maintenance for a $400-$500K West Campus condo. That is offset by the tuition savings of about $33,220/year starting year 2, plus typical Austin property appreciation, plus principal pay-down on the mortgage. Net four-year cost for a property-pathway family is usually $20K-$40K less than the same family in rentals paying non-resident tuition.' },
  { q: 'Can grandparents qualify their grandchild for UT Austin in-state tuition?', a: 'Only if the grandparent claims the grandchild as a federal tax dependent under IRS rules. That requires the grandparent to provide more than half the grandchild\'s support and meet other dependency tests. If the grandparent qualifies as the federal tax dependent claimant, the grandparent\'s Texas domicile counts toward the student\'s residency.' },
  { q: 'What if I get denied? Can I reapply?', a: 'Yes. Most denials are correctable: fix the documentary issue (e.g., file an amended federal return with Texas address) and re-petition for the next term. Residency classification is reviewed per term, so a Fall denial can be followed by a Spring petition.' },
  { q: 'Does the residency office actually approve petitions like this?', a: 'Yes, routinely. UT\'s Office of Admissions Residency Determination reviews petitions on documentary evidence, not on intent narratives. When the documents are complete and consistent, approval is the default outcome. The office is not adversarial. Most denials are caused by specific documentary problems (wrong-state tax return, lapsed vehicle registration, etc.) rather than bad faith.' },
];

export default function HowToPage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'How to Get In-State Tuition at UT Austin', path: PATH },
      ])} />
      <Schema data={articleSchema({
        headline: TITLE,
        description: DESCRIPTION,
        path: PATH,
        datePublished: '2026-06-19',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={howToSchema({
        name: 'Qualify for UT Austin In-State Tuition (Out-of-State Family)',
        description: 'Step-by-step pathway to legally qualify as a Texas resident for UT Austin tuition purposes.',
        totalTime: 'P14M',
        steps: HOWTO_STEPS,
      })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="Step-by-step"
        title={<h1 className="text-ink max-w-[22ch]">How to Get In-State Tuition at UT Austin</h1>}
        lede={`The complete out-of-state parent's playbook. Texas Education Code §54.052, the 12-month domicile clock, property ownership, supporting indicia, the petition. Saves about ${fmtUSD(TUITION.annualSavings)}/year if executed correctly.`}
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The 90-second answer">
            To qualify for UT Austin in-state tuition as an out-of-state student, the family (or the independent student) must maintain a Texas domicile for 12 continuous months before the term&apos;s census date. The practical pathway: acquire Texas real property, establish supporting indicia (Texas driver&apos;s license, vehicle registration, voter registration, federal tax return with Texas address), maintain that record for 12 months, then petition through UT MyStatus. Approved petitions reclassify the student to resident status, saving approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong>. The most common scenario: pay out-of-state for year 1, establish residency during year 1, petition over summer, pay resident rate from year 2 forward.
          </QuickAnswer>

          <AuthorBox blurb="Has personally walked dozens of families through this exact pathway. Knows the documentary gotchas (wrong-state tax returns, vehicle registration lapses) that derail otherwise clean petitions." />

          <h2 className="mt-0">The seven-step pathway</h2>

          {HOWTO_STEPS.map((step, i) => (
            <div key={i} className="bg-surface border border-hairline rounded-lg p-6 my-5 grid grid-cols-[60px_1fr] gap-4">
              <div className="font-serif text-3xl text-burnt leading-none" style={{ fontVariantNumeric: 'tabular-nums' }}>{i + 1}</div>
              <div>
                <h3 className="m-0 text-ink">{step.name}</h3>
                <p className="m-0 mt-2 text-body">{step.text}</p>
              </div>
            </div>
          ))}

          <h2>Step 1, in detail: Run the math first</h2>
          <p>Before committing to the pathway, run your specific scenario in the <Link href="/tuition-calculator">tuition calculator</Link>. The savings are approximately {fmtUSD(TUITION.annualSavings)}/year on the tuition line, but the family needs to net that against the carrying costs of Texas property (roughly $30K-$45K/year for a typical West Campus condo) and the operational tolerance for maintaining the documentary record.</p>

          <p>The math works for most families with the capital to acquire $350K-$500K of Austin property. It does not work for families who cannot finance the property without straining the household or who cannot maintain a Texas domicile for 12 months for personal/professional reasons.</p>

          <h2>Step 2, in detail: Rule #3 vs Rule #4</h2>
          <p>The THECB residency framework allows real property to satisfy the domicile requirement in two ways:</p>

          <ul>
            <li><strong>Rule #3 (student-occupied property):</strong> The family holds property in personal name (or a transparent family trust), the student lives there, the property is the family&apos;s declared Texas home. Simpler documentation. Allows the homestead exemption. Most common pathway.</li>
            <li><strong>Rule #4 (rental LLC):</strong> The family forms a Texas LLC, the LLC acquires income-producing property (typically a duplex or small multifamily), and the LLC operates as a real rental business with tenants, management, and franchise tax filings. The LLC&apos;s Texas-domiciled business activity becomes the domicile proof.</li>
          </ul>

          <p>Most out-of-state UT families pick Rule #3 because the property doubles as student housing and the documentary requirements map cleanly onto household records. Rule #4 is for families with prior real-estate-investing experience who want the property to also pencil as an investment. See <Link href="/rule-3-vs-rule-4">the comparison page</Link> for the side-by-side.</p>

          <h2>Step 3, in detail: Closing timing</h2>
          <p>The 12-month clock starts the day all required indicia are simultaneously in place. The required indicia for the property pathway are:</p>

          <ol>
            <li>Real property closed and recorded in the county clerk&apos;s office</li>
            <li>Utility accounts active in the family&apos;s name at the Texas address</li>
            <li>Texas driver&apos;s license or ID held by the parent (dependent branch) or student (independent branch)</li>
            <li>Texas vehicle registration for any vehicle the family operates in Texas</li>
            <li>Texas voter registration filed</li>
          </ol>

          <p>If property closes June 1 but the vehicle is not registered in Texas until July 15, the clock starts July 15. Plan closing dates so all five items can be in place within 2-3 weeks of closing.</p>

          <p>The target is to have the clock running 12 full months before the target term&apos;s census date. UT&apos;s Fall census dates fall on the 12th class day of the semester, typically around September 8-9. For Fall 2027 in-state status, the clock must start no later than approximately September 8, 2026, which means closing by mid-August 2026.</p>

          <h2>Step 4, in detail: The supporting indicia</h2>

          <h3>Texas driver&apos;s license or ID</h3>
          <p>Issued by the Texas Department of Public Safety (TxDPS). Appointments are sometimes scarce; book online a week or two in advance. The parent who anchors the residency claim must hold a Texas DL or ID with an issuance date at least 12 months before the target census date. If the parent cannot lawfully hold two licenses, a Texas ID (instead of license) is acceptable.</p>

          <h3>Texas vehicle registration</h3>
          <p>Register any vehicle the family operates in Texas with the Texas Department of Motor Vehicles (TxDMV). Registration includes a Texas safety inspection ($25-$45). The registration card showing the registration date is the document to keep.</p>

          <h3>Texas voter registration</h3>
          <p>File voter registration with the Texas Secretary of State online or with the county elections office. The voter registration card with an effective date covering the 12-month window is the document. Critically: do not vote in another state during the 12-month window. Voter registration is an intent declaration; voting elsewhere undoes it.</p>

          <h3>Federal tax return with Texas address</h3>
          <p>The federal Form 1040 for the relevant tax year must show a Texas address as the residence of record. On the dependent branch, this is the parents&apos; return with the student listed as a dependent. This is the single most authoritative document in the petition. A return filed with the prior state&apos;s address is the most common cause of denial.</p>

          <h2>Step 5, in detail: Maintaining the record</h2>
          <p>For 12 continuous months, the family maintains the documentary record:</p>

          <ul>
            <li>Pay utilities each month (Austin Energy, City of Austin Utilities, gas, internet). Twelve consecutive months of bills in the family&apos;s name at the Texas address.</li>
            <li>Keep property tax current. Travis County taxes due January 31 for the prior year.</li>
            <li>Renew vehicle registration on time. Texas registrations expire annually.</li>
            <li>File any federal tax returns during the window with the Texas address.</li>
            <li>Avoid actions that contradict Texas domicile: do not file a homestead exemption in another state, do not vote in another state, do not register a vehicle in another state.</li>
          </ul>

          <h2>Step 6, in detail: The petition</h2>
          <p>UT&apos;s residency petition is filed through MyStatus, the same portal where admitted students manage enrollment. Within MyStatus, navigate to the Residency tab. The portal walks through questions modeled on the THECB Residency Core Questions document.</p>

          <p>The submission requires:</p>
          <ul>
            <li>Settlement statement from the property closing</li>
            <li>Recorded warranty deed</li>
            <li>Property tax statement (and homestead exemption application if filed)</li>
            <li>12+ months of utility bills</li>
            <li>Mortgage statement (if financed)</li>
            <li>HOA statement (if applicable)</li>
            <li>Insurance declaration page</li>
            <li>Texas driver&apos;s license or ID</li>
            <li>Texas vehicle registration card</li>
            <li>Texas voter registration card</li>
            <li>Federal tax return showing Texas address (often the parents&apos; return with the student listed as a dependent)</li>
            <li>A short narrative explaining when domicile was established and summarizing the documentary record</li>
          </ul>

          <p>Submit the package at least 60 days before the target term&apos;s census date. UT&apos;s residency office decides in 2-4 weeks during the normal cycle; longer during peak periods (July-August for Fall enrollment).</p>

          <h2>The three reasons petitions get denied</h2>

          <div className="callout callout-warn">
            <h4>1. Federal tax return filed in the wrong state</h4>
            <p className="mb-0">Single largest cause of denial. The parents are still working with their previous-state CPA who used the address on file. A return filed with a non-Texas address for the relevant tax year is taken at face value as evidence the family was not domiciled in Texas. Fix: file Form 1040-X to amend the address before petitioning. Allow 8-12 weeks for IRS processing.</p>
          </div>

          <div className="callout callout-warn">
            <h4>2. Vehicle still registered in the prior state</h4>
            <p className="mb-0">Vehicle registration is among the most legible domicile proofs. A vehicle the family uses in Texas but registered elsewhere directly contradicts the Texas-domicile claim. Fix: register every vehicle the family uses in Texas with TxDMV.</p>
          </div>

          <div className="callout callout-warn">
            <h4>3. The 12-month clock did not fully run</h4>
            <p className="mb-0">Closing six months before the target census date is not enough. The reviewer counts back 365 days from the census date and looks for a complete documentary record. Fix: build the timeline backward from the target census date. For Fall 2027 (census ~Sept 8, 2027), all clock-starting events must be complete by ~Sept 8, 2026.</p>
          </div>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Ready to start</h2>
            <p>The operational tools, in order of use:</p>
            <ul>
              <li><Link href="/tuition-calculator">Tuition calculator</Link> — confirm the math fits your scenario</li>
              <li><Link href="/rule-3-vs-rule-4">Rule #3 vs Rule #4</Link> — choose the property pathway</li>
              <li><Link href="/12-month-timeline">12-month timeline</Link> — the operational plan with dates</li>
              <li><Link href="/residency-checklist">Document checklist</Link> — interactive, save progress</li>
              <li><Link href="/condos-near-ut">Condos near UT</Link> — property selection guide</li>
              <li><Link href="/texas-residency-rules">Full residency rules</Link> — the 9,400-word legal reference</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-how-to-in-state" />
    </>
  );
}
