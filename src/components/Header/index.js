import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated, logout } from '../../services/auth'

import { Navbar, List, Item } from './styles'

export default function Header() {
  const userLinks = (
    <ul>
      <Item>
        <Link to="/profile" className="menu-user">
          Perfil
        </Link>
      </Item>
      <Item>
        <Link to="/" onClick={logout}>
          Sair
        </Link>
      </Item>
    </ul>
  )

  const guestLinks = (
    <List>
      <Item>
        <Link to="/signup">Create account</Link>
      </Item>
      <Item>
        <Link to="/">Login</Link>
      </Item>
    </List>
  )

  return (
    <Navbar>
      <div className="header">
        <Link to="/app" className="menu-brand">
          reader
        </Link>
        <div>{isAuthenticated() ? userLinks : guestLinks}</div>
      </div>
    </Navbar>
  )
}
