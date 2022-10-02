import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/theme'
import { ThemeDecorator } from 'shared/config/storybook'

import { Button, ThemeButton } from './button'

const meta: ComponentMeta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
}

export default meta

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Standard = Template.bind({})
Standard.args = {
  children: 'Button',
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Clear button',
  theme: ThemeButton.CLEAR,
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline button',
  theme: ThemeButton.OUTLINE,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Outline button',
  theme: ThemeButton.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
