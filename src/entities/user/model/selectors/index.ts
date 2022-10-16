import { StateSchema } from 'app/providers/store-provider'

import { User } from '../types/user'

export const getUserAuthData = (state: StateSchema): User | undefined => state.user.authData
