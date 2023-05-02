import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  border-bottom: 0.5em solid #222;
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
  padding: 4.375em 2.8125em;
`

Inner.displayName = 'Inner'

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0.16em;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.1875rem;
  }
`

export const Frame = styled.div`
  margin-bottom: 2.5em;
`

export const Item = styled.div`
  margin-bottom: 0.625em;
  max-width: 670px;
  margin-left: auto;
  margin-right: auto;
  &:first-of-type {
    margin-top: 3em;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1.625rem;
  margin-bottom: 0.0385em;
  font-weight: normal;
  background-color: #303030;
  padding: 0.8em 1.2em;
  user-select: none;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }
`

export const Body = styled.div`
  /* max-height: 1200px; */
  transition: max-height 10s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 1.625rem;
  font-weight: normal;
  line-height: normal;
  background-color: #303030;
  /* padding: 0.8em 2.2em 0.8em 1.2em; */
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;

  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }

  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 22px;
  }
`
