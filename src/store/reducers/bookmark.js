import { Bookmark } from '../types'

const INITIAL_STATE = {
  pages: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Bookmark.GET:
      return {
        ...state,
        pages: action.payload.pages,
      }
    case Bookmark.ADD_SUCCESS:
      return {
        ...state,
        pages: [...state.pages, action.payload.page],
      }
    case Bookmark.DELETE_SUCCESS:
      return {
        ...state,
        pages: state.pages.filter(item => item.id !== action.payload.id),
      }
    default:
      return state
  }
}
