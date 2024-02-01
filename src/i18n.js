import i18n from 'i18next'
import LenguajeDetector from 'i18next-browser-languagedetector'
import I18NextHttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import { DEFAULT_FALLBACK_LANG } from './constants'

i18n
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .use(LenguajeDetector)
  .init({
    fallbackLng: DEFAULT_FALLBACK_LANG,
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
