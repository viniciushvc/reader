import { Login } from '../types'

export const userLogin = (email, password) => {
  return {
    type: Login.USER_LOGIN,
    payload: {
      email,
      password,
    },
  }
}

export const userLoginSuccess = userName => {
  return {
    type: Login.USER_LOGIN_SUCCESS,
    payload: {
      isAuth: true,
      userName,
    },
  }
}

export const userLoginFailure = () => {
  return {
    type: Login.USER_LOGIN_FAILURE,
    payload: {
      isAuth: false,
    },
  }
}

export const userLogout = () => {
  return {
    type: Login.USER_LOGOUT,
    payload: {
      isAuth: false,
    },
  }
}
