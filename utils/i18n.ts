// src/i18n.ts
import i18n, { LanguageDetectorModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Custom language detector
const languageDetector: LanguageDetectorModule = {
    type: 'languageDetector',
    detect: () => {
        const lang = navigator.language || 'es'; // Fallback to 'en' if no language is detected
        return lang.split('-')[0]; // Return only the language part
    },
    init: () => {},
    cacheUserLanguage: () => {},
};

i18n
    .use(HttpBackend)
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            //loadPath: 'http://localhost:3000/locales/{{lng}}/translation.json', // Use a full URL
            loadPath: 'https://www.vencub.com/locales/{{lng}}/translation.json', // Use a full URL
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['cookie'],
            lookupQuerystring: 'lang',
            lookupCookie: 'i18next',
        },
    });

export default i18n;
