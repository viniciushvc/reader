import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import useTheme from './useTheme'

import Routes from './routes'
import store from './store'

import './styles/toast.css'
import GlobalStyles from './styles/global'

function App() {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <Routes />
        <ToastContainer position="bottom-right" />
      </Provider>
    </ThemeProvider>
  )
}

export default App
