import { createBrowserHistory } from 'history'

export const getSidebar = () => JSON.parse(localStorage.getItem('sidebar'))

export const getWidthScreen = () => window.innerWidth < 960

export const history = createBrowserHistory()
