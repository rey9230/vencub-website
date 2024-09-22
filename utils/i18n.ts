// src/i18n.ts
import i18n, { LanguageDetectorModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Custom language detector
const languageDetector: LanguageDetectorModule = {
    type: 'languageDetector',
    detect: () => {
        // Only execute this in the browser
        if (typeof window !== 'undefined') {
            // Check localStorage first
            const storedLanguage = localStorage.getItem('i18nextLng');
            if (storedLanguage) {
                return storedLanguage.split('-')[0]; // Return language part
            }

            // Check cookies next
            const cookieLanguage = document.cookie
                .split('; ')
                .find(row => row.startsWith('i18next='))
                ?.split('=')[1];
            if (cookieLanguage) {
                return cookieLanguage.split('-')[0]; // Return language part
            }
        }

        // Default fallback language
        return 'en'; // Change this to your default language if necessary
    },
    init: () => {},
    cacheUserLanguage: (language: string) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('i18nextLng', language); // Cache the language in localStorage
            document.cookie = `i18next=${language}; path=/;`; // Cache the language in cookies
        }
    },
};

i18n
    .use(HttpBackend)
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
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
