import { StateSchema } from 'app/providers/store-provider'
import { initialProfileDataState } from '../slice/profile-slice'
import { Profile } from '../types'

const reducerName: keyof StateSchema = 'profile'

export const getProfileDataSelector = (state: StateSchema): Profile =>
  state[reducerName]?.data ?? initialProfileDataState

export const checkProfileErrorSelector = (state: StateSchema): boolean => state[reducerName]?.isError ?? false
export const checkProfileLoadingSelector = (state: StateSchema): boolean => state[reducerName]?.isLoading ?? false
export const checkProfileReadonlySelector = (state: StateSchema): boolean => state[reducerName]?.isReadonly ?? true
