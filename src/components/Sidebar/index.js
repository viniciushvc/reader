import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { getSidebar } from '../../utils'

import { FiBookmark, FiRss, FiMenu, FiUser } from 'react-icons/fi'

import { Container, Main, Nav } from './styles'

export default function Sidebar({ children }) {
  const [toggle, setToggle] = useState(getSidebar)

  useEffect(() => {
    localStorage.setItem('sidebar', toggle)
  }, [toggle])

  return (
    <Container>
      <Nav role="navigation" show={toggle}>
        <ul>
          <li onClick={() => setToggle(!toggle)}>
            <strong>
              <FiMenu />
            </strong>
          </li>
          <li>
            <NavLink to="feed" activeClassName="selected-route">
              <FiRss />
              <span>Feed</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookmark" activeClassName="selected-route">
              <FiBookmark />
              <span>Bookmark</span>
            </NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink to="profile" activeClassName="selected-route">
              <FiUser />
              <span>Perfil</span>
            </NavLink>
          </li>
        </ul>
      </Nav>
      <Main>{children}</Main>
    </Container>
  )
}
