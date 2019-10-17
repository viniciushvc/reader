import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Container>
      <h1>Bem vindo ao Reader</h1>

      <h2>Seu novo agregador de notícias favorito.</h2>

      <Link to="/signin">Comece a utilizar agora</Link>
    </Container>
  )
}
