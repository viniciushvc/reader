import React from 'react'
import PropTypes from 'prop-types'

export default function Form({ children, onSubmit }) {
  return <form onSubmit={onSubmit}>{children}</form>
}

Form.propTypes = {
  children: PropTypes.arrayOf.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
