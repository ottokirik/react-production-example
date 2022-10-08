/* eslint-disable react/display-name */
import { Story } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers/theme'

export const ThemeDecorator =
  (theme: Theme) =>
  (StoryComponent: Story): JSX.Element =>
    (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    )
