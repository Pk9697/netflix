import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'normalize.css'
import App from './App'
import './index.css'
import GlobalStyle from './global-styles'
import Root from './Root'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root>
      <GlobalStyle />
      <App />
    </Root>
  </React.StrictMode>
)
