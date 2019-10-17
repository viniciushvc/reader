import styled from 'styled-components'

import { breakLine } from '../../styles/_variables'

export const Container = styled.div`
  padding: 0 50px;

  @media (max-width: ${breakLine.md}) {
    padding: 0 20px;
  }
`

export const Title = styled.h1`
  margin: 50px 0;
`
