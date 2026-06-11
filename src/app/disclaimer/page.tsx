import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

const TITLE = 'Disclaimer';
const DESCRIPTION = 'Educational disclaimer for instateutaustin.com. Information on this site is not legal, tax, or financial advice and is not affiliated with the University of Texas at Austin.';
const PATH = '/disclaimer';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH, noindex: true });

export default function DisclaimerPage() {
  return (
    <section className="pt-20 pb-16">
      <div className="narrow">
        <p className="eyebrow">Legal</p>
        <h1>Disclaimer</h1>
        <p className="text-body text-sm">Last reviewed: {SITE.lastReviewed}</p>

        <h2>Publisher and affiliation</h2>
        <p>instateutaustin.com is published by {SITE.partner.name}, a Texas-licensed real estate agent (TREC #{SITE.partner.trecLicense}) operating through {SITE.partner.brokerage}. The site is an educational publication of his real-estate practice. We are not affiliated with, endorsed by, or sponsored by The University of Texas at Austin, the UT System, the Texas Higher Education Coordinating Board (THECB), the Texas Comptroller of Public Accounts, or any agency of the State of Texas. Trademarks and brand names referenced on this site are the property of their respective owners and are used only for identification.</p>

        <h2>Not legal advice</h2>
        <p>Nothing on this website constitutes legal advice. Reading this site does not create an attorney-client relationship. Texas residency rules for higher education tuition purposes are governed by Texas Education Code §54.052 and the Texas Administrative Code, Title 19, Part 1, Chapter 21. The interpretation and application of these rules to your particular facts may require a Texas-licensed attorney. We strongly encourage families with complex situations (divorce, military service, immigration status questions, scholarship interactions, prior denials) to consult counsel before relying on anything they read here.</p>

        <h2>Not tax advice</h2>
        <p>This site discusses federal tax filing concepts (dependent vs. independent filing status, deductions, depreciation) in general educational terms. It does not constitute tax advice. Consult a CPA or enrolled agent licensed in Texas for guidance specific to your household.</p>

        <h2>Not real estate advice</h2>
        <p>Pages on this site that discuss property acquisition near UT Austin describe general considerations and are not a substitute for working with a licensed Texas real estate broker. We recommend (see <a href="/about">About</a>) a single Texas-licensed broker who specializes in UT-area transactions; you remain free to choose any agent.</p>

        <h2>Information current as of the review date</h2>
        <p>Tuition rates, the THECB residency core questions, fee schedules, and UT Austin&apos;s residency determination procedures change. We update this site periodically and date every page, but we cannot guarantee that the information on any given page reflects the most current rules at the time you read it. Always cross-check critical figures against the UT Austin General Information Catalog and the THECB Residency Rules.</p>

        <h2>No guarantees</h2>
        <p>Establishing Texas residency for tuition purposes depends on documentation, timing, intent, and the discretion of the UT Office of Admissions Residency Determination. We make no guarantee about the outcome of any residency petition. Examples and case studies on this site are illustrative, anonymized where applicable, and not predictive of your result.</p>

        <h2>Affiliate disclosure</h2>
        <p>This site earns revenue when readers who choose to purchase Austin-area property elect to work with our recommended local real-estate partner, {SITE.partner.name} (Texas Real Estate Commission license #{SITE.partner.trecLicense}, {SITE.partner.brokerage}). No referral fee from any party influences our editorial content, the rules we describe, or the strategies we recommend. We do not earn fees from the University of Texas, the THECB, or any educational institution.</p>

        <h2>Contact</h2>
        <p>Questions about this disclaimer: email the editor through our <a href="/contact">contact form</a>.</p>
      </div>
    </section>
  );
}
