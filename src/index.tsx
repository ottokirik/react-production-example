import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import './index.sass';

const htmlRootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(htmlRootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
