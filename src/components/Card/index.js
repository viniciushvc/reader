import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api'
import { FiTrash2 } from 'react-icons/fi'
import { News } from './styles'

export default function Card({ type = 'feed', list = [] }) {
  const handleRemove = async (e, id) => {
    e.preventDefault()

    const res = await api.delete('/pages', { data: { id } })

    toast.success(res.data.message)
  }

  return (
    <News>
      {list.map(item => (
        <Link to={`/reader/${item.id}`} key={item.id}>
          <img src={item.lead_image_url} alt={item.title} />
          <h1>{item.title}</h1>

          <div className="actions">
            {type === 'bookmark' && (
              <FiTrash2 onClick={e => handleRemove(e, item.id)} />
            )}
          </div>
        </Link>
      ))}
    </News>
  )
}

Card.propTypes = {
  list: PropTypes.array,
  type: PropTypes.string,
}
