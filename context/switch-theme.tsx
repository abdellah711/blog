import { useContext, createContext, useState, FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "styles/theme.styled";

const context = createContext({ isDark: true, switchTheme: () => console.log("ThemeContext::switchTheme") })

export const useSwitchTheme = () => {
    const switchTheme = useContext(context)
    return switchTheme
}

export const SwitchThemeProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(LightTheme)


    const switchTheme = () => setTheme(theme === LightTheme ? DarkTheme : LightTheme)
    const isDark = theme === DarkTheme

    return (
        <context.Provider value={{ isDark, switchTheme }} >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider >
        </context.Provider >
    )
}