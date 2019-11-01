import React from 'react'
import PropTypes from 'prop-types'

import { FiTrash2 } from 'react-icons/fi'

import { Container } from './styles'

export default function BookmarkList({ title, image, onRemove, onClick }) {
  return (
    <Container onClick={onClick}>
      <img src={image} alt={title} loading="auto" />
      <h1>{title}</h1>

      <div className="actions">
        <FiTrash2 onClick={onRemove} />
      </div>
    </Container>
  )
}

BookmarkList.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
}

BookmarkList.defaultProps = {
  image: undefined,
  onRemove: undefined,
  onClick: undefined,
}
