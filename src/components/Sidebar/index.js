import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FiBookmark, FiRss, FiUser } from 'react-icons/fi'

import { getIsMobileScreen } from '../../utils'
import { Container, Main, Nav } from './styles'

export default function Sidebar({ children }) {
  const [isMobile, setIsMobile] = useState(getIsMobileScreen)

  const iconSize = 18

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobileScreen)
    }

    window.addEventListener('resize', handleResize)
  }, [])

  const sidebar = (
    <Nav role="navigation">
      <div className="link-pages">
        <NavLink exact to="/" activeClassName="selected-route">
          <FiRss size={iconSize} />
        </NavLink>
        <NavLink to="/bookmark" activeClassName="selected-route">
          <FiBookmark size={iconSize} />
        </NavLink>
      </div>

      <NavLink to="profile" activeClassName="selected-route">
        <FiUser size={iconSize} />
      </NavLink>
    </Nav>
  )

  return (
    <Container>
      {!isMobile && sidebar}
      <Main>{children}</Main>
    </Container>
  )
}
