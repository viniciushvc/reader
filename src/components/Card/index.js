import React from 'react'
import PropTypes from 'prop-types'

import { FiTrash2 } from 'react-icons/fi'

import { Container } from './styles'

export default function Card({ title, image, onRemove, onClick }) {
  return (
    <Container onClick={onClick}>
      <img src={image} alt={title} />
      <h1>{title}</h1>

      <div className="actions">
        <FiTrash2 onClick={onRemove} />
      </div>
    </Container>
  )
}

Card.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
}
