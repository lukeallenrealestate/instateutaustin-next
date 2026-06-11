'use client';

// Sticky table of contents with scroll-spy.
// - Desktop: rendered next to long-form content via a parent grid (sidebar).
// - Mobile: collapses to a "Jump to" disclosure at the top of the page.
//
// Pass `sections` as { id, label } pairs that match <h2 id="..."> on the page.
// The component uses IntersectionObserver to highlight the active section.

import { useEffect, useState } from 'react';

export interface TocSection {
  id: string;
  label: string;
}

interface Props {
  sections: TocSection[];
  /** Heading shown at the top of the sticky TOC. */
  heading?: string;
}

export function StickyTOC({ sections, heading = 'On this page' }: Props) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? '');
  const [open, setOpen] = useState(false); // mobile-only "Jump to" state

  useEffect(() => {
    const elements = sections
      .map(s => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        // A section is "active" when its top is between the nav and 40% down.
        rootMargin: '-80px 0px -55% 0px',
        threshold: 0,
      }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      {/* Desktop sidebar TOC */}
      <nav
        aria-label="Table of contents"
        className="hidden lg:block toc-sticky"
      >
        <h4>{heading}</h4>
        <ol>
          {sections.map(s => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={active === s.id ? 'is-active' : ''}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Mobile "Jump to" disclosure */}
      <details
        className="lg:hidden bg-cream border border-hairline rounded-md my-6"
        open={open}
        onToggle={e => setOpen((e.currentTarget as HTMLDetailsElement).open)}
      >
        <summary className="cursor-pointer list-none px-5 py-3.5 flex justify-between items-center text-sm font-semibold text-ink">
          <span>{heading}</span>
          <span className="text-burnt text-lg leading-none">{open ? '–' : '+'}</span>
        </summary>
        <ol className="px-5 pb-4 pt-1 list-none m-0">
          {sections.map(s => (
            <li key={s.id} className="border-t border-hairline">
              <a
                href={`#${s.id}`}
                className={`block py-2.5 text-sm no-underline ${active === s.id ? 'text-burnt font-semibold' : 'text-body'}`}
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </details>
    </>
  );
}
