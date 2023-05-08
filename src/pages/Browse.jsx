import useContent from '../hooks/use-content'

function Browse() {
  const { series } = useContent('series')
  const { films } = useContent('films')
  console.log({ series })
  console.log({ films })
  return <div>Browse</div>
}

export default Browse
