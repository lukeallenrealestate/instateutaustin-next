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
};

export default nextConfig;
