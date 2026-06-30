/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#584A99',
          tan:    '#9C8E85',
          gold:   '#C9A227',
          crimson:'#8B1E1E',
          parchment: '#F7F3EC',
          ink:  '#12091a',
          void: '#0d0712',
          deep: '#1a1025',
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
      },
    },
  },
};
