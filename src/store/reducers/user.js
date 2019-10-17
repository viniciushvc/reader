import { User } from '../types'

const INITIAL_STATE = {
  isAuth: false,
  username: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case User.CREATE_NEW_USER:
      return state
    case User.USER_GET:
      return { username: action.payload.username }
    default:
      return state
  }
}
