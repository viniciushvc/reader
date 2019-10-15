import styled from 'styled-components'
import { secondaryBackground, primaryColor } from '../../styles/theme'

export const Navbar = styled.header`
  background-color: ${secondaryBackground};
  width: 100%;

  div {
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    display: flex;
    align-items: center;
    color: ${primaryColor};
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 700;

    p {
      margin-bottom: 5px;
    }

    svg {
      margin-right: 15px;
    }
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
