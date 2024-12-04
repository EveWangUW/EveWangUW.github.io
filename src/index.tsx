import * as React from 'react';
import { createRoot } from 'react-dom/client'; // Correct way to import ReactDOM with TypeScript
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!); // Ensure the container exists
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();