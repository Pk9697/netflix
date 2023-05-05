import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
// import { getFirestore, collection, addDoc } from 'firebase/firestore'
// import seedDatabase from '../seed'

//* Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBoqHgAgNmtB0AViVrXb-1BU35ZF7RSmk',
  authDomain: 'netflix-5e2a6.firebaseapp.com',
  projectId: 'netflix-5e2a6',
  storageBucket: 'netflix-5e2a6.appspot.com',
  messagingSenderId: '855769012331',
  appId: '1:855769012331:web:6cfaf9ac7392407295f92e',
  measurementId: 'G-42B9KLB3ZT',
}

const firebase = initializeApp(firebaseConfig)
const firebaseDb = getFirestore(firebase)
// Initialize Firebase Authentication and get a reference to the service
const firebaseAuth = getAuth(firebase)
//! use only 1 time to load data to firestore
// seedDatabase(firebaseDb, collection, addDoc)
export {
  firebase,
  firebaseDb,
  firebaseAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
}
