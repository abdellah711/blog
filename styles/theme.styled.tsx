import { DefaultTheme } from "styled-components";


export const LightTheme: DefaultTheme = {
    card: {
        borderRadius: '12px',
        shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 0 9px -2px rgb(0 0 0 / 0.1)',
        bg: '#fff',
    },
    colors: {
        primary: '#0E9CD9',
        onPrimary: '#fff',
        bg: '#fff',
        onBg: '#222222',
        error: '#ff3232',
        success: '#2dd02a',
        input:{
            bg: '#f5f5f5',
            color: '#3f3f3f'
        },
        text: {
            display: '#111111',
            title: '#1e1e1e',
            body: '#3e3e3e'
        }
    },
}