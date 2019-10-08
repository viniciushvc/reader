import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import LazyImport from './components/LazyImport'
import PrivateRoute from './components/PrivateRoute'

const Home = LazyImport(() => import('./pages/Home'))
const SignUp = LazyImport(() => import('./pages/SignUp'))
const SignIn = LazyImport(() => import('./pages/SignIn'))
const Profile = LazyImport(() => import('./pages/Profile'))
const PageNotFound = LazyImport(() => import('./pages/NotFound'))

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PrivateRoute exact path="/app" component={Home} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={SignIn} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
