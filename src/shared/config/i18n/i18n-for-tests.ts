import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    debug: false,
    resources: { ru: { translations: {} } },
  })
  .then(
    () => null,
    () => null
  )

export default i18n
