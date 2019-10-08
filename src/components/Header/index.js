import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { Navbar, List, Item } from './styles'

export default function Header() {
  const auth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  const logout = () => {
    dispatch({ type: 'USER_LOGOUT' })
  }

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
        <Link to="/signup">Criar conta</Link>
      </Item>
      <Item>
        <Link to="/">Acessar conta</Link>
      </Item>
    </List>
  )

  return (
    <Navbar>
      <div className="header">
        <Link to="/app" className="menu-brand">
          reader
        </Link>
        <div>{auth ? userLinks : guestLinks}</div>
      </div>
    </Navbar>
  )
}
