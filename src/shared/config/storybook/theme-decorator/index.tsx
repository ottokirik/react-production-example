/* eslint-disable react/display-name */
import { Story } from '@storybook/react'
import { Theme, ThemeProvider, useTheme } from 'app/providers/theme'
import { ReactNode, useEffect } from 'react'

interface SwitchThemeProps {
  children: ReactNode
  theme: Theme
}

const SwitchTheme = ({ children, theme }: SwitchThemeProps): JSX.Element => {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme(theme)
  }, [theme, setTheme])

  return <div className="app">{children}</div>
}

export const ThemeDecorator =
  (theme: Theme) =>
  (StoryComponent: Story): JSX.Element => {
    return (
      <ThemeProvider>
        <SwitchTheme theme={theme}>
          <StoryComponent />
        </SwitchTheme>
      </ThemeProvider>
    )
  }
