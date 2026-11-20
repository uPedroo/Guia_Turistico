/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAF5EC',
        surface: '#FFFCF6',
        sand: {
          DEFAULT: '#F1E5D1',
          deep: '#E5D0B0',
        },
        ink: '#3A2F2A',
        muted: '#73665E',
        sea: {
          DEFAULT: '#5E9AA0',
          ink: '#3F7479',
          soft: '#DCEEEC',
        },
        leaf: {
          DEFAULT: '#8A9A5B',
          soft: '#E9EDD8',
        },
        sun: {
          DEFAULT: '#A9502F',
          soft: '#F8DFD3',
        },
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      borderRadius: {
        card: '20px',
        polaroid: '3px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(70,48,30,0.05), 0 8px 24px rgba(70,48,30,0.07)',
        elevated: '0 2px 4px rgba(70,48,30,0.08), 0 24px 48px rgba(70,48,30,0.16)',
      },
    },
  },
  plugins: [],
};
