import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/theme'
import { ThemeDecorator } from 'shared/config/storybook'
import { SideBar } from './side-bar'

const meta: ComponentMeta<typeof SideBar> = {
  title: 'widgets/SideBar',
  component: SideBar,
}

export default meta

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />

export const LightBar = Template.bind({})

export const DarkBar = Template.bind({})
DarkBar.decorators = [ThemeDecorator(Theme.DARK)]
