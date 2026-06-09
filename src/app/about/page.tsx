import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, breadcrumb } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { SITE } from '@/lib/site';
import { TUITION, fmtUSD } from '@/lib/tuition';

const TITLE = 'About instateutaustin.com';
const DESCRIPTION = 'Who runs instateutaustin.com, why it exists, how it makes money, and the editorial standards behind the guide.';
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
      }} />

      <section className="pt-20 pb-16">
        <div className="narrow">
          <p className="eyebrow">About</p>
          <h1>Why this site exists</h1>
          <p className="text-mid text-lg mb-8">A neutral, plain-English guide for out-of-state families trying to understand whether, and how, to qualify for in-state tuition at UT Austin through Texas residency.</p>

          <h2>The problem this site solves</h2>
          <p>If your student has been admitted to The University of Texas at Austin from out of state, you are looking at roughly <strong>{fmtUSD(TUITION.outOfStatePerYear)} a year</strong> in tuition, fees, and required charges, versus roughly <strong>{fmtUSD(TUITION.inStatePerYear)} a year</strong> for a Texas resident. In-state tuition is frozen by the Texas Legislature through the 2026-27 academic year; out-of-state continues to rise. The annual delta is about <strong>{fmtUSD(TUITION.annualSavings)}</strong>, and over the typical out-of-state-year-1 plus in-state-years-2-to-4 pathway, the savings total about <strong>{fmtUSD(TUITION.threeYearSavings)} in 2026 dollars</strong>. Source: <a href={TUITION.source.url} target="_blank" rel="nofollow noopener">UT One Stop</a>.</p>
          <p>Texas law allows out-of-state families to establish residency for tuition purposes through a domicile pathway that almost always involves the parents acquiring real property in Texas and the student living at that property for twelve continuous months before the term in which they want in-state status. The rules are codified in the Texas Education Code §54.052 and the Texas Administrative Code, Title 19, Part 1, Chapter 21 (often called &quot;the THECB Residency Rules&quot;). The doctrine itself is not obscure, but the <em>execution</em> is hard. Documents must be obtained on a specific timeline. Tax filings interact with residency. Scholarships interact with residency. A misstep anywhere can sink the whole petition.</p>
          <p>We built this site because the existing public information is scattered across the UT registrar&apos;s catalog, the THECB&apos;s PDF rule book, half a dozen Reddit threads, and a constellation of real-estate marketing pages that bury the actual rules under sales copy. Families need a single readable explanation of the law, the timeline, and the failure modes, written for them, not for an admissions officer.</p>

          <h2>Who runs this site</h2>
          <p>instateutaustin.com is published by a small editorial team based in Austin, Texas. The principal editor has spent more than a decade working on Texas residency and university admissions topics in both legal and real-estate contexts. The site does not employ the University of Texas, the UT System, the Texas Higher Education Coordinating Board, or any government agency. It is wholly independent.</p>
          <p>We update the site quarterly and after any material change to the THECB Residency Rules. Every authority page carries a &quot;last reviewed&quot; date. When tuition figures change, the home page and the calculator update first, and the supporting pages follow.</p>

          <h2>How we make money</h2>
          <p>We earn revenue in one way: when readers who are pursuing the residency-by-property pathway choose to work with our recommended Austin real-estate broker. We have one recommended partner, <strong>{SITE.partner.name}</strong>, Texas Real Estate Commission license #{SITE.partner.trecLicense}, of {SITE.partner.brokerage}. We chose him because he has personally walked dozens of out-of-state families through the same Rule #3 / Rule #4 decision tree this site describes, and because his pricing is at market for the Austin condo and small-multifamily transactions that dominate this pathway.</p>
          <p>The referral arrangement does not affect what we write. We do not recommend property ownership where it does not serve the family&apos;s actual goals. If the calculator on this site tells you the math does not work for your situation, we will say so on the page even though it costs us a lead.</p>
          <p>We do not earn money from the University of Texas, the THECB, lenders, title companies, residency consultants, scholarship sponsors, or any law firm. We do not run programmatic display advertising. We do not sell email lists. We do not run sponsored content.</p>

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
