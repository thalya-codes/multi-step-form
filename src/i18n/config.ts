import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import ptBR from "./locales/pt-BR.json";
import enUS from "./locales/en-US.json";

export 
default i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            pt: {
                translation: ptBR
            },
            en: {
                translation: enUS
            }
        },
        interpolation: { escapeValue: false }
    });