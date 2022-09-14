import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageLazy, MainPageLazy } from './pages';

export const App = () => {
  return (
    <div>
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
