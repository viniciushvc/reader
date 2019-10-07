import React from 'react'
import PropTypes from 'prop-types'

import { InputField } from './styles'

export default function Input({ type, value, placeholder, onChange }) {
  return (
    <InputField
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}
