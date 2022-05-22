import { useContext, createContext, useState, FC, ReactNode, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "styles/theme.styled";

const context = createContext({ isDark: true, switchTheme: () => console.log("ThemeContext::switchTheme") })

export const useSwitchTheme = () => {
    const switchTheme = useContext(context)
    return switchTheme
}

export const SwitchThemeProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(LightTheme)

    useEffect(() => {
        let isDarkTheme: string | null | boolean = localStorage.getItem('dark-theme')
        if (!isDarkTheme) {
            isDarkTheme = matchMedia('(prefers-color-scheme: dark)').matches
        } else {
            isDarkTheme = JSON.parse(isDarkTheme)
        }
        setTheme(isDarkTheme ? DarkTheme : LightTheme)
    }, [])

    const switchTheme = () => {
        localStorage.setItem('dark-theme',JSON.stringify(theme === LightTheme))
        setTheme(theme === LightTheme ? DarkTheme : LightTheme)
    }
    const isDark = theme === DarkTheme

    return (
        <context.Provider value={{ isDark, switchTheme }} >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider >
        </context.Provider >
    )
}