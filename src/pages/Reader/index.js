import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import { Container } from './styles'

export default function Reader(props) {
  const [page, setPage] = useState([])

  const { id } = props.match.params

  useEffect(() => {
    async function getPage() {
      const { data } = await api.get(`/pages/${id}`)

      setPage(data)
    }

    getPage()
  }, [id])

  return (
    <Container>
      <div>
        <h1>{page.title}</h1>

        <h2>{page.domain}</h2>

        <a href={page.url} target="_blank" rel="noopener noreferrer">
          Exibir original
        </a>

        <img src={page.lead_image_url} alt={page.title} loading="lazy" />

        <p>{page.content}</p>
      </div>
    </Container>
  )
}
