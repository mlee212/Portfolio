import "../styles/global.css";

import {
  ChakraProvider,
  extendTheme,
  CSSReset,
  ColorModeScript,
} from "@chakra-ui/core";

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

const customTheme = extendTheme({ config });

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <ColorModeScript initialColorMode="light" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
