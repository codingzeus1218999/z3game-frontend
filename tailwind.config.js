/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5400",
        "body-bg": "#fafafc",
        "header-bg": "#333333",
      },
    },
  },
  variants: {},
  plugins: [],
};
