import type { Config } from 'tailwindcss'

/**
 * Design system do projeto.
 * Regra do time: nenhum componente usa cor/tamanho/sombra "solta" (ex.: text-[#C9A15A]).
 * Tudo que for identidade visual mora aqui como token e e consumido por nome.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Azul aviacao profundo - cor institucional */
        navy: {
          50: '#EAF1F8',
          100: '#C9DCEC',
          200: '#96BAD6',
          300: '#6095BD',
          400: '#31709B',
          500: '#154B74',
          600: '#0A2E4D',
          DEFAULT: '#0A2E4D',
          700: '#082742',
          800: '#061D31',
          900: '#041522',
          950: '#020C14',
        },
        /* Dourado premium - acentos, nunca em blocos grandes */
        gold: {
          50: '#FBF6EC',
          100: '#F5EAD3',
          200: '#EBD5A7',
          300: '#DEBD7C',
          400: '#D3AC66',
          500: '#C9A15A',
          DEFAULT: '#C9A15A',
          600: '#AE8544',
          700: '#8A6833',
          800: '#644B25',
          900: '#413117',
        },
        /* Off-white de fundo - evita o branco puro estourado */
        ivory: {
          DEFAULT: '#FAF8F4',
          50: '#FEFDFB',
          100: '#FAF8F4',
          200: '#F2EDE4',
          300: '#E5DCCC',
          400: '#CFC2AC',
        },
        ink: '#0B1620',
      },
      fontFamily: {
        /* Injetadas por next/font em app/layout.tsx (zero request bloqueante) */
        serif: ['var(--font-playfair)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        /* Escala fluida: o mesmo token resolve 375px, 768px e 1440px sem breakpoint extra */
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.2em', fontWeight: '600' }],
        'display-sm': ['clamp(1.5rem, 3.2vw, 1.875rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.18', letterSpacing: '-0.015em' }],
        'display-lg': ['clamp(2.125rem, 5.2vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2.375rem, 6.4vw, 4.25rem)', { lineHeight: '1.06', letterSpacing: '-0.025em' }],
        'body-lg': ['clamp(1.0625rem, 1.4vw, 1.1875rem)', { lineHeight: '1.65' }],
      },
      spacing: {
        gutter: '1.25rem',
        section: '4.5rem',
        'section-md': '6rem',
        'section-lg': '8rem',
      },
      maxWidth: {
        content: '75rem',
        measure: '42rem',
        'measure-sm': '34rem',
      },
      borderRadius: {
        card: '1.25rem',
        pill: '999px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(10, 46, 77, 0.04), 0 12px 32px -12px rgba(10, 46, 77, 0.16)',
        'card-hover': '0 2px 4px rgba(10, 46, 77, 0.06), 0 24px 48px -16px rgba(10, 46, 77, 0.28)',
        gold: '0 12px 32px -12px rgba(201, 161, 90, 0.55)',
        inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'navy-veil':
          'linear-gradient(90deg, rgba(4,21,34,0.82) 0%, rgba(4,21,34,0.58) 48%, rgba(4,21,34,0.34) 100%), linear-gradient(180deg, rgba(4,21,34,0.42) 0%, rgba(4,21,34,0.18) 48%, rgba(4,21,34,0.86) 100%)',
        'navy-depth': 'radial-gradient(120% 80% at 50% 0%, #0A2E4D 0%, #061D31 55%, #041522 100%)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}

export default config
