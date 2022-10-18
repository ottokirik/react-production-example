import axios from 'axios'
import { User, userActions } from 'models/user'
import { createTestAsyncThunk } from 'shared/lib/tests/test-async-thunk'

import { loginByEmail, LoginByEmail } from './login-by-email'

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

describe('login by email', () => {
  test('successful get data from server', async () => {
    const userResponse: User = { email: 'fake@email.com', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userResponse }))

    const asyncThunk = createTestAsyncThunk<User, LoginByEmail>(loginByEmail)

    const result = await asyncThunk.callThunk({ email: '', password: '' })

    expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setUser(userResponse))
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toEqual('fulfilled')
  })

  test('error get data from server', async () => {
    const userResponse: User = { email: 'fake@email.com', id: '1' }
    mockedAxios.post.mockReturnValue(Promise.reject(new Error()))

    const asyncThunk = createTestAsyncThunk<User, LoginByEmail>(loginByEmail)

    const result = await asyncThunk.callThunk({ email: '', password: '' })

    expect(asyncThunk.dispatch).not.toHaveBeenCalledWith(userActions.setUser(userResponse))
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toEqual('rejected')
  })
})
