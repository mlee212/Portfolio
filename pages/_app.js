import "../styles/global.css";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
