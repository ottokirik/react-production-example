import { StateSchema } from 'app/providers/store-provider'

import { AsyncThunkAction } from '@reduxjs/toolkit'
import axios from 'axios'

type ActionCreatorType<Return, Arg> = (arg: Arg) => AsyncThunkAction<Return, Arg, {}>

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createTestAsyncThunk = <Return, Arg>(actionCreator: ActionCreatorType<Return, Arg>) => {
  const dispatch: jest.MockedFn<any> = jest.fn()
  const getState: () => StateSchema = jest.fn()
  const api = mockedAxios
  const navigate = jest.fn()

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const callThunk = async (arg: Arg) => {
    const action = actionCreator(arg)
    const result = await action(dispatch, getState, { api, navigate })

    return result
  }

  return { callThunk, dispatch, api }
}
