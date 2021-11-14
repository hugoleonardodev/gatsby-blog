import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './defaultTheme'
import darkTheme from './darkTheme'

export interface CustomThemeContextProps {
    switchTheme: boolean
    setSwitchTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export const CustomThemeContext = React.createContext<CustomThemeContextProps>(
    {} as CustomThemeContextProps
)

export const CustomThemeProvider: React.FC = ({ children }) => {
    const [switchTheme, setSwitchTheme] = React.useState(false)

    const customThemeContext = React.useCallback(() => {
        return {
            switchTheme,
            setSwitchTheme,
        }
    }, [switchTheme])

    return (
        <ThemeProvider theme={switchTheme ? darkTheme : defaultTheme}>
            <CustomThemeContext.Provider value={customThemeContext()}>
                {children}
            </CustomThemeContext.Provider>
        </ThemeProvider>
    )
}

export const useCustomTheme = (): CustomThemeContextProps => {
    const context = React.useContext(CustomThemeContext)

    if (!context) {
        throw new Error(
            'useCustomTheme must be used within an CustomThemeProvider'
        )
    }

    return context
}
