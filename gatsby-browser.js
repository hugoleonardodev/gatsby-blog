/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"

import { CustomThemeProvider, GlobalStyle } from "./src/themes"

import Layout from "./src/components/Layout"

export const wrapRootElement = ({ element }) => {
    return (
        <CustomThemeProvider>
            <GlobalStyle />
            <Layout>{element}</Layout>
        </CustomThemeProvider>
    )
}
