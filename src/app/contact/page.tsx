import type { Metadata } from 'next';
import { pageMetadata, breadcrumb } from '@/lib/seo';
import { Schema } from '@/components/Schema';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us',
  description: 'Ask a question about UT Austin in-state tuition, Texas residency rules, or the property pathway. We respond within one business day.',
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
            <p className="text-mid text-lg">If you have a question about Texas residency, the 12-month domicile clock, the property pathway, or your specific situation, send it through the form. We read every submission and route to a real human.</p>

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
