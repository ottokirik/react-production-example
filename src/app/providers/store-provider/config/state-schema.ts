import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { UserSchema } from 'models/user'
import { LoginSchema } from 'features/auth-by-username'
import { ProfileSchema } from 'models/profile'

export interface StateSchema {
  user: UserSchema
  login?: LoginSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema, AnyAction> {
  reducerManager: ReducerManager
}
