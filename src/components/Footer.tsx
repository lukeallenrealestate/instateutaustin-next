import Link from 'next/link';
import { SITE } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-paper text-body pt-14 pb-7 mt-20 text-sm border-t border-hairline">
      <div className="wrap">
        <div className="bg-cream border-l-[3px] border-burnt p-4 mb-7 text-xs text-body leading-relaxed rounded-r">
          <strong className="text-ink">{SITE.disclaimer.split('.')[0]}.</strong>{' '}
          Information presented here is educational. It is not legal or tax advice. Rules and tuition figures change. Verify with the relevant authorities and consult a Texas-licensed attorney or CPA for personal cases.
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-9 mb-9">
          <div>
            <div className="font-serif text-ink text-xl mb-2">
              instate<span className="text-burnt">UT</span>austin
            </div>
            <p className="text-body max-w-xs">
              A guide for out-of-state families navigating Texas residency rules and UT Austin tuition strategy.
            </p>
            <p className="text-xs text-light max-w-xs mt-3">
              Published by <strong className="text-ink">Luke Allen</strong>, Texas REALTOR® (TREC #788149), Austin Marketing + Development Group.
            </p>
          </div>
          <FootCol title="The Rules" links={[
            ['/texas-residency-rules', 'Texas Residency Rules'],
            ['/rule-3-vs-rule-4', 'Rule #3 vs Rule #4'],
            ['/residency-checklist', 'Residency Checklist'],
            ['/12-month-timeline', '12-Month Timeline'],
          ]}/>
          <FootCol title="Plan & Save" links={[
            ['/tuition-calculator', 'Tuition Calculator'],
            ['/parent-guide', 'Parent Guide'],
            ['/condos-near-ut', 'Condos Near UT'],
            ['/faq', 'FAQ'],
          ]}/>
          <FootCol title="Site" links={[
            ['/about', 'About'],
            ['/contact', 'Contact'],
            ['/disclaimer', 'Disclaimer'],
            ['/privacy', 'Privacy'],
          ]}/>
        </div>
        <div className="border-t border-hairline pt-5 flex flex-wrap gap-3 justify-between text-xs text-light">
          <span>© {year} instateutaustin.com. Educational use only.</span>
          <span>Reviewed: {SITE.lastReviewed}</span>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ title, links }: { title: string; links: Array<[string, string]> }) {
  return (
    <div>
      <h4 className="text-burnt text-xs font-bold uppercase tracking-widest mb-3">{title}</h4>
      {links.map(([href, label]) => (
        <Link
          key={href}
          href={href}
          className="block py-1 text-body no-underline hover:text-burnt"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
