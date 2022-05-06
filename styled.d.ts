import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        card: {
            shadow: string;
            borderRadius: string;
            bg: string;
        },
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