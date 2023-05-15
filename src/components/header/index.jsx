import { createContext, useContext, useMemo, useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
  Background,
  Frame,
  Logo,
  ButtonLink,
  Group,
  TextLink,
  Search,
  SearchIcon,
  SearchInput,
  Profile,
  Picture,
  Dropdown,
  Feature,
  PlayButton,
  Title,
  Text,
} from './styles/header'
import searchIcon from '../../assets/images/icons/search.png'
import AVATARS from '../../assets/images/users'

const DropdownContext = createContext()

function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Header.Logo = function HeaderLogo({ to = '/', ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  )
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>
}

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActive, setSearchActive] = useState(false)
  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive((prev) => !prev)}>
        <img src={searchIcon} alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  )
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  const [isDropDownActive, setIsDropDownActive] = useState(false)
  const value = useMemo(
    () => ({
      isDropDownActive,
      setIsDropDownActive,
    }),
    [isDropDownActive]
  )

  return (
    <DropdownContext.Provider value={value}>
      <Profile {...restProps}>{children}</Profile>
    </DropdownContext.Provider>
  )
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  const { setIsDropDownActive } = useContext(DropdownContext)
  return (
    <Picture
      onClick={() => setIsDropDownActive((prev) => !prev)}
      {...restProps}
      src={AVATARS[src]}
    />
  )
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  const { isDropDownActive } = useContext(DropdownContext)
  return (
    <Dropdown isDropDownActive={isDropDownActive} {...restProps}>
      {children}
    </Dropdown>
  )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

export default Header
