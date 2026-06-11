import type { Config } from 'tailwindcss';

// UT Austin burnt-orange identity tokens.
// Source of truth lives here AND in globals.css :root.
// Legacy names (navy, gold, cream, etc.) are kept as aliases pointing at the
// new palette so existing class strings cascade without per-component edits.

const config: Config = {
  content: ['./src/**/*.{ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // ── New (preferred) tokens ─────────────────────────────────────
        burnt:        '#BF5700', // UT official burnt orange (Pantone 159), primary accent
        'burnt-deep': '#A04600', // body-size links + hover (passes contrast on cream)
        ink:          '#2B2926', // warm near-black, all headings + hero headlines
        body:         '#54504A', // warm gray body text
        paper:        '#FAF6EE', // warm off-white page background (replaces white)
        surface:      '#FFFDF9', // cards
        hairline:     '#E7DECE', // warm borders

        // ── Legacy aliases (token swap, no per-component renames) ─────
        // Old navy headings (#0e2748) → ink.
        navy:         '#2B2926',
        // Old navy-dk (#081729) hero/footer dark bg → ink.
        // Dark sections that should be light per spec are flipped by hand
        // (bg-navy-dk → bg-paper) in the components that needed it.
        'navy-dk':    '#2B2926',
        // Old ochre/gold accents → burnt.
        gold:         '#BF5700',
        'gold-lt':    '#A04600',
        'gold-pale':  '#FDF2E5', // very pale burnt tint for callout backgrounds
        // Section-alternation warm cream (slightly darker than paper).
        cream:        '#F3E9D2',
        // Body text.
        mid:          '#54504A',
        // Tertiary (e.g., footer fine print).
        light:        '#8A8478',
        // Borders/dividers.
        border:       '#E7DECE',
        // Danger callouts retained as-is.
        danger:       '#B54B3B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        wrap: '1180px',
        narrow: '760px',
      },
      borderRadius: {
        DEFAULT: '6px',
      },
    },
  },
  plugins: [],
};

export default config;
