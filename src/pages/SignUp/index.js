import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { createNewUser } from '../../store/actions/user'

import { Input, Button } from '../../components'

import { Form, Container } from './styles'

export default function SignIn() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = async e => {
    e.preventDefault()

    dispatch(createNewUser(name, email, password))
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome de usuário"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Endereço de e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button type="submit" className="block lg bold green">
          Criar conta
        </Button>

        <hr />
        <Link to="/signin">Fazer login</Link>
      </Form>
    </Container>
  )
}
