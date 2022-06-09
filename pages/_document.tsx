import Document, { Html, Head, Main, NextScript } from 'next/document'
import { DarkTheme, LightTheme } from 'styles/themes'


class MyDocument extends Document {
    
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
                    <script dangerouslySetInnerHTML={{
                        __html:`

                            const DarkTheme = ${JSON.stringify(DarkTheme)}
                            const LightTheme = ${JSON.stringify(LightTheme)}

                            let isDark = localStorage.getItem('dark-theme')
                            isDark = !isDark ? matchMedia('(prefers-color-scheme: dark)').matches : JSON.parse(isDark)
                            const root = document.documentElement
                            const theme = isDark? DarkTheme: LightTheme;
                            for (let [key, value] of Object.entries(theme)) {
                                root.style.setProperty(key,value)
                            }
                        `
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