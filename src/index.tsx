import './app/styles/index.sass'
import 'shared/config/i18n'

import React from 'react'

import { App } from 'app/app'
import { ErrorBoundary } from 'app/providers/error-boundary/idenx'
import { StoreProvider } from 'app/providers/store-provider'
import { ThemeProvider } from 'app/providers/theme'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const htmlRootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(htmlRootElement)

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <StoreProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </StoreProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
