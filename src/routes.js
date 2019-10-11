import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LazyImport from './components/LazyImport'
import PrivateRoute from './components/PrivateRoute'
import BottomNavigation from './components/BottomNavigation'

const Home = LazyImport(() => import('./pages/Home'))
const Feed = LazyImport(() => import('./pages/Feed'))
const Bookmark = LazyImport(() => import('./pages/Bookmark'))
const SignUp = LazyImport(() => import('./pages/SignUp'))
const SignIn = LazyImport(() => import('./pages/SignIn'))
const Profile = LazyImport(() => import('./pages/Profile'))
const Reader = LazyImport(() => import('./pages/Reader'))
const NotFound = LazyImport(() => import('./pages/NotFound'))

const Routes = () => {
  return (
    <BrowserRouter>
      <BottomNavigation />

      <Switch>
        <PrivateRoute exact path="/feed" component={Feed} />
        <PrivateRoute exact path="/bookmark" component={Bookmark} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/reader/:id" component={Reader} />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
