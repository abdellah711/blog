import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            onPrimary: string,
            bg: string,
            onBg: string,
            text?: {
                display: string,
                title: string,
                body: string,
            }
        },
    }
}