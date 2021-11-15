/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import {
    Blockquote,
    Code,
    PrismWrapper,
    myH2,
    myH3,
} from './src/components/Code'

import Layout from './src/components/Layout'

import { CustomThemeProvider, GlobalStyle } from './src/themes'

const components = {
    h2: myH2,
    h4: myH3,
    inlineCode: Code,
    blockquote: Blockquote,
    pre: PrismWrapper,
}

export const wrapRootElement = ({ element }) => {
    return (
        <CustomThemeProvider>
            <GlobalStyle />
            <MDXProvider components={components}>
                <Layout>{element}</Layout>
            </MDXProvider>
        </CustomThemeProvider>
    )
}
