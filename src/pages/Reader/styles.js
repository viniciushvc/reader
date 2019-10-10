import styled from 'styled-components'
import { color } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 15px;
  max-width: 960px;
  margin: auto;

  img {
    width: 100%;
    margin: 2rem 0;
  }

  h1 {
    margin-top: 2rem;
  }

  h2 {
    margin: 1rem 0;
    text-align: center;
    color: #1773cf;
  }

  a {
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    display: block;
    color: ${color};
  }

  p {
    font-size: 1.8rem;
    line-height: 1.5;
    font-family: serif;
  }
`
