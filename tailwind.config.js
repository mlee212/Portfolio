module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bgdark: "#191b1f",
        cardbgdark: "#24272d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
