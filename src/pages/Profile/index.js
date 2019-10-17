import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import loginActions from '../../store/actions/login'

import Info from './Info'
import Layout from './Layout'

import { FiPower, FiUser } from 'react-icons/fi'

import { Container, Items, Tab, Content } from './styles'

export default function Profile() {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(loginActions.logout())
  }

  return (
    <Container>
      <Tab>
        <Items>
          <Link to="/profile">
            <p>Perfil</p>
            <FiUser />
          </Link>

          <Link to="/profile/theme">
            <p>Theme</p>
            <FiUser />
          </Link>

          <Link to="/" onClick={logout}>
            <p>Sair</p>
            <FiPower />
          </Link>
        </Items>

        <Content>
          <Route exact path="/profile" render={Info} />
          <Route path="/profile/theme" render={Layout} />
        </Content>
      </Tab>
    </Container>
  )
}
