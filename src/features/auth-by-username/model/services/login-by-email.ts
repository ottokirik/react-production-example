import axios from 'axios'
import { User, userActions } from 'models/user'
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/local-storage'

import { createAsyncThunk } from '@reduxjs/toolkit'

export interface LoginByEmail {
  email: string
  password: string
}

const loginURL = 'http://localhost:8000/login'

export const loginByEmail = createAsyncThunk<User, LoginByEmail>(
  'login/loginByEmail',
  async ({ email, password }, { dispatch }) => {
    const { data } = await axios.post(loginURL, {
      email,
      password,
    })

    dispatch(userActions.setUser(data))
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(data))

    return data
  }
)
