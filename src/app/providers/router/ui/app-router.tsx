import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteConfig } from 'shared/config/route-config';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        {RouteConfig.map((itemRoute) => (
          <Route key={itemRoute.path} {...itemRoute} />
        ))}
      </Routes>
    </Suspense>
  );
};
