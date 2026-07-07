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

const TITLE = 'Austin Real Estate for UT Residency: The Investor Strategy Guide';
const DESCRIPTION = `Austin real estate as a UT residency strategy: how out-of-state families combine an investment property purchase with UT tuition savings of ~${fmtUSD(TUITION.threeYearSavings)}. Property types, financing, tax structure, and long-term hold vs sell analysis.`;
const PATH = '/austin-real-estate-ut-residency-strategy';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Can Austin real estate double as a UT residency strategy AND an investment?', a: 'Yes. Many out-of-state UT families structure their Austin property purchase as both (1) the residence for the Texas residency pathway (saving UT tuition) and (2) a real estate investment (building equity, benefiting from Austin appreciation). The dual-use structure is one of the strongest financial cases for the pathway: the property serves an immediate purpose (student housing + tuition savings) while accumulating wealth as an appreciating asset.' },
  { q: 'What is the ROI on Austin real estate for a UT residency-pathway family?', a: `Compound ROI calculation: (1) Tuition savings ~${fmtUSD(TUITION.threeYearSavings)} via residency pathway (years 2-4); (2) Equity build ~$60,000-$100,000 over 4 years via principal paydown + Austin appreciation (3-5% annually); (3) Rent avoidance ~$80,000-$130,000 vs West Campus rentals; (4) Post-graduation optionality (hold as rental, sell, exchange). Combined 4-year financial impact typically $200,000-$400,000 depending on property, tax, and market assumptions.` },
  { q: 'What Austin neighborhoods work for the residency strategy?', a: 'For UT students: West Campus (walkable to UT, highest rental demand), Hyde Park (walkable/scooter distance, character neighborhoods), North Campus, East Riverside (across lake, more affordable), or suburban Austin (Round Rock, Cedar Park for full family relocations). West Campus condos are the primary market for UT-specific properties. Other neighborhoods work but may require the student to have transportation.' },
  { q: 'Should I structure the Austin property purchase as personal or through LLC?', a: 'Two paths: (1) Personal ownership (Rule #3): simpler structure; parent or family owns in own name; homestead exemption available if occupied as primary residence; suits families who plan to spend time in Austin. (2) LLC ownership (Rule #4): cleaner tax separation; formal lease between LLC and student; parents can maintain primary residence elsewhere; suits investment-focused approach. See our Rule #3 vs Rule #4 comparison for detailed analysis.' },
  { q: 'What tax benefits come with owning Austin investment property for the residency strategy?', a: 'Multiple tax benefits: (1) Texas has no state income tax on rental income; (2) Federal depreciation over 27.5 years generates tax-loss deductions; (3) Interest deductibility on investment property mortgage; (4) Property tax and insurance deductibility; (5) Homestead exemption if owner-occupied (Rule #3); (6) Capital gains treatment at sale; (7) 1031 exchange option at graduation to defer gains; (8) Bonus depreciation for cost segregation studies on newer buildings. Consult a Texas CPA for household-specific analysis.' },
  { q: 'What is the Austin real estate market outlook for UT-area properties?', a: 'Austin has been one of the strongest US metros for real estate appreciation over the past decade (~5-8% annual appreciation historically). Recent years have moderated to 3-5%. UT-area properties (West Campus, Hyde Park) have generally tracked or slightly exceeded metro appreciation due to stable UT enrollment demand. Long-term outlook remains strong given Austin population growth, tech industry expansion, and continued UT enrollment. Short-term outlook has more variability with interest rates and general market conditions.' },
  { q: 'Should I hold or sell the Austin property after my student graduates?', a: 'Depends on: (1) family financial situation; (2) rental income potential; (3) family plans (do you have other students going to UT? do you want a Texas base?); (4) market conditions at graduation. Options: (a) Sell and take capital gains (with potential primary-residence exclusion for Rule #3 owner-occupied); (b) Hold as rental (Austin rental demand remains strong); (c) 1031 exchange into another investment property (deferring gains); (d) Move in as retirement residence (many families relocate to Austin post-work). Most families evaluate options as graduation approaches.' },
  { q: 'What if my family wants to relocate to Austin permanently for the pathway?', a: 'Full relocation is a strong strategy for families with flexibility. Benefits: (1) cleanest residency case under Rule #3; (2) Texas state tax exit (no state income tax); (3) Austin lifestyle (climate, tech industry, music, outdoors); (4) child\'s residency pathway serves as catalyst for a positive family move. Considerations: (1) home-state property disposition; (2) career and business ties; (3) schools for younger siblings; (4) family/friend network location. See our Moving to Austin from Out of State guide for the relocation-focused perspective.' },
];

export default function AustinRealEstateStrategyPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Austin Real Estate for UT Residency', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="Real estate + residency pathway"
        title={<h1 className="text-ink max-w-[24ch]">Austin Real Estate for UT Residency Strategy</h1>}
        lede="How out-of-state UT families combine an Austin property purchase with the residency pathway for compounding financial benefit: UT tuition savings plus real estate appreciation plus tax advantages."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The compound strategy">
            An Austin property purchase for a UT residency pathway produces multiple compounding financial benefits: (1) UT tuition savings of approximately <strong>{fmtUSD(TUITION.threeYearSavings)}</strong> over 3 years; (2) Real estate equity build of <strong>$60K-$100K</strong> over 4 years via appreciation and principal paydown; (3) Rent avoidance of <strong>$80K-$130K</strong> vs paying West Campus rentals; (4) Texas state tax advantages (no income tax); (5) Post-graduation optionality (hold, sell, 1031, or occupy). Combined 4-year financial impact typically <strong>$200K-$400K+</strong>.
          </QuickAnswer>

          <AuthorBox blurb="Texas REALTOR (TREC #788149) and Austin real estate specialist who has personally structured dozens of Austin property purchases as UT residency-pathway investments." />

          <h2 className="mt-0">The compound financial thesis</h2>
          <p>Most families evaluate the Austin property purchase for UT residency purely on tuition savings. That undersells the strategy. The full picture involves four compounding financial benefits:</p>

          <h3>Benefit 1: UT tuition savings (~{fmtUSD(TUITION.threeYearSavings)})</h3>
          <p>Reclassification from non-resident to Texas resident cuts UT tuition from {fmtUSD(TUITION.outOfStatePerYear)}/year to {fmtUSD(TUITION.inStatePerYear)}/year. Applied to years 2-4 of UT enrollment (typical pathway timing), savings total approximately {fmtUSD(TUITION.threeYearSavings)}.</p>

          <h3>Benefit 2: Real estate equity build (~$60K-$100K over 4 years)</h3>
          <p>A $450K Austin condo with 25% down has mortgage principal paydown of approximately $30,000-$40,000 over 4 years. Austin appreciation at 3-5% annually adds another $50,000-$80,000 in equity growth. Total 4-year equity build: $80K-$120K.</p>

          <h3>Benefit 3: Rent avoidance ($80K-$130K)</h3>
          <p>The property serves as the student&apos;s housing, replacing what would otherwise be $1,700-$2,200/month per bedroom in West Campus rentals. Four-year rent avoidance: $80,000-$105,000 for a solo occupant; $130,000+ if the property also houses roommates whose rent offsets carry costs.</p>

          <h3>Benefit 4: Texas state tax advantages</h3>
          <p>For families where the student pathway is combined with parent relocation to Texas: exit from home-state income tax (California 13.3%, New York 10.9%, Oregon 9.9%). Savings for higher-income households: $20,000-$80,000/year, or $80,000-$320,000 over four years while the student is at UT.</p>

          <h2>Property types for the compound strategy</h2>

          <h3>West Campus condo (most common)</h3>
          <ul>
            <li><strong>Purchase price:</strong> $350,000-$650,000</li>
            <li><strong>Advantages:</strong> walkable to UT; primary student housing market; strong rental demand as backup; established resale market</li>
            <li><strong>Disadvantages:</strong> HOA fees; some buildings have rental restrictions; smaller unit sizes limit multi-tenant Rule #4 structures</li>
            <li><strong>Best for:</strong> most out-of-state families pursuing Rule #3 (student-occupied) or Rule #4 (student + 1 roommate)</li>
          </ul>

          <h3>Hyde Park duplex or house</h3>
          <ul>
            <li><strong>Purchase price:</strong> $600,000-$1,200,000</li>
            <li><strong>Advantages:</strong> larger property; more privacy; character neighborhood; strong appreciation history; can house multiple students</li>
            <li><strong>Disadvantages:</strong> higher price point; not walkable (10-15 min bike/scooter); more property maintenance</li>
            <li><strong>Best for:</strong> families with capital for larger purchase or planning to house multiple students</li>
          </ul>

          <h3>East Riverside condo (value-focused)</h3>
          <ul>
            <li><strong>Purchase price:</strong> $200,000-$400,000</li>
            <li><strong>Advantages:</strong> lowest price point; strong rental demand; larger units for the price</li>
            <li><strong>Disadvantages:</strong> not walkable to UT; requires transportation; some safety considerations by specific building</li>
            <li><strong>Best for:</strong> budget-focused families or students comfortable with 10-15 minute commute</li>
          </ul>

          <h3>Suburban single-family home (full relocation)</h3>
          <ul>
            <li><strong>Purchase price:</strong> $400,000-$800,000 (Round Rock, Cedar Park, Pflugerville)</li>
            <li><strong>Advantages:</strong> largest property; best for families with younger siblings; strongest Texas homestead case</li>
            <li><strong>Disadvantages:</strong> not walkable/scooter; 25-45 minute commute; requires full relocation</li>
            <li><strong>Best for:</strong> families fully relocating to Austin for the pathway</li>
          </ul>

          <h2>The financing framework for investment-property purchases</h2>

          <h3>Conventional investment property mortgage</h3>
          <ul>
            <li>Down payment: 20-25%</li>
            <li>Rate: approximately 0.5-1.0% above primary-residence rate</li>
            <li>Documentation: full W-2 or self-employment income + assets + credit</li>
            <li>Closing: 30-45 days</li>
            <li>Interest deductibility: available for investment property</li>
          </ul>

          <h3>Cash purchase or HELOC from home-state property</h3>
          <ul>
            <li>Cash close: 10-21 days (much faster than financed)</li>
            <li>Negotiating advantage: sellers often prefer cash</li>
            <li>Lower closing costs (no lender fees)</li>
            <li>HELOC option: use home-equity line on primary residence to fund Texas purchase</li>
          </ul>

          <h3>Primary-residence mortgage (Rule #3 with parent occupancy)</h3>
          <ul>
            <li>Down payment: 5-20%</li>
            <li>Rate: primary-residence rates (lower than investment)</li>
            <li>Requires actual parent occupancy (Texas homestead rules apply strictly)</li>
            <li>Best when parents fully relocate</li>
          </ul>

          <h2>The tax picture: Austin real estate + Texas residency</h2>

          <h3>Federal tax considerations</h3>
          <ul>
            <li><strong>Rental income and expenses:</strong> report on Schedule E; expenses (interest, tax, insurance, HOA, repairs, depreciation) deductible against rental income</li>
            <li><strong>Depreciation:</strong> 27.5-year straight-line for residential rental; typically $10,000-$18,000/year deduction on $450K property</li>
            <li><strong>Bonus depreciation:</strong> cost segregation studies can identify property components eligible for accelerated depreciation</li>
            <li><strong>Capital gains at sale:</strong> long-term (held over 1 year) at 15% or 20% federal rate; Section 121 primary-residence exclusion ($250K single / $500K married) available for Rule #3 owner-occupied</li>
            <li><strong>1031 exchange:</strong> defer capital gains by exchanging into another investment property; useful at graduation</li>
          </ul>

          <h3>Texas tax considerations</h3>
          <ul>
            <li><strong>No state income tax:</strong> rental income, capital gains, and other income all face zero state tax</li>
            <li><strong>Property tax:</strong> approximately 2% of value annually; higher than national average but offset by no state income tax</li>
            <li><strong>Homestead exemption:</strong> if owner-occupied primary residence (Rule #3), reduces taxable value by ~$100K (saves ~$2,500/year)</li>
            <li><strong>Franchise (margins) tax:</strong> only applies to businesses with $1.18M+ revenue; typical family Rule #4 LLC below threshold</li>
          </ul>

          <h2>Post-graduation options for the Austin property</h2>

          <h3>Hold as rental</h3>
          <p>Austin rental demand remains strong. Post-graduation rental income can offset carrying costs while continuing appreciation. Common for families whose younger siblings may attend UT.</p>

          <h3>Sell and realize gains</h3>
          <p>Capital gains from appreciation over 4 years typically $50,000-$120,000 on a $450K property. If Rule #3 owner-occupied, Section 121 exclusion may apply ($250K/$500K exclusion). Rule #4 LLC sales face ordinary capital gains treatment.</p>

          <h3>1031 exchange</h3>
          <p>Trade the Austin property for another investment property (residential rental, commercial, or vacation) to defer capital gains indefinitely. Common for families wanting to redeploy capital.</p>

          <h3>Move in as primary residence</h3>
          <p>Many parents relocate to Austin post-work as retirement or lifestyle move. The property that served as student housing becomes retirement residence with homestead exemption.</p>

          <h2>Case study: dual-benefit family</h2>
          <div className="callout">
            <h4>Family profile</h4>
            <p className="mb-0">Family with student admitted to UT for Fall 2026. Home state: California. Parents remain in CA during student&apos;s UT years; visit Austin quarterly.</p>
            <br />
            <h4>The strategy</h4>
            <ul className="mb-0">
              <li>Purchase: $475K West Campus 2BR condo via Rule #4 LLC structure</li>
              <li>Financing: 25% down ($119K), investment mortgage, 30-year fixed</li>
              <li>Occupancy: student + 1 roommate (roommate pays $1,700/mo rent to LLC)</li>
              <li>Family maintains California primary residence</li>
              <li>Student establishes Texas documentary set year 1</li>
              <li>Petition approved for residency starting Fall 2027</li>
            </ul>
            <br />
            <h4>4-year financial outcome</h4>
            <ul className="mb-0">
              <li><strong>Tuition savings:</strong> ~$100,000 (McCombs in-state vs OOS, 3 years)</li>
              <li><strong>Rent income from roommate:</strong> $1,700 × 48 months = $81,600</li>
              <li><strong>Equity build (principal + appreciation at 4%/yr):</strong> ~$90,000</li>
              <li><strong>Depreciation tax shield:</strong> $17,000/yr × 4 = $68,000 in deductions (some may be recaptured at sale)</li>
              <li><strong>Total 4-year benefit:</strong> ~$300,000+</li>
              <li><strong>Post-graduation:</strong> family sells or holds condo; multiple exit options</li>
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
              <li><Link href="/buying-a-condo-for-ut-austin-in-state-tuition">Buying a condo for UT in-state tuition</Link>: primary strategy page</li>
              <li><Link href="/west-campus-condos-in-state-tuition">West Campus condos</Link>: building-by-building</li>
              <li><Link href="/rule-3-vs-rule-4">Rule #3 vs Rule #4</Link>: ownership structure comparison</li>
              <li><Link href="/moving-to-austin-from-out-of-state">Moving to Austin</Link>: full relocation strategy</li>
              <li><Link href="/contact">Contact me</Link>: Texas REALTOR + investment property specialist</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-austin-real-estate-strategy" />
    </>
  );
}
