import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/theme'
import { ThemeDecorator } from 'shared/config/storybook'
import { ThemeSwitcher } from './theme-switcher'

const meta: ComponentMeta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
}

export default meta

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
