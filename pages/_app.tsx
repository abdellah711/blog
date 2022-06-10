import Footer from 'components/Footer'
import { SwitchThemeProvider } from 'context/switch-theme'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { Global } from '../styles/global.styled'
// import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SwitchThemeProvider>
      <Global />
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </SwitchThemeProvider>
  )
}

export default MyApp
