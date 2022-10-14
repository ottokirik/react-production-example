import { FC, useEffect, useState } from 'react'

import { Children } from 'shared/types'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/theme-context'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT

export const ThemeProvider: FC<Children> = ({ children }) => {
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
    body.className = theme
  }, [theme])

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
