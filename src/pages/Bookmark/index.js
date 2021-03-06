import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import BookmarkActions from '../../store/actions/bookmark'

import { BookmarkList, Modal } from '../../components'
import { Container, Title, Cards } from './styles'

export default function Bookmark() {
  const [showModal, setShowModal] = useState(false)
  const [contentModal, setContentModal] = useState()
  const pages = useSelector(state => state.bookmark.pages)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(BookmarkActions.requestGet())
  }, [dispatch])

  function handleOpenNews(value) {
    setShowModal(true)

    setContentModal(value)
  }

  function handleRemove(e, value) {
    e.stopPropagation()

    dispatch(BookmarkActions.delete(value))
  }

  return (
    <>
      <Container>
        <Title>Favoritos</Title>

        <Cards>
          {pages.map(page => (
            <BookmarkList
              key={page.title}
              title={page.title}
              image={page.lead_image_url}
              onClick={() => handleOpenNews(page.content)}
              onRemove={e => handleRemove(e, page.id)}
            />
          ))}
        </Cards>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <p dangerouslySetInnerHTML={{ __html: contentModal }} />
        </Modal>
      </Container>
    </>
  )
}
