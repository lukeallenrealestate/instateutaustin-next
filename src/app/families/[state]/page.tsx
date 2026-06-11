// Programmatic origin-state pages.
//
// Per the build spec, every page must include state-specific substance
// (flight time, distance, cost-of-living contrast, savings math, FAQ).
// We refuse to render placeholder/unpublished pages — those return 404.

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getState, publishedStates } from '@/lib/states';
import { pageMetadata, breadcrumb, faqPageSchema, articleSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { TUITION, fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

interface Props {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return publishedStates().map(s => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: slug } = await params;
  const s = getState(slug);
  if (!s) return { title: 'Not found' };
  return pageMetadata({
    title: `${s.name} Families: UT Austin In-State Tuition Guide`,
    description: `For ${s.name} families with a student at UT Austin: how to qualify for in-state tuition through Texas residency, the math, and what is specific to a ${s.name} move.`,
    path: `/${s.slug}-families-ut-austin-in-state-tuition`,
  });
}

export default async function StateFamiliesPage({ params }: Props) {
  const { state: slug } = await params;
  const s = getState(slug);
  if (!s) notFound();

  const tuitionGap = TUITION.outOfStatePerYear - s.inStateTuitionPublicUSD;

  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: `${s.name} Families`, path: `/${s.slug}-families-ut-austin-in-state-tuition` },
      ])} />
      <Schema data={faqPageSchema(s.faq)} />
      <Schema data={articleSchema({
        headline: `${s.name} Families: UT Austin In-State Tuition Guide`,
        path: `/${s.slug}-families-ut-austin-in-state-tuition`,
        datePublished: '2026-05-11',
        dateModified: SITE.lastReviewed,
      })} />

      <header className="bg-paper py-20 border-b border-hairline">
        <div className="narrow">
          <p className="eyebrow">For families relocating from {s.name}</p>
          <h1 className="text-ink max-w-[22ch]">UT Austin in-state tuition for {s.name} families</h1>
          <p className="text-body text-lg max-w-[60ch] mt-4">
            The complete guide for {s.name} parents whose student is admitted to UT Austin from out of state. Texas residency rules, the math, and what is specific to moving from {s.name}.
          </p>
        </div>
      </header>

      <section className="py-12">
        <div className="narrow">
          <QuickAnswer>
            A {s.name} family pursuing the Texas residency pathway for UT Austin in-state tuition can save approximately {fmtUSD(TUITION.threeYearSavings)} over the typical three-year in-state pathway (annual savings of {fmtUSD(TUITION.annualSavings)}). The standard out-of-state-to-in-state route requires 12 months of Texas domicile (real property, vehicle registration, voter registration, federal tax return with Texas address) before the term&apos;s census date. The closest public-college baseline in {s.name} is {s.publicCollegeInState} at roughly {fmtUSD(s.inStateTuitionPublicUSD)}/year; UT Austin at the resident rate is {fmtUSD(TUITION.inStatePerYear)}.
          </QuickAnswer>

          <h2>Logistics: getting between {s.name} and Austin</h2>
          <ul>
            <li><strong>Primary airport:</strong> {s.primaryAirport}</li>
            <li><strong>Flight time to AUS:</strong> ~{s.flightTimeToAustinHours} hours</li>
            <li><strong>Driving distance to Austin:</strong> ~{s.drivingDistanceToAustinMiles.toLocaleString()} miles</li>
          </ul>

          {s.costOfLivingNote && (<>
            <h2>Cost of living: {s.name} vs. Austin</h2>
            <p>{s.costOfLivingNote}</p>
          </>)}

          {s.notableFamiliesContext && (<>
            <h2>UT Austin and {s.name}</h2>
            <p>{s.notableFamiliesContext}</p>
          </>)}

          <h2>The savings math for a {s.name} family</h2>
          <p>Out-of-state tuition at UT Austin is approximately {fmtUSD(TUITION.outOfStatePerYear)}/year. In-state tuition is {fmtUSD(TUITION.inStatePerYear)}/year. Annual savings from in-state classification: {fmtUSD(TUITION.annualSavings)}. Compared to staying in-state at {s.publicCollegeInState} ({fmtUSD(s.inStateTuitionPublicUSD)}/year), UT Austin at the resident rate is {tuitionGap > 0 ? `${fmtUSD(tuitionGap)} more per year` : `${fmtUSD(-tuitionGap)} less per year`}.</p>
          <p>For full year-by-year modeling, use the <Link href="/tuition-calculator">tuition calculator</Link>.</p>

          {s.residencyMoveNote && (<>
            <h2>Moving from {s.name}, residency considerations</h2>
            <p>{s.residencyMoveNote}</p>
            <p className="text-sm text-body">This is general information, not legal or tax advice. Consult a Texas-licensed attorney or CPA before relying on anything specific.</p>
          </>)}

          {s.faq.length > 0 && (<>
            <h2>Frequently asked questions ({s.name})</h2>
            {s.faq.map(({ q, a }, i) => (
              <details key={i} className="border-b border-hairline py-4">
                <summary className="cursor-pointer font-serif text-lg text-ink font-semibold">{q}</summary>
                <div className="pt-3 text-body">{a}</div>
              </details>
            ))}
          </>)}

          <div className="bg-cream p-7 rounded mt-9">
            <h3 className="mt-0">Want a sanity check from a Texas-licensed broker?</h3>
            <p className="text-body">If you are weighing a Texas property purchase as part of the pathway, you can talk to our recommended Austin broker. Free, no obligation.</p>
            <Link href="/contact" className="btn">Ask a question →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
