/* eslint-disable react/display-name */
import { StateSchema, StoreProvider } from 'app/providers/store-provider'

import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'

export const StoreDecorator =
  (initialState?: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) =>
  (StoryComponent: Story): JSX.Element =>
    (
      <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
        <StoryComponent />
      </StoreProvider>
    )
