import './app/styles/index.sass'
import 'shared/config/i18n'

import { App } from 'app/app'
import { ErrorBoundary } from 'app/providers/error-boundary/idenx'
import { ThemeProvider } from 'app/providers/theme'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/store-provider'

const htmlRootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(htmlRootElement)

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>
)
