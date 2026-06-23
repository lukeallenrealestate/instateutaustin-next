import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema, howToSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactSection } from '@/components/ContactSection';
import { TUITION, fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

const TITLE = 'How to Establish Texas Residency (2026 Step-by-Step Guide)';
const DESCRIPTION = `Complete step-by-step guide to establishing Texas residency for tuition, voting, and tax purposes. Texas Education Code §54.052 framework, the 12-month domicile clock, required documentation, and the property pathway used by UT Austin families to save ${fmtUSD(TUITION.annualSavings)}/year.`;
const PATH = '/how-to-establish-texas-residency';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'How do I establish Texas residency?', a: 'Texas residency is established by physical presence in Texas with the intent to make Texas your permanent home, supported by documentary indicia: Texas driver\'s license, Texas vehicle registration, Texas voter registration, Texas-address federal tax return, and (for the dependent-student pathway) Texas real property. Maintain these continuously for 12 months and Texas considers you a resident for tuition, tax, voting, and other purposes.' },
  { q: 'How long does it take to establish Texas residency?', a: 'For tuition purposes at Texas public universities, the clock is exactly 12 continuous months of qualifying Texas domicile under Texas Education Code §54.052. For voting, the clock is 30 days of residence before the election. For income tax (Texas has no state income tax, so this is mostly an exit-state question), most states use 183 days plus declaration of intent. For driver\'s license and vehicle registration, you must establish Texas residence within 90 days of becoming a Texas resident.' },
  { q: 'What documents do I need to establish Texas residency?', a: 'The standard documentary package: Texas driver\'s license (within 90 days of arrival), Texas vehicle registration and insurance, Texas voter registration, federal tax return filed with Texas address, lease or deed showing Texas residence, and utility bills in your name at the Texas address. For dependent students seeking in-state tuition, the parent\'s domicile is what matters; the same documentary set must be in the parent\'s name.' },
  { q: 'Can I keep my home in another state while establishing Texas residency?', a: 'Yes, but it complicates the case. Texas Education Code §54.052 looks for evidence of "intent to make Texas the permanent home." Maintaining a primary residence in another state, voting there, keeping a driver\'s license there, or filing state tax returns there as a resident undermines the Texas residency claim. The cleanest cases either fully relocate or treat the out-of-state property as an investment property rented out, while the family lives at the Texas address.' },
  { q: 'Does owning property in Texas establish residency?', a: 'Property ownership alone does not establish Texas residency. Texas requires actual physical presence in Texas plus the documentary indicia (driver\'s license, voter registration, vehicle registration, tax return). However, property ownership is a strong piece of evidence supporting the residency claim, and for the UT Austin in-state tuition pathway, parent-owned Texas property rented to the student (Rule #4) is a recognized framework. Family-owned Texas property that the student occupies (Rule #3) is even cleaner.' },
  { q: 'How much money does it cost to establish Texas residency?', a: 'Direct costs to establish residency are minor: Texas driver\'s license $33, vehicle title transfer $33, vehicle registration $50-$75/year, voter registration is free. The major cost driver depends on the pathway: if buying Texas property as part of the strategy, expect $350,000-$650,000 for a West Campus condo (or more for a single-family home) plus closing costs, property taxes (~2% of value annually), HOA (if applicable), and insurance.' },
  { q: 'Can I establish Texas residency just to get in-state tuition?', a: 'Texas Education Code §54.052 requires "intent to make Texas the permanent home" not merely "intent to qualify for tuition." UT Austin\'s residency office reviews petitions for evidence of genuine domicile, not just paperwork compliance. The pathway that consistently works is one where the family actually establishes Texas as a meaningful base of operations (property ownership, vehicle, voter registration, all federal tax returns), not just a paperwork exercise. The savings of ${fmtUSD(33220)}/year is substantial enough to motivate genuine relocation, and the residency office accepts that motivation as long as the underlying domicile is real.' },
  { q: 'Do I need a Texas address before applying for in-state tuition?', a: 'Yes. The in-state tuition petition through UT MyStatus requires a Texas residential address with supporting documents (lease or deed, utility bills, driver\'s license). The address must show genuine residence, not just a mailing address. PO boxes and mail-forwarding services do not qualify.' },
  { q: 'What if I work remotely from Texas?', a: 'Working remotely from Texas for an out-of-state employer is fully consistent with Texas residency, provided you actually live in Texas, file your federal tax return with a Texas address, and otherwise maintain the documentary set. Most remote workers are clean residency cases. Texas has no state income tax, so the move from a state with income tax to Texas saves money beyond just the tuition pathway.' },
];

const STEPS = [
  { name: 'Step 1: Physical move to Texas', text: 'Establish a residence in Texas. This can be purchased property or a long-term lease (12+ months). The address must be a real residential address where you physically live, not a PO box or mail-forwarding service.' },
  { name: 'Step 2: Obtain a Texas driver\'s license', text: 'Within 90 days of arrival, surrender your prior state license and obtain a Texas driver\'s license at any Texas DPS office. You need proof of identity, Social Security number, and Texas residence (lease, utility bill, or deed). Cost: $33.' },
  { name: 'Step 3: Register your vehicle in Texas', text: 'Within 30 days of becoming a Texas resident, transfer your vehicle title and register the vehicle in Texas. You need the title, proof of insurance, vehicle inspection (within 90 days), and proof of Texas residence. Cost: ~$50-$200 depending on registration period and county.' },
  { name: 'Step 4: Register to vote in Texas', text: 'File a voter registration application with your county Voter Registrar. Application is free; takes about 30 days to process. Voter registration is a key indicium of "intent to make Texas your permanent home."' },
  { name: 'Step 5: File federal tax return with Texas address', text: 'Your next federal tax return (for the tax year in which you became a Texas resident) should show your Texas address. If you maintain ties to another state during the transition year, you may file a part-year resident return in that state, but going forward all returns should be Texas-only.' },
  { name: 'Step 6: Update other indicia', text: 'Update bank accounts, employer records, retirement accounts, insurance policies, professional licenses, passport, and any other identification to show your Texas address. The goal is a consistent documentary trail showing Texas as your primary residence.' },
  { name: 'Step 7: Maintain for 12 continuous months', text: 'For UT Austin in-state tuition reclassification, the residency clock requires 12 continuous months of qualifying Texas domicile before the term for which you petition. Avoid extended absences (more than a few weeks) from Texas during this period; sustained out-of-state presence can reset the clock.' },
  { name: 'Step 8: Petition for residency reclassification', text: 'After 12 months of qualifying domicile, file the residency reclassification petition through UT MyStatus. Submit the documentary package (driver\'s license, vehicle registration, voter registration, tax return, lease or deed, utility bills). Typical processing time: 6-10 weeks. Approval results in reclassification effective the upcoming term.' },
];

export default function HowToEstablishResidencyPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'How to Establish Texas Residency', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />
      <Schema data={howToSchema({ name: 'How to establish Texas residency for UT Austin in-state tuition', description: 'Step-by-step guide to establishing Texas residency under Texas Education Code §54.052.', totalTime: 'P12M', steps: STEPS })} />

      <PageHero
        eyebrow="Texas residency · Step-by-step guide"
        title={<h1 className="text-ink max-w-[22ch]">How to Establish Texas Residency</h1>}
        lede="Complete step-by-step guide under Texas Education Code §54.052: the 12-month domicile clock, the required documentary set, and the petition process used by UT Austin out-of-state families."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The short version">
            Texas residency is established by physical presence in Texas plus the standard documentary indicia (Texas driver&apos;s license, vehicle registration, voter registration, federal tax return with Texas address, and a Texas residential address) maintained for the required period. For UT Austin in-state tuition under <Link href="/texas-residency-rules">Texas Education Code §54.052</Link>, the clock is <strong>12 continuous months</strong>. The annual savings is approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong>.
          </QuickAnswer>

          <AuthorBox blurb="Has personally walked dozens of out-of-state families through every step of the Texas residency establishment process." />

          <h2 className="mt-0">The eight steps to establish Texas residency</h2>
          <ol>
            {STEPS.map((step, i) => (
              <li key={i}>
                <strong>{step.name}.</strong> {step.text}
              </li>
            ))}
          </ol>

          <h2>The legal framework: Texas Education Code §54.052</h2>
          <p>Texas Education Code §54.052 is the statute that governs residency for tuition at all Texas public universities. The Texas Higher Education Coordinating Board (THECB) interprets the statute through detailed rules under 19 TAC §21.21-§21.32. For UT Austin, the residency office applies these rules through the petition process.</p>

          <p>The key principle: residency for tuition is based on <em>domicile</em>, which Texas defines as physical presence plus intent to make Texas your permanent home. Documentary indicia (the driver&apos;s license, vehicle registration, voter registration, tax return) are evidence of that intent. Twelve continuous months of qualifying domicile establishes residency for tuition.</p>

          <h2>The three pathways to in-state tuition</h2>
          <p>Texas Education Code §54.052 recognizes several pathways. The three most common for out-of-state UT Austin families:</p>

          <h3>Pathway 1: Dependent student with parent in Texas (Rule #3 family-owned property)</h3>
          <p>Parents physically relocate to Texas, establish the documentary set, and the student lives at the parents&apos; Texas address. After 12 months, the student qualifies for in-state tuition through the parents&apos; residency. This is the cleanest path and the one Texas Education Code most clearly supports.</p>

          <h3>Pathway 2: Dependent student with parent-owned investment property (Rule #4)</h3>
          <p>Parents acquire a Texas investment property (often through an LLC), the student rents it from the LLC, and the student lives at the property while the parents may maintain their primary residence in another state. The student establishes independent residency in Texas through the lease, driver&apos;s license, vehicle registration, voter registration, and tax return at the Texas address. Acceptable but requires careful structuring. See <Link href="/rule-3-vs-rule-4">Rule #3 vs Rule #4</Link>.</p>

          <h3>Pathway 3: Independent student physically present in Texas</h3>
          <p>The student establishes independent residency in Texas without parent involvement. The student must be financially independent (not claimed on parent tax return), live in Texas with the documentary set, and maintain that for 12 months. Practical for students 18+ who can support themselves; less common for traditional college freshmen.</p>

          <h2>The documentary set: what UT actually wants to see</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>What It Proves</th>
                  <th>Typical Timing</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Texas driver&apos;s license</td><td>Texas residence + intent</td><td>Within 90 days of arrival</td></tr>
                <tr><td>Texas vehicle registration</td><td>Texas residence + intent</td><td>Within 30 days of registration availability</td></tr>
                <tr><td>Texas voter registration</td><td>Texas residence + intent</td><td>30 days before next election</td></tr>
                <tr><td>Federal tax return with Texas address</td><td>Federal-level declaration of Texas residence</td><td>Following tax year</td></tr>
                <tr><td>Lease or deed showing Texas address</td><td>Physical presence + housing</td><td>Day 1</td></tr>
                <tr><td>Utility bills in your name at Texas address</td><td>Actual occupancy</td><td>Within 30-60 days</td></tr>
                <tr><td>Texas-source employment income (if employed)</td><td>Substantive Texas tie</td><td>Day 1 if relevant</td></tr>
                <tr><td>Texas-titled property (if applicable)</td><td>Real-property ownership</td><td>Acquisition date</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Common mistakes that delay or deny residency</h2>
          <ul>
            <li><strong>Maintaining out-of-state voter registration:</strong> Voter registration in the prior state is one of the strongest indicators of continued non-Texas domicile. Cancel before or at the same time as registering to vote in Texas.</li>
            <li><strong>Keeping out-of-state driver&apos;s license:</strong> Same issue. Surrender the prior license at the Texas DPS office.</li>
            <li><strong>Filing the prior state&apos;s tax return as a full-year resident:</strong> If the move happened mid-year, file a part-year return in both states, not a full-year resident return in the prior state.</li>
            <li><strong>Extended absences during the 12-month clock:</strong> Extended trips outside Texas (more than a few weeks) can reset or delay the residency clock. Sustained presence matters.</li>
            <li><strong>Using a PO box or mail-forwarding service:</strong> The address must be a real residential address. Mail-forwarding services do not establish residence.</li>
            <li><strong>Inconsistent address across documents:</strong> Your driver&apos;s license address, vehicle registration address, voter registration address, and tax return address should all match.</li>
            <li><strong>Petitioning before 12 months:</strong> The clock runs to the term&apos;s census date. Petition only after you have completed 12 months of qualifying domicile.</li>
          </ul>

          <h2>The UT Austin residency petition process</h2>
          <ol>
            <li><strong>Log into UT MyStatus.</strong> The residency petition is filed through this portal.</li>
            <li><strong>Select &quot;residency reclassification.&quot;</strong> Complete the online form with your domicile information.</li>
            <li><strong>Upload supporting documents.</strong> Texas driver&apos;s license, vehicle registration, voter registration card, federal tax return, lease or deed, utility bills, employment records (if applicable).</li>
            <li><strong>Submit and wait.</strong> Typical processing time is 6-10 weeks. The residency office may request additional documentation.</li>
            <li><strong>Decision.</strong> If approved, you are reclassified as a Texas resident effective the upcoming term. If denied, you may submit an appeal with additional documentation. See <Link href="/texas-residency-denied-appeal">Texas residency denied: appeal process</Link>.</li>
          </ol>

          <h2>What changes once you are a Texas resident</h2>
          <ul>
            <li><strong>Tuition:</strong> UT Austin tuition drops from {fmtUSD(TUITION.outOfStatePerYear)}/year to {fmtUSD(TUITION.inStatePerYear)}/year, saving approximately {fmtUSD(TUITION.annualSavings)}/year.</li>
            <li><strong>State income tax:</strong> Texas has no state income tax. If your prior state had one, your post-move income is no longer subject to that state&apos;s tax.</li>
            <li><strong>Voting:</strong> You vote in Texas elections and federal elections at your Texas address.</li>
            <li><strong>Property tax:</strong> If you own Texas real property, you become eligible for the homestead exemption (saves ~1% of value/year on property tax).</li>
            <li><strong>Vehicle registration:</strong> Renewals are in Texas going forward.</li>
            <li><strong>Other state-specific benefits:</strong> Texas Lottery, Texas Empowerment Scholarship (if income-qualifying for in-state students), Texas Advance Commitment, TEXAS Grant, and other state-funded need grants become available to qualifying residents.</li>
          </ul>

          <h2>Texas residency for non-tuition purposes</h2>
          <p>The same documentary set that establishes residency for tuition also establishes residency for tax, voting, and other state-law purposes. The thresholds differ:</p>
          <ul>
            <li><strong>Tuition (UT, A&M, all Texas publics):</strong> 12 continuous months of qualifying domicile under §54.052.</li>
            <li><strong>Voting:</strong> 30 days of Texas residence before the election (Texas Election Code §11.001).</li>
            <li><strong>Income tax (no state income tax in Texas):</strong> Becoming a Texas resident exits the prior state&apos;s income tax obligation. Most states use a 183-day rule plus intent.</li>
            <li><strong>Driver&apos;s license:</strong> Required within 90 days of becoming a Texas resident.</li>
            <li><strong>Vehicle registration:</strong> Required within 30 days of registration availability.</li>
            <li><strong>Homestead exemption (Texas property tax):</strong> Property owned and occupied as primary residence on January 1.</li>
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
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the underlying legal framework</li>
              <li><Link href="/texas-residency-12-months">The 12-month residency clock</Link>: timing in detail</li>
              <li><Link href="/rule-3-vs-rule-4">Rule #3 vs Rule #4</Link>: the two property pathways compared</li>
              <li><Link href="/buying-property-in-texas-for-residency">Buying property in Texas for residency</Link>: the real estate angle</li>
              <li><Link href="/residency-checklist">Residency document checklist</Link>: everything UT may ask for</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-how-to-establish-residency" />
    </>
  );
}
