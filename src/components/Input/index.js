import React from 'react'
import PropTypes from 'prop-types'

import { InputField, Label } from './styles'

export default function Input({ type, value, label, placeholder, onChange }) {
  return (
    <>
      <Label>{label}</Label>
      <InputField
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}
