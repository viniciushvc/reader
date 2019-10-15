import { all, put, takeLatest } from 'redux-saga/effects'

import { userLoginSuccess, userLoginFailure } from '../actions/login'

import { history } from '../../utils'

import { toast } from 'react-toastify'
import api from '../../services/api'
import { login } from '../../services/auth'

export function* userLogin(action) {
  console.log(action)

  const { email, password } = action.payload

  if (!email || !password) {
    toast.error('Preencha e-mail e senha para continuar!')
  } else {
    try {
      const response = yield api.post('/sessions', { email, password })

      login(response.data.token)

      yield put(userLoginSuccess(response.data.name))

      history.push('/feed')
    } catch (err) {
      const { response } = err

      if (response) toast.error(response.data.error)

      yield put(userLoginFailure(response.data.name))
    }
  }
}

export default function* loginSagas() {
  yield all([yield takeLatest('USER_LOGIN', userLogin)])
}
