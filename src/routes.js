import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyles from './styles/global'

// pages
import Home from './pages/Home'

const Routes = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Routes
