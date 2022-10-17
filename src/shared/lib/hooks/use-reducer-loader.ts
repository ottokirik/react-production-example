import { useEffect } from 'react'

import { ReduxStoreWithManager } from 'app/providers/store-provider'
import { StateSchemaKey } from 'app/providers/store-provider/config/state-schema'
import { useStore } from 'react-redux'

import { Reducer } from '@reduxjs/toolkit'

export const useReducerLoader = (reducerName: StateSchemaKey, reducer: Reducer): void => {
  const store = useStore() as ReduxStoreWithManager

  useEffect(() => {
    store.reducerManager.add(reducerName, reducer)

    return () => {
      store.reducerManager.remove(reducerName)
    }
  }, [store.reducerManager, reducerName, reducer])
}
