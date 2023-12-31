/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bodyColor: '#191919',
        textColor: 'rgba(255, 255, 255, 0.85)',
        designColor: '#00FFFF',
        titleRoundBg:
          'linear-gradient(135deg,rgba(120, 204, 109,.15) 0%, rgba(120, 204, 109, 1) 100%)',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'reverse-spin': 'reverse-spin 15s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
      },
      boxShadow: {
        greenShadow: '0px 0px 188px -14px rgba(237,255,32,1)',
        testShadow: '11px 0px 13px -15px rgba(0,0,0,2)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
