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
    <nav
      className="fixed top-0 inset-x-0 z-50 h-16 bg-paper/90 backdrop-blur-md border-b border-hairline"
      aria-label="Primary"
    >
      <div className="max-w-[1280px] mx-auto h-full px-5 lg:px-8 flex items-center justify-between gap-6">
        {/* Brand */}
        <Link
          href="/"
          className="text-ink font-serif font-semibold text-xl no-underline whitespace-nowrap leading-none tracking-tight"
        >
          instate<span className="text-burnt">UT</span>austin
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden -mr-2 p-2 text-ink"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>

        {/* Links + CTA */}
        <ul
          className={`${open ? 'flex' : 'hidden'} md:flex absolute md:static top-16 inset-x-0 md:inset-auto flex-col md:flex-row md:items-center gap-1 md:gap-7 list-none m-0 p-4 md:p-0 bg-paper md:bg-transparent border-b border-hairline md:border-0`}
        >
          {links.map(l => {
            const active =
              pathname === l.href ||
              (l.href !== '/' && pathname?.startsWith(l.href));
            return (
              <li key={l.href} className="m-0">
                <Link
                  href={l.href}
                  className={`block py-2 md:py-0 text-[15px] font-medium no-underline transition-colors leading-none relative ${
                    active ? 'text-ink' : 'text-body hover:text-ink'
                  }`}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                >
                  {l.label}
                  {active && (
                    <span
                      className="hidden md:block absolute left-0 right-0 -bottom-[22px] h-[2px] bg-burnt rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
          <li className="m-0 md:ml-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-burnt text-white font-medium text-[14px] rounded-md no-underline hover:bg-burnt-deep transition-colors leading-none whitespace-nowrap"
              style={{ padding: '10px 18px' }}
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
