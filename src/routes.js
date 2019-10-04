import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import GlobalStyles from './styles/global'
import { ToastContainer } from 'react-toastify'
import './styles/toast.css'

import LazyImport from './components/LazyImport'

import { isAuthenticated } from './services/auth'
// components

import Header from './components/Header'

// pages
const Home = LazyImport(() => import('./pages/Home'))
const SignUp = LazyImport(() => import('./pages/SignUp'))
const SignIn = LazyImport(() => import('./pages/SignIn'))
const PageNotFound = LazyImport(() => import('./pages/PageNotFound'))

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
        <Header />
        <Switch>
          <PrivateRoute exact path="/app" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={SignIn} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default Routes
