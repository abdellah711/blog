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
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />

                    <script dangerouslySetInnerHTML={{
                        __html: loadCode
                    }}></script>
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