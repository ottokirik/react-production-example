import { FC } from 'react'

import { Provider } from 'react-redux'
import { Children } from 'shared/types'

import { store } from '../config/store'

export const StoreProvider: FC<Children> = ({ children }) => <Provider store={store}>{children}</Provider>
