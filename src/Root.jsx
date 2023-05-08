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
  collection,
  getDocs,
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
      collection,
      getDocs,
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
