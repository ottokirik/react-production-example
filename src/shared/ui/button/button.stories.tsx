import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/theme'
import { ThemeDecorator } from 'shared/config/storybook'

import { Button, ButtonSize, ButtonTheme } from './button'

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
  theme: ButtonTheme.CLEAR,
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Outline button',
  theme: ButtonTheme.OUTLINE,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Outline button',
  theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineSmall = Template.bind({})
OutlineSmall.args = {
  children: 'Outline small button',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.SMALL,
}

export const OutlineMedium = Template.bind({})
OutlineMedium.args = {
  children: 'Outline medium button',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.MEDIUM,
}
