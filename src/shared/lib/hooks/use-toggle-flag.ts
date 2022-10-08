import { useCallback, useState } from 'react'

export const useToggleFlag = (): [boolean, () => void] => {
  const [isFlag, setIsFlag] = useState<boolean>(false)

  const toggleFlag = useCallback((): void => setIsFlag((prev) => !prev), [])

  return [isFlag, toggleFlag]
}
