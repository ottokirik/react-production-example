import { FC, useEffect, useState } from 'react'

import { Children } from 'shared/types'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/theme-context'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT

export const ThemeProvider: FC<Children> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const toggleTheme = (): void => setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)

  const handleSetTheme = (theme: Theme): void => setTheme(theme)

  const defaultProps = { theme, toggleTheme, setTheme: handleSetTheme }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    const body = document.body
    body.className = theme
  }, [theme])

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
