import { useState, useEffect, useContext } from 'react'
import FirebaseContext from '../context/firebase'

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))
  const { firebaseAuth, onAuthStateChanged } = useContext(FirebaseContext)

  useEffect(() => {
    const listener = onAuthStateChanged(firebaseAuth, (authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser))
        setUser(authUser)
      } else {
        // console.log('Remove user')
        localStorage.removeItem('authUser')
        setUser(null)
      }
    })

    return () => listener()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { user }
}
