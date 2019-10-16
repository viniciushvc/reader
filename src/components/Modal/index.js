import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

export default function Modal({ show, children, onClose }) {
  const modal = (
    <Container onClick={onClose}>
      <div>{children}</div>
    </Container>
  )

  return show && modal
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}
