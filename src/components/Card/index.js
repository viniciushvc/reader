import React from 'react'
import PropTypes from 'prop-types'

import { FiTrash2 } from 'react-icons/fi'

import { Container } from './styles'

export default function Card({ type = 'feed', title, image, onRemove }) {
  return (
    <Container>
      <img src={image} alt={title} />
      <h1>{title}</h1>

      <div className="actions">
        {type === 'bookmark' && <FiTrash2 onClick={onRemove} />}
      </div>
    </Container>
  )
}

Card.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
