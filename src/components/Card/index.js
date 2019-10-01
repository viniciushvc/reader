import React from 'react'
import PropTypes from 'prop-types'

import { Box } from './styles.js'

const Card = ({ onClick, list = [] }) => (
  <>
    {list.map(item => (
      <Box onClick={onClick} key={item.title}>
        <h1>{item.title}</h1>
      </Box>
    ))}
  </>
)

Card.propTypes = {
  list: PropTypes.array,
  onClick: PropTypes.func,
}

export default Card
