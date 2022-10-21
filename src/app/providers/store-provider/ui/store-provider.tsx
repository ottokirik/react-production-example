import { FC } from 'react'

import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Children } from 'shared/types'

import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'

import { StateSchema } from '../config/state-schema'
import { createAppStore } from '../config/store'

type StoreProviderProps = {
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
} & Children

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
  const navigate = useNavigate()
  return (
    <Provider
      store={createAppStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>, navigate)}
    >
      {children}
    </Provider>
  )
}
