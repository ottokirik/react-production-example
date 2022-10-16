import { FC, FormEvent, InputHTMLAttributes, useRef } from 'react'

import { useAppDispatch, useAppSelector } from 'app/providers/store-provider'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/class-names'
import { ClassName } from 'shared/types'
import { Button, ButtonTheme, Input, Text } from 'shared/ui'

import { getLoginState } from '../../model/selectors'
import { loginByEmail } from '../../model/services/login-by-email'
import css from './login-form.module.sass'

enum LoginFields {
  EMAIL = 'email',
  PASSWORD = 'password',
}

const inputsConfig: Record<string, InputHTMLAttributes<HTMLInputElement>> = {
  [LoginFields.EMAIL]: {
    required: true,
    type: 'email',
    name: LoginFields.EMAIL,
    autoFocus: true,
  },
  [LoginFields.PASSWORD]: {
    required: true,
    type: 'password',
    name: LoginFields.PASSWORD,
    pattern: '^[A-Za-z0-9]{3,32}',
  },
}

type LoginFormProps = {
  onClose?: () => void
} & ClassName

export const LoginForm: FC<LoginFormProps> = ({ className = '', onClose }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { isLoading, error } = useAppSelector(getLoginState)

  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const { current: form } = formRef

    if (form === null) return

    const formData = new FormData(form)

    const email = formData.get(LoginFields.EMAIL) as string
    const password = formData.get(LoginFields.PASSWORD) as string

    void dispatch(loginByEmail({ email, password }))

    form.reset()
  }

  return (
    <form ref={formRef} className={classNames({ cls: css.container, adds: [className] })} onSubmit={handleSubmit}>
      {error === true && <Text text={t('wrongCredentials')} />}
      <fieldset className={css.inputContainer}>
        <Input {...inputsConfig[LoginFields.EMAIL]} label={`${t('email')} :`} placeholder={t('emailPlaceholder')} />
        <Input
          {...inputsConfig[LoginFields.PASSWORD]}
          label={`${t('password')} :`}
          placeholder={t('passwordPlaceholder')}
        />
      </fieldset>
      <Button type="submit" theme={ButtonTheme.OUTLINE} disabled={isLoading}>
        {t('sign-in')}
      </Button>
    </form>
  )
}
