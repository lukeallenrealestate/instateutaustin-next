import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactSection } from '@/components/ContactSection';
import { SITE } from '@/lib/site';

const TITLE = 'UT Austin Family Weekend Guide: Dates, Events, Hotels (2026)';
const DESCRIPTION = 'UT Austin Family Weekend 2026: complete guide for parents. Typical October dates, football game tickets, hotel recommendations, restaurants, campus events, and how to make the most of the weekend.';
const PATH = '/ut-austin-family-weekend-guide';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'When is UT Austin Family Weekend 2026?', a: 'UT Austin Family Weekend is typically held in October each fall. For 2026, expect Family Weekend in early-to-mid October (specific dates confirmed by UT Parents Association typically in summer). Weekend includes Friday events, Saturday football game, and Sunday brunch activities.' },
  { q: 'How do I get UT football tickets for Family Weekend?', a: 'Family Weekend tickets are released to families of currently enrolled students through the Texas Parents Association typically in August/September. Additional tickets available through the general public ticket sale but at higher prices. Home game selection matters; UT typically schedules Family Weekend on a home game with strong opponent (recent SEC opponents make this competitive for tickets).' },
  { q: 'Where should families stay during UT Family Weekend?', a: 'Popular options near campus: The Line Hotel (downtown, walking distance to Sixth Street); Fairmont Austin (downtown, upscale); AT&amp;T Executive Education and Conference Center (on campus); The Driskill (historic downtown); Kimpton Hotel Van Zandt (South Congress); AC Hotel Austin Downtown. Book early (2-3 months in advance) as hotels fill quickly. Consider Airbnb near campus for larger families.' },
  { q: 'What are must-visit UT campus locations during Family Weekend?', a: 'Iconic UT locations: The Tower (307 feet; lit orange for wins); Bevo Statue and Litchfield Bevo statue; UT South Mall (main outdoor plaza); Blanton Museum of Art; Harry Ransom Center; LBJ Presidential Library; Bass Concert Hall; Frank Erwin Center. Football game at Darrell K Royal-Texas Memorial Stadium is the weekend centerpiece.' },
  { q: 'What are the best restaurants near UT for Family Weekend?', a: 'Near campus favorites: Franklin Barbecue (world-famous but long lines); Uchi (upscale sushi); Terry Black\'s Barbecue; Salt &amp; Time (deli); Wu Chow (Chinese); Uchiko; Perla\'s (Mexican, South Congress). Coffee: Once Over, Radio Coffee, Merit Coffee. Sixth Street bars for older students and parents.' },
  { q: 'How much should families budget for UT Family Weekend?', a: 'Typical family weekend budget: hotel $250-$500/night × 2-3 nights = $500-$1,500; food and drinks $200-$400/day × 3 days = $600-$1,200; football tickets $150-$350/person × 2-4 people = $600-$1,400; parking $30-$60/day; transportation Uber/Lyft $100-$200. Total: $2,000-$4,500 for a typical family of 3-4 for 3-day weekend.' },
];

export default function FamilyWeekendPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Family Weekend', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="Family Weekend guide"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Family Weekend Guide</h1>}
        lede="Complete parent guide to UT Family Weekend: dates, football tickets, hotels, restaurants, campus events, and how to make the most of your visit to Austin."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="Family Weekend at a glance">
            UT Austin Family Weekend is typically held in <strong>early-to-mid October</strong>. The weekend centers on a home football game at Darrell K Royal-Texas Memorial Stadium plus various campus events, dining, and downtown Austin experiences. Book hotels 2-3 months in advance; football tickets sell out quickly. Total budget for a family of 3-4 for 3-day weekend: <strong>$2,000-$4,500</strong>.
          </QuickAnswer>

          <AuthorBox blurb="Helps out-of-state UT families plan Family Weekend trips including logistics for a smooth Austin visit." />

          <h2 className="mt-0">Family Weekend timeline and events</h2>

          <h3>Friday (arrival day)</h3>
          <ul>
            <li>Fly into Austin-Bergstrom International Airport (AUS) or drive</li>
            <li>Check into hotel; pick up rental car if driving from airport</li>
            <li>Dinner in Austin: Sixth Street, South Congress, or East Austin restaurants</li>
            <li>Optional: Texas Parents Association welcome events on campus</li>
          </ul>

          <h3>Saturday (game day)</h3>
          <ul>
            <li>Morning: campus tours, Blanton Museum, Bevo statue photos</li>
            <li>Lunch: pre-game meal (arrive at stadium area 3-4 hours before kickoff)</li>
            <li>Tailgating: parking lots and student events</li>
            <li>Football game at Darrell K Royal-Texas Memorial Stadium (typically 3 hours)</li>
            <li>Post-game: dinner and Austin nightlife</li>
          </ul>

          <h3>Sunday (departure day)</h3>
          <ul>
            <li>Brunch options: Cafe Josie, Peached Tortilla, Bacon</li>
            <li>Optional campus activities</li>
            <li>South Congress or downtown shopping</li>
            <li>Departure</li>
          </ul>

          <h2>Recommended hotels near UT</h2>
          <ul>
            <li><strong>AT&amp;T Executive Education and Conference Center:</strong> on UT campus; convenient but often full for Family Weekend</li>
            <li><strong>The Line Hotel Austin:</strong> downtown, walking distance to Sixth Street, upscale, ~$300-$450/night</li>
            <li><strong>Fairmont Austin:</strong> downtown luxury, ~$400-$600/night</li>
            <li><strong>The Driskill:</strong> historic downtown Austin, ~$350-$500/night</li>
            <li><strong>Kimpton Hotel Van Zandt:</strong> Rainey Street area, ~$300-$450/night</li>
            <li><strong>AC Hotel Austin Downtown:</strong> downtown, more moderate ~$225-$350/night</li>
            <li><strong>The Otis Hotel:</strong> Central Austin, ~$250-$400/night</li>
            <li><strong>Airbnb options:</strong> Central Austin single-family homes or condos for larger families</li>
          </ul>

          <h2>Must-visit UT campus locations</h2>
          <ul>
            <li><strong>UT Tower:</strong> 307-foot bell tower; lit orange for major wins; tower tours available</li>
            <li><strong>Bevo Statue and Litchfield Bevo:</strong> photo opportunity</li>
            <li><strong>UT South Mall:</strong> main campus plaza; classic UT photos</li>
            <li><strong>Blanton Museum of Art:</strong> substantial art collection; free admission</li>
            <li><strong>Harry Ransom Center:</strong> rare books and manuscripts; Gutenberg Bible on display</li>
            <li><strong>LBJ Presidential Library:</strong> Lyndon B. Johnson museum on campus</li>
            <li><strong>Bass Concert Hall:</strong> Butler School of Music performances</li>
            <li><strong>UT Athletics Hall of Honor:</strong> at Darrell K Royal-Texas Memorial Stadium</li>
          </ul>

          <h2>Restaurant recommendations by category</h2>

          <h3>Iconic Austin barbecue</h3>
          <ul>
            <li><strong>Franklin Barbecue:</strong> world-famous; long lines but worth it; go for late lunch</li>
            <li><strong>Terry Black&apos;s Barbecue:</strong> more accessible; excellent</li>
            <li><strong>Micklethwait Craft Meats:</strong> East Austin favorite</li>
          </ul>

          <h3>Upscale dining</h3>
          <ul>
            <li><strong>Uchi:</strong> upscale sushi; South Lamar</li>
            <li><strong>Uchiko:</strong> sister restaurant to Uchi; North Loop</li>
            <li><strong>Perla&apos;s:</strong> Mexican coastal cuisine; South Congress</li>
          </ul>

          <h3>Near UT campus</h3>
          <ul>
            <li><strong>Salt &amp; Time:</strong> deli and butcher; Manor Road</li>
            <li><strong>Wu Chow:</strong> Chinese; downtown</li>
            <li><strong>Blenders and Bowls:</strong> quick UT-adjacent</li>
            <li><strong>Halal Bros:</strong> West Campus favorite</li>
          </ul>

          <h3>Coffee</h3>
          <ul>
            <li>Once Over Coffee Bar</li>
            <li>Radio Coffee &amp; Beer</li>
            <li>Merit Coffee</li>
            <li>Cosmic Coffee</li>
          </ul>

          <h2>Football game tickets and logistics</h2>
          <ul>
            <li>Family Weekend games typically release tickets to families first through Texas Parents Association</li>
            <li>Buy early: 60-90 days before the game if you want good seats</li>
            <li>Ticket prices for family weekend games: $150-$350 per ticket typical, higher for prime opponents</li>
            <li>Consider premium options: club seats or suites for larger families</li>
            <li>Stadium capacity: 100,000+; arrive 2-3 hours early for parking and tailgating</li>
            <li>Parking: reserved on-campus $50-$80; off-site $30-$50; consider Uber/Lyft</li>
          </ul>

          <h2>Budget planning</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Budget (Family of 4, 3 days)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Hotel (2 nights)</td><td className="num">$500-$1,500</td></tr>
                <tr><td>Football tickets (4 people)</td><td className="num">$600-$1,400</td></tr>
                <tr><td>Meals (3 days)</td><td className="num">$600-$1,200</td></tr>
                <tr><td>Parking/Transportation</td><td className="num">$150-$300</td></tr>
                <tr><td>Miscellaneous/Souvenirs</td><td className="num">$150-$300</td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>Total</strong></td><td className="num"><strong>$2,000-$4,500</strong></td></tr>
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
              <li><Link href="/ut-family-orientation">UT family orientation</Link>: prep before move-in</li>
              <li><Link href="/moving-to-austin-from-out-of-state">Moving to Austin</Link>: relocation guide</li>
              <li><Link href="/ut-austin-freshman-year-guide">Freshman year guide</Link>: parent handbook</li>
              <li><Link href="/ut-austin-cost-of-living-austin">Austin cost of living</Link>: budget planning</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-family-weekend" />
    </>
  );
}
