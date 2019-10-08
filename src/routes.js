import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import GlobalStyles from './styles/global'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import store from './store'
import './styles/toast.css'
import LazyImport from './components/LazyImport'
import { isAuthenticated } from './services/auth'
import Header from './components/Header'

// pages
const Home = LazyImport(() => import('./pages/Home'))
const SignUp = LazyImport(() => import('./pages/SignUp'))
const SignIn = LazyImport(() => import('./pages/SignIn'))
const Profile = LazyImport(() => import('./pages/Profile'))
const PageNotFound = LazyImport(() => import('./pages/NotFound'))

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
    <Provider store={store}>
      <GlobalStyles />
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
      <ToastContainer position="bottom-right" />
    </Provider>
  )
}

export default Routes
