import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { News } from './styles.js'

export default function Card({ onClick, list = [], props }) {
  return (
    <News>
      {list.map(item => (
        <Link to={`/reader/${item.id}`} key={item.id}>
          <img src={item.lead_image_url} alt={item.title} />
          <h1>{item.title}</h1>
        </Link>
      ))}
    </News>
  )
}

Card.propTypes = {
  list: PropTypes.array,
  onClick: PropTypes.func,
}
