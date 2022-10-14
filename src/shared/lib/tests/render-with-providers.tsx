import { ReactNode } from 'react'

import { StoreProvider } from 'app/providers/store-provider'
import { StateSchema } from 'app/providers/store-provider/config/state-schema'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18n from 'shared/config/i18n/i18n-for-tests'

import { render, RenderResult } from '@testing-library/react'

export interface RenderWithProvidersOptions {
  route?: string
  initialState?: StateSchema
}

export const renderWithProviders = (component: ReactNode, options: RenderWithProvidersOptions = {}): RenderResult => {
  const { route = '/', initialState } = options
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  )
}
