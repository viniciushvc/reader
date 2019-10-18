import { all, put, takeLatest, delay } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { Login } from '../types'
import loginActions from '../actions/login'

import { history } from '../../utils'

import api from '../../services/api'
import { login, logout } from '../../services/auth'

/**
 * SIGN IN
 */
function* signInSagas(action) {
  yield delay(100)

  const { email, password } = action.payload

  if (!email || !password) {
    toast.error('Preencha e-mail e senha para continuar!')
  } else {
    try {
      const { data } = yield api.post('/sessions', { email, password })

      login(data.token)

      yield put(loginActions.signInSuccess(data.user.name))

      history.push('/feed')
    } catch (err) {
      toast.error(err.response.data.error)
    }
  }
}

export function* signIn() {
  yield all([yield takeLatest(Login.SIGN_IN, signInSagas)])
}

/**
 * SIGN IN TOKEN
 */
function* signInTokenSagas(action) {
  yield delay(100)

  login(action.payload.token)

  history.push('/feed')
}

export function* signInToken() {
  yield all([yield takeLatest(Login.SIGN_IN_TOKEN, signInTokenSagas)])
}

/**
 * SIGN OUT
 */
function* signOutSagas() {
  yield delay(100)

  logout()
}

export function* signOut() {
  yield all([yield takeLatest(Login.SIGN_OUT, signOutSagas)])
}
