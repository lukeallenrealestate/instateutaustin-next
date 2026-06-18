import type { Metadata } from 'next';
import { pageMetadata, breadcrumb } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Luke Allen (Texas REALTOR®) | Ask a Question',
  description: 'Ask a question about UT Austin in-state tuition, Texas residency rules, or the property pathway. Call (254) 718-2567, email luke@austinmdg.com, or use the form. Replies within one business day.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <Schema data={breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ])} />

      <section className="py-16">
        <div className="wrap grid md:grid-cols-2 gap-12 max-w-[980px]">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h1 className="mt-0">Ask a question</h1>
            <p className="text-body text-lg">If you have a question about Texas residency, the 12-month domicile clock, the property pathway, or your specific situation, reach out below. Every submission goes directly to Luke and gets a personal reply.</p>

            {/* Three contact methods, equally weighted. Reader picks the
                channel they prefer. */}
            <div className="grid gap-3 mt-7">
              <a
                href="tel:+12547182567"
                className="flex items-center gap-3 p-4 bg-surface border border-hairline rounded-md no-underline hover:border-burnt transition-colors"
              >
                <span aria-hidden="true" className="text-burnt text-2xl">📞</span>
                <span>
                  <span className="block text-xs text-body uppercase tracking-wider">Call or text</span>
                  <span className="block text-ink font-semibold text-lg">(254) 718-2567</span>
                </span>
              </a>
              <a
                href="mailto:luke@austinmdg.com"
                className="flex items-center gap-3 p-4 bg-surface border border-hairline rounded-md no-underline hover:border-burnt transition-colors"
              >
                <span aria-hidden="true" className="text-burnt text-2xl">✉</span>
                <span>
                  <span className="block text-xs text-body uppercase tracking-wider">Email</span>
                  <span className="block text-ink font-semibold text-lg">luke@austinmdg.com</span>
                </span>
              </a>
              <div className="flex items-center gap-3 p-4 bg-surface border border-hairline rounded-md">
                <span aria-hidden="true" className="text-burnt text-2xl">✉</span>
                <span>
                  <span className="block text-xs text-body uppercase tracking-wider">Form (right)</span>
                  <span className="block text-ink font-semibold text-lg">Same inbox</span>
                </span>
              </div>
            </div>

            <h2>What you can expect</h2>
            <ul>
              <li><strong>Response time:</strong> within one business day, usually faster.</li>
              <li><strong>What you will get:</strong> a written answer, links to the most relevant pages, and (if it fits) an introduction to our recommended Austin real-estate broker.</li>
              <li><strong>What you will not get:</strong> spam, sales sequences, or your email shared with third parties.</li>
            </ul>
          </div>
          <div>
            <ContactForm
              source="instateutaustin-contact-page"
              heading="Send a message"
              subhead="Two to three sentences describing your situation are usually enough."
            />
          </div>
        </div>
      </section>
    </>
  );
}
