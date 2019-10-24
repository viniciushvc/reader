import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FiBookmark, FiRss, FiMenu, FiUser } from 'react-icons/fi'

import { getIsMobileScreen, getSidebar } from '../../utils'

import { Container, Main, Nav } from './styles'

export default function Sidebar({ children }) {
  const [toggle, setToggle] = useState(getSidebar)
  const [isMobile, setIsMobile] = useState(getIsMobileScreen)

  useEffect(() => {
    localStorage.setItem('sidebar', toggle)
  }, [toggle])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobileScreen)
    }

    window.addEventListener('resize', handleResize)
  }, [])

  const sidebar = (
    <Nav role="navigation" show={toggle}>
      <ul>
        <li onClick={() => setToggle(!toggle)}>
          <strong>
            <FiMenu />
          </strong>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="selected-route">
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
  )

  return (
    <Container>
      {!isMobile && sidebar}
      <Main>{children}</Main>
    </Container>
  )
}
