import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 10.3125em 2.8125em;
`

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 3.125rem;
  font-weight: 500;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 2.1875rem;
  }
`

export const SubTitle = styled.h2`
  color: white;
  font-size: 1.625rem;
  font-weight: normal;
  margin: 0.615em auto;

  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
`
