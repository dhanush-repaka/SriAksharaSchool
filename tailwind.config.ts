import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#14241C',
          muted: '#3D5248',
          soft: '#5C6F66',
        },
        forest: {
          50: '#F3F7F4',
          100: '#E3EDE6',
          200: '#C4D6CB',
          300: '#9BB6A4',
          400: '#6B917A',
          500: '#3F6B54',
          600: '#2F5543',
          700: '#234236',
          800: '#1A3229',
          900: '#13241C',
        },
        gold: {
          50: '#FBF6EE',
          100: '#F3E6D0',
          200: '#E6CBA0',
          300: '#D4AE72',
          400: '#C49654',
          500: '#B07F3C',
          600: '#8F652E',
        },
        cream: {
          50: '#FDFBF7',
          100: '#F7F2E9',
          200: '#EFE6D6',
          300: '#E2D4BC',
        },
        clay: {
          DEFAULT: '#C26A4A',
          soft: '#E8C4B4',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 6vw, 5.25rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2.25rem, 4.2vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(20, 36, 28, 0.18)',
        lift: '0 18px 40px -20px rgba(20, 36, 28, 0.22)',
      },
      letterSpacing: {
        widest: '0.22em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
