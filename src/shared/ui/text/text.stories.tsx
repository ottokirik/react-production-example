import { Theme } from 'app/providers/theme'
import { ThemeDecorator } from 'shared/config/storybook'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Text } from './text'

const meta: ComponentMeta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
}

export default meta

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const TextLight = Template.bind({})
TextLight.args = {
  title: 'Sint dolore eiusmod mollit duis reprehenderit culpa sint fugiat est culpa voluptate.',
  text: 'Culpa occaecat veniam veniam proident tempor enim sit elit aliquip Lorem deserunt velit reprehenderit.',
}

export const TextTitle = Template.bind({})
TextTitle.args = {
  title: 'Sint dolore eiusmod mollit duis reprehenderit culpa sint fugiat est culpa voluptate.',
}

export const TextText = Template.bind({})
TextText.args = {
  text: 'Culpa occaecat veniam veniam proident tempor enim sit elit aliquip Lorem deserunt velit reprehenderit.',
}

export const TextDark = Template.bind({})
TextDark.args = {
  title: 'Sint dolore eiusmod mollit duis reprehenderit culpa sint fugiat est culpa voluptate.',
  text: 'Culpa occaecat veniam veniam proident tempor enim sit elit aliquip Lorem deserunt velit reprehenderit.',
}
TextDark.decorators = [ThemeDecorator(Theme.DARK)]
