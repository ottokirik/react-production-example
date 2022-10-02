import { classNames } from 'shared/lib/class-names'

import classes from './nav-bar.module.sass'

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className = '' }: NavBarProps): JSX.Element => {
  return <nav className={classNames({ cls: classes.navBar, adds: [className] })}></nav>
}
