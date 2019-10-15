import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Sidebar } from '../../components'
import { BottomNavigation } from '../'

function PrivateRoute({ component: Component, ...rest }) {
  const auth = useSelector(state => state.login.isAuth)

  const userRoute = props => (
    <Sidebar>
      <BottomNavigation />
      <Component {...props} />
    </Sidebar>
  )

  const guestRoute = props => (
    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
  )

  return <Route {...rest} render={auth ? userRoute : guestRoute} />
}

export default PrivateRoute
