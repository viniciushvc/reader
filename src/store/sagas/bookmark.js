import { all, takeLatest, put, delay } from 'redux-saga/effects'

import BookmarkActions from '../actions/bookmark'
import ToastActions from '../actions/toast'

import { Bookmark } from '../types'

import api from '../../services/api'

/**
 * ADD - Page
 */
function* addBookmarkSagas(action) {
  yield delay(200)

  const { url } = action.payload

  try {
    const { data } = yield api.post('/pages', { url })

    yield put(BookmarkActions.addSuccess(data.result))

    yield put(ToastActions.success(data.message))
  } catch (err) {
    yield put(ToastActions.error(err.response.data.error))
  }
}

export function* addBookmark() {
  yield all([yield takeLatest(Bookmark.ADD, addBookmarkSagas)])
}

/**
 * GET - Pages
 */
function* getBookmarkSagas() {
  try {
    const { data } = yield api.get('/pages')

    yield put(BookmarkActions.get(data))
  } catch (err) {
    yield put(ToastActions.error(err.response.data.error))
  }
}

export function* getBookmark() {
  yield all([yield takeLatest(Bookmark.REQUEST_GET, getBookmarkSagas)])
}

/**
 * DELETE - Page
 */
function* deleteBookmarkSagas(action) {
  const { id } = action.payload

  const { data } = yield api.delete('/pages', { data: { id } })

  yield put(BookmarkActions.deleteSuccess(id))

  yield put(ToastActions.success(data.message))
}

export function* deleteBookmark() {
  yield all([yield takeLatest(Bookmark.DELETE, deleteBookmarkSagas)])
}
