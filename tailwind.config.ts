import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['\"Space Grotesk\"', 'ui-sans-serif', 'system-ui'],
        serif: ['\"Cormorant Garamond\"', 'Garamond', 'ui-serif']
      },
      colors: {
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        accentSoft: 'var(--accent-soft)'
      },
      letterSpacing: {
        tightest: '-0.04em'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
