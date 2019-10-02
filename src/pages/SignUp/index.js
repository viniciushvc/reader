import React from 'react'
import { Link } from 'react-router-dom'

import { Form, Container } from './styles'

export default function SignIn() {
  const handleSignUp = e => {
    e.preventDefault()
    alert('Eu vou te registrar')
  }

  return (
    <Container>
      <Form onSubmit={() => handleSignUp}>
        {this.state.error && <p>{this.state.error}</p>}
        <input
          type="text"
          placeholder="Nome de usuário"
          onChange={e => this.setState({ username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Endereço de e-mail"
          onChange={e => this.setState({ email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={e => this.setState({ password: e.target.value })}
        />
        <button type="submit">Cadastrar grátis</button>
        <hr />
        <Link to="/">Fazer login</Link>
      </Form>
    </Container>
  )
}
