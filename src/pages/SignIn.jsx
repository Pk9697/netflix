import { useContext, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import FooterContainer from '../containers/FooterContainer'
import HeaderContainer from '../containers/HeaderContainer'
import * as ROUTES from '../constants/routes'
import Form from '../components/form'
import FirebaseContext from '../context/firebase'

function SignIn(props) {
  const { firebaseAuth, signInWithEmailAndPassword } =
    useContext(FirebaseContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const location = useLocation()
  // console.log('Signin comp')
  // eslint-disable-next-line react/destructuring-assignment
  if (props.user) {
    // console.log('location', location.state)
    if (location.state) {
      // console.log(location.state.data)
      return <Navigate to={location.state.data} />
    }
    // eslint-disable-next-line react/destructuring-assignment
    return <Navigate to={props.to} />
  }

  const isInvalid = password === '' || email === ''

  const handleSignIn = (e) => {
    e.preventDefault()
    // firebase work here!
    signInWithEmailAndPassword(firebaseAuth, email, password)
      // eslint-disable-next-line no-unused-vars
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user
        // ...
        navigate(ROUTES.BROWSE)
      })
      .catch((err) => {
        // const errorCode = err.code
        setEmail('')
        setPassword('')
        setError(err.message)
      })
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Submit disabled={isInvalid}>Sign In</Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix?
            <Form.Link to={ROUTES.SIGNUP}>Sign up now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

export default SignIn
