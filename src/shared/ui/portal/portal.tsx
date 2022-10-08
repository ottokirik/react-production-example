import { ReactNode, ReactPortal } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  rootElement?: HTMLElement
}

export const Portal = ({ children, rootElement = document.body }: PortalProps): ReactPortal => {
  return createPortal(children, rootElement)
}
