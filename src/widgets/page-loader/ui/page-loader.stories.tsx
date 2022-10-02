import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/theme'
import { ThemeDecorator } from 'shared/config/storybook'
import { PageLoader } from './page-loader'

const meta: ComponentMeta<typeof PageLoader> = {
  title: 'widgets/PageLoader',
  component: PageLoader,
}

export default meta

const Template: ComponentStory<typeof PageLoader> = () => <PageLoader />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
