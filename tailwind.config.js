module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.md', './src/**/*.html', './src/_includes/**/*.njk', './src/index.njk'],
  plugins: [
    require('@tailwindcss/typography')
  ],
  theme: {
    fontFamily: {
      'mono': ['supply', 'Segoe UI', 'Arial'],
      'serif': ['Segoe UI', 'Helvetica', 'Arial']
    },
    screens: {
      'sm': '840px',
      'md': '960px',
      'lg': '1024px',
      'xl': '1440px'
    },
    typography: {
      default: {
        css: {
          a: {
            textDecoration: false,
          },
        },
      },
    },

    extend: {
      // colors: {
      //   transparent: 'transparent',
      //   current: 'currentColor',
      //   'white': '#00ff00',
      //   'purple': '#3f3cbb',
      //   'midnight': '#121063',
      //   'metal': '#565584',
      //   'tahiti': '#3ab7bf',
      //   'silver': '#ecebff',
      //   'bubble-gum': '#ff77e9',
      //   'bermuda': '#78dcca',
      // },

      // typography: ({ theme }) => ({
      //   main: {
      //     css: {
      //       '--tw-prose-body': theme('colors.white'),
      //       '--tw-prose-headings': theme('colors.pink[900]'),
      //       '--tw-prose-lead': theme('colors.pink[700]'),
      //       '--tw-prose-links': theme('colors.midnight'),
      //       '--tw-prose-bold': theme('colors.pink[900]'),
      //       '--tw-prose-counters': theme('colors.pink[600]'),
      //       '--tw-prose-bullets': theme('colors.pink[400]'),
      //       '--tw-prose-hr': theme('colors.pink[300]'),
      //       '--tw-prose-quotes': theme('colors.pink[900]'),
      //       '--tw-prose-quote-borders': theme('colors.pink[300]'),
      //       '--tw-prose-captions': theme('colors.pink[700]'),
      //       '--tw-prose-code': theme('colors.pink[900]'),
      //       '--tw-prose-pre-code': theme('colors.pink[100]'),
      //       '--tw-prose-pre-bg': theme('colors.blue[900]'),
      //       '--tw-prose-th-borders': theme('colors.pink[300]'),
      //       '--tw-prose-td-borders': theme('colors.pink[200]'),
      //       '--tw-prose-invert-body': theme('colors.pink[200]'),
      //       '--tw-prose-invert-headings': theme('colors.white'),
      //       '--tw-prose-invert-lead': theme('colors.pink[300]'),
      //       '--tw-prose-invert-links': theme('colors.white'),
      //       '--tw-prose-invert-bold': theme('colors.white'),
      //       '--tw-prose-invert-counters': theme('colors.pink[400]'),
      //       '--tw-prose-invert-bullets': theme('colors.pink[600]'),
      //       '--tw-prose-invert-hr': theme('colors.pink[700]'),
      //       '--tw-prose-invert-quotes': theme('colors.pink[100]'),
      //       '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
      //       '--tw-prose-invert-captions': theme('colors.pink[400]'),
      //       '--tw-prose-invert-code': theme('colors.white'),
      //       '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
      //       '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
      //       '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
      //       '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
      //     },
      //   },
      // }),
    },

  }
}