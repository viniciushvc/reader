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
    default:
      return state
  }
}
