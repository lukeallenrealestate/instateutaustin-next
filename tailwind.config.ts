import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy:      '#0e2748',
        'navy-dk': '#081729',
        gold:      '#c79a4d',
        'gold-lt': '#d8b27a',
        'gold-pale': '#f5ede0',
        paper:     '#fbf8f1',
        cream:     '#f3ecdc',
        ink:       '#11161e',
        mid:       '#4a5366',
        light:     '#8d96a5',
        border:    '#e3dccd',
        danger:    '#b54b3b',
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
        DEFAULT: '4px',
      },
    },
  },
  plugins: [],
};

export default config;
