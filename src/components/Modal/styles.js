import styled from 'styled-components'
import { secondaryBackground, primaryColor } from '../../styles/theme'
import { breakLine } from '../../styles/_variables'

export const Container = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);

  div {
    background-color: ${secondaryBackground};
    color: ${primaryColor};
    margin: auto;
    padding: 20px 60px;
    width: ${breakLine.md};

    @media (max-width: ${breakLine.md}) {
      width: 100%;
      padding: 20px 10px;
    }

    p {
      margin: 10px 0;
    }

    ul {
      padding-left: 40px;
    }

    a {
      color: #0084c3;
      text-decoration: none;
    }

    img {
      width: 100%;
      margin: 20px 0;
      object-fit: cover;
      border-radius: 5px;
    }

    div {
      width: 100% !important;
    }

    iframe {
      width: 100%;
    }
  }
`
