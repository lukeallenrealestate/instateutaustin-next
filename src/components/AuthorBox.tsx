// E-E-A-T anchor. Drop this near the top or bottom of every guide page so the
// authored-by signal renders as visible content (not just JSON-LD).
//
// Variants:
//   compact (default): horizontal strip, photo + name + license + 1-line credibility + link
//   inline:            vertical card for sidebars
//   bio:               full bio block used on /about

import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';

interface Props {
  variant?: 'compact' | 'inline' | 'bio';
  /** One-line credibility hook ("Has walked 50+ families through Rule #3"). */
  blurb?: string;
}

const DEFAULT_BLURB =
  'Has walked dozens of out-of-state families through the Rule #3 / Rule #4 decision tree this site describes.';

export function AuthorBox({ variant = 'compact', blurb = DEFAULT_BLURB }: Props) {
  if (variant === 'bio') {
    return (
      <aside className="bg-surface border border-hairline rounded-lg p-6 my-9 flex gap-5 items-start">
        <Image
          src="/images/luke-allen.jpg"
          alt="Luke Allen, Texas REALTOR®"
          width={84}
          height={84}
          className="rounded-full object-cover flex-shrink-0"
          style={{ aspectRatio: '1/1' }}
        />
        <div>
          <p className="eyebrow mb-1.5">About the publisher</p>
          <h3 className="m-0 text-ink font-serif text-xl">{SITE.partner.name}</h3>
          <p className="text-body text-sm mt-1 mb-2">
            Texas REALTOR® (TREC #{SITE.partner.trecLicense}) · {SITE.partner.brokerage}
          </p>
          <p className="text-body text-sm m-0">{blurb}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link href="/about" className="text-burnt-deep">About</Link>
            <Link href="/contact" className="text-burnt-deep">Ask a question</Link>
            <a href={`mailto:${SITE.partner.email}`} className="text-burnt-deep">{SITE.partner.email}</a>
          </div>
        </div>
      </aside>
    );
  }

  if (variant === 'inline') {
    return (
      <aside className="bg-surface border border-hairline rounded-md p-5 my-7">
        <div className="flex items-center gap-3 mb-3">
          <Image
            src="/images/luke-allen.jpg"
            alt="Luke Allen, Texas REALTOR®"
            width={56}
            height={56}
            className="rounded-full object-cover flex-shrink-0"
            style={{ aspectRatio: '1/1' }}
          />
          <div>
            <p className="m-0 font-semibold text-ink text-sm leading-tight">{SITE.partner.name}</p>
            <p className="m-0 text-light text-xs mt-0.5">Texas REALTOR® · TREC #{SITE.partner.trecLicense}</p>
          </div>
        </div>
        <p className="text-body text-xs leading-relaxed m-0">{blurb}</p>
        <Link href="/about" className="text-burnt-deep text-xs no-underline hover:underline mt-2 inline-block">More about Luke →</Link>
      </aside>
    );
  }

  // compact (default)
  return (
    <aside className="bg-surface border border-hairline rounded-lg p-5 my-7 flex gap-4 items-center">
      <Image
        src="/images/luke-allen.jpg"
        alt="Luke Allen, Texas REALTOR®"
        width={64}
        height={64}
        className="rounded-full object-cover flex-shrink-0"
        style={{ aspectRatio: '1/1' }}
      />
      <div className="flex-1 min-w-0">
        <p className="m-0 text-light text-xs uppercase tracking-wider mb-0.5">Published by</p>
        <p className="m-0 font-semibold text-ink leading-tight">
          {SITE.partner.name}
          <span className="text-body font-normal"> · Texas REALTOR® (TREC #{SITE.partner.trecLicense})</span>
        </p>
        <p className="m-0 text-body text-sm mt-1.5">{blurb}</p>
      </div>
      <Link
        href="/about"
        className="hidden sm:inline-block btn-ghost text-sm flex-shrink-0"
        style={{ padding: '8px 16px' }}
      >
        About Luke →
      </Link>
    </aside>
  );
}
