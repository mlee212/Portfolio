module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current:'currentColor',
        title:{
          light:"#000",
          dark:"#fff",
        },
        primary:{
          light:"#fff",
          dark:"#000",
        },
        text:{
          light:"#1d1d1f",
          dark:"#fff"
        },
        grey:{
          light:"rgb(142,142,147)",
          dark:"rgb(142,142,147)",
        },
        grey2:{
          light:"rgb(174,174,178)",
          dark:"rgb(99,99,102)",
        },
        grey3:{
          light:"rgb(242,242,247)",
          dark:"rgb(28,28,30)",
        },
        grey4:{
          light:"rgb(199,199,204)",
          dark:"rgb(72,72,74)",
        },
        blue:{
          light:'rgb(0,122,255)',
          dark:'rgb(0,122,255)'
        },
        green:{
          light:'rgb(52,199,89)',
          dark:'rgb(48,209,88)'
        }
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
