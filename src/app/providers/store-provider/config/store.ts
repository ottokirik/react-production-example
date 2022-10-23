import { userReducer } from 'models/user'

import {
  AnyAction,
  CombinedState,
  configureStore,
  EnhancedStore,
  MiddlewareArray,
  Reducer,
  ReducersMapObject,
  ThunkMiddleware,
} from '@reduxjs/toolkit'

import { createReducerManager } from './reducer-manager'
import { ReducerManager, StateSchema, ThunkExtraArg } from './state-schema'
import { axiosInstance } from 'shared/api/api'
import { NavigateFunction } from 'react-router-dom'

type StoreWithManagerType = EnhancedStore<
  CombinedState<StateSchema>,
  AnyAction,
  MiddlewareArray<[ThunkMiddleware<CombinedState<StateSchema>, AnyAction, ThunkExtraArg>]>
> & {
  reducerManager?: ReducerManager
}

export const createAppStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction
): StoreWithManagerType => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducer)

  const extraArg: ThunkExtraArg = {
    api: axiosInstance,
    navigate,
  }

  const store: StoreWithManagerType = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>, AnyAction>,
    devTools: _IS_DEV_,
    preloadedState: initialState,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
  })

  store.reducerManager = reducerManager

  return store
}

export type RootState = StateSchema
export type AppStore = ReturnType<typeof createAppStore>
export type AppDispatch = AppStore['dispatch']
