import React from 'react'
import PropTypes from 'prop-types'

import { InputField } from './styles'

export default function Input({ type, value, name, placeholder, onChange }) {
  return (
    <InputField
      type={type}
      name={name}
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
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}
