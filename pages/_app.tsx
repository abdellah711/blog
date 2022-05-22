import { SwitchThemeProvider } from 'context/switch-theme'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { Global } from '../styles/global.styled'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SwitchThemeProvider>
      <Global />
      <Header />
      <Component {...pageProps} />
    </SwitchThemeProvider>
  )
}

export default MyApp
