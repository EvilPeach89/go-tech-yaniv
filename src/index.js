import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QuestionnaireContextProvider } from './store/questionnaire-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuestionnaireContextProvider>
    <App />
  </QuestionnaireContextProvider>
);
