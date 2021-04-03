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
          dark: "#efefef",
        },
        primary: {
          light: "#f4f5f1",
          dark: "#191919",
        },
        secondary: {
          light: "#ebede6",
          dark: "#191919",
        },
        text: {
          light: "#3e3e3d",
          dark: "#c3c3c3",
        },
        nav: {
          light: "#3e3e3d",
          dark: "#cdd9e5",
        },
        card: {
          light: "#e0e1dd",
          dark: "#313232",
        },
        subtext: {
          light: "#636366",
          dark: "#8e8e8e",
        },
        button:{
          light:"#191919",
          dark:"#bbb",
        },
        buttontext:{
          light: "#f4f5f1",
          dark: "#3e3e3d",
        },
        link: {
          light: "#3B3B3A",
          dark: "#fff",
        },
        border: {
          light: "#e0e1dd",
          dark: "#313232",
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
