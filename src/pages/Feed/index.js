import React from 'react'

import { UserNavbar } from '../../components'

import { Container, Title } from './styles'

export default function Feed() {
  return (
    <>
      <UserNavbar />

      <Container>
        <Title>Notícias</Title>
      </Container>
    </>
  )
}
