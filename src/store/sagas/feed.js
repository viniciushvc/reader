import { all, takeLatest, put } from 'redux-saga/effects'

import FeedActions from '../actions/feed'
import ToastActions from '../actions/toast'

import { Feed } from '../types'

import api from '../../services/api'

/**
 * ADD - Page
 */
// function* addBookmarkSagas(action) {
//   yield delay(200)

//   const { url } = action.payload

//   try {
//     const { data } = yield api.post('/pages', { url })

//     yield put(BookmarkActions.addSuccess(data.result))

//     yield put(ToastActions.success(data.message))
//   } catch (err) {
//     yield put(ToastActions.error(err.response.data.error))
//   }
// }

// export function* addBookmark() {
//   yield all([yield takeLatest(Bookmark.ADD, addBookmarkSagas)])
// }

/**
 * GET - Pages
 */
function* getFeedSagas() {
  try {
    const { data } = yield api.get('/feed')

    yield put(FeedActions.get(data))
  } catch (err) {
    yield put(ToastActions.error(err.response.data.error))
  }
}

export function* getFeed() {
  yield all([yield takeLatest(Feed.REQUEST_GET, getFeedSagas)])
}

/**
 * DELETE - Page
 */
// function* deleteBookmarkSagas(action) {
//   const { id } = action.payload

//   const { data } = yield api.delete('/pages', { data: { id } })

//   yield put(BookmarkActions.deleteSuccess(id))

//   yield put(ToastActions.success(data.message))
// }

// export function* deleteBookmark() {
//   yield all([yield takeLatest(Bookmark.DELETE, deleteBookmarkSagas)])
// }
