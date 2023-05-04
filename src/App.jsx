import { useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import * as ROUTES from './constants/routes'
import { firebase } from './lib/firebase.prod'
import FirebaseContext from './context/firebase'
import SignIn from './pages/SignIn'

function App() {
  const value = useMemo(
    () => ({
      firebase,
    }),
    []
  )
  return (
    <FirebaseContext.Provider value={value}>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SIGNIN} element={<SignIn />} />
          <Route path={ROUTES.SIGNUP} element={<p>SignUp</p>} />
          <Route path={ROUTES.BROWSE} element={<p>Browse</p>} />
        </Routes>
      </Router>
    </FirebaseContext.Provider>
  )
}

export default App
