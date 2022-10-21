import { userReducer } from 'models/user'

import { AnyAction, configureStore, EnhancedStore, ReducersMapObject, ThunkMiddleware } from '@reduxjs/toolkit'

import { createReducerManager } from './reducer-manager'
import { StateSchema } from './state-schema'
import { axiosInstance } from 'shared/api/api'
import { NavigateFunction } from 'react-router-dom'

export const createAppStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction
): EnhancedStore<StateSchema, AnyAction, [ThunkMiddleware<StateSchema, AnyAction, undefined>]> => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSchema, AnyAction, [ThunkMiddleware<StateSchema, AnyAction, undefined>]>({
    // @ts-expect-error
    reducer: reducerManager.reduce,
    devTools: _IS_DEV_,
    preloadedState: initialState,
    // @ts-expect-error
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: axiosInstance,
            navigate,
          },
        },
      }),
  })

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type RootState = StateSchema
export type AppStore = ReturnType<typeof createAppStore>
export type AppDispatch = AppStore['dispatch']
