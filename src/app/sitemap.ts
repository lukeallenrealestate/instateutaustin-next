import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { STATES } from '@/lib/states';
import { BUILDINGS } from '@/lib/buildings';
import { publishedColleges } from '@/lib/colleges';
import { publishedScenarios } from '@/lib/scenarios';
import { publishedComparisons } from '@/lib/comparisons';

export default function sitemap(): MetadataRoute.Sitemap {
  if (SITE.PRE_LAUNCH) return [];

  const today = new Date(SITE.lastReviewed);

  const core = [
    { url: '/',                                       p: 1.0,  cf: 'weekly'  as const },
    { url: '/texas-residency-rules',                  p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-out-of-state-tuition',         p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-in-state-tuition',             p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-cost-of-attendance',           p: 0.9,  cf: 'monthly' as const },
    { url: '/ut-austin-net-price-calculator',         p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-in-state-vs-out-of-state-tuition', p: 0.9, cf: 'monthly' as const },
    { url: '/ut-austin-housing-guide',                p: 0.85, cf: 'monthly' as const },
    { url: '/ut-family-orientation',                  p: 0.8,  cf: 'monthly' as const },
    { url: '/how-to-get-in-state-tuition-ut-austin',  p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-scholarships-out-of-state',    p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-financial-aid-out-of-state',   p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-acceptance-rate-out-of-state', p: 0.9,  cf: 'monthly' as const },
    { url: '/is-ut-austin-worth-it-out-of-state',     p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-4-year-cost-out-of-state',     p: 0.95, cf: 'monthly' as const },
    { url: '/how-to-establish-texas-residency',       p: 0.95, cf: 'monthly' as const },
    { url: '/texas-residency-12-months',              p: 0.9,  cf: 'monthly' as const },
    { url: '/buying-property-in-texas-for-residency', p: 0.9,  cf: 'monthly' as const },
    { url: '/texas-residency-denied-appeal',          p: 0.85, cf: 'monthly' as const },
    { url: '/moving-to-austin-from-out-of-state',     p: 0.9,  cf: 'monthly' as const },
    { url: '/ut-austin-cost-of-living-austin',        p: 0.9,  cf: 'monthly' as const },
    { url: '/ut-austin-essay-prompts',                p: 0.9,  cf: 'monthly' as const },
    { url: '/ut-austin-application-deadlines',        p: 0.9,  cf: 'monthly' as const },
    { url: '/529-plan-ut-austin',                     p: 0.85, cf: 'monthly' as const },
    { url: '/texas-no-state-income-tax-college',      p: 0.9,  cf: 'monthly' as const },
    { url: '/ut-austin-transfer-admission',           p: 0.9,  cf: 'monthly' as const },
    { url: '/ut-austin-pre-med',                      p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-honors-programs',              p: 0.9,  cf: 'monthly' as const },
    { url: '/ut-austin-rankings',                     p: 0.9,  cf: 'monthly' as const },
    { url: '/ut-austin-graduate-outcomes',            p: 0.9,  cf: 'monthly' as const },
    { url: '/applytexas-ut-austin-guide',             p: 0.85, cf: 'monthly' as const },
    { url: '/ut-austin-tuition-2026-2027',            p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-mccombs-admission',            p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-computer-science-admission',   p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-engineering-admission',        p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-pre-law',                      p: 0.9,  cf: 'monthly' as const },
    { url: '/ut-austin-greek-life',                   p: 0.85, cf: 'monthly' as const },
    { url: '/ut-austin-dorms',                        p: 0.85, cf: 'monthly' as const },
    { url: '/ut-austin-internships',                  p: 0.9,  cf: 'monthly' as const },
    { url: '/education-tax-credit-ut-austin',         p: 0.85, cf: 'monthly' as const },
    { url: '/ut-austin-out-of-state-students',        p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-class-of-2030',                p: 0.9,  cf: 'monthly' as const },
    { url: '/buying-a-condo-for-ut-austin-in-state-tuition', p: 0.98, cf: 'monthly' as const },
    { url: '/west-campus-condos-in-state-tuition',    p: 0.95, cf: 'monthly' as const },
    { url: '/austin-real-estate-ut-residency-strategy', p: 0.9, cf: 'monthly' as const },
    { url: '/how-to-save-100k-ut-austin-tuition',     p: 0.95, cf: 'monthly' as const },
    { url: '/ut-austin-tuition-2027-2028',            p: 0.9,  cf: 'monthly' as const },
    { url: '/ut-austin-freshman-year-guide',          p: 0.9,  cf: 'monthly' as const },
    { url: '/ut-austin-out-of-state-percentage',      p: 0.9,  cf: 'monthly' as const },
    { url: '/best-condos-near-ut-austin',             p: 0.95, cf: 'monthly' as const },
    { url: '/parent-guide',                           p: 0.9,  cf: 'monthly' as const },
    { url: '/tuition-calculator',                     p: 0.9,  cf: 'monthly' as const },
    { url: '/residency-checklist',                    p: 0.9,  cf: 'monthly' as const },
    { url: '/condos-near-ut',                         p: 0.9,  cf: 'monthly' as const },
    { url: '/rule-3-vs-rule-4',                       p: 0.9,  cf: 'monthly' as const },
    { url: '/12-month-timeline',                      p: 0.9,  cf: 'monthly' as const },
    { url: '/faq',                                    p: 0.9,  cf: 'monthly' as const },
    { url: '/by-state',                               p: 0.85, cf: 'monthly' as const },
    { url: '/by-college',                             p: 0.85, cf: 'monthly' as const },
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

  const comparisonUrls = publishedComparisons().map(c => ({
    url: `/ut-austin-vs-${c.slug}`,
    p: 0.85,
    cf: 'monthly' as const,
  }));

  return [...core, ...collegeUrls, ...scenarioUrls, ...stateUrls, ...comparisonUrls, ...buildingUrls].map(({ url, p, cf }) => ({
    url: `${SITE.url}${url}`,
    lastModified: today,
    changeFrequency: cf,
    priority: p,
  }));
}
