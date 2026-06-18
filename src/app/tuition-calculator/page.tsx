import type { Metadata } from 'next';
import { pageMetadata, breadcrumb, articleSchema, faqPageSchema } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { QuickAnswer } from '@/components/QuickAnswer';
import { ContactSection } from '@/components/ContactSection';
import { PageHero } from '@/components/PageHero';
import { CalculatorClient } from './CalculatorClient';
import { TUITION, fmtUSD } from '@/lib/tuition';
import { SITE } from '@/lib/site';

const TITLE = 'UT Austin Tuition Savings Calculator (In-State vs Out-of-State)';
const DESCRIPTION = `Interactive calculator. Model UT Austin in-state vs out-of-state tuition savings year by year. In-state ${fmtUSD(TUITION.inStatePerYear)} vs out-of-state ${fmtUSD(TUITION.outOfStatePerYear)}. Includes college-specific differentials and four-year totals.`;
const PATH = '/tuition-calculator';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQ = [
  { q: 'Are these the official tuition numbers?', a: `Based on UT Austin's 2025-26 published rates verified against UT One Stop: base undergraduate in-state ${fmtUSD(TUITION.inStatePerYear)}/year (frozen by the Texas Legislature through 2026-27), out-of-state ${fmtUSD(TUITION.outOfStatePerYear)}/year (projected ${fmtUSD(TUITION.outOfStateNextYear)} for 2026-27).` },
  { q: 'Why is the McCombs / Engineering / CS number higher?', a: 'Those colleges apply a per-semester differential or designated tuition on top of the base figure. The differential is the same regardless of residency status. The savings from switching status are the same as in the base case; the absolute tuition figures just start from a higher floor.' },
  { q: 'What if my student is in a five-year program?', a: 'Set Years to graduation to 5. The savings figure scales accordingly. Engineering double-majors and dual-degree programs often take five years; the residency math is more favorable for them, not less.' },
  { q: 'What if my student studies abroad for a semester?', a: 'UT generally charges UT residency-based tuition during UT-administered programs abroad. Treat the calculator output as an upper bound for third-party programs.' },
  { q: 'Should I pay for residency consulting on top of the property pathway?', a: 'For straightforward Rule #3 cases with clean facts, no. For complicated cases (divorce, prior denial, military, scholarship interaction, immigration), a Texas attorney or specialized residency consultant can be worth the fee.' },
  { q: 'What if tuition increases more than 4% next year?', a: 'Adjust the input. Higher increases make the pathway more valuable, not less. The decision threshold is essentially the same.' },
];

export default function CalculatorPage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Tuition Calculator', path: PATH },
      ])} />
      <Schema data={articleSchema({
        headline: TITLE,
        description: DESCRIPTION,
        path: PATH,
        datePublished: '2026-05-11',
        dateModified: SITE.lastReviewed,
      })} />
      <Schema data={faqPageSchema(FAQ)} />
      <Schema data={{
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'UT Austin Tuition Savings Calculator',
        url: `${SITE.url}${PATH}`,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: 'Model UT Austin in-state vs out-of-state tuition savings year by year, including college-specific differentials.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        publisher: { '@type': 'Organization', name: SITE.name },
      }} />

      <PageHero
        eyebrow="Run the numbers"
        title="UT Austin Tuition Savings Calculator"
        lede={<>Model the four-year cost of UT Austin tuition for your student under both classifications. Plug in your enrollment year, major track, and credit load: get a year-by-year and four-year savings figure you can defend to your spouse.</>}
      />

      <section className="pt-0">
        <div className="wrap" style={{ maxWidth: '1080px' }}>
          <CalculatorClient />
        </div>
      </section>

      <section className="py-16">
        <div className="narrow">
          <QuickAnswer label="The 30-second answer">
            UT Austin&apos;s base undergraduate tuition and required fees are roughly {fmtUSD(TUITION.inStatePerYear)}/year for Texas residents (frozen through 2026-27) and {fmtUSD(TUITION.outOfStatePerYear)}/year for non-residents (projected {fmtUSD(TUITION.outOfStateNextYear)} for 2026-27). Annual savings from in-state classification are about {fmtUSD(TUITION.annualSavings)}. Over the typical four-year pathway (year 1 out-of-state, years 2-4 in-state), savings total roughly {fmtUSD(TUITION.threeYearSavings)}; if the student qualifies as in-state from year 1, savings reach roughly {fmtUSD(TUITION.fourYearSavings)}.
          </QuickAnswer>

          <h2>What goes into the published tuition number</h2>
          <p>UT Austin publishes annual &quot;tuition and required fees&quot; figures separately from optional fees, course-specific lab fees, books, and housing. When this calculator shows &quot;out-of-state&quot; or &quot;in-state&quot; tuition, it refers to the published tuition-and-required-fees figure for the relevant college at a 15-credit-hour course load, the same figure that appears on a student&apos;s billing statement before any optional add-ons.</p>
          <p>The figures include:</p>
          <ul>
            <li>Statutory tuition (set by the Texas Legislature), the residency-sensitive portion</li>
            <li>Designated tuition (set by the UT Board of Regents), generally the same for residents and non-residents within a given college</li>
            <li>Required fees: Information Technology, Library, Medical Services, Recreational Sports, Student Services, Transportation, Union, and a small handful of others, generally the same regardless of residency status</li>
            <li>For specific majors: college differentials (Engineering, McCombs, CSDS), applied uniformly regardless of residency status</li>
          </ul>
          <p>The figures exclude housing and meal plans (~$15,000/year on campus), books and supplies (~$1,200/year), personal expenses, transportation, insurance, and one-time fees (orientation, transcripts, lab breakage).</p>
          <p>The residency classification only affects the statutory tuition portion. That is why the savings number from switching status, about {fmtUSD(TUITION.annualSavings)}/year, is the relevant figure even though the total cost of attendance is much higher. You are saving on the statutory-tuition line; the rest of the bill is the same either way. Source: <a href={TUITION.source.url} target="_blank" rel="nofollow noopener">UT One Stop</a>. In-state tuition frozen through 2026-27; out-of-state continues to rise (projected ~{fmtUSD(TUITION.outOfStateNextYear)} for 2026-27).</p>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="narrow">
          <h2>How realistic is a 4% annual increase?</h2>
          <p>UT Austin tuition has increased at a compound rate of roughly 4% a year over the past decade, with some years higher (notably 2022-23 and 2023-24, in the 4.5-6% range) and some years flat. Texas deregulated public-university tuition in 2003; UT&apos;s Board of Regents has generally tracked the system-wide rate. The Texas Legislature has also acted at times to freeze in-state tuition; the current freeze runs through 2026-27.</p>
          <p>For modeling, we default to 4% on the out-of-state line. At 6%, the savings number grows. At 0% (or under the freeze), it stays steady. The result is not enormously sensitive within the plausible 2-6% range.</p>

          <h2>Why the &quot;first year in-state&quot; option matters so much</h2>
          <p>The default scenario assumes the student starts as a non-resident in year 1 and converts to a Texas resident in time for year 2: this is the timeline most families actually achieve, because they decide to pursue residency after the admission notification arrives and the 12-month clock cannot finish before the first census date.</p>
          <p>Families who start the clock <em>before</em> the application cycle (typically because they already moved to Texas or already owned property) can sometimes qualify as residents in year 1. Switching to &quot;first year in-state&quot; adds roughly {fmtUSD(TUITION.annualSavings)} of savings versus the default. Switching to &quot;never&quot; (the baseline non-resident-every-year case) shows the full sticker price of skipping the pathway entirely.</p>

          <h2>What this calculator does not include</h2>
          <ul>
            <li><strong>Carrying costs of the property.</strong> Mortgage interest, property tax, insurance, HOA dues, and maintenance can run $20,000-$60,000+ a year depending on the property. Some costs are recovered through appreciation and rental income; some are not. See the <a href="/condos-near-ut">condos near UT</a> page.</li>
            <li><strong>Tax effects of the property.</strong> Mortgage interest and property tax deductions, depreciation on a Rule #4 rental, and the eventual capital-gain treatment all affect net cost.</li>
            <li><strong>Risk of denial.</strong> If the petition is denied, the savings do not materialize. The calculator assumes the pathway succeeds.</li>
            <li><strong>Time value of money.</strong> A dollar saved in year 4 is worth less than a dollar saved in year 1.</li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="narrow">
          <h2>Frequently asked questions</h2>
          {FAQ.map((item, i) => (
            <details key={i} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-a">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-paper py-16 text-center">
        <div className="narrow">
          <h2 className="mt-0">Ready to plan the property side?</h2>
          <p className="text-body max-w-[56ch] mx-auto mb-6 text-lg">If the savings number above pencils for your family, the next decision is which property pathway to use and what to look for.</p>
          <a href="/rule-3-vs-rule-4" className="btn">Rule #3 vs. Rule #4 →</a>
          {' '}
          <a href="/condos-near-ut" className="btn btn-ghost">Condos Near UT →</a>
        </div>
      </section>

      <ContactSection source="instateutaustin-tuition-calculator" />
    </>
  );
}
