import './app/styles/index.sass'
import 'shared/config/i18n'

import { App } from 'app/app'
import { ThemeProvider } from 'app/providers/theme'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const htmlRootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(htmlRootElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
