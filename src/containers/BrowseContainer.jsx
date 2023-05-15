import { useContext, useEffect, useState } from 'react'
import SelectProfileContainer from './SelectProfileContainer'
import FirebaseContext from '../context/firebase'
import Loading from '../components/loading'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

function BrowseContainer({ slides }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const { firebaseAuth, signOut } = useContext(FirebaseContext)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile?.displayName])

  const user = firebaseAuth.currentUser || {}

  return profile ? (
    <>
      {loading ? <Loading src={user?.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker">
        <Header.Frame flexCol>
          <Header.Group justifySpaceBetween>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.Group>
              <Header.TextLink>Series</Header.TextLink>
              <Header.TextLink>Films</Header.TextLink>
            </Header.Group>
          </Header.Group>
          <Header.Group justifyEnd>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user?.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user?.photoURL} />
                  <Header.TextLink>{user?.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => signOut(firebaseAuth)}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.Title>Watch Joker Now</Header.Title>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he&apos;s part of the
            world around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}

export default BrowseContainer
