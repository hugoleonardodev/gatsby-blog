/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export interface CustomHTMLProps {
    htmlAttributes: React.HtmlHTMLAttributes<HTMLHtmlElement>
    headComponents: HTMLMetaElement | HTMLLinkElement | HTMLScriptElement
    bodyAttributes: React.HTMLAttributes<HTMLBodyElement>
    preBodyComponents: React.ReactNode[]
    body: string
    postBodyComponents: React.ReactNode[]
}

const HTML: React.FC<CustomHTMLProps> = ({
    htmlAttributes,
    headComponents,
    bodyAttributes,
    preBodyComponents,
    body,
    postBodyComponents,
}) => {
    return (
        <html {...htmlAttributes}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,400;0,700;1,300&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
                />
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {headComponents}
            </head>
            <body {...bodyAttributes}>
                {preBodyComponents}
                {/* eslint-disable-next-line react-perf/jsx-no-new-object-as-prop */}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: body }}
                />
                {postBodyComponents}
                {/* JavaScript at end of body for optimized loading */}
                <script
                    type="text/javascript"
                    src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
                />
                <script type="text/javascript" src="/main.js" />
            </body>
        </html>
    )
}

export default HTML
