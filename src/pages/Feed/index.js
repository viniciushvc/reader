import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import FeedActions from '../../store/actions/feed'
import BookmarkActions from '../../store/actions/bookmark'

import { FeedList, Modal } from '../../components'

import { Container, Title, Cards } from './styles'

export default function Feed() {
  const [showModal, setShowModal] = useState(false)
  const [contentModal, setContentModal] = useState()
  const { feed } = useSelector(state => state.feed)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FeedActions.requestGet())
  }, [dispatch])

  function handleOpenNews(value) {
    setShowModal(true)

    setContentModal(value)
  }

  function handleSaveBookmark(e, link) {
    e.stopPropagation()

    dispatch(BookmarkActions.add(link))
  }

  return (
    <Container>
      <Title>Notícias</Title>

      <Cards>
        {feed.map(item => (
          <FeedList
            key={item.title}
            title={item.title}
            onFavorite={e => handleSaveBookmark(e, item.link)}
            onClick={() => handleOpenNews(item.content)}
          />
        ))}
      </Cards>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <p dangerouslySetInnerHTML={{ __html: contentModal }} />
      </Modal>
    </Container>
  )
}
