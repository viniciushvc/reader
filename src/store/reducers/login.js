import { Login } from '../types'

const INITIAL_STATE = {
  isAuth: false,
  username: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Login.USER_LOGIN_SUCCESS:
      return {
        isAuth: true,
        username: action.payload.username,
      }
    case Login.USER_LOGOUT:
      return {
        isAuth: false,
        username: '',
      }
    default:
      return state
  }
}
