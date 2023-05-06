import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoute({ children, user, altPath }) {
  const location = useLocation()

  return user ? (
    children
  ) : (
    <Navigate to={altPath} state={{ data: location.pathname }} />
  )
}

export default PrivateRoute
