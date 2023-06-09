import Header from '../components/header'
import Profiles from '../components/profiles'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix_logo" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who&apos;s Watching</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user?.photoURL} alt="photo_url" />
            <Profiles.Name>{user?.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  )
}

export default SelectProfileContainer
