import { FC } from 'react'

import { Modal } from 'shared/ui'
import { ModalProps } from 'shared/ui/modal/modal'

import { LoginForm } from '../login-form/login-form'

export const LoginModal: FC<Omit<ModalProps, 'children'>> = ({ className = '', isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <LoginForm />
    </Modal>
  )
}
