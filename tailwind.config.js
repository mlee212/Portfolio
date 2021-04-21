module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        shadow: {
          100: "#DEE3EA",
          200: "#B2BDCD",
          300: "#5D7290",
          400: "#4F617A",
          500: "#404F64",
          600: "#323D4D",
          700: "#242C37",
          800: "#151A21",
          900: "#0B0E11",
        },
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
