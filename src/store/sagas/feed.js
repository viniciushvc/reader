import { all, takeLatest, put } from 'redux-saga/effects'

import FeedActions from '../actions/feed'
import ToastActions from '../actions/toast'

import { Feed } from '../types'

import api from '../../services/api'

/**
 * ADD - Page
 */
function* addFeedSagas(action) {
  const { url } = action.payload

  try {
    yield api.post('/feed', { url })

    yield put(FeedActions.requestGet())
  } catch (err) {
    yield put(ToastActions.error(err.response.data.error))
  }
}

export function* addFeed() {
  yield all([yield takeLatest(Feed.ADD, addFeedSagas)])
}

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
