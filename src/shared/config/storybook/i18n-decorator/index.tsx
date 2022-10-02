import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18n-for-tests'

import { Story } from '@storybook/react'

export const I18nDecorator = (StoryComponent: Story): JSX.Element => (
  <I18nextProvider i18n={i18n}>
    <StoryComponent />
  </I18nextProvider>
)
