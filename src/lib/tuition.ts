// UT Austin tuition figures (TypeScript port of the static-site data/tuition.js).
//
// Verified base figures for the 2025-26 / 2026-27 academic years.
// In-state tuition is frozen by the Texas Legislature through 2026-27.
//
// Source: UT Austin One Stop, Cost of Attendance
// https://onestop.utexas.edu/managing-costs/cost-of-attendance/
// Last verified: 2026-05-11
//
// Update yearly. All Next.js pages and the calculator pull from this file.

export type CollegeKey =
  | 'base'
  | 'natural'
  | 'engineering'
  | 'cs'
  | 'business'
  | 'comm'
  | 'education'
  | 'finearts';

export interface CollegeTuition {
  in: number;
  out: number;
  label: string;
}

export const TUITION = {
  // Base undergraduate, annual tuition and required fees, 15 credit hours
  inStatePerYear: 11_688,
  outOfStatePerYear: 44_908,
  annualSavings: 33_220,

  outOfStateNextYear: 47_144,

  threeYearSavings: 99_660,   // 3 * annualSavings (typical pathway)
  fourYearSavings: 132_880,   // 4 * annualSavings (if residency from year 1)

  source: {
    name: 'UT Austin One Stop',
    url: 'https://onestop.utexas.edu/managing-costs/cost-of-attendance/',
    lastVerified: '2026-05-11',
    note: 'In-state tuition frozen by the Texas Legislature through the 2026-27 academic year.',
  },

  // College-specific tuition (annual, includes differential).
  // TODO: Verify each per-college figure against UT One Stop before relying.
  colleges: {
    base:        { in: 11_688, out: 44_908, label: 'Base undergraduate (Liberal Arts, General Studies)' },
    natural:     { in: 12_100, out: 45_500, label: 'College of Natural Sciences' },
    engineering: { in: 14_500, out: 51_800, label: 'Cockrell School of Engineering' },
    cs:          { in: 15_300, out: 53_500, label: 'Computer Science (CSDS)' },
    business:    { in: 14_200, out: 51_200, label: 'McCombs School of Business' },
    comm:        { in: 12_350, out: 45_900, label: 'Moody College of Communication' },
    education:   { in: 11_688, out: 44_908, label: 'College of Education' },
    finearts:    { in: 11_950, out: 45_300, label: 'College of Fine Arts' },
  } satisfies Record<CollegeKey, CollegeTuition>,

  // Credit-load multiplier vs the 15-hour baseline (used by calculator)
  creditMultiplier: { 12: 0.86, 15: 1.0, 18: 1.12 } as const,
} as const;

export const fmtUSD = (n: number) =>
  '$' + Math.round(n).toLocaleString('en-US');
