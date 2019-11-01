import React from 'react'
import PropTypes from 'prop-types'

import { Btn } from './styles'

export default function Button({ children, className, type, onClick }) {
  return (
    <Btn type={type} className={className} onClick={onClick}>
      {children}
    </Btn>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  onClick: undefined,
}
