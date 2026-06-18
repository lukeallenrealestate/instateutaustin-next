// Unified hero header for every guide page.
//
// Carries the UT Tower image (the brand subject) behind a cream wash strong
// enough to keep the headline readable as plain ink-on-paper. The image is
// the same /images/ut-tower.png used on the home hero; the browser caches it
// once and reuses across navigations.

import Image from 'next/image';
import type { ReactNode } from 'react';

interface Props {
  /** Small-caps eyebrow label above the H1. */
  eyebrow?: string;
  /** H1 content. Can be a string or JSX (allows burnt accents on key words). */
  title: ReactNode;
  /** Optional supporting paragraph beneath the H1. */
  lede?: ReactNode;
  /** Optional meta strip (last reviewed, word count, etc.) below the lede. */
  meta?: ReactNode;
  /** Container width: 'narrow' (760px) for prose pages, 'wide' (1180px) for
   *  landing pages with two-column layout. */
  width?: 'narrow' | 'wide';
}

export function PageHero({ eyebrow, title, lede, meta, width = 'narrow' }: Props) {
  const containerCls = width === 'wide' ? 'wrap' : 'narrow';
  return (
    <header
      className="relative overflow-hidden pt-20 pb-12 border-b border-hairline"
      style={{ backgroundColor: '#FAF6EE' }}
    >
      {/* Tower image, atmospheric (heavier cream wash than the home hero
          so the headline always wins). */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/ut-tower.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(250,246,238,0.94) 0%, rgba(250,246,238,0.92) 50%, rgba(250,246,238,0.98) 100%)',
          }}
        />
      </div>

      <div className={`relative z-10 ${containerCls}`}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {typeof title === 'string' ? (
          <h1 className="text-ink">{title}</h1>
        ) : (
          title
        )}
        {lede && <div className="text-body text-lg max-w-[64ch] mt-4">{lede}</div>}
        {meta && <div className="text-sm text-body mt-5 flex gap-6 flex-wrap">{meta}</div>}
      </div>
    </header>
  );
}
