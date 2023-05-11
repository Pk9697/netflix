import { Container, Title, List, User, Picture, Name } from './styles/profiles'
import AVATARS from '../../assets/images/users'
import loading from '../../assets/images/misc/loading.gif'

function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>
}

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>
}

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={src ? AVATARS[src] : loading} />
}

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>
}

export default Profiles
