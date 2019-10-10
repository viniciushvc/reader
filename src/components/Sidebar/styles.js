import styled from 'styled-components'
import { card, color, background } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  height: 100%;
`

export const Menu = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  background-color: ${card};
  color: ${color};

  ul {
    list-style: none;
    width: 100%;

    a {
      padding: 20px;
      display: flex;
      align-items: center;
      font-size: 20px;
      text-decoration: none;
      color: ${color};

      &:hover {
        color: red;
        background-color: ${background};
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`

export const Main = styled.div`
  width: 100%;
`
