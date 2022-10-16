import { FC, useEffect, useState } from 'react'

import { Children } from 'shared/types'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/theme-context'

const setBodyTheme = (theme: Theme): void => {
  document.body.className = theme
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT

export const ThemeProvider: FC<Children> = ({ children }) => {
  const [theme, setTheme] = useState<Theme | null>(defaultTheme)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    setBodyTheme(newTheme)
    setTheme(newTheme)
  }

  const handleSetTheme = (theme: Theme): void => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    setBodyTheme(theme)
    setTheme(theme)
  }

  const defaultProps = { theme, toggleTheme, setTheme: handleSetTheme }

  useEffect(() => {
    setBodyTheme(defaultTheme)
  }, [])

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
