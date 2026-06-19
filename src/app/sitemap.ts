import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { STATES } from '@/lib/states';
import { BUILDINGS } from '@/lib/buildings';
import { publishedColleges } from '@/lib/colleges';
import { publishedScenarios } from '@/lib/scenarios';

export default function sitemap(): MetadataRoute.Sitemap {
  if (SITE.PRE_LAUNCH) return [];

  const today = new Date(SITE.lastReviewed);

  const core = [
    { url: '/',                                       p: 1.0,  cf: 'weekly'  as const },
    { url: '/texas-residency-rules',                  p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-out-of-state-tuition',         p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-in-state-tuition',             p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-cost-of-attendance',           p: 0.9,  cf: 'monthly' as const },
    { url: '/how-to-get-in-state-tuition-ut-austin',  p: 0.95, cf: 'monthly' as const },
    { url: '/parent-guide',                           p: 0.9,  cf: 'monthly' as const },
    { url: '/tuition-calculator',                     p: 0.9,  cf: 'monthly' as const },
    { url: '/residency-checklist',                    p: 0.9,  cf: 'monthly' as const },
    { url: '/condos-near-ut',                         p: 0.9,  cf: 'monthly' as const },
    { url: '/rule-3-vs-rule-4',                       p: 0.9,  cf: 'monthly' as const },
    { url: '/12-month-timeline',                      p: 0.9,  cf: 'monthly' as const },
    { url: '/faq',                                    p: 0.9,  cf: 'monthly' as const },
    { url: '/about',                                  p: 0.6,  cf: 'yearly'  as const },
    { url: '/contact',                                p: 0.7,  cf: 'yearly'  as const },
    { url: '/disclaimer',                             p: 0.4,  cf: 'yearly'  as const },
    { url: '/privacy',                                p: 0.4,  cf: 'yearly'  as const },
  ];

  const stateUrls = STATES.filter(s => s.published).map(s => ({
    url: `/${s.slug}-families-ut-austin-in-state-tuition`,
    p: 0.8,
    cf: 'monthly' as const,
  }));

  const collegeUrls = publishedColleges().map(c => ({
    url: `/ut-austin-${c.slug}-tuition`,
    p: 0.85,
    cf: 'monthly' as const,
  }));

  const scenarioUrls = publishedScenarios().map(s => ({
    url: `/ut-austin-residency-${s.slug}`,
    p: 0.8,
    cf: 'monthly' as const,
  }));

  const buildingUrls = BUILDINGS.filter(b => b.published).map(b => ({
    url: `/condos/${b.slug}`,
    p: 0.7,
    cf: 'monthly' as const,
  }));

  return [...core, ...collegeUrls, ...scenarioUrls, ...stateUrls, ...buildingUrls].map(({ url, p, cf }) => ({
    url: `${SITE.url}${url}`,
    lastModified: today,
    changeFrequency: cf,
    priority: p,
  }));
}
