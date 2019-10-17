import { all, fork } from 'redux-saga/effects'

import login from './login'
import user from './user'
import { getBookmark, addBookmark, deleteBookmark } from './bookmark'
import { successMessage, errorMessage } from './toast'

export default function* rootSaga() {
  yield all([
    fork(login),
    fork(user),
    fork(getBookmark),
    fork(addBookmark),
    fork(deleteBookmark),
    fork(login),
    fork(successMessage),
    fork(errorMessage),
  ])
}
