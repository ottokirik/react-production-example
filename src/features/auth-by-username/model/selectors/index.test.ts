import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/store-provider'
import { getLoginStateSelector } from '.'

describe('login selectors', () => {
  test('should return login state', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: false,
        error: false,
      },
    }

    const result = {
      isLoading: false,
      error: false,
    }

    expect(getLoginStateSelector(state as StateSchema)).toEqual(result)
  })

  test('should return empty object with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginStateSelector(state as StateSchema)).toEqual({})
  })
})
