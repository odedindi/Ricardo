import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    colors: {
        background: '#fafafa',
        blue: '#8699f0',
        brand: '#ef7310',
        elementBorder: '#b9c2e7',
    },
};

export const GlobalStyle = createGlobalStyle `
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'sans-serif', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${ theme.colors.background };
    };
`;