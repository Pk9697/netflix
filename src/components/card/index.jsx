import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Entities,
  Meta,
  Image,
  Item,
  Feature,
  Content,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
} from './styles/card'
import { IMAGE_URL } from '../../helpers/urls'

const FeatureContext = createContext()

//* Always set context on compound component root level instead of subcomponent so that you can consume the context in any of the subcomponents
function Card({ url, title, children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false)
  const [itemFeature, setItemFeature] = useState({})
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data.results))
  }, [])

  const value = useMemo(() => {
    return {
      showFeature,
      setShowFeature,
      itemFeature,
      setItemFeature,
    }
  }, [showFeature, itemFeature])

  return (
    <FeatureContext.Provider value={value}>
      <Container {...restProps}>
        <Title>{title}</Title>
        <Entities>
          {items.map((item) =>
            item.backdrop_path ? (
              <Item
                key={item.id}
                // item={item}
                onClick={() => {
                  setShowFeature(true)
                  setItemFeature({ ...item, genre: title })
                }}
              >
                <Image src={`${IMAGE_URL + item.backdrop_path}`} />
                <Meta>
                  <SubTitle>
                    {item.title ||
                      item.original_title ||
                      item.name ||
                      item.original_name}
                  </SubTitle>
                  <Text>{item.overview}</Text>
                </Meta>
              </Item>
            ) : null
          )}
        </Entities>
        {children}
      </Container>
    </FeatureContext.Provider>
  )
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}
Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>
}
Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>
}
Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />
}
Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext)
  return (
    <Item
      onClick={() => {
        setShowFeature(true)
        setItemFeature(item)
      }}
      {...restProps}
    >
      {children}
    </Item>
  )
}

Card.Feature = function CardFeature({ category, children, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature, setItemFeature } =
    useContext(FeatureContext)
  // console.log({ itemFeature })
  // return null
  return showFeature ? (
    <Feature {...restProps} src={`${IMAGE_URL + itemFeature.backdrop_path}`}>
      <Content>
        <FeatureTitle>
          {itemFeature.title ||
            itemFeature.original_title ||
            itemFeature.name ||
            itemFeature.original_name}
        </FeatureTitle>
        <FeatureText>{itemFeature.overview}</FeatureText>
        <FeatureClose
          onClick={() => {
            setShowFeature(false)
            setItemFeature({})
          }}
        >
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {!itemFeature.adult ? 'PG' : '18+'}
          </Maturity>
          <FeatureText fontWeight="bold">{itemFeature.genre}</FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null
}

export default Card
