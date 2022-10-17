import { userReducer } from 'entities/user'
import { loginReducer } from 'features/auth-by-username/model/slice/login-slice'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { StateSchema } from './state-schema'

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
})

export const store = configureStore<StateSchema>({
  reducer: rootReducer,
  devTools: IS_DEV,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
