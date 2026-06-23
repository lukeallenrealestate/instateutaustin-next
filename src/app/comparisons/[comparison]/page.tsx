// Programmatic UT Austin vs. competitor comparison pages.
//
// Served at /ut-austin-vs-:school via next.config rewrite.
// Internally rendered from /comparisons/:comparison which is statically
// pre-generated via generateStaticParams over publishedComparisons().

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getComparison, publishedComparisons } from '@/lib/comparisons';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactSection } from '@/components/ContactSection';
import { fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

interface Props {
  params: Promise<{ comparison: string }>;
}

export async function generateStaticParams() {
  return publishedComparisons().map(c => ({ comparison: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { comparison: slug } = await params;
  const c = getComparison(slug);
  if (!c) return { title: 'Not found' };
  return pageMetadata({
    title: `UT Austin vs ${c.competitorShortName}: Cost, Programs, Admissions Compared`,
    description: `Compare UT Austin and ${c.competitorName} on tuition cost, top programs, admissions selectivity, and campus culture. UT in-state ${fmtUSD(c.costComparison.utInState)}/yr vs ${c.competitorShortName} in-state ${fmtUSD(c.costComparison.competitorInState)}/yr. How the Texas residency pathway changes the math for out-of-state families.`,
    path: `/ut-austin-vs-${c.slug}`,
  });
}

export default async function ComparisonPage({ params }: Props) {
  const { comparison: slug } = await params;
  const c = getComparison(slug);
  if (!c) notFound();

  const path = `/ut-austin-vs-${c.slug}`;

  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: `UT Austin vs ${c.competitorShortName}`, path },
      ])} />
      <Schema data={articleSchema({
        headline: `UT Austin vs ${c.competitorName}: Comprehensive Comparison`,
        path,
        datePublished: '2026-06-23',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={faqPageSchema(c.faq)} />

      <PageHero
        eyebrow={`UT Austin comparison · vs ${c.competitorShortName}`}
        title={<h1 className="text-ink max-w-[26ch]">UT Austin vs {c.competitorName}</h1>}
        lede={`Cost, programs, admissions, and culture compared. ${c.summary.split('.')[0]}.`}
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="At a glance">
            UT Austin in-state tuition is <strong>{fmtUSD(c.costComparison.utInState)}/year</strong> vs {c.competitorShortName} in-state at <strong>{fmtUSD(c.costComparison.competitorInState)}/year</strong>. Out-of-state at UT is <strong>{fmtUSD(c.costComparison.utOutOfState)}/year</strong> vs {c.competitorShortName} out-of-state at <strong>{fmtUSD(c.costComparison.competitorOutOfState)}/year</strong>. For out-of-state families, the <Link href="/texas-residency-rules">Texas residency pathway</Link> can convert the UT non-resident rate to the resident rate in 12 months, making UT after residency the cheapest of the four classifications.
          </QuickAnswer>

          <AuthorBox blurb={`Has helped families choose between UT Austin and other flagship publics including ${c.competitorShortName}, and has personally walked dozens of out-of-state families through the Texas residency pathway that converts UT to the resident rate.`} />

          <h2 className="mt-0">Summary</h2>
          <p>{c.summary}</p>

          <h2>Cost comparison</h2>
          <div className="overflow-x-auto my-7">
            <table className="tbl-compare">
              <thead>
                <tr>
                  <th>Tuition + Required Fees</th>
                  <th>UT Austin</th>
                  <th>{c.competitorShortName}</th>
                  <th>Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>In-state (resident)</td>
                  <td className="num">{fmtUSD(c.costComparison.utInState)}</td>
                  <td className="num">{fmtUSD(c.costComparison.competitorInState)}</td>
                  <td className="num">{c.costComparison.utInState < c.costComparison.competitorInState ? `UT cheaper by ${fmtUSD(c.costComparison.competitorInState - c.costComparison.utInState)}` : `${c.competitorShortName} cheaper by ${fmtUSD(c.costComparison.utInState - c.costComparison.competitorInState)}`}</td>
                </tr>
                <tr>
                  <td>Out-of-state (non-resident)</td>
                  <td className="num">{fmtUSD(c.costComparison.utOutOfState)}</td>
                  <td className="num">{fmtUSD(c.costComparison.competitorOutOfState)}</td>
                  <td className="num">{c.costComparison.utOutOfState < c.costComparison.competitorOutOfState ? `UT cheaper by ${fmtUSD(c.costComparison.competitorOutOfState - c.costComparison.utOutOfState)}` : `${c.competitorShortName} cheaper by ${fmtUSD(c.costComparison.utOutOfState - c.costComparison.competitorOutOfState)}`}</td>
                </tr>
                <tr style={{ background: 'var(--cream)' }}>
                  <td><strong>UT after Texas residency</strong></td>
                  <td className="num"><strong>{fmtUSD(c.costComparison.utInState)}</strong></td>
                  <td className="num"></td>
                  <td className="num"><strong>vs {c.competitorShortName} in-state: {c.costComparison.utInState < c.costComparison.competitorInState ? `${fmtUSD(c.costComparison.competitorInState - c.costComparison.utInState)} cheaper at UT` : `${fmtUSD(c.costComparison.utInState - c.costComparison.competitorInState)} more at UT`}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm" style={{ color: 'var(--ink-2)' }}>{c.costComparison.note}</p>

          <h2>Where UT Austin wins</h2>
          <ul>
            {c.utWins.map((win, i) => <li key={i}>{win}</li>)}
          </ul>

          <h2>Where {c.competitorShortName} wins</h2>
          <ul>
            {c.competitorWins.map((win, i) => <li key={i}>{win}</li>)}
          </ul>

          <h2>Program comparison</h2>
          <p>{c.programComparison}</p>

          <h2>Admissions comparison</h2>
          <p>{c.admissionsComparison}</p>

          <h2>Culture and campus</h2>
          <p>{c.cultureComparison}</p>

          <h2>The Texas residency angle</h2>
          <div className="callout">
            <p className="mb-0">{c.residencyAngle}</p>
          </div>

          <h2>Frequently asked questions</h2>
          {c.faq.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Next steps</h2>
            <ul>
              <li><Link href="/tuition-calculator">Tuition calculator</Link>:model your scenario at UT</li>
              <li><Link href="/texas-residency-rules">Texas residency rules</Link>:the legal framework</li>
              <li><Link href="/how-to-get-in-state-tuition-ut-austin">How to get in-state tuition</Link>:step-by-step pathway</li>
              <li><Link href="/ut-austin-cost-of-attendance">Full cost of attendance at UT</Link>:housing, fees, books, total bill</li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection source={`instateutaustin-vs-${c.slug}`} />
    </>
  );
}
