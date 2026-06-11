'use client';

// Thin 3px burnt progress bar fixed to the top of the viewport. Signals
// "this is finite" on long articles. Respects prefers-reduced-motion by
// snapping rather than animating.

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = max <= 0 ? 0 : (window.scrollY / max) * 100;
      setPct(Math.min(100, Math.max(0, next)));
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] pointer-events-none"
      style={{ height: 3 }}
    >
      <div
        className="h-full bg-burnt"
        style={{ width: `${pct}%`, transition: 'width 90ms linear' }}
      />
    </div>
  );
}
