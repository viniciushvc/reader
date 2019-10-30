import React from 'react'
import PropTypes from 'prop-types'

import { Btn } from './styles'

const Button = ({ children, className, type }) => (
  <Btn type={type} className={className}>
    {children}
  </Btn>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Button
