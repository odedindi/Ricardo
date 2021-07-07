// ======================== react =========================
import React from 'react';
import ReactDOM from 'react-dom';
// ======================== styles ========================
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from './styles'
// ======================== store =========================
import { StoreProvider } from './store';
// ====================== components ======================
import Routes from './routes';
// ========================================================



ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider theme={ theme }>
          <GlobalStyle />
          <Routes/>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
