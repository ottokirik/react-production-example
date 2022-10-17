import { createSlice } from '@reduxjs/toolkit'

import { loginByEmail } from '../services/login-by-email'
import { LoginSchema } from '../types/login-schema'

const initialState: LoginSchema = {
  isLoading: false,
  error: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginByEmail.pending, (state) => {
        state.error = false
        state.isLoading = true
      })
      .addCase(loginByEmail.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(loginByEmail.rejected, (state, action) => {
        state.isLoading = false
        state.error = true
      })
  },
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
