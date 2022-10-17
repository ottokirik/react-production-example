import { FC, FormEvent, InputHTMLAttributes, useRef } from 'react'

import { useAppDispatch, useAppSelector } from 'app/providers/store-provider'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/class-names'
import { ClassName } from 'shared/types'
import { Button, ButtonTheme, Input, Text } from 'shared/ui'

import { getLoginState } from '../../model/selectors'
import { loginByEmail } from '../../model/services/login-by-email'
import css from './login-form.module.sass'

enum LoginsField {
  EMAIL = 'email',
  PASSWORD = 'password',
}

const inputsConfig: Record<string, InputHTMLAttributes<HTMLInputElement>> = {
  [LoginsField.EMAIL]: {
    required: true,
    type: 'email',
    name: LoginsField.EMAIL,
    autoFocus: true,
  },
  [LoginsField.PASSWORD]: {
    required: true,
    type: 'password',
    name: LoginsField.PASSWORD,
    pattern: '^[A-Za-z0-9]{3,32}',
  },
}

type LoginFormProps = {
  onClose?: () => void
} & ClassName

const LoginForm: FC<LoginFormProps> = ({ className = '', onClose }) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { isLoading, error } = useAppSelector(getLoginState)

  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const { current: form } = formRef

    if (form === null) return

    const formData = new FormData(form)

    const email = formData.get(LoginsField.EMAIL) as string
    const password = formData.get(LoginsField.PASSWORD) as string

    void dispatch(loginByEmail({ email, password }))

    form.reset()
  }

  return (
    <form ref={formRef} className={classNames({ cls: css.container, adds: [className] })} onSubmit={handleSubmit}>
      {error === true && <Text text={t('wrongCredentials')} />}
      <fieldset className={css.inputContainer}>
        <Input {...inputsConfig[LoginsField.EMAIL]} label={`${t('email')} :`} placeholder={t('emailPlaceholder')} />
        <Input
          {...inputsConfig[LoginsField.PASSWORD]}
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

export default LoginForm
