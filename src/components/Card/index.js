import React from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import api from '../../services/api'
import { FiTrash2 } from 'react-icons/fi'
import { Container } from './styles'

export default function Card({ type = 'feed', id, title, image }) {
  const handleRemove = async (e, id) => {
    e.preventDefault()

    const res = await api.delete('/pages', { data: { id } })

    toast.success(res.data.message)
  }

  return (
    <Container>
      <img src={image} alt={title} />
      <h1>{title}</h1>

      <div className="actions">
        {type === 'bookmark' && <FiTrash2 onClick={e => handleRemove(e, id)} />}
      </div>
    </Container>
  )
}

Card.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
