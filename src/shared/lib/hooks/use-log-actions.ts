import { useAppDispatch } from 'app/providers/store-provider'
import { useCallback } from 'react'

interface UseLogActions {
  initAction: () => Record<string, string>
  destroyAction: () => Record<string, string>
}

export const useLogActions = (message: string): UseLogActions => {
  const dispatch = useAppDispatch()

  const initAction = useCallback(() => dispatch({ type: `@INIT ${message} reducer` }), [dispatch, message])
  const destroyAction = useCallback(() => dispatch({ type: `@DESTROY ${message} reducer` }), [dispatch, message])

  return { initAction, destroyAction }
}
