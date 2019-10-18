import { Login } from '../types'

const INITIAL_STATE = {
  username: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Login.SIGN_IN_SUCCESS:
      return {
        username: action.payload.username,
      }
    case Login.SIGN_IN_TOKEN:
      return {
        username: action.payload.username,
      }
    case Login.SIGN_OUT:
      return {
        username: '',
      }
    default:
      return state
  }
}
