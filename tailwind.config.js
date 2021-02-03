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
          dark: "#F8F9F6",
        },
        primary: {
          light: "#f4f5f1",
          dark: "#3e3e3d",
        },
        secondary: {
          light: "#f0f0ec",
          dark: "#3b3b3b",
        },
        text: {
          light: "#3e3e3d",
          dark: "#f4f5f1",
        },
        card: {
          light: "#e0e1dd",
          dark: "#2b2b2a",
        },
        subtext: {
          light: "#636366",
          dark: "#e8eae2",
        },
        link: {
          light: "#3B3B3A",
          dark: "#F8F9F6",
        },
        border: {
          light: "#e0e1dd",
          dark: "#2b2b2a",
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
