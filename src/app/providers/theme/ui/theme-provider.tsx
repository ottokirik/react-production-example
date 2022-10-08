import { FC, ReactNode, useEffect, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/theme-context'

interface ThemeProviderProps {
  children?: ReactNode
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    setTheme(newTheme)
  }

  const handleSetTheme = (theme: Theme): void => setTheme(theme)

  const defaultProps = { theme, toggleTheme, setTheme: handleSetTheme }

  useEffect(() => {
    const body = document.body
    const prevClassName = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

    body.classList.remove(prevClassName)
    body.classList.add(theme)
  }, [theme])

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
