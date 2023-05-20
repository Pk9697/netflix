import { createContext, useContext, useMemo, useState } from 'react'
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

const FeatureContext = createContext()

//* Always set context on compound component root level instead of subcomponent so that you can consume the context in any of the subcomponents
function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false)
  const [itemFeature, setItemFeature] = useState({})

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
      <Container {...restProps}>{children}</Container>
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

  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature?.genre}/${itemFeature?.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
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
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null
}

export default Card
