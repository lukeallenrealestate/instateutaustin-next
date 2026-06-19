// Programmatic college-tuition pages.
//
// Served at /ut-austin-:college-tuition via next.config rewrite.
// Internally rendered from /colleges/:college which is statically
// pre-generated via generateStaticParams over publishedColleges().

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCollege, publishedColleges } from '@/lib/colleges';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactSection } from '@/components/ContactSection';
import { TUITION, fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

interface Props {
  params: Promise<{ college: string }>;
}

export async function generateStaticParams() {
  return publishedColleges().map(c => ({ college: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { college: slug } = await params;
  const c = getCollege(slug);
  if (!c) return { title: 'Not found' };
  return pageMetadata({
    title: `UT Austin ${c.name} Tuition 2025-26 (In-State + Out-of-State)`,
    description: `UT Austin ${c.name} tuition is ${fmtUSD(c.inStatePerYear)}/year for Texas residents and ${fmtUSD(c.outOfStatePerYear)}/year for non-residents. Full breakdown, differential tuition explanation, admissions context, and how to qualify for the resident rate.`,
    path: `/ut-austin-${c.slug}-tuition`,
  });
}

export default async function CollegePage({ params }: Props) {
  const { college: slug } = await params;
  const c = getCollege(slug);
  if (!c) notFound();

  const annualSavings = c.outOfStatePerYear - c.inStatePerYear;
  const path = `/ut-austin-${c.slug}-tuition`;

  const FAQ = [
    { q: `How much is ${c.name} tuition at UT Austin?`, a: `Approximately ${fmtUSD(c.inStatePerYear)}/year for Texas residents and ${fmtUSD(c.outOfStatePerYear)}/year for non-residents in the 2025-26 academic year. The figures cover tuition and required fees including the ${c.name} differential.` },
    { q: `Why is ${c.name} tuition higher than the UT Austin base undergraduate rate?`, a: c.whyHigher },
    { q: `Will ${c.name} tuition increase next year?`, a: 'In-state tuition at UT Austin is frozen by the Texas Legislature through 2026-27. Non-resident tuition has historically increased about 4% per year and is projected to continue rising. The college-level differential is set by the UT Board of Regents and typically rises in line with overall tuition.' },
    { q: `Can out-of-state ${c.name} students qualify for in-state tuition?`, a: `Yes, through the standard Texas residency pathway under Texas Education Code §54.052. Twelve continuous months of Texas domicile, supported by property ownership, vehicle and voter registration, and a federal tax return showing Texas as the residence of record. Approved residency reclassification saves approximately ${fmtUSD(annualSavings)}/year for the remaining time at UT.` },
    { q: `Are ${c.name} students eligible for major-specific scholarships?`, a: `${c.name} maintains its own scholarship pool for incoming and continuing students. Awards range from $1,000-$15,000/year and are typically based on academic merit, major fit, and (for some awards) need. Apply through MyStatus and the college's own application portal during the spring application cycle.` },
    { q: `How competitive are ${c.name} admissions?`, a: c.admissionsContext },
  ];

  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: `${c.name} Tuition`, path },
      ])} />
      <Schema data={articleSchema({
        headline: `UT Austin ${c.name} Tuition 2025-26`,
        path,
        datePublished: '2026-06-19',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={faqPageSchema(FAQ)} />

      <PageHero
        eyebrow={`UT Austin tuition · ${c.name}`}
        title={<h1 className="text-ink max-w-[24ch]">UT Austin {c.name} Tuition</h1>}
        lede={`${fmtUSD(c.inStatePerYear)}/year resident, ${fmtUSD(c.outOfStatePerYear)}/year non-resident. ${c.differentialNote.split('.')[0]}.`}
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The numbers">
            UT Austin {c.name} tuition and required fees for 2025-26 are approximately <strong>{fmtUSD(c.inStatePerYear)}/year</strong> for Texas residents and <strong>{fmtUSD(c.outOfStatePerYear)}/year</strong> for non-residents at full-time enrollment (15 credit hours). The {fmtUSD(annualSavings)}/year difference is the residency-classification gap; out-of-state families can legally qualify for the resident rate through the <Link href="/texas-residency-rules">12-month Texas residency pathway</Link>.
          </QuickAnswer>

          <AuthorBox blurb={`Has personally walked dozens of out-of-state ${c.name} families through the residency pathway that converts the non-resident rate to the resident rate.`} />

          <h2 className="mt-0">The {c.name} tuition breakdown</h2>
          <p>{c.differentialNote}</p>

          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>In-State (per year)</th>
                  <th>Out-of-State (per year)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Base tuition</td><td className="num">~{fmtUSD(TUITION.inStatePerYear * 0.7)}</td><td className="num">~{fmtUSD(TUITION.outOfStatePerYear * 0.83)}</td></tr>
                <tr><td>{c.name} differential</td><td className="num">~{fmtUSD(c.inStatePerYear - TUITION.inStatePerYear)}</td><td className="num">~{fmtUSD(c.outOfStatePerYear - TUITION.outOfStatePerYear)}</td></tr>
                <tr><td>Required fees</td><td className="num">~{fmtUSD(TUITION.inStatePerYear * 0.3)}</td><td className="num">~{fmtUSD(TUITION.outOfStatePerYear * 0.17)}</td></tr>
                <tr style={{ background: 'var(--cream)' }}><td><strong>Annual total</strong></td><td className="num"><strong>{fmtUSD(c.inStatePerYear)}</strong></td><td className="num"><strong>{fmtUSD(c.outOfStatePerYear)}</strong></td></tr>
              </tbody>
            </table>
          </div>

          <h2>Admissions context for {c.name}</h2>
          <p>{c.admissionsContext}</p>

          <h2>Why {c.name} tuition is higher</h2>
          <p>{c.whyHigher}</p>

          <h2>Career outcomes for {c.name} graduates</h2>
          <p>{c.careerOutcome}</p>

          <h2>Program details</h2>
          <ul>
            {c.programNotes.map((note, i) => <li key={i}>{note}</li>)}
          </ul>

          <h2>Out-of-state {c.name} students: how the residency pathway changes the math</h2>
          <p>If your student has been admitted to {c.name} as a non-resident, four-year tuition runs approximately <strong>{fmtUSD(c.outOfStatePerYear * 4)}</strong> at flat rates (closer to {fmtUSD(Math.round(c.outOfStatePerYear * 4.25))} adjusted for ~4% annual increases). The Texas residency pathway, executed during year 1 and approved for year 2, brings the four-year total down by approximately <strong>{fmtUSD(annualSavings * 3)}</strong>.</p>

          <p>The pathway: acquire Texas real property, the student lives at it, maintain Texas indicia (driver&apos;s license, vehicle registration, voter registration, federal tax return with Texas address) for 12 continuous months, file the residency petition through UT MyStatus. <Link href="/how-to-get-in-state-tuition-ut-austin">Full step-by-step pathway here</Link>.</p>

          <div className="callout">
            <h4>The residency pathway works for every UT college</h4>
            <p className="mb-0">The residency framework applies identically whether the student is in {c.name}, Liberal Arts, or any other college. Differential tuition (the part that makes {c.name} more expensive than the base) is the same for residents and non-residents. The residency reclassification only affects the statutory (residency-sensitive) portion of tuition, but that portion is the same dollars across all colleges. Annual savings: about <strong>{fmtUSD(annualSavings)}/year</strong> regardless of major.</p>
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
              <li><Link href="/tuition-calculator">Tuition calculator</Link> — model your scenario for {c.name} specifically</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link> — the legal framework</li>
              <li><Link href="/how-to-get-in-state-tuition-ut-austin">How to get in-state tuition</Link> — step-by-step pathway</li>
              <li><Link href="/ut-austin-cost-of-attendance">Full cost of attendance</Link> — housing, fees, books, total bill</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source={`instateutaustin-college-${c.slug}`} />
    </>
  );
}
