import * as React from 'react';
import { createRoot } from 'react-dom/client'; // Correct way to import ReactDOM with TypeScript
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

const container = document.getElementById('root');
const root = createRoot(container!); // Ensure the container exists

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();