import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin: auto;
`

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 3rem;
  font-weight: 500;
`

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  gap: 30px;
`

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  border: 3px solid black;
  cursor: pointer;
`

export const Name = styled.p`
  color: #808080;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
`

export const User = styled.li`
  max-height: 200px;
  max-width: 200px;
  text-align: center;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }
`
