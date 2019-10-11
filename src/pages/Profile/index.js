import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import api from '../../services/api'

import { Container, Title, Label, Items, Content, Tab } from './styles'

import { Form, Input, Button, UseTheme, Sidebar } from '../../components'

export default function Profile() {
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const logout = () => {
    dispatch({ type: 'USER_LOGOUT' })
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
    <Sidebar>
      <UseTheme />
      <Container>
        <Title>Perfil</Title>

        <Tab>
          <Items>
            <Button
              type="submit"
              text="Sair do reader"
              className="lg bold red"
              onClick={logout}
            ></Button>
          </Items>

          <Content>
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="name">Nome completo</Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />

              <Button type="submit" className="lg bold green" text="Salvar" />
            </Form>
          </Content>
        </Tab>
      </Container>
    </Sidebar>
  )
}
