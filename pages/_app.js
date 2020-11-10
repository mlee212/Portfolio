import "../styles/global.css";

import {
  ChakraProvider,
  extendTheme,
  CSSReset,
  ColorModeScript,
} from "@chakra-ui/core";

import { mode } from '@chakra-ui/theme-tools'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendTheme({
      styles: {
        global: (props) => ({
          body: {
            bg: mode('#fdfefe', '#191b1f')(props),
            color: mode('#191b1f', '#fdfefe')(props),
          },
        }),
      },
    })}>
      <CSSReset />
      <ColorModeScript initialColorMode="dark" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
