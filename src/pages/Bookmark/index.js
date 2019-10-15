import React, { useState, useEffect } from 'react'

import { Container, Title, Cards } from './styles'

import { Card, UserNavbar } from '../../components'

import api from '../../services/api'

export default function Bookmark() {
  const [pages, setPages] = useState([])

  useEffect(() => {
    async function getPages() {
      const { data } = await api.get('/pages')

      setPages(data)
    }

    getPages()
  }, [])

  // const handleSubmit = async e => {
  //   e.preventDefault()
  //   try {
  //     const res = await api.post('/pages', { url })

  //     if (res.status === 200) {
  //       toast.success(res.data.message)
  //     }
  //   } catch (err) {
  //     const { response } = err

  //     if (response) toast.error(response.data.error)
  //   }
  // }

  return (
    <>
      <UserNavbar />

      <Container>
        <Title>Favoritos</Title>

        <Cards>
          {pages.map(page => (
            <Card
              id={page.id}
              key={page.id}
              title={page.title}
              image={page.lead_image_url}
              type="bookmark"
            />
          ))}
        </Cards>
      </Container>
    </>
  )
}
