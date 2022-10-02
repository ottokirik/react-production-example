/* eslint-disable react/display-name */
import { Story } from '@storybook/react'
import { Theme } from 'app/providers/theme'

export const ThemeDecorator =
  (theme: Theme) =>
  (StoryComponent: Story): JSX.Element =>
    (
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    )
