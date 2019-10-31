import React from 'react'
import PropTypes from 'prop-types'

import { FiHeart } from 'react-icons/fi'

import { Container } from './styles'

export default function FeedList({ title, onFavorite, onClick }) {
  return (
    <Container onClick={onClick}>
      <h1>{title}</h1>

      <div className="actions">
        <FiHeart onClick={onFavorite} />
      </div>
    </Container>
  )
}

FeedList.propTypes = {
  onFavorite: PropTypes.func,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

FeedList.defaultProps = {
  onFavorite: undefined,
  onClick: undefined,
}
