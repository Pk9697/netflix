import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.25em;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`
export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 0.625em;
  height: 70px;
  box-sizing: border-box;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  font-size: 1.625rem;
  padding: 0 1.23em;
  border: 0;
  cursor: pointer;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 1rem;
    margin-top: 1.25em;
    font-weight: bold;
  }
`
export const Text = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 22px;
  }
`

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`
