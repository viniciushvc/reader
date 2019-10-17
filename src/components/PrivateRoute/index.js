import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../../services/auth'
import { Sidebar } from '../../components'
import { BottomNavigation } from '../'

function PrivateRoute({ component: Component, ...rest }) {
  const userRoute = props => (
    <Sidebar>
      <BottomNavigation />
      <Component {...props} />
    </Sidebar>
  )

  const guestRoute = props => (
    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  )

  return <Route {...rest} render={isAuthenticated ? userRoute : guestRoute} />
}

export default PrivateRoute
