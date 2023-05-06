import { useContext } from 'react'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import FirebaseContext from '../context/firebase'

function HeaderContainer({ children, user }) {
  const { firebaseAuth, signOut } = useContext(FirebaseContext)
  const handleSignOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        // Sign-out successful.
        // console.log('Signed-Out')
      })
      .catch((err) => {
        // An error happened.
        // eslint-disable-next-line no-console
        console.log(err)
      })
  }
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix_logo" />
        {user ? (
          <Header.ButtonLink onClick={handleSignOut}>
            Sign Out
          </Header.ButtonLink>
        ) : (
          <Header.ButtonLink to={ROUTES.SIGNIN}>Sign In</Header.ButtonLink>
        )}
      </Header.Frame>
      {children}
    </Header>
  )
}

export default HeaderContainer
