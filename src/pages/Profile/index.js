import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api'
import { userLogout } from '../../store/actions/login'

import { FiPower, FiUser } from 'react-icons/fi'

import { Container, Title, Label, Items, Content, Tab } from './styles'

import { Form, Input, Button, UseTheme } from '../../components'

export default function Profile() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(userLogout())
  }

  useEffect(() => {
    async function getUser() {
      const { data } = await api.get('/users')

      if (data) setName(data.name)
    }

    getUser()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    if (!name) {
      toast.error('Preencha todos os campos antes de salvar')
    }
    try {
      const res = await api.put('/users', { name })

      if (res.status === 200) toast.success(res.data.message)
    } catch (err) {
      const { res } = err

      if (res) toast.error(res.data.error)
    }
  }

  return (
    <>
      <UseTheme />
      <Container>
        <Tab>
          <Items>
            <Link className="dark" to="/profile">
              <p>Perfil</p>
              <FiUser />
            </Link>
            <Link className="red" to="/" onClick={logout}>
              <p>Sair</p>
              <FiPower />
            </Link>
          </Items>

          <Content>
            <Title>Perfil</Title>

            <Form onSubmit={handleSubmit}>
              <Label htmlFor="name">Nome completo</Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />

              <Button type="submit" className="lg bold green" text="Salvar">
                Salvar
              </Button>
            </Form>
          </Content>
        </Tab>
      </Container>
    </>
  )
}
