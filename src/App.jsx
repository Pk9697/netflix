import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home'
import * as ROUTES from './constants/routes'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Browse from './pages/Browse'
import PrivateRoute from './helpers/Routes'
import useAuthListener from './hooks/use-auth-listener'

function App() {
  const { user } = useAuthListener()
  // console.log(user)
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            user ? <Navigate to={ROUTES.BROWSE} /> : <Home user={user} />
          }
        />
        <Route
          path={ROUTES.SIGNIN}
          element={<SignIn user={user} to={ROUTES.BROWSE} />}
        />
        <Route
          path={ROUTES.SIGNUP}
          element={<SignUp user={user} to={ROUTES.BROWSE} />}
        />
        <Route
          path={ROUTES.BROWSE}
          element={
            <PrivateRoute user={user} altPath={ROUTES.SIGNIN}>
              <Browse />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
