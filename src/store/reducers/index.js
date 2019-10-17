import { combineReducers } from 'redux'

import login from './login'
import user from './user'
import bookmark from './bookmark'

export default combineReducers({
  login,
  user,
  bookmark,
})
