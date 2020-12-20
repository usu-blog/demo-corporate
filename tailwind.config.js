const colors = require('tailwindcss/colors')
module.exports = {
  future: {},
  purge: ['./src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        warning: colors.amber,
        error: colors.red,
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
