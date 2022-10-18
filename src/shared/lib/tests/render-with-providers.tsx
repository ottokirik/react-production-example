import { ReactNode } from 'react'

import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18n from 'shared/config/i18n/i18n-for-tests'

import { render, RenderResult } from '@testing-library/react'
import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema, StoreProvider } from 'app/providers/store-provider'

export interface RenderWithProvidersOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
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
