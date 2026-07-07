/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Site is statically generated where possible. Lead-proxy /api/contact runs on
  // Vercel's edge runtime; everything else is pre-rendered at build time.
  // Image optimization stays on Vercel default.
  // The state-page SEO URL (/california-families-...) rewrites internally to
  // a clean dynamic route (/families/california). The browser URL stays
  // SEO-friendly; Next.js renders from the clean route.
  // Note: rewrites do NOT pre-render the SEO URL. The dynamic route at
  // /families/[state] is pre-rendered via generateStaticParams, and the
  // rewrite proxies the SEO URL to it at request time.
  async rewrites() {
    return [
      {
        source: '/:state-families-ut-austin-in-state-tuition',
        destination: '/families/:state',
      },
      {
        // SEO-friendly /ut-austin-engineering-tuition rewrites to /colleges/engineering
        source: '/ut-austin-:college-tuition',
        destination: '/colleges/:college',
      },
      {
        // SEO-friendly /ut-austin-residency-military-families rewrites to /residency/military-families
        source: '/ut-austin-residency-:scenario',
        destination: '/residency/:scenario',
      },
      {
        // SEO-friendly /ut-austin-vs-texas-am rewrites to /comparisons/texas-am
        source: '/ut-austin-vs-:school',
        destination: '/comparisons/:school',
      },
    ];
  },
  async redirects() {
    return [
      // Exact-match URL for "ut residency guide" and "ut austin residency guide"
      { source: '/ut-residency-guide',       destination: '/texas-residency-rules', permanent: true },
      { source: '/ut-austin-residency-guide', destination: '/texas-residency-rules', permanent: true },

      // Exact-match URLs for "buying a condo for UT in-state tuition" query variants
      { source: '/how-to-buy-a-condo-for-ut-in-state-tuition',      destination: '/buying-a-condo-for-ut-austin-in-state-tuition', permanent: true },
      { source: '/university-of-texas-buying-a-condo',              destination: '/buying-a-condo-for-ut-austin-in-state-tuition', permanent: true },
      { source: '/buying-a-condo-for-ut-tuition',                   destination: '/buying-a-condo-for-ut-austin-in-state-tuition', permanent: true },
      { source: '/buying-a-condo-for-in-state-tuition-ut-austin',   destination: '/buying-a-condo-for-ut-austin-in-state-tuition', permanent: true },
      { source: '/purchasing-a-condo-for-ut-austin-residency',      destination: '/buying-a-condo-for-ut-austin-in-state-tuition', permanent: true },
      { source: '/austin-condo-for-in-state-tuition',               destination: '/buying-a-condo-for-ut-austin-in-state-tuition', permanent: true },

      // West Campus specific query variants
      { source: '/west-campus-condo-for-in-state-tuition',          destination: '/west-campus-condos-in-state-tuition', permanent: true },
      { source: '/west-campus-condo-ut-residency',                  destination: '/west-campus-condos-in-state-tuition', permanent: true },

      // Real estate strategy variants
      { source: '/austin-real-estate-for-ut-tuition',               destination: '/austin-real-estate-ut-residency-strategy', permanent: true },
      { source: '/investment-property-ut-austin-residency',         destination: '/austin-real-estate-ut-residency-strategy', permanent: true },
    ];
  },
};

export default nextConfig;
