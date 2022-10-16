import { UserSchema } from 'entities/user'
import { LoginSchema } from 'features/auth-by-username'

export interface StateSchema {
  user: UserSchema
  login: LoginSchema
}
