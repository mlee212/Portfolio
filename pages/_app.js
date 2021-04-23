import React from "react";
import "../styles/global.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />;
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
