import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'

import './i18n';
import { I18nextProvider } from 'react-i18next';

createRoot(document.getElementById('root')).render(<BrowserRouter><I18nextProvider><App /></I18nextProvider></BrowserRouter>);
