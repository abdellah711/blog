import Footer from 'components/Footer'
import { SwitchThemeProvider } from 'context/switch-theme'
import { useOfflineComponent } from 'hooks/offline'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { Global } from '../styles/global.styled'

function MyApp({ Component, pageProps }: AppProps) {
  const offlineComponent = useOfflineComponent()

  return (
    <SwitchThemeProvider>
      <Global />
      {offlineComponent}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SwitchThemeProvider>
  )
}

export default MyApp
