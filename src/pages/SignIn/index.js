import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import api from '../../services/api'
import { login } from '../../services/auth'

import { Form, Container } from './styles'

export default function SignIn(props) {
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])

  const handleSignIn = async e => {
    e.preventDefault()

    if (!email || !password) {
      toast.error('Preencha e-mail e senha para continuar!')
    } else {
      try {
        const response = await api.post('/sessions', { email, password })

        login(response.data.token)

        props.history.push('/app')
      } catch (err) {
        const { response } = err

        if (response) toast.error(response.data.error)
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
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
