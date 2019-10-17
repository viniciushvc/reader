import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import BookmarkActions from '../../store/actions/bookmark'

import { Card, UserNavbar } from '../../components'
import { Container, Title, Cards } from './styles'

export default function Bookmark() {
  const pages = useSelector(state => state.bookmark.pages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(BookmarkActions.requestGet())
  }, [dispatch])

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
              onRemove={() => dispatch(BookmarkActions.delete(page.id))}
            />
          ))}
        </Cards>
      </Container>
    </>
  )
}
