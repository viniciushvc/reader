import styled from 'styled-components'
import {
  secondaryBackground,
  primaryColor,
  primaryBackground,
} from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  height: 100vh;
`

export const Nav = styled.nav`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60px;
  background-color: ${secondaryBackground};
  color: ${primaryColor};

  a {
    padding: 20px;
    display: flex;
    align-items: center;
    color: ${primaryColor};

    &:hover {
      background-color: ${primaryBackground};
    }
    svg {
      width: 100%;
    }
  }
`

export const Main = styled.div`
  flex: 1 1 auto;
  overflow: auto;
`
