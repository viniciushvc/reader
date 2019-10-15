import { Login } from '../types'

const INITIAL_STATE = {
  isAuth: false,
  userName: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Login.USER_LOGIN_SUCCESS:
      return {
        isAuth: action.payload.isAuth,
        userName: action.payload.userName,
      }
    case Login.USER_LOGIN_FAILURE:
      return { ...state, isAuth: action.payload.isAuth }
    case Login.USER_LOGOUT:
      return { isAuth: action.payload.isAuth }
    default:
      return state
  }
}
