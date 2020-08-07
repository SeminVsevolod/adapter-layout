module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '8rem'
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      }
    },
  },
  variants: {},
  plugins: [],
}
