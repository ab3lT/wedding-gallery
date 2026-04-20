import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pure white + warm white tones
        white: '#FFFFFF',
        ivory: {
          DEFAULT: '#FAF8F3',
          50: '#FDFCF9',
          100: '#FAF8F3',
          200: '#F5EFE3',
          300: '#EDE3CB',
        },
        // Gold palette — the only accent
        gold: {
          DEFAULT: '#C9A961',
          soft: '#EAD9B0',
          light: '#D4B97A',
          dark: '#A88B45',
          deep: '#856C34',
        },
        // Ink for readable text contrast (minimal use)
        ink: {
          DEFAULT: '#1F1A16',
          light: '#3D332D',
          muted: '#6B5F56',
        },
      },
      fontFamily: {
        amharic: [
  'Noto Sans Ethiopic',
  'Abyssinica SIL',
  'Nyala',
  'sans-serif'
],

display: [
  'Cormorant Garamond',
  'Georgia',
  'serif'
],

sans: [
  'Outfit',
  'system-ui',
  'sans-serif'
],
        // // Primary Amharic font — used for all Amharic text
        // amharic: ['var(--font-amharic)', 'Nyala', 'Abyssinica SIL', 'serif'],
        // // Latin display serif — for decorative Latin accents only (monogram, small meta)
        // display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        // // Latin sans — for tiny UTC labels / dates in Latin numerals
        // sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': [
          'clamp(3rem, 9vw, 7rem)',
          { lineHeight: '1.05', letterSpacing: '-0.01em' },
        ],
        'display-lg': [
          'clamp(2rem, 5.5vw, 4rem)',
          { lineHeight: '1.15', letterSpacing: '-0.005em' },
        ],
        'display-md': [
          'clamp(1.5rem, 3.5vw, 2.5rem)',
          { lineHeight: '1.25' },
        ],
      },
      letterSpacing: {
        'wide-am': '0.08em', // gentle spacing for Amharic labels
        'mega-wide': '0.4em', // Latin-only mega spacing
      },
      animation: {
        grain: 'grain 8s steps(10) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
