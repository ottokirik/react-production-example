import { StoreProvider } from 'app/providers/store-provider'

import { Story } from '@storybook/react'

export const StoreDecorator = (StoryComponent: Story): JSX.Element => (
  <StoreProvider>
    <StoryComponent />
  </StoreProvider>
)
