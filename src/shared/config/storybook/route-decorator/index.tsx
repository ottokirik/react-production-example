import 'app/styles/index.sass'

import { BrowserRouter } from 'react-router-dom'

import { Story } from '@storybook/react'

export const RouteDecorator = (StoryComponent: Story): JSX.Element => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
)
