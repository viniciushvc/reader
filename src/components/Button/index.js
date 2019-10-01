import React from 'react'
import PropTypes from 'prop-types'

import { Btn } from './styles'

const Button = ({ text, className, type }) => (
  <Btn type={type} className={className}>
    {text}
  </Btn>
)

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button
