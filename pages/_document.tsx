import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ComponentType } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { DarkTheme, LightTheme } from 'styles/themes'


class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App: ComponentType) => (props: any) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            }
        } finally {
            sheet.seal()
        }
    }
    render() {
        const updateTheme = () => {
            const DarkTheme = 'dkthm'
            const LightTheme = 'lgthm'

            let isDark = localStorage.getItem('dark-theme')
            isDark = !isDark ? matchMedia('(prefers-color-scheme: dark)').matches : JSON.parse(isDark)
            const root = document.documentElement
            const theme = isDark ? DarkTheme : LightTheme;
            for (let [key, value] of Object.entries(theme)) {
                root.style.setProperty(key, value)
            }
        }
        let loadCode = updateTheme.toString()
        loadCode = loadCode.replace("'dkthm'", JSON.stringify(DarkTheme))
        loadCode = loadCode.replace("'lgthm'", JSON.stringify(LightTheme))

        loadCode = `(${loadCode})()`
        return (
            <Html lang='eng'>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />

                    <script dangerouslySetInnerHTML={{
                        __html: loadCode
                    }}></script>
                    <meta name='application-name' content='Blog' />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='Blog' />
                    <meta name='description' content='Blog web app' />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-config' content='/icons/browserconfig.xml' />
                    <meta name='msapplication-TileColor' content='#0E9CD9' />
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name='theme-color' content='#000000' />

                    <link rel='icon' href='/icons/favicon.ico' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='shortcut icon' href='/favicon.ico' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument