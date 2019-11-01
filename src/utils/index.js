import { createBrowserHistory } from 'history'

export const TOKEN_KEY = '@Reader:token'

export const getSidebar = () => JSON.parse(localStorage.getItem('sidebar'))

export const getIsMobileScreen = () => window.innerWidth < 960

export const history = createBrowserHistory()

export const checkURL = str => {
  const pattern = /(https|http):\/\/+([www]){3}\.([a-z0-9.])+\.([a-z]){2,3}/

  return pattern.test(str)
}
