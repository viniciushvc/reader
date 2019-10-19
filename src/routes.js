import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import UserActions from './store/actions/user'

import { history } from './utils'

import LazyImport from './components/LazyImport'
import PrivateRoute from './components/PrivateRoute'

const Home = LazyImport(() => import('./pages/Home'))
const Feed = LazyImport(() => import('./pages/Feed'))
const Bookmark = LazyImport(() => import('./pages/Bookmark'))
const SignUp = LazyImport(() => import('./pages/SignUp'))
const SignIn = LazyImport(() => import('./pages/SignIn'))
const Profile = LazyImport(() => import('./pages/Profile'))
const Reader = LazyImport(() => import('./pages/Reader'))
const NotFound = LazyImport(() => import('./pages/NotFound'))

const Routes = () => {
  const dispatch = useDispatch()

  dispatch(UserActions.get())

  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/feed" component={Feed} />
        <PrivateRoute path="/bookmark" component={Bookmark} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/reader/:id" component={Reader} />
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
