import { useState } from 'react'

export const useToggleFlag = (): [boolean, () => void] => {
  const [isFlag, setIsFlag] = useState<boolean>(false)

  const toggleFlag = (): void => setIsFlag(!isFlag)

  return [isFlag, toggleFlag]
}
