import React from "react"
import { ThemeProvider } from "styled-components"
import defaultTheme from "./defaultTheme"
import darkTheme from "./darkTheme"

export interface CustomThemeContext {
    switchTheme: boolean
    setSwitchTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export const CustomThemeContext = React.createContext<CustomThemeContext>(
    {} as CustomThemeContext
)

export const CustomThemeProvider: React.FC = ({ children }) => {
    const [switchTheme, setSwitchTheme] = React.useState(false)

    return (
        <ThemeProvider theme={switchTheme ? darkTheme : defaultTheme}>
            <CustomThemeContext.Provider
                value={{
                    switchTheme,
                    setSwitchTheme,
                }}
            >
                {children}
            </CustomThemeContext.Provider>
        </ThemeProvider>
    )
}

export const useCustomTheme = (): CustomThemeContext => {
    const context = React.useContext(CustomThemeContext)

    if (!context) {
        throw new Error(
            "useCustomTheme must be used within an CustomThemeProvider"
        )
    }

    return context
}
