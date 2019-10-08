import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { News } from './styles.js'

export default function Card({ onClick, list = [], props }) {
  return (
    <News>
      {list.map(item => (
        <Link to={`/reader/${item.id}`} key={item.title}>
          <div className="content">
            <h1>{item.title}</h1>
          </div>
        </Link>
      ))}
    </News>
  )
}

Card.propTypes = {
  list: PropTypes.array,
  onClick: PropTypes.func,
}
