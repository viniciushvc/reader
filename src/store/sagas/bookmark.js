import { all, put, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { Bookmark } from '../types'
import { userLoginSuccess, userLoginFailure } from '../actions/login'

import { history } from '../../utils'

import api from '../../services/api'
import { login } from '../../services/auth'

export function* userLogin(action) {
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
  yield all([yield takeLatest(Bookmark.GET_BOOKMARK, userLogin)])
}
