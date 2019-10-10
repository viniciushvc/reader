import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import LazyImport from './components/LazyImport'
import PrivateRoute from './components/PrivateRoute'

const Feed = LazyImport(() => import('./pages/Feed'))
const Bookmark = LazyImport(() => import('./pages/Bookmark'))
const SignUp = LazyImport(() => import('./pages/SignUp'))
const SignIn = LazyImport(() => import('./pages/SignIn'))
const Profile = LazyImport(() => import('./pages/Profile'))
const Reader = LazyImport(() => import('./pages/Reader'))
const PageNotFound = LazyImport(() => import('./pages/NotFound'))

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PrivateRoute exact path="/feed" component={Feed} />
        <PrivateRoute exact path="/bookmark" component={Bookmark} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/reader/:id" component={Reader} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={SignIn} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
