import { useContext, useEffect, useState } from 'react'
import SelectProfileContainer from './SelectProfileContainer'
import FirebaseContext from '../context/firebase'
import Loading from '../components/loading'

function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const { firebaseAuth } = useContext(FirebaseContext)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 30000)
  }, [profile?.displayName])

  const user = firebaseAuth.currentUser || {}

  return profile ? (
    <>
      {loading ? <Loading src={user?.photoURL} /> : <Loading.ReleaseBody />}
      <h1>Content</h1>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}

export default BrowseContainer
