import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import firebase from './firebase';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

console.log(firebase);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
