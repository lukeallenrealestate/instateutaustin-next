import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema, realEstateAgentSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactSection } from '@/components/ContactSection';
import { TUITION, fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

const TITLE = 'Hyde Park Condo Guide for UT Austin Families (Buyer\'s Handbook)';
const DESCRIPTION = `Hyde Park Austin condo and property guide for UT families. Historic neighborhood 10-15 minutes from UT. Prices, character, walkability, and how buying Hyde Park property qualifies for UT residency pathway saving ~${fmtUSD(TUITION.threeYearSavings)} in tuition.`;
const PATH = '/hyde-park-condo-guide-ut-austin';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Where is Hyde Park in Austin?', a: 'Hyde Park is a historic residential neighborhood in central Austin, bounded roughly by 38th Street to the south, 51st Street to the north, Speedway to the east, and Guadalupe Street to the west. Approximately 10-15 minutes from UT Austin campus by bike, scooter, or short drive. One of Austin\'s oldest planned residential neighborhoods (established 1891).' },
  { q: 'What are Hyde Park property prices?', a: 'Hyde Park single-family homes: $700K-$1.2M for smaller (1,500-2,000 sqft) craftsman-style homes; $1.2M-$1.8M for larger (2,500+ sqft) properties. Duplexes: $600K-$1M. Small condo buildings: $350K-$550K. Prices reflect strong appreciation and desirable neighborhood character.' },
  { q: 'How is Hyde Park compared to West Campus for UT?', a: 'Hyde Park: quieter residential character, larger properties, single-family homes and duplexes, 10-15 minute commute to UT (bike/scooter/car; walk impractical). West Campus: dense urban, condos and apartments, 5-10 minute walk to UT, higher density student population. Hyde Park suits families wanting property with space and character; West Campus suits families wanting walkability and student-population density.' },
  { q: 'Does Hyde Park property work for the UT residency pathway?', a: 'Yes. Any Texas residential property works for the residency pathway under Texas Education Code §54.052 provided the student actually lives at the address and maintains the standard documentary indicia. Hyde Park single-family homes and duplexes work particularly well for Rule #3 structures (parent-owned, student-occupied) when parents also spend time in Austin.' },
  { q: 'Are Hyde Park properties good rental investments?', a: 'Yes. Hyde Park rental demand is strong due to graduate students, young professionals, and UT-adjacent employees. Rental income for single-family homes: $3,000-$5,500/month typical. Duplexes: $2,500-$4,000/month per unit. Appreciation has been strong; Hyde Park has among the best long-term appreciation records in Austin.' },
  { q: 'What is Hyde Park like as a neighborhood?', a: 'Hyde Park is one of Austin\'s most character-rich neighborhoods. Tree-lined streets with historic craftsman and prairie-style homes; walkable to local coffee shops, restaurants, small businesses. Adjacent to Duval Street commercial strip and Hyde Park Elementary School. Intellectual, quiet, family-friendly. Popular with UT faculty and staff. Small-town-in-the-city feel.' },
  { q: 'Should I buy a Hyde Park duplex for the UT residency strategy?', a: 'Duplexes work well for families using Rule #4 LLC rental structure. The LLC owns the duplex, rents one unit to the student, and rents the other unit at market rate. Rental income offsets carrying costs while maintaining the residency documentary. Property appreciates as investment. Consult a Texas CPA for LLC structure setup.' },
];

export default function HydeParkGuidePage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Hyde Park Condo Guide for UT Austin', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />
      <Schema data={realEstateAgentSchema()} />

      <PageHero
        eyebrow="Hyde Park Austin · UT residency"
        title={<h1 className="text-ink max-w-[22ch]">Hyde Park Condo Guide for UT Austin</h1>}
        lede="Historic Hyde Park neighborhood for UT families: character homes and duplexes 10-15 minutes from campus. Buyer's guide plus residency pathway strategy."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="Hyde Park at a glance">
            Hyde Park is a historic residential neighborhood in central Austin, 10-15 minutes from UT (bike/scooter/car). Single-family homes: <strong>$700K-$1.2M</strong>. Duplexes: <strong>$600K-$1M</strong>. Small condo buildings: <strong>$350K-$550K</strong>. Works well for UT residency pathway when families want property with character and space instead of West Campus condo density. Strong long-term appreciation.
          </QuickAnswer>

          <AuthorBox blurb="Texas REALTOR (TREC #788149) with deep knowledge of Hyde Park property market and the UT residency pathway strategy." />

          <h2 className="mt-0">Why Hyde Park for UT families</h2>
          <ul>
            <li><strong>Character and space:</strong> historic craftsman and prairie-style homes on tree-lined streets</li>
            <li><strong>Family-friendly:</strong> quieter than West Campus; better fit for parents who spend time in Austin</li>
            <li><strong>Duplex opportunity:</strong> many duplexes suitable for Rule #4 LLC rental structure with student in one unit + market tenant in other</li>
            <li><strong>Strong appreciation:</strong> among Austin&apos;s best long-term appreciation records</li>
            <li><strong>Walkable to Duval Street shops and restaurants</strong></li>
            <li><strong>Local Hyde Park Elementary</strong> (family relocations with younger siblings)</li>
          </ul>

          <h2>Hyde Park property types</h2>

          <h3>Single-family homes (dominant type)</h3>
          <ul>
            <li>1,500-2,500 sqft craftsman and prairie-style</li>
            <li>Built 1890-1930s (historic); some newer builds and renovations</li>
            <li>Prices: $700K-$1.2M for smaller; $1.2M-$1.8M for larger</li>
            <li>2-3 bedrooms typical</li>
            <li>Small yards</li>
          </ul>

          <h3>Duplexes</h3>
          <ul>
            <li>2 attached units (often mirror image or upstairs/downstairs)</li>
            <li>Built 1900-1960s</li>
            <li>Prices: $600K-$1M total (both units)</li>
            <li>Ideal for Rule #4 LLC rental structure</li>
            <li>Rental income: $2,500-$4,000/month per unit</li>
          </ul>

          <h3>Small condo buildings</h3>
          <ul>
            <li>Older 4-12 unit buildings; some newer boutique condos</li>
            <li>Prices: $350K-$550K</li>
            <li>Lower HOA than West Campus high-rises</li>
            <li>More privacy than large buildings</li>
          </ul>

          <h3>Newer duplexes and infill</h3>
          <ul>
            <li>Some newer construction infill projects (2015+)</li>
            <li>Modern amenities in historic-neighborhood setting</li>
            <li>Prices: $800K-$1.3M for newer duplexes</li>
          </ul>

          <h2>The 4-year math on Hyde Park property + UT residency</h2>

          <div className="callout">
            <h4>Duplex + LLC rental strategy</h4>
            <ul className="mb-0">
              <li>Purchase: $850K Hyde Park duplex, 25% down ($212K), investment mortgage</li>
              <li>Monthly carry: ~$5,500 (P&amp;I, tax, insurance, minimal HOA)</li>
              <li>Structure: Rule #4 LLC; student rents Unit A ($2,000/mo formal lease); market tenant rents Unit B ($3,000/mo)</li>
              <li>Rental income to LLC: $5,000/mo × 48 = $240,000 over 4 years</li>
              <li>Net LLC carry after rental income: ~$500/mo</li>
              <li>Tuition savings via residency pathway: ~{fmtUSD(TUITION.threeYearSavings)}</li>
              <li>Equity build (principal + 3-5%/yr appreciation): ~$180,000 over 4 years</li>
              <li><strong>Total 4-year financial impact: ~$300,000+</strong></li>
              <li>Post-graduation: sell, hold as full rental, or occupy as family retreat</li>
            </ul>
          </div>

          <h2>Hyde Park vs West Campus for parent buyers</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Hyde Park</th>
                  <th>West Campus</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Distance to UT</td><td>10-15 min (bike/car)</td><td>5-15 min walk</td></tr>
                <tr><td>Property type</td><td>Single-family, duplex, small condo</td><td>High-rise condo dominant</td></tr>
                <tr><td>Price range</td><td>$350K-$1.8M</td><td>$250K-$700K</td></tr>
                <tr><td>HOA</td><td>Low or none</td><td>$300-$800/month</td></tr>
                <tr><td>Character</td><td>Historic, quiet, tree-lined</td><td>Urban, dense, student-population</td></tr>
                <tr><td>Best for</td><td>Parents who spend time in Austin; larger properties</td><td>Students wanting walkability; investors targeting student rentals</td></tr>
                <tr><td>Rental income potential</td><td>Duplex: $2,500-$4,000/unit</td><td>Condo: $1,700-$2,800/unit</td></tr>
                <tr><td>Appreciation</td><td>Strong long-term; historic character premium</td><td>Strong; UT-demand-driven</td></tr>
              </tbody>
            </table>
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
              <li><Link href="/buying-a-condo-for-ut-austin-in-state-tuition">Buying a condo strategy</Link>: complete playbook</li>
              <li><Link href="/west-campus-condos-in-state-tuition">West Campus condos</Link>: alternative neighborhood</li>
              <li><Link href="/rule-3-vs-rule-4">Rule #3 vs Rule #4</Link>: structure comparison</li>
              <li><Link href="/contact">Contact me</Link>: Texas REALTOR specializing in this</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-hyde-park" />
    </>
  );
}
