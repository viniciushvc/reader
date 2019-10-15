import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiBookOpen, FiSearch, FiPlusCircle } from 'react-icons/fi'

import { Container } from './styles'

export default function UserNavbar() {
  const [search, setSearch] = useState()

  return (
    <Container>
      <Link to="/feed">
        <FiBookOpen size={25} color="#28A745" />
      </Link>

      <div className="search">
        <FiSearch size={18} color="#bbb" />
        <input
          type="text"
          placeholder="Buscar"
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <FiPlusCircle size={18} color="#333" />
    </Container>
  )
}
