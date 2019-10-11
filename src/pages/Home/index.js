import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <h1>Bem vindo ao Reader</h1>

        <h2>Seu novo agregador de notícias favorito.</h2>

        <Link to="signup">Comece a utilizar agora</Link>
      </Container>
    </>
  )
}
