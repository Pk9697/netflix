import styled from 'styled-components'
import { Link as ReactRouterLink } from 'react-router-dom'
import homeBg from '../../../home-bg.jpg'
// `../images/misc/${src}.jpg`
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.35)
    ),
    url(${({ src }) => (src ? import.meta.env.VITE_IMAGE_URL + src : homeBg)})
      top left / cover no-repeat;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3.5em;
  height: 64px;
  padding: 1.125em 0;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 1.875em;
  }
`
export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 2.5em;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`

export const ButtonLink = styled(ReactRouterLink)`
  display: inline-block !important;
  text-align: center;
  background-color: #e50914;
  width: 95px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 1rem;
  border-radius: 3px;
  padding: 0.5em 1em;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`
