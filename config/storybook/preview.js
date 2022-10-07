import { addDecorator } from '@storybook/react'
import { RouteDecorator, StyleDecorator, ThemeDecorator } from '../../src/shared/config/storybook'
import { Theme } from '../../src/app/providers/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouteDecorator)
