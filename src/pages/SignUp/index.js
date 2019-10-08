import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import api from '../../services/api'

import { Form, Container } from './styles'

export default function SignIn(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async e => {
    e.preventDefault()

    if (!name || !email || !password) {
      toast.error('Preencha todos os dados para se cadastrar')
    } else {
      try {
        const response = await api.post('/users', { name, email, password })

        toast.success(response.data.message)

        props.history.push('/')
      } catch (err) {
        const { response } = err

        if (response) toast.error(response.data.error)
      }
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={name}
          onChange={e => setName(e.target.value)}
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
        <Link to="/">Fazer login</Link>
      </Form>
    </Container>
  )
}
