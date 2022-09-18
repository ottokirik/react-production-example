import { useTheme } from 'app/providers/theme/';
import { classNames } from 'shared/lib/class-names';
import { NavBar } from 'widgets/nav-bar';

import { AppRouter } from './providers/router';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames({ cls: 'app', adds: [theme as string] })}>
      <button type="button" onClick={toggleTheme}>
        Тема
      </button>
      <NavBar />
      <AppRouter />
    </div>
  );
};
