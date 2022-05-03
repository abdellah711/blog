import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { Global } from '../styles/global.styled'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Global />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
