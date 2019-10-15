import { Bookmark } from '../types'

export const get = () => {
  return {
    type: Bookmark.GET_BOOKMARK,
    payload: {},
  }
}
