import { RoutePath } from 'shared/config/route-config';
import { classNames } from 'shared/lib/class-names';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/app-link/app-link';
import { ThemeSwitcher } from 'widgets/theme-switcher';

import classes from './nav-bar.module.sass';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className = '' }: NavBarProps) => {
  return (
    <nav className={classNames({ cls: classes.navBar, adds: [className] })}>
      <ThemeSwitcher />
      <div className={classes.linksContainer}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
          О нас
        </AppLink>
      </div>
    </nav>
  );
};
