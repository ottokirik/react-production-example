import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { StateSchema } from '../config/state-schema'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
  children: ReactNode
  initialState?: StateSchema
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps): JSX.Element => {
  return <Provider store={createReduxStore(initialState)}>{children}</Provider>
}
