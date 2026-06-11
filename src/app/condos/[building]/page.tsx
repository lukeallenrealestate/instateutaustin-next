// Programmatic building/condo pages.
//
// Per the build spec: each page must include building-specific data.
// Unpublished entries (placeholder data) 404 — no thin pages.

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBuilding, publishedBuildings } from '@/lib/buildings';
import { pageMetadata, breadcrumb, articleSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { SITE } from '@/lib/site';

interface Props { params: Promise<{ building: string }>; }

export async function generateStaticParams() {
  return publishedBuildings().map(b => ({ building: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { building: slug } = await params;
  const b = getBuilding(slug);
  if (!b) return { title: 'Not found' };
  return pageMetadata({
    title: `${b.name} | UT Austin Condos for Sale & Residency Buyer Guide`,
    description: `${b.name} near UT Austin: ${b.unitMix}, typical price range ${b.typicalPriceRange}. How this building fits the Texas residency strategy for in-state tuition.`,
    path: `/condos/${b.slug}`,
  });
}

export default async function BuildingPage({ params }: Props) {
  const { building: slug } = await params;
  const b = getBuilding(slug);
  if (!b) notFound();

  const fitLabel = {
    'rule-3-strong': 'Strong fit for Rule #3 (student-occupied)',
    'rule-3-ok':     'Workable for Rule #3',
    'rule-4-strong': 'Strong fit for Rule #4 (rental LLC)',
    'rule-4-ok':     'Workable for Rule #4',
    'review':        'Fit depends on unit and timing',
  }[b.residencyFit];

  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Condos Near UT', path: '/condos-near-ut' },
        { name: b.name, path: `/condos/${b.slug}` },
      ])} />
      <Schema data={articleSchema({
        headline: `${b.name} — UT Austin Condos and Residency Strategy`,
        path: `/condos/${b.slug}`,
        datePublished: '2026-05-11',
        dateModified: SITE.lastReviewed,
      })} />

      <header className="bg-paper py-20 border-b border-hairline">
        <div className="narrow">
          <p className="eyebrow">Condos near UT</p>
          <h1 className="text-ink">{b.name}</h1>
          <p className="text-body text-lg mt-4">{b.address}</p>
        </div>
      </header>

      <section className="py-12">
        <div className="narrow">
          <QuickAnswer>
            {b.name} is a {b.unitMix ? `${b.unitMix} ` : ''}condo near UT Austin{b.walkTimeToCampusMin ? `, roughly ${b.walkTimeToCampusMin} minutes walk to campus` : ''}. Typical pricing runs {b.typicalPriceRange || '(pricing under review, contact us for current MLS data)'}. {fitLabel}.
          </QuickAnswer>

          <h2>The basics</h2>
          <ul>
            {b.yearBuilt && <li><strong>Year built:</strong> {b.yearBuilt}</li>}
            {b.walkTimeToCampusMin && <li><strong>Walk to campus:</strong> ~{b.walkTimeToCampusMin} min ({b.walkTimeNote || 'pedestrian route'})</li>}
            {b.unitMix && <li><strong>Unit mix:</strong> {b.unitMix}</li>}
            {b.typicalPriceRange && <li><strong>Typical price range:</strong> {b.typicalPriceRange}</li>}
            {b.hoaMonthlyRange && <li><strong>HOA dues:</strong> {b.hoaMonthlyRange}</li>}
            {b.amenities.length > 0 && <li><strong>Amenities:</strong> {b.amenities.join(', ')}</li>}
          </ul>

          {b.notes && (<>
            <h2>What buyers should know</h2>
            <p>{b.notes}</p>
          </>)}

          <h2>Fit for the residency strategy</h2>
          <p>{fitLabel}. See <Link href="/rule-3-vs-rule-4">Rule #3 vs. Rule #4</Link> for which pathway makes sense for your family. The buyer&apos;s checklist for any UT-area condo is on the <Link href="/condos-near-ut">main condos page</Link>.</p>

          <div className="bg-cream p-7 rounded mt-9 flex flex-wrap gap-3 items-center justify-between">
            <div>
              <h3 className="mt-0 mb-1">See current listings in this building</h3>
              <p className="text-body text-sm mb-0">Live MLS data on austintxhomes.co (our IDX partner).</p>
            </div>
            <a href={`${SITE.idxSearchUrl}?q=${encodeURIComponent(b.name)}`} target="_blank" rel="noopener" className="btn">View on MLS →</a>
          </div>
        </div>
      </section>
    </>
  );
}
