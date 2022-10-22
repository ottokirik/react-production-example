import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetch-profile-data'

import { Profile, ProfileSchema } from '../types'

export const initialProfileDataState: Profile = {
  firstName: '',
  lastName: '',
  age: null,
  currency: null,
  country: null,
  city: '',
  userName: '',
  avatar: '',
}

const initialState: ProfileSchema = {
  data: initialProfileDataState,
  isError: false,
  isLoading: false,
  isReadonly: true,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.data = action.payload
        state.isLoading = false
        state.isError = false
      })
      .addCase(fetchProfileData.rejected, (state) => {
        state.isError = true
        state.isLoading = false
      })
  },
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
