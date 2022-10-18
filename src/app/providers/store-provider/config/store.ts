import { userReducer } from 'models/user'

import { AnyAction, configureStore, EnhancedStore, ReducersMapObject, ThunkMiddleware } from '@reduxjs/toolkit'

import { createReducerManager } from './reducer-manager'
import { StateSchema } from './state-schema'

export const createAppStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
): EnhancedStore<StateSchema, AnyAction, [ThunkMiddleware<StateSchema, AnyAction, undefined>]> => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSchema, AnyAction, [ThunkMiddleware<StateSchema, AnyAction, undefined>]>({
    // @ts-expect-error
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: initialState,
  })

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type RootState = StateSchema
export type AppStore = ReturnType<typeof createAppStore>
export type AppDispatch = AppStore['dispatch']
