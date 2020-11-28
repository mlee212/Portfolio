import "../styles/global.css";

import {
  ChakraProvider,
  extendTheme,
  CSSReset,
  ColorModeScript,
} from "@chakra-ui/core";

import { mode } from "@chakra-ui/theme-tools";

// Applies theme based on system color mode = true
const config = {
  useSystemColorMode: true,
  initialColorMode: "light",
};

// Uses "config" key from above code block
// Uses global custom colors for background {styles}
const customTheme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#fdfefe", "#191b1f")(props),
        color: mode("#191b1f", "#fdfefe")(props),
      },
    }),
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <ColorModeScript initialColorMode="light" />
          <Component {...pageProps} />
    </ChakraProvider>
  );
}
