// ======================== react =========================
import React from 'react';
import ReactDOM from 'react-dom';
// ======================== styles ========================
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
// ====================== components ======================
import Routes from './routes';
// ========================================================

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
