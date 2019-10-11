import styled from 'styled-components'
import { card, color } from '../../styles/theme'

export const Navbar = styled.header`
  background-color: ${card};
  padding: 10px;
  width: 100%;

  div {
    display: flex;
    max-width: 1366px;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }

  a {
    color: ${color};
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 700;
  }
`

export const List = styled.ul`
  list-style: none;
`
export const Item = styled.li`
  font-weight: 500;
  margin-left: 1rem;
  display: inline-block;
  padding: 10px;

  a {
    font-size: 0.9rem;
  }
`
