import { useContext, useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import SelectProfileContainer from './SelectProfileContainer'
import FirebaseContext from '../context/firebase'
import Loading from '../components/loading'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import Card from '../components/card'

function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series')
  const [slideRows, setSlideRows] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const { firebaseAuth, signOut } = useContext(FirebaseContext)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile?.displayName])

  useEffect(() => {
    setSlideRows(slides[category])
  }, [slides, category])

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ['data.description', 'data.title', 'data.genre'],
    })
    const results = fuse.search(searchTerm).map(({ item }) => item)

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results)
    } else {
      setSlideRows(slides[category])
    }
  }, [searchTerm])

  const user = firebaseAuth.currentUser || {}

  return profile ? (
    <>
      {loading ? <Loading src={user?.photoURL} /> : <Loading.ReleaseBody />}

      <Header dontShowOnSmallViewPort src="joker">
        <Header.Frame flexCol>
          <Header.Group justifySpaceBetween>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.Group>
              <Header.TextLink
                active={category === 'series'}
                onClick={() => setCategory('series')}
              >
                Series
              </Header.TextLink>
              <Header.TextLink
                active={category === 'films'}
                onClick={() => setCategory('films')}
              >
                Films
              </Header.TextLink>
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

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.id} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <p>I am a feature</p>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}

export default BrowseContainer
