const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        karma: ['Karma', ...defaultTheme.fontFamily.serif],
      },
    },
  },
}
