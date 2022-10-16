/* eslint-disable prettier/prettier */
import { addDecorator } from '@storybook/react'

import { Theme } from '../../src/app/providers/theme'
import {
  I18NDecorator, RouteDecorator, StoreDecorator, StyleDecorator, ThemeDecorator,
} from '../../src/shared/config/storybook'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StoreDecorator)
addDecorator(I18NDecorator)
addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouteDecorator)
