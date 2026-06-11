import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { SITE } from '@/lib/site';

const TITLE = 'Rule #3 vs Rule #4: UT Residency Property Pathways';
const DESCRIPTION = 'Side-by-side comparison of the two property-based Texas residency pathways at UT Austin: Rule #3 (student-occupied) vs Rule #4 (rental LLC). Cost, complexity, taxes, exit strategy, risk.';
const PATH = '/rule-3-vs-rule-4';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Can I switch from Rule #3 to Rule #4 after closing?', a: 'Possibly. You can deed the property from personal name into an LLC, but the transfer may trigger transfer-tax events, may breach the mortgage\'s due-on-sale clause, and the residency narrative effectively restarts.' },
  { q: 'Can a Rule #4 LLC own multiple properties?', a: 'Yes. Many attorneys recommend a series LLC or separate LLCs per property for liability segregation, but for the residency analysis a single multi-property LLC is fine. The franchise tax filing is per entity, not per property.' },
  { q: 'Does it matter whether the property is in Austin proper or in a suburb?', a: 'Not for residency. For practical purposes, properties closer to UT are easier to rent (Rule #4) and easier to use as student housing (Rule #3).' },
  { q: 'What if I already own Texas property?', a: 'The 12-month clock may already be partially or fully run. If the supporting indicia (vehicle, voter registration, federal tax return) have aged into the 12-month window, you can petition immediately.' },
  { q: 'Can the parents qualify for an owner-occupied mortgage on a Rule #3 condo?', a: 'Sometimes. Some lenders offer second-home loans at owner-occupied rates if the property is intended as a regular family residence. The borrower must sign occupancy affidavits that they are truthful about.' },
  { q: 'Does a Rule #4 LLC need a separate bank account?', a: 'Yes. Commingling LLC funds with personal funds pierces the corporate veil and undermines the real-business narrative for residency purposes.' },
];

const COMPARE_ROWS: Array<[string, string, string]> = [
  ['Ownership structure', 'Parents\' personal name (or revocable family trust)', 'Texas LLC; parents own the LLC'],
  ['Typical property type', '1-bed or 2-bed condo, small house, townhouse', 'Duplex, fourplex, small multifamily; occasionally a SFR with a separate rental unit'],
  ['Typical price range (Austin)', '$325K-$650K', '$550K-$1.2M+'],
  ['Down payment (conventional)', '20% (owner-occupied loan may allow 5-10% if parent qualifies as occupant)', '25% minimum (investment-property loan)'],
  ['Interest rate spread', 'At-market (owner-occupied or second-home rate)', '0.5-1.0 percentage point higher (investment-property rate)'],
  ['Homestead exemption available', 'Yes (if the property is the family\'s declared homestead)', 'No (held by LLC, not natural person)'],
  ['Property tax (Austin)', '~2.0-2.3% of assessed value; homestead exemption caps annual increases at 10%', '~2.1-2.4%; no homestead cap; assessment increases not capped'],
  ['Annual franchise tax', 'None (no entity)', '$0 for "no tax due" (under threshold ~$2.47M revenue) but franchise return must be filed annually'],
  ['Federal tax treatment', 'Mortgage interest deduction (subject to limits); property tax deduction (SALT cap applies); no depreciation', 'Rental income/loss on Schedule E or 1065/1120-S; depreciation of building basis over 27.5 yrs; passive activity loss rules apply'],
  ['Required documentary record', 'Deed, utility bills, family residency proofs', 'All of the above plus: TX Certificate of Formation, franchise tax filings, registered agent, property management agreement, signed tenant leases, K-1s'],
  ['Residency officer narrative', '"The family owns and resides at the property; the student lives here and the family treats Texas as home."', '"The family operates a Texas-domiciled rental business; the parents\' ownership of the Texas business is their Texas domicile."'],
  ['Audit risk (residency office)', 'Low if documents are clean', 'Higher if the LLC lacks real business substance'],
  ['Audit risk (IRS)', 'Standard SALT / mortgage-interest issues; nothing unusual', 'Higher: passive activity loss limitations, hobby-loss arguments, related-party leasing'],
  ['Cash flow expectations', 'Net negative (no rental income, full carrying costs)', 'Often break-even or modestly positive once stabilized'],
  ['Operational burden', 'Low, pay bills, maintain the property', 'Moderate to high, leases, tenants, repairs, accounting; usually outsourced to a property manager for 8-10% of gross rents'],
  ['Exit liquidity', 'Resale through MLS; condo segment is liquid in West Campus / Hyde Park', 'Resale to investor or owner-occupant; multifamily resale can be slower'],
  ['Time to set up', 'Closing + ~30 days for utilities, DL, vehicle, voter', 'LLC formation 2-4 weeks + closing + ~30 days operational setup + 60-90 days to season the rental'],
];

export default function Rule3vs4Page() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Rule #3 vs Rule #4', path: PATH },
      ])} />
      <Schema data={articleSchema({
        headline: TITLE,
        description: DESCRIPTION,
        path: PATH,
        datePublished: '2026-05-11',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={faqPageSchema(FAQ)} />

      <header className="bg-paper pt-20 pb-12 border-b border-hairline">
        <div className="narrow">
          <p className="eyebrow">The choice</p>
          <h1 className="text-ink">Rule #3 vs. Rule #4: Which property pathway fits your family?</h1>
          <p className="text-body text-lg max-w-[60ch] mt-4">
            Two ways to use real property to satisfy the Texas residency requirement at UT Austin. They are not interchangeable. Picking the wrong one for your situation can cost a year of savings and tens of thousands of dollars.
          </p>
        </div>
      </header>

      <section className="py-12">
        <div className="narrow">
          <QuickAnswer label="The 60-second answer">
            <strong>Rule #3</strong> is the student-occupied property path: the family buys a condo or small house in the parents&apos; personal name, the student lives there, the family records Texas domicile through the property. Best for families whose primary goal is residency plus student housing. <strong>Rule #4</strong> is the rental/business activity path: the family forms a Texas LLC, the LLC buys a duplex or small multifamily, the rental business itself becomes the domicile proof. Best for investment-minded families with prior real-estate experience. Most out-of-state UT families pick Rule #3.
          </QuickAnswer>

          <h2>The two paths in one sentence each</h2>

          <div className="callout callout-rule mt-4">
            <h4>Rule #3, Student-occupied property</h4>
            <p className="mb-0">The family acquires a residential property (condo, townhouse, or small house), the student lives there, the property is held in the parents&apos; personal name, and the family treats it as the household&apos;s Texas home. <strong>Best for:</strong> families whose primary goal is residency + housing.</p>
          </div>

          <div className="callout callout-rule">
            <h4>Rule #4, Rental / business activity property</h4>
            <p className="mb-0">The family forms a Texas LLC, the LLC acquires a property (often a duplex or small multifamily), the property is operated as a real rental business with tenants, management, and franchise tax filings, and the LLC&apos;s Texas business activity becomes the domicile proof. <strong>Best for:</strong> families with prior investment-property experience who want the property to pencil as an investment as well.</p>
          </div>

          <h2>The legal hook for each path</h2>
          <p>The THECB Residency Rules permit the residency officer to find Texas domicile based on a constellation of objective acts. <strong>Rule #3</strong> leans on the family&apos;s act of acquiring and residing at Texas real property: the property and the student&apos;s presence at it become the central proof, with the supporting documentary record (vehicle, voter registration, tax filing) corroborating intent. <strong>Rule #4</strong> leans on the family&apos;s act of operating a Texas-domiciled business: the LLC, its franchise tax filings, its registered agent, its property-management arrangement, and the K-1 / Schedule E flowing to the parents&apos; federal return all establish that the family has substantive economic activity in Texas, with the property being the operational asset of that activity.</p>
          <p>Neither path is &quot;named&quot; in the THECB rules. The numbering comes from how residency officers and consultants have historically organized the analysis. The substance is what matters.</p>

          {/* DECISION MATRIX */}
          <div className="bg-cream p-7 rounded-lg my-9">
            <h3 className="mt-0">Decision matrix: pick the path that matches more rows</h3>
            <div className="grid md:grid-cols-2 gap-5 mt-4">
              <div className="bg-white p-6 rounded-md border-l-4 border-burnt">
                <h4 className="text-ink m-0 mb-2.5">Pick Rule #3 if…</h4>
                <ul className="text-sm m-0 pl-5">
                  <li>The property is primarily housing for your student</li>
                  <li>You do not want to run a rental business</li>
                  <li>You want the simplest evidentiary package</li>
                  <li>You expect to sell within ~5 years of graduation</li>
                  <li>You have no prior real-estate-investment experience</li>
                  <li>Your accountant does not already do business tax returns</li>
                  <li>You want the property to qualify for a homestead exemption</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-md border-l-4 border-burnt">
                <h4 className="text-ink m-0 mb-2.5">Pick Rule #4 if…</h4>
                <ul className="text-sm m-0 pl-5">
                  <li>The property is being acquired primarily as an investment</li>
                  <li>You are comfortable with LLCs, franchise tax, K-1s</li>
                  <li>You have a duplex, fourplex, or small multifamily in mind</li>
                  <li>You are holding 7+ years post-graduation</li>
                  <li>You want depreciation deductions to offset rental income</li>
                  <li>The market math actually pencils as a rental</li>
                  <li>You work with a CPA who handles entity-level returns</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Side-by-side comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse my-6 text-sm">
              <thead>
                <tr>
                  <th className="bg-cream text-ink p-3.5 text-left uppercase text-xs tracking-wide border-b border-hairline">Dimension</th>
                  <th className="bg-cream text-ink p-3.5 text-left uppercase text-xs tracking-wide border-b border-hairline">Rule #3, Student-Occupied</th>
                  <th className="bg-cream text-ink p-3.5 text-left uppercase text-xs tracking-wide border-b border-hairline">Rule #4, Rental LLC</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(([dim, r3, r4], i) => (
                  <tr key={i}>
                    <td className="p-3.5 border-b border-hairline bg-paper font-semibold text-ink align-top w-[180px]">{dim}</td>
                    <td className="p-3.5 border-b border-hairline align-top">{r3}</td>
                    <td className="p-3.5 border-b border-hairline align-top">{r4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Rule #3, student-occupied property, in detail</h2>
          <p>Rule #3 is the right choice for the majority of out-of-state families pursuing the UT residency pathway. The reasons are practical: most families are buying property to solve housing as well as residency, the documentary requirements map directly onto the household&apos;s natural records, and the residency officer&apos;s narrative is intuitive.</p>

          <h3>What the property looks like</h3>
          <p>The typical Rule #3 property in Austin is a 1- or 2-bedroom condo within walking or short-bike distance of campus. West Campus is the densest concentration of student-friendly condos in the $350K-$600K range, with HOA dues running $300-$800/month. Hyde Park has fewer condos but more small houses and townhomes in the $500K-$850K range. Downtown high-rises (the Austonian, Sienna, the Independent) are common Rule #3 holdings for families with higher budgets and a preference for amenities; HOA dues there are $700-$2,400+/month. For students who prefer a slightly longer commute, Mueller, East Austin, and South Lamar offer townhomes and condos at $400K-$700K with broader floor plans.</p>

          <h3>The narrative</h3>
          <p>&quot;The Smith family acquired a 2-bedroom condo at [West Campus address] in July 2026. Our daughter Maya enrolled at UT in August 2026 and has lived at the property continuously since move-in. Our family treats this property as our Texas home: utilities are in our name, our vehicle is registered in Texas, both parents hold Texas driver&apos;s licenses (or one parent holds a license and the other a state ID; our other parent maintains professional ties in [other state] that require their license to remain there), and our 2026 federal tax return was filed with the Austin address as our residence of record.&quot;</p>
          <p>A residency officer reading that narrative against a clean documentary record needs to make a single finding: that the family has demonstrated a Texas domicile for the 12-month period. They will find it. The single most important thing about a Rule #3 petition is consistency between the narrative and the documents.</p>

          <h3>The money</h3>
          <p>A representative four-year carrying cost for a $475K West Campus condo at a 6.5% mortgage, 25% down, with $550/month HOA and $9,000/year property tax (post-homestead): roughly $43,000/year in cash outflow, of which about $11,000 is principal pay-down. Net of pay-down, ~$32,000/year cash carrying cost. Against tuition savings of $33,220/year starting year 2, the net pre-appreciation math is: $32K carrying cost minus $33K tuition savings, roughly break-even in cash terms during years 2 through 4. Years 1 and post-graduation are full carrying cost.</p>
          <p>The cash math improves materially with appreciation. Austin condos in the West Campus / Hyde Park core have appreciated at roughly 3-5% annually over the last decade (with significant year-to-year variance; do not extrapolate any single year). A $475K purchase that appreciates at 4% for five years is worth ~$578K, a $103K paper gain before sale costs. Net of brokerage and closing, the family typically realizes $80K-$95K of equity gain over the holding period, plus the $11K/year of principal pay-down (~$55K over 5 years).</p>
          <p>None of these numbers is a forecast. The point is that the order of magnitude of the costs and benefits is comparable, which is why the pathway is viable at scale rather than only for unusually wealthy families.</p>

          <h2>Rule #4, rental / business activity, in detail</h2>
          <p>Rule #4 is the right choice for a smaller subset of families: those who are buying property primarily as an investment, who have prior real-estate-investing experience, and who can credibly operate the property as a real rental business. The legal mechanics are different because the residency hook is different.</p>

          <h3>What the property looks like</h3>
          <p>The typical Rule #4 property is a small multifamily, a duplex, triplex, or fourplex, in East Austin, North Loop, or other Austin neighborhoods where the multifamily inventory is intact. Price points are higher: $650K for a basic duplex on the east side, up to $1.2M+ for a renovated fourplex in a desirable submarket. Some Rule #4 families buy a single-family home with a detached guest house (ADU), so the student occupies one unit and the other is rented. Others buy a &quot;house hack&quot; duplex where the student lives in one half and a roommate rents the other half through the LLC.</p>

          <h3>The structure</h3>
          <p>The family forms a Texas LLC with a Texas registered agent (a service company for ~$100/year is fine), a Texas address (the property itself counts), and an Operating Agreement. The LLC files an initial Texas franchise tax return at the next due date (usually May 15 of the following year). The LLC engages a Texas-licensed property manager: important; the manager&apos;s contract is one of the documents the residency officer will weight heavily. The LLC takes title at closing. Tenants sign leases with the LLC, pay rent to the LLC (which deposits in an LLC bank account at a Texas-domiciled bank), and the LLC pays property tax, insurance, utilities, and management fees from that account. At year-end, the LLC files a Form 1065 (partnership return) issuing K-1s to the parents.</p>

          <h3>Why the LLC is essential</h3>
          <p>Owners sometimes ask whether they can hold the property in their personal name and still claim Rule #4 by virtue of having tenants. In theory, a sole-proprietor rental can satisfy the rule. In practice, the absence of an LLC makes the &quot;Texas-domiciled business&quot; argument much weaker: the business is just the parents themselves, doing business as landlords. The narrative becomes &quot;we own a property and rent it out&quot; rather than &quot;we operate a Texas business that owns rental property&quot;, and the residency officer&apos;s task of finding domicile through the business is materially harder. The LLC is cheap insurance.</p>

          <h3>The money</h3>
          <p>A representative four-year economic picture for a $750K East Austin duplex at 25% down, 7.0% investment-property mortgage, $1,500/month HOA-equivalent costs (insurance, maintenance, water, manager fee), $14,000/year property tax: gross rents at $4,800/month ($2,400 per side, market rate including the student&apos;s &quot;rent&quot; charged to the LLC) yield $57,600/year of gross income. Annual cash flow after debt service and operating costs is roughly $0 to +$5,000, break-even territory. Where Rule #4 wins on the financial side is in the federal tax treatment: depreciation of the building basis (~$550K basis allocated 80% to building gives ~$16,000/year of depreciation), which often produces a paper loss that offsets the parents&apos; other income up to the passive activity loss limits.</p>
          <p>This page does not give individualized tax advice; consult a CPA who has actually filed Texas-LLC rental returns. The passive activity loss rules, the real-estate-professional election, the at-risk rules, and the related-party leasing rules (when the student lives in a unit owned by the family LLC) are all live considerations.</p>

          <h2>Hybrid scenarios</h2>
          <p>Some families end up in hybrids: a Rule #3 property where the student takes in a roommate who pays &quot;rent&quot; informally, or a Rule #4 LLC that owns a single condo that the student occupies but no other tenants. Both are problematic.</p>
          <p>The Rule #3 + informal roommate situation is generally fine in practice: the residency officer&apos;s analysis does not care if the student has a roommate, and an informal rent-sharing arrangement is not &quot;operating a rental business&quot; in the IRS sense. Make sure the informal arrangement is genuinely informal: no lease, no LLC, no business bank account, no Schedule E. Otherwise the petition starts to look like a confused Rule #4.</p>
          <p>The Rule #4 LLC + sole-occupant student situation is the dangerous one. An LLC owning a single condo with no real tenants and no rental income is, functionally, a holding company, and the residency officer will recognize this. The petition will be evaluated as if the property were owned in the parents&apos; personal name, but with the added confusion that the property is technically held in an LLC. This is the worst of both worlds: no homestead exemption, no rental business substance, just extra complexity. If you find yourself in this position, either (a) wind down the LLC and transfer the property to personal name (consult a Texas attorney), or (b) acquire a second unit or lease the unit at fair-market rent to a non-family tenant.</p>

          <h2>Tax treatment, summarized</h2>

          <h3>Rule #3, student-occupied, personal name</h3>
          <ul>
            <li><strong>Mortgage interest deduction:</strong> deductible on Schedule A up to the federal cap. For a student-residence at typical Austin price points, the entire interest is generally deductible.</li>
            <li><strong>Property tax deduction:</strong> deductible on Schedule A subject to the $10,000 SALT cap. For families paying significant state income tax in their primary state of residence, the SALT cap will usually consume all $10,000 with state income taxes alone, making the Texas property tax effectively non-deductible at the federal level.</li>
            <li><strong>Homestead exemption (Texas):</strong> available if the family declares the property as homestead. Reduces assessed value and caps annual assessment increases at 10%.</li>
            <li><strong>Capital gains on sale:</strong> long-term capital gains rates (15% / 20% depending on bracket); §121 exclusion ($250K single / $500K MFJ) is generally unavailable because the property is not the parent&apos;s primary residence.</li>
          </ul>

          <h3>Rule #4, rental LLC</h3>
          <ul>
            <li><strong>Rental income / expense:</strong> reported on Schedule E (if SMLLC) or Form 1065 (multi-member LLC). Expenses include mortgage interest, property tax, insurance, manager fees, repairs, depreciation, and a portion of certain travel.</li>
            <li><strong>Depreciation:</strong> the building portion of basis (excluding land) is depreciated straight-line over 27.5 years. On a $750K property with ~$150K land basis, depreciation is ~$22K/year, substantial.</li>
            <li><strong>Passive activity loss limits:</strong> rental losses are generally passive and may not offset active income unless the taxpayer is a real estate professional. The $25,000 special allowance for active rental participants phases out between $100K and $150K AGI.</li>
            <li><strong>Texas franchise tax:</strong> filing required; $0 due under the no-tax-due threshold (~$2.47M revenue), but the return must be filed annually to maintain good standing.</li>
            <li><strong>Capital gains on sale:</strong> long-term capital gains plus depreciation recapture (taxed at up to 25%). §1031 like-kind exchange is available to defer the gain into another investment property.</li>
            <li><strong>Self-rental rules:</strong> if the student lives in a unit, the IRS may recharacterize the unit&apos;s &quot;rent&quot; as a related-party situation. The unit must be rented at fair market rent for the tax treatment to be clean.</li>
          </ul>

          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Picked a path?</h2>
            <p>If Rule #3 fits, the next read is the <Link href="/condos-near-ut" className="text-burnt-deep">condos near UT</Link> buying guide. If Rule #4 fits, you will want a Texas-licensed broker who has run this play before, that is a <Link href="/contact" className="text-burnt-deep">conversation</Link> rather than a webpage.</p>
            <Link href="/residency-checklist" className="btn btn-gold mt-4 inline-block">The document checklist →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
