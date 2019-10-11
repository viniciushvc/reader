import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FiBookmark, FiRss, FiUser } from 'react-icons/fi'
import { getWidthScreen } from '../../utils'

import { Container } from './styles'

export default function BottomNavigation() {
  const [isMobile, setIsMobile] = useState(getWidthScreen)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getWidthScreen)
    }

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {isMobile && (
        <Container>
          <div className="items">
            <NavLink to="/feed" activeClassName="selected-route">
              <FiRss size={30} />
            </NavLink>
            <NavLink to="/bookmark" activeClassName="selected-route">
              <FiBookmark size={30} />
            </NavLink>
            <NavLink to="/profile" activeClassName="selected-route">
              <FiUser size={30} />
            </NavLink>
          </div>
        </Container>
      )}
    </>
  )
}
