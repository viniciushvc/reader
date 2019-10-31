import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../../services/auth'
import { Sidebar, BottomNavigation } from '..'

function PrivateRoute({ component: Component }) {
  const userRoute = () => (
    <Sidebar>
      <BottomNavigation />
      <Component />
    </Sidebar>
  )

  const guestRoute = props => (
    <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
  )

  return <Route render={isAuthenticated() ? userRoute : guestRoute} />
}

export default PrivateRoute
