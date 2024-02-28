import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';

export default i18next
 .use(initReactI18next)
 .use(LanguageDetector)
 .init({
  resources: {
   'pt-BR': {
    translation: ptBR,
   },
   'en': {
    translation: enUS,
   },
  },
  supportedLngs: ['en', 'pt-BR'],
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
 });
