import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const InputWrapper = styled.div`
	width: 85%;
	margin-right: 0.5rem;
`;

export const Input = styled(TextField)`
	background-color: ${({ theme }) => theme.colors.background};
	&:active,
	&:focus {
		background-color: ${({ theme }) => theme.colors.background};
	}
`;
