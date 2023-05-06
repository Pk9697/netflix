import { useContext, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import FooterContainer from '../containers/FooterContainer'
import HeaderContainer from '../containers/HeaderContainer'
import * as ROUTES from '../constants/routes'
import Form from '../components/form'
import FirebaseContext from '../context/firebase'

function SignUp(props) {
  const { firebaseAuth, createUserWithEmailAndPassword, updateProfile } =
    useContext(FirebaseContext)
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const location = useLocation()

  // eslint-disable-next-line react/destructuring-assignment
  if (props.user) {
    if (location.state) {
      return <Navigate to={location.state.data} />
    }
    // eslint-disable-next-line react/destructuring-assignment
    return <Navigate to={props.to} />
  }
  const isInvalid = userName === '' || password === '' || email === ''

  const handleSignUp = (e) => {
    e.preventDefault()
    // firebase work here!
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential
        updateProfile(user, {
          displayName: userName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        })
          .then(() => {
            navigate(ROUTES.BROWSE)
          })
          .catch((err) => {
            setEmail('')
            setPassword('')
            setError(err.message)
          })
        // ...
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
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              type="text"
              placeholder="UserName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
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
            <Form.Submit disabled={isInvalid}>Sign Up</Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user?
            <Form.Link to={ROUTES.SIGNIN}>Sign in now</Form.Link>
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

export default SignUp
