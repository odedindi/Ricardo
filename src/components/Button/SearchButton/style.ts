import styled from 'styled-components';

export const Button = styled.button`
	height: 2.5rem;
	width: 6.5rem;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;

	text-transform: uppercase;
	font-weight: bold;
	font-size: 0.65rem;
	color: ${({ disabled, theme }) =>
		disabled ? 'lightgray' : theme.colors.blue};

	border: solid 1px
		${({ disabled, theme }) =>
			disabled ? 'lightgray' : theme.colors.elementBorder};
	border-radius: 0.125rem;

	pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

	transition: all 0.2s ease-in-out;

	&:active {
		transform: scale(0.96);
		transition: 0.125s;
	}
`;
