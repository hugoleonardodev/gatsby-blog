/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import * as Headings from './src/components/Headings'
import Blockquote from './src/components/BlockQuote'
import Code from './src/components/Code'
import PrismSetup from './src/components/PrismSetup'
import Layout from './src/components/Layout'

import { CustomThemeProvider, GlobalStyle } from './src/themes'

const components = {
    h2: Headings.myH2,
    h4: Headings.myH3,
    inlineCode: Code,
    blockquote: Blockquote,
    pre: PrismSetup,
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
