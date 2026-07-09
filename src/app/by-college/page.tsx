// UT college hub page.
//
// Internal-linking hub that gathers every published UT college landing
// page in one place. Targets the "ut austin tuition by major" query
// universe and drives crawl + on-site discovery.

import type { Metadata } from 'next';
import Link from 'next/link';
import { publishedColleges } from '@/lib/colleges';
import { pageMetadata, breadcrumb, articleSchema, itemListSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { PageHero } from '@/components/PageHero';
import { QuickAnswer } from '@/components/QuickAnswer';
import { TrustRow } from '@/components/TrustRow';
import { AuthorBox } from '@/components/AuthorBox';
import { ContactSection } from '@/components/ContactSection';
import { TUITION, fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'UT Austin Tuition by College and Major (Differential Tuition Explained)',
  description: `Tuition at UT Austin varies by college because of differential tuition. Compare per-college costs (Engineering, McCombs, Computer Science, Natural Sciences, Liberal Arts, and more). All in-state, out-of-state, and after-residency figures.`,
  path: '/by-college',
});

export default function ByCollegePage() {
  const colleges = publishedColleges();
  const sorted = [...colleges].sort((a, b) => b.outOfStatePerYear - a.outOfStatePerYear);

  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'UT Austin by College', path: '/by-college' },
      ])} />
      <Schema data={articleSchema({
        headline: 'UT Austin Tuition by College and Major',
        path: '/by-college',
        datePublished: '2026-06-23',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={itemListSchema({
        name: 'UT Austin tuition guides by college',
        description: 'Per-college tuition breakdowns for every UT Austin undergraduate college and its differential tuition structure.',
        items: sorted.map(c => ({ name: c.name, path: `/ut-austin-${c.slug}-tuition` })),
      })} />

      <PageHero
        eyebrow="By UT college"
        title={<h1 className="text-ink max-w-[24ch]">UT Austin tuition by college and major</h1>}
        lede="Tuition at UT Austin varies by college because of differential tuition that funds college-specific costs (lab capacity at Engineering, case-method instruction at McCombs, faculty retention at CS). Substantive per-college guides for every major UT undergraduate college."
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="What is differential tuition">
            UT Austin charges a base undergraduate tuition rate (<strong>{fmtUSD(TUITION.inStatePerYear)}/year resident</strong>, <strong>{fmtUSD(TUITION.outOfStatePerYear)}/year non-resident</strong>) plus an additional college-specific surcharge called <em>differential tuition</em>. The differential ranges from about $200/semester (Natural Sciences) to about $1,800/semester (Computer Science). Differential tuition is the same dollar amount for resident and non-resident students. The Texas residency pathway only reduces the residency-sensitive portion, but that portion is the same dollars across all colleges, so the savings of <strong>{fmtUSD(TUITION.annualSavings)}/year</strong> applies uniformly.
          </QuickAnswer>

          <AuthorBox blurb="Has personally walked dozens of out-of-state UT Austin admits, across Engineering, McCombs, Computer Science, Liberal Arts, and Natural Sciences, through the residency pathway." />

          <h2 className="mt-0">Browse by college</h2>
          <p>Each guide includes the in-state and out-of-state rate, the differential tuition explanation, admissions selectivity context, expected career outcomes, and how the residency pathway changes the math for non-resident students.</p>

          <div className="grid gap-4 my-7" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {sorted.map(c => (
              <Link
                key={c.slug}
                href={`/ut-austin-${c.slug}-tuition`}
                className="block p-4 border rounded-lg hover:bg-cream transition-colors"
                style={{ borderColor: 'var(--rule)', textDecoration: 'none' }}
              >
                <div className="font-semibold text-burnt">{c.name}</div>
                <div className="text-sm mt-1" style={{ color: 'var(--ink-2)' }}>
                  In-state: <strong>{fmtUSD(c.inStatePerYear)}</strong>/yr
                </div>
                <div className="text-sm" style={{ color: 'var(--ink-2)' }}>
                  Out-of-state: <strong>{fmtUSD(c.outOfStatePerYear)}</strong>/yr
                </div>
                <div className="text-sm mt-1" style={{ color: 'var(--ink-2)' }}>
                  Annual savings via residency: <strong>{fmtUSD(c.outOfStatePerYear - c.inStatePerYear)}</strong>
                </div>
              </Link>
            ))}
          </div>

          <h2>Cost comparison across UT colleges</h2>
          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>College</th>
                  <th>In-State (per year)</th>
                  <th>Out-of-State (per year)</th>
                  <th>Savings from residency</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map(c => (
                  <tr key={c.slug}>
                    <td><Link href={`/ut-austin-${c.slug}-tuition`}>{c.name}</Link></td>
                    <td className="num">{fmtUSD(c.inStatePerYear)}</td>
                    <td className="num">{fmtUSD(c.outOfStatePerYear)}</td>
                    <td className="num">{fmtUSD(c.outOfStatePerYear - c.inStatePerYear)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Why differential tuition exists</h2>
          <p>Different colleges have different cost structures. Engineering and Natural Sciences require expensive laboratory space and equipment. McCombs uses small-section case-method instruction with industry practitioners. Computer Science competes with industry and other top-tier programs for faculty, which drives faculty compensation. Differential tuition is the mechanism by which UT funds those college-specific costs without taxing students in less expensive colleges to subsidize the more expensive ones.</p>

          <h2>The residency pathway works for every UT college</h2>
          <p>The Texas residency pathway under Texas Education Code §54.052 applies identically regardless of which UT college the student is in. The 12-month domicile clock, the property pathway, and the petition process are the same. The savings is also the same dollar amount (about {fmtUSD(TUITION.annualSavings)}/year) because differential tuition is paid by residents and non-residents alike. The residency reclassification only changes the residency-sensitive portion of base tuition.</p>

          <h2>Internal transfer between UT colleges</h2>
          <p>Some UT students enter through one college and transfer internally. Internal transfer to McCombs and to Computer Science is highly selective; transfer to Engineering is also competitive. Liberal Arts and Natural Sciences are the most common starting points for students who later transfer. Differential tuition adjusts to the destination college upon transfer.</p>

          <div className="next-step">
            <h2>Next steps</h2>
            <ul>
              <li><Link href="/ut-austin-in-state-tuition">UT Austin in-state tuition</Link>:head-term page on the base resident rate</li>
              <li><Link href="/ut-austin-out-of-state-tuition">UT Austin out-of-state tuition</Link>:head-term page on the non-resident rate</li>
              <li><Link href="/ut-austin-cost-of-attendance">Full cost of attendance</Link>:tuition, housing, fees, books, total bill</li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link>:model your scenario for a specific college</li>
              <li><Link href="/by-state">By origin state</Link>:guides tailored to your home state</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source="instateutaustin-by-college-hub" />
    </>
  );
}
