import "../styles/global.css";

import { ChakraProvider, CSSReset, ColorModeScript } from "@chakra-ui/core";

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <CSSReset />
      <ColorModeScript initialColorMode="dark" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
