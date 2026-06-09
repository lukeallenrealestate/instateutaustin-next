'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/texas-residency-rules', label: 'Residency Rules' },
  { href: '/parent-guide', label: 'Parent Guide' },
  { href: '/tuition-calculator', label: 'Calculator' },
  { href: '/residency-checklist', label: 'Checklist' },
  { href: '/condos-near-ut', label: 'Condos' },
  { href: '/faq', label: 'FAQ' },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center bg-navy-dk/95 backdrop-blur border-b border-gold/20" aria-label="Primary">
      <div className="wrap flex items-center justify-between">
        <Link href="/" className="text-paper font-serif font-semibold text-lg no-underline">
          instate<span className="text-gold">UT</span>austin
        </Link>
        <button
          className="md:hidden text-gold-lt p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <path d="M6 6l12 12M6 18L18 6" />
              : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
        <ul className={`${open ? 'flex' : 'hidden'} md:flex absolute md:static top-16 inset-x-0 md:inset-auto flex-col md:flex-row md:items-center gap-2 md:gap-5 bg-navy-dk md:bg-transparent p-4 md:p-0 border-b md:border-0 border-gold/20`}>
          {links.map(l => {
            const active = pathname === l.href || (l.href !== '/' && pathname?.startsWith(l.href));
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block text-sm font-medium no-underline transition-colors ${active ? 'text-paper' : 'text-gold-lt hover:text-paper'}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              className="inline-block bg-gold text-navy-dk font-semibold text-sm px-4 py-2 rounded no-underline hover:bg-gold-lt"
              onClick={() => setOpen(false)}
            >
              Ask a Question
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
