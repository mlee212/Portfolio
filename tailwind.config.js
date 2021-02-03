module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current:'currentColor',
        title:{
          light:"#3B3B3A",
          dark:"#F8F9F6",
        },
        primary:{
          light:"#f4f5f1",
          dark:"#3e3e3d",
        },
        text:{
          light:"#3e3e3d",
          dark:"#f4f5f1"
        },
        card:{
          light:"#e0e1dd",
          dark:"",
        },
        link:{
          light: "#3B3B3A",
          dark: "#F8F9F6",
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
          light:"rgb(199,199,204)",
          dark:"rgb(72,72,74)",
        },
        grey4:{
          light:"rgb(209,209,214)",
          dark:"rgb(58,58,60)",
        },
        grey5:{
          light:"rgb(229,229,234)",
          dark:"rgb(44,44,46)",
        },
        grey6:{
          light:"#fbfbfd",
          dark:"rgb(28,28,30)",
        },
        blue:{
          light:'rgb(0,122,255)',
          dark:'rgb(0,132,255)'
        },
        green:{
          light:'rgb(52,199,89)',
          dark:'rgb(48,209,88)'
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
