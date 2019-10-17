import { all, takeLatest, delay } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { history } from '../../utils'

import { User } from '../types'
import api from '../../services/api'

export function* createNewUser(action) {
  yield delay(500)

  const { name, email, password } = action.payload

  if (!name || !email || !password) {
    toast.error('Preencha todos os dados para se cadastrar')
  } else {
    try {
      const response = yield api.post('/users', { name, email, password })

      toast.success(response.data.message)

      history.push('/')
    } catch (err) {
      const { response } = err

      if (response) toast.error(response.data.error)
    }
  }
}

export default function* createUserSagas() {
  yield all([yield takeLatest(User.CREATE_NEW_USER, createNewUser)])
}
