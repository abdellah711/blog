import { useContext, createContext, useState, FC, ReactNode, useEffect } from "react";
import { DarkTheme, LightTheme } from "styles/themes";


const context = createContext({ isDark: true, switchTheme: () => console.log("ThemeContext::switchTheme") })

export const useSwitchTheme = () => {
    const switchTheme = useContext(context)
    return switchTheme
}

export const SwitchThemeProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        let isDarkTheme: string | null | boolean = localStorage.getItem('dark-theme')
        if (!isDarkTheme) {
            isDarkTheme = matchMedia('(prefers-color-scheme: dark)').matches
        } else {
            isDarkTheme = JSON.parse(isDarkTheme)
        }
        setIsDark(isDarkTheme as boolean)
    }, [])

    const switchTheme = () => {
        localStorage.setItem('dark-theme', JSON.stringify(!isDark))
        const root = document.documentElement
        for (let [key, value] of Object.entries(!isDark ? DarkTheme : LightTheme)) {
            root.style.setProperty(key, value)
        }
        setIsDark(dark => !dark)
    }

    return (
        <context.Provider value={{ isDark, switchTheme }} >
            {children}
        </context.Provider >
    )
}