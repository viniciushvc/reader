import { User } from '../types'

const INITIAL_STATE = {
  isAuth: false,
  userName: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case User.CREATE_NEW_USER:
      return state
    default:
      return state
  }
}
