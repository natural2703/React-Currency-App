import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/Store'
import { Provider } from 'react-redux';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({

        lng:'eng',
        fallbackLng:'eng',
        detection:{
          order:[ 'cookie', 'localStorage', 'sessionStorage', 'htmlTag', 'path', 'subdomain'],
          caches: ['localStorage', 'cookie']
        },
        backend:{
          loadPath:'/assets/locales/{{lng}}/translation.json'        
        }
    })
const Loading = ()=>{
  return(
    <div>
      <h3>Loading.....</h3>
    </div>
  )
}

ReactDOM.render(
  <Suspense fallback={Loading}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
