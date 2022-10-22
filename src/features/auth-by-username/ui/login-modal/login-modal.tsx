import { FC } from 'react'

import { Modal } from 'shared/ui'
import { ModalProps } from 'shared/ui/modal/modal'

import { LoginFormLazy as LoginForm } from '../login-form/login-form.lazy'

export const LoginModal: FC<Omit<ModalProps, 'children'>> = ({ className, isOpen, onClose }) => {
  return (
    <Modal className={className} isOpen={isOpen} onClose={onClose}>
      <LoginForm onSuccess={onClose} />
    </Modal>
  )
}
