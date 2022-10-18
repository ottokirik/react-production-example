/* eslint-disable react/display-name */
import { StateSchema } from 'app/providers/store-provider'
import { Provider } from 'react-redux'

import { configureStore, DeepPartial, EnhancedStore, ReducersMapObject } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'

import { userReducer } from 'models/user'

const createReduxStore = (initialState?: StateSchema): EnhancedStore<StateSchema> => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
  }

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: IS_DEV,
    preloadedState: initialState,
  })
}

export const StoreDecorator =
  (initialState?: DeepPartial<StateSchema>) =>
  (StoryComponent: Story): JSX.Element =>
    (
      <Provider store={createReduxStore(initialState as StateSchema)}>
        <StoryComponent />
      </Provider>
    )
