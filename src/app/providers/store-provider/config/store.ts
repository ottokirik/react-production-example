import { userReducer } from 'entities/user'

import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'

import { StateSchema } from './state-schema'
import { createReducerManager } from './reducer-manager'

const rootReducer: ReducersMapObject<StateSchema> = {
  user: userReducer,
}

const reducerManager = createReducerManager(rootReducer)

export const store = configureStore<StateSchema>({
  reducer: reducerManager.reduce as Reducer<StateSchema>,
  devTools: IS_DEV,
})

// @ts-ignore
store.reducerManager = reducerManager

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
