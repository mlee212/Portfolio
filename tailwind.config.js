module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          light: "#F4F1F3",
          dark: "#373439",
        },
        accent: {
          light: "#BD9859",
          dark: "#69787C",
        },
        card: {
          light: "#C0877D",
          dark: "#7B6875",
        },
        border: {
          light: "#C0877D",
          dark: "#7B6875",
        },
        title: {
          light: "#373439",
          dark: "#F4F1F3",
        },
        text: {
          light: "#373439",
          dark: "#F4F1F3",
        },
        subtext: {
          light: "#373439",
          dark: "#F4F1F3",
        },
        link: {
          light: "#373439",
          dark: "#F4F1F3",
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
