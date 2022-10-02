import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Loader } from './loader'

const meta: ComponentMeta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
}

export default meta

const Template: ComponentStory<typeof Loader> = () => <Loader />

export const Standard = Template.bind({})
