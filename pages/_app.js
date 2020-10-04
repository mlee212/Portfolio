import "../styles/global.css";
import { ChakraProvider, CSSReset, ColorModeScript } from "@chakra-ui/core";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset />
      <ColorModeScript initialColorMode="dark" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
