import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import global_en from './Translations/en/global.json'
import global_gr from './Translations/gr/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom'
i18next.init({
  interpolation: {escapValue: false},
  lng: "en",
  resources: {
    en: {
      global:global_en,
    },
    gr: {
     global: global_gr,
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
