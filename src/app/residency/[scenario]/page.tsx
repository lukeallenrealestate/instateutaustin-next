// Programmatic edge-case residency-scenario pages.
//
// Served at /ut-austin-residency-:scenario via next.config rewrite.

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getScenario, publishedScenarios } from '@/lib/scenarios';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { PageHero } from '@/components/PageHero';
import { AuthorBox } from '@/components/AuthorBox';
import { TrustRow } from '@/components/TrustRow';
import { ContactSection } from '@/components/ContactSection';
import { SITE } from '@/lib/site';

interface Props {
  params: Promise<{ scenario: string }>;
}

export async function generateStaticParams() {
  return publishedScenarios().map(s => ({ scenario: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { scenario: slug } = await params;
  const s = getScenario(slug);
  if (!s) return { title: 'Not found' };
  return pageMetadata({
    title: `${s.title} (Step-by-Step Guide, 2026)`,
    description: s.summary,
    path: `/ut-austin-residency-${s.slug}`,
  });
}

export default async function ScenarioPage({ params }: Props) {
  const { scenario: slug } = await params;
  const s = getScenario(slug);
  if (!s) notFound();

  const path = `/ut-austin-residency-${s.slug}`;

  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Texas Residency Rules', path: '/texas-residency-rules' },
        { name: s.title, path },
      ])} />
      <Schema data={articleSchema({
        headline: s.title,
        description: s.summary,
        path,
        datePublished: '2026-06-19',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={faqPageSchema(s.faq)} />

      <PageHero
        eyebrow="UT residency, edge case"
        title={s.title}
        lede={s.summary.split('.').slice(0, 2).join('.') + '.'}
      />

      <TrustRow />

      <section className="py-12">
        <div className="narrow">

          <QuickAnswer label="The 60-second answer">
            {s.summary}
          </QuickAnswer>

          <AuthorBox blurb={`Has personally helped families navigate the ${s.searchPhrase.toLowerCase().replace('ut austin residency ', '')} situation through UT's residency office.`} />

          <h2 className="mt-0">The legal framework</h2>
          <p>{s.framework}</p>

          <h2>How the situation actually plays out</h2>
          {s.detail.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <h2>Documentation required</h2>
          <ul>
            {s.documentNotes.map((doc, i) => <li key={i}>{doc}</li>)}
          </ul>

          {s.warnings.length > 0 && (<>
            <h2>What to watch out for</h2>
            {s.warnings.map((w, i) => (
              <div key={i} className="callout callout-warn">
                <p className="mb-0">{w}</p>
              </div>
            ))}
          </>)}

          <h2>Frequently asked questions</h2>
          {s.faq.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}

          <div className="next-step">
            <h2>Related reading</h2>
            <ul>
              <li><Link href="/texas-residency-rules">Full Texas residency rules</Link></li>
              <li><Link href="/how-to-get-in-state-tuition-ut-austin">How to get in-state tuition at UT Austin</Link></li>
              <li><Link href="/residency-checklist">Document checklist</Link></li>
              <li><Link href="/tuition-calculator">Tuition calculator</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <ContactSection
        source={`instateutaustin-residency-${s.slug}`}
        heading={`Have a ${s.title.toLowerCase().replace('ut austin residency ', '')} situation?`}
        subhead={`Every family's specifics are different. Send the situation and Luke will reply with a written answer.`}
      />
    </>
  );
}
