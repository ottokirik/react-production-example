import axios from 'axios'
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/local-storage'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { User, userActions } from '../../../../entities/user'
import { LoginSchema } from '../types/login-schema'

const loginURL = 'http://localhost:8000/login'

export const loginByEmail = createAsyncThunk<User, Omit<LoginSchema, 'isLoading' | 'error'>>(
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
