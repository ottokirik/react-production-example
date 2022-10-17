import { AnyAction, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit'

import { ReducerManager, StateSchema, StateSchemaKey } from './state-schema'

export const createReducerManager = (initialReducers: ReducersMapObject<StateSchema>): ReducerManager => {
  const reducers = { ...initialReducers }
  let combinedReducer = combineReducers(reducers)

  let keysToRemove: StateSchemaKey[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state }

        keysToRemove.forEach((key) => {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete state[key]
        })

        keysToRemove = []
      }

      return combinedReducer(state, action)
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (reducers[key] !== undefined) {
        return
      }

      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },

    remove: (key: StateSchemaKey) => {
      if (reducers[key] === undefined) {
        return
      }

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete reducers[key]

      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    },
  }
}
