import BrowseContainer from '../containers/BrowseContainer'
import useContent from '../hooks/use-content'
import selectionFilter from '../utils/selection-filter'

function Browse() {
  const { series } = useContent('series')
  const { films } = useContent('films')
  const slides = selectionFilter({ series, films })
  console.log(slides)
  return <BrowseContainer slides={slides} />
}

export default Browse
 