import './app/styles/index.sass'
import 'shared/config/i18n'

import { App } from 'app/app'
import { ThemeProvider } from 'app/providers/theme'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'app/providers/error-boundary/idenx'

const htmlRootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(htmlRootElement)

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
