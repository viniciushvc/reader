import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Form, Container } from './styles'

export default function SignIn() {
  const [username, setUsername] = useState([])
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])

  const handleSignUp = e => {
    e.preventDefault()
  }

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Endereço de e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Criar conta</button>

        <hr />
        <Link to="/signin">Fzer login</Link>
      </Form>
    </Container>
  )
}
