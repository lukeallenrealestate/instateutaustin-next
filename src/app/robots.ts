import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

// AI crawlers — explicitly allowed per the build spec, because blocking them
// makes citation in AI Overviews and AI answer engines impossible.
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'AmazonBot',
  'Applebot-Extended',
  'CCBot',
  'cohere-ai',
  'Meta-ExternalAgent',
  'meta-externalagent',
];

export default function robots(): MetadataRoute.Robots {
  if (SITE.PRE_LAUNCH) {
    // Pre-launch: disallow all crawlers, no sitemap reference.
    // Switch SITE.PRE_LAUNCH = false right before DNS flip.
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
    };
  }
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_BOTS.map(ua => ({ userAgent: ua, allow: '/' })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
