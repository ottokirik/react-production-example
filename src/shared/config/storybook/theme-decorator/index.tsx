import { FC, useEffect } from 'react'

import { Theme, ThemeProvider, useTheme } from 'app/providers/theme'
import { Children } from 'shared/types'

/* eslint-disable react/display-name */
import { Story } from '@storybook/react'

type SwitchThemeProps = {
  theme: Theme
} & Children

const SwitchTheme: FC<SwitchThemeProps> = ({ children, theme }: SwitchThemeProps) => {
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
