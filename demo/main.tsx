import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import App from './App';
import AppOld from './AppOld';

/* legacy mode
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
*/
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppOld />
  </React.StrictMode>,
);
