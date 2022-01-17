const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        'dark-blue': {
          'main-bg': 'hsl(217, 54%, 11%)',
          'card-bg': 'hsl(216, 50%, 16%)',
          line: 'hsl(215, 32%, 27%)',
        },
      },
      fontFamily: {
        outfit: ["'Outfit', sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
