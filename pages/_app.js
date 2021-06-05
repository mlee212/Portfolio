import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { Provider } from 'next-auth/client'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider
        disableTransitionOnChange
        defaultTheme="dark"
        themes={['pink', 'light', 'dark']}
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
