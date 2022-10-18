import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { FC } from 'react'

import { Provider } from 'react-redux'
import { Children } from 'shared/types'
import { StateSchema } from '../config/state-schema'

import { createAppStore } from '../config/store'

type StoreProviderProps = {
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
} & Children

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => (
  <Provider store={createAppStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>)}>
    {children}
  </Provider>
)
