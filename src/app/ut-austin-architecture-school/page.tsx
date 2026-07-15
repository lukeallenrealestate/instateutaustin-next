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

const TITLE = 'UT Austin School of Architecture: Programs, Admission, Portfolio (2026)';
const DESCRIPTION = 'UT Austin School of Architecture: BArch (5-year professional), BSAS (4-year science), Interior Design, Urban Studies, Landscape. Portfolio requirements, admission ~10-15%, ranked top 10 undergrad architecture nationally.';
const PATH = '/ut-austin-architecture-school';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is UT Austin\'s architecture school ranked?', a: 'UT Austin School of Architecture ranks top 10 nationally for undergraduate Architecture programs (DesignIntelligence, other rankings). The BArch (Bachelor of Architecture) 5-year professional degree is particularly well-regarded. UT Architecture graduates place at top firms across the US.' },
  { q: 'What programs does UT Austin Architecture offer?', a: 'UT Austin School of Architecture undergrad programs: (1) Bachelor of Architecture (BArch, 5-year professional degree accredited by NAAB); (2) Bachelor of Science in Architectural Studies (BSAS, 4-year non-professional); (3) Interior Design (BS); (4) Urban Studies (BA); (5) Landscape Architecture (offered at graduate level). BArch is the professional path to become licensed architect.' },
  { q: 'What is the acceptance rate for UT Austin Architecture?', a: 'BArch program acceptance rate approximately 10-15% (small cohort of ~50 admits per year from ~350-450 applications). BSAS acceptance rate approximately 20-25%. Highly competitive due to small program sizes and requirement for portfolio review.' },
  { q: 'Does UT Austin Architecture require a portfolio?', a: 'Yes. BArch and BSAS applicants must submit a portfolio of creative work through UT\'s SlideRoom portfolio submission. Portfolio can include: drawings, paintings, photography, sculpture, digital design, models, other creative work. Portfolio does not need to be architecture-specific; committee looks for creative thinking, technical ability, and design potential. 8-15 pieces typical.' },
  { q: 'What is the difference between BArch and BSAS at UT Austin?', a: 'BArch (Bachelor of Architecture): 5-year NAAB-accredited professional degree; directly qualifies graduates to sit for architectural licensure exam (ARE) after apprenticeship. BSAS (Bachelor of Science in Architectural Studies): 4-year non-professional; graduates typically pursue MArch graduate degree to become licensed, or work in architecture-adjacent fields (development, construction, design). BArch is faster to licensure but more intense; BSAS more flexible.' },
  { q: 'What careers do UT Architecture graduates pursue?', a: 'BArch graduates typically become licensed architects at architecture firms (Foster + Partners, Perkins &amp; Will, Gensler, HOK, SOM, plus regional Texas firms). Starting salary: $55K-$70K post-graduation; $80K-$120K after licensure (3-5 years). BSAS graduates may pursue MArch, architecture-adjacent careers (development, construction management, interior design, urban planning), or non-architecture careers requiring design thinking.' },
  { q: 'What is UT Austin Architecture curriculum like?', a: 'Highly studio-based. Design studios each semester (freshman through senior) are the core; students spend 12-20 hours/week in studio in addition to coursework. Other required courses: architectural history, structures, environmental systems, building technology, drawing, digital tools (Rhino, Revit, AutoCAD). Rigorous workload; typical students spend 40-60 hours/week on architecture work total.' },
];

export default function ArchitectureSchoolPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin School of Architecture', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · School of Architecture"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin School of Architecture</h1>}
        lede="Top 10 undergrad architecture program. BArch (5-year professional), BSAS (4-year science), Interior Design, Urban Studies. Portfolio-required admissions."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="UT Architecture at a glance">
            UT Austin School of Architecture ranks <strong>top 10 nationally</strong> for undergrad architecture. Two main tracks: <strong>BArch</strong> (5-year NAAB-accredited professional degree) and <strong>BSAS</strong> (4-year science-focused). BArch acceptance rate ~10-15%; BSAS ~20-25%. Portfolio required through SlideRoom. Starting salary: $55K-$70K post-grad; $80K-$120K after licensure.
          </QuickAnswer>

          <AuthorBox blurb="Helps UT Architecture applicants understand the program tracks, portfolio requirements, and career pathway." />

          <h2 className="mt-0">Program tracks</h2>

          <h3>Bachelor of Architecture (BArch) - 5-year professional</h3>
          <ul>
            <li>NAAB-accredited professional degree</li>
            <li>Direct path to architectural licensure (after apprenticeship + ARE exam)</li>
            <li>Cohort size: ~50 direct admits per year</li>
            <li>Acceptance rate: ~10-15%</li>
            <li>Intense studio-based curriculum</li>
            <li>Best for: students committed to becoming licensed architects</li>
          </ul>

          <h3>Bachelor of Science in Architectural Studies (BSAS) - 4-year</h3>
          <ul>
            <li>Non-professional undergraduate degree</li>
            <li>Preparation for MArch graduate program or architecture-adjacent careers</li>
            <li>Cohort size: ~100 admits per year</li>
            <li>Acceptance rate: ~20-25%</li>
            <li>Studio-based but less intense than BArch</li>
            <li>Best for: students exploring architecture, planning MArch, or design-adjacent careers</li>
          </ul>

          <h3>Interior Design (BS)</h3>
          <ul>
            <li>4-year professional degree in Interior Design</li>
            <li>Accredited by Council for Interior Design Accreditation (CIDA)</li>
            <li>Studio-based curriculum</li>
            <li>Career: interior designer at firms or corporate clients</li>
          </ul>

          <h3>Urban Studies (BA)</h3>
          <ul>
            <li>4-year Bachelor of Arts in Urban Studies</li>
            <li>Interdisciplinary: architecture, planning, sociology, public policy</li>
            <li>Preparation for graduate urban planning or public policy programs</li>
          </ul>

          <h2>Portfolio requirements</h2>
          <ul>
            <li>Submitted through SlideRoom during application</li>
            <li>8-15 pieces typical</li>
            <li>Content: any creative work (drawing, painting, photography, sculpture, digital design, models, sketchbooks)</li>
            <li>Does NOT need to be architecture-specific</li>
            <li>Reviewers look for: creative thinking, technical ability, design potential, work ethic</li>
            <li>Deadline: same as UT application (December 1)</li>
          </ul>

          <h2>Curriculum highlights</h2>
          <ul>
            <li><strong>Design studios (core):</strong> 12-20 hours/week per semester across all years</li>
            <li><strong>Architectural history:</strong> Western, non-Western architecture surveys</li>
            <li><strong>Structures and construction:</strong> structural engineering for architects, materials, building technology</li>
            <li><strong>Environmental systems:</strong> HVAC, lighting, sustainability</li>
            <li><strong>Drawing and representation:</strong> hand drawing, digital tools (Rhino, Revit, AutoCAD, SketchUp)</li>
            <li><strong>Professional practice (BArch):</strong> contracts, ethics, business of architecture</li>
            <li><strong>Thesis studio (BArch senior year):</strong> extensive independent design project</li>
          </ul>

          <h2>Career outcomes</h2>
          <ul>
            <li><strong>Starting salary (BArch):</strong> $55K-$70K</li>
            <li><strong>Post-licensure (3-5 years):</strong> $80K-$120K</li>
            <li><strong>Senior architect (10+ years):</strong> $100K-$180K</li>
            <li><strong>Principal or firm owner:</strong> $150K-$500K+</li>
            <li><strong>Top employers:</strong> Foster + Partners, Perkins &amp; Will, Gensler, HOK, SOM, regional Texas firms (Overland Partners, Lake|Flato, Michael Hsu, Cottam Hargrave)</li>
          </ul>

          <h2>Facilities and location</h2>
          <ul>
            <li>West Mall Office Building (WMB) and Sutton Hall on UT main campus</li>
            <li>Design studios open 24/7 for enrolled students</li>
            <li>Fabrication lab: CNC, laser cutters, 3D printers, wood shop</li>
            <li>Materials library, design library</li>
            <li>Adjacent to Blanton Museum for design inspiration</li>
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
              <li><Link href="/ut-austin-acceptance-rate-out-of-state">UT acceptance rate</Link>: admissions math</li>
              <li><Link href="/texas-residency-rules">Texas residency</Link>: pathway for OOS architecture students</li>
              <li><Link href="/ut-austin-honors-programs">UT honors programs</Link>: Architecture Honors track</li>
              <li><Link href="/ut-austin-essay-prompts">Essay prompts</Link>: architecture-specific application guidance</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-architecture-school" />
    </>
  );
}
