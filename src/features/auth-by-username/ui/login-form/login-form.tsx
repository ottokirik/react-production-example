import { FC } from 'react'

import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/class-names'
import { ClassName } from 'shared/types'
import { Button, Input } from 'shared/ui'

import css from './login-form.module.sass'

enum LoginFields {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export const LoginForm: FC<ClassName> = ({ className = '' }) => {
  const { t } = useTranslation()
  return (
    <form className={classNames({ adds: [className] })}>
      <fieldset className={css.inputContainer}>
        <Input autoFocus label={`${t('email')} :`} name={LoginFields.EMAIL} placeholder={t('emailPlaceholder')} />
        <Input label={`${t('password')} :`} name={LoginFields.PASSWORD} placeholder={t('passwordPlaceholder')} />
      </fieldset>
      <Button>{t('sign-in')}</Button>
    </form>
  )
}
