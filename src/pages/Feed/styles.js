import styled from 'styled-components'

import { breakLine } from '../../styles/_variables'

export const Container = styled.div`
  padding: 0 50px;

  @media (max-width: ${breakLine.md}) {
    padding: 0 20px;
  }

  button {
    margin-bottom: 40px;
  }
`

export const Title = styled.h1`
  margin: 50px 0;
`

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
`
