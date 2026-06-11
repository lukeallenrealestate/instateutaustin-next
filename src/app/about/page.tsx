import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb, AUTHOR_PERSON } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { SITE } from '@/lib/site';
import { TUITION, fmtUSD } from '@/lib/tuition';

const TITLE = 'About Luke Allen + instateutaustin.com';
const DESCRIPTION = `Published by Luke Allen, Texas REALTOR® (TREC #788149), Austin Marketing + Development Group. Why the site exists, how it makes money, and the editorial standards behind the guide.`;
const PATH = '/about';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function AboutPage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'About', path: PATH },
      ])} />
      <Schema data={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        url: `${SITE.url}${PATH}`,
        name: TITLE,
        publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
        mainEntity: AUTHOR_PERSON,
      }} />
      {/* Standalone Person profile so search engines associate the named author
          with this URL directly. Pairs with the same Person referenced by
          every Article schema across the site. */}
      <Schema data={{ '@context': 'https://schema.org', ...AUTHOR_PERSON }} />

      <section className="pt-20 pb-16">
        <div className="narrow">
          <p className="eyebrow">About</p>
          <h1>Why this site exists</h1>
          <p className="text-body text-lg mb-8">A neutral, plain-English guide for out-of-state families trying to understand whether, and how, to qualify for in-state tuition at UT Austin through Texas residency.</p>

          <h2>The problem this site solves</h2>
          <p>If your student has been admitted to The University of Texas at Austin from out of state, you are looking at roughly <strong>{fmtUSD(TUITION.outOfStatePerYear)} a year</strong> in tuition, fees, and required charges, versus roughly <strong>{fmtUSD(TUITION.inStatePerYear)} a year</strong> for a Texas resident. In-state tuition is frozen by the Texas Legislature through the 2026-27 academic year; out-of-state continues to rise. The annual delta is about <strong>{fmtUSD(TUITION.annualSavings)}</strong>, and over the typical out-of-state-year-1 plus in-state-years-2-to-4 pathway, the savings total about <strong>{fmtUSD(TUITION.threeYearSavings)} in 2026 dollars</strong>. Source: <a href={TUITION.source.url} target="_blank" rel="nofollow noopener">UT One Stop</a>.</p>
          <p>Texas law allows out-of-state families to establish residency for tuition purposes through a domicile pathway that almost always involves the parents acquiring real property in Texas and the student living at that property for twelve continuous months before the term in which they want in-state status. The rules are codified in the Texas Education Code §54.052 and the Texas Administrative Code, Title 19, Part 1, Chapter 21 (often called &quot;the THECB Residency Rules&quot;). The doctrine itself is not obscure, but the <em>execution</em> is hard. Documents must be obtained on a specific timeline. Tax filings interact with residency. Scholarships interact with residency. A misstep anywhere can sink the whole petition.</p>
          <p>We built this site because the existing public information is scattered across the UT registrar&apos;s catalog, the THECB&apos;s PDF rule book, half a dozen Reddit threads, and a constellation of real-estate marketing pages that bury the actual rules under sales copy. Families need a single readable explanation of the law, the timeline, and the failure modes, written for them, not for an admissions officer.</p>

          <h2>Who publishes this site</h2>
          <p>instateutaustin.com is published by <strong>{SITE.partner.name}</strong>, a Texas-licensed real estate agent (TREC #{SITE.partner.trecLicense}) operating through {SITE.partner.brokerage} in Austin. {SITE.partner.name.split(' ')[0]} has walked dozens of out-of-state families through the Rule #3 / Rule #4 decision tree this site describes. The site exists to provide accurate, plain-English information about Texas residency for UT Austin tuition, and to introduce readers who decide to acquire Texas property to a broker who has done this play before.</p>
          <p>We are not affiliated with The University of Texas at Austin, the UT System, the Texas Higher Education Coordinating Board, or any government agency. We update the site quarterly and after any material change to the THECB Residency Rules. Every authority page carries a &quot;last reviewed&quot; date. When tuition figures change, the home page and the calculator update first, and the supporting pages follow.</p>

          <h2>How the site makes money (and how it does not)</h2>
          <p>The site is a lead-generation funnel for {SITE.partner.name.split(' ')[0]}&apos;s real-estate practice. If you read this site, decide the residency-by-property pathway fits your family, and choose to acquire Austin property through {SITE.partner.name.split(' ')[0]}, he earns the customary buyer-agency commission paid by the seller. That is the business model. We say so up front because the alternative, framing the site as &quot;independent editorial,&quot; would be misleading.</p>
          <p>What the business model does <em>not</em> do is change what we write. The legal framework, the tuition figures, the failure modes, and the timeline are what they are. If the calculator on this site tells you the math does not work for your situation, we say so on the page even though it costs us a lead. If a property purchase would not satisfy Rule #3 or Rule #4, we say that too.</p>
          <p>We do not earn money from the University of Texas, the THECB, lenders, title companies, residency consultants, scholarship sponsors, or any law firm. We do not run programmatic display advertising. We do not sell email lists. We do not run sponsored content. The site uses the Meta (Facebook) Pixel to measure paid-advertising performance; that is disclosed in the consent banner and on the <Link href="/privacy">privacy page</Link>.</p>

          <h2>What we will not do</h2>
          <ul>
            <li>We will not tell you UT residency is easy. It is procedurally specific and the documentation burden is real.</li>
            <li>We will not tell you any property purchase counts. The property must satisfy Rule #3 or Rule #4 of the THECB framework; many do not.</li>
            <li>We will not help you misrepresent intent. If your family has no genuine intent to establish Texas as a home, this pathway is not for you.</li>
            <li>We will not substitute for legal or tax counsel. We <em>will</em> tell you when a question crosses the line into territory that requires a Texas attorney or CPA.</li>
          </ul>

          <h2>How to use the site</h2>
          <ol>
            <li>Start with the <Link href="/texas-residency-rules">authority page on Texas residency rules</Link> to understand the legal framework.</li>
            <li>Run your numbers through the <Link href="/tuition-calculator">tuition calculator</Link> to confirm the savings are worth the effort in your specific case.</li>
            <li>Use the <Link href="/rule-3-vs-rule-4">Rule #3 vs. Rule #4</Link> comparison to decide which pathway fits your situation.</li>
            <li>Follow the <Link href="/12-month-timeline">12-month timeline</Link> and the <Link href="/residency-checklist">document checklist</Link> as your operating plan.</li>
            <li>Talk to us, or to {SITE.partner.name.split(' ')[0]} directly, when you are ready to look at property.</li>
          </ol>

          <h2>Editorial standards</h2>
          <p>Every page on this site cites primary sources where claims about the rules are made: Texas Education Code §54.052, Texas Administrative Code Title 19 Part 1 Chapter 21, the UT Austin General Information Catalog, and the THECB&apos;s annual residency questions document. We do not cite secondary commentary as if it were primary law. When a topic is genuinely contested, we say so and present both readings rather than pretending there is one right answer.</p>
          <p>We welcome corrections. If you spot an error, especially in a citation, a tuition figure, or a procedural step, use the <Link href="/contact">contact form</Link>. Material corrections are noted on the page itself.</p>

          <div className="callout mt-10">
            <h4>Working with us</h4>
            <p className="mb-0">There is no fee to use this site. There is no fee to ask a question through the <Link href="/contact">contact form</Link>. If you want to look at Austin-area condos, multifamily property, or small single-family homes for the Rule #3 or Rule #4 path, we will introduce you to {SITE.partner.name} at no cost. You are under no obligation to work with anyone we suggest.</p>
          </div>
        </div>
      </section>
    </>
  );
}
