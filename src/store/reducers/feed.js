import { Feed } from '../types'

const INITIAL_STATE = {
  feed: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Feed.GET:
      return {
        ...state,
        feed: action.payload.feed,
      }
    // case Feed.ADD_SUCCESS:
    //   return {
    //     ...state,
    //     pages: [...state.pages, action.payload.page],
    //   }
    // case Feed.DELETE_SUCCESS:
    //   return {
    //     ...state,
    //     pages: state.pages.filter(item => item.id !== action.payload.id),
    //   }
    default:
      return state
  }
}
