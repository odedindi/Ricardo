import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
        brand: '#df772f',
        elementBorder: '#b9c2e7',
        background: '#fafafa',
        header: '#0a1f44',
        paragraph: '#343D48',
        anchor: '#356b17'

    },
};

export const GlobalStyle = createGlobalStyle `
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${ theme.colors.background };
    } 

`