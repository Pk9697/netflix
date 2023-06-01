import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html{
        font-size: 18px;
    }

    body{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        background-color: black;
        color: whitesmoke;
        font-size: 1em;
    }
`
export default GlobalStyle
