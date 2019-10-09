const INITIAL_STATE = {
  isAuth: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { isAuth: true }
    case 'USER_LOGOUT':
      return { isAuth: false }
    default:
      return state
  }
}
