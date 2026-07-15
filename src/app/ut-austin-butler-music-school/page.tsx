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

const TITLE = 'UT Austin Butler School of Music: Programs, Audition, Cost (2026)';
const DESCRIPTION = 'UT Austin Sarah and Ernest Butler School of Music: BM (performance), BMus (music studies), BA in Music. Audition-required admission ~35%. Top 30 music school. Jazz Studies particularly strong.';
const PATH = '/ut-austin-butler-music-school';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'What is UT Austin Butler School of Music ranked?', a: 'The Sarah and Ernest Butler School of Music at UT Austin ranks top 30 nationally among US music schools. Particularly strong: Jazz Studies (top 10), Composition, Choral Studies, Musicology. World-class faculty; hosts nationally-known ensembles and guest performers.' },
  { q: 'What is the audition requirement for UT Austin Music?', a: 'All music program applicants must complete a live or recorded audition in their instrument or voice area. Auditions typically held January-February. Each area (Piano, Voice, Strings, Winds, Brass, Percussion, Jazz, Composition, Music Ed) has specific repertoire requirements. Audition weighted heavily alongside academic profile in admissions decisions.' },
  { q: 'What is the acceptance rate for UT Butler Music?', a: 'Music program acceptance rate approximately 30-40% overall, varying by area. Piano, Voice, and Composition are particularly competitive (~20-25%). Jazz Studies competitive (~25%). Music Education more accessible (~50%+). String Quartet and Chamber Music programs highly selective.' },
  { q: 'What music degrees does UT Austin offer?', a: 'Undergraduate music degrees: (1) Bachelor of Music in Performance (BM); (2) Bachelor of Music in Jazz Studies; (3) Bachelor of Music in Composition; (4) Bachelor of Music in Music Studies (BMus, more academic focus); (5) Bachelor of Music Education (BMus Ed, teacher certification track); (6) Bachelor of Arts in Music (BA, liberal arts within Music school).' },
  { q: 'What is the tuition for UT Butler School of Music?', a: 'Music tuition is approximately the same as base UT undergrad tuition ($11,688 in-state / $44,908 out-of-state) plus small music-specific fees (~$300-$500/year). Additional costs: instrument maintenance, accompanist fees for recitals, music books and scores ($500-$1,000/year), private lessons often included in tuition but some students take extra outside lessons.' },
  { q: 'What can UT Music graduates do?', a: 'Music careers vary widely. Performance-track graduates: professional orchestras, chamber ensembles, opera companies, solo careers (limited). Composition graduates: film/TV composing, video game music, teaching. Music Education graduates: K-12 music teachers (Texas has high demand). Music Studies/BA graduates: often pursue graduate degrees or music-adjacent careers (arts admin, music therapy, music business). Salaries vary dramatically: teachers $45K-$65K; performers highly variable.' },
  { q: 'Where is the Butler School of Music located at UT?', a: 'The Butler School is located in the Music Building (MRH - Music Recital Hall) on the north side of UT campus. Includes Bates Recital Hall (main performance space), Bass Concert Hall (larger venue nearby), practice rooms, teaching studios, ensemble rehearsal spaces. Frequent public performances by faculty and students.' },
  { q: 'What are UT Butler Music\'s most famous programs?', a: 'Jazz Studies (top 10 nationally; known for Latin Jazz Orchestra); Composition (nationally-recognized composers on faculty); Choral Studies (Chamber Singers has toured internationally); String Chamber Music; Opera Theater (produces full-scale opera productions each semester). Butler hosts the annual Longhorn Jazz Festival and other music events.' },
];

export default function ButlerMusicPage() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }, { name: 'UT Austin Butler School of Music', path: PATH }])} />
      <Schema data={articleSchema({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: '2026-06-23', dateModified: SITE.lastReviewed })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow="UT Austin · Butler School of Music"
        title={<h1 className="text-ink max-w-[22ch]">UT Austin Butler School of Music</h1>}
        lede="Top 30 music school; particularly strong Jazz Studies (top 10). Audition-required admission across performance, composition, music ed, and BA in Music programs."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="Butler Music at a glance">
            The Sarah and Ernest Butler School of Music at UT Austin ranks <strong>top 30 nationally</strong> with particularly strong Jazz Studies (top 10), Composition, Choral Studies, and Opera Theater. All applicants complete <strong>live or recorded audition</strong>. Acceptance ~30-40% overall; varies by area. Six undergrad degrees available (BM Performance, BM Jazz, BM Composition, BMus, BM Music Ed, BA in Music).
          </QuickAnswer>

          <AuthorBox blurb="Helps UT-bound music students navigate the audition-based admission process and program selection." />

          <h2 className="mt-0">Undergraduate degree programs</h2>

          <h3>Bachelor of Music in Performance (BM)</h3>
          <ul>
            <li>Performance-focused degree in specific instrument or voice</li>
            <li>Areas: Piano, Voice, Strings (Violin, Viola, Cello, Bass), Winds (Flute, Oboe, Clarinet, Bassoon, Saxophone), Brass (Trumpet, Horn, Trombone, Tuba), Percussion, Organ</li>
            <li>Weekly private lessons, chamber ensembles, orchestras/bands</li>
            <li>Senior recital required</li>
            <li>Best for: students committed to performance careers</li>
          </ul>

          <h3>Bachelor of Music in Jazz Studies</h3>
          <ul>
            <li>Jazz performance focus</li>
            <li>Instruments: Jazz Piano, Jazz Voice, Jazz Saxophone, Jazz Trumpet, Jazz Guitar, Jazz Bass, Jazz Drums</li>
            <li>Longhorn Jazz Orchestra, Latin Jazz Orchestra, small combos</li>
            <li>Top 10 nationally for jazz</li>
          </ul>

          <h3>Bachelor of Music in Composition</h3>
          <ul>
            <li>Composition focus with private lessons in composition</li>
            <li>Includes: acoustic composition, electronic music, composition for media</li>
            <li>Senior thesis composition project and performance</li>
          </ul>

          <h3>Bachelor of Music Education (BMus Ed)</h3>
          <ul>
            <li>Teacher certification for K-12 music teaching</li>
            <li>Combined music and education curriculum</li>
            <li>Student teaching required</li>
            <li>Texas has high demand for certified music teachers</li>
          </ul>

          <h3>Bachelor of Music (BMus - Music Studies)</h3>
          <ul>
            <li>Academic focus on music theory, musicology, ethnomusicology</li>
            <li>Preparation for graduate study in music</li>
            <li>Some performance component</li>
          </ul>

          <h3>Bachelor of Arts in Music (BA)</h3>
          <ul>
            <li>Liberal arts music degree within Butler School</li>
            <li>Less intensive than BM; allows more electives outside music</li>
            <li>Good for students combining music with another major (double major)</li>
          </ul>

          <h2>Audition process</h2>
          <ul>
            <li>Applicants apply through ApplyTexas plus Butler audition application</li>
            <li>Auditions held January-February (typically 2-3 weekends of on-campus auditions; recorded auditions accepted for some)</li>
            <li>Repertoire requirements vary by area; check Butler website for specific list</li>
            <li>Piano: 3 pieces from contrasting periods (Baroque, Classical, Romantic/Contemporary)</li>
            <li>Voice: 2-3 pieces including at least one art song and one aria</li>
            <li>Strings/Winds/Brass: 2-3 pieces demonstrating technical range and musicality</li>
            <li>Composition: submitted portfolio of 2-3 original compositions</li>
            <li>Interview with faculty typical alongside audition</li>
          </ul>

          <h2>Notable ensembles</h2>
          <ul>
            <li><strong>Longhorn Band:</strong> UT&apos;s marching band; iconic UT tradition</li>
            <li><strong>UT Symphony Orchestra:</strong> full symphonic orchestra; competitive audition</li>
            <li><strong>Chamber Singers:</strong> premier choral ensemble; toured internationally</li>
            <li><strong>Longhorn Jazz Orchestra:</strong> top jazz ensemble in the school</li>
            <li><strong>Latin Jazz Orchestra:</strong> distinctive UT ensemble</li>
            <li><strong>UT Opera Theater:</strong> produces full-scale opera each semester</li>
            <li><strong>Chamber ensembles:</strong> string quartets, wind quintets, brass ensembles</li>
          </ul>

          <h2>Career outcomes</h2>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Career Path</th>
                  <th>Typical Salary</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>K-12 Music Teacher</td><td className="num">$45K-$65K starting</td><td>Texas has high demand; state teacher salary scale</td></tr>
                <tr><td>Professional Orchestra Musician</td><td className="num">Highly variable</td><td>Regional orchestras $30K-$60K; major $70K-$150K+</td></tr>
                <tr><td>Film/TV Composer</td><td className="num">Highly variable</td><td>Freelance; can range widely</td></tr>
                <tr><td>Music Therapist</td><td className="num">$50K-$75K</td><td>Requires additional certification</td></tr>
                <tr><td>Arts Administration</td><td className="num">$40K-$80K</td><td>Non-profit or corporate arts orgs</td></tr>
                <tr><td>Music Producer/Engineer</td><td className="num">Highly variable</td><td>Austin music industry connections helpful</td></tr>
                <tr><td>College Music Faculty (post-DMA)</td><td className="num">$60K-$100K+</td><td>Requires doctoral degree</td></tr>
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
              <li><Link href="/ut-austin-fine-arts-tuition">UT Fine Arts tuition</Link>: cost breakdown</li>
              <li><Link href="/ut-austin-acceptance-rate-out-of-state">UT acceptance rate</Link>: admissions</li>
              <li><Link href="/texas-residency-rules">Texas residency</Link>: pathway for OOS music students</li>
              <li><Link href="/ut-austin-essay-prompts">Essay prompts</Link>: music application essays</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-butler-music" />
    </>
  );
}
