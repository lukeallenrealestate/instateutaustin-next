import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, howToSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PrintButton } from '@/components/PrintButton';
import { SITE } from '@/lib/site';

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

function CheckItem({ children, tag, required }: { children: React.ReactNode; tag: 'R3' | 'R4' | 'BOTH'; required?: string }) {
  const tagColor = tag === 'BOTH' ? 'bg-navy text-paper' : tag === 'R3' ? 'bg-gold-pale text-navy' : 'bg-cream text-navy';
  return (
    <div className="grid grid-cols-[28px_1fr] gap-2.5 py-3.5 border-b border-border last:border-0 items-start">
      <div className="w-[18px] h-[18px] border-2 border-gold rounded-sm mt-1" />
      <div>
        {required && <strong className="text-navy">{required}</strong>}
        <span className={`inline-block text-[10px] font-bold tracking-wider uppercase ml-2 px-2 py-0.5 rounded ${tagColor}`}>{tag}</span>
        <p className="m-1 text-sm text-mid">{children}</p>
      </div>
    </div>
  );
}

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

      <header className="bg-navy-dk text-paper pt-20 pb-12">
        <div className="narrow">
          <p className="eyebrow !text-gold-lt">Operating document</p>
          <h1 className="!text-paper">The UT Austin Residency Checklist</h1>
          <p className="text-white/82 text-lg max-w-[60ch] mt-4">
            Every document UT&apos;s Residency Determination office may ask for, organized by path. Use this as a working punch list during the 12-month clock, not just at petition time.
          </p>
        </div>
      </header>

      <section className="py-12">
        <div className="narrow">

          <div className="bg-cream p-5 rounded-md flex flex-wrap gap-3 items-center justify-between mb-8 no-print">
            <p className="m-0 text-sm text-mid"><strong>Print this page.</strong> Use it as your working document.</p>
            <PrintButton />
          </div>

          <QuickAnswer label="The 60-second answer">
            A successful UT Austin residency petition includes a recorded deed, 12 months of utility bills, a Texas driver&apos;s license or ID, Texas vehicle registration, Texas voter registration, and a federal tax return showing a Texas address as the residence of record. Rule #3 (student-occupied) cases add property-tax and insurance documents. Rule #4 (rental LLC) cases add Texas Certificate of Formation, franchise tax filings, a property management agreement, tenant leases, and K-1s. The single largest cause of denial is a federal return filed with an out-of-state address during the relevant tax year.
          </QuickAnswer>

          <h2 className="mt-0">How to use this checklist</h2>
          <p>The UT Residency Office requires documentary proof of every claim in the petition. The checklist below mirrors what the residency portal will ask for. Items marked <strong>R3</strong> apply to Rule #3 (student-occupied) cases. Items marked <strong>R4</strong> apply to Rule #4 (rental LLC) cases. Items marked <strong>BOTH</strong> apply to all petitioners regardless of path.</p>
          <p>Get every &quot;BOTH&quot; item in place during the 12-month clock, not at the end. Petitions fail because families wait until the petition is being prepared to start gathering evidence. The checklist is a 365-day operating plan, not a punch list for one weekend.</p>

          <h2>Documents required for both paths</h2>
          <div className="bg-white border border-border rounded-lg p-7 my-6">
            <h3 className="mt-0 text-navy">Personal residency indicia (parent on dependent branch, student on independent branch)</h3>
            <CheckItem tag="BOTH" required="Texas Driver's License or Texas Identification Card">
              Issued by TxDPS. Issuance date must be at least 12 months before the target census date. If a parent cannot lawfully hold two driver&apos;s licenses, the Texas-resident parent for THECB purposes holds the Texas license; the other parent can hold a Texas ID.
            </CheckItem>
            <CheckItem tag="BOTH" required="Texas Vehicle Registration">
              For any vehicle the family or student operates in Texas. Registration includes a Texas safety inspection. Registration card and inspection sticker are the documents.
            </CheckItem>
            <CheckItem tag="BOTH" required="Texas Voter Registration Card">
              Register through the Texas Secretary of State or the county elections office. Critically, do not vote in another state during the 12-month window, that contradicts the registration.
            </CheckItem>
            <CheckItem tag="BOTH" required="Federal Tax Return with Texas Address">
              Form 1040 for the most recent completed tax year prior to the petition, with a Texas address as the residence of record. On the dependent branch, this is the parents&apos; return; the student must appear as a dependent on it.
            </CheckItem>
            <CheckItem tag="BOTH" required="Petition Narrative">
              Short (2-3 paragraph) written statement explaining: when the Texas domicile was established, the basis (Rule #3 or Rule #4), and a summary of the supporting documents.
            </CheckItem>
            <CheckItem tag="BOTH" required="Proof of Student's Texas Presence">
              Documentation showing the student was at the Texas address for the bulk of the 12-month period.
            </CheckItem>
          </div>

          <h2>Rule #3, Student-occupied property</h2>
          <div className="bg-white border border-border rounded-lg p-7 my-6">
            <h3 className="mt-0 text-navy">Property and occupancy documents</h3>
            <CheckItem tag="R3" required="Settlement Statement (Closing Disclosure / HUD-1)">From the property closing. Shows the closing date and the parents as the buyers.</CheckItem>
            <CheckItem tag="R3" required="Recorded Warranty Deed">Recorded with the county clerk where the property is located (Travis County for most UT-area properties). The recording date is the legal mark of ownership.</CheckItem>
            <CheckItem tag="R3" required="Property Tax Statement">From the Travis Central Appraisal District. Shows the family as the owner of record for the most recent tax year.</CheckItem>
            <CheckItem tag="R3" required="Homestead Exemption Application (if filed)">Filed with the county appraisal district when the property is the family&apos;s declared homestead. Reduces taxable value and caps annual assessment increases at 10%.</CheckItem>
            <CheckItem tag="R3" required="Mortgage Statement">If financed: a recent statement from the lender showing the family as borrower and the Texas property as secured collateral.</CheckItem>
            <CheckItem tag="R3" required="12+ Months of Consecutive Utility Bills">Electric (Austin Energy for most central-Austin properties), water (City of Austin Utilities), gas, internet. All in the family&apos;s name at the Texas address.</CheckItem>
            <CheckItem tag="R3" required="HOA Statement (if condo or planned community)">Most West Campus condos and many Austin townhomes have HOAs. The statement corroborates ownership and occupancy.</CheckItem>
            <CheckItem tag="R3" required="Insurance Declaration Page">Homeowner&apos;s insurance policy showing the family as named insured at the Texas address.</CheckItem>
          </div>

          <h2>Rule #4, Rental LLC</h2>
          <div className="bg-white border border-border rounded-lg p-7 my-6">
            <h3 className="mt-0 text-navy">Entity and operations documents</h3>
            <CheckItem tag="R4" required="Texas Certificate of Formation">Filed with the Texas Secretary of State. SOS form 205 (LLC) or equivalent.</CheckItem>
            <CheckItem tag="R4" required="LLC Operating Agreement">Internal governance document. Shows membership interests.</CheckItem>
            <CheckItem tag="R4" required="Texas Franchise Tax Public Information Report">Filed annually with the Texas Comptroller. For most rental LLCs the franchise tax is $0 due (under threshold), but the report must be filed to maintain good standing.</CheckItem>
            <CheckItem tag="R4" required="Registered Agent Designation">Confirmation of a Texas-physical-address registered agent.</CheckItem>
            <CheckItem tag="R4" required="Settlement Statement & Recorded Deed (LLC as Grantee)">Same as Rule #3 but the buyer/grantee is the LLC, not the parents personally.</CheckItem>
            <CheckItem tag="R4" required="Property Management Agreement">Signed contract between the LLC and a Texas-licensed property manager. Typically 8-10% of gross rents in fee.</CheckItem>
            <CheckItem tag="R4" required="Tenant Leases (Signed)">For each rented unit. 12-month residential lease in standard Texas format.</CheckItem>
            <CheckItem tag="R4" required="LLC Bank Statements">At least 6 consecutive months from a Texas-domiciled bank. Shows rent deposits and expense payments flowing through the LLC&apos;s account.</CheckItem>
            <CheckItem tag="R4" required="Form 1065 (Partnership Return) and K-1s">For multi-member LLCs: Form 1065 partnership return for the most recent tax year, with K-1s issued to each member. For single-member LLCs: Schedule E on the member&apos;s Form 1040.</CheckItem>
            <CheckItem tag="R4" required="Property Tax Statement (LLC as Owner)">From the county appraisal district. Homestead exemption is NOT available to LLC-owned properties.</CheckItem>
            <CheckItem tag="R4" required="Insurance Declaration (LLC as Insured)">Commercial / landlord insurance policy with the LLC as named insured.</CheckItem>
          </div>

          <h2>Common-mistake taxonomy: three failure modes</h2>

          <div className="bg-[#fbf2ef] border-l-4 border-danger p-6 my-6 rounded-r">
            <h3 className="text-danger mt-0">1. Documentation mistakes</h3>
            <div className="py-3 border-b border-dashed border-danger/20">
              <h4 className="text-navy m-0 mb-1.5 text-base">The federal tax return was filed with the prior-state address.</h4>
              <p className="text-mid text-sm m-0">Single most common cause of denial. The parents are still working with their old-state CPA, the CPA used the address on file, and the 1040 went to the IRS with the prior state&apos;s address line. A year later, the petition arrives at UT with a return showing a non-Texas address for the relevant tax year.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-gold text-sm"><strong>Fix:</strong> Before petitioning, file Form 1040-X with the Texas address. Allow 8-12 weeks for processing.</span>
            </div>
            <div className="py-3 border-b border-dashed border-danger/20">
              <h4 className="text-navy m-0 mb-1.5 text-base">The vehicle is still registered in the prior state.</h4>
              <p className="text-mid text-sm m-0">Vehicle registration is among the most legible domicile proofs. A vehicle the family uses in Texas but registered in the prior state contradicts the Texas-domicile claim.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-gold text-sm"><strong>Fix:</strong> Register every vehicle the family uses in Texas with TxDMV, including any vehicle the student drives.</span>
            </div>
            <div className="py-3">
              <h4 className="text-navy m-0 mb-1.5 text-base">Driver&apos;s license still shows the prior state.</h4>
              <p className="text-mid text-sm m-0">The license is one of the few proofs that is physically carried; if the parent has not transitioned to a Texas license/ID by petition time, the residency officer notices.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-gold text-sm"><strong>Fix:</strong> Obtain a Texas driver&apos;s license (or Texas ID where appropriate).</span>
            </div>
          </div>

          <div className="bg-[#fbf2ef] border-l-4 border-danger p-6 my-6 rounded-r">
            <h3 className="text-danger mt-0">2. Timing mistakes</h3>
            <div className="py-3 border-b border-dashed border-danger/20">
              <h4 className="text-navy m-0 mb-1.5 text-base">The 12-month clock did not fully run.</h4>
              <p className="text-mid text-sm m-0">Closing on the property six months before the target census date is not enough. The residency officer counts back 365 days from the census date and looks for a complete documentary record.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-gold text-sm"><strong>Fix:</strong> Build the timeline backward from the target census date. For Fall 2027 (census ~Sept 8, 2027), all clock-starting events must be complete by ~Sept 8, 2026.</span>
            </div>
            <div className="py-3 border-b border-dashed border-danger/20">
              <h4 className="text-navy m-0 mb-1.5 text-base">The vehicle was registered, then the registration lapsed.</h4>
              <p className="text-mid text-sm m-0">Texas vehicle registrations expire annually. A registration that ran from October 2025 to October 2026 covers most of the 12-month window, but if the renewal did not happen in October 2026, the residency officer can see a gap.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-gold text-sm"><strong>Fix:</strong> Calendar every renewal deadline and renew on time.</span>
            </div>
            <div className="py-3">
              <h4 className="text-navy m-0 mb-1.5 text-base">The federal return for the relevant year was filed too early to capture the Texas address.</h4>
              <p className="text-mid text-sm m-0">If the family closed on the Texas property in August 2026 but filed an early-2026 return in March 2026 with the old address, the officer may treat that return as the controlling year&apos;s evidence even though the move happened mid-year.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-gold text-sm"><strong>Fix:</strong> Plan the move to coincide with a clean tax-year break where possible.</span>
            </div>
          </div>

          <div className="bg-[#fbf2ef] border-l-4 border-danger p-6 my-6 rounded-r">
            <h3 className="text-danger mt-0">3. Tax filing mistakes</h3>
            <div className="py-3 border-b border-dashed border-danger/20">
              <h4 className="text-navy m-0 mb-1.5 text-base">Student claimed as dependent on a non-Texas return.</h4>
              <p className="text-mid text-sm m-0">On the dependent branch, the THECB looks for the dependent-claiming parent&apos;s domicile. If a divorced spouse in the prior state claims the student, the prior-state parent&apos;s domicile is what matters, and the Texas parent&apos;s pathway breaks.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-gold text-sm"><strong>Fix:</strong> Coordinate the dependent claim with the other parent. Form 8332 allows release of the claim.</span>
            </div>
            <div className="py-3 border-b border-dashed border-danger/20">
              <h4 className="text-navy m-0 mb-1.5 text-base">Rule #4 LLC reports no rental income.</h4>
              <p className="text-mid text-sm m-0">An LLC that owns a property but has no tenants, no rental income, and no expenses other than property tax is functionally a holding company. The &quot;operating a Texas-domiciled business&quot; argument fails.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-gold text-sm"><strong>Fix:</strong> Lease the property at fair market rent or wind down the LLC and transfer to personal name for a clean Rule #3 case.</span>
            </div>
            <div className="py-3">
              <h4 className="text-navy m-0 mb-1.5 text-base">Homestead exemption filed in another state during the 12-month clock.</h4>
              <p className="text-mid text-sm m-0">Florida, California, and several other states condition certain tax benefits on declaring the property a primary residence. Filing such a declaration during the 12-month window contradicts the Texas residency claim.</p>
              <span className="block mt-2 p-2.5 px-3 bg-paper border-l-[3px] border-gold text-sm"><strong>Fix:</strong> Withdraw the other-state homestead declaration before petitioning.</span>
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
            <Link href="/contact" className="btn btn-ghost mt-4 inline-block !text-paper !border-gold-lt">Ask about a gap →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
