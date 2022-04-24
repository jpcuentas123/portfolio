import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import transEn from './locales/en/translation.json';
import transEs from './locales/es/translation.json';
import DEFAULT_FALLBACK_LANG from './constanst';

i18next
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
        resources: {
            es: transEs,
            en: transEn,
        },
        fallbackLng: DEFAULT_FALLBACK_LANG,
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();