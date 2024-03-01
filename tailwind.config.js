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
        "body-bg": "#2c2c2c",
        "header-bg": "#333333",
        placeholder: "#ffb486",
        "product-bg": "#263241",
        "product-hover-bg": "#1e293b",
        "favourite-bg": "#263241b3",
        "card-text": "#96a6b7",
        "reduced-bg": "#b91c1c",
        "price-bg": "#4b5563",
        "index-bg": "#b91c1c",
        "buy-bg": "#b91c1c",
        "card-bg": "#cbd5e1",
        border: "#263241",
      },
    },
  },
  variants: {},
  plugins: [],
};
