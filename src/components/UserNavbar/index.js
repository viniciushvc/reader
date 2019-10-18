import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FiSearch, FiPlusCircle } from 'react-icons/fi'

import BookmarkActions from '../../store/actions/bookmark'

import { Container } from './styles'

export default function UserNavbar() {
  const [, setSearch] = useState()
  const dispatch = useDispatch()

  function handleNewPage() {
    const link = window.prompt()

    dispatch(BookmarkActions.add(link))
  }

  return (
    <Container>
      <FiPlusCircle size={18} color="#333" onClick={handleNewPage} />

      <div className="search">
        <FiSearch size={18} color="#bbb" />
        <input
          type="text"
          placeholder="Buscar"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
    </Container>
  )
}
