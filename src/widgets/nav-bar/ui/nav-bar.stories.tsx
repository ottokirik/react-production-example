import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/theme'
import { ThemeDecorator } from 'shared/config/storybook'
import { NavBar } from './nav-bar'

const meta: ComponentMeta<typeof NavBar> = {
  title: 'widgets/NavBar',
  component: NavBar,
}

export default meta

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />

export const LightBar = Template.bind({})

export const DarkBar = Template.bind({})
DarkBar.decorators = [ThemeDecorator(Theme.DARK)]
