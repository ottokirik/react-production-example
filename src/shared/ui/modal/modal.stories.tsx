import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/theme'
import { ThemeDecorator } from 'shared/config/storybook'

import { Modal } from './modal'

const meta: ComponentMeta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
}

export default meta

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const ModalLight = Template.bind({})
ModalLight.args = {
  children: 'Dolore minim consectetur id mollit reprehenderit.',
  isOpen: true,
  onClose: () => null,
}

export const ModalDark = Template.bind({})
ModalDark.args = {
  children: 'Dolore minim consectetur id mollit reprehenderit.',
  isOpen: true,
  onClose: () => null,
}
ModalDark.decorators = [ThemeDecorator(Theme.DARK)]
