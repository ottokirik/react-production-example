import { useCallback, useState } from 'react'

interface UseToggleFlagReturnType {
  flag: boolean
  toggleFlag: () => void
  setFlagToTrue: () => void
  setFlagToFalse: () => void
}

export const useToggleFlag = (): UseToggleFlagReturnType => {
  const [isFlag, setIsFlag] = useState<boolean>(false)

  const handleToggleFlag = useCallback(() => setIsFlag((prev) => !prev), [])
  const handleFlagToTrue = useCallback(() => setIsFlag(true), [])
  const handleFlagToFalse = useCallback(() => setIsFlag(false), [])

  return {
    flag: isFlag,
    toggleFlag: handleToggleFlag,
    setFlagToTrue: handleFlagToTrue,
    setFlagToFalse: handleFlagToFalse,
  }
}
