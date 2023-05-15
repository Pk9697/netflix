import styled from 'styled-components'
import { Link as ReactRouterLink } from 'react-router-dom'
import BACKGROUNDS from '../../../assets/images/misc'

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.35)
    ),
    url(${({ src }) => (src ? BACKGROUNDS[src] : BACKGROUNDS.homeBg)}) top
      center / cover no-repeat;
`

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 600px) {
    justify-content: ${(props) => {
      if (props.justifySpaceBetween) {
        return 'space-between'
      }
      if (props.justifyEnd) {
        return 'flex-end'
      }
      return 'flex-start'
    }};

    width: ${(props) =>
      props.justifySpaceBetween || props.justifyEnd ? '100%' : 'normal'};
  }
`

export const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3.5em;
  /* height: 64px; */
  padding: 1.125em 0;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 1.875em;
  }

  @media (max-width: 600px) {
    flex-direction: ${(props) => (props.flexCol ? 'column' : 'row')};
  }
`
// FEATURE

export const Feature = styled(Frame)`
  flex-direction: column;
  align-items: normal;
  width: 50%;
  padding: 150px 0 500px 0;

  //TODO fix mobile design
  @media (max-width: 1100px) {
    /* display: none; */
    width: 90%;
    padding: 50px 0 300px 0;
    max-width: 600px;
  }

  @media (max-width: 700px) {
    padding: 50px 0 200px 0;
  }
  @media (max-width: 500px) {
    padding: 50px 0 100px 0;
  }
`

export const Title = styled.h2`
  color: white;
  font-size: 3.125rem;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;

  @media (max-width: 1100px) {
    font-size: 2rem;
  }
`

export const Text = styled.p`
  color: white;
  font-size: 1.375rem;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

  @media (max-width: 1100px) {
    font-size: 1rem;
  }
`

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.5em 1em;
  border-radius: 5px;
  max-width: 130px;
  margin-top: 0.5em;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: white;
  }

  @media (max-width: 1100px) {
    font-size: 1rem;
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

export const TextLink = styled.p`
  color: #fff;
  text-decoration: none;
  font-weight: ${(props) => (props.active ? '700' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;

  //! check what does svg represent
  svg {
    color: white;
    cursor: pointer;
  }

  //TODO fix mobile design
  /* @media (max-width: 700px) {
    display: none;
  } */
`

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`

export const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 0.875rem;
  border-radius: 4px;
  margin-left: ${(props) => (props.active ? '0.7em' : '0')};
  padding: ${(props) => (props.active ? '0 0.7em' : '0')};
  opacity: ${(props) => (props.active ? '1' : '0')};
  width: ${(props) => (props.active ? '200px' : '0px')};

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 700px) {
    width: ${(props) => (props.active ? '150px' : '0px')};
  }
`

export const Dropdown = styled.div`
  display: ${(props) => (props.isDropDownActive ? 'flex' : 'none')};
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 32px;
  right: 10px;
  background-color: black;
  padding: 0.625em;
  width: 100px;

  ${Group} {
    gap: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  /* &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
    gap: 10px;
  } */
`

export const Picture = styled.button`
  cursor: pointer;
  background: url(${(props) => props.src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
`
