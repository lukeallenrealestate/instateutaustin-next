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

const TITLE = 'Buying Property in Texas for UT Austin In-State Tuition (Condo + Residency)';
const DESCRIPTION = `Complete guide to buying property in Texas (condo, house, or duplex) for University of Texas at Austin in-state tuition. The residency pathway, property types, neighborhoods near campus, Rule #3 vs Rule #4, financing, taxes, and the four-year math showing ~$99,660 tuition savings.`;
const PATH = '/buying-property-in-texas-for-residency';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Do I need to buy property in Texas to establish residency?', a: 'No. Texas residency for tuition purposes can be established through long-term lease, employment, or other genuine domicile arrangements. Property ownership is not required by Texas Education Code §54.052. However, for out-of-state UT Austin families, property ownership is by far the most common and clearest pathway because (1) the property doubles as student housing, (2) it provides strong documentary evidence of intent, and (3) it builds equity instead of paying rent.' },
  { q: 'What kind of Texas property qualifies for the residency pathway?', a: 'Any Texas real property at a real residential address works for the documentary purpose. The most common choices for UT families are: (1) West Campus high-rise condos near UT (purchase $350K-$650K, walkable to campus); (2) North Campus or East Riverside condos (lower price, requires transportation to campus); (3) single-family homes in Hyde Park or central Austin neighborhoods ($600K-$1.2M); (4) suburban single-family homes in Round Rock, Cedar Park, Pflugerville, or Westlake ($400K-$800K). The property must be at a residential address that someone actually occupies.' },
  { q: 'Should the parent buy the property in their own name or use an LLC?', a: 'Depends on the residency pathway. For Rule #3 (parent-owned property, student lives there, parents may also relocate or treat as second home with arms-length arrangement), the property can be in the parent\'s name. For Rule #4 (parent-owned property rented to the student through an LLC), the property is held by the LLC and a formal lease exists between the LLC and the student. The LLC structure is cleaner for tax separation and documents the arms-length rental, but adds complexity. See the Rule #3 vs Rule #4 comparison.' },
  { q: 'How much does it cost to buy property in Texas for the residency pathway?', a: 'West Campus condos run $350,000-$650,000 for 1-2 bedroom units, with HOA $300-$800/month and property tax ~2% of value/year. Single-family homes in central Austin are $600,000-$1.2M, with property tax ~2% and lower HOA (or none if not in HOA). Suburban single-family homes ($400K-$800K) typically have lower property tax (~1.5-2%) and lower HOA but require transportation to campus. Plan to budget closing costs of 2-3% of purchase price plus annual carrying costs of 4-6% of value (mortgage interest, property tax, HOA, insurance, maintenance).' },
  { q: 'Does the property need to be in Austin?', a: 'No, but it should be at a residential address where the student actually lives. Many families buy in Austin (because the student attends UT in Austin), but the property could be elsewhere in Texas if the student does not live there. For Rule #3 (parent-owned student-occupied), the property and student must be at the same Texas address. For Rule #4 (rental LLC), the property must be at a residential address that the student rents from the LLC.' },
  { q: 'Can I rent the property out to other students when my student is not using it?', a: 'For Rule #4 LLC structures, the property is a rental and the student is one tenant. Renting to other tenants alongside the student during the year or during summers is acceptable provided the documentation reflects the actual occupancy. For Rule #3 (parent-owned, student-occupied), the property is the student\'s primary residence and substantial subletting is not consistent with that pathway.' },
  { q: 'What are the four-year economics of buying vs renting?', a: 'Renting a West Campus apartment: ~$1,400-$2,000/month per student for shared 2-3 bedroom unit, or $1,800-$2,800/month for a 1BR. Four-year rent total: $80,000-$130,000 with no equity. Buying a West Campus condo at $450,000 with 20% down: monthly carry (mortgage, tax, HOA, insurance) ~$3,500-$4,500/month. Four-year carry: $170,000-$215,000. However, the property typically appreciates 3-5%/year and builds equity through principal paydown; net cost after sale is often $30,000-$80,000 over four years. Plus the residency pathway savings of ~$99,660 in tuition. The math typically favors buying when capital is available.' },
  { q: 'What is the Texas homestead exemption and does it apply?', a: 'The Texas homestead exemption reduces property tax on a homeowner\'s primary residence (typically by ~$100,000 of taxable value, saving ~$2,500/year). To qualify, the property must be the owner\'s primary residence as of January 1. For Rule #3 (parents move to Texas, treat the property as primary residence), the homestead exemption applies. For Rule #4 (parent-owned LLC rental), the homestead exemption does not apply because the LLC is not a natural person residing at the property; the student-tenant could potentially file for their own homestead if they purchased separately.' },
  { q: 'How do I finance a Texas investment property as an out-of-state buyer?', a: 'Standard investment property mortgages require 20-25% down with rates approximately 0.5-1.0% above primary-residence rates. As an out-of-state buyer, expect: 20-25% down, conventional 30-year fixed at the investment rate, full documentation underwriting. Many out-of-state families pay cash or use a HELOC on their primary residence in the home state. Cash buyers close faster (10-21 days vs 30-45 days financed). Texas requires title insurance and a Texas-licensed closer; budget 2-3% of purchase price for closing costs.' },
];

export default function BuyingPropertyForResidencyPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Buying Property in Texas for Residency', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="Texas residency · Real estate strategy"
        title={<h1 className="text-ink max-w-[24ch]">Buying Property in Texas for Residency</h1>}
        lede="The complete real estate angle on the UT Austin residency pathway: property types, neighborhoods near campus, financing, taxes, and the four-year math that justifies the purchase."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The honest answer">
            Property ownership is not strictly required for Texas residency, but it is the cleanest pathway for out-of-state UT Austin families. The property doubles as student housing (replacing rent), provides strong documentary evidence of intent to domicile in Texas, and builds equity. Typical West Campus condo: $400,000-$550,000 purchase, 20% down, ~$3,500-$4,500/month carry. Four-year carry: ~$170,000-$215,000 (vs ~$100,000 rent with no equity). With property appreciation and residency-pathway tuition savings of ~{fmtUSD(TUITION.threeYearSavings)}, the math typically favors buying when capital is available.
          </QuickAnswer>

          <AuthorBox blurb="Texas REALTOR (TREC #788149) who has personally helped dozens of out-of-state UT Austin families select, finance, and close on Texas property as part of the residency pathway." />

          <h2 className="mt-0">Why property is the cleanest residency pathway</h2>
          <p>Texas Education Code §54.052 does not require property ownership. But property is the cleanest pathway because it satisfies multiple residency considerations at once:</p>
          <ul>
            <li><strong>Genuine residential address.</strong> A purchased property at a real residential address is unambiguous evidence of domicile, far stronger than a short-term lease.</li>
            <li><strong>Documentary trail.</strong> Property deed, mortgage statements, property tax bills, HOA statements, and utility bills in the owner&apos;s name at the Texas address create a robust documentary record.</li>
            <li><strong>Doubles as student housing.</strong> The property replaces the student&apos;s rent for four years, saving $80,000-$130,000.</li>
            <li><strong>Builds equity.</strong> Unlike rent, mortgage principal paydown and appreciation create wealth.</li>
            <li><strong>Intent signal.</strong> Buying property is a much stronger signal of intent to domicile than a 12-month lease.</li>
          </ul>

          <h2>The two pathways: Rule #3 vs Rule #4</h2>
          <p>Texas residency for tuition recognizes multiple property structures. For UT Austin families, the two common structures are:</p>

          <h3>Rule #3: Parent-owned property occupied by the student (and ideally also parent)</h3>
          <p>The parents purchase Texas property in their own names. The student lives at the property as primary residence. For maximum strength, parents also relocate to Texas; for some structures, parents may maintain an out-of-state home and treat the Texas property as a second home or transition residence. The student establishes Texas residency through the parent&apos;s domicile (for dependent students).</p>
          <ul>
            <li><strong>Best for:</strong> families who can fully relocate or treat the Texas property as a primary base</li>
            <li><strong>Pros:</strong> simplest structure, no LLC required, homestead exemption available if parent occupies</li>
            <li><strong>Cons:</strong> requires parent presence or strong parental ties to Texas</li>
          </ul>

          <h3>Rule #4: Parent-owned property held by LLC, rented to student</h3>
          <p>Parents establish a Texas LLC, the LLC purchases the property, and the student rents from the LLC at fair market value with a formal lease. The student establishes independent residency in Texas at the property. Parents typically maintain their primary residence in the home state.</p>
          <ul>
            <li><strong>Best for:</strong> families who cannot or do not want to fully relocate</li>
            <li><strong>Pros:</strong> parents maintain out-of-state primary residence, LLC provides clean tax separation</li>
            <li><strong>Cons:</strong> more complex structure, LLC registration and tax compliance, no homestead exemption</li>
          </ul>

          <p>See the <Link href="/rule-3-vs-rule-4">Rule #3 vs Rule #4 side-by-side</Link> for cost, complexity, tax treatment, and risk comparison.</p>

          <h2>Property options near UT Austin</h2>

          <h3>West Campus (walkable to UT)</h3>
          <p>The dense urban neighborhood immediately west of UT&apos;s main campus. Most UT undergraduate housing demand concentrates here. Properties are predominantly high-rise condos built since 2005.</p>
          <ul>
            <li><strong>Typical purchase price:</strong> $350,000-$650,000 for 1-2 bedroom units</li>
            <li><strong>Monthly HOA:</strong> $300-$800 (varies by building amenities)</li>
            <li><strong>Annual property tax:</strong> ~2% of value/year</li>
            <li><strong>Walk to campus:</strong> 5-15 minutes</li>
            <li><strong>Rental market:</strong> strong undergraduate demand; market rent for 2BR ~$2,800-$3,800/month</li>
          </ul>

          <h3>North Campus and Hyde Park (10-15 minute commute)</h3>
          <p>Older residential neighborhoods north of UT with a mix of single-family homes, duplexes, and small condo buildings.</p>
          <ul>
            <li><strong>Typical purchase price:</strong> $500,000-$1,000,000 for single-family or duplex</li>
            <li><strong>Annual property tax:</strong> ~2% of value/year</li>
            <li><strong>Commute to campus:</strong> 10-15 minutes by car or scooter, walk impractical</li>
          </ul>

          <h3>East Riverside (across the lake, 10-20 minute commute)</h3>
          <p>Apartment-style condominium complexes south of Lady Bird Lake. Lower price point with similar amenities.</p>
          <ul>
            <li><strong>Typical purchase price:</strong> $200,000-$400,000 for 2BR condo</li>
            <li><strong>Monthly HOA:</strong> $250-$500</li>
            <li><strong>Annual property tax:</strong> ~2% of value/year</li>
            <li><strong>Commute to campus:</strong> 10-20 minutes by car or bus</li>
          </ul>

          <h3>Suburban Austin (Cedar Park, Round Rock, Pflugerville, Westlake)</h3>
          <p>Single-family homes in growing Austin suburbs. Larger properties at lower per-square-foot prices. Best for families who fully relocate.</p>
          <ul>
            <li><strong>Typical purchase price:</strong> $400,000-$800,000 for a single-family home</li>
            <li><strong>Annual property tax:</strong> 1.5-2.5% of value (varies by ISD and county)</li>
            <li><strong>Commute to UT:</strong> 25-45 minutes depending on traffic</li>
            <li><strong>Best for:</strong> Rule #3 families fully relocating</li>
          </ul>

          <h2>The financing picture for out-of-state buyers</h2>
          <ul>
            <li><strong>Conventional investment property mortgage:</strong> 20-25% down required, conventional 30-year fixed at investment-property rate (typically 0.5-1.0% above primary-residence rate). Full documentation underwriting (W-2 or self-employment income, asset verification, full credit pull).</li>
            <li><strong>Conventional primary-residence mortgage (Rule #3 with parent occupancy):</strong> 5-20% down, primary-residence rate. Requires parent to actually occupy the property. Texas law treats homestead occupancy strictly.</li>
            <li><strong>Cash purchase:</strong> faster close (10-21 days), no mortgage carry. Many out-of-state families use a HELOC on their home-state property to fund a cash purchase in Texas.</li>
            <li><strong>Texas closing requirements:</strong> Texas requires title insurance and a Texas-licensed closer (typically a Texas attorney or title company). Budget 2-3% of purchase price for closing costs.</li>
          </ul>

          <h2>The four-year economics: buy vs rent</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Four-Year Cost</th>
                  <th>Equity Built</th>
                  <th>Tuition Savings via Residency</th>
                  <th>Net Position After 4 Years</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Rent West Campus apartment, no residency</td><td className="num">~$110,000 rent</td><td className="num">$0</td><td className="num">$0</td><td className="num">-$110,000</td></tr>
                <tr><td>Rent + establish residency without property</td><td className="num">~$110,000 rent</td><td className="num">$0</td><td className="num">~{fmtUSD(TUITION.threeYearSavings)}</td><td className="num">~-$10,000</td></tr>
                <tr><td>Buy West Campus condo, residency via property</td><td className="num">~$190,000 carry</td><td className="num">~$80,000 (principal + appreciation)</td><td className="num">~{fmtUSD(TUITION.threeYearSavings)}</td><td className="num">~+$10,000 (vs renting and no residency)</td></tr>
              </tbody>
            </table>
          </div>

          <p>The math typically favors buying when the family has the capital. Equity buildup and tuition savings together offset the carry costs, making the four-year position roughly net positive vs the rent + no residency baseline. The property is then sold or held as a rental after graduation.</p>

          <h2>Tax considerations</h2>
          <ul>
            <li><strong>Texas has no state income tax.</strong> Texas residents pay no state income tax on rental income, capital gains from property sale, or other income.</li>
            <li><strong>Texas homestead exemption.</strong> Reduces property tax by approximately $100,000 of taxable value (saves ~$2,500/year). Available for owner-occupied primary residence; not available for LLC-held rentals.</li>
            <li><strong>Federal capital gains.</strong> Sale of Texas property after 4 years is subject to federal capital gains tax. Primary-residence exclusion ($250K single / $500K married) is available if the seller used the property as primary residence for 2 of the last 5 years.</li>
            <li><strong>Federal depreciation (for Rule #4 LLC rental).</strong> Rental real estate depreciation over 27.5 years generates tax-loss deductions that can offset some rental income. Consult a CPA.</li>
            <li><strong>1031 exchange options.</strong> At graduation, the Texas property can be exchanged for another investment property under Section 1031 to defer capital gains. Consult a 1031 specialist.</li>
          </ul>

          <h2>How I help out-of-state families with the property purchase</h2>
          <p>As a Texas REALTOR (TREC #788149) specializing in UT-area properties for out-of-state residency-pathway families, I handle the full buyer-side process:</p>
          <ul>
            <li>Property identification and showing coordination (West Campus, Hyde Park, Riverside, suburban)</li>
            <li>Pricing analysis and offer strategy</li>
            <li>Coordination with Texas closing attorney and title company</li>
            <li>Connection to lenders familiar with out-of-state investor mortgages</li>
            <li>Recommendation of CPA and attorney for LLC structuring (Rule #4 path)</li>
            <li>Property management referrals if needed</li>
          </ul>
          <p>I do not charge for buyer representation; the seller pays both the listing and buyer agent commissions at closing. <Link href="/contact">Contact me</Link> to discuss your specific situation.</p>

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
              <li><Link href="/rule-3-vs-rule-4">Rule #3 vs Rule #4</Link>: the two property pathways compared</li>
              <li><Link href="/condos-near-ut">Condos near UT Austin</Link>: building-by-building guide</li>
              <li><Link href="/how-to-establish-texas-residency">How to establish Texas residency</Link>: the full step-by-step</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: §54.052 framework</li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link>: model the savings against carrying costs</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-buying-property" />
    </>
  );
}
