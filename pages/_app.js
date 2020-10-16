import "../styles/global.css";

import {
  ChakraProvider,
  extendTheme,
  CSSReset,
  ColorModeScript,
} from "@chakra-ui/core";

const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};

const customTheme = extendTheme({ config });

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <ColorModeScript initialColorMode="dark" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
