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

const TITLE = 'Best Austin Neighborhoods for UT Students (Complete 2026 Guide)';
const DESCRIPTION = 'Best Austin neighborhoods for UT students: West Campus (walkable), Hyde Park (character), North Campus (mixed), East Riverside (value), Downtown/Rainey (urban), Mueller (planned). Comparison + rankings.';
const PATH = '/best-austin-neighborhoods-for-ut-students';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is the best neighborhood in Austin for UT students?', a: 'For walkability + student density: West Campus is #1. For character + quieter: Hyde Park. For value + more space: East Riverside. For urban young-professional feel: Downtown or Rainey Street. Best overall depends on priorities: walkability (West Campus), affordability (East Riverside), character (Hyde Park), urban lifestyle (Downtown). Most freshmen live on campus; sophomores+ typically move to West Campus.' },
  { q: 'Where do most UT students live off-campus?', a: 'West Campus is by far the dominant off-campus neighborhood for UT undergraduates, with 15-20 major condo/apartment buildings plus dozens of smaller ones housing thousands of students. Approximately 60-70% of off-campus undergraduate housing is in West Campus. Other neighborhoods (Hyde Park, North Campus, Riverside) house smaller student populations.' },
  { q: 'Is North Campus a good area for UT students?', a: 'North Campus (immediately north of UT Tower area) is popular for graduate students and upperclass undergrads. Less dense than West Campus, slightly further walk to core campus (15-20 min), mixed with graduate housing and residential. Good balance of proximity and quieter environment.' },
  { q: 'Is East Riverside safe for UT students?', a: 'East Riverside (south of Lady Bird Lake, ~2 miles from UT) has traditionally been considered less safe than West Campus but has improved substantially over the past decade. Current safety is comparable to typical urban college neighborhoods. Some students prefer the value + space; others prefer West Campus walkability.' },
  { q: 'Should my UT student live downtown Austin?', a: 'Downtown Austin (Rainey Street, Sixth Street area) is 1.5-3 miles from UT campus. Requires transportation (bus, Uber, car). Popular with grad students, professionals working downtown, and undergrads wanting urban lifestyle. Higher rents than West Campus. Not ideal for freshmen (further from campus community).' },
  { q: 'What about Mueller for UT students?', a: 'Mueller is a master-planned community 5 miles east of UT (10-15 min drive). Newer construction, popular with young professionals and families. Some UT graduate students and staff live here. Not a typical undergrad neighborhood due to distance. Growing community with strong amenities (parks, groceries, restaurants).' },
  { q: 'What is the safest neighborhood for UT students?', a: 'Hyde Park and North Campus tend to be quieter with lower incident rates typical of family residential neighborhoods. West Campus has high pedestrian density (safety by street-eyes effect) but also more late-night student activity. East Riverside has more variability by specific street/building. All are generally safe with typical urban precautions.' },
];

export default function BestNeighborhoodsPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'Best Austin Neighborhoods for UT Students', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />
      <Schema data={realEstateAgentSchema()} />

      <PageHero
        eyebrow="Austin neighborhoods"
        title={<h1 className="text-ink max-w-[22ch]">Best Austin Neighborhoods for UT Students</h1>}
        lede="Complete guide to Austin neighborhoods for UT students: West Campus, Hyde Park, North Campus, East Riverside, Downtown, Mueller. Comparison, rankings, and how each supports the residency pathway."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="Neighborhood rankings">
            For UT students: <strong>West Campus</strong> #1 for walkability + student density; <strong>Hyde Park</strong> #2 for character + quieter; <strong>North Campus</strong> #3 for balance; <strong>East Riverside</strong> for value; <strong>Downtown/Rainey</strong> for urban lifestyle; <strong>Mueller</strong> for planned-community feel. West Campus dominates undergraduate housing (60-70% of off-campus students). Selection depends on priorities: walkability, cost, character, or lifestyle.
          </QuickAnswer>

          <AuthorBox blurb="Texas REALTOR (TREC #788149) with deep knowledge of Austin neighborhoods for UT students and parent buyers." />

          <h2 className="mt-0">The 6 major Austin neighborhoods for UT students</h2>

          <h3>1. West Campus (walkable, dense, dominant)</h3>
          <ul>
            <li><strong>Location:</strong> Immediately west of UT (Guadalupe to MoPac, MLK to 29th)</li>
            <li><strong>Distance to UT:</strong> 5-15 minutes walking</li>
            <li><strong>Property types:</strong> Condos dominant (high-rise + walk-up)</li>
            <li><strong>Rent:</strong> $1,400-$2,200/month per bedroom in shared units</li>
            <li><strong>Purchase price:</strong> $250K-$700K for 1-2BR condos</li>
            <li><strong>Best for:</strong> Undergraduates wanting walkability + student community</li>
            <li><strong>Ranking for UT students:</strong> #1</li>
          </ul>

          <h3>2. Hyde Park (character, quieter)</h3>
          <ul>
            <li><strong>Location:</strong> 38th to 51st, Speedway to Guadalupe</li>
            <li><strong>Distance to UT:</strong> 10-15 min bike/car</li>
            <li><strong>Property types:</strong> Single-family, duplex, small condo buildings</li>
            <li><strong>Rent:</strong> $900-$1,500/month per bedroom in shared houses</li>
            <li><strong>Purchase price:</strong> $700K-$1.2M for single-family homes; $600K-$900K for duplexes</li>
            <li><strong>Best for:</strong> Grad students, upperclass undergrads, families</li>
            <li><strong>Ranking for UT students:</strong> #2</li>
          </ul>

          <h3>3. North Campus (mixed, balanced)</h3>
          <ul>
            <li><strong>Location:</strong> 29th to 38th, Guadalupe to Speedway</li>
            <li><strong>Distance to UT:</strong> 10-15 min walk or bike</li>
            <li><strong>Property types:</strong> Mixed apartments, houses, some condos</li>
            <li><strong>Rent:</strong> $1,000-$1,700/month per bedroom</li>
            <li><strong>Best for:</strong> Balance of proximity and quieter environment</li>
            <li><strong>Ranking for UT students:</strong> #3</li>
          </ul>

          <h3>4. East Riverside (value, transportation needed)</h3>
          <ul>
            <li><strong>Location:</strong> South of Lady Bird Lake, ~2 miles from UT</li>
            <li><strong>Distance to UT:</strong> 10-20 min by car or bus</li>
            <li><strong>Property types:</strong> Apartment complexes, condos</li>
            <li><strong>Rent:</strong> $750-$1,300/month per bedroom</li>
            <li><strong>Purchase price:</strong> $200K-$400K for 2BR condos</li>
            <li><strong>Best for:</strong> Budget-focused, students comfortable with commute</li>
            <li><strong>Ranking for UT students:</strong> #4</li>
          </ul>

          <h3>5. Downtown / Rainey Street (urban, upscale)</h3>
          <ul>
            <li><strong>Location:</strong> Central downtown Austin, Rainey Street district</li>
            <li><strong>Distance to UT:</strong> 1.5-3 miles; requires bus, Uber, car</li>
            <li><strong>Property types:</strong> High-rise apartments and condos</li>
            <li><strong>Rent:</strong> $1,800-$3,500/month for 1BR</li>
            <li><strong>Purchase price:</strong> $400K-$1M+ for downtown condos</li>
            <li><strong>Best for:</strong> Grad students, professionals working downtown, urban lifestyle</li>
            <li><strong>Ranking for UT students:</strong> #5 (higher for grads)</li>
          </ul>

          <h3>6. Mueller (planned community, further out)</h3>
          <ul>
            <li><strong>Location:</strong> 5 miles east of UT, master-planned community</li>
            <li><strong>Distance to UT:</strong> 10-15 min drive</li>
            <li><strong>Property types:</strong> New construction homes, condos, apartments</li>
            <li><strong>Best for:</strong> Grad students, families, staff</li>
            <li><strong>Ranking for undergraduates:</strong> #6 (mostly for grad students and families)</li>
          </ul>

          <h2>Neighborhood comparison table</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Neighborhood</th>
                  <th>Walk to UT</th>
                  <th>Typical Rent (per BR)</th>
                  <th>Character</th>
                  <th>Purchase</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>West Campus</td><td>5-15 min walk</td><td className="num">$1,400-$2,200</td><td>Dense urban student</td><td className="num">$250K-$700K condos</td></tr>
                <tr><td>Hyde Park</td><td>10-15 min bike/car</td><td className="num">$900-$1,500</td><td>Historic residential</td><td className="num">$600K-$1.8M</td></tr>
                <tr><td>North Campus</td><td>10-15 min walk</td><td className="num">$1,000-$1,700</td><td>Mixed residential</td><td className="num">$400K-$900K</td></tr>
                <tr><td>East Riverside</td><td>10-20 min car/bus</td><td className="num">$750-$1,300</td><td>Value apartments</td><td className="num">$200K-$400K</td></tr>
                <tr><td>Downtown/Rainey</td><td>10-20 min car/bus</td><td className="num">$1,800-$3,500</td><td>Urban high-rise</td><td className="num">$400K-$1M+</td></tr>
                <tr><td>Mueller</td><td>10-15 min drive</td><td className="num">$1,400-$2,200</td><td>Planned community</td><td className="num">$500K-$900K</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Neighborhood recommendation by student type</h2>

          <h3>Freshman (typically on-campus, but if off-campus)</h3>
          <ul>
            <li>Best: West Campus (proximity to freshman social scene)</li>
            <li>Alternative: North Campus (quieter but close)</li>
          </ul>

          <h3>Sophomore-Junior undergrad</h3>
          <ul>
            <li>Most popular: West Campus (student density, walkability)</li>
            <li>Best value: East Riverside</li>
            <li>Character: Hyde Park or North Campus</li>
          </ul>

          <h3>Senior undergrad</h3>
          <ul>
            <li>West Campus still popular; some move to Hyde Park or downtown</li>
            <li>Wanting more space or professional feel: Hyde Park duplex or downtown apartment</li>
          </ul>

          <h3>Grad students</h3>
          <ul>
            <li>Popular: Hyde Park, North Campus, downtown, Mueller</li>
            <li>Less popular: West Campus (undergrad-dominant)</li>
          </ul>

          <h3>Parent buyers for residency pathway</h3>
          <ul>
            <li>Most common: West Campus condo (walkable for student)</li>
            <li>Alternative for families: Hyde Park house or duplex (character, space, rental income potential)</li>
            <li>Value pick: East Riverside condo (lower price point)</li>
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
              <li><Link href="/west-campus-vs-hyde-park">West Campus vs Hyde Park</Link>: head-to-head comparison</li>
              <li><Link href="/west-campus-condos-in-state-tuition">West Campus condos</Link>: building-by-building</li>
              <li><Link href="/hyde-park-condo-guide-ut-austin">Hyde Park guide</Link>: property options</li>
              <li><Link href="/buying-a-condo-for-ut-austin-in-state-tuition">Buying a condo strategy</Link>: full playbook</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-best-neighborhoods" />
    </>
  );
}
