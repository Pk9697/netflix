import { useContext } from 'react'
import SelectProfileContainer from './SelectProfileContainer'
import FirebaseContext from '../context/firebase'

function BrowseContainer({ slides }) {
  const { firebaseAuth } = useContext(FirebaseContext)
  const user = firebaseAuth.currentUser || {}
  console.log({ user })
  return <SelectProfileContainer user={user} />
}

export default BrowseContainer
