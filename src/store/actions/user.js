// eslint-disable-next-line no-restricted-globals
import { User } from '../types'

export const createNewUser = (name, email, password) => {
  return {
    type: User.CREATE_NEW_USER,
    payload: {
      name,
      email,
      password,
    },
  }
}
