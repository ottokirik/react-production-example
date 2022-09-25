import { classNames } from 'shared/lib/class-names'
import './loader.sass'

interface LoaderProps {
  className?: string
}

export const Loader = ({ className = '' }: LoaderProps): JSX.Element => (
  <div className={classNames({ cls: 'lds-ellipsis', adds: [className] })}>
    <div />
    <div />
    <div />
    <div />
  </div>
)
