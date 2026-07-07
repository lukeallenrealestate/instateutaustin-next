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

const TITLE = 'Buying a Condo for UT Austin In-State Tuition (2026 Strategy Guide)';
const DESCRIPTION = `Buying a condo for University of Texas in-state tuition: the complete strategy. West Campus condo purchase, the Texas residency pathway, 4-year math showing ~${fmtUSD(TUITION.threeYearSavings)} tuition savings, financing, taxes, and how out-of-state families execute it.`;
const PATH = '/buying-a-condo-for-ut-austin-in-state-tuition';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Can buying a condo get my student in-state tuition at University of Texas at Austin?', a: `Yes, when structured correctly. Purchasing a Texas condo, having the student live at it, and maintaining the standard documentary set (Texas driver's license, vehicle registration, voter registration, federal tax return with Texas address) for 12 continuous months qualifies for Texas residency for tuition purposes under Texas Education Code §54.052. In-state UT Austin tuition is ${fmtUSD(TUITION.inStatePerYear)}/year vs out-of-state ${fmtUSD(TUITION.outOfStatePerYear)}/year, so approved residency reclassification saves approximately ${fmtUSD(TUITION.annualSavings)}/year for the remaining time at UT.` },
  { q: 'How much does a UT Austin condo cost?', a: 'West Campus condos (walkable to UT main campus) run approximately $350,000-$650,000 for 1-2 bedroom units. Newer luxury high-rises (Skyloft, Inspire, 26 West, Rio West) sit at the top of the range; older mid-tier buildings sit lower. HOA fees typically $300-$800/month; property tax approximately 2% of value annually. Off-West-Campus options (Hyde Park, Riverside, North Campus) run $200,000-$500,000 depending on neighborhood and unit size.' },
  { q: 'Which is better for the tuition strategy: Rule #3 or Rule #4?', a: 'Rule #3 (parent-owned property occupied by the student, potentially with parents also using it as a Texas residence) is simpler and provides stronger residency evidence. Rule #4 (parent-owned property held by LLC, rented to student at market rate with formal lease) works when parents cannot fully relocate but adds complexity (LLC formation, lease documentation, arms-length rental structure). Most families use Rule #3 when possible; Rule #4 when parents maintain a primary residence elsewhere.' },
  { q: 'Do I have to physically move to Texas to use the condo strategy?', a: 'Parents do not have to fully relocate, but the case is stronger when at least one parent spends meaningful time in Texas at the condo. The student must actually live at the condo. Under Rule #3, best-case parents maintain the Texas condo as a genuine Texas residence with utilities, insurance, and regular occupancy. Under Rule #4, the LLC structure documents the arms-length rental so parents can maintain a primary residence elsewhere.' },
  { q: 'What is the 4-year math on buying a condo for UT in-state tuition?', a: `Typical picture: $450K condo purchase with 20% down, ~$3,500-$4,500/month carrying cost (mortgage, tax, HOA, insurance). 4-year total carry: ~$170,000-$215,000. Meanwhile, condo appreciation and mortgage principal paydown typically build $60,000-$100,000 of equity over 4 years. Tuition savings via residency pathway: approximately ${fmtUSD(TUITION.threeYearSavings)} (years 2-4 at in-state rate). Net position: often better than renting West Campus apartments ($1,700/mo per bedroom × 4 years ≈ $80,000-$130,000 with zero equity and no residency benefit).` },
  { q: 'How do I finance a Texas condo as an out-of-state buyer?', a: 'Two paths: (1) Investment property mortgage: 20-25% down, conventional 30-year fixed at investment-property rate (~0.5-1.0% above primary-residence rate). Full documentation underwriting. (2) Cash purchase or HELOC from home-state property: many out-of-state families use a home equity line of credit on their existing home to fund a cash purchase in Texas, closing in 10-21 days vs 30-45 days financed. Texas closing costs: 2-3% of purchase price.' },
  { q: 'When should I buy the condo relative to enrollment?', a: 'Timing depends on when you want in-state tuition to kick in. To have in-state tuition for Fall 2026 enrollment, the 12-month residency clock must complete before the Fall 2026 census date (~mid-September 2026), which means condo closing and documentary set established no later than approximately September 2025. To have in-state tuition starting Fall 2027 (sophomore year), close by approximately September 2026. Most families close in the summer between senior year of high school and freshman year at UT.' },
  { q: 'What if I buy a condo but the residency petition is denied?', a: 'Residency denials are common on first petitions and are typically reversible with additional documentation. If denied, resubmit for reconsideration with strengthened documentary evidence (utility bills, cancelled prior-state ties, updated leases, etc.). See our residency denied and appeal guide. The condo itself remains a real estate asset regardless of the tuition classification decision; you can hold it as a rental, sell it, or use it as a Texas base.' },
  { q: 'Is buying a condo for in-state tuition legal?', a: 'Yes. Texas Education Code §54.052 explicitly recognizes property ownership plus qualifying domicile as a pathway to Texas residency for tuition. This is not a loophole; it is the intended framework. UT Austin\'s residency office receives thousands of these petitions and approves qualifying applications routinely. The requirement is that the domicile be genuine (real physical presence, real documentary indicia), not fabricated. Structuring the purchase and residency correctly is important; the underlying strategy is entirely legal.' },
  { q: 'Can I rent out the UT condo to other students when my student is not using it?', a: 'For Rule #3 (parent-owned, student-occupied), substantial subletting undermines the pathway; the property should be the student\'s primary Texas residence. For Rule #4 LLC rental, the property is a rental property, and having other tenants alongside the student is acceptable. Many Rule #4 families rent to their student plus 1-2 additional student tenants; the LLC receives fair-market rent and files a Texas business return.' },
];

const HOWTO_STEPS = [
  { name: 'Confirm UT admission and tuition classification target', text: 'Confirm your student is admitted or targeting UT Austin. Determine whether you want in-state tuition to begin year 1 (requires purchase 12+ months before enrollment) or year 2 (typical scenario for freshman admission).' },
  { name: 'Engage a Texas REALTOR familiar with the residency-pathway strategy', text: 'A Texas-licensed REALTOR who has worked with out-of-state families on the pathway can identify appropriate West Campus, Hyde Park, or off-campus condo options that will work for the residency case.' },
  { name: 'Consult a Texas CPA for structure decision (Rule #3 vs Rule #4)', text: 'Rule #3 (parent-owned, student-occupied) vs Rule #4 (LLC rental structure) each have different tax and residency implications. A CPA familiar with §54.052 can advise on which fits your family.' },
  { name: 'Identify and purchase Texas condo', text: 'Typical range: $350K-$650K West Campus condo. Financing: 20-25% down investment mortgage or cash from HELOC. Close within 30-45 days. Record deed with county clerk.' },
  { name: 'Establish documentary set at Texas address', text: 'Within 90 days of arrival: Texas driver\'s license, vehicle registration, voter registration. File federal tax return with Texas address for the transition year.' },
  { name: 'Student lives at the condo during the 12-month qualifying period', text: 'Student physically resides at the condo. Utility bills in student or parent name. Continuous Texas presence (no extended absences).' },
  { name: 'Petition for residency reclassification', text: 'After 12 months of qualifying Texas domicile, file the residency reclassification petition through UT MyStatus with the full documentary package (deed, utility bills, DL, vehicle registration, voter registration, tax return).' },
  { name: 'Receive approval; tuition recalculated at in-state rate', text: 'Typical processing: 6-10 weeks. Approved petition results in in-state tuition for the upcoming term (~$33,220/year savings vs non-resident rate).' },
];

export default function BuyingCondoPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Buying a Condo for UT Austin In-State Tuition', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />
      <Schema data={howToSchema({ name: 'How to buy a condo for UT Austin in-state tuition', description: 'Step-by-step guide to buying a Texas condo and qualifying for UT Austin in-state tuition under Texas Education Code §54.052.', totalTime: 'P12M', steps: HOWTO_STEPS })} />

      <PageHero
        eyebrow="The complete strategy · UT residency pathway"
        title={<h1 className="text-ink max-w-[26ch]">Buying a Condo for UT Austin In-State Tuition</h1>}
        lede={`The complete strategy for buying a condo to get University of Texas at Austin in-state tuition. West Campus condo purchase, the residency pathway under Texas Education Code §54.052, the 4-year math showing ~${fmtUSD(TUITION.threeYearSavings)} tuition savings, financing, taxes, and how out-of-state families execute it.`}
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="Buying a condo for UT Austin in-state tuition in 60 seconds">
            Buying a condo in Texas (typically West Campus, walkable to UT), having the student live at it, and maintaining the standard documentary indicia for 12 continuous months qualifies for Texas residency for tuition purposes. UT Austin tuition drops from <strong>{fmtUSD(TUITION.outOfStatePerYear)}/year</strong> to <strong>{fmtUSD(TUITION.inStatePerYear)}/year</strong>, saving approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong>. Typical West Campus condo: <strong>$350K-$650K</strong>. Four-year tuition savings via the pathway: approximately <strong>{fmtUSD(TUITION.threeYearSavings)}</strong>. Plus the condo builds equity, replaces $80K-$130K of rent, and can be sold or held after graduation.
          </QuickAnswer>

          <AuthorBox blurb="Texas REALTOR (TREC #788149) who has personally helped dozens of out-of-state families buy West Campus condos as part of the UT Austin residency pathway strategy." />

          <h2 className="mt-0">How buying a condo unlocks UT Austin in-state tuition</h2>
          <p>The University of Texas at Austin charges dramatically different tuition based on residency classification: approximately <strong>{fmtUSD(TUITION.inStatePerYear)}/year</strong> for Texas residents vs <strong>{fmtUSD(TUITION.outOfStatePerYear)}/year</strong> for non-residents. The difference of <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> represents one of the largest single tuition levers available at any US public university.</p>

          <p>Texas Education Code §54.052 governs residency for tuition. The statute recognizes several pathways; the most reliable for out-of-state families is <em>real property ownership</em> combined with genuine Texas domicile. In practice: buy a Texas condo, have the student (and ideally at least one parent) live at it, establish the standard documentary indicia (Texas driver&apos;s license, vehicle registration, voter registration, and a federal tax return showing the Texas address) for 12 continuous months, then petition UT Austin for residency reclassification.</p>

          <p>This is not a loophole. It is the intended framework under Texas law, and thousands of out-of-state UT families execute it every year.</p>

          <h2>The 4-year math: buying a condo vs. renting</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>4-Year Housing Cost</th>
                  <th>Tuition Impact</th>
                  <th>Net Position</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Rent West Campus apartment; no residency pathway</td><td className="num">~$110,000 (rent, no equity)</td><td className="num">Pay out-of-state 4 yrs (~$180K)</td><td className="num">-$290,000</td></tr>
                <tr><td>Rent + residency without property pathway</td><td className="num">~$110,000 (rent, no equity)</td><td className="num">Save ~{fmtUSD(TUITION.threeYearSavings)} via residency</td><td className="num">-$180,000</td></tr>
                <tr><td>Buy $450K West Campus condo + residency pathway</td><td className="num">~$190,000 carry (offset by ~$80K equity)</td><td className="num">Save ~{fmtUSD(TUITION.threeYearSavings)}</td><td className="num">-$110,000 to -$130,000</td></tr>
              </tbody>
            </table>
          </div>

          <p>The condo strategy typically outperforms renting when the family has the capital to make the down payment (or pay cash). The condo builds equity while the residency pathway saves tuition; both effects are missing from the rental scenario.</p>

          <h2>Where to buy the condo</h2>

          <h3>West Campus (walkable to UT main campus)</h3>
          <p>The dense urban neighborhood immediately west of UT&apos;s main campus is the primary market for UT student condos. Most freshman-through-senior UT students who live off-campus live in West Campus.</p>
          <ul>
            <li><strong>Typical price:</strong> $350,000-$650,000 for 1-2 bedroom units</li>
            <li><strong>Monthly HOA:</strong> $300-$800</li>
            <li><strong>Annual property tax:</strong> ~2% of value</li>
            <li><strong>Walk to campus:</strong> 5-15 minutes</li>
            <li><strong>Best buildings:</strong> Skyloft, Inspire, 26 West, Rio West, 21 Rio, Villas on Rio, The Callaway, Rambler, Quarters on Campus, Lark on 26th</li>
          </ul>

          <h3>North Campus / Hyde Park</h3>
          <p>Historic residential neighborhoods north of UT. Older homes, duplexes, and small condo buildings. Requires transportation to campus but cheaper.</p>
          <ul>
            <li><strong>Typical price:</strong> $500,000-$1,000,000 for single-family or duplex</li>
            <li><strong>Commute:</strong> 10-15 minutes by car, scooter, or bike</li>
          </ul>

          <h3>East Riverside (south of Lady Bird Lake)</h3>
          <p>Apartment-style condominium complexes with lower price points and larger units. Requires bus, car, or ride-share to campus.</p>
          <ul>
            <li><strong>Typical price:</strong> $200,000-$400,000 for 2BR condo</li>
            <li><strong>Commute:</strong> 10-20 minutes by car or bus</li>
          </ul>

          <h2>Rule #3 vs Rule #4: which structure fits your family</h2>

          <h3>Rule #3: Parent-owned condo, student-occupied</h3>
          <p>Parents purchase the Texas condo in their own name. The student lives at the condo as primary residence. Parents may also spend time at the condo, treat it as a Texas base, or fully relocate.</p>
          <ul>
            <li><strong>Best for:</strong> families who can fully relocate or use the condo as a genuine Texas residence</li>
            <li><strong>Pros:</strong> simpler structure, no LLC required, homestead exemption available if parents occupy</li>
            <li><strong>Cons:</strong> requires parent presence or strong parental ties to Texas</li>
          </ul>

          <h3>Rule #4: Parent-owned condo held by LLC, rented to student</h3>
          <p>Parents establish a Texas LLC. The LLC purchases the condo. The student rents from the LLC at fair market rate with a formal lease. Parents maintain their primary residence elsewhere.</p>
          <ul>
            <li><strong>Best for:</strong> families who cannot fully relocate</li>
            <li><strong>Pros:</strong> parents keep out-of-state primary residence; clean tax separation via LLC</li>
            <li><strong>Cons:</strong> more complex structure (LLC formation, lease documentation, annual LLC compliance); no homestead exemption</li>
          </ul>

          <p>See the detailed comparison at <Link href="/rule-3-vs-rule-4">Rule #3 vs Rule #4</Link>.</p>

          <h2>The step-by-step: buying a condo for UT Austin in-state tuition</h2>
          <ol>
            {HOWTO_STEPS.map((step, i) => (
              <li key={i}>
                <strong>{step.name}.</strong> {step.text}
              </li>
            ))}
          </ol>

          <h2>Financing the UT condo purchase</h2>

          <h3>Investment property mortgage</h3>
          <p>Standard investment property mortgages require 20-25% down at conventional 30-year fixed rates approximately 0.5-1.0% above primary-residence rates. Full documentation underwriting: W-2 or self-employment income verification, asset verification, credit pull. Closing typically 30-45 days.</p>

          <h3>Primary-residence mortgage (Rule #3 with parent occupancy)</h3>
          <p>If at least one parent will use the Texas condo as primary residence, a primary-residence mortgage is available with 5-20% down at primary-residence rates. Texas homestead rules apply strictly; occupancy must be genuine.</p>

          <h3>Cash purchase or HELOC from home-state property</h3>
          <p>Many out-of-state families use a home equity line of credit (HELOC) on their existing home-state property to fund a cash purchase in Texas. Cash close: 10-21 days (much faster than financed). Cash purchases have negotiating advantage and lower closing costs.</p>

          <h3>Texas closing costs</h3>
          <ul>
            <li><strong>Title insurance:</strong> ~$1,500-$3,500 (depends on price)</li>
            <li><strong>Closing attorney/title company fees:</strong> ~$400-$800</li>
            <li><strong>Property inspection:</strong> ~$400-$700</li>
            <li><strong>Loan origination (if financing):</strong> ~0.5-1.0% of loan</li>
            <li><strong>Total closing costs:</strong> approximately 2-3% of purchase price</li>
          </ul>

          <h2>Tax implications of the condo purchase</h2>
          <ul>
            <li><strong>Texas has no state income tax.</strong> Rental income (if renting), capital gains at sale (subject to federal), and other income all face zero state tax.</li>
            <li><strong>Texas property tax:</strong> approximately 2% of value/year. Higher than national average but offset by no income tax for household.</li>
            <li><strong>Homestead exemption:</strong> if parents occupy as primary residence (Rule #3), reduces taxable value by ~$100K; saves ~$2,500/year.</li>
            <li><strong>Federal depreciation (Rule #4 LLC):</strong> rental real estate depreciates over 27.5 years, generating tax-loss deductions that offset rental income.</li>
            <li><strong>Federal capital gains at sale:</strong> gains subject to federal capital gains tax (0%, 15%, or 20% depending on income); primary-residence exclusion ($250K single / $500K married) available if used as primary residence for 2 of last 5 years.</li>
            <li><strong>1031 exchange:</strong> at graduation, the Texas condo can be exchanged for another investment property under Section 1031 to defer capital gains.</li>
          </ul>

          <h2>What can go wrong: common condo-purchase mistakes for the residency pathway</h2>
          <ul>
            <li><strong>Buying too late.</strong> If the closing happens after September of the year before enrollment, the 12-month clock won&apos;t complete in time for year 1 in-state tuition.</li>
            <li><strong>PO box or mail-forwarding address on documents.</strong> The address must be a real residential address (the condo). Not a mailbox service.</li>
            <li><strong>Continued out-of-state indicia.</strong> Maintaining out-of-state voter registration, driver&apos;s license, or filing a full-year resident tax return in the prior state undermines the Texas domicile case.</li>
            <li><strong>Inconsistent addresses across documents.</strong> Driver&apos;s license, vehicle registration, voter registration, deed, utility bills should all show the same Texas address.</li>
            <li><strong>Rule #4 without proper LLC structure.</strong> If claiming Rule #4 (LLC rental), the LLC must exist, own the property, have a formal lease with the student, receive rent payments, and file appropriate returns. Casual structure gets petitions denied.</li>
            <li><strong>Buying without a Texas REALTOR familiar with the strategy.</strong> Some real estate agents don&apos;t understand the residency pathway; ensure your agent has worked with out-of-state families on this specific strategy.</li>
          </ul>

          <h2>Case study: California family buying a UT condo</h2>
          <div className="callout">
            <h4>Family circumstances</h4>
            <p className="mb-0">Family with student admitted to UT McCombs for Fall 2026. Home state: California ($500K AGI, top income tax rate 13.3%). Considering: pay full out-of-state McCombs tuition ($51,200/year × 4 years = $205,000 in tuition alone) vs pursue Texas residency pathway with condo purchase.</p>
            <br />
            <h4>The condo strategy</h4>
            <ul className="mb-0">
              <li>Purchase: $475K 2BR West Campus condo, 25% down ($119K), 30-year investment mortgage. Monthly carry: ~$3,800 (P&amp;I, tax, HOA, insurance)</li>
              <li>Structure: Rule #4 LLC (parents maintain California residence)</li>
              <li>Student moves to condo August 2026; lives there for freshman year</li>
              <li>Texas driver&apos;s license, vehicle registration, voter registration by October 2026</li>
              <li>Federal tax return filed with Texas address for 2026 (as full-year Texas resident student under Rule #4 lease)</li>
              <li>September 2027: petition for residency reclassification; approved</li>
              <li>Fall 2027 (year 2): tuition drops from $51,200 to $14,200 McCombs in-state rate</li>
            </ul>
            <br />
            <h4>The math</h4>
            <ul className="mb-0">
              <li><strong>Tuition savings:</strong> $37,000/year × 3 years = <strong>$111,000</strong></li>
              <li><strong>Additional benefit, California income tax exit for parents:</strong> if parents also relocate or restructure, California 13.3% top rate savings of ~$48,000/year on $500K AGI</li>
              <li><strong>Condo equity build over 4 years:</strong> ~$85,000 (principal paydown + 3-5% appreciation)</li>
              <li><strong>4-year housing savings vs West Campus rent:</strong> ~$100,000 (rent avoided; carry mostly recouped via equity)</li>
              <li><strong>Total 4-year financial impact:</strong> ~$200,000-$400,000+ depending on tax and equity assumptions</li>
            </ul>
          </div>

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
              <li><Link href="/rule-3-vs-rule-4">Rule #3 vs Rule #4</Link>: the two condo-ownership structures</li>
              <li><Link href="/condos-near-ut">Condos near UT</Link>: building-by-building guide</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>: the §54.052 legal framework</li>
              <li><Link href="/12-month-timeline">12-month timeline</Link>: month-by-month execution plan</li>
              <li><Link href="/contact">Contact me</Link>: I&apos;m a Texas REALTOR (TREC #788149) specializing in this strategy</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-buying-condo" />
    </>
  );
}
