'use client';

// Meta Pixel + consent banner.
// - Pre-launch: nothing renders.
// - Post-launch first visit: consent banner shows. Pixel does not load.
// - User clicks Accept: localStorage key 'iua_consent' = 'accepted'. Pixel loads.
// - User clicks Decline: localStorage key 'iua_consent' = 'declined'. Pixel does
//   not load now or on subsequent visits.
// - Returning visitor with prior consent: pixel loads silently; no banner.
//
// Lead events in ContactForm and CalculatorClient call fbq() only if available
// (typeof window.fbq === 'function'), so declined visitors silently skip lead
// tracking too.

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { SITE } from '@/lib/site';

type ConsentState = 'unknown' | 'accepted' | 'declined';

const STORAGE_KEY = 'iua_consent';

export function Analytics() {
  // Hooks must be called unconditionally; PRE_LAUNCH gate moves below.
  const [consent, setConsent] = useState<ConsentState>('unknown');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'accepted' || stored === 'declined') {
        setConsent(stored);
      }
    } catch {
      /* localStorage blocked (private mode, etc.) — leave as unknown */
    }
  }, []);

  if (SITE.PRE_LAUNCH) return null;

  const decide = (choice: 'accepted' | 'declined') => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setConsent(choice);
  };

  return (
    <>
      {/* Pixel loads only after explicit accept */}
      {mounted && consent === 'accepted' && (
        <>
          <Script id="meta-pixel-init" strategy="afterInteractive">{`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${SITE.metaPixelId}');
            fbq('track', 'PageView');
          `}</Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src={`https://www.facebook.com/tr?id=${SITE.metaPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}

      {/* Consent banner shown only on first visit (no decision stored) */}
      {mounted && consent === 'unknown' && (
        <div
          role="dialog"
          aria-label="Consent banner for advertising pixel"
          className="fixed bottom-4 inset-x-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 bg-surface border border-hairline rounded-lg shadow-lg p-5"
        >
          <p className="text-sm text-body m-0">
            We use a Meta (Facebook) Pixel to measure paid-advertising performance. It records page views and contact-form submissions. See our{' '}
            <Link href="/privacy" className="text-burnt-deep">privacy policy</Link>.
          </p>
          <div className="flex gap-2 mt-4 justify-end">
            <button
              onClick={() => decide('declined')}
              className="btn-ghost text-sm"
              style={{ padding: '8px 16px' }}
            >
              Decline
            </button>
            <button
              onClick={() => decide('accepted')}
              className="btn text-sm"
              style={{ padding: '8px 16px' }}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
