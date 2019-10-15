import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../store/actions/login'

import { Input, Button } from '../../components'

import { Form, Container } from './styles'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSignIn = async e => {
    e.preventDefault()

    dispatch(userLogin(email, password))
  }

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
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
          Acessar conta
        </Button>

        <hr />
        <Link to="/signup">Criar conta</Link>
      </Form>
    </Container>
  )
}
