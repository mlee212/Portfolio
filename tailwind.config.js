module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          light: "#F4F3F0",
          dark: "#212121",
        },
        accent: {
          light: "#6F8E97",
          dark: "#333",
        },
        card: {
          light: "#e9e7e1",
          dark: "#333",
        },
        cardbright: {
          light: "#e3e1dc",
          dark: "#444",
        },
        border: {
          light: "#e9e7e1",
          dark: "#333",
        },
        title: {
          light: "#232528",
          dark: "#F4F3F0",
        },
        text: {
          light: "#232528",
          dark: "#F4F3F0",
        },
        link: {
          light: "#000",
          dark: "#fff",
        },
        brand: "#ff4e5f",
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
