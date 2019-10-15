import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import { loadState, saveState } from '../localStorage'

import reducers from './reducers'

const persistedState = loadState()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(sagaMiddleware)
)

store.subscribe(() => {
  saveState({
    login: store.getState().login,
  })
})

sagaMiddleware.run(sagas)

export default store
