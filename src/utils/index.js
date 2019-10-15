import { createBrowserHistory } from 'history'

export const TOKEN_KEY = '@Reader:token'

export const getSidebar = () => JSON.parse(localStorage.getItem('sidebar'))

export const getIsMobileScreen = () => window.innerWidth < 960

export const history = createBrowserHistory()
