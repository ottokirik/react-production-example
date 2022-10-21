import { User, userActions } from 'models/user'
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/local-storage'

import { ThunkExtraArg } from 'app/providers/store-provider'

import { createAsyncThunk } from '@reduxjs/toolkit'

export interface LoginByEmail {
  email: string
  password: string
}

const loginURL = '/login'

export const loginByEmail = createAsyncThunk<User, LoginByEmail, { extra: ThunkExtraArg }>(
  'login/loginByEmail',
  async ({ email, password }, { dispatch, extra }) => {
    const { data } = await extra.api.post<User>(loginURL, {
      email,
      password,
    })

    dispatch(userActions.setUser(data))
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(data))

    return data
  }
)
