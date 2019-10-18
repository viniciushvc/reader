import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import { FiPower, FiUser } from 'react-icons/fi'

import LazyImport from '../../components/LazyImport'

import { Button } from '../../components/'

import loginActions from '../../store/actions/login'

import { Container, Items, Tab, Content } from './styles'

const Info = LazyImport(() => import('./Info'))
const Layout = LazyImport(() => import('./Layout'))

export default function Profile() {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(loginActions.signOut())
  }

  return (
    <Container>
      <Tab>
        <Items>
          <NavLink to="/profile">
            <Button>
              Perfil
              <FiUser />
            </Button>
          </NavLink>

          <NavLink to="/profile/theme">
            <p>Theme</p>
            <FiUser />
          </NavLink>

          <NavLink to="/" onClick={logout}>
            <p>Sair</p>
            <FiPower />
          </NavLink>
        </Items>

        <Content>
          <Route exact path="/profile" render={Info} />
          <Route path="/profile/theme" render={Layout} />
        </Content>
      </Tab>
    </Container>
  )
}
