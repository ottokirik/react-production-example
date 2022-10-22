import { User, userActions } from 'models/user'
import { createTestAsyncThunk } from 'shared/lib/tests/test-async-thunk'

import { loginByEmail, LoginByEmail } from './login-by-email'

describe('login by email', () => {
  test('successful get data from server', async () => {
    const userResponse: User = { email: 'fake@email.com', id: '1' }
    const asyncThunk = createTestAsyncThunk<User, LoginByEmail>(loginByEmail)

    asyncThunk.api.post.mockReturnValue(Promise.resolve({ data: userResponse }))

    const result = await asyncThunk.callThunk({ email: '', password: '' })

    expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setUser(userResponse))
    expect(asyncThunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toEqual('fulfilled')
  })

  test('error get data from server', async () => {
    const userResponse: User = { email: 'fake@email.com', id: '1' }

    const asyncThunk = createTestAsyncThunk<User, LoginByEmail>(loginByEmail)
    asyncThunk.api.post.mockReturnValue(Promise.reject(new Error()))

    const result = await asyncThunk.callThunk({ email: '', password: '' })

    expect(asyncThunk.dispatch).not.toHaveBeenCalledWith(userActions.setUser(userResponse))
    expect(asyncThunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toEqual('rejected')
  })
})
