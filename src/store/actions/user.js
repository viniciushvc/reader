export const login = () => ({
  type: 'USER_LOGIN',
  payload: { isAuth: true },
})

export const logout = user => ({
  type: 'USER_LOGOUT',
  payload: { isAuth: false },
})
