import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import api from '../../services/api'

import { Input, Button } from '../../components'

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
