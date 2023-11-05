import React from 'react';
import ReactDOM from 'react-dom/client';
import "./global/index.scss";
import { FormProvider } from './context/FormContext';
import { Router } from './router';
import './i18n/config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <FormProvider>
      <Router />
    </FormProvider>
  </React.StrictMode>
);
