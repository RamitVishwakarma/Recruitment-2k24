/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#263042',
        'dark-background': '#161717',
        'light-font': '#F5F9FF',
        'green-bg': '#2A5548',
        'green-dark': '#34A853',
        'green-light': '#CBFFE1',
        'blue-bg': '#3C4B64',
        'blue-dark': '#A8CBFF',
        'blue-light': '#D8E8FF',
      },
      fontFamily: {
        'Zodiac': ['Zodiac', 'serif'],
        'Satoshi': ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}