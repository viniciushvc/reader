import React from 'react'
import { Link } from 'react-router-dom'

import { FiBookmark, FiRss, FiChevronLeft } from 'react-icons/fi'

import { Container, Main, Menu } from './styles'

export default function Sidebar({ children }) {
  return (
    <Container>
      <Menu>
        <ul>
          <li>
            <Link to="feed">
              <FiRss />
              <span>Feed</span>
            </Link>
          </li>
          <li>
            <Link to="/bookmark">
              <FiBookmark />
              <span>Bookmark</span>
            </Link>
          </li>
        </ul>

        {/* <ul>
          <li>
            <Link to="/bookmark">
              <FiChevronLeft />
              <span>Minimizar</span>
            </Link>
          </li>
        </ul> */}
      </Menu>
      <Main>{children}</Main>
    </Container>
  )
}
