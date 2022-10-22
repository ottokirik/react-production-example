import { StateSchema } from 'app/providers/store-provider'

import { User } from '../types/user'

const reducerName: keyof StateSchema = 'user'
export const getUserAuthData = (state: StateSchema): User | undefined => state[reducerName].authData
