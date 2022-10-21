import { Country, Currency } from 'shared/constants/common'

export interface Profile {
  firstName: string
  lastName: string
  age: number
  currency: Currency
  country: Country
  city: string
  userName: string
  avatar: string
}

export interface ProfileSchema {
  data: Profile | undefined
  isLoading: boolean
  isError: boolean
  isReadonly: boolean
}
