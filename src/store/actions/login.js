import { Login } from '../types'

const LoginActions = {
  login: (email, password) => ({
    type: Login.LOGIN,
    payload: { email, password },
  }),
  loginSuccess: () => ({
    type: Login.LOGIN_SUCCESS,
    payload: null,
  }),
  loginFailure: () => ({
    type: Login.LOGIN_FAILURE,
    payload: null,
  }),
  logout: () => ({
    type: Login.LOGOUT,
    payload: null,
  }),
  get: user => ({
    type: Login.GET,
    payload: { user },
  }),
  requestGet: () => ({
    type: Login.REQUEST_GET,
    payload: null,
  }),
}

export default LoginActions
