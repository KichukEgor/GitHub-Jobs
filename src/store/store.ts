import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'

export const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger]
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
