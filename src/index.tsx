import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./global/index.scss";
import { FormProvider } from './context/FormContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
);
