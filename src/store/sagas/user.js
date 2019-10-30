import { all, takeLatest, put, delay } from 'redux-saga/effects'

import LoginActions from '../actions/login'
import ToastActions from '../actions/toast'

import { User } from '../types'
import api from '../../services/api'

/**
 * ADD
 */
function* addUserSagas(action) {
  yield delay(100)

  const { name, email, password } = action.payload

  if (!name || !email || !password) {
    yield put(ToastActions.error('Preencha todos os dados para se cadastrar'))
  } else {
    try {
      const { data } = yield api.post('/users', { name, email, password })

      yield put(LoginActions.signInToken(data.token, data.name))

      yield put(ToastActions.success(data.message))
    } catch (err) {
      const { response } = err

      yield put(ToastActions.error(response.data.error))
    }
  }
}

export function* addUser() {
  yield all([yield takeLatest(User.ADD, addUserSagas)])
}

/**
 * GET
 */
function* getUserSagas() {
  try {
    const { data } = yield api.get('/users')

    yield put(LoginActions.signInSuccess(data.name))
  } catch (err) {
    const { response } = err

    yield put(ToastActions.error(response.data.error))
  }
}

export function* getUser() {
  yield all([yield takeLatest(User.GET, getUserSagas)])
}

/**
 * UPDATE
 */
function* updateUserSagas(action) {
  const { username } = action.payload

  try {
    const { data } = yield api.put('/users', { username })

    yield put(LoginActions.signInSuccess(username))

    yield put(ToastActions.success(data.message))
  } catch (err) {
    const { response } = err

    yield put(ToastActions.error(response.data.error))
  }
}

export function* updateUser() {
  yield all([yield takeLatest(User.UPDATE, updateUserSagas)])
}
