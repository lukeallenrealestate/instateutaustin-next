import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, howToSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { ContactSection } from '@/components/ContactSection';
import { PageHero } from '@/components/PageHero';
import { PrintButton } from '@/components/PrintButton';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { Checklist, type ChecklistGroup } from '@/components/Checklist';
import { SITE } from '@/lib/site';

// Single source of truth for the interactive document checklist.
// Items render with tags (BOTH/R3/R4) and persist tick state in localStorage
// so a parent who comes back picks up exactly where they left off.
const CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    heading: 'Personal residency indicia (BOTH paths)',
    items: [
      { id: 'tx-dl', tag: 'BOTH', title: 'Texas Driver’s License or Texas ID', detail: 'Issued by TxDPS. Issuance date must be at least 12 months before the target census date.' },
      { id: 'tx-vehicle', tag: 'BOTH', title: 'Texas Vehicle Registration', detail: 'For any vehicle the family or student operates in Texas. Includes a Texas safety inspection.' },
      { id: 'tx-voter', tag: 'BOTH', title: 'Texas Voter Registration Card', detail: 'Register through the Texas Secretary of State or the county elections office. Do not vote in another state during the 12-month window.' },
      { id: 'fed-1040-tx', tag: 'BOTH', title: 'Federal Tax Return with Texas Address', detail: 'Form 1040 for the most recent completed tax year prior to the petition, with a Texas address as the residence of record. Single largest cause of denial when wrong.' },
      { id: 'narrative', tag: 'BOTH', title: 'Petition Narrative', detail: '2-3 paragraph written statement explaining when the Texas domicile was established and summarizing the documentary record.' },
      { id: 'presence', tag: 'BOTH', title: 'Proof of Student’s Texas Presence', detail: 'Documentation showing the student was at the Texas address for the bulk of the 12-month period.' },
    ],
  },
  {
    heading: 'Rule #3 — Student-occupied property',
    items: [
      { id: 'r3-settlement', tag: 'R3', title: 'Settlement Statement (Closing Disclosure / HUD-1)', detail: 'From the property closing. Shows the closing date and the parents as the buyers.' },
      { id: 'r3-deed', tag: 'R3', title: 'Recorded Warranty Deed', detail: 'Recorded with the county clerk where the property is located. The recording date is the legal mark of ownership.' },
      { id: 'r3-prop-tax', tag: 'R3', title: 'Property Tax Statement', detail: 'From the county appraisal district. Shows the family as the owner of record for the most recent tax year.' },
      { id: 'r3-homestead', tag: 'R3', title: 'Homestead Exemption Application (if filed)', detail: 'Filed with the county appraisal district when the property is the family’s declared homestead.' },
      { id: 'r3-mortgage', tag: 'R3', title: 'Mortgage Statement', detail: 'If financed: a recent statement from the lender showing the family as borrower and the Texas property as secured collateral.' },
      { id: 'r3-utility-12', tag: 'R3', title: '12+ Months of Consecutive Utility Bills', detail: 'Austin Energy, City of Austin Utilities (water), gas, internet. All in the family’s name at the Texas address.' },
      { id: 'r3-hoa', tag: 'R3', title: 'HOA Statement (if condo or planned community)', detail: 'Corroborates ownership and occupancy. Most West Campus condos and Austin townhomes have HOAs.' },
      { id: 'r3-insurance', tag: 'R3', title: 'Insurance Declaration Page', detail: 'Homeowner’s insurance policy showing the family as named insured at the Texas address.' },
    ],
  },
  {
    heading: 'Rule #4 — Rental LLC',
    items: [
      { id: 'r4-cof', tag: 'R4', title: 'Texas Certificate of Formation', detail: 'Filed with the Texas Secretary of State. SOS form 205 (LLC) or equivalent.' },
      { id: 'r4-oa', tag: 'R4', title: 'LLC Operating Agreement', detail: 'Internal governance document. Shows membership interests.' },
      { id: 'r4-franchise', tag: 'R4', title: 'Texas Franchise Tax Public Information Report', detail: 'Filed annually with the Texas Comptroller. For most rental LLCs the tax is $0 due, but the report must be filed.' },
      { id: 'r4-registered-agent', tag: 'R4', title: 'Registered Agent Designation', detail: 'Confirmation of a Texas-physical-address registered agent.' },
      { id: 'r4-deed-llc', tag: 'R4', title: 'Settlement Statement & Recorded Deed (LLC as Grantee)', detail: 'Same as Rule #3 but the buyer/grantee is the LLC, not the parents personally.' },
      { id: 'r4-pma', tag: 'R4', title: 'Property Management Agreement', detail: 'Signed contract between the LLC and a Texas-licensed property manager. Typically 8-10% of gross rents.' },
      { id: 'r4-leases', tag: 'R4', title: 'Tenant Leases (Signed)', detail: 'For each rented unit. 12-month residential lease in standard Texas format.' },
      { id: 'r4-bank', tag: 'R4', title: 'LLC Bank Statements', detail: 'At least 6 consecutive months from a Texas-domiciled bank. Shows rent deposits and expense payments flowing through the LLC.' },
      { id: 'r4-1065-k1', tag: 'R4', title: 'Form 1065 (or Schedule E) and K-1s', detail: 'Partnership return for the most recent tax year, with K-1s issued to each member. Single-member LLCs use Schedule E.' },
      { id: 'r4-prop-tax-llc', tag: 'R4', title: 'Property Tax Statement (LLC as Owner)', detail: 'Homestead exemption is NOT available to LLC-owned properties.' },
      { id: 'r4-insurance-llc', tag: 'R4', title: 'Insurance Declaration (LLC as Insured)', detail: 'Commercial / landlord insurance policy with the LLC as named insured.' },
    ],
  },
];

const TITLE = 'UT Austin Residency Checklist (Every Document You Will Need)';
const DESCRIPTION = 'The complete document checklist for a UT Austin Texas residency petition. Rule #3 list, Rule #4 list, common-mistake taxonomy, and a printable version.';
const PATH = '/residency-checklist';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'How many documents does a typical successful petition include?', a: 'For a clean Rule #3 case: 8-12 documents. For a Rule #4 case: 14-20 documents because the entity layer adds Certificate of Formation, Operating Agreement, franchise tax filing, management agreement, leases, bank statements, and K-1s.' },
  { q: 'Should I submit everything at once or wait to see what they ask for?', a: 'Submit a complete package up front. The portal is designed to handle a comprehensive submission, and a full package shortens the review cycle.' },
  { q: 'What if I am missing one of the required documents?', a: 'Submit what you have and explain the gap in the narrative. The residency officer is more forgiving of acknowledged gaps than discovered ones.' },
  { q: 'How long does the petition review take?', a: 'Two to four weeks during the normal cycle (April through August for Fall enrollment). Longer during peak periods.' },
  { q: 'Can I get a pre-determination of whether my petition will succeed?', a: 'UT\'s office does not offer formal pre-determinations. A Texas-licensed attorney or specialized residency consultant can give a private opinion on the strength of a petition before submission.' },
];

const HOWTO_STEPS_R3 = [
  { name: 'Gather property documents', text: 'Settlement statement, recorded deed, property tax statement, 12 months of utility bills, HOA statement, insurance declaration.' },
  { name: 'Gather personal indicia', text: 'Texas DL/ID, vehicle registration, voter card, federal 1040 with Texas address.' },
  { name: 'Write the narrative', text: '2-3 paragraphs stating when the domicile was established and summarizing the documentary record.' },
  { name: 'Upload through the MyStatus portal', text: 'Label files clearly, in order: 01-Settlement, 02-Deed, 03-Utilities, and so on.' },
  { name: 'Respond to document requests', text: 'If the office requests additional documents, respond within the stated window.' },
];

export default function ChecklistPage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Residency Checklist', path: PATH },
      ])} />
      <Schema data={articleSchema({
        headline: TITLE,
        description: DESCRIPTION,
        path: PATH,
        datePublished: '2026-05-11',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={howToSchema({
        name: 'Assemble a UT Austin residency petition (Rule #3)',
        steps: HOWTO_STEPS_R3,
      })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="Operating document"
        title="The UT Austin Residency Checklist"
        lede={<>Every document UT&apos;s Residency Determination office may ask for, organized by path. Use this as a working punch list during the 12-month clock, not just at petition time.</>}
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <div className="bg-cream p-5 rounded-md flex flex-wrap gap-3 items-center justify-between mb-8 no-print">
            <p className="m-0 text-sm text-body"><strong>Print this page.</strong> Use it as your working document.</p>
            <PrintButton />
          </div>

          <QuickAnswer label="The 60-second answer">
            A successful UT Austin residency petition includes a recorded deed, 12 months of utility bills, a Texas driver&apos;s license or ID, Texas vehicle registration, Texas voter registration, and a federal tax return showing a Texas address as the residence of record. Rule #3 (student-occupied) cases add property-tax and insurance documents. Rule #4 (rental LLC) cases add Texas Certificate of Formation, franchise tax filings, a property management agreement, tenant leases, and K-1s. The single largest cause of denial is a federal return filed with an out-of-state address during the relevant tax year.
          </QuickAnswer>

          <AuthorBox blurb="Has assembled this exact document package for dozens of out-of-state families. The interactive version below saves your progress as you tick items off." />

          <h2 className="mt-0">How to use this checklist</h2>
          <p>The UT Residency Office requires documentary proof of every claim in the petition. The checklist below mirrors what the residency portal will ask for. Items marked <strong>R3</strong> apply to Rule #3 (student-occupied) cases. Items marked <strong>R4</strong> apply to Rule #4 (rental LLC) cases. Items marked <strong>BOTH</strong> apply to all petitioners regardless of path.</p>
          <p>Get every &quot;BOTH&quot; item in place during the 12-month clock, not at the end. Petitions fail because families wait until the petition is being prepared to start gathering evidence. The checklist is a 365-day operating plan, not a punch list for one weekend.</p>

          <h2>The interactive checklist</h2>
          <p>Tick items as you gather them. Your progress is saved in this browser; come back anytime and pick up where you left off.</p>
          <Checklist groups={CHECKLIST_GROUPS} storageKey="iua_residency_checklist_v1" />

          <h2>Common-mistake taxonomy: three failure modes</h2>

          <div className="bg-[#fbf2ef] border-l-4 border-danger p-6 my-6 rounded-r">
            <h3 className="text-danger mt-0">1. Documentation mistakes</h3>
            <div className="py-3 border-b border-dashed border-danger/20">
              <h4 className="text-ink m-0 mb-1.5 text-base">The federal tax return was filed with the prior-state address.</h4>
              <p className="text-body text-sm m-0">Single most common cause of denial. The parents are still working with their old-state CPA, the CPA used the address on file, and the 1040 went to the IRS with the prior state&apos;s address line. A year later, the petition arrives at UT with a return showing a non-Texas address for the relevant tax year.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-burnt text-sm"><strong>Fix:</strong> Before petitioning, file Form 1040-X with the Texas address. Allow 8-12 weeks for processing.</span>
            </div>
            <div className="py-3 border-b border-dashed border-danger/20">
              <h4 className="text-ink m-0 mb-1.5 text-base">The vehicle is still registered in the prior state.</h4>
              <p className="text-body text-sm m-0">Vehicle registration is among the most legible domicile proofs. A vehicle the family uses in Texas but registered in the prior state contradicts the Texas-domicile claim.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-burnt text-sm"><strong>Fix:</strong> Register every vehicle the family uses in Texas with TxDMV, including any vehicle the student drives.</span>
            </div>
            <div className="py-3">
              <h4 className="text-ink m-0 mb-1.5 text-base">Driver&apos;s license still shows the prior state.</h4>
              <p className="text-body text-sm m-0">The license is one of the few proofs that is physically carried; if the parent has not transitioned to a Texas license/ID by petition time, the residency officer notices.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-burnt text-sm"><strong>Fix:</strong> Obtain a Texas driver&apos;s license (or Texas ID where appropriate).</span>
            </div>
          </div>

          <div className="bg-[#fbf2ef] border-l-4 border-danger p-6 my-6 rounded-r">
            <h3 className="text-danger mt-0">2. Timing mistakes</h3>
            <div className="py-3 border-b border-dashed border-danger/20">
              <h4 className="text-ink m-0 mb-1.5 text-base">The 12-month clock did not fully run.</h4>
              <p className="text-body text-sm m-0">Closing on the property six months before the target census date is not enough. The residency officer counts back 365 days from the census date and looks for a complete documentary record.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-burnt text-sm"><strong>Fix:</strong> Build the timeline backward from the target census date. For Fall 2027 (census ~Sept 8, 2027), all clock-starting events must be complete by ~Sept 8, 2026.</span>
            </div>
            <div className="py-3 border-b border-dashed border-danger/20">
              <h4 className="text-ink m-0 mb-1.5 text-base">The vehicle was registered, then the registration lapsed.</h4>
              <p className="text-body text-sm m-0">Texas vehicle registrations expire annually. A registration that ran from October 2025 to October 2026 covers most of the 12-month window, but if the renewal did not happen in October 2026, the residency officer can see a gap.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-burnt text-sm"><strong>Fix:</strong> Calendar every renewal deadline and renew on time.</span>
            </div>
            <div className="py-3">
              <h4 className="text-ink m-0 mb-1.5 text-base">The federal return for the relevant year was filed too early to capture the Texas address.</h4>
              <p className="text-body text-sm m-0">If the family closed on the Texas property in August 2026 but filed an early-2026 return in March 2026 with the old address, the officer may treat that return as the controlling year&apos;s evidence even though the move happened mid-year.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-burnt text-sm"><strong>Fix:</strong> Plan the move to coincide with a clean tax-year break where possible.</span>
            </div>
          </div>

          <div className="bg-[#fbf2ef] border-l-4 border-danger p-6 my-6 rounded-r">
            <h3 className="text-danger mt-0">3. Tax filing mistakes</h3>
            <div className="py-3 border-b border-dashed border-danger/20">
              <h4 className="text-ink m-0 mb-1.5 text-base">Student claimed as dependent on a non-Texas return.</h4>
              <p className="text-body text-sm m-0">On the dependent branch, the THECB looks for the dependent-claiming parent&apos;s domicile. If a divorced spouse in the prior state claims the student, the prior-state parent&apos;s domicile is what matters, and the Texas parent&apos;s pathway breaks.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-burnt text-sm"><strong>Fix:</strong> Coordinate the dependent claim with the other parent. Form 8332 allows release of the claim.</span>
            </div>
            <div className="py-3 border-b border-dashed border-danger/20">
              <h4 className="text-ink m-0 mb-1.5 text-base">Rule #4 LLC reports no rental income.</h4>
              <p className="text-body text-sm m-0">An LLC that owns a property but has no tenants, no rental income, and no expenses other than property tax is functionally a holding company. The &quot;operating a Texas-domiciled business&quot; argument fails.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-burnt text-sm"><strong>Fix:</strong> Lease the property at fair market rent or wind down the LLC and transfer to personal name for a clean Rule #3 case.</span>
            </div>
            <div className="py-3">
              <h4 className="text-ink m-0 mb-1.5 text-base">Homestead exemption filed in another state during the 12-month clock.</h4>
              <p className="text-body text-sm m-0">Florida, California, and several other states condition certain tax benefits on declaring the property a primary residence. Filing such a declaration during the 12-month window contradicts the Texas residency claim.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-burnt text-sm"><strong>Fix:</strong> Withdraw the other-state homestead declaration before petitioning.</span>
            </div>
          </div>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Document set in hand?</h2>
            <p>If your checklist is complete and you are ready to start the property phase, the next read is the condo and neighborhood guide. If your checklist still has gaps, tell us what you are missing.</p>
            <Link href="/condos-near-ut" className="btn btn-gold mt-4 inline-block">Condos near UT →</Link>
            {' '}
            <Link href="/contact" className="btn btn-ghost mt-4 inline-block text-ink !border-burnt-deep">Ask about a gap →</Link>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-residency-checklist" />
    </>
  );
}
