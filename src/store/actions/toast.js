import { Toast } from '../types'

const ToastActions = {
  success: message => ({
    type: Toast.SUCCESS,
    payload: { message },
  }),
  error: message => ({
    type: Toast.ERROR,
    payload: { message },
  }),
}

export default ToastActions
