// Origin-state hub page.
//
// Internal-linking hub that gathers every published origin-state landing
// page in one place. Drives crawl depth + on-site discovery + targets the
// "ut austin out of state by state" query universe.

import type { Metadata } from 'next';
import Link from 'next/link';
import { publishedStates } from '@/lib/states';
import { pageMetadata, breadcrumb, articleSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { PageHero } from '@/components/PageHero';
import { QuickAnswer } from '@/components/QuickAnswer';
import { TrustRow } from '@/components/TrustRow';
import { AuthorBox } from '@/components/AuthorBox';
import { ContactSection } from '@/components/ContactSection';
import { TUITION, fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'UT Austin Out-of-State Tuition by Origin State (19 States)',
  description: `Find the UT Austin in-state tuition pathway tailored to your home state. Substantive guides for 19 origin states with flight time, residency move math, and ${fmtUSD(TUITION.annualSavings)}/year savings analysis specific to each origin.`,
  path: '/by-state',
});

export default function ByStatePage() {
  const states = publishedStates();
  const sorted = [...states].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'UT Austin by Origin State', path: '/by-state' },
      ])} />
      <Schema data={articleSchema({
        headline: 'UT Austin Out-of-State Tuition Guides by Origin State',
        path: '/by-state',
        datePublished: '2026-06-23',
        dateModified: SITE.lastReviewed,
      })} />

      <PageHero
        eyebrow="By origin state"
        title={<h1 className="text-ink max-w-[24ch]">UT Austin guides for {states.length} origin states</h1>}
        lede="Substantive per-state guides for out-of-state families with a UT Austin admit. Each guide covers the residency pathway specific to a move from that state, the savings math, and what to expect."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="What this page covers">
            UT Austin draws students from every state. The non-resident tuition rate of <strong>{fmtUSD(TUITION.outOfStatePerYear)}/year</strong> applies to all out-of-state students initially, but the <Link href="/texas-residency-rules">Texas residency pathway</Link> converts that rate to the resident rate of <strong>{fmtUSD(TUITION.inStatePerYear)}/year</strong> after 12 months of qualifying Texas domicile. The pathway is identical regardless of origin state, but the practical considerations (flight time, cost-of-living contrast, financial logistics) differ. Find your origin below for a guide tailored to your situation.
          </QuickAnswer>

          <AuthorBox blurb="Has personally walked dozens of out-of-state families through the Texas residency pathway, including families originating from California, New York, Illinois, Florida, and every state listed below." />

          <h2 className="mt-0">Browse by origin state</h2>
          <p>Each guide includes the closest airport and flight time to Austin, driving distance, the comparison between your home-state public flagship and UT after residency, cost-of-living considerations specific to your origin, and a state-specific FAQ.</p>

          <div className="grid gap-4 my-7" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {sorted.map(s => (
              <Link
                key={s.slug}
                href={`/${s.slug}-families-ut-austin-in-state-tuition`}
                className="block p-4 border rounded-lg hover:bg-cream transition-colors"
                style={{ borderColor: 'var(--rule)', textDecoration: 'none' }}
              >
                <div className="font-semibold text-burnt">{s.name}</div>
                <div className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  {s.primaryAirport} · {s.flightTimeToAustinHours}h to AUS
                </div>
                <div className="text-sm mt-1" style={{ color: 'var(--ink-2)' }}>
                  Home rate: {fmtUSD(s.inStateTuitionPublicUSD)}
                </div>
              </Link>
            ))}
          </div>

          <h2>The savings math, in one sentence</h2>
          <p>UT Austin out-of-state tuition is <strong>{fmtUSD(TUITION.outOfStatePerYear)}/year</strong>; in-state is <strong>{fmtUSD(TUITION.inStatePerYear)}/year</strong>; the annual savings from establishing Texas residency is <strong>{fmtUSD(TUITION.annualSavings)}/year</strong>. Over three years (with residency approved for year 2 onward), the savings is approximately <strong>{fmtUSD(TUITION.annualSavings * 3)}</strong>.</p>

          <h2>What is the same regardless of origin state</h2>
          <ul>
            <li><strong>The legal pathway.</strong> Texas Education Code §54.052 governs residency for tuition at all Texas public universities. The same rules apply to a California family as to a Minnesota family.</li>
            <li><strong>The 12-month domicile clock.</strong> Continuous Texas presence with supporting indicia (driver&apos;s license, vehicle registration, voter registration, federal tax return showing Texas residence) for 12 months before petitioning.</li>
            <li><strong>The property pathway.</strong> Either Rule 3 (student-occupied Texas property) or Rule 4 (parent-owned Texas property rented to the student via LLC) work for any origin family.</li>
            <li><strong>The petition process.</strong> Filed through UT MyStatus with documentation; typical processing time 6-10 weeks.</li>
          </ul>

          <h2>What varies by origin state</h2>
          <ul>
            <li><strong>Travel logistics.</strong> Flight options to Austin-Bergstrom International Airport vary by origin. East Coast and Midwest families typically have 2-4 hour direct flights. West Coast families have 3-4 hour direct flights.</li>
            <li><strong>Cost-of-living adjustment.</strong> Coastal families (CA, NY, MA, NJ) typically find Austin cheaper. Midwest and Southeast families (OH, IN, TN, GA, NC) find Austin comparable or slightly more expensive.</li>
            <li><strong>Property strategy.</strong> Some families prefer to maintain their primary out-of-state residence and add a Texas investment property. Others fully relocate. The right strategy depends on family circumstances.</li>
            <li><strong>Tax considerations.</strong> Origin-state tax exposure on Texas-sourced rental income varies. Most families consult a CPA familiar with both states.</li>
          </ul>

          <h2>Don&apos;t see your origin state?</h2>
          <p>The {states.length} origin states above represent where the highest concentration of UT Austin out-of-state students come from. If your origin is not yet listed (for example, Oregon, Connecticut, Kansas, or Oklahoma), the residency pathway works identically. <Link href="/contact">Contact me</Link> with your specific situation and I will walk you through the same analysis I would put in a dedicated state guide.</p>

          <div className="next-step">
            <h2>Next steps</h2>
            <ul>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>:the underlying legal framework</li>
              <li><Link href="/how-to-get-in-state-tuition-ut-austin">How to get in-state tuition</Link>:the step-by-step pathway</li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link>:model your scenario</li>
              <li><Link href="/by-college">By UT college</Link>:tuition for specific UT colleges and majors</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-by-state-hub" />
    </>
  );
}
