/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Butler', ...defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [],
}
