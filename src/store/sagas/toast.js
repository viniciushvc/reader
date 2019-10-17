import { all, takeLatest, delay } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { Toast } from '../types'

/**
 * SUCCESS
 */
function* successMessageSagas(action) {
  yield delay(200)

  const { message } = action.payload

  yield toast.success(message)
}

export function* successMessage() {
  yield all([yield takeLatest(Toast.SUCCESS, successMessageSagas)])
}

/**
 * ERROR
 */
function* errorMessageSagas(action) {
  yield delay(200)

  const { message } = action.payload

  yield toast.error(message)
}

export function* errorMessage() {
  yield all([yield takeLatest(Toast.ERROR, errorMessageSagas)])
}
