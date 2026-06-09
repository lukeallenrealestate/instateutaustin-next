// Answer-first block. Render at the top of every informational page,
// after the H1 and before any long content. AI engines extract this
// passage when summarizing the page.

import type { ReactNode } from 'react';

export function QuickAnswer({ children, label = 'Quick answer' }: { children: ReactNode; label?: string }) {
  return (
    <div className="quick-answer" role="region" aria-label="Quick answer">
      <span className="qa-label">{label}</span>
      <p>{children}</p>
    </div>
  );
}
