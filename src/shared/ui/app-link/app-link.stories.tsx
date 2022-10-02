import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AppLink, AppLinkTheme } from './app-link'

const meta: ComponentMeta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
}

export default meta

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Standard = Template.bind({})
Standard.args = {
  children: 'AppLink',
  theme: AppLinkTheme.PRIMARY,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'AppLink',
  theme: AppLinkTheme.SECONDARY,
}
