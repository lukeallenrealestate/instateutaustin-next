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

const TITLE = 'UT Austin Study Abroad Programs: Complete Options + Cost Guide';
const DESCRIPTION = 'UT Austin study abroad: 400+ programs across 60+ countries. Cost, program types (UT-run, exchange, faculty-led, summer), financial aid, and how to plan for maximum benefit including impact on residency pathway.';
const PATH = '/ut-austin-study-abroad-programs';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Does UT Austin have study abroad?', a: 'Yes. UT Austin has one of the largest study abroad programs in the US with approximately 400+ programs across 60+ countries. Approximately 25-30% of UT students study abroad during their undergraduate career. Programs include: UT-run programs, university exchange programs, faculty-led programs, summer programs, semester and full-year options.' },
  { q: 'How much does UT Austin study abroad cost?', a: 'Study abroad cost varies dramatically by program: UT-run reciprocal exchange programs typically cost close to normal UT tuition ($11K in-state, $45K OOS per semester). Third-party direct enrollment programs: $10,000-$25,000 per semester. Faculty-led summer programs: $3,000-$8,000 per program. Additional costs: airfare ($800-$2,500), housing, meals, personal expenses, program fees typically $500-$5,000 above base tuition.' },
  { q: 'What are the most popular UT Austin study abroad destinations?', a: 'Top UT study abroad destinations: London (Study Abroad in London program), Barcelona, Prague, Buenos Aires, Sydney, Tokyo, Paris, Copenhagen, Cape Town, Florence. UT has particularly strong programs in Europe (UK, Spain, France, Italy, Germany, Czech Republic), Latin America (Argentina, Mexico), and Asia (Japan, China).' },
  { q: 'When can UT students study abroad?', a: 'Study abroad typically during junior year (spring semester most common). Some programs available sophomore year, some senior year. Summer programs available any year. Full-year abroad less common but available. Application timing: 6-12 months before departure typical; some programs 2-3 months prior for summer.' },
  { q: 'Does financial aid work for UT Austin study abroad?', a: 'Yes. Federal aid (Pell Grant, federal loans) applies to UT-approved study abroad programs. UT institutional aid typically applies. Some scholarships specifically for study abroad: Boren Awards, Fulbright U.S. Student Program, Gilman Scholarship, Bridging Scholarship (Japan), plus UT-specific study abroad scholarships. Merit aid usually continues while abroad.' },
  { q: 'How does study abroad affect the residency pathway?', a: 'Extended absences from Texas during the qualifying period can complicate residency establishment. Once residency is established (petition approved), study abroad does not typically affect residency status for future terms. Recommendation: complete residency reclassification before study abroad. Most students study abroad junior year after residency approved for sophomore year.' },
  { q: 'What is the best UT Austin study abroad program?', a: 'Depends on academic and personal goals. For business: London School of Economics summer program; Copenhagen Business School exchange. For engineering: various technical exchanges in Germany, Switzerland. For liberal arts: Paris, Florence, Prague programs. For language study: intensive language programs in Spain (Barcelona, Madrid), Argentina, Japan. Faculty-led summer programs are shorter and cheaper for first-time experience.' },
];

export default function StudyAbroadPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Study Abroad Programs', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin study abroad"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Study Abroad Programs</h1>}
        lede="400+ programs across 60+ countries. Complete guide to UT Austin study abroad: program types, top destinations, cost, financial aid, and planning around the residency pathway."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="Study abroad at a glance">
            UT Austin offers <strong>400+ programs across 60+ countries</strong>, with approximately 25-30% of undergraduates studying abroad. Programs range from faculty-led summer trips ($3K-$8K) to full semesters ($10K-$25K plus airfare and expenses). Federal aid and institutional aid typically apply. Most students study abroad junior year after establishing residency and completing prerequisites. Application 6-12 months before departure.
          </QuickAnswer>

          <AuthorBox blurb="Helps UT families plan study abroad in the context of residency pathway timing and overall four-year planning." />

          <h2 className="mt-0">UT Austin study abroad program types</h2>

          <h3>UT-run reciprocal exchange programs</h3>
          <ul>
            <li>UT partners directly with foreign universities for reciprocal student exchanges</li>
            <li>Students pay UT tuition; take courses at partner university</li>
            <li>Full semester or academic year abroad</li>
            <li>Cost typically close to normal UT tuition ($11K-$45K/semester depending on classification)</li>
          </ul>

          <h3>Faculty-led programs</h3>
          <ul>
            <li>Led by UT faculty; typically 3-8 weeks</li>
            <li>Summer or Maymester</li>
            <li>Focused academic content plus travel</li>
            <li>Cost: $3,000-$8,000 including tuition, housing, meals, some travel</li>
            <li>Popular for first-time study abroad</li>
          </ul>

          <h3>Third-party direct enrollment</h3>
          <ul>
            <li>UT approves third-party program providers (CIEE, IES Abroad, CET, DIS, IFSA-Butler)</li>
            <li>Students enroll directly with the provider</li>
            <li>Cost: $10,000-$25,000/semester (includes tuition, housing, some meals)</li>
            <li>Broader course selection than direct exchange</li>
          </ul>

          <h3>Custom internship programs abroad</h3>
          <ul>
            <li>Some UT students arrange internships abroad through connections</li>
            <li>Companies like BUNAC arrange work-abroad programs</li>
            <li>Cost varies; sometimes stipend covers expenses</li>
          </ul>

          <h2>Top UT Austin study abroad destinations</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Top Destinations</th>
                  <th>Program Types</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Western Europe</td><td>London, Paris, Barcelona, Madrid, Florence, Rome, Berlin</td><td>All types</td></tr>
                <tr><td>Central Europe</td><td>Prague, Vienna, Budapest, Krakow</td><td>Exchange + third-party</td></tr>
                <tr><td>Latin America</td><td>Buenos Aires, Mexico City, Santiago</td><td>Language + exchange</td></tr>
                <tr><td>Asia</td><td>Tokyo, Beijing, Seoul, Singapore, Hong Kong</td><td>Exchange + language</td></tr>
                <tr><td>Oceania</td><td>Sydney, Melbourne, Auckland</td><td>Exchange</td></tr>
                <tr><td>Africa</td><td>Cape Town, Rabat, Accra</td><td>Faculty-led + third-party</td></tr>
                <tr><td>Middle East</td><td>Amman, Tel Aviv, Rabat</td><td>Language + exchange</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Study abroad and the residency pathway</h2>
          <div className="callout">
            <h4>Timing considerations for pathway families</h4>
            <p className="mb-0">Extended absences from Texas can complicate the 12-month residency clock. Recommended timing: (1) establish Texas residency during freshman year while at UT; (2) petition and receive approval for residency reclassification before sophomore year; (3) study abroad junior year after residency is stable. Approved residency continues while abroad; a brief absence for study abroad does not reset residency once officially reclassified.</p>
          </div>

          <h2>Financial aid for study abroad</h2>
          <ul>
            <li><strong>Federal aid (Pell, federal loans):</strong> applies to UT-approved study abroad</li>
            <li><strong>UT institutional aid:</strong> merit scholarships typically continue while abroad</li>
            <li><strong>Boren Awards:</strong> up to $25,000 for critical-language study; requires 1-year US federal government service post-graduation</li>
            <li><strong>Fulbright U.S. Student Program:</strong> for post-graduation research abroad</li>
            <li><strong>Gilman Scholarship:</strong> up to $5,000 for Pell-eligible students studying abroad</li>
            <li><strong>Bridging Scholarship:</strong> $2,500-$4,000 for study in Japan</li>
            <li><strong>UT-specific scholarships:</strong> various through UT International Office</li>
            <li><strong>Provider scholarships:</strong> CIEE, IES Abroad offer scholarships</li>
          </ul>

          <h2>Planning timeline</h2>

          <h3>Freshman year</h3>
          <ul>
            <li>Attend study abroad information sessions</li>
            <li>Meet with academic advisor about degree plan and study abroad windows</li>
            <li>For pathway families: establish residency</li>
          </ul>

          <h3>Sophomore year</h3>
          <ul>
            <li>Research specific programs</li>
            <li>Attend UT International Office information sessions</li>
            <li>Language study if abroad in non-English country</li>
            <li>Complete residency reclassification if pursuing pathway</li>
          </ul>

          <h3>Junior year (typical study abroad year)</h3>
          <ul>
            <li>Apply for programs (fall applications for spring semester)</li>
            <li>Financial aid updates for abroad</li>
            <li>Passport and visa processing</li>
            <li>Housing arrangements</li>
            <li>Depart for study abroad (typically spring semester)</li>
            <li>Complete abroad experience; return</li>
          </ul>

          <h3>Senior year</h3>
          <ul>
            <li>Integrate study abroad experience into resume and interviews</li>
            <li>Consider post-graduation international opportunities (Fulbright, etc.)</li>
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
              <li><Link href="/ut-austin-freshman-year-guide">Freshman year guide</Link>: study abroad planning starts freshman year</li>
              <li><Link href="/ut-austin-scholarships-out-of-state">UT scholarships</Link>: study abroad funding sources</li>
              <li><Link href="/12-month-timeline">Residency timeline</Link>: how residency pathway interacts with study abroad</li>
              <li><Link href="/ut-austin-4-year-cost-out-of-state">4-year cost</Link>: budgeting study abroad</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-study-abroad" />
    </>
  );
}
