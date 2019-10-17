import { Toast } from '../types'

const INITIAL_STATE = {
  message: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Toast.SUCCESS:
      return {
        message: action.payload.message,
      }
    case Toast.ERROR:
      return { message: action.payload.message }
    default:
      return state
  }
}
