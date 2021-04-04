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
          dark: "#191919",
        },
        accent: {
          light: "#C0877D",
          dark: "#7B6875",
        },
        brand: "#945B68",
        darkcard: "#222222",
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
