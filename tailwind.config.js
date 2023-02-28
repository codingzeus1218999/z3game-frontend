/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan
      },
      animation: {
        'slide-down': "slideDown 0.3s"
      },
      keyframes: {
        slideDown : {
          'from' : {
            opacity: 0,
            transform: 'translateY(-10px)'
          },
        
          'to' : {
            opacity: 1,
            transform: 'translateY(0)'
          },
        }
      }
    }
  },
  variants: {},
  plugins: []
};
