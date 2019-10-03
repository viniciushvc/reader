import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Form, Container } from './styles'

export default function SignIn() {
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])

  const handleSignUp = e => {
    e.preventDefault()
  }

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
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

        <button type="submit">Acessar conta</button>

        <hr />
        <Link to="/signup">Criar conta</Link>
      </Form>
    </Container>
  )
}
