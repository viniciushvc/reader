import { useState, useEffect } from React from 'react'
import { NavLink } from 'react-router-dom'

import { FiBookmark, FiRss, FiUser } from 'react-icons/fi'
import { getIsMobileScreen } from '../../utils'

import { Container } from './styles'

export default function BottomNavigation() {
  const [isMobile, setIsMobile] = useState(getIsMobileScreen)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobileScreen)
    }

    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {isMobile && (
        <Container>
          <div className="items">
            <NavLink
              to="/"
              activeClassName="selected-route selected-bottom-navigation"
            >
              <FiRss size={20} />
            </NavLink>
            <NavLink
              to="/bookmark"
              activeClassName="selected-route selected-bottom-navigation"
            >
              <FiBookmark size={20} />
            </NavLink>
            <NavLink
              to="/profile"
              activeClassName="selected-route selected-bottom-navigation"
            >
              <FiUser size={20} />
            </NavLink>
          </div>
        </Container>
      )}
    </>
  )
}
