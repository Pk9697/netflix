import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.375em 3.5em;
  margin: auto;
  max-width: 1000px;

  @media (max-width: 1000px) {
    padding: 4.375em 1.875em;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 1em;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`

export const Link = styled.a`
  /* text-decoration: none; */
  color: #757575;
  font-size: 0.875rem;
  margin-bottom: 1.54em;
  /* line-height: 1.3; */
`
export const Title = styled.p`
  font-size: 1rem;
  color: #757575;
  margin-bottom: 2.5em;
`
export const Text = styled.p`
  font-size: 0.875rem;
  color: #757575;
  margin-bottom: 3.08em;
`
export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`
