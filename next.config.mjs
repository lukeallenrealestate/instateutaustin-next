/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Site is statically generated where possible. Lead-proxy /api/contact runs on
  // Vercel's edge runtime; everything else is pre-rendered at build time.
  // Image optimization stays on Vercel default.
  async redirects() {
    return [
      // The static site had this same alias; preserve here.
      { source: '/ut-austin-in-state-tuition', destination: '/texas-residency-rules', permanent: true },
    ];
  },
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
    ];
  },
};

export default nextConfig;
