import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html,body{
        margin: 0;
        padding: 0;
        font-family: 'Netflix sans','Helvetica Neue',Helvetica,Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        background-color: black;
        color: whitesmoke;
        font-size: 1rem;
    }
`
export default GlobalStyle
