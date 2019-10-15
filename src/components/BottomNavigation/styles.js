import styled from 'styled-components'
import { secondaryBackground, primaryColor } from '../../styles/theme'

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  .items {
    display: flex;
    justify-content: space-between;
    background-color: ${secondaryBackground};

    a {
      padding: 15px;
      display: flex;
      width: 100%;
      justify-content: center;
      color: ${primaryColor};
    }
  }
`
