import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html,body{
        font-family: 'Netflix sans','Helvetica Neue',Helvetica,Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        background-color: black;
        color: whitesmoke;
        font-size: 1rem;
    }
`
export default GlobalStyle
