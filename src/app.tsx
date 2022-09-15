import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from './helpers/class-names';
import { AboutPageLazy, MainPageLazy } from './pages';
import { useTheme } from './theme/theme-context';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme as string])}>
      <button type="button" onClick={toggleTheme}>
        Тема
      </button>
      <div>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
      </div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageLazy />} />
          <Route path="/" element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
