import { useTheme } from 'app/providers/theme/';
import { classNames } from 'shared/lib/class-names';
import { NavBar } from 'widgets/nav-bar';
import { SideBar } from 'widgets/side-bar';

import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames({ cls: 'app', adds: [theme as string] })}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <div className="content">
          <AppRouter />
        </div>
      </div>
    </div>
  );
};
