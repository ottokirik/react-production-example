import 'app/styles/index.sass'
import { Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouteDecorator = (StoryComponent: Story): JSX.Element => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
)
