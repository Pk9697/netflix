import { useContext, useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import SelectProfileContainer from './SelectProfileContainer'
import FirebaseContext from '../context/firebase'
import Loading from '../components/loading'
import Header from '../components/header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import Card from '../components/card'
import Player from '../components/player'
import { APIurls, IMAGE_URL } from '../helpers/urls'

function BrowseContainer({ slides, randomItem = 'joker' }) {
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

      <Header
        dontShowOnSmallViewPort
        src={`${IMAGE_URL}${randomItem?.backdrop_path}`}
      >
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
          <Header.Title>
            {randomItem.name || randomItem.original_name}
          </Header.Title>
          <Header.Text>{randomItem.overview}</Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        <Card url={APIurls.fetchNetflixOriginals} title="Netflix Originals">
          <Card.Feature category={category}>
            <Player>
              <Player.Button />
              <Player.Video />
            </Player>
          </Card.Feature>
        </Card>
        <Card url={APIurls.fetchTrending} title="Trending">
          <Card.Feature category={category}>
            <Player>
              <Player.Button />
              <Player.Video />
            </Player>
          </Card.Feature>
        </Card>
        <Card url={APIurls.fetchTopRated} title="Top Rated">
          <Card.Feature category={category}>
            <Player>
              <Player.Button />
              <Player.Video />
            </Player>
          </Card.Feature>
        </Card>
        <Card url={APIurls.fetchActionMovies} title="Action Movies">
          <Card.Feature category={category}>
            <Player>
              <Player.Button />
              <Player.Video />
            </Player>
          </Card.Feature>
        </Card>
        <Card url={APIurls.fetchComedyMovies} title="Comedy Movies">
          <Card.Feature category={category}>
            <Player>
              <Player.Button />
              <Player.Video />
            </Player>
          </Card.Feature>
        </Card>
        <Card url={APIurls.fetchHorrorMovies} title="Horror Movies">
          <Card.Feature category={category}>
            <Player>
              <Player.Button />
              <Player.Video />
            </Player>
          </Card.Feature>
        </Card>
        <Card url={APIurls.fetchRomanceMovies} title="Romance Movies">
          <Card.Feature category={category}>
            <Player>
              <Player.Button />
              <Player.Video />
            </Player>
          </Card.Feature>
        </Card>
        <Card url={APIurls.fetchDocumentaries} title="Documentaries">
          <Card.Feature category={category}>
            <Player>
              <Player.Button />
              <Player.Video />
            </Player>
          </Card.Feature>
        </Card>
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}

export default BrowseContainer
