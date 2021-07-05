// ======================== react =========================
import React from 'react';
import ReactDOM from 'react-dom';
// ======================== styles ========================
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from './styles'
// ====================== components ======================
import Routes from './routes';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
