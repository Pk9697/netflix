import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import * as ROUTES from './constants/routes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGNIN} element={<p>SignIn</p>} />
        <Route path={ROUTES.SIGNUP} element={<p>SignUp</p>} />
        <Route path={ROUTES.BROWSE} element={<p>Browse</p>} />
      </Routes>
    </Router>
  )
}

export default App
