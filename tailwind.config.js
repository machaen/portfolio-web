/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#E4E2DF',
        panel: '#E0DDDA',
        raised: '#DBD7D3',
        line: { DEFAULT: '#B9B2AA', soft: '#D5D1CC' },
        ink: { DEFAULT: '#3E3228', dim: '#6D5E51', faint: '#978C82' },
        amber: {
          DEFAULT: '#3E3228',
          soft: 'rgba(62,50,40,0.08)',
          line: 'rgba(62,50,40,0.35)',
        },
        teal: '#6D5E51',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '960px',
      },
      keyframes: {
        travel: {
          '0%': { top: '-70px' },
          '100%': { top: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        travel: 'travel 7s linear infinite',
        blink: 'blink 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
