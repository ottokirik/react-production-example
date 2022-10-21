import { useEffect } from 'react'

import { ReduxStoreWithManager } from 'app/providers/store-provider'
import { StateSchemaKey } from 'app/providers/store-provider/config/state-schema'
import { useStore } from 'react-redux'

import { Reducer } from '@reduxjs/toolkit'
import { useLogActions } from './use-log-actions'

export const useReducerLoader = (reducerName: StateSchemaKey, reducer: Reducer, holdState: boolean = false): void => {
  const store = useStore() as ReduxStoreWithManager
  const { initAction, destroyAction } = useLogActions(reducerName)

  useEffect(() => {
    store.reducerManager.add(reducerName, reducer)
    initAction()

    return () => {
      if (holdState) return
      store.reducerManager.remove(reducerName)
      destroyAction()
    }
  }, [store.reducerManager, reducerName, reducer, initAction, destroyAction, holdState])
}
