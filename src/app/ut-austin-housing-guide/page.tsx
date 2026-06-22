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

const TITLE = 'UT Austin Housing Guide for Parents (Dorms, Off-Campus, Owned Property)';
const DESCRIPTION = `The complete UT Austin housing guide for parents. Dorm rates ($11K-$15K), off-campus apartments ($13K-$25K), and family-owned condo math for out-of-state families pursuing the Texas residency tuition pathway.`;
const PATH = '/ut-austin-housing-guide';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Is on-campus housing required for first-year students at UT Austin?', a: 'No. UT Austin does not require freshmen to live on campus. About 25% of UT undergraduates live in residence halls; the majority live off campus, primarily in West Campus, Hyde Park, North Campus, Riverside, and East Austin. First-year students often choose dorms for the community and convenience but it is not mandatory.' },
  { q: 'What is the best UT Austin residence hall?', a: 'Subjective and depends on the student. By common reputation: Honors Quad (Andrews, Carothers, Blanton) and Almetris Duren are the most modern and popular. Jester East/West are the largest and most central but older. Kinsolving is the largest women-only hall. San Jacinto is well-located near most engineering classes. Roberts/Prather are smaller community-focused halls. Apply early through the Housing Portal in February of the year before enrollment.' },
  { q: 'How much does an off-campus apartment near UT cost?', a: 'Per-bedroom rents in furnished four-bedroom shared apartments run $1,000-$1,800/month including most utilities ($12,000-$21,600/year per bedroom). Smaller 1-bedroom condos rent at $1,500-$2,500/month. Two-bedroom condos run $1,800-$3,500/month. West Campus has the highest density of student housing; Hyde Park is quieter and slightly cheaper.' },
  { q: 'Where do UT Austin parents recommend their students live?', a: 'For first-year students, on-campus or West Campus are the most common parent recommendations because both provide community and short walks to class. For second year and beyond, parents who plan a four-year stay often consider buying a condo for the student, both because the financial math works over four years and because it solves the Texas residency requirement for in-state tuition (saves $33,220/year). Parents who do not commit to four years typically pick West Campus apartments for the convenience.' },
  { q: 'Is West Campus safe?', a: 'West Campus is densely populated with students and is generally safe, with the usual urban precautions. UT Police patrols the area, and Code Blue emergency phones are installed throughout. As with any college neighborhood, the late-night party scene on Thursday-Saturday nights produces noise and occasional incidents around the Drag (Guadalupe Street between 24th and 29th). Most apartment buildings have controlled access and security.' },
  { q: 'Can my student live with me if I buy a condo in Austin?', a: 'Yes, and many out-of-state families do exactly this as part of the Texas residency pathway for in-state tuition. The parent acquires a condo near UT, the student lives there, and the family maintains the Texas domicile that qualifies for the in-state tuition rate after 12 months. This pathway typically saves the family more in tuition than the condo costs in carrying expenses. See our condos near UT page for the property guide.' },
  { q: 'What is the cheapest way to house a UT Austin student?', a: 'A shared bedroom in a four-bedroom West Campus apartment runs $700-$1,000/month — the absolute cheapest legitimate option near campus. UT residence halls (basic options like Jester East) run about $11,000-$12,000/year before meals, or $13,000-$15,000 once required dorms-meals are added. Off-campus alone at the cheapest end: ~$13,000-$15,000/year. Both options run comparable. For out-of-state families, the cheapest option over four years is usually a family-owned condo with the residency-tuition savings captured.' },
];

export default function HousingGuidePage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'UT Austin Housing Guide', path: PATH },
      ])} />
      <Schema data={articleSchema({
        headline: TITLE,
        description: DESCRIPTION,
        path: PATH,
        datePublished: '2026-06-19',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin housing"
        title={<h1 className="text-ink max-w-[22ch]">The UT Austin Housing Guide for Parents</h1>}
        lede="Residence halls, off-campus apartments, and family-owned condos: full cost comparison, neighborhood map, and the residency pathway angle for out-of-state families."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The 60-second answer">
            UT Austin parents have three housing choices for their student: <strong>on-campus residence halls</strong> (~$11,000-$15,000/year plus required meals at most halls), <strong>off-campus apartments</strong> (~$13,000-$25,000/year for a private or shared bedroom), or <strong>family-owned property</strong> (variable). For out-of-state families, the family-owned condo route is the only option that also unlocks the Texas residency pathway, which saves approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> on UT tuition. About 25% of UT undergraduates live on campus; the rest are in West Campus, Hyde Park, Riverside, and East Austin.
          </QuickAnswer>

          <AuthorBox blurb="Has personally helped dozens of UT parents evaluate the dorm-vs-apartment-vs-condo question, including the residency tuition pathway that makes the condo math work for out-of-state families." />

          <h2 className="mt-0">The three housing options at UT Austin</h2>

          <h2>Option A: On-campus residence halls</h2>

          <p>UT operates 14 residence halls with approximately 7,400 beds, housing about 25% of the undergraduate population. Halls vary significantly in cost, layout, and culture.</p>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr><th>Hall</th><th>Approx. Annual Cost</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>Jester East / West</td><td className="num">$11,000-$12,500</td><td>Largest halls; central location near most classes; older buildings; double rooms common.</td></tr>
                <tr><td>Kinsolving</td><td className="num">$11,500-$13,000</td><td>Women-only; central; older but well-maintained.</td></tr>
                <tr><td>San Jacinto</td><td className="num">$12,000-$13,500</td><td>Close to engineering classes; mid-cost mix of singles and doubles.</td></tr>
                <tr><td>Roberts / Prather</td><td className="num">$12,000-$13,500</td><td>Smaller halls; community-focused; popular with Plan II Honors students.</td></tr>
                <tr><td>Honors Quad (Andrews, Carothers, Blanton)</td><td className="num">$13,000-$14,500</td><td>For Plan II and other honors students; selective placement.</td></tr>
                <tr><td>Almetris Duren</td><td className="num">$14,000-$15,500</td><td>Newer renovation; popular with upperclassmen; apartment-style.</td></tr>
                <tr><td>Whitis Court</td><td className="num">$14,500-$15,500</td><td>Newer; apartment-style with kitchens; no required meal plan.</td></tr>
              </tbody>
            </table>
          </div>

          <p>Most residence halls require a meal plan (~$5,000-$6,000/year additional). Whitis Court, Almetris Duren, and a few other apartment-style halls do not require it.</p>

          <p>UT housing applications open in February of the year before enrollment. Apply as early as possible; demand exceeds supply for several halls. The Housing Portal in MyStatus handles the application.</p>

          <h2>Option B: Off-campus apartments</h2>

          <p>The majority of UT students live off campus, primarily in West Campus and surrounding neighborhoods. Five neighborhoods to know:</p>

          <h3>West Campus</h3>
          <p>The densest student-housing neighborhood, immediately west of campus from 23rd to 29th Street. Filled with purpose-built student apartment buildings (Skyloft, Lark, The Standard, Rise West Campus, Nine63, 26 West, The Castilian, Moontower, and many more). Per-bedroom rents in furnished four-bedroom shared apartments: $1,000-$1,800/month including most utilities. Studios and one-bedrooms: $1,500-$2,500/month. 5-15 minute walks to class.</p>

          <h3>Hyde Park</h3>
          <p>North of campus, more residential. Mix of older houses and a smaller selection of newer apartment complexes along Avenue A, Avenue B, and the cross streets. Quieter culture than West Campus. Rents typically 10-15% lower than West Campus for comparable space. 15-30 minute walks or 8-12 minute bike rides to campus.</p>

          <h3>North Campus and the Drag</h3>
          <p>The strip between Guadalupe Street and Speedway, north of MLK Boulevard. Smaller inventory than West Campus but more diverse (older single-family conversions, mid-rise condos, a few newer projects). Slightly cheaper than West Campus on a per-square-foot basis. 5-15 minute walks to campus.</p>

          <h3>Downtown Austin high-rises</h3>
          <p>Higher-end option for families with budget for amenities and a metro lifestyle. The Austonian, Sienna, The Independent, and 360 are common choices. HOA dues are high ($700-$2,400/month). 20-35 minute walks to campus or quick bike/scooter rides.</p>

          <h3>East Austin (78702, 78722)</h3>
          <p>South-of-MLK East Austin offers small houses, duplexes, and townhomes at slightly longer commutes (7-15 minutes by car). Strong neighborhood character and food scene. Better fit for upperclassmen with cars or those who can bike to class.</p>

          <h2>Option C: Family-owned condo (the residency pathway angle)</h2>

          <p>For out-of-state families, buying a condo near UT for the student is uniquely valuable because it simultaneously solves two problems: housing for four years <strong>and</strong> the Texas residency requirement that unlocks in-state tuition.</p>

          <p>The Texas residency pathway under <Link href="/texas-residency-rules">Texas Education Code §54.052</Link> requires 12 continuous months of Texas domicile before the term&apos;s census date. The most common qualifying activity for out-of-state families is acquiring Texas real property where the student lives. The 12-month residency clock running on the property converts the student to a Texas resident, saving approximately <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> on tuition for the remaining three years at UT (typical pathway: pay out-of-state for year 1, in-state for years 2-4).</p>

          <p>Cumulative savings over the typical pathway: approximately <strong>{fmtUSD(TUITION.threeYearSavings)}</strong>. That figure usually meets or exceeds the family&apos;s four-year carrying cost on a $400K-$500K West Campus condo.</p>

          <h3>Representative condo carrying costs</h3>
          <p>For a $475,000 West Campus 2-bedroom condo with 25% down at a 6.5% mortgage, $550/month HOA, $9,000/year property tax (post-homestead exemption), and standard insurance:</p>
          <ul>
            <li>Annual cash outflow: approximately $42,000-$45,000/year</li>
            <li>Of which: principal pay-down ≈ $11,000/year (recovered on sale)</li>
            <li>Net annual cost: approximately $30,000-$34,000/year</li>
            <li>Compare to off-campus apartment rent for a comparable unit: $25,000-$30,000/year</li>
            <li>Differential: ~$5,000-$10,000/year more expensive than renting</li>
            <li>Tuition savings from residency pathway: ~${fmtUSD(TUITION.annualSavings)}/year (starting year 2)</li>
            <li>Net result over four years: <strong>family-owned condo wins by approximately $80,000-$110,000</strong> vs renting + paying out-of-state tuition</li>
            <li>Plus property appreciation, typically $20,000-$60,000+ over a four-year hold</li>
          </ul>

          <p>This is why most out-of-state UT families with the capital pursue the property pathway. <Link href="/condos-near-ut">Full condo-selection guide here</Link>.</p>

          <h2>Housing recommendations by family situation</h2>

          <div className="grid gap-4 my-7">
            <div className="callout">
              <h4>If you are a Texas resident</h4>
              <p className="mb-0">Compare on-campus and West Campus apartments on cost, community fit, and lifestyle preference. Costs are roughly comparable; the choice is mostly about social experience.</p>
            </div>
            <div className="callout">
              <h4>If you are out-of-state and not pursuing the residency pathway</h4>
              <p className="mb-0">On-campus year 1 is the most common parental recommendation for the structured community. Move to West Campus apartments for years 2-4. Total housing cost: $50,000-$80,000 over four years.</p>
            </div>
            <div className="callout">
              <h4>If you are out-of-state and pursuing the residency pathway</h4>
              <p className="mb-0">Buy a condo near UT. The four-year financial math works for most families with enough capital for a 25% down payment. The condo also gives you a real-estate position in a growing market. See the <Link href="/condos-near-ut">condos near UT guide</Link>.</p>
            </div>
            <div className="callout">
              <h4>If you have multiple kids likely to attend UT</h4>
              <p className="mb-0">Buying makes even more sense. The property carries forward to the second student, who can also use it for the residency pathway. The math becomes substantially more favorable.</p>
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
            <h2>Related reading</h2>
            <ul>
              <li><Link href="/condos-near-ut">Condos near UT (the property guide)</Link></li>
              <li><Link href="/parent-guide">The Parent Guide to UT Austin</Link></li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link></li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link></li>
              <li><Link href="/ut-austin-cost-of-attendance">Full cost of attendance</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-housing-guide" />
    </>
  );
}
