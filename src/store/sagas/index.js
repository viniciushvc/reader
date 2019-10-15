import { all, fork } from 'redux-saga/effects'

import login from './login'
import user from './user'

export default function* rootSaga() {
  yield all([fork(login)])
  yield all([fork(user)])
}
