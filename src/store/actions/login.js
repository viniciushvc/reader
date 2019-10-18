import { Login } from '../types'

const LoginActions = {
  signIn: (email, password) => ({
    type: Login.SIGN_IN,
    payload: { email, password },
  }),

  signInSuccess: username => ({
    type: Login.SIGN_IN_SUCCESS,
    payload: { username },
  }),
  signInToken: (token, username) => ({
    type: Login.SIGN_IN_TOKEN,
    payload: { token, username },
  }),
  signOut: () => ({
    type: Login.SIGN_OUT,
    payload: null,
  }),
}

export default LoginActions
