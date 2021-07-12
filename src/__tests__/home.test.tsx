import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import { theme } from '../styles';
import Logo from '../components/Logo';
import HomePage from '../pages/home';

describe('<HomePage/>', () => {
	const renderPage = (theme: DefaultTheme) =>
		render(
			<ThemeProvider theme={theme}>
				<Logo />
				<HomePage />
			</ThemeProvider>,
			{ wrapper: MemoryRouter },
		);

	test('render page successfuly, with Ricardo logo, search input field and a disabled button', async () => {
		const { getByTestId } = renderPage(theme);
		const logo = getByTestId('logo');
		expect(logo).toBeInTheDocument();
		const searchInput = getByTestId('searchInput');
		expect(searchInput).toBeInTheDocument();
		const searchButton = getByTestId('searchButton');
		expect(searchButton).toBeInTheDocument();
		expect(searchButton).toBeDisabled();
	});


    test('when any input is entered to the input field the search button becomes clickable', async () => {
        const { getByTestId } = renderPage(theme);
    
        const searchInput = getByTestId('searchInput');
        const searchButton = getByTestId('searchButton');
        expect(searchButton).toBeDisabled();
        fireEvent.change(searchInput, { target: { searchText: 'some text'}})
        expect(searchButton).not.toBeDisabled();

    });
});

