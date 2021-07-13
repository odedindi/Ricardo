import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

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
        const { getByTestId, getByRole } = renderPage(theme);
    
		type TestElement = Document | Element | Window | Node

		const checkInputValue = (event: TestElement, inputValue: string): boolean => screen.getByDisplayValue(inputValue) === event;
        
		const searchInput = getByRole('textbox');
        const searchButton = getByTestId('searchButton');
        expect(searchButton).toHaveAttribute('disabled');
		expect(searchButton).toBeDisabled();
        fireEvent.change(searchInput, { target: { value: 'some text'}})
        expect(checkInputValue(searchInput, 'some text')).toBe(true)
		expect(searchButton).not.toHaveAttribute('disabled');
		expect(searchButton).not.toBeDisabled();
    });
});

