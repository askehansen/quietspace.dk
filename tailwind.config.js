/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./app/**/*.js"],
  theme: {
    extend: {
      height: {
        "sceen/2": "50vh"
      },
      zIndex: {
        "-10": "-10"
      },
      fontFamily: {
        'serif': ['Butler', ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [],
}
