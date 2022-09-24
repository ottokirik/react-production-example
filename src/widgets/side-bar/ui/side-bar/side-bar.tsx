import { useState } from 'react';
import { classNames } from 'shared/lib/class-names';
import { LangSwitcher } from 'widgets/lang-switcher';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import classes from './side-bar.module.sass';

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className = '' }: SideBarProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className={classNames({ cls: classes.sideBarContainer, mods: { [classes.opened]: isOpen } })}>
      <aside className={classNames({ cls: classes.sideBar, mods: { [classes.opened]: isOpen }, adds: [className] })}>
        <button className={classes.button} type="button" onClick={handleToggle}>
          Переключить
        </button>
        <div className={classes.switchers}>
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
        SideBar
      </aside>
    </div>
  );
};
