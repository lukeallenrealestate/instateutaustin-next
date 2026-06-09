// GA4 + Meta Pixel loader. Mounted once in the root layout.
// Gated by SITE.PRE_LAUNCH — pre-launch, no analytics fires.

import Script from 'next/script';
import { SITE } from '@/lib/site';

export function Analytics() {
  if (SITE.PRE_LAUNCH) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE.ga4Id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${SITE.ga4Id}', { anonymize_ip: true });
      `}</Script>
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
        <img height="1" width="1" style={{ display: 'none' }} alt=""
          src={`https://www.facebook.com/tr?id=${SITE.metaPixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
