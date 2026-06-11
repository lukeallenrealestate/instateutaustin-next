// Source / freshness / affiliation row. Render on every guide page.
// Reads from SITE constants so the "last reviewed" date updates centrally.

import { SITE } from '@/lib/site';

interface Props {
  /** Override the citation chip ("Cites §54.052") if the page is non-legal. */
  citation?: string;
  /** Override the last-reviewed date for pages reviewed off-schedule. */
  reviewed?: string;
}

export function TrustRow({ citation = 'Cites Texas Education Code §54.052', reviewed }: Props) {
  return (
    <div className="bg-cream border-y border-hairline py-4 text-sm text-body">
      <div className="wrap flex flex-wrap gap-x-6 gap-y-2 justify-center">
        <span className="inline-flex items-center"><Dot />{citation}</span>
        <span className="inline-flex items-center"><Dot />Last reviewed {reviewed ?? SITE.lastReviewed}</span>
        <span className="inline-flex items-center"><Dot />Not affiliated with UT or THECB</span>
        <span className="inline-flex items-center"><Dot />Published by Luke Allen, TREC #{SITE.partner.trecLicense}</span>
      </div>
    </div>
  );
}

function Dot() {
  return <span className="inline-block w-1.5 h-1.5 bg-burnt rounded-full mr-2 align-middle" aria-hidden="true" />;
}
