import React from 'react'
import Routes from './routes'

import { ToastContainer } from 'react-toastify'

import { Provider } from 'react-redux'
import store from './store'

import './styles/toast.css'
import GlobalStyles from './styles/global'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
      <ToastContainer position="bottom-right" />
    </Provider>
  )
}

export default App
