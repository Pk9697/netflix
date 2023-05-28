import { useEffect, useState } from 'react'
import BrowseContainer from '../containers/BrowseContainer'
import { APIurls } from '../helpers/urls'
import slidesWithUrlTitle from '../utils/slides-with-url-title'

function Browse() {
  const [randomItem, setRandomItem] = useState({})
  useEffect(() => {
    const url = APIurls.fetchNetflixOriginals
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const randIdx = Math.floor(Math.random() * data.results.length)
        setRandomItem(data.results[randIdx])
      })
  }, [])

  // const slides = selectionFilter({ series, films })
  // console.log(slides)
  const slides = slidesWithUrlTitle()
  // console.log({ slides })
  return <BrowseContainer randomItem={randomItem} slides={slides} />
}

export default Browse
