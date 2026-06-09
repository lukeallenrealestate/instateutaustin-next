# instateutaustin-next

Next.js 15 + TypeScript + Tailwind CSS build of instateutaustin.com, the independent authority site for UT Austin in-state tuition and Texas residency strategy.

This repo is the v2 build. The v1 static-HTML build (38K words of authoritative content) lives at [lukeallenrealestate/instateutaustin](https://github.com/lukeallenrealestate/instateutaustin) and remains the source for page copy as we migrate.

## Status

| Area | Status |
|---|---|
| Scaffold (App Router, TS, Tailwind) | done |
| Shared components (Nav, Footer, ContactForm, Analytics, Schema, QuickAnswer) | done |
| Tuition single source of truth at `src/lib/tuition.ts` | done |
| Home page, full migration with answer-first + schema | done |
| `[state]-families-ut-austin-in-state-tuition` route + data structure | scaffolded, data TODO |
| `condos/[building]` route + data structure | scaffolded, data TODO |
| API `/api/contact` proxying to austintxhomes.co/api/contact | done |
| `robots.ts` with AI-bot allowlist | done |
| `sitemap.ts` driven by `SITE.PRE_LAUNCH` flag | done |
| `llms.txt` at root | done |
| GA4 + Meta Pixel (gated by PRE_LAUNCH) | done |
| Other 11 page bodies (faq, tuition-calculator, parent-guide, condos-near-ut, texas-residency-rules, residency-checklist, rule-3-vs-rule-4, 12-month-timeline, about, disclaimer, privacy) | stubbed with MigrationStub component, copy migration in progress |

## Local dev

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deployment

Designed for Vercel. Push to `main`, connect the repo in the Vercel dashboard. The lead proxy at `/api/contact` runs on Vercel's Edge Runtime.

### Environment

No required env vars currently. Optional overrides for analytics can be added in `src/lib/site.ts`.

## Pre-launch indexing block

`src/lib/site.ts` exports a `PRE_LAUNCH` flag (currently `true`). While true:

- Every page sends `noindex, nofollow` via Next.js metadata.
- `robots.txt` disallows all crawlers.
- `sitemap.xml` returns empty.
- GA4 and Meta Pixel scripts do not load.

Flip to `false` immediately before DNS cutover.

## YMYL: tuition figures

All tuition references read from `src/lib/tuition.ts`. Verified base figures:

| Field | Value | Note |
|---|---|---|
| In-state, base undergrad, 15 hrs | $11,688/year | Frozen by TX Legislature through 2026-27 |
| Out-of-state, base undergrad, 15 hrs | $44,908/year | Projected $47,144 for 2026-27 |
| Annual delta | $33,220 | |
| Three-year savings (typical pathway) | $99,660 | Out-of-state year 1, in-state years 2-4 |
| Four-year savings (residency from year 1) | $132,880 | |

Source: [UT One Stop, Cost of Attendance](https://onestop.utexas.edu/managing-costs/cost-of-attendance/). Re-verify annually.

## Adding a new origin-state page

1. Open `src/lib/states.ts`.
2. Add or fill an entry. Required fields:
   - `slug`, `name`, `abbr`, `primaryAirport`, `flightTimeToAustinHours`, `drivingDistanceToAustinMiles`
   - `publicCollegeInState`, `inStateTuitionPublicUSD`
   - **Substantive fields** (each page must have these or it stays unpublished):
     - `costOfLivingNote` (1-2 sentences)
     - `notableFamiliesContext` (1-2 sentences)
     - `residencyMoveNote` (1-2 sentences)
     - `faq` (at least 3 state-specific Q&As)
3. Set `published: true`. The page is now live at `/<slug>-families-ut-austin-in-state-tuition` and appears in the sitemap.

The route refuses to render unpublished entries (returns 404). This is intentional: spec rule against thin programmatic pages.

## Adding a new building page

1. Open `src/lib/buildings.ts`.
2. Add or fill an entry. Required substantive fields:
   - `address`, `walkTimeToCampusMin`, `unitMix`, `typicalPriceRange` (from MLS — never invent), `hoaMonthlyRange`, `residencyFit`, `amenities`, `notes`
3. Set `published: true`. Live at `/condos/<slug>`.

## 301 redirect map (austintxhomes.co → instateutaustin.com)

Documented in the v1 repo's README. Apply only after instateutaustin.com is fully built and live.

## Not affiliated with UT Austin

This site is independent. It is not affiliated with The University of Texas at Austin or the Texas Higher Education Coordinating Board.
