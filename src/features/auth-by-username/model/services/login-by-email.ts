import { User, userActions } from 'entities/user'
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/local-storage'

import { createAsyncThunk } from '@reduxjs/toolkit'

import { LoginSchema } from '../types/login-schema'

const loginURL = 'http://localhost:8000/login'

export const loginByEmail = createAsyncThunk<User, Omit<LoginSchema, 'isLoading' | 'error'>>(
  'login/loginByEmail',
  async ({ email, password }, { dispatch }) => {
    const response = await fetch(loginURL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) throw new Error()

    const data = await response.json()

    dispatch(userActions.setUser(data))
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(data))

    return data
  }
)
