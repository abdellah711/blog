import { DefaultTheme } from "styled-components";


export const LightTheme: DefaultTheme = {
    card: {
        borderRadius: '12px',
        shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 0 9px -2px rgb(0 0 0 / 0.1)',
        shadowHover: '2px 5px 25px -5px rgb(0 0 0 / 10%), 6px 8px 10px -6px rgb(0 0 0 / 10%)',
        bg: '#ffffff',
    },
    colors: {
        primary: '#0E9CD9',
        onPrimary: '#ffffff',
        bg: '#ffffff',
        onBg: '#222222',
        error: '#ff3232',
        success: '#2dd02a',
        input:{
            bg: '#f5f5f5',
            placeholderColor: '#3f3f3f',
            color: '#222222',
        },
        text: {
            display: '#111111',
            title: '#1e1e1e',
            body: '#3e3e3e'
        }
    },
}

export const DarkTheme: DefaultTheme = {
    card: {
        borderRadius: '12px',
        shadow: 'none',
        shadowHover: 'none',
        bg: '#333333',
    },
    colors: {
        primary: '#0E9CD9',
        onPrimary: '#ffffff',
        bg: '#181818',
        onBg: '#fafafa',
        error: '#ff3232',
        success: '#2dd02a',
        input:{
            bg: '#3f3f3f',
            placeholderColor: '#e0e0e0',
            color:'#fafafa'
        },
        text: {
            display: '#ffffff',
            title: '#fafafa',
            body: '#e9e9e9'
        }
    },
}