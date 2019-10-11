import styled from 'styled-components'
import { card, color, background } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  height: 100vh;
`

export const Nav = styled.nav`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${props => (props.show ? '300px' : '70px')};
  background-color: ${card};
  color: ${color};
  transition: 0.3s;

  ul {
    list-style: none;
    width: 100%;

    strong {
      font-weight: 500;
    }

    a,
    strong {
      padding: 20px;
      display: flex;
      align-items: center;
      font-size: ${props => (props.show ? '20px' : '0px')};
      text-decoration: none;
      color: ${color};

      &:hover {
        color: red;
        background-color: ${background};
      }

      svg {
        font-size: 20px;
        margin-right: 10px;
      }
    }
  }
`

export const Main = styled.div`
  flex: 1 1 auto;
  overflow: auto;
`
