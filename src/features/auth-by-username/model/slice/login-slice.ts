import { createSlice } from '@reduxjs/toolkit'

import { loginByEmail } from '../services/login-by-email'
import { LoginSchema } from '../types/login-schema'

const initialState: LoginSchema = {
  isLoading: false,
  isError: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    reset: () => ({
      ...initialState,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByEmail.pending, (state) => {
        state.isError = false
        state.isLoading = true
      })
      .addCase(loginByEmail.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(loginByEmail.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
