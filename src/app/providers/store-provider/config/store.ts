import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { StateSchema } from './state-schema'

export const createReduxStore = (initialState?: StateSchema): EnhancedStore<StateSchema> => {
  return configureStore<StateSchema>({
    reducer: {},
    devTools: IS_DEV,
    preloadedState: initialState,
  })
}
