/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#263042",
        "dark-background": "#161717",
        "light-font": "#F5F9FF",
        header: "#DBE8FF",
        "green-bg": "#2A5548",
        "green-dark": "#34A853",
        "green-light": "#CBFFE1",
        "blue-bg": "#3C4B64",
        "blue-dark": "#A8CBFF",
        "blue-light": "#D8E8FF",
        form: "#181D24",
        input: "#485972",
        label: "#ABCFFF",
        button: "#718EBF",
        "button-bg": "#43639B80",
        "form-head": "#B0D1FF",
        "button-hover": "#43639B",
        selector: "#FFD77C",
        "selector-bg": "#544925",
        "selector-txt": "#FFF0C1",
        "non-selected-text": "#FFF0C199",
        domain: "#B5D0FF",
      },
      fontFamily: {
        Zodiac: ["Zodiac", "serif"],
        Satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
