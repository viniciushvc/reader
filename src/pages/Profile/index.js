import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import { FiPower, FiUser, FiLayout } from 'react-icons/fi'

import LazyImport from '../../components/LazyImport'

import loginActions from '../../store/actions/login'

import { Container, Items, Section } from './styles'

const Info = LazyImport(() => import('./Info'))
const Layout = LazyImport(() => import('./Layout'))

export default function Profile() {
  const dispatch = useDispatch()

  return (
    <Container>
      <Items>
        <NavLink to="/profile" exact activeClassName="active">
          <p>Perfil</p>
          <FiUser />
        </NavLink>

        <NavLink to="/profile/theme" activeClassName="active">
          <p>Tema</p>
          <FiLayout />
        </NavLink>

        <NavLink
          to="/"
          onClick={() => dispatch(loginActions.signOut())}
          className="red"
        >
          <p>Sair</p>
          <FiPower />
        </NavLink>
      </Items>

      <Section>
        <Route exact path="/profile" render={Info} />
        <Route path="/profile/theme" render={Layout} />
      </Section>
    </Container>
  )
}
