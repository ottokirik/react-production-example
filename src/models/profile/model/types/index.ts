import { Country, Currency } from 'shared/constants/common'

export interface Profile {
  firstName: string | null
  lastName: string | null
  age: number | null
  currency: Currency | null
  country: Country | null
  city: string | null
  userName: string | null
  avatar: string | null
}

export interface ProfileSchema {
  data: Profile | undefined
  isLoading: boolean
  isError: boolean
  isReadonly: boolean
}
