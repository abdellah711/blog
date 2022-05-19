import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        card: {
            shadow: string;
            shadowHover?: string;
            borderRadius: string;
            bg: string;
        },
        colors: {
            primary: string,
            onPrimary: string,
            bg: string,
            success: string,
            error: string,
            onBg: string,
            input:{
                bg: string;
                color: string;
            },
            text?: {
                display: string,
                title: string,
                body: string,
            }
        },
    }
}