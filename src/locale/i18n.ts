import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './en.json';
import ptTranslations from './pt.json';
import esTranslations from './es.json';

// Inicialização do i18n
const initializeI18n = () => {
    i18n.use(initReactI18next).init({
        resources: {
            en: {
                ...enTranslations
            },
            pt: {
                ...ptTranslations
            },
            es: {
                ...esTranslations
            }
        },
        lng: typeof window !== 'undefined' ? localStorage.getItem('selectedLanguage') || "pt" : "pt",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });
};

initializeI18n();

export default i18n;
