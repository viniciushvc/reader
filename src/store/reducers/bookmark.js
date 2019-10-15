import { Bookmark } from '../types'

const INITIAL_STATE = {
  listBookmark: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Bookmark.GET_BOOKMARK:
      return {
        listBookmark: action.payload.isAuth,
      }
    default:
      return state
  }
}
