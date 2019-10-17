import { all, put, takeLatest, delay } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { Login } from '../types'
import loginActions from '../actions/login'

import { history } from '../../utils'

import api from '../../services/api'
import { login } from '../../services/auth'

export function* loginSagas(action) {
  yield delay(100)

  const { email, password } = action.payload

  if (!email || !password) {
    toast.error('Preencha e-mail e senha para continuar!')
  } else {
    try {
      const { data } = yield api.post('/sessions', { email, password })

      login(data.token)

      yield put(loginActions.loginSuccess(data.user.name))

      history.push('/feed')
    } catch (err) {
      toast.error(err.response.data.error)

      yield put(loginActions.loginFailure())
    }
  }
}

export default function* userLogin() {
  yield all([yield takeLatest(Login.LOGIN, loginSagas)])
}
