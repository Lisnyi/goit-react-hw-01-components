import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from 'common';
import { App } from 'components';
import { ThemeProvider } from "styled-components";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
