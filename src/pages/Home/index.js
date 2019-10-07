import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { Input, Card } from '../../components'

import api from '../../services/api'

export default function Home() {
  const [url, setUrl] = useState()
  const [pages, setPages] = useState()

  useEffect(() => {
    async function getPages() {
      const { data } = await api.get('/webparser')

      setPages(data)
    }

    getPages()
  }, [url])

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await api.post('/webparser', { url })

      if (res.status === 200) {
        toast.success(res.data.message)
      }
    } catch (err) {
      const { response } = err

      if (response) toast.error(response.data.error)
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          className="form-control"
          placeholder="Link do Feed"
          onChange={e => setUrl(e.target.value)}
        />
      </form>

      <Card list={pages} />
    </div>
  )
}
