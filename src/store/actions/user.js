import { User } from '../types'

const UserActions = {
  add: (name, email, password) => ({
    type: User.ADD,
    payload: { name, email, password },
  }),
}

export default UserActions
