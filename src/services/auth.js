export const TOKEN_KEY = '1de9b0a30075ae8c303eb420c103c320'

export const isAuthenticated = () => {
  const { user } = JSON.parse(localStorage.getItem('state'))

  if (user) return user.isAuth
  return false
}

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const login = token => localStorage.setItem(TOKEN_KEY, token)

export const logout = () => localStorage.removeItem(TOKEN_KEY)
