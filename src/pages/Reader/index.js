import React, { useState, useEffect } from 'react'
import api from '../../services/api.js'

import { Container } from './styles'

export default function Reader(props) {
  const [page, setPage] = useState([])

  const { id } = props.match.params

  useEffect(() => {
    async function getPage() {
      const { data } = await api.get(`/webparser/${id}`)

      setPage(data)
    }

    getPage()
  }, [id])

  return (
    <Container>
      <div>
        <h2>{page.title}</h2>

        <img src={page.lead_image_url} alt={page.title} />

        <p dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    </Container>
  )
}
