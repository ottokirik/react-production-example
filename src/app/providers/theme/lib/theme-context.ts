import { createContext, useContext } from 'react'

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
}

export interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  toggleTheme: () => null,
  setTheme: () => null,
})
export const LOCAL_STORAGE_THEME_KEY = 'app/theme'

export const useTheme = (): ThemeContextProps => useContext<ThemeContextProps>(ThemeContext)
