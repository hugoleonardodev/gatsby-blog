import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        color: ${props => props.theme.colors.text.main}
    }
    body {
        line-height: 1.5;
        letter-spacing: 0;
        background-color: ${props => props.theme.colors.background.main}
    }
`

export default GlobalStyle
