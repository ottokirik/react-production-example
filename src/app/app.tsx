import { useTheme } from 'app/providers/theme/';
import { classNames } from 'shared/lib/class-names';
import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
