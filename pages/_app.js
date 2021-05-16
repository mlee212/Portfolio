import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider disableTransitionOnChange defaultTheme="dark">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
