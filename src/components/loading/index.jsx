import { Spinner, LockBody, Picture, ReleaseBody } from './styles/loading'
import AVATARS from '../../assets/images/users'
//* Lock the body of entire page no scrolling whatsoever on loading
function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={AVATARS[src]} />
    </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />
}

export default Loading
