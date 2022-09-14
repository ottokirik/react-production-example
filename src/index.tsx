import './index.sass';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app';
import { BrowserRouter } from 'react-router-dom';

const htmlRootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(htmlRootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
