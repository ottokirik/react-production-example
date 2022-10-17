import { lazy } from 'react'

export const LoginFormLazy = lazy(async () => await import('./login-form'))
