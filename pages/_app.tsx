import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { LightTheme } from 'styles/theme.styled'
import Header from '../components/Header'
import { Global } from '../styles/global.styled'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeProvider theme={LightTheme}>
      <Global />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
