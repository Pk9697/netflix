import { useEffect, useState } from 'react'
import BrowseContainer from '../containers/BrowseContainer'
import { APIurls } from '../helpers/urls'
import useContent from '../hooks/use-content'
import selectionFilter from '../utils/selection-filter'

function Browse() {
  const [randomItem, setRandomItem] = useState({})
  const { series } = useContent('series')
  const { films } = useContent('films')
  useEffect(() => {
    const url = APIurls.fetchNetflixOriginals
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const randIdx = Math.floor(Math.random() * data.results.length)
        setRandomItem(data.results[randIdx])
      })
  }, [])

  const slides = selectionFilter({ series, films })
  // console.log(slides)
  console.log({ randomItem })
  return <BrowseContainer randomItem={randomItem} slides={slides} />
}

export default Browse
