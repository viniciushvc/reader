import { User } from '../types'

const UserActions = {
  add: (name, email, password) => ({
    type: User.ADD,
    payload: { name, email, password },
  }),
  get: () => ({
    type: User.GET,
    payload: null,
  }),
  update: username => ({
    type: User.UPDATE,
    payload: { username },
  }),
}

export default UserActions
