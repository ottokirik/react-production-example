import { FC } from 'react'

import { Provider } from 'react-redux'
import { Children } from 'shared/types'

import { StateSchema } from '../config/state-schema'
import { createReduxStore } from '../config/store'

type StoreProviderProps = {
  initialState?: StateSchema
} & Children

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
  return <Provider store={createReduxStore(initialState)}>{children}</Provider>
}
