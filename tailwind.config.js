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
        thunder: "#312D31",
        shadow: "#161615",
        stormcloud: "#3d383d",
        boulder: "#7C7C7C",
        mist: "#A09CA6",
        mobster: "#847D8B",
        cararra: "#f6f5f8",
        fog: "#e6ddde",
        lilac: "#E5E7EB",
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
