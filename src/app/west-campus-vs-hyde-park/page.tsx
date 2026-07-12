import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema, realEstateAgentSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactSection } from '@/components/ContactSection';
import { SITE } from '@/lib/site';

const TITLE = 'West Campus vs Hyde Park: Which UT Austin Neighborhood for Parents?';
const DESCRIPTION = 'West Campus vs Hyde Park comparison for UT Austin parent buyers: walkability, character, prices, HOA, rental income, and which neighborhood fits the residency pathway strategy.';
const PATH = '/west-campus-vs-hyde-park';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Should I buy in West Campus or Hyde Park near UT?', a: 'Depends on family priorities. West Campus: walkable to UT (5-15 min), dense urban condo buildings, higher HOA, prices $350K-$650K. Hyde Park: 10-15 min commute (bike/car), single-family homes and duplexes, low HOA, prices $600K-$1.2M for houses. West Campus for walkability + student density; Hyde Park for character + property size.' },
  { q: 'Which is cheaper: West Campus condo or Hyde Park house?', a: 'West Campus condos start lower ($350K-$650K) than Hyde Park single-family homes ($700K-$1.2M). But West Campus HOA ($300-$800/month) offsets much of the price advantage. Hyde Park total monthly carry is often comparable to West Campus once HOA is factored in. Hyde Park properties are also typically 2-3x the square footage.' },
  { q: 'Which neighborhood is safer near UT?', a: 'Both are generally safe. West Campus has higher pedestrian density which creates eyes-on-street safety but also more late-night student activity. Hyde Park is quieter with lower crime rates typical of residential neighborhoods. For students who prioritize quiet, Hyde Park is preferred; for students who prioritize walking distance and student community, West Campus.' },
  { q: 'Which has better appreciation potential?', a: 'Both have strong Austin appreciation. Hyde Park has slightly better long-term appreciation (character neighborhoods and single-family typically outperform high-rise condos over 10+ year horizons). West Campus condos have appreciated at market rates. Individual buildings and blocks vary; consult a Texas REALTOR for building-specific data.' },
  { q: 'Which neighborhood has better rental income?', a: 'West Campus condos generate approximately $1,700-$2,800/month per bedroom in shared units. Hyde Park single-family and duplex rentals generate $2,500-$5,000/month per unit. Hyde Park duplex rentals can generate $5,000-$8,000/month total (both units). For maximum rental income offset, Hyde Park duplex structures typically outperform West Campus condos.' },
  { q: 'For Rule #3 vs Rule #4, which neighborhood works better?', a: 'Both work for both rules. West Campus condos work naturally for both Rule #3 (student-occupied) and Rule #4 (LLC rental). Hyde Park duplex structures are particularly well-suited for Rule #4 LLC rental where the LLC rents Unit A to the student and Unit B to a market tenant, generating strong rental income offset. Hyde Park single-family homes work best under Rule #3 with parent occupancy.' },
];

export default function WestCampusVsHydePark() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'West Campus vs Hyde Park', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />
      <Schema data={realEstateAgentSchema()} />

      <PageHero
        eyebrow="Neighborhood comparison"
        title={<h1 className="text-ink max-w-[22ch]">West Campus vs Hyde Park</h1>}
        lede="The definitive comparison for UT Austin parent buyers: walkability, character, prices, HOA, rental income, and neighborhood fit for the residency pathway."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The quick take">
            <strong>West Campus</strong> = walkable, dense, condo-dominant, $350K-$650K, higher HOA, student-focused. <strong>Hyde Park</strong> = character, quieter, single-family + duplex, $600K-$1.2M, low HOA, family-friendly. West Campus wins for walkability + student density; Hyde Park wins for character + property size + rental income potential via duplex.
          </QuickAnswer>

          <AuthorBox blurb="Texas REALTOR (TREC #788149) with deep experience in both West Campus and Hyde Park markets for UT parent buyers." />

          <h2 className="mt-0">Side-by-side comparison</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>West Campus</th>
                  <th>Hyde Park</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Distance to UT</td><td>5-15 min walk</td><td>10-15 min bike/car</td></tr>
                <tr><td>Property types</td><td>Condos (high-rise + walk-up)</td><td>Single-family, duplex, small condo</td></tr>
                <tr><td>Price range</td><td>$250K-$700K</td><td>$350K-$1.8M</td></tr>
                <tr><td>Typical size</td><td>500-1,200 sqft</td><td>1,500-2,500 sqft</td></tr>
                <tr><td>HOA</td><td>$300-$800/mo</td><td>$0-$200/mo</td></tr>
                <tr><td>Property tax</td><td>~2% of value</td><td>~2% of value</td></tr>
                <tr><td>Character</td><td>Urban, dense, student-population</td><td>Historic, tree-lined, family</td></tr>
                <tr><td>Best resident type</td><td>Student-only occupancy</td><td>Student + parents, or student + roommate</td></tr>
                <tr><td>Rental income (per unit)</td><td>$1,700-$2,800/mo</td><td>$2,500-$5,000/mo</td></tr>
                <tr><td>Rule #3 fit</td><td>Good</td><td>Excellent (family homes)</td></tr>
                <tr><td>Rule #4 fit</td><td>Good (single condo)</td><td>Excellent (duplex structure)</td></tr>
                <tr><td>Long-term appreciation</td><td>Market rate</td><td>Above market historically</td></tr>
                <tr><td>Best for</td><td>Walkable student housing</td><td>Family homes + rental investment</td></tr>
              </tbody>
            </table>
          </div>

          <h2>West Campus deep dive</h2>
          <p>West Campus is bounded by Guadalupe Street to the east, MoPac to the west, MLK Boulevard to the south, and 29th Street to the north. Dense urban neighborhood with 15-20 major condo buildings plus dozens of smaller buildings.</p>
          <ul>
            <li><strong>Population:</strong> Dominantly UT students and young professionals</li>
            <li><strong>Amenities:</strong> Walking distance to UT campus, Sixth Street, South Congress</li>
            <li><strong>Dining:</strong> Halal Bros, Madam Mam&apos;s, JuiceLand, Cabo Bobs, dozens of options</li>
            <li><strong>Grocery:</strong> HEB and Whole Foods within walking distance</li>
            <li><strong>Traffic:</strong> Heavy pedestrian activity; parking limited</li>
          </ul>

          <h2>Hyde Park deep dive</h2>
          <p>Hyde Park is a historic residential neighborhood bounded by 38th Street, 51st Street, Speedway, and Guadalupe. Established 1891; one of Austin&apos;s oldest planned residential neighborhoods.</p>
          <ul>
            <li><strong>Population:</strong> Mix of families, UT faculty/staff, graduate students, young professionals</li>
            <li><strong>Amenities:</strong> Duval Street commercial strip (coffee shops, restaurants, small businesses)</li>
            <li><strong>Character:</strong> Tree-lined streets with craftsman/prairie-style historic homes</li>
            <li><strong>Schools:</strong> Hyde Park Elementary (family relocations)</li>
            <li><strong>Traffic:</strong> Quiet residential streets</li>
          </ul>

          <h2>Which fits your family?</h2>

          <h3>Choose West Campus if:</h3>
          <ul>
            <li>Student wants walking distance to UT</li>
            <li>Family wants condo (lower maintenance)</li>
            <li>Budget is $350K-$650K</li>
            <li>Family doesn&apos;t plan to spend significant time in Austin</li>
            <li>Student prefers student-community density</li>
            <li>Investing purely for student housing without additional occupants</li>
          </ul>

          <h3>Choose Hyde Park if:</h3>
          <ul>
            <li>Family wants larger property with character</li>
            <li>Budget allows $600K-$1.2M for homes ($850K for duplex Rule #4 strategy)</li>
            <li>Parents plan to spend significant time in Austin (Rule #3)</li>
            <li>Rule #4 with duplex renting to student + market tenant for maximum rental income</li>
            <li>Family relocation with younger siblings (Hyde Park Elementary)</li>
            <li>Preference for quieter residential neighborhood</li>
          </ul>

          <h2>The 4-year financial comparison</h2>

          <h3>Scenario A: West Campus condo ($475K)</h3>
          <ul>
            <li>Purchase: $475K, 25% down ($119K), investment mortgage</li>
            <li>Monthly carry: ~$3,800 (P&amp;I, tax, HOA, insurance)</li>
            <li>4-year carry: ~$182K</li>
            <li>4-year appreciation + equity: ~$85K</li>
            <li>Tuition savings via residency: ~$99K</li>
            <li><strong>Net 4-year impact:</strong> ~$300K+</li>
          </ul>

          <h3>Scenario B: Hyde Park duplex ($850K)</h3>
          <ul>
            <li>Purchase: $850K, 25% down ($212K), investment mortgage</li>
            <li>Monthly carry: ~$5,500</li>
            <li>Rental income (market tenant in Unit B): $3,000/mo = $144K over 4 years</li>
            <li>Net 4-year carry: ~$120K</li>
            <li>4-year appreciation + equity: ~$180K</li>
            <li>Tuition savings via residency: ~$99K</li>
            <li><strong>Net 4-year impact:</strong> ~$400K+</li>
          </ul>

          <p>Hyde Park duplex strategy typically outperforms West Campus condo when family has capital for larger purchase, primarily due to rental income and appreciation dynamics.</p>

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
              <li><Link href="/west-campus-condos-in-state-tuition">West Campus condos</Link>: building-by-building</li>
              <li><Link href="/hyde-park-condo-guide-ut-austin">Hyde Park guide</Link>: property options</li>
              <li><Link href="/buying-a-condo-for-ut-austin-in-state-tuition">Buying a condo strategy</Link>: full playbook</li>
              <li><Link href="/contact">Contact me</Link>: Texas REALTOR</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-westcampus-vs-hydepark" />
    </>
  );
}
