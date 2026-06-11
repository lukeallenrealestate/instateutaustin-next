'use client';

// Sticky bottom action bar on mobile only. One primary action ("Ask a
// question"), one secondary ("Run the numbers"). Thumb-reachable; never
// covers content because the body gets safe bottom padding when shown.
//
// Hidden on:
//   - desktop (md+ breakpoint)
//   - /contact page (form already onscreen)
//   - very top of the page (first viewport) so the hero isn't obscured

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileBar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 320);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide on routes where the bar would be redundant or in the way.
  const hiddenOn = ['/contact', '/disclaimer', '/privacy'];
  if (hiddenOn.includes(pathname || '')) return null;

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 bg-paper border-t border-hairline transition-transform duration-200 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{
        paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 8px)',
        paddingTop: 10,
        boxShadow: '0 -4px 12px rgba(43,41,38,0.06)',
      }}
      role="region"
      aria-label="Quick actions"
    >
      <div className="px-4 flex gap-2 items-center">
        <Link
          href="/contact"
          className="btn flex-1 text-center text-sm"
          style={{ padding: '12px 16px' }}
        >
          Ask a question
        </Link>
        <Link
          href="/tuition-calculator"
          className="btn-ghost flex-1 text-center text-sm rounded-md"
          style={{ padding: '12px 16px' }}
        >
          Run the numbers
        </Link>
      </div>
    </div>
  );
}
