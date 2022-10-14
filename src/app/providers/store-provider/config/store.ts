import { userReducer } from 'entities/user'

import { configureStore, EnhancedStore, ReducersMapObject } from '@reduxjs/toolkit'

import { StateSchema } from './state-schema'

export const createReduxStore = (initialState?: StateSchema): EnhancedStore<StateSchema> => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
  }
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: IS_DEV,
    preloadedState: initialState,
  })
}
