import { Bookmark } from '../types'

const BookmarkActions = {
  add: url => ({
    type: Bookmark.ADD,
    payload: { url },
  }),
  addSuccess: page => ({
    type: Bookmark.ADD_SUCCESS,
    payload: { page },
  }),
  get: pages => ({
    type: Bookmark.GET,
    payload: { pages },
  }),
  requestGet: () => ({
    type: Bookmark.REQUEST_GET,
    payload: null,
  }),
  delete: id => ({
    type: Bookmark.DELETE,
    payload: { id },
  }),
  deleteSuccess: id => ({
    type: Bookmark.DELETE_SUCCESS,
    payload: { id },
  }),
}

export default BookmarkActions
