import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import GlobalStyles from './styles/global'

import { isAuthenticated } from './services/auth'

// pages
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
)

const Routes = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/app" component={Home} />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Routes
