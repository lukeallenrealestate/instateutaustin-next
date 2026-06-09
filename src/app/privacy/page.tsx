import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

const TITLE = 'Privacy Policy';
const DESCRIPTION = 'Privacy policy for instateutaustin.com. How we handle contact-form submissions and what we do (and do not) collect.';
const PATH = '/privacy';

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH, noindex: true });

export default function PrivacyPage() {
  return (
    <section className="pt-20 pb-16">
      <div className="narrow">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="text-mid text-sm">Last reviewed: {SITE.lastReviewed}</p>

        <h2>What we collect</h2>
        <p>The only personal information instateutaustin.com collects directly is what you choose to enter into a contact form on this site: your name, email address, phone number (optional), student-status response, and any message you write. We do not require account creation. We do not collect Social Security numbers, financial-account information, or government identifiers anywhere on this site.</p>

        <h2>Why we collect it</h2>
        <p>Submitted form data is used for one purpose: to forward your inquiry to a Texas-licensed real-estate broker ({SITE.partner.name}, TREC #{SITE.partner.trecLicense}) who can answer your questions about Austin-area property and the residency-by-purchase pathway. If you do not want this kind of response, do not submit the contact form.</p>

        <h2>Where the data goes</h2>
        <p>When you submit a contact form, your data is sent to our server (instateutaustin.com), tagged with the page you submitted from, and forwarded to the contact endpoint at austintxhomes.co. The broker reads the submission, replies by email, and stores it in his ordinary client-management workflow. We do not sell, rent, or trade your data, and we do not share it with third parties for marketing purposes.</p>

        <h2>Cookies and analytics</h2>
        <p>We use a single first-party analytics tool to measure aggregate traffic patterns (which pages are most popular, where visitors come from). This tool does not identify you personally. We do not use third-party advertising cookies, retargeting pixels, or cross-site trackers. If your browser sends a Do Not Track signal, no analytics will fire.</p>

        <h2>How long we keep data</h2>
        <p>Form submissions are retained in the broker&apos;s email and CRM for as long as is reasonable for the inquiry. If you ask us in writing to delete your data, we will delete it within 30 days of confirming your identity.</p>

        <h2>Children</h2>
        <p>This site is written for parents and adult students. We do not knowingly collect information from anyone under 13. If you believe we have inadvertently collected information from a child, contact us and we will delete it.</p>

        <h2>Your rights</h2>
        <p>You can request access to, correction of, or deletion of your data at any time by emailing us through the contact form. Texas residents may invoke any rights granted under Texas state law; California, Virginia, and Colorado residents may invoke applicable rights under the CCPA, VCDPA, and CPA respectively. We will respond to verified requests within 30 days.</p>

        <h2>Security</h2>
        <p>Our server uses HTTPS. Form data is transmitted over TLS. The broker who receives the data is responsible for safeguarding it in his own systems. No internet transmission is perfectly secure; submit only the information you are comfortable sharing.</p>

        <h2>Changes</h2>
        <p>If we materially change this policy, we will update the &quot;last reviewed&quot; date at the top and, where appropriate, surface a notice on the home page. Continued use of the site after a change constitutes acceptance of the revised policy.</p>

        <h2>Contact</h2>
        <p>Privacy questions: use our <a href="/contact">contact form</a>.</p>
      </div>
    </section>
  );
}
