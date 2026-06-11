'use client';

// Wrap any block in <FadeIn>...</FadeIn> to get a one-shot fade-and-rise on
// scroll into view. Honors prefers-reduced-motion via the CSS (.fade-in
// rule disables transform/opacity under reduced-motion).

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** Delay before showing in ms; useful for staggered reveals. */
  delay?: number;
  /** Apply to a tag other than div. */
  as?: 'div' | 'section' | 'article';
  className?: string;
}

export function FadeIn({ children, delay = 0, as = 'div', className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Respect reduced motion: just show immediately.
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            window.setTimeout(() => setVisible(true), delay);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Tag = as;
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`fade-in ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
