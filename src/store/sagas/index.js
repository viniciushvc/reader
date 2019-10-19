import { all, fork } from 'redux-saga/effects'

import { signIn, signOut, signInToken } from './login'
import { addUser, getUser, updateUser } from './user'
import { getBookmark, addBookmark, deleteBookmark } from './bookmark'
import { successMessage, errorMessage } from './toast'

export default function* rootSaga() {
  yield all([
    fork(signIn),
    fork(signOut),
    fork(signInToken),
    fork(addUser),
    fork(getUser),
    fork(updateUser),
    fork(getBookmark),
    fork(addBookmark),
    fork(deleteBookmark),
    fork(successMessage),
    fork(errorMessage),
  ])
}
