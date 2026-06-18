// End-of-page contact section. Drop on every guide page so a reader who
// just absorbed 4,000 words can ask their specific question without
// hunting for the contact link in the nav.
//
// Wraps the existing ContactForm component (which already POSTs to
// /api/contact and routes through to luke@austinmdg.com), in a warm
// cream section with a page-specific heading + subhead, plus a visible
// phone number for readers who prefer to call.

import { ContactForm } from './ContactForm';

interface Props {
  /** Source tag stored with the submission so Luke can see which page
   *  the lead came from (e.g., "instateutaustin-rule-3-vs-rule-4"). */
  source: string;
  /** Optional H2 override. Default frames it as a generic "talk to a human". */
  heading?: string;
  /** Optional subhead override. */
  subhead?: string;
}

const PHONE_DISPLAY = '(254) 718-2567';
const PHONE_TEL = '+12547182567';
const EMAIL = 'luke@austinmdg.com';

const DEFAULT_HEADING = 'Your situation is specific. Get a written answer.';
const DEFAULT_SUBHEAD =
  'The site covers the general case. If your circumstances do not quite fit — divorce, military, scholarship interactions, late timing, prior denial — send a message. Luke replies personally, usually within one business day.';

export function ContactSection({
  source,
  heading = DEFAULT_HEADING,
  subhead = DEFAULT_SUBHEAD,
}: Props) {
  return (
    <section className="bg-cream py-16 border-t border-hairline">
      <div className="narrow">
        <p className="eyebrow">Talk to Luke</p>
        <h2 className="mt-0">{heading}</h2>
        <p className="text-body text-lg max-w-[60ch]">{subhead}</p>

        {/* Direct-contact strip: call, email, or use the form below. */}
        <div className="grid sm:grid-cols-2 gap-3 my-7 max-w-[60ch]">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-3 p-4 bg-surface border border-hairline rounded-md no-underline hover:border-burnt transition-colors"
          >
            <span aria-hidden="true" className="text-burnt text-xl">📞</span>
            <span>
              <span className="block text-xs text-body uppercase tracking-wider">Call or text</span>
              <span className="block text-ink font-semibold">{PHONE_DISPLAY}</span>
            </span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 p-4 bg-surface border border-hairline rounded-md no-underline hover:border-burnt transition-colors"
          >
            <span aria-hidden="true" className="text-burnt text-xl">✉</span>
            <span>
              <span className="block text-xs text-body uppercase tracking-wider">Email</span>
              <span className="block text-ink font-semibold">{EMAIL}</span>
            </span>
          </a>
        </div>

        <p className="text-sm text-body mt-6 mb-3">Or send a message and Luke will reply in writing:</p>
        <ContactForm source={source} variant="full" />
      </div>
    </section>
  );
}
