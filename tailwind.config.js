/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Suwannaphum', 'serif'],
      },
      colors: {
        primary: '#0388D3',
      },
    },
  },
  plugins: [],
}

