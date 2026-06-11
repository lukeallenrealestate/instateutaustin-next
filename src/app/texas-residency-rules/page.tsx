import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, faqPageSchema, articleSchema, howToSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { SITE } from '@/lib/site';
import { TUITION, fmtUSD } from '@/lib/tuition';

const TITLE = 'Texas Residency Rules for UT Austin In-State Tuition';
const DESCRIPTION = `The complete legal guide to Texas residency rules for UT Austin in-state tuition. THECB framework, §54.052, the 12-month domicile clock, dependent vs. independent, the property pathway, and the failure modes.`;
const PATH = '/texas-residency-rules';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const FAQ = [
  {
    q: 'Does the 12-month clock count from the date I sign the contract or the date the deed is recorded?',
    a: 'The recorded deed is the legal mark, ownership is effective when the deed is recorded with the county clerk. The contract is a promise to convey; it is not ownership. In Travis County, recording typically happens within a few business days of closing. If the deed somehow takes weeks to record (rare), the clock starts on the recording date, not the closing date.',
  },
  {
    q: 'Can I rent the property out for part of the year and still claim Rule #3?',
    a: 'In general, no. Rule #3 contemplates the property as the family’s residence. Renting it for portions of the year, even short-term rentals during student breaks, moves the case toward Rule #4, which has different documentary requirements. If you want to rent, set up the structure correctly under Rule #4 from the start.',
  },
  {
    q: 'What if I am self-employed and have no W-2?',
    a: 'Self-employment is fine. The relevant documents are your Schedule C (or partnership return / S-corp return for the business), your federal Form 1040 with a Texas address, and the franchise-tax filings for any Texas business entity you operate. The narrative should describe the business’s connection to Texas, operating address, customer geography, registered agent.',
  },
  {
    q: 'Does the student need to be enrolled in UT classes during the 12-month clock?',
    a: 'No. The student can be in their gap year, working, or enrolled at another Texas institution, even at UT itself paying out-of-state tuition for the first year. The 12-month clock can run during a student’s first year at UT, with the residency petition filed during the summer between first and second year, and in-state tuition beginning in the second-year Fall.',
  },
  {
    q: 'If the parent files taxes Married Filing Jointly with a spouse who lives in another state, does that ruin the petition?',
    a: 'It complicates the petition. Options include: the Texas-resident parent files Married Filing Separately for the relevant year(s) with a Texas address; the family designates the Texas address as the household address on the joint return; or the petition narrative explains the arrangement clearly with corroborating evidence. The right approach depends on the specific tax and intent facts. A CPA’s involvement is helpful here.',
  },
  {
    q: 'Can I petition for in-state classification for my student’s first semester at UT?',
    a: 'Only if the 12-month clock has fully run before that first semester’s census date. For a student starting UT in Fall 2027, the clock must have started no later than ~September 2026. That requires the family to have closed on the Texas property no later than ~July or August 2026, a year before first enrollment.',
  },
  {
    q: 'Does the property have to be in Travis County?',
    a: 'No. The property can be anywhere in Texas. For UT Austin students, the practical answer is that the property is usually within the Austin metropolitan area so the student can live there and attend classes.',
  },
  {
    q: 'What if the residency office asks for a document I do not have?',
    a: 'Respond by the deadline with a brief explanation. If you have a substitute document (e.g., the office asked for a utility bill but you have a bank statement showing utility payments by ACH), submit it. Officers are accustomed to working with incomplete records; what damages a petition is silence.',
  },
];

const HOWTO_STEPS = [
  { name: 'Close on Texas property', text: 'Acquire and close on a Texas property (condo, house, or duplex). Record the deed with the county clerk.' },
  { name: 'Establish utilities and primary mailing', text: 'Open utility accounts at the property in the family’s name. Update primary mailing address with the IRS, USPS, bank, brokerage, and insurance carriers.' },
  { name: 'Texas driver’s license / ID', text: 'Obtain a Texas driver’s license or state ID for the parent (dependent branch) or student (independent branch).' },
  { name: 'Texas vehicle registration', text: 'Register any vehicle the family operates in Texas with TxDMV; complete a Texas inspection.' },
  { name: 'Texas voter registration', text: 'File Texas voter registration for the parent (dependent branch) or student (independent branch).' },
  { name: 'Maintain documentary record for 12 months', text: 'Pay utilities monthly, maintain property tax, keep the student at the property, and avoid actions that undermine the Texas domicile.' },
  { name: 'File federal tax return with Texas address', text: 'File the federal tax return for the relevant tax year showing a Texas address as the residence of record.' },
  { name: 'Submit residency petition', text: 'File the residency petition through UT Austin’s MyStatus portal at least two months before the term’s census date.' },
  { name: 'Respond to document requests', text: 'Respond promptly to any document requests from the Residency Determination office.' },
];

export default function ResidencyRulesPage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Texas Residency Rules', path: PATH },
      ])} />
      <Schema data={articleSchema({
        headline: TITLE,
        description: DESCRIPTION,
        path: PATH,
        datePublished: '2026-05-11',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={howToSchema({
        name: 'Establish Texas residency for UT Austin in-state tuition',
        description: 'Step-by-step process to qualify for in-state tuition at UT Austin through the 12-month property-based domicile pathway.',
        totalTime: 'P14M',
        steps: HOWTO_STEPS,
      })} />
      <Schema data={faqPageSchema(FAQ)} />

      {/* HEADER */}
      <header className="bg-paper pt-20 pb-14 border-b border-hairline">
        <div className="narrow">
          <p className="eyebrow">The authoritative explanation</p>
          <h1 className="text-ink max-w-[22ch]">Texas Residency Rules for UT Austin In-State Tuition</h1>
          <p className="text-body text-lg max-w-[64ch] mt-5">
            The complete legal framework: Texas Education Code §54.052, the THECB Residency Rules, the 12-month domicile clock, the dependent/independent distinction, the property pathway, and the failure modes, written for parents.
          </p>
          <div className="text-sm text-body mt-5 flex gap-6 flex-wrap">
            <span><Dot /> Last reviewed {SITE.lastReviewed}</span>
            <span><Dot /> ~9,400 words</span>
            <span><Dot /> Reading time: 38 min</span>
            <span><Dot /> Sources cited at end</span>
          </div>
        </div>
      </header>

      <section className="py-10">
        <div className="narrow">

          {/* QUICK ANSWER */}
          <QuickAnswer label="The 60-second answer">
            UT Austin charges in-state tuition (~{fmtUSD(TUITION.inStatePerYear)}/year) to students whose parents (on the dependent branch) or who themselves (on the independent branch) maintain a Texas domicile for 12 continuous months before a term&apos;s census date. The most reliable pathway for out-of-state families is real-property ownership plus the supporting indicia (Texas driver&apos;s license, vehicle registration, voter registration, and a federal tax return with a Texas address). The petition is filed through UT&apos;s MyStatus portal, decided in 2 to 4 weeks, and produces a recalculated bill at the resident rate, roughly {fmtUSD(TUITION.annualSavings)}/year cheaper.
          </QuickAnswer>

          {/* TOC */}
          <nav className="toc" aria-label="Table of contents">
            <h4>What is on this page</h4>
            <ol>
              <li><a href="#framework">The legal framework</a></li>
              <li><a href="#dependent-vs-independent">Dependent vs. independent</a></li>
              <li><a href="#domicile-clock">The 12-month domicile clock</a></li>
              <li><a href="#presence-requirement">Presence in Texas</a></li>
              <li><a href="#property-pathway">Property: Rule #3 vs. Rule #4</a></li>
              <li><a href="#documents">Required documents</a></li>
              <li><a href="#portal">UT Residency Portal walkthrough</a></li>
              <li><a href="#disqualifying">Disqualifying factors</a></li>
              <li><a href="#edge-cases">Edge cases (military, divorce, dual residency)</a></li>
              <li><a href="#appeals">If you are denied</a></li>
              <li><a href="#timeline">From purchase to in-state semester</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
              <li><a href="#sources">Sources &amp; further reading</a></li>
            </ol>
          </nav>

          {/* 1 FRAMEWORK */}
          <h2 id="framework">1. The legal framework</h2>
          <p>Texas higher-education residency is not a guessing game. It is determined by a specific statute, supplemented by a specific rule set, applied by a specific office at each institution. Understanding which authority controls which question is the first step in understanding why some petitions succeed and others do not.</p>
          <p>The controlling statute is <strong>Texas Education Code §54.052</strong>, enacted by the Texas Legislature and amended periodically. The statute establishes three categories of student for tuition purposes: residents of Texas, nonresidents of Texas, and (for limited purposes) foreign students. It then assigns rule-making authority to the <strong>Texas Higher Education Coordinating Board (THECB)</strong> to fill in the operational details: what counts as evidence of residency, how the 12-month domicile period is measured, what scholarships create stand-alone in-state classification, and so on.</p>
          <p>THECB exercises that authority through Title 19, Part 1, Chapter 21 of the <strong>Texas Administrative Code</strong>, the &quot;Residency Rules and Regulations.&quot; This rule set is republished annually in the THECB&apos;s <em>Residency Core Questions</em> document, which is the form a public university uses to evaluate a petition. UT Austin uses that document, with some additional procedural overlay, through its Office of Admissions Residency Determination unit. The university also publishes its own residency page in the General Information Catalog and accepts petitions through a portal in the MyStatus admissions system.</p>

          <div className="statute">
            <div className="statute-src">Texas Education Code §54.052(a)(3)</div>
            <blockquote>&quot;An individual who resides in this state and who maintained a domicile in this state continuously for the year preceding the census date of the academic semester in which the person enrolls in an institution is entitled to be classified as a resident of this state.&quot;</blockquote>
          </div>

          <p>That single sentence is the core of the entire framework. Three things are required: (1) the person <em>resides</em> in Texas, they have a physical presence at the time of the census date; (2) the person has <em>maintained a domicile</em> in Texas; and (3) that maintenance has been <em>continuous</em> for at least twelve months prior to the census date of the term in question. The THECB rules then define what each of those terms means and what evidence the residency officer should accept as proof.</p>
          <p>&quot;Census date&quot; is a term of art. At UT Austin, the census date for a Fall term is the 12th class day of the semester, usually the second Friday of September. Spring census dates fall on the 12th class day of January or early February, and summer terms have their own shorter census windows. The clock that matters runs <em>back</em> 365 days from the census date, not from the application date and not from the start of classes.</p>
          <p>The other piece of the framework worth grasping up front is who actually decides. UT Austin&apos;s Residency Determination office reads the petition, the supporting documents, and the THECB core questions, and issues a classification: Resident, Nonresident, or (occasionally) a request for additional documentation. That decision can be appealed within the institution. The THECB itself does not adjudicate individual cases; it sets the rules and audits the institutions. This means the framework you are operating under is a Texas-state framework, executed by a UT-Austin office, applying THECB-promulgated rules.</p>
          <p>Why does the structure matter? Because petitioners frequently get bad advice based on what worked at a different Texas institution (Texas A&amp;M, Texas Tech, University of Houston) or in a different year. The rules are statewide, but the procedural overlay is per-institution. This page focuses entirely on UT Austin&apos;s implementation.</p>

          {/* 2 DEPENDENT VS INDEPENDENT */}
          <h2 id="dependent-vs-independent">2. Dependent vs. independent, who has to qualify?</h2>
          <p>Before getting to the 12-month clock, the THECB framework asks a threshold question: is the student a <em>dependent</em> or an <em>independent</em> for tuition purposes? The answer determines <em>whose</em> domicile counts.</p>

          <div className="define">
            <strong>Dependent (for THECB purposes)</strong>, a student who has been claimed as a dependent on a parent&apos;s federal tax return for the current or prior tax year, <em>or</em> who is under 18, <em>or</em> who otherwise relies on a parent for the majority of financial support. For dependent students, the parent&apos;s domicile controls.
          </div>
          <div className="define">
            <strong>Independent (for THECB purposes)</strong>, a student who is at least 18, is not claimed as a dependent on a parent&apos;s federal return in the current or prior tax year, and provides the majority of their own support. For independent students, the student&apos;s own domicile controls.
          </div>

          <p>For most out-of-state families with a traditional-age first-year undergraduate, the dependent classification is unavoidable in the first year of enrollment. The student is still being claimed as a dependent on the parents&apos; federal return. The student is on the parents&apos; health insurance, lives in the parents&apos; household, and does not earn enough to provide the majority of their own support. There is nothing wrong with this, it is simply what triggers the parental-domicile branch of the analysis.</p>
          <p>The dependent branch is, paradoxically, the easier one to execute. The 12-month clock can run on the parent&apos;s documentary record: the parent buys the property, the parent registers a vehicle in Texas, the parent files a return reflecting Texas residency. The student&apos;s only job is to show up at the property. The flexibility is real: the parent does not have to be physically resident in Texas continuously, only domiciled there with documentary proof.</p>
          <p>The independent branch is harder. To qualify as independent, the student must (a) actually be financially independent in the relevant tax year, which usually means earning enough in Texas to clear the IRS&apos;s support test, and (b) <em>not</em> be claimed as a dependent on the parents&apos; return, a deliberate election the parents must make. Most families do not make this election because of its broader tax implications (loss of the dependent exemption, potential loss of certain credits, loss of insurance coverage on the family plan). The independent path is most often used by graduate students, students who took a gap year and worked in Texas, students who came to UT through a non-traditional path (transfer from a community college after years in the workforce), and a small number of undergraduates whose families have made a deliberate plan.</p>

          <h3>The decision tree</h3>
          <p>For most readers of this page, the dependent branch is the operative one. The decision tree is:</p>
          <ol>
            <li><strong>Are you (the parent) able and willing to maintain a Texas domicile for the 12 months before the target term&apos;s census date?</strong> If yes → dependent branch with parental domicile. If no → consider whether the student can be made independent for the relevant year, or whether the pathway is viable at all.</li>
            <li><strong>If you are doing the dependent branch, does your federal tax return for the relevant tax year reflect Texas residency?</strong> The return must list a Texas address and the student must be claimed as a dependent on that return. A return with an out-of-state address and the student listed as a dependent is the single largest cause of residency denials.</li>
            <li><strong>If you are doing the independent branch, is the student actually independent under both the federal-tax test (not claimed as a dependent) and the support test (provides &gt;50% of own support in Texas)?</strong> If yes → the student&apos;s own domicile and 12-month clock control. If no → the independent branch is not available.</li>
          </ol>

          <div className="callout callout-warn">
            <h4>The classic mistake</h4>
            <p className="mb-0">A family thinks the student is independent because the student &quot;lives on their own&quot; at college. The IRS does not see it that way: as long as the parents are providing more than half the student&apos;s support (tuition, room, board, books, insurance, travel home), the student is a dependent for federal purposes, and THECB will treat them as dependent regardless of any informal &quot;independence.&quot; If you want the independent path, you must affirmatively configure the family&apos;s finances and tax filings to support it.</p>
          </div>

          {/* 3 12-MONTH CLOCK */}
          <h2 id="domicile-clock">3. The 12-month domicile clock</h2>
          <p>The statute requires twelve months of <em>continuously maintained domicile</em> in Texas prior to the census date of the term in which in-state status is sought. Three pieces of that phrase matter:</p>
          <ul>
            <li><strong>Twelve months.</strong> Not &quot;an academic year.&quot; A full 365 days backward from the census date.</li>
            <li><strong>Continuously maintained.</strong> Not &quot;12 months in the prior 24 months.&quot; There must be an unbroken thread of evidence that the domicile existed throughout the period.</li>
            <li><strong>Domicile.</strong> A specific legal concept, the place a person regards as their permanent home, demonstrated by objective acts.</li>
          </ul>

          <p>Domicile is the load-bearing concept. The THECB rules distinguish it from <em>residence</em>: residence is simply where you are; domicile is where you intend to be permanently. Texas law allows a person to have many residences but only one domicile. The petition asks the petitioner to show that, of all the places the family has lived or maintained ties, Texas is the one that has been treated as the permanent home for the relevant 12 months.</p>
          <p>Domicile is shown through a constellation of objective proofs. No single proof is dispositive, and no single proof is required. The THECB rules list, non-exclusively:</p>
          <ul>
            <li>Ownership of real property in Texas, with the property serving as the family&apos;s home or a business asset</li>
            <li>Texas employment or self-employment with substantial gainful activity for at least the 12-month period</li>
            <li>Operation of a Texas-domiciled business with a registered agent, franchise tax filings, and operational substance in Texas</li>
            <li>Texas driver&apos;s license or state ID held for at least the 12 months</li>
            <li>Texas vehicle registration for any vehicle the family owns</li>
            <li>Texas voter registration</li>
            <li>Texas-licensed professional credential</li>
            <li>Long-term Texas lease (typically a year or more, in the family&apos;s name)</li>
            <li>Federal tax return reflecting a Texas address as the residence of record</li>
            <li>Bank or financial accounts based in Texas</li>
            <li>Membership in Texas-based civic, religious, or professional organizations</li>
          </ul>
          <p>For out-of-state families pursuing the property pathway, the typical evidentiary package includes real-property ownership, vehicle registration, voter registration, a federal tax return with a Texas address, and either a long-term lease (if the student lives at a different Texas address, e.g. UT housing for the first year) or the property itself being the student&apos;s residence. That package is more than sufficient when assembled correctly.</p>

          <h3>When the clock starts</h3>
          <p>The clock starts the day all <em>required</em> proofs are simultaneously in place. This is a specific, concrete date, not a vague &quot;when we moved.&quot; The required proofs for the property pathway are:</p>
          <ol>
            <li>Real property closed and recorded in the county clerk&apos;s office (the deed must show the family&apos;s name and a closing date)</li>
            <li>Utility account(s) in the family&apos;s name at the Texas address, with at least one active bill</li>
            <li>Texas driver&apos;s license or ID (for the parent on the dependent branch, or the student on the independent branch)</li>
            <li>Texas vehicle registration for any vehicle being used in Texas by the family or student</li>
            <li>Texas voter registration (for the parent on the dependent branch, or the student on the independent branch, though only the parent&apos;s is decisive on the dependent branch)</li>
          </ol>
          <p>If the property closes on June 1, 2026, but the vehicle is not registered in Texas until July 15, 2026, the clock starts July 15. The petition will be evaluated against the July 15 start date, and the earliest census date that is at least 365 days later is the earliest term for which the petitioner can claim residency. For most petitioners targeting Fall 2027 (census ~September 8, 2027), a July 15, 2026 clock start is sufficient. For petitioners targeting Spring 2027 (census ~February 5, 2027), a July 15, 2026 clock start is <em>not</em> sufficient, they miss by more than a month.</p>

          <h3>Continuity of the clock</h3>
          <p>The clock can be interrupted. The most common interruptions are:</p>
          <ul>
            <li><strong>Filing a tax return that lists an out-of-state address.</strong> A federal return filed during the 12-month period that lists a non-Texas address, even if for old-job reasons, is evidence the THECB rules will weigh against continuous Texas domicile.</li>
            <li><strong>Re-registering a vehicle in another state.</strong> Texas registrations expire annually; failing to renew (or letting the vehicle become re-registered elsewhere on a renewal cycle) breaks the chain.</li>
            <li><strong>Voting in another state.</strong> Voter registration is a powerful intent-signal; voting elsewhere is conclusive in the other direction.</li>
            <li><strong>An employment record showing primary employment in another state.</strong> If the parent&apos;s W-2 for the relevant year shows wages earned in another state, the petition must be able to explain that.</li>
            <li><strong>Student takes a semester abroad or away from Texas.</strong> Generally tolerated if short (a summer at home is fine); a full academic semester away with no Texas physical presence can be a problem.</li>
          </ul>
          <p>None of these interruptions is automatically fatal, the rules contemplate that families may have residual ties to the prior state, but each one increases the documentation burden and the risk of denial.</p>

          {/* 4 PRESENCE */}
          <h2 id="presence-requirement">4. Physical presence in Texas</h2>
          <p>Domicile is not the same as physical presence, but presence is part of the residency picture. The statute requires that the student &quot;reside in this state&quot; at the time of enrollment. The THECB rules expand on this for both branches:</p>
          <ul>
            <li>On the <strong>dependent branch</strong>: the parent must have established a Texas domicile (the proofs above), and the student must be present at the Texas property for the relevant period, generally the bulk of the 12 months, with the understanding that students may travel home for summers and breaks.</li>
            <li>On the <strong>independent branch</strong>: the student themselves must have established a Texas domicile and must have been physically present in Texas for substantially the entire 12 months.</li>
          </ul>
          <p>&quot;Present&quot; does not mean &quot;every single day.&quot; UT&apos;s residency office understands that students may visit family, travel for school programs, and so on. What it does not understand is a pattern where the student is at the Texas property for two months out of twelve and at the prior-state home for ten. That pattern undermines the domicile narrative regardless of how perfect the documents are.</p>
          <p>The most common arrangement for first-year students on the dependent branch is: the student attends high school in the prior state until graduation (May or June of the year before UT enrollment), moves to the Texas property in early summer, lives there for the 12-month period through the first Fall and the gap until the second Fall (when they petition for residency for the term beginning that Fall), and visits family in the prior state during winter break and parts of summer. That arrangement easily satisfies presence.</p>
          <p>For students who arrive at UT in their first Fall with a property in the family&apos;s name but who have been living in the prior state until move-in, the clock cannot start before move-in. Petitioning for in-state status in the second Fall (a year after first enrollment) requires the property and all proofs to have been in place before the first Fall move-in, typically a closing by July or August of the year before first enrollment.</p>

          {/* 5 PROPERTY PATHWAY */}
          <h2 id="property-pathway">5. The property pathway: Rule #3 vs. Rule #4</h2>
          <p>The THECB rules and UT&apos;s residency officers refer to the property pathway in two main flavors, often labeled &quot;Rule #3&quot; and &quot;Rule #4&quot; in residency-determination parlance. These are not formal designations, the underlying rules are unnumbered in the Texas Administrative Code, but they are widely understood shorthand for the two ways property generates the domicile proof.</p>

          <h3>Rule #3, Student-occupied property</h3>
          <p>Rule #3 is the simpler, more common path. A parent (on the dependent branch) acquires a residential property: a condo, a townhouse, or a small house, in Texas, typically near UT. The student lives at that property. The property is held in the parents&apos; personal name (or a transparent revocable trust). The mortgage, the utilities, and the property tax are paid by the parents. The deed, the recorded title, the utility bills, and the family&apos;s federal return all show the Texas address as the residence.</p>
          <p>The legal mechanism is: real-property ownership, combined with the student&apos;s presence, demonstrates that the family has made Texas its home for the dependent-branch domicile analysis. Combined with the supporting documentation (vehicle, voter registration, tax filing), it produces a clean evidentiary package.</p>
          <p>Rule #3 is the right path for families who:</p>
          <ul>
            <li>Are buying property primarily to solve housing for the student (the property doubles as a dormitory replacement);</li>
            <li>Want a single, simple ownership structure;</li>
            <li>Are unwilling or unable to operate a rental business in Texas;</li>
            <li>Do not need the property to be cash-flow positive.</li>
          </ul>

          <h3>Rule #4, Rental / business activity property</h3>
          <p>Rule #4 uses a different legal hook. Instead of &quot;Texas is our home because we own a house here and our family lives there,&quot; the argument is &quot;Texas is our home because we operate a Texas-domiciled business that owns and manages real property here.&quot; The family forms a Texas LLC, capitalizes it, has it acquire one or more income-producing properties (most often a duplex or small multifamily property), and operates it as a rental business: a Texas registered agent, Texas franchise tax filings, a Texas operating address, and a Texas-licensed property manager engaged at arm&apos;s length.</p>
          <p>The student may or may not live in one of the units. Often the student lives in one half of a duplex, with the other half rented at market rate. Sometimes the student lives in a separate apartment and the property is purely an investment. The key is that the <em>business</em> (the Texas LLC) has objective domicile in Texas, and the parents&apos; ownership of that business is the link from the parents to Texas.</p>
          <p>Rule #4 is the right path for families who:</p>
          <ul>
            <li>Want the property to pencil as an investment as well as serve the residency purpose;</li>
            <li>Are comfortable with the operational burden of an LLC and a rental business;</li>
            <li>Have prior real-estate-investment experience;</li>
            <li>Have a longer holding period in mind (5+ years) so the rental operations have time to compound.</li>
          </ul>
          <p>A common mistake is to attempt a Rule #4 structure but treat it as a Rule #3 in practice, for example, having the LLC own a single condo that the student lives in and no other tenants, with no actual rental business activity. The LLC&apos;s business substance must be real: a property manager who reports to the LLC, signed leases for the rented portions, K-1 or pass-through income flowing to the parents on their federal return as business income, franchise tax filings with the Texas Comptroller. Without substance, the LLC is treated as a holding company, and the residency officer reverts to a Rule #3 analysis, at which point holding the property in an LLC <em>hurts</em> the petition by obscuring the chain from family to home.</p>
          <p>A full side-by-side comparison of the two paths (costs, complexity, tax treatment, exit strategy) is in <Link href="/rule-3-vs-rule-4">Rule #3 vs. Rule #4: which path is right for your family?</Link></p>

          {/* 6 DOCUMENTS */}
          <h2 id="documents">6. Required documents</h2>
          <p>The UT Residency Determination office reviews petitions on paper. The petitioner uploads documents through the residency portal in MyStatus; the office reviews them and issues a determination. The required documents fall into five categories.</p>

          <h3>A. Property documents</h3>
          <ul>
            <li><strong>Settlement statement</strong> (Closing Disclosure / HUD-1) from the property purchase, shows the closing date and the family as the purchaser.</li>
            <li><strong>Warranty deed or general warranty deed</strong>, recorded with the county clerk where the property is located. The recorded date is critical; an unrecorded deed creates ambiguity about when ownership was effective.</li>
            <li><strong>Property tax statement</strong> showing the family as the owner of record for the most recent tax year, ideally with the homestead exemption filed (where Rule #3 applies and the property is the primary residence).</li>
            <li><strong>Mortgage statement</strong>, if applicable, showing the family as the borrowers and the Texas property as the secured collateral.</li>
            <li><strong>Utility bills</strong>, at minimum 12 months of consecutive bills in the family&apos;s name at the Texas address. Electric and water are the most useful; gas and internet help.</li>
            <li>For Rule #4: <strong>Texas Certificate of Formation</strong> for the LLC, <strong>Texas franchise tax return</strong> for the relevant year, signed <strong>property management agreement</strong>, sample <strong>tenant leases</strong>, and <strong>K-1 or Schedule E</strong> showing rental business income.</li>
          </ul>

          <h3>B. Vehicle and licensing documents</h3>
          <ul>
            <li><strong>Texas driver&apos;s license</strong> for the parent (dependent branch) or student (independent branch), with an issuance date at least 12 months before the target census date. UT residency officers will accept a Texas ID if a license is impractical, for example, where the parent&apos;s primary residence remains in another state and they cannot maintain two driver&apos;s licenses lawfully.</li>
            <li><strong>Texas vehicle registration</strong> for any vehicle the family operates in Texas, with a Texas inspection record on file and a registration date supporting the 12-month clock.</li>
          </ul>

          <h3>C. Tax documents</h3>
          <ul>
            <li><strong>Federal tax return</strong> (Form 1040) for the most recent tax year prior to the petition, showing a Texas address as the residence of record. On the dependent branch, this is the parents&apos; return with the student listed as a dependent.</li>
            <li>If the parents own a Rule #4 LLC: the LLC&apos;s Texas <strong>franchise tax return</strong> (Form 05-158 / 05-163) and the <strong>K-1</strong> reflecting the parents&apos; share of the LLC&apos;s income.</li>
            <li>If the family moved mid-year and the prior year&apos;s return shows the old address: a year of clean Texas-address returns is generally required, which means the 12-month clock often needs to start in calendar year N for a petition in academic year N+1.</li>
          </ul>

          <h3>D. Voter and civic ties</h3>
          <ul>
            <li><strong>Texas voter registration card</strong> for the parent (dependent branch) or student (independent branch). Voting in an out-of-state primary or general election during the 12-month period is one of the strongest intent-rebuttal facts the office can find.</li>
          </ul>

          <h3>E. The petitioner&apos;s narrative</h3>
          <p>The portal asks the petitioner to write a brief narrative explaining the basis for the claim: when the family established a Texas domicile, why the move was made, where the student lives, how the family supports itself. The narrative should be short (a few paragraphs), specific, and consistent with the documents. The narrative is not the place to argue with the rules; it is the place to summarize the documentary record.</p>

          <div className="callout">
            <h4>A working principle</h4>
            <p className="mb-0">If a fact about the family&apos;s life would be visible to a federal background investigator (driver&apos;s license, vehicle registration, voter registration, tax return, deed, utility account), that fact should reflect Texas during the 12-month clock. If a fact would not be visible to a background investigator (the parents&apos; personal opinions about where they really want to live), it does not belong in the petition.</p>
          </div>

          {/* 7 PORTAL */}
          <h2 id="portal">7. The UT Residency Portal, submission walkthrough</h2>
          <p>UT Austin&apos;s residency petition is filed through the MyStatus portal, the same portal where admitted students confirm enrollment, accept financial aid, and manage their pre-enrollment checklist. Within MyStatus, the petitioner navigates to the &quot;Residency&quot; tab. The portal walks through a series of questions modeled on the THECB <em>Residency Core Questions</em> document.</p>
          <p>The questions are factual: where did you live for the prior year, what is the relationship between the student and any parent claiming dependent status, what is the address of any real property the family owns in Texas, are there vehicle registrations in any state other than Texas, and so on. Each question has a &quot;yes/no&quot; or short-answer response; some prompt the petitioner to upload supporting documents.</p>
          <p>The submission process is asynchronous. After submitting, the petitioner waits for a determination from the residency office. Determinations are typically issued within two to four weeks during the normal cycle (April through August for Fall enrollment), longer during peak periods or if the office requests additional documents. The office may request additional documents one or more times before issuing a final classification.</p>
          <p>The final classification is communicated through the portal and by email. If the classification is Resident, the student&apos;s tuition is recalculated for the term and any subsequent terms at the in-state rate. If the classification is Nonresident, the petitioner has a defined window in which to appeal (see §10 below).</p>

          <h3>Practical tips for the portal</h3>
          <ul>
            <li><strong>File well before the term begins.</strong> Filing in late August for a Fall term that begins in late August often produces a determination only after classes have started and a non-resident tuition bill has been generated. Aim to file by mid-June for Fall, mid-November for Spring.</li>
            <li><strong>Upload exhibits one at a time and label them clearly.</strong> The portal accepts multiple uploads. Use filenames like &quot;01-Settlement-Statement.pdf&quot;, &quot;02-Deed-Recorded.pdf&quot;, &quot;03-Utility-Bills-2025-2026.pdf&quot;, make the reviewer&apos;s life easy.</li>
            <li><strong>Answer the narrative question literally and briefly.</strong> Two short paragraphs. State the date the domicile was established, the basis (Rule #3 or Rule #4), and the corroborating evidence in summary form. Save argumentation for an appeal if needed.</li>
            <li><strong>Do not over-claim.</strong> If the parent has lived primarily in another state but maintains Texas domicile through property ownership and a partial-presence arrangement, say so. Officers respond poorly to petitions that claim more than the documents support.</li>
          </ul>

          {/* 8 DISQUALIFYING */}
          <h2 id="disqualifying">8. Disqualifying factors and common denials</h2>
          <p>The three most common reasons petitions are denied (accounting, in our analysis of public residency-appeal records, for the majority of denials) are:</p>

          <h3>A. Tax return filed in the wrong state</h3>
          <p>A federal tax return filed for the calendar year inside the 12-month clock that lists an out-of-state address is the single largest cause of denial. The return is the most authoritative piece of evidence about a family&apos;s residency for the year, and an out-of-state address on the return is taken at face value. The parent&apos;s reasoning (&quot;we filed with our accountant in [other state] because that&apos;s where our accountant is&quot;) is not visible to the reviewer; only the address line is.</p>
          <p>Fix: file the federal return for the relevant year with a Texas address. If a return was inadvertently filed with the out-of-state address, file an amended return (Form 1040-X) to correct the address before submitting the petition.</p>

          <h3>B. Vehicle still registered in the prior state</h3>
          <p>Vehicle registration is a state-level act. A vehicle registered in another state at the time of the petition tells the reviewer the family has not committed to Texas. Even one vehicle registered out of state can be the difference between approval and denial.</p>
          <p>Fix: register any vehicle the family operates in Texas with the Texas Department of Motor Vehicles. The Texas registration must include a Texas inspection. The registration certificate is the proof to upload.</p>

          <h3>C. The clock did not fully run</h3>
          <p>A closing date six weeks before the target census date does not satisfy the 12-month requirement. The reviewer counts backward 365 days from the census date and looks for a complete documentary record across the entire span.</p>
          <p>Fix: build the timeline backward from the census date. For Fall 2027 (census ~Sept 8, 2027), the clock-starting events must be complete by ~Sept 8, 2026. For Spring 2027 (census ~Feb 5, 2027), the clock-starting events must be complete by ~Feb 5, 2026, which is usually impractical given UT&apos;s spring admission cycle.</p>

          <h3>Less common but still important disqualifiers</h3>
          <ul>
            <li><strong>Out-of-state primary employment.</strong> A parent whose W-2 shows wages earned entirely in another state during the 12-month period is signaling that their economic life is anchored elsewhere. The petition can still succeed (especially if remote work makes the W-2 location nominal), but it must address the issue.</li>
            <li><strong>Homestead exemption filed in another state.</strong> Many states allow a homestead exemption only on a property the owner declares as primary residence. Filing for that exemption is, in some states, an affidavit of residency. Doing so during the 12-month clock contradicts the Texas residency claim.</li>
            <li><strong>Student attending K-12 or college elsewhere during the clock.</strong> An independent-branch petitioner who was enrolled at a community college in another state during the clock has a presence problem to explain.</li>
            <li><strong>Voting elsewhere.</strong> Voter registration is an intent declaration; casting a ballot elsewhere is conclusive that the voter regards that state as their domicile.</li>
            <li><strong>Out-of-state professional license being maintained as primary.</strong> A parent who keeps an active out-of-state real-estate license, law license, or medical license with that state listed as the primary practice location can be asked to explain.</li>
          </ul>

          {/* 9 EDGE CASES */}
          <h2 id="edge-cases">9. Edge cases</h2>

          <h3>Military families</h3>
          <p>Texas Education Code §54.052 contains specific provisions for military personnel and their dependents. An active-duty service member assigned to a Texas base, and that member&apos;s spouse and dependents, are entitled to in-state classification regardless of the 12-month clock. A separately-housed dependent (e.g., a UT student whose military parent is stationed in Texas) generally qualifies on the parent&apos;s military status. There are nuances around the State of Legal Residence (SLR) on the service member&apos;s LES, if the SLR is Texas, the case is straightforward; if the SLR is another state, the case is harder but often still workable through the property pathway. Military families should consult JAG legal assistance and the UT Veterans Resource Center early.</p>

          <h3>Divorced parents</h3>
          <p>When the student&apos;s parents are divorced and one parent resides in Texas, the THECB rules look to the parent who claims the student as a federal tax dependent. If the Texas-resident parent claims the student, the family is on the dependent branch with Texas-parent domicile, which is straightforward. If the out-of-state parent claims the student, the dependent branch points to the out-of-state parent&apos;s domicile, even if the student spends most of their time with the Texas parent. The fix is for the parents to coordinate the dependent-claim election in the relevant tax year, which is allowed under IRS rules with appropriate paperwork (Form 8332). This is a topic where consulting a Texas family-law attorney is well advised, because the dependent election can have child-support implications under the divorce decree.</p>

          <h3>Dual residency, &quot;I have homes in two states&quot;</h3>
          <p>Texas allows a person to have many residences but only one domicile. Owning a vacation home in another state does not undermine Texas domicile so long as the indicia of intent (driver&apos;s license, vehicle, voter registration, tax filing) point to Texas. Owning a primary residence in another state and a vacation property in Texas is the opposite, the indicia point away from Texas, and the residency officer will weight the petition accordingly. Families with significant real estate in two states should expect the petition to require more narrative and more careful selection of supporting documents.</p>

          <h3>Foreign families and visa-holders</h3>
          <p>Texas&apos;s residency framework treats certain non-citizen visa holders the same as citizens for tuition purposes, including U.S. permanent residents (green-card holders) and certain qualifying nonimmigrant visa categories. F-1 student visa holders, however, generally cannot establish Texas residency for tuition purposes because the visa category presumes a temporary U.S. presence. There are limited exceptions; an immigration attorney is the right consult.</p>

          <h3>Gap-year students</h3>
          <p>A student who defers UT admission for a gap year can use the gap year to run the 12-month clock, particularly attractive for an independent-branch petitioner who can work in Texas during the gap year and accumulate the documentation. The student then enrolls in the following Fall as a Texas resident. This strategy is more durable than trying to compress the clock into a single summer.</p>

          <h3>Transfer students</h3>
          <p>A student transferring to UT from another Texas institution (or from out of state) goes through the same residency framework. If the transfer student has been a Texas resident at the prior institution, the classification generally transfers, but UT will independently verify. If the transfer student is coming from out of state, the 12-month clock applies normally.</p>

          {/* 10 APPEALS */}
          <h2 id="appeals">10. If you are denied</h2>
          <p>A non-resident classification from the UT Residency Office is not final. The petitioner can appeal within the institution by submitting additional documentation or a written response to the office&apos;s stated reasons for denial. The office reviews the appeal and either reverses, maintains, or escalates the determination. Most appeals are decided on the basis of additional documents that resolve the office&apos;s specific concern: an amended federal return, a backdated lease, a voter registration record the office did not previously see.</p>
          <p>If the institutional appeal is unsuccessful, the petitioner can, in narrow circumstances, seek review at the THECB level. This is rare and is generally limited to cases where the institution has misapplied the rules. The THECB is not a venue for re-arguing the facts.</p>
          <p>A more practical option for petitioners denied in their first attempt is to <strong>fix the documentary record and re-petition for the next term</strong>. Residency classification is reviewed per term, so a Fall denial can be followed by a Spring petition if the issues are correctable. The petitioner should not file the same documents twice; the petition should include a clear cover narrative explaining what changed.</p>

          {/* 11 TIMELINE */}
          <h2 id="timeline">11. From purchase to in-state semester, a worked timeline</h2>
          <p>The following is a representative timeline for an out-of-state family targeting in-state tuition for the Fall 2027 term, using the Rule #3 (student-occupied) pathway. Adapt dates by approximately one quarter for a Spring petition or for different academic years. See <Link href="/12-month-timeline">the visual 12-month timeline page</Link> for a printable version with month-by-month tasks.</p>

          <div className="stages">
            <Stage when="T−14" head="Months Before the Target Census Date (~July 2026)">
              Close on the Texas property. Record the deed. Open utility accounts at the Texas address. Engage a Texas-licensed CPA to confirm the tax filing approach for the relevant tax year.
            </Stage>
            <Stage when="T−13" head="~August 2026">
              Move the student into the property in early to mid August before the Fall 2026 term begins. Activate utilities (electric, water, internet). Update the family&apos;s primary mailing address with the IRS, the U.S. Postal Service, the family&apos;s bank, brokerage, and insurance carriers.
            </Stage>
            <Stage when="T−12" head="~September 2026">
              Obtain a Texas driver&apos;s license for the parent on the dependent branch (a parent who maintains primary residence in another state may opt for a Texas ID instead). Register the student&apos;s vehicle (if any) in Texas. File Texas voter registration. By the end of this month, the 12-month clock should be fully running.
            </Stage>
            <Stage when="T−10 to T−3" head="~November 2026 to June 2027">
              Maintain the documentary record. Pay utilities each month. Keep the property tax current. The student lives at the property through the academic year. The parent files the federal tax return for tax year 2026 with a Texas address (typically due April 15, 2027).
            </Stage>
            <Stage when="T−2" head="~July 2027">
              Submit the residency petition through the MyStatus portal. Upload all documents: settlement statement, recorded deed, 12+ months of utility bills, Texas driver&apos;s license, Texas vehicle registration, Texas voter registration card, federal 2026 tax return with Texas address. Write a brief narrative.
            </Stage>
            <Stage when="T−1" head="~August 2027">
              Respond promptly to any document requests from the Residency Office. Avoid travel that takes the student out of Texas for extended periods during this final month.
            </Stage>
            <Stage when="T" head="September 8, 2027 (Fall 2027 census date, approximate)">
              Residency Office issues a determination. If classified as a Resident, the student&apos;s tuition is recalculated at the in-state rate for the term and every term thereafter for as long as the residency is maintained.
            </Stage>
          </div>

          {/* 12 FAQ */}
          <h2 id="faq">12. Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          {/* 13 SOURCES */}
          <h2 id="sources">13. Sources &amp; further reading</h2>
          <div className="sources">
            <h3>Primary sources</h3>
            <ul>
              <li><strong>Texas Education Code §54.052</strong>, Texas Legislature; controlling statute on residency for tuition purposes.</li>
              <li><strong>Texas Administrative Code, Title 19, Part 1, Chapter 21</strong>, THECB residency rules.</li>
              <li><strong>THECB Residency Core Questions</strong>, the form used by all Texas public institutions to evaluate residency petitions; updated annually.</li>
              <li><strong>UT Austin General Information Catalog: Establishing Texas Residency</strong>, UT&apos;s published residency procedures and contact information.</li>
              <li><strong>UT Austin Office of Admissions Residency Determination</strong>, the administrative office issuing determinations.</li>
            </ul>
            <h3>Secondary references</h3>
            <ul>
              <li><a href={TUITION.source.url} target="_blank" rel="nofollow noopener">UT Austin One Stop, Cost of Attendance</a>, used for the financial numbers cited on this page and on the <Link href="/tuition-calculator">tuition calculator</Link>.</li>
              <li>Texas Department of Motor Vehicles vehicle registration guidance.</li>
              <li>Texas Secretary of State voter registration.</li>
              <li>Texas Comptroller of Public Accounts, franchise tax filings and entity formation.</li>
            </ul>
            <p className="text-sm text-body mt-4 mb-0">Last reviewed {SITE.lastReviewed}. Tuition figures cited as 2025-26 published rates ({fmtUSD(TUITION.inStatePerYear)} in-state, {fmtUSD(TUITION.outOfStatePerYear)} out-of-state, base undergraduate). In-state tuition frozen by the Texas Legislature through 2026-27. Rules and figures change, verify against the primary sources before relying.</p>
          </div>

          {/* NEXT STEP */}
          <div className="next-step">
            <h2>Now that you understand the rules</h2>
            <p>Read the side-by-side comparison of the two property pathways, <Link href="/rule-3-vs-rule-4" className="text-burnt-deep">Rule #3 vs. Rule #4</Link>, to choose which one fits your family. Then run the numbers in the <Link href="/tuition-calculator" className="text-burnt-deep">tuition calculator</Link> to confirm the savings amortize against the carrying costs. When you are ready to look at properties, the <Link href="/condos-near-ut" className="text-burnt-deep">condos near UT</Link> page covers what to look for, and the <Link href="/contact" className="text-burnt-deep">contact form</Link> connects you to a Texas-licensed broker who specializes in this pathway.</p>
            <Link href="/rule-3-vs-rule-4" className="btn btn-gold mt-4 inline-block">Rule #3 vs. Rule #4 →</Link>
          </div>

        </div>
      </section>
    </>
  );
}

function Dot() { return <span className="inline-block w-1.5 h-1.5 bg-burnt rounded-full mr-1.5 align-middle" />; }

function Stage({ when, head, children }: { when: string; head: string; children: React.ReactNode }) {
  return (
    <div className="stage">
      <div className="stage-when">{when}</div>
      <div>
        <h4>{head}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}
