import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/theme'
import { ThemeDecorator } from 'shared/config/storybook'
import { DisplayError } from './display-error'

const meta: ComponentMeta<typeof DisplayError> = {
  title: 'widgets/DisplayError',
  component: DisplayError,
}

export default meta

const Template: ComponentStory<typeof DisplayError> = (args) => <DisplayError />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
