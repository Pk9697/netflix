import { useState, useEffect, useContext } from 'react'
import FirebaseContext from '../context/firebase'

export default function useContent(target) {
  const [content, setContent] = useState([])
  const { firebaseDb, getDocs, collection } = useContext(FirebaseContext)

  useEffect(() => {
    const getData = async () => {
      const allContent = []
      const querySnapshot = await getDocs(collection(firebaseDb, target))
      querySnapshot.forEach((doc) => {
        allContent.push({ ...doc.data(), id: doc.id })
      })
      setContent(allContent)
    }
    getData()
  }, [])

  return { [target]: content }
}
