import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base:        '#080810',
        surface:     '#0e0e1a',
        elevated:    '#141428',
        card:        '#1a1a30',
        'card-hover':'#1f1f38',
        cyan:        '#00c6ff',
        purple:      '#7b61ff',
        green:       '#00ffaa',
        amber:       '#ffb83f',
        rose:        '#ff6b9d',
        'text-primary':   '#f0f0fa',
        'text-secondary': '#9898b8',
        'text-muted':     '#5a5a7a',
        'border-subtle':  'rgba(255,255,255,0.06)',
        'border-card':    'rgba(255,255,255,0.09)',
      },
      fontFamily: {
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-mono)', 'monospace'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: { 'read': '680px', 'site': '1200px' },
      backgroundImage: {
        'grid-cyan': `
          linear-gradient(rgba(0,198,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,198,255,0.05) 1px, transparent 1px)
        `,
        'grad-hero': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,198,255,0.1) 0%, transparent 60%)',
        'grad-cta':  'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,198,255,0.07) 0%, transparent 60%)',
      },
      backgroundSize: { 'grid': '48px 48px' },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow-cyan':   '0 0 40px rgba(0,198,255,0.15)',
        'glow-purple': '0 0 40px rgba(123,97,255,0.15)',
        'card':        '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover':  '0 8px 40px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}

export default config
