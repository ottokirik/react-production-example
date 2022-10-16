import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/local-storage'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User, UserSchema } from '../types/user'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initUser: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)

      if (user === null) return

      state.authData = JSON.parse(user)
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
    },
  },
})

export const { actions: userActions, reducer: userReducer } = userSlice
