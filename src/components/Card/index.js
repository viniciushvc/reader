import React from 'react'
import PropTypes from 'prop-types'

import { News } from './styles.js'

const Card = ({ onClick, list = [] }) => (
  <News>
    {list.map(item => (
      <div onClick={onClick} key={item.title}>
        <h1>{item.title}</h1>
      </div>
    ))}
  </News>
)

Card.propTypes = {
  list: PropTypes.array,
  onClick: PropTypes.func,
}

export default Card
