import { userReducer } from 'models/user'

import {
  AnyAction,
  CombinedState,
  configureStore,
  EnhancedStore,
  ReducersMapObject,
  ThunkMiddleware,
} from '@reduxjs/toolkit'

import { createReducerManager } from './reducer-manager'
import { StateSchema, ThunkExtraArg } from './state-schema'
import { axiosInstance } from 'shared/api/api'
import { NavigateFunction } from 'react-router-dom'

export const createAppStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction
): EnhancedStore<
  CombinedState<StateSchema>,
  AnyAction,
  [ThunkMiddleware<CombinedState<StateSchema>, AnyAction, { extra: ThunkExtraArg }>]
> => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducer)

  const store: EnhancedStore<
    CombinedState<StateSchema>,
    AnyAction,
    [ThunkMiddleware<CombinedState<StateSchema>, AnyAction, { extra: ThunkExtraArg }>]
  > = configureStore({
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
