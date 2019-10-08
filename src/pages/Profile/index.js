import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/api'

import { Input, Button } from '../../components'

// import { Container } from './styles';

export default function Profile() {
  const [name, setName] = useState('')

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
    <div className="container">
      <h1>Profile</h1>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Button type="submit" text="Salvar" />
      </form>
    </div>
  )
}
