module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        title: {
          light: "#3B3B3A",
          dark: "#adbac7",
        },
        primary: {
          light: "#f4f5f1",
          dark: "#22272e",
        },
        secondary: {
          light: "#f0f0ec",
          dark: "#2d333b",
        },
        text: {
          light: "#3e3e3d",
          dark: "#adbac7",
        },
        nav: {
          light: "#3e3e3d",
          dark: "#cdd9e5",
        },
        card: {
          light: "#e0e1dd",
          dark: "#373e47",
        },
        subtext: {
          light: "#636366",
          dark: "#768390",
        },
        link: {
          light: "#3B3B3A",
          dark: "#F8F9F6",
        },
        border: {
          light: "#e0e1dd",
          dark: "#373e47",
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
