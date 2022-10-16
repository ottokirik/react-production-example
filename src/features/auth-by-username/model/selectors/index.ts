import { StateSchema } from 'app/providers/store-provider/config/state-schema'

import { LoginSchema } from '../types/login-schema'

export const getLoginState = (state: StateSchema): LoginSchema => state.login