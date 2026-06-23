import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata, breadcrumb, faqPageSchema, articleSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { ContactSection } from '@/components/ContactSection';
import { TUITION, fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

// Homepage title MUST include the head term ("In-State UT Austin Tuition")
// and the brand for domain-match queries. Length ~70 chars to fit the SERP.
const TITLE = `In-State UT Austin Tuition: Save ${fmtUSD(TUITION.annualSavings)}/yr | instateutaustin.com`;
const DESCRIPTION = `instateutaustin.com is the complete guide to UT Austin in-state tuition for out-of-state families. Save ${fmtUSD(TUITION.annualSavings)} a year through Texas residency. In-state ${fmtUSD(TUITION.inStatePerYear)} vs out-of-state ${fmtUSD(TUITION.outOfStatePerYear)}. Built by Luke Allen, Texas REALTOR® (TREC #788149).`;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/',
});

const FAQ = [
  {
    q: 'How much does UT Austin cost out of state vs. in state right now?',
    a: `For the 2025-26 academic year, UT Austin's published tuition and required fees are approximately ${fmtUSD(TUITION.outOfStatePerYear)} for non-residents and ${fmtUSD(TUITION.inStatePerYear)} for Texas residents in the base undergraduate program. In-state tuition is frozen by the Texas Legislature through 2026-27. Annual savings from in-state classification are roughly ${fmtUSD(TUITION.annualSavings)}.`,
  },
  {
    q: 'Can my student establish Texas residency on their own?',
    a: `Yes, if the student qualifies as independent under the THECB rules. For most traditional-age undergraduates entering UT directly from high school, this path is not viable in their first year because they will still be claimed as a dependent on a parent's return.`,
  },
  {
    q: 'How long does it take to establish Texas residency?',
    a: `Texas requires 12 continuous months of domicile in Texas before the term's census date, plus the supporting documentary record (real property, vehicle, voter registration, federal return with Texas address). For a Fall 2027 in-state petition, the 12-month clock must start by approximately September 2026.`,
  },
  {
    q: 'Do I have to buy property in Texas?',
    a: `No, but property ownership is the most common and most robust proof of domicile. The THECB rules accept many indicia (employment, business activity, long-term lease, professional licensure), but for out-of-state families the property pathway is the easiest to execute and the hardest to challenge.`,
  },
  {
    q: 'What is the difference between Rule #3 and Rule #4?',
    a: `Rule #3 is the student-occupied property path: the family acquires a residence, the student lives there, and the property is held in the parents' personal name. Rule #4 is the rental/business activity path: property held in a Texas LLC and operated as a real rental business with tenants and management. Most families pick Rule #3; investment-minded families with multifamily targets pick Rule #4.`,
  },
];

export default function Home() {
  return (
    <>
      <Schema data={breadcrumb([{ name: 'Home', path: '/' }])} />
      <Schema data={faqPageSchema(FAQ)} />
      <Schema data={articleSchema({
        headline: TITLE,
        description: DESCRIPTION,
        path: '/',
        datePublished: '2026-05-11',
        dateModified: SITE.lastReviewed,
      })} />

      {/* HERO */}
      <section
        className="py-24 md:py-28 border-b border-hairline relative overflow-hidden"
        style={{ backgroundColor: '#FAF6EE' }}
      >
        {/* Tower image, full-bleed, anchored to the right + bottom so the tower
            sits behind the savings card on desktop and crops cleanly on mobile.
            Paper gradient overlay above keeps the left side legible for the
            headline. */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/images/ut-tower.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 35%',
            }}
          />
          {/* Left-to-right cream wash so the headline reads cleanly on the
              left while the tower stays visible on the right. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(95deg, rgba(250,246,238,0.97) 0%, rgba(250,246,238,0.94) 40%, rgba(250,246,238,0.65) 70%, rgba(250,246,238,0.45) 100%)',
            }}
          />
          {/* Bottom-to-top fade into the cream so the border-hairline isn't
              fighting an abrupt photo edge. */}
          <div
            className="absolute inset-x-0 bottom-0 h-24"
            style={{
              background:
                'linear-gradient(180deg, rgba(250,246,238,0) 0%, rgba(250,246,238,1) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 wrap grid md:grid-cols-[1.3fr_1fr] gap-14 items-center">
          <div>
            <p className="eyebrow">UT Austin · In-State Tuition Strategy</p>
            <h1
              className="text-ink max-w-[20ch]"
              style={{ fontSize: 'clamp(2rem, 5.2vw, 3.6rem)', lineHeight: 1.08, fontWeight: 700 }}
            >
              <span className="text-burnt">In-State UT Austin Tuition</span>: Save {fmtUSD(TUITION.annualSavings)} a year.
            </h1>
            <p className="text-body mt-4 max-w-[60ch] text-lg">
              <strong>instateutaustin.com</strong> is the complete out-of-state parent&apos;s guide to UT Austin in-state tuition through Texas residency. The 12-month domicile pathway converts an out-of-state admit into a Texas resident for tuition purposes, saving roughly {fmtUSD(TUITION.threeYearSavings)} over three years.
            </p>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Link href="/texas-residency-rules" className="btn">Start with the rules</Link>
              <Link href="/tuition-calculator" className="btn btn-ghost">Run the numbers →</Link>
            </div>
          </div>

          <div className="bg-surface border border-hairline rounded-lg p-8 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-burnt">Annual savings</div>
            <div className="font-serif text-5xl text-burnt mt-2 leading-none" style={{ fontVariantNumeric: 'tabular-nums' }}>
              {fmtUSD(TUITION.annualSavings)}
            </div>
            <div className="text-xs text-body mt-2">Out-of-state minus in-state, base undergraduate. {fmtUSD(TUITION.outOfStatePerYear)} − {fmtUSD(TUITION.inStatePerYear)}.</div>
            <div className="mt-5 border-t border-hairline pt-4 space-y-2 text-sm text-body">
              <Row label="Non-resident tuition (per year)" value={`~${fmtUSD(TUITION.outOfStatePerYear)}`} />
              <Row label="Texas resident tuition (per year)" value={`~${fmtUSD(TUITION.inStatePerYear)}`} />
              <Row label="Three-year total (typical pathway)" value={fmtUSD(TUITION.threeYearSavings)} />
              <Row label="Four-year total (residency from year 1)" value={fmtUSD(TUITION.fourYearSavings)} />
            </div>
            <div className="text-xs text-body mt-4">
              Figures: UT Austin published tuition and required fees, base undergraduate program. In-state frozen through 2026-27.
              {' '}<a className="text-burnt-deep" href={TUITION.source.url} target="_blank" rel="nofollow noopener">UT One Stop</a>.
              {' '}<Link href="/tuition-calculator" className="text-burnt-deep">Run your numbers →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <div className="bg-cream border-y border-hairline py-5 text-sm text-body">
        <div className="wrap flex flex-wrap gap-6 justify-center">
          <span><Dot /> Cites Texas Education Code §54.052</span>
          <span><Dot /> Last reviewed {SITE.lastReviewed}</span>
          <span><Dot /> Not affiliated with UT or THECB</span>
          <span><Dot /> Updated quarterly</span>
        </div>
      </div>

      {/* ANSWER-FIRST */}
      <section className="py-16">
        <div className="narrow">
          <p className="eyebrow">In one paragraph</p>
          <h2 className="mt-0">How the residency pathway works</h2>
          <QuickAnswer>
            UT Austin charges in-state tuition (~{fmtUSD(TUITION.inStatePerYear)}/year) to students whose parents (on the dependent branch) or who themselves (on the independent branch) maintain a Texas domicile for the 12 months before a term&apos;s census date. The standard out-of-state pathway: the family acquires Texas real property, the student lives at it, the family obtains a Texas driver&apos;s license, registers a vehicle in Texas, registers to vote in Texas, and files a federal tax return with a Texas address. After 12 months of that documentary record, the family petitions through the UT MyStatus portal and is reclassified.
          </QuickAnswer>
        </div>
      </section>

      {/* PATH CARDS */}
      <section className="bg-paper py-16">
        <div className="wrap">
          <p className="eyebrow">Where to start</p>
          <h2 className="mt-0">Six pages that, together, are the strategy</h2>
          <p className="text-body max-w-[62ch]">Each page is self-contained. If you have ten minutes, read 1, 2, and 5.</p>
          <div className="grid md:grid-cols-3 gap-5 mt-9">
            {PATHS.map((p, i) => (
              <Link key={p.href} href={p.href} className="block bg-white border border-hairline rounded p-7 no-underline text-ink hover:-translate-y-1 hover:border-burnt hover:shadow-lg transition-all">
                <div className="font-serif text-burnt mb-2">0{i + 1}</div>
                <h3 className="mt-0 text-ink text-lg">{p.title}</h3>
                <p className="text-body text-sm mt-2 mb-0">{p.desc}</p>
                <div className="text-burnt font-semibold text-sm mt-3">{p.cta} →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (matches FAQPage schema above) */}
      <section className="py-16">
        <div className="narrow">
          <p className="eyebrow">Common questions</p>
          <h2 className="mt-0">The five questions parents ask first</h2>
          <p className="text-body mb-6">If the answer to your question is not here, send it through the <Link href="/contact">contact form</Link>. The full 32-question FAQ is at <Link href="/faq">/faq</Link>.</p>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      <ContactSection source="instateutaustin-home" />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3 items-baseline">
      <span className="text-body">{label}</span>
      <strong
        className="text-ink font-semibold"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {value}
      </strong>
    </div>
  );
}
function Dot() { return <span className="inline-block w-1.5 h-1.5 bg-burnt rounded-full mr-2 align-middle" />; }

const PATHS = [
  { href: '/texas-residency-rules', title: 'The Texas Residency Rules', desc: 'The authoritative explanation of §54.052 and the THECB framework.', cta: 'Read the rules' },
  { href: '/rule-3-vs-rule-4',      title: 'Rule #3 vs. Rule #4',        desc: 'The two property pathways side-by-side. Cost, complexity, tax treatment, risk.', cta: 'Compare the pathways' },
  { href: '/tuition-calculator',    title: 'The Tuition Calculator',     desc: 'Plug in your student\'s enrollment year, college, and credit load. Get a defensible savings number.', cta: 'Run your numbers' },
  { href: '/12-month-timeline',     title: 'The 12-Month Timeline',      desc: 'A month-by-month operating plan. Tasks, deadlines, documents.', cta: 'See the timeline' },
  { href: '/residency-checklist',   title: 'The Document Checklist',     desc: 'Every document UT may ask for, by path. The three common reasons petitions are denied.', cta: 'Get the checklist' },
  { href: '/condos-near-ut',        title: 'Condos Near UT Austin',      desc: 'How to evaluate UT-area condos for the residency pathway. HOA gotchas, neighborhood map.', cta: 'Read the buyer\'s guide' },
];
