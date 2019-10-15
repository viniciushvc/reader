import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Sidebar } from '../../components'

function PrivateRoute({ component: Component, ...rest }) {
  const auth = useSelector(state => state.login.isAuth)

  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Sidebar>
            <Component {...props} />
          </Sidebar>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
