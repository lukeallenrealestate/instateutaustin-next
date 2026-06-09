'use client';

export function PrintButton({ label = 'Print checklist →' }: { label?: string }) {
  return (
    <button className="btn" onClick={() => window.print()}>
      {label}
    </button>
  );
}
