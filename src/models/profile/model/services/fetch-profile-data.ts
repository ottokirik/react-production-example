import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkExtraArg } from 'app/providers/store-provider'
import { Profile } from '../types'

const profileUrl = '/profile'

export const fetchProfileData = createAsyncThunk<Profile, undefined, { extra: ThunkExtraArg }>(
  'profile/fetchProfileData',
  async (_, { extra }) => {
    const { data } = await extra.api.get<Profile>(profileUrl)

    return data
  }
)
