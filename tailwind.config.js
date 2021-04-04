module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        shade: {
          light: "#F4F2F1",
          dark: "#3F3637",
        },
        accent: {
          light: "#C0877D",
          dark: "#7B6875",
        },
        brand: "#945B68",
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
