import { createSlice } from '@reduxjs/toolkit'

import { ProfileSchema } from '../types'

const initialState: ProfileSchema = {
  data: undefined,
  isError: false,
  isLoading: false,
  isReadonly: true,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
