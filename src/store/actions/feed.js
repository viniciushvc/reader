import { Feed } from '../types'

const FeedActions = {
  add: url => ({
    type: Feed.ADD,
    payload: { url },
  }),
  addSuccess: page => ({
    type: Feed.ADD_SUCCESS,
    payload: { page },
  }),
  get: feed => ({
    type: Feed.GET,
    payload: { feed },
  }),
  requestGet: () => ({
    type: Feed.REQUEST_GET,
    payload: null,
  }),
  delete: id => ({
    type: Feed.DELETE,
    payload: { id },
  }),
  deleteSuccess: id => ({
    type: Feed.DELETE_SUCCESS,
    payload: { id },
  }),
}

export default FeedActions
