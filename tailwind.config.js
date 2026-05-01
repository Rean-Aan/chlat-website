/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        en: ['Inter', 'sans-serif'],
        km: ['Suwannaphum', 'sans-serif'],
      },
      colors: {
        primary: '#0388D3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

