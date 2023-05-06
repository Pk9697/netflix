import { useMemo } from 'react'
import FirebaseContext from './context/firebase'
import {
  firebase,
  firebaseAuth,
  firebaseDb,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from './lib/firebase.prod'

function Root({ children }) {
  const value = useMemo(
    () => ({
      firebase,
      firebaseAuth,
      firebaseDb,
      signInWithEmailAndPassword,
      createUserWithEmailAndPassword,
      updateProfile,
      onAuthStateChanged,
      signOut,
    }),
    []
  )
  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default Root
